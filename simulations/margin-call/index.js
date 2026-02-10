// Margin Call Simulation
// Core simulation engine for financial crisis and restructuring management

import { CONFIGURATIONS, DIMENSION_WEIGHTS, MARGIN_CONSTANTS, getConfigurationById } from './config.js';
import { STAKEHOLDERS, RELATIONSHIP_DYNAMICS, getStakeholderById, getAllStakeholders } from './stakeholders.js';
import { ROUNDS, PHASE_DESCRIPTIONS, getRoundById, getRoundsByPhase } from './rounds.js';

export class MarginCallSimulation {
  constructor(configurationId = 'LIQUIDITY_CRISIS') {
    this.configuration = getConfigurationById(configurationId);
    this.currentRound = 1;
    this.decisions = [];
    this.events = [];
    this.state = {};
    this.stakeholderRelationships = {};
    this.financialMetrics = {};
    this.initializeState();
    this.initializeRelationships();
    this.initializeFinancialMetrics();
  }

  initializeState() {
    this.state = { ...this.configuration.initialState };
    this.financialContext = { ...this.configuration.financialContext };
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

  initializeFinancialMetrics() {
    this.financialMetrics = {
      cashRunway: this.financialContext.cashRunway,
      distressLevel: this.calculateDistressLevel(),
      restructuringProgress: 0,
      creditAccess: this.financialContext.marketAccess === 'LIMITED' ? 30 : 50,
      stakeholderConfidence: this.calculateStakeholderConfidence()
    };
  }

  calculateDistressLevel() {
    const avgLiquidity = (this.state.liquidityPosition + this.state.debtManagement) / 2;
    if (avgLiquidity >= 60) return 'WATCH';
    if (avgLiquidity >= 45) return 'CONCERN';
    if (avgLiquidity >= 30) return 'DISTRESSED';
    if (avgLiquidity >= 15) return 'CRITICAL';
    return 'DEFAULT';
  }

  calculateStakeholderConfidence() {
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
    this.updateFinancialMetrics(option);

    const decision = {
      round: this.currentRound,
      phase: round.phase,
      optionId,
      optionText: option.text,
      impact: option.impact,
      timestamp: new Date().toISOString(),
      stateAfter: { ...this.state },
      metricsAfter: { ...this.financialMetrics },
      eventOccurred
    };
    this.decisions.push(decision);

    this.currentRound++;

    return {
      success: true,
      decision,
      newState: this.state,
      financialMetrics: this.financialMetrics,
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
        { type: 'CREDITOR_ACCELERATION', impact: { liquidityPosition: -10, creditorRelations: -8 } },
        { type: 'SUPPLIER_CREDIT_CUT', impact: { operationalCashflow: -8, marketPosition: -5 } },
        { type: 'CUSTOMER_DEFECTION', impact: { operationalCashflow: -8, marketPosition: -8 } },
        { type: 'COVENANT_BREACH', impact: { debtManagement: -10, riskExposure: -5 } },
        { type: 'RATING_DOWNGRADE', impact: { investorConfidence: -10, debtManagement: -5 } }
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

  updateFinancialMetrics(option) {
    this.financialMetrics.cashRunway = Math.max(0, Math.min(365,
      this.financialMetrics.cashRunway + (this.state.liquidityPosition - 40) * 0.5));

    this.financialMetrics.distressLevel = this.calculateDistressLevel();

    this.financialMetrics.restructuringProgress = Math.min(100, Math.max(0,
      (this.currentRound / 24) * 100 * ((this.state.debtManagement + this.state.recoveryTrajectory) / 100)));

    this.financialMetrics.creditAccess = Math.min(100, Math.max(0,
      this.financialMetrics.creditAccess + (this.state.creditorRelations - 50) * 0.2));

    this.financialMetrics.stakeholderConfidence = this.calculateStakeholderConfidence();
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

    const recoveryFactor = this.financialMetrics.restructuringProgress / 100;

    return Math.round((totalScore / maxPossible) * 100 * stakeholderFactor * (0.6 + recoveryFactor * 0.4));
  }

  getRating() {
    const score = this.getScore();
    if (score >= 90) return { grade: 'A+', title: 'Turnaround Master', description: 'Exceptional financial crisis management and recovery' };
    if (score >= 80) return { grade: 'A', title: 'Recovery Leader', description: 'Outstanding restructuring and stakeholder management' };
    if (score >= 70) return { grade: 'B+', title: 'Crisis Navigator', description: 'Strong financial recovery with solid execution' };
    if (score >= 60) return { grade: 'B', title: 'Restructuring Manager', description: 'Competent crisis management with challenges' };
    if (score >= 50) return { grade: 'C', title: 'Survivor', description: 'Managed to survive but significant issues remain' };
    return { grade: 'D', title: 'Default Risk', description: 'Critical financial challenges persist' };
  }

  getRecoveryStatus() {
    const progress = this.financialMetrics.restructuringProgress;
    if (progress >= 80) return 'RECOVERED';
    if (progress >= 60) return 'RECOVERING';
    if (progress >= 40) return 'RESTRUCTURING';
    if (progress >= 20) return 'STABILIZING';
    return 'CRISIS';
  }

  getSummary() {
    return {
      configuration: this.configuration.id,
      currentRound: this.currentRound,
      phase: this.getCurrentPhase()?.name,
      state: { ...this.state },
      financialMetrics: { ...this.financialMetrics },
      score: this.getScore(),
      rating: this.getRating(),
      distressLevel: this.financialMetrics.distressLevel,
      recoveryStatus: this.getRecoveryStatus(),
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
      simulation: 'Margin Call',
      configuration: this.configuration,
      finalState: this.state,
      finalMetrics: this.financialMetrics,
      finalScore: this.getScore(),
      finalRating: this.getRating(),
      distressLevel: this.financialMetrics.distressLevel,
      recoveryStatus: this.getRecoveryStatus(),
      decisions: this.decisions,
      events: this.events,
      stakeholderRelationships: this.stakeholderRelationships,
      completedAt: new Date().toISOString()
    };
  }
}

export { CONFIGURATIONS, STAKEHOLDERS, ROUNDS, PHASE_DESCRIPTIONS };
