// Operations Excellence Simulation
// Core simulation engine for operational efficiency and process optimization

import { CONFIGURATIONS, DIMENSION_WEIGHTS, OPERATIONS_CONSTANTS, getConfigurationById } from './config.js';
import { STAKEHOLDERS, RELATIONSHIP_DYNAMICS, getStakeholderById, getAllStakeholders } from './stakeholders.js';
import { ROUNDS, PHASE_DESCRIPTIONS, getRoundById, getRoundsByPhase } from './rounds.js';

export class OperationsExcellenceSimulation {
  constructor(configurationId = 'LEAN_TRANSFORMATION') {
    this.configuration = getConfigurationById(configurationId);
    this.currentRound = 1;
    this.decisions = [];
    this.events = [];
    this.state = {};
    this.stakeholderRelationships = {};
    this.operationalMetrics = {};
    this.improvementInitiatives = [];
    this.initializeState();
    this.initializeRelationships();
    this.initializeMetrics();
  }

  initializeState() {
    this.state = { ...this.configuration.initialState };
    this.operationalContext = { ...this.configuration.operationalContext };
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

  initializeMetrics() {
    this.operationalMetrics = {
      oee: 65,
      otif: 85,
      inventoryTurns: 8,
      defectRate: 2500, // PPM
      leadTime: 14, // days
      productivityIndex: 100
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

    // Apply impacts
    this.applyImpact(option.impact);

    // Process stakeholder reactions
    this.processStakeholderReactions(option.stakeholderReactions);

    // Check for operational events
    const eventOccurred = this.checkForEvents(option, round);

    // Update operational metrics
    this.updateOperationalMetrics(option);

    // Record decision
    const decision = {
      round: this.currentRound,
      phase: round.phase,
      optionId,
      optionText: option.text,
      impact: option.impact,
      timestamp: new Date().toISOString(),
      stateAfter: { ...this.state },
      metricsAfter: { ...this.operationalMetrics },
      eventOccurred
    };
    this.decisions.push(decision);

    // Advance round
    this.currentRound++;

    return {
      success: true,
      decision,
      newState: this.state,
      operationalMetrics: this.operationalMetrics,
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
        { type: 'EQUIPMENT_BREAKDOWN', impact: { operationalEfficiency: -5, deliveryPerformance: -3 } },
        { type: 'QUALITY_ISSUE', impact: { qualityScore: -5, costPosition: -3 } },
        { type: 'SUPPLY_DISRUPTION', impact: { supplychainResilience: -5, deliveryPerformance: -3 } },
        { type: 'SAFETY_INCIDENT', impact: { safetyRecord: -8, employeeEngagement: -3 } },
        { type: 'LABOR_ISSUE', impact: { employeeEngagement: -5, operationalEfficiency: -3 } }
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

  updateOperationalMetrics(option) {
    // Update OEE based on operational efficiency
    this.operationalMetrics.oee = Math.min(95, Math.max(40,
      this.operationalMetrics.oee + (this.state.operationalEfficiency - 60) * 0.1));

    // Update OTIF based on delivery performance
    this.operationalMetrics.otif = Math.min(99, Math.max(70,
      this.operationalMetrics.otif + (this.state.deliveryPerformance - 60) * 0.1));

    // Update defect rate based on quality score
    this.operationalMetrics.defectRate = Math.max(50, Math.min(10000,
      this.operationalMetrics.defectRate - (this.state.qualityScore - 50) * 20));

    // Update inventory turns based on supply chain resilience
    this.operationalMetrics.inventoryTurns = Math.max(4, Math.min(20,
      this.operationalMetrics.inventoryTurns + (this.state.supplychainResilience - 50) * 0.05));

    // Update productivity index
    this.operationalMetrics.productivityIndex = Math.round(
      (this.state.operationalEfficiency + this.state.processMaturity) / 2
    );
  }

  getScore() {
    let totalScore = 0;
    let maxPossible = 0;

    Object.entries(DIMENSION_WEIGHTS).forEach(([dimension, weight]) => {
      const value = this.state[dimension] || 0;
      totalScore += value * weight;
      maxPossible += 100 * weight;
    });

    // Stakeholder factor
    const avgTrust = Object.values(this.stakeholderRelationships)
      .reduce((sum, r) => sum + r.trust, 0) / Object.keys(this.stakeholderRelationships).length;
    const stakeholderFactor = avgTrust / 100;

    // Operational metrics factor
    const oeeScore = this.operationalMetrics.oee / 100;
    const otifScore = this.operationalMetrics.otif / 100;
    const qualityScore = 1 - (this.operationalMetrics.defectRate / 10000);
    const metricsFactor = (oeeScore + otifScore + qualityScore) / 3;

    return Math.round((totalScore / maxPossible) * 100 * stakeholderFactor * (0.6 + metricsFactor * 0.4));
  }

  getRating() {
    const score = this.getScore();
    if (score >= 90) return { grade: 'A+', title: 'World-Class Operations', description: 'Exceptional operational excellence achievement' };
    if (score >= 80) return { grade: 'A', title: 'Operations Leader', description: 'Outstanding operational performance' };
    if (score >= 70) return { grade: 'B+', title: 'High Performer', description: 'Strong operational capabilities' };
    if (score >= 60) return { grade: 'B', title: 'Solid Operations', description: 'Competent operational management' };
    if (score >= 50) return { grade: 'C', title: 'Developing Operations', description: 'Building operational capabilities' };
    return { grade: 'D', title: 'Operations Challenged', description: 'Significant operational gaps remain' };
  }

  getMaturityLevel() {
    const avgMaturity = this.state.processMaturity;
    const levels = OPERATIONS_CONSTANTS.PROCESS_MATURITY_LEVELS;
    const index = Math.min(4, Math.floor(avgMaturity / 20));
    return levels[index];
  }

  getSummary() {
    return {
      configuration: this.configuration.id,
      currentRound: this.currentRound,
      phase: this.getCurrentPhase()?.name,
      state: { ...this.state },
      operationalMetrics: { ...this.operationalMetrics },
      score: this.getScore(),
      rating: this.getRating(),
      maturityLevel: this.getMaturityLevel(),
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
      simulation: 'Operations Excellence',
      configuration: this.configuration,
      finalState: this.state,
      finalMetrics: this.operationalMetrics,
      finalScore: this.getScore(),
      finalRating: this.getRating(),
      maturityLevel: this.getMaturityLevel(),
      decisions: this.decisions,
      events: this.events,
      stakeholderRelationships: this.stakeholderRelationships,
      completedAt: new Date().toISOString()
    };
  }
}

export { CONFIGURATIONS, STAKEHOLDERS, ROUNDS, PHASE_DESCRIPTIONS };
