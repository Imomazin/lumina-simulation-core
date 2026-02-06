// Sales Mastery Simulation
// Core simulation engine for sales strategy and team leadership

import { CONFIGURATIONS, DIMENSION_WEIGHTS, SALES_CONSTANTS, getConfigurationById } from './config.js';
import { STAKEHOLDERS, RELATIONSHIP_DYNAMICS, getStakeholderById, getAllStakeholders } from './stakeholders.js';
import { ROUNDS, PHASE_DESCRIPTIONS, getRoundById, getRoundsByPhase } from './rounds.js';

export class SalesMasterySimulation {
  constructor(configurationId = 'ENTERPRISE_SALES') {
    this.configuration = getConfigurationById(configurationId);
    this.currentRound = 1;
    this.decisions = [];
    this.events = [];
    this.state = {};
    this.stakeholderRelationships = {};
    this.salesMetrics = {};
    this.pipelineStages = {};
    this.initializeState();
    this.initializeRelationships();
    this.initializePipeline();
  }

  initializeState() {
    this.state = { ...this.configuration.initialState };
    this.salesContext = { ...this.configuration.salesContext };
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

  initializePipeline() {
    const stages = SALES_CONSTANTS.DEAL_STAGES;
    stages.forEach((stage, index) => {
      this.pipelineStages[stage] = {
        dealCount: Math.floor(20 - index * 3),
        value: Math.floor((20 - index * 3) * this.salesContext.avgDealSize * 0.5),
        avgAge: index * 15
      };
    });

    this.salesMetrics = {
      quotaAttainment: 85,
      pipelineCoverage: 2.8,
      avgDealSize: this.salesContext.avgDealSize,
      cycleLength: this.salesContext.salesCycleLength,
      conversionRate: this.state.winRate
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
    this.updateSalesMetrics(option);

    const decision = {
      round: this.currentRound,
      phase: round.phase,
      optionId,
      optionText: option.text,
      impact: option.impact,
      timestamp: new Date().toISOString(),
      stateAfter: { ...this.state },
      metricsAfter: { ...this.salesMetrics },
      eventOccurred
    };
    this.decisions.push(decision);

    this.currentRound++;

    return {
      success: true,
      decision,
      newState: this.state,
      salesMetrics: this.salesMetrics,
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
        { type: 'DEAL_SLIP', impact: { pipelineHealth: -5, forecastAccuracy: -5 } },
        { type: 'COMPETITOR_WIN', impact: { winRate: -5, customerRelationships: -3 } },
        { type: 'KEY_REP_ISSUE', impact: { teamPerformance: -5, pipelineHealth: -3 } },
        { type: 'CUSTOMER_ESCALATION', impact: { customerRelationships: -5, accountPenetration: -3 } },
        { type: 'PIPELINE_LEAK', impact: { pipelineHealth: -8, forecastAccuracy: -3 } }
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

  updateSalesMetrics(option) {
    this.salesMetrics.quotaAttainment = Math.min(150, Math.max(50,
      this.salesMetrics.quotaAttainment + (this.state.winRate - 35) * 0.3));

    this.salesMetrics.pipelineCoverage = Math.min(5, Math.max(1.5,
      this.salesMetrics.pipelineCoverage + (this.state.pipelineHealth - 50) * 0.02));

    this.salesMetrics.conversionRate = this.state.winRate;

    this.salesMetrics.cycleLength = Math.max(15, Math.min(365,
      this.salesMetrics.cycleLength - (this.state.dealVelocity - 50) * 0.5));
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

    const quotaFactor = this.salesMetrics.quotaAttainment / 100;

    return Math.round((totalScore / maxPossible) * 100 * stakeholderFactor * (0.6 + quotaFactor * 0.4));
  }

  getRating() {
    const score = this.getScore();
    if (score >= 90) return { grade: 'A+', title: 'Sales Legend', description: 'Exceptional sales leadership and results' };
    if (score >= 80) return { grade: 'A', title: 'Sales Leader', description: 'Outstanding sales performance' };
    if (score >= 70) return { grade: 'B+', title: 'High Performer', description: 'Strong sales execution' };
    if (score >= 60) return { grade: 'B', title: 'Solid Performer', description: 'Consistent sales delivery' };
    if (score >= 50) return { grade: 'C', title: 'Developing', description: 'Building sales capabilities' };
    return { grade: 'D', title: 'Underperforming', description: 'Significant sales gaps' };
  }

  getWinRateBenchmark() {
    const winRate = this.state.winRate;
    const benchmarks = SALES_CONSTANTS.WIN_RATE_BENCHMARKS;
    if (winRate >= benchmarks.WORLD_CLASS) return 'WORLD_CLASS';
    if (winRate >= benchmarks.EXCELLENT) return 'EXCELLENT';
    if (winRate >= benchmarks.GOOD) return 'GOOD';
    if (winRate >= benchmarks.AVERAGE) return 'AVERAGE';
    return 'POOR';
  }

  getSummary() {
    return {
      configuration: this.configuration.id,
      currentRound: this.currentRound,
      phase: this.getCurrentPhase()?.name,
      state: { ...this.state },
      salesMetrics: { ...this.salesMetrics },
      score: this.getScore(),
      rating: this.getRating(),
      winRateBenchmark: this.getWinRateBenchmark(),
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
      simulation: 'Sales Mastery',
      configuration: this.configuration,
      finalState: this.state,
      finalMetrics: this.salesMetrics,
      finalScore: this.getScore(),
      finalRating: this.getRating(),
      pipelineStages: this.pipelineStages,
      decisions: this.decisions,
      events: this.events,
      stakeholderRelationships: this.stakeholderRelationships,
      completedAt: new Date().toISOString()
    };
  }
}

export { CONFIGURATIONS, STAKEHOLDERS, ROUNDS, PHASE_DESCRIPTIONS };
