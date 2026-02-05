// Financial Acumen Simulation - Main Module
import { CONFIGURATIONS, FINANCIAL_DIMENSIONS, VALUATION_METHODS, CAPITAL_SOURCES } from './config.js';
import { STAKEHOLDERS, FINANCE_COMMITTEES, RELATIONSHIP_DYNAMICS, getStakeholderById } from './stakeholders.js';
import { ROUNDS, PHASE_DESCRIPTIONS, getRoundById, getOptionById } from './rounds.js';

export const SIMULATION_META = {
  id: 'financial-acumen',
  name: 'Financial Acumen',
  version: '1.0.0',
  description: 'Master corporate finance through 24 rounds of capital allocation, financial strategy, and value creation decisions.',
  difficulty: 'advanced',
  estimatedDuration: '4-6 hours',
  playerCount: { min: 1, max: 6 },
  learningObjectives: [
    'Develop capital allocation expertise',
    'Master corporate finance decisions',
    'Navigate investor and creditor relationships',
    'Build financial planning capabilities',
    'Create sustainable shareholder value'
  ],
  prerequisites: ['Understanding of financial statements', 'Basic corporate finance knowledge']
};

export class FinancialAcumenSimulation {
  constructor(configurationId = 'growth_capital') {
    this.configuration = CONFIGURATIONS[configurationId.toUpperCase()] || CONFIGURATIONS.GROWTH_CAPITAL;
    this.state = this.initializeState();
    this.history = [];
    this.currentRound = 1;
    this.isComplete = false;
  }

  initializeState() {
    return {
      ...this.configuration.initialState,
      ...this.configuration.context,
      decisions: [],
      events: [],
      relationships: this.initializeRelationships(),
      metrics: { investmentsMade: 0, capitalReturned: 0, debtIssuances: 0, equityIssuances: 0 }
    };
  }

  initializeRelationships() {
    const relationships = {};
    Object.keys(STAKEHOLDERS).forEach(key => {
      relationships[STAKEHOLDERS[key].id] = { trust: 0.5, alignment: 0.5, satisfaction: 0.5 };
    });
    return relationships;
  }

  getCurrentRound() { return getRoundById(this.currentRound); }
  getAvailableOptions() { const round = this.getCurrentRound(); return round ? round.options : []; }

  makeDecision(optionId) {
    const round = this.getCurrentRound();
    const option = getOptionById(this.currentRound, optionId);
    if (!option) throw new Error(`Invalid option: ${optionId}`);

    this.applyImpact(option.impact);
    this.processStakeholderReactions(option.stakeholderReactions);
    const triggeredEvents = this.checkForEvents(option, round);

    const decision = {
      round: this.currentRound, phase: round.phase, optionId, optionLabel: option.label,
      impact: option.impact, stakeholderReactions: option.stakeholderReactions,
      triggeredEvents, stateSnapshot: { ...this.state }
    };

    this.history.push(decision);
    this.state.decisions.push(decision);
    this.currentRound++;
    if (this.currentRound > 24) this.isComplete = true;

    return { decision, newState: this.state, nextRound: this.isComplete ? null : this.getCurrentRound(), isComplete: this.isComplete };
  }

  applyImpact(impact) {
    const stateKeys = ['financialHealth', 'capitalEfficiency', 'investorConfidence', 'cashPosition', 'debtCapacity', 'forecastAccuracy'];
    stateKeys.forEach(key => {
      if (impact[key] !== undefined) this.state[key] = Math.max(0, Math.min(1, this.state[key] + impact[key]));
    });
  }

