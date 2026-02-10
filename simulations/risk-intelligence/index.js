// Risk Intelligence Simulation - Main Module
// Integrates configurations, stakeholders, and rounds into a complete simulation

import { CONFIGURATIONS, RISK_CATEGORIES, RISK_METRICS } from './config.js';
import { STAKEHOLDERS, STAKEHOLDER_RELATIONSHIPS, getStakeholderById, calculateInfluenceScore } from './stakeholders.js';
import { ROUNDS, PHASE_DESCRIPTIONS, getRoundById, getOptionById } from './rounds.js';

export const SIMULATION_META = {
  id: 'risk-intelligence',
  name: 'Risk Intelligence',
  version: '1.0.0',
  description: 'Master the art of organizational risk management through strategic decision-making across 24 rounds of escalating complexity.',
  difficulty: 'advanced',
  estimatedDuration: '4-6 hours',
  playerCount: { min: 1, max: 8 },
  learningObjectives: [
    'Understand enterprise risk management frameworks',
    'Develop risk appetite and tolerance setting skills',
    'Navigate stakeholder dynamics in risk decisions',
    'Build crisis management capabilities',
    'Integrate risk with strategic planning'
  ],
  prerequisites: [
    'Basic understanding of business operations',
    'Familiarity with corporate governance concepts'
  ]
};

export class RiskIntelligenceSimulation {
  constructor(configurationId = 'conservative') {
    this.configuration = CONFIGURATIONS[configurationId.toUpperCase()] || CONFIGURATIONS.CONSERVATIVE;
    this.state = this.initializeState();
    this.history = [];
    this.currentRound = 1;
    this.isComplete = false;
  }

  initializeState() {
    return {
      ...this.configuration.initialState,
      financialHealth: 1.0,
      stakeholderConfidence: 0.7,
      regulatoryStanding: 0.8,
      organizationalResilience: 0.5,
      riskEvents: [],
      decisions: [],
      metrics: {
        totalRiskExposure: 0,
        mitigatedRisks: 0,
        realizedLosses: 0,
        nearMisses: 0
      }
    };
  }

  getCurrentRound() {
    return getRoundById(this.currentRound);
  }

  getAvailableOptions() {
    const round = this.getCurrentRound();
    return round ? round.options : [];
  }

  makeDecision(optionId) {
    const round = this.getCurrentRound();
    const option = getOptionById(this.currentRound, optionId);

    if (!option) {
      throw new Error(`Invalid option: ${optionId}`);
    }

    // Apply impacts
    this.applyImpact(option.impact);

    // Process stakeholder reactions
    this.processStakeholderReactions(option.stakeholderReactions);

    // Check for triggered events
    const triggeredEvents = this.checkForEvents(option);

    // Record decision
    const decision = {
      round: this.currentRound,
      optionId,
      optionLabel: option.label,
      impact: option.impact,
      stakeholderReactions: option.stakeholderReactions,
      triggeredEvents,
      stateSnapshot: { ...this.state }
    };

    this.history.push(decision);
    this.state.decisions.push(decision);

    // Advance round
    this.currentRound++;
    if (this.currentRound > 24) {
      this.isComplete = true;
    }

    return {
      decision,
      newState: this.state,
      nextRound: this.isComplete ? null : this.getCurrentRound(),
      isComplete: this.isComplete
    };
  }

  applyImpact(impact) {
    if (impact.controlMaturity) {
      this.state.controlMaturity = Math.max(0, Math.min(1, this.state.controlMaturity + impact.controlMaturity));
    }
    if (impact.riskCultureScore) {
      this.state.riskCultureScore = Math.max(0, Math.min(1, this.state.riskCultureScore + impact.riskCultureScore));
    }
    if (impact.riskBudget) {
      this.state.riskBudget += impact.riskBudget;
    }

    // Apply configuration modifiers
    const modifiers = this.configuration.modifiers;
    if (impact.controlMaturity < 0) {
      this.state.regulatoryStanding -= 0.05 * modifiers.regulatoryScrutiny;
    }
    if (impact.riskCultureScore < 0) {
      this.state.stakeholderConfidence -= 0.03 * modifiers.reputationSensitivity;
    }
  }

