// Nexus Protocol Simulation
// Core simulation engine for strategic partnership and alliance management

import { CONFIGURATIONS, DIMENSION_WEIGHTS, NEXUS_CONSTANTS, getConfigurationById } from './config.js';
import { STAKEHOLDERS, RELATIONSHIP_DYNAMICS, getStakeholderById, getAllStakeholders } from './stakeholders.js';
import { ROUNDS, PHASE_DESCRIPTIONS, getRoundById, getRoundsByPhase } from './rounds.js';

export class NexusProtocolSimulation {
  constructor(configurationId = 'STRATEGIC_ALLIANCE') {
    this.configuration = getConfigurationById(configurationId);
    this.currentRound = 1;
    this.decisions = [];
    this.events = [];
    this.state = {};
    this.stakeholderRelationships = {};
    this.allianceMetrics = {};
    this.initializeState();
    this.initializeRelationships();
    this.initializeAllianceMetrics();
  }

  initializeState() {
    this.state = { ...this.configuration.initialState };
    this.allianceContext = { ...this.configuration.allianceContext };
  }

  initializeRelationships() {
    const stakeholders = getAllStakeholders();
    stakeholders.forEach(stakeholder => {
      this.stakeholderRelationships[stakeholder.id] = {
        trust: stakeholder.initialTrust,
        alignment: stakeholder.initialAlignment,
        satisfaction: 60,
        influence: stakeholder.influence,
        engagementLevel: 50
      };
    });

    RELATIONSHIP_DYNAMICS.ALLIANCES.forEach(([s1, s2]) => {
      if (this.stakeholderRelationships[s1] && this.stakeholderRelationships[s2]) {
        this.stakeholderRelationships[s1].trust += 5;
        this.stakeholderRelationships[s2].trust += 5;
      }
    });

    RELATIONSHIP_DYNAMICS.TENSIONS.forEach(([s1, s2]) => {
      if (this.stakeholderRelationships[s1] && this.stakeholderRelationships[s2]) {
        this.stakeholderRelationships[s1].alignment -= 5;
        this.stakeholderRelationships[s2].alignment -= 5;
      }
    });
  }

  initializeAllianceMetrics() {
    this.allianceMetrics = {
      partnershipHealth: this.calculatePartnershipHealth(),
      valueDelivered: 0,
      integrationLevel: this.state.operationalIntegration,
      innovationOutput: 0,
      allianceStage: 'FORMATION'
    };
  }

  calculatePartnershipHealth() {
    return Math.round((this.state.partnerAlignment + this.state.trustFoundation) / 2);
  }

  getCurrentRound() {
    return getRoundById(this.currentRound);
  }

  getCurrentPhase() {
    const round = this.getCurrentRound();
    return round ? PHASE_DESCRIPTIONS[round.phase] : null;
  }

  makeDecision(optionId) {
    const round = this.getCurrentRound();
    if (!round) return { success: false, error: 'No active round' };

    const option = round.options.find(o => o.id === optionId);
    if (!option) return { success: false, error: 'Invalid option' };

    this.applyImpact(option.impact);
    this.processStakeholderReactions(option.stakeholderReactions);
    const eventOccurred = this.checkForEvents(option, round);
    this.updateAllianceMetrics(option);

    const decision = {
      round: this.currentRound,
      phase: round.phase,
      optionId,
      optionText: option.text,
      impact: option.impact,
      timestamp: new Date().toISOString(),
      stateAfter: { ...this.state },
      metricsAfter: { ...this.allianceMetrics },
      eventOccurred
    };
    this.decisions.push(decision);

    this.currentRound++;

    return {
      success: true,
      decision,
      newState: this.state,
      allianceMetrics: this.allianceMetrics,
      nextRound: this.getCurrentRound(),
      isComplete: this.currentRound > 24
    };
  }

  applyImpact(impact) {
    Object.entries(impact).forEach(([dimension, value]) => {
      if (this.state[dimension] !== undefined) {
        this.state[dimension] = Math.max(0, Math.min(100, this.state[dimension] + value));
      }
    });
  }

  processStakeholderReactions(reactions) {
    Object.entries(reactions).forEach(([stakeholderId, change]) => {
      const relationship = this.stakeholderRelationships[stakeholderId];
      if (relationship) {
        relationship.trust = Math.max(0, Math.min(100, relationship.trust + change * 0.6));
        relationship.satisfaction = Math.max(0, Math.min(100, relationship.satisfaction + change * 0.4));
        if (change > 10) relationship.engagementLevel = Math.min(100, relationship.engagementLevel + 5);
        if (change < -10) relationship.engagementLevel = Math.max(0, relationship.engagementLevel - 5);
      }
    });
  }

