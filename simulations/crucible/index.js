// Crucible Simulation
// Core simulation engine for crisis leadership under extreme pressure

import { CONFIGURATIONS, DIMENSION_WEIGHTS, CRISIS_CONSTANTS, getConfigurationById } from './config.js';
import { STAKEHOLDERS, RELATIONSHIP_DYNAMICS, getStakeholderById, getAllStakeholders } from './stakeholders.js';
import { ROUNDS, PHASE_DESCRIPTIONS, getRoundById, getRoundsByPhase } from './rounds.js';

export class CrucibleSimulation {
  constructor(configurationId = 'CORPORATE_CRISIS') {
    this.configuration = getConfigurationById(configurationId);
    this.currentRound = 1;
    this.decisions = [];
    this.events = [];
    this.state = {};
    this.stakeholderRelationships = {};
    this.crisisMetrics = {};
    this.initializeState();
    this.initializeRelationships();
    this.initializeCrisisMetrics();
  }

  initializeState() {
    this.state = { ...this.configuration.initialState };
    this.crisisContext = { ...this.configuration.crisisContext };
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

  initializeCrisisMetrics() {
    this.crisisMetrics = {
      severityLevel: CRISIS_CONSTANTS.SEVERITY_LEVELS.indexOf(this.crisisContext.severity),
      responseEffectiveness: 50,
      containmentProgress: 0,
      recoveryReadiness: 0,
      stakeholderImpact: this.calculateStakeholderImpact()
    };
  }

  calculateStakeholderImpact() {
    const relationships = Object.values(this.stakeholderRelationships);
    return Math.round(relationships.reduce((sum, r) => sum + r.trust, 0) / relationships.length);
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
    this.updateCrisisMetrics(option);

    const decision = {
      round: this.currentRound,
      phase: round.phase,
      optionId,
      optionText: option.text,
      impact: option.impact,
      timestamp: new Date().toISOString(),
      stateAfter: { ...this.state },
      metricsAfter: { ...this.crisisMetrics },
      eventOccurred
    };
    this.decisions.push(decision);

    this.currentRound++;

    return {
      success: true,
      decision,
      newState: this.state,
      crisisMetrics: this.crisisMetrics,
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
        { type: 'CRISIS_ESCALATION', impact: { crisisControl: -8, stakeholderConfidence: -5 } },
        { type: 'MEDIA_LEAK', impact: { reputationHealth: -8, communicationEffectiveness: -5 } },
        { type: 'STAKEHOLDER_DEFECTION', impact: { stakeholderConfidence: -8, resourceReserves: -3 } },
        { type: 'OPERATIONAL_FAILURE', impact: { operationalContinuity: -8, teamResilience: -3 } },
        { type: 'REGULATORY_ACTION', impact: { crisisControl: -5, reputationHealth: -5 } }
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

  updateCrisisMetrics(option) {
    this.crisisMetrics.responseEffectiveness = Math.min(100, Math.max(0,
      this.crisisMetrics.responseEffectiveness + (this.state.crisisControl - 50) * 0.2));

    this.crisisMetrics.containmentProgress = Math.min(100, Math.max(0,
      (this.currentRound / 24) * 100 * (this.state.crisisControl / 100)));

    this.crisisMetrics.recoveryReadiness = Math.min(100, Math.max(0,
      (this.state.operationalContinuity + this.state.teamResilience + this.state.resourceReserves) / 3));

    this.crisisMetrics.stakeholderImpact = this.calculateStakeholderImpact();
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

    const crisisFactor = this.crisisMetrics.responseEffectiveness / 100;

    return Math.round((totalScore / maxPossible) * 100 * stakeholderFactor * (0.6 + crisisFactor * 0.4));
  }

  getRating() {
    const score = this.getScore();
    if (score >= 90) return { grade: 'A+', title: 'Crisis Master', description: 'Exceptional crisis leadership under extreme pressure' };
    if (score >= 80) return { grade: 'A', title: 'Crisis Leader', description: 'Outstanding crisis management and recovery' };
    if (score >= 70) return { grade: 'B+', title: 'Crisis Navigator', description: 'Strong crisis response and stakeholder management' };
    if (score >= 60) return { grade: 'B', title: 'Crisis Manager', description: 'Competent crisis handling with room for improvement' };
    if (score >= 50) return { grade: 'C', title: 'Crisis Survivor', description: 'Survived the crisis with significant challenges' };
    return { grade: 'D', title: 'Crisis Casualty', description: 'Struggled to manage crisis effectively' };
  }

  getSeverityLevel() {
    const control = this.state.crisisControl;
    if (control >= 80) return 'CONTAINED';
    if (control >= 60) return 'MANAGED';
    if (control >= 40) return 'UNSTABLE';
    if (control >= 20) return 'CRITICAL';
    return 'CATASTROPHIC';
  }

  getSummary() {
    return {
      configuration: this.configuration.id,
      currentRound: this.currentRound,
      phase: this.getCurrentPhase()?.name,
      state: { ...this.state },
      crisisMetrics: { ...this.crisisMetrics },
      score: this.getScore(),
      rating: this.getRating(),
      severityLevel: this.getSeverityLevel(),
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
      simulation: 'Crucible',
      configuration: this.configuration,
      finalState: this.state,
      finalMetrics: this.crisisMetrics,
      finalScore: this.getScore(),
      finalRating: this.getRating(),
      severityLevel: this.getSeverityLevel(),
      decisions: this.decisions,
      events: this.events,
      stakeholderRelationships: this.stakeholderRelationships,
      completedAt: new Date().toISOString()
    };
  }
}

export { CONFIGURATIONS, STAKEHOLDERS, ROUNDS, PHASE_DESCRIPTIONS };
