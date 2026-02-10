// Metamorphosis Simulation
// Core simulation engine for organizational transformation and change management

import { CONFIGURATIONS, DIMENSION_WEIGHTS, METAMORPHOSIS_CONSTANTS, getConfigurationById } from './config.js';
import { STAKEHOLDERS, RELATIONSHIP_DYNAMICS, getStakeholderById, getAllStakeholders } from './stakeholders.js';
import { ROUNDS, PHASE_DESCRIPTIONS, getRoundById, getRoundsByPhase } from './rounds.js';

export class MetamorphosisSimulation {
  constructor(configurationId = 'DIGITAL_TRANSFORMATION') {
    this.configuration = getConfigurationById(configurationId);
    this.currentRound = 1;
    this.decisions = [];
    this.events = [];
    this.state = {};
    this.stakeholderRelationships = {};
    this.transformationMetrics = {};
    this.initializeState();
    this.initializeRelationships();
    this.initializeTransformationMetrics();
  }

  initializeState() {
    this.state = { ...this.configuration.initialState };
    this.transformContext = { ...this.configuration.transformContext };
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

  initializeTransformationMetrics() {
    this.transformationMetrics = {
      overallProgress: 0,
      changeAdoption: this.state.changeReadiness,
      valueDelivered: 0,
      cultureShiftIndex: this.state.culturalShift,
      resistanceLevel: 100 - this.state.resistanceManagement
    };
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
    this.updateTransformationMetrics(option);

    const decision = {
      round: this.currentRound,
      phase: round.phase,
      optionId,
      optionText: option.text,
      impact: option.impact,
      timestamp: new Date().toISOString(),
      stateAfter: { ...this.state },
      metricsAfter: { ...this.transformationMetrics },
      eventOccurred
    };
    this.decisions.push(decision);

    this.currentRound++;

    return {
      success: true,
      decision,
      newState: this.state,
      transformationMetrics: this.transformationMetrics,
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
        { type: 'CHANGE_FATIGUE', impact: { changeReadiness: -8, executionMomentum: -5 } },
        { type: 'KEY_TALENT_LOSS', impact: { capabilityBuilding: -8, culturalShift: -5 } },
        { type: 'RESISTANCE_SURGE', impact: { resistanceManagement: -10, stakeholderBuyIn: -5 } },
        { type: 'BUDGET_PRESSURE', impact: { transformationProgress: -5, valueCapture: -5 } },
        { type: 'LEADERSHIP_MISALIGNMENT', impact: { stakeholderBuyIn: -8, executionMomentum: -5 } }
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

  updateTransformationMetrics(option) {
    this.transformationMetrics.overallProgress = Math.min(100, Math.max(0,
      (this.currentRound / 24) * 100 * (this.state.transformationProgress / 100)));

    this.transformationMetrics.changeAdoption = Math.min(100, Math.max(0,
      (this.state.changeReadiness + this.state.stakeholderBuyIn) / 2));

    this.transformationMetrics.valueDelivered = Math.min(100, Math.max(0,
      this.transformationMetrics.valueDelivered + this.state.valueCapture * 0.1));

    this.transformationMetrics.cultureShiftIndex = this.state.culturalShift;

    this.transformationMetrics.resistanceLevel = Math.max(0, Math.min(100,
      100 - this.state.resistanceManagement));
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

    const transformationFactor = this.transformationMetrics.overallProgress / 100;

    return Math.round((totalScore / maxPossible) * 100 * stakeholderFactor * (0.6 + transformationFactor * 0.4));
  }

  getRating() {
    const score = this.getScore();
    if (score >= 90) return { grade: 'A+', title: 'Transformation Master', description: 'Exceptional organizational transformation' };
    if (score >= 80) return { grade: 'A', title: 'Change Leader', description: 'Outstanding transformation execution and sustainability' };
    if (score >= 70) return { grade: 'B+', title: 'Transformation Driver', description: 'Strong transformation progress with lasting change' };
    if (score >= 60) return { grade: 'B', title: 'Change Manager', description: 'Competent transformation with room for improvement' };
    if (score >= 50) return { grade: 'C', title: 'Transformation Survivor', description: 'Partial transformation success with challenges' };
    return { grade: 'D', title: 'Change Challenged', description: 'Significant transformation difficulties' };
  }

  getTransformationStage() {
    const progress = this.transformationMetrics.overallProgress;
    if (progress >= 80) return 'TRANSFORMED';
    if (progress >= 60) return 'TRANSFORMING';
    if (progress >= 40) return 'TRANSITIONING';
    if (progress >= 20) return 'MOBILIZING';
    return 'INITIATING';
  }

  getSummary() {
    return {
      configuration: this.configuration.id,
      currentRound: this.currentRound,
      phase: this.getCurrentPhase()?.name,
      state: { ...this.state },
      transformationMetrics: { ...this.transformationMetrics },
      score: this.getScore(),
      rating: this.getRating(),
      transformationStage: this.getTransformationStage(),
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
      simulation: 'Metamorphosis',
      configuration: this.configuration,
      finalState: this.state,
      finalMetrics: this.transformationMetrics,
      finalScore: this.getScore(),
      finalRating: this.getRating(),
      transformationStage: this.getTransformationStage(),
      decisions: this.decisions,
      events: this.events,
      stakeholderRelationships: this.stakeholderRelationships,
      completedAt: new Date().toISOString()
    };
  }
}

export { CONFIGURATIONS, STAKEHOLDERS, ROUNDS, PHASE_DESCRIPTIONS };