  checkForEvents(option, round) {
    if (Math.random() < option.risk) {
      const eventTypes = [
        { type: 'PARTNER_MISALIGNMENT', impact: { partnerAlignment: -8, trustFoundation: -5 } },
        { type: 'VALUE_LEAKAGE', impact: { valueCreation: -8, operationalIntegration: -3 } },
        { type: 'GOVERNANCE_FAILURE', impact: { governanceEffectiveness: -8, conflictManagement: -5 } },
        { type: 'COMPETITIVE_TENSION', impact: { trustFoundation: -8, partnerAlignment: -5 } },
        { type: 'INTEGRATION_CHALLENGE', impact: { operationalIntegration: -8, valueCreation: -3 } }
      ];

      const event = eventTypes[Math.floor(Math.random() * eventTypes.length)];
      this.applyImpact(event.impact);
      this.events.push({
        round: this.currentRound,
        type: event.type,
        impact: event.impact,
        triggeredBy: option.id
      });
      return event;
    }
    return null;
  }

  updateAllianceMetrics(option) {
    this.allianceMetrics.partnershipHealth = this.calculatePartnershipHealth();

    this.allianceMetrics.valueDelivered = Math.min(100, Math.max(0,
      this.allianceMetrics.valueDelivered + this.state.valueCreation * 0.1));

    this.allianceMetrics.integrationLevel = this.state.operationalIntegration;

    this.allianceMetrics.innovationOutput = Math.min(100, Math.max(0,
      this.allianceMetrics.innovationOutput + this.state.innovationSynergy * 0.08));

    // Update alliance stage based on round
    if (this.currentRound <= 6) this.allianceMetrics.allianceStage = 'FORMATION';
    else if (this.currentRound <= 12) this.allianceMetrics.allianceStage = 'OPERATION';
    else if (this.currentRound <= 18) this.allianceMetrics.allianceStage = 'EVOLUTION';
    else this.allianceMetrics.allianceStage = 'OPTIMIZATION';
  }

  getScore() {
    let totalScore = 0;
    let maxPossible = 0;

    Object.entries(DIMENSION_WEIGHTS).forEach(([dimension, weight]) => {
      const value = this.state[dimension] || 0;
      totalScore += value * weight;
      maxPossible += 100 * weight;
    });

    const avgTrust = Object.values(this.stakeholderRelationships)
      .reduce((sum, r) => sum + r.trust, 0) / Object.keys(this.stakeholderRelationships).length;
    const stakeholderFactor = avgTrust / 100;

    const partnershipFactor = this.allianceMetrics.partnershipHealth / 100;

    return Math.round((totalScore / maxPossible) * 100 * stakeholderFactor * (0.6 + partnershipFactor * 0.4));
  }

  getRating() {
    const score = this.getScore();
    if (score >= 90) return { grade: 'A+', title: 'Alliance Master', description: 'Exceptional partnership leadership and value creation' };
    if (score >= 80) return { grade: 'A', title: 'Partnership Leader', description: 'Outstanding alliance management and execution' };
    if (score >= 70) return { grade: 'B+', title: 'Alliance Builder', description: 'Strong partnership development and collaboration' };
    if (score >= 60) return { grade: 'B', title: 'Partnership Manager', description: 'Competent alliance management with opportunities' };
    if (score >= 50) return { grade: 'C', title: 'Alliance Navigator', description: 'Partnership functioning but significant challenges' };
    return { grade: 'D', title: 'Partnership Challenged', description: 'Critical alliance issues requiring attention' };
  }

  getPartnershipStatus() {
    const health = this.allianceMetrics.partnershipHealth;
    if (health >= 80) return 'THRIVING';
    if (health >= 60) return 'HEALTHY';
    if (health >= 40) return 'DEVELOPING';
    if (health >= 20) return 'STRAINED';
    return 'CRITICAL';
  }

  getSummary() {
    return {
      configuration: this.configuration.id,
      currentRound: this.currentRound,
      phase: this.getCurrentPhase()?.name,
      state: { ...this.state },
      allianceMetrics: { ...this.allianceMetrics },
      score: this.getScore(),
      rating: this.getRating(),
      partnershipStatus: this.getPartnershipStatus(),
      decisionsCount: this.decisions.length,
      eventsCount: this.events.length,
      stakeholderHealth: this.getStakeholderHealth()
    };
  }

  getStakeholderHealth() {
    const relationships = Object.entries(this.stakeholderRelationships);
    return {
      averageTrust: Math.round(relationships.reduce((s, [, r]) => s + r.trust, 0) / relationships.length),
      averageSatisfaction: Math.round(relationships.reduce((s, [, r]) => s + r.satisfaction, 0) / relationships.length),
      criticalRelationships: relationships.filter(([, r]) => r.trust < 40).map(([id]) => id),
      strongRelationships: relationships.filter(([, r]) => r.trust >= 75).map(([id]) => id)
    };
  }

  exportResults() {
    return {
      simulation: 'Nexus Protocol',
      configuration: this.configuration,
      finalState: this.state,
      finalMetrics: this.allianceMetrics,
      finalScore: this.getScore(),
      finalRating: this.getRating(),
      partnershipStatus: this.getPartnershipStatus(),
      decisions: this.decisions,
      events: this.events,
      stakeholderRelationships: this.stakeholderRelationships,
      completedAt: new Date().toISOString()
    };
  }
}

export { CONFIGURATIONS, STAKEHOLDERS, ROUNDS, PHASE_DESCRIPTIONS };
