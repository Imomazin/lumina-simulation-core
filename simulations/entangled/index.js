// Entangled Simulation
// Core simulation engine for complex stakeholder dynamics and relationship management

import { CONFIGURATIONS, DIMENSION_WEIGHTS, ENTANGLEMENT_CONSTANTS, getConfigurationById } from './config.js';
import { STAKEHOLDERS, RELATIONSHIP_DYNAMICS, getStakeholderById, getAllStakeholders } from './stakeholders.js';
import { ROUNDS, PHASE_DESCRIPTIONS, getRoundById, getRoundsByPhase } from './rounds.js';

export class EntangledSimulation {
  constructor(configurationId = 'MERGER_INTEGRATION') {
    this.configuration = getConfigurationById(configurationId);
    this.currentRound = 1;
    this.decisions = [];
    this.events = [];
    this.state = {};
    this.stakeholderRelationships = {};
    this.entanglementMetrics = {};
    this.initializeState();
    this.initializeRelationships();
    this.initializeEntanglementMetrics();
  }

  initializeState() {
    this.state = { ...this.configuration.initialState };
    this.entanglementContext = { ...this.configuration.entanglementContext };
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

  initializeEntanglementMetrics() {
    this.entanglementMetrics = {
      complexityIndex: this.entanglementContext.complexity === 'VERY_HIGH' ? 90 : 70,
      alignmentScore: this.calculateAlignmentScore(),
      conflictLevel: this.entanglementContext.conflictIntensity === 'HIGH' ? 70 : 50,
      integrationProgress: 0,
      relationshipHealth: this.calculateRelationshipHealth()
    };
  }

  calculateAlignmentScore() {
    const relationships = Object.values(this.stakeholderRelationships);
    return Math.round(relationships.reduce((sum, r) => sum + r.alignment, 0) / relationships.length);
  }

  calculateRelationshipHealth() {
    const relationships = Object.values(this.stakeholderRelationships);
    return Math.round(relationships.reduce((sum, r) => sum + (r.trust + r.satisfaction) / 2, 0) / relationships.length);
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
    this.updateEntanglementMetrics(option);

    const decision = {
      round: this.currentRound,
      phase: round.phase,
      optionId,
      optionText: option.text,
      impact: option.impact,
      timestamp: new Date().toISOString(),
      stateAfter: { ...this.state },
      metricsAfter: { ...this.entanglementMetrics },
      eventOccurred
    };
    this.decisions.push(decision);

    this.currentRound++;

    return {
      success: true,
      decision,
      newState: this.state,
      entanglementMetrics: this.entanglementMetrics,
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
        { type: 'STAKEHOLDER_DEFECTION', impact: { stakeholderAlignment: -8, trustLevel: -5 } },
        { type: 'CULTURAL_CLASH', impact: { culturalIntegration: -8, conflictResolution: -5 } },
        { type: 'SYNERGY_SHORTFALL', impact: { valueRealization: -8, operationalSynergy: -5 } },
        { type: 'COMMUNICATION_BREAKDOWN', impact: { communicationClarity: -8, trustLevel: -5 } },
        { type: 'KEY_TALENT_LOSS', impact: { operationalSynergy: -5, culturalIntegration: -5 } }
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

  updateEntanglementMetrics(option) {
    this.entanglementMetrics.alignmentScore = this.calculateAlignmentScore();

    this.entanglementMetrics.conflictLevel = Math.max(0, Math.min(100,
      this.entanglementMetrics.conflictLevel - (this.state.conflictResolution - 50) * 0.2));

    this.entanglementMetrics.integrationProgress = Math.min(100, Math.max(0,
      (this.currentRound / 24) * 100 * ((this.state.culturalIntegration + this.state.operationalSynergy) / 100)));

    this.entanglementMetrics.relationshipHealth = this.calculateRelationshipHealth();
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

    const integrationFactor = this.entanglementMetrics.integrationProgress / 100;

    return Math.round((totalScore / maxPossible) * 100 * stakeholderFactor * (0.6 + integrationFactor * 0.4));
  }

  getRating() {
    const score = this.getScore();
    if (score >= 90) return { grade: 'A+', title: 'Master Orchestrator', description: 'Exceptional stakeholder management and integration' };
    if (score >= 80) return { grade: 'A', title: 'Integration Leader', description: 'Outstanding stakeholder alignment and value creation' };
    if (score >= 70) return { grade: 'B+', title: 'Skilled Navigator', description: 'Strong stakeholder engagement and conflict resolution' };
    if (score >= 60) return { grade: 'B', title: 'Capable Integrator', description: 'Competent stakeholder management with some challenges' };
    if (score >= 50) return { grade: 'C', title: 'Struggling Navigator', description: 'Significant stakeholder challenges remain' };
    return { grade: 'D', title: 'Integration Challenged', description: 'Critical stakeholder and integration issues' };
  }

  getIntegrationStatus() {
    const progress = this.entanglementMetrics.integrationProgress;
    if (progress >= 80) return 'UNIFIED';
    if (progress >= 60) return 'INTEGRATING';
    if (progress >= 40) return 'ALIGNING';
    if (progress >= 20) return 'FRAGMENTED';
    return 'DISCONNECTED';
  }

  getSummary() {
    return {
      configuration: this.configuration.id,
      currentRound: this.currentRound,
      phase: this.getCurrentPhase()?.name,
      state: { ...this.state },
      entanglementMetrics: { ...this.entanglementMetrics },
      score: this.getScore(),
      rating: this.getRating(),
      integrationStatus: this.getIntegrationStatus(),
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
      simulation: 'Entangled',
      configuration: this.configuration,
      finalState: this.state,
      finalMetrics: this.entanglementMetrics,
      finalScore: this.getScore(),
      finalRating: this.getRating(),
      integrationStatus: this.getIntegrationStatus(),
      decisions: this.decisions,
      events: this.events,
      stakeholderRelationships: this.stakeholderRelationships,
      completedAt: new Date().toISOString()
    };
  }
}

export { CONFIGURATIONS, STAKEHOLDERS, ROUNDS, PHASE_DESCRIPTIONS };