  processStakeholderReactions(reactions) {
    if (!reactions) return;

    const reactionScores = {
      'very_positive': 0.1,
      'positive': 0.05,
      'neutral': 0,
      'concerned': -0.03,
      'negative': -0.05,
      'very_negative': -0.1
    };

    let confidenceChange = 0;
    for (const [stakeholderId, reaction] of Object.entries(reactions)) {
      const stakeholder = getStakeholderById(stakeholderId);
      if (stakeholder) {
        confidenceChange += (reactionScores[reaction] || 0) * stakeholder.influence;
      }
    }

    this.state.stakeholderConfidence = Math.max(0, Math.min(1,
      this.state.stakeholderConfidence + confidenceChange
    ));
  }

  checkForEvents(option) {
    const events = [];
    const riskLevel = option.risk;
    const modifiers = this.configuration.modifiers;

    // Probability of adverse event based on risk level
    const eventProbability = {
      'low': 0.05,
      'medium': 0.15,
      'high': 0.30,
      'very_high': 0.50
    };

    const baseProb = eventProbability[riskLevel] || 0.1;
    const adjustedProb = baseProb * modifiers.marketVolatility;

    if (Math.random() < adjustedProb) {
      const event = this.generateRiskEvent(riskLevel);
      events.push(event);
      this.state.riskEvents.push(event);
      this.applyEventImpact(event);
    }

    return events;
  }

  generateRiskEvent(severity) {
    const eventTypes = [
      { type: 'operational_disruption', impact: 'operations' },
      { type: 'compliance_breach', impact: 'regulatory' },
      { type: 'reputational_incident', impact: 'reputation' },
      { type: 'financial_loss', impact: 'financial' },
      { type: 'cyber_incident', impact: 'security' }
    ];

    const eventType = eventTypes[Math.floor(Math.random() * eventTypes.length)];

    return {
      id: `event_${Date.now()}`,
      round: this.currentRound,
      type: eventType.type,
      impactArea: eventType.impact,
      severity,
      description: `A ${severity} severity ${eventType.type.replace('_', ' ')} has occurred.`,
      resolved: false
    };
  }

  applyEventImpact(event) {
    const severityMultiplier = {
      'low': 0.02,
      'medium': 0.05,
      'high': 0.10,
      'very_high': 0.20
    };

    const multiplier = severityMultiplier[event.severity] || 0.05;

    switch (event.impactArea) {
      case 'operations':
        this.state.organizationalResilience -= multiplier;
        break;
      case 'regulatory':
        this.state.regulatoryStanding -= multiplier;
        break;
      case 'reputation':
        this.state.stakeholderConfidence -= multiplier;
        break;
      case 'financial':
        this.state.financialHealth -= multiplier;
        this.state.metrics.realizedLosses += this.state.riskBudget * multiplier;
        break;
      case 'security':
        this.state.controlMaturity -= multiplier * 0.5;
        break;
    }

    this.state.metrics.totalRiskExposure += multiplier * 100;
  }

  getScore() {
    const weights = {
      controlMaturity: 0.2,
      riskCultureScore: 0.2,
      stakeholderConfidence: 0.2,
      regulatoryStanding: 0.15,
      organizationalResilience: 0.15,
      financialHealth: 0.1
    };

    let score = 0;
    for (const [metric, weight] of Object.entries(weights)) {
      score += (this.state[metric] || 0) * weight * 100;
    }

    return Math.round(score);
  }

  getPerformanceRating() {
    const score = this.getScore();
    if (score >= 80) return { rating: 'Exceptional', grade: 'A' };
    if (score >= 70) return { rating: 'Strong', grade: 'B' };
    if (score >= 60) return { rating: 'Adequate', grade: 'C' };
    if (score >= 50) return { rating: 'Needs Improvement', grade: 'D' };
    return { rating: 'Critical', grade: 'F' };
  }

  getSummary() {
    return {
      simulation: SIMULATION_META,
      configuration: this.configuration.name,
      currentRound: this.currentRound,
      isComplete: this.isComplete,
      state: this.state,
      score: this.getScore(),
      performance: this.getPerformanceRating(),
      decisionsCount: this.history.length,
      eventsCount: this.state.riskEvents.length
    };
  }

  exportResults() {
    return {
      meta: SIMULATION_META,
      configuration: this.configuration,
      finalState: this.state,
      history: this.history,
      score: this.getScore(),
      performance: this.getPerformanceRating(),
      completedAt: new Date().toISOString()
    };
  }
}

// Export all modules
export { CONFIGURATIONS, RISK_CATEGORIES, RISK_METRICS } from './config.js';
export { STAKEHOLDERS, STAKEHOLDER_RELATIONSHIPS } from './stakeholders.js';
export { ROUNDS, PHASE_DESCRIPTIONS } from './rounds.js';

export default RiskIntelligenceSimulation;