  processStakeholderReactions(reactions) {
    if (!reactions) return;
    const reactionValues = {
      'very_positive': { trust: 0.15, alignment: 0.1, satisfaction: 0.12 },
      'positive': { trust: 0.08, alignment: 0.05, satisfaction: 0.06 },
      'neutral': { trust: 0, alignment: 0, satisfaction: 0 },
      'concerned': { trust: -0.05, alignment: -0.03, satisfaction: -0.04 },
      'negative': { trust: -0.1, alignment: -0.08, satisfaction: -0.08 },
      'very_negative': { trust: -0.2, alignment: -0.15, satisfaction: -0.15 }
    };
    for (const [stakeholderId, reaction] of Object.entries(reactions)) {
      const values = reactionValues[reaction];
      if (values && this.state.relationships[stakeholderId]) {
        const rel = this.state.relationships[stakeholderId];
        rel.trust = Math.max(0, Math.min(1, rel.trust + values.trust));
        rel.alignment = Math.max(0, Math.min(1, rel.alignment + values.alignment));
        rel.satisfaction = Math.max(0, Math.min(1, rel.satisfaction + values.satisfaction));
      }
    }
  }

  checkForEvents(option, round) {
    const events = [];
    const eventProbability = { 'low': 0.05, 'medium': 0.15, 'high': 0.30, 'very_high': 0.50 };
    const baseProb = eventProbability[option.risk] || 0.1;
    if (Math.random() < baseProb * this.configuration.modifiers.marketVolatility * 0.5) {
      const event = this.generateEvent(option.risk, round.phase);
      events.push(event);
      this.state.events.push(event);
    }
    return events;
  }

  generateEvent(severity, phase) {
    const eventTypes = {
      foundation: [{ type: 'market_opportunity', description: 'Favorable market window opens' }],
      capital: [{ type: 'acquisition_target', description: 'Strategic acquisition opportunity emerges' }],
      challenges: [{ type: 'market_shock', description: 'Unexpected market volatility impacts plans' }],
      value: [{ type: 'investor_recognition', description: 'Major investor increases position' }]
    };
    const phaseEvents = eventTypes[phase] || eventTypes.capital;
    return { id: `event_${Date.now()}`, round: this.currentRound, severity, ...phaseEvents[Math.floor(Math.random() * phaseEvents.length)], resolved: false };
  }

  getScore() {
    const weights = { financialHealth: 0.18, capitalEfficiency: 0.20, investorConfidence: 0.20, cashPosition: 0.15, debtCapacity: 0.12, forecastAccuracy: 0.15 };
    let score = 0;
    for (const [metric, weight] of Object.entries(weights)) score += (this.state[metric] || 0) * weight * 100;
    return Math.max(0, Math.round(score));
  }

  getFinancialRating() {
    const score = this.getScore();
    if (score >= 85) return { rating: 'World-Class CFO', grade: 'A+' };
    if (score >= 75) return { rating: 'Exceptional Financial Leader', grade: 'A' };
    if (score >= 65) return { rating: 'Strong Financial Acumen', grade: 'B' };
    if (score >= 55) return { rating: 'Competent Financial Management', grade: 'C' };
    if (score >= 45) return { rating: 'Developing Financial Skills', grade: 'D' };
    return { rating: 'Financial Leadership Needed', grade: 'F' };
  }

  getSummary() {
    return { simulation: SIMULATION_META, configuration: this.configuration.name, currentRound: this.currentRound, isComplete: this.isComplete, state: this.state, score: this.getScore(), rating: this.getFinancialRating(), metrics: this.state.metrics };
  }

  exportResults() {
    return { meta: SIMULATION_META, configuration: this.configuration, finalState: this.state, history: this.history, score: this.getScore(), rating: this.getFinancialRating(), completedAt: new Date().toISOString() };
  }
}

export { CONFIGURATIONS, FINANCIAL_DIMENSIONS, VALUATION_METHODS, CAPITAL_SOURCES } from './config.js';
export { STAKEHOLDERS, FINANCE_COMMITTEES, RELATIONSHIP_DYNAMICS } from './stakeholders.js';
export { ROUNDS, PHASE_DESCRIPTIONS } from './rounds.js';
export default FinancialAcumenSimulation;
