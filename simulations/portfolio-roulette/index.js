// Portfolio Roulette Simulation - Strategic portfolio management
import { CONFIGURATIONS, DIMENSION_WEIGHTS, getConfigurationById } from './config.js';
import { STAKEHOLDERS, RELATIONSHIP_DYNAMICS, getStakeholderById, getAllStakeholders } from './stakeholders.js';
import { ROUNDS, PHASE_DESCRIPTIONS, getRoundById } from './rounds.js';

export class PortfolioRouletteSimulation {
  constructor(configurationId = 'PORTFOLIO_OPTIMIZATION') {
    this.configuration = getConfigurationById(configurationId);
    this.currentRound = 1;
    this.decisions = [];
    this.events = [];
    this.state = { ...this.configuration.initialState };
    this.stakeholderRelationships = {};
    this.initializeRelationships();
  }

  initializeRelationships() {
    getAllStakeholders().forEach(s => {
      this.stakeholderRelationships[s.id] = { trust: s.initialTrust, alignment: s.initialAlignment, satisfaction: 60, influence: s.influence };
    });
    RELATIONSHIP_DYNAMICS.ALLIANCES?.forEach(([s1, s2]) => {
      if (this.stakeholderRelationships[s1]) this.stakeholderRelationships[s1].trust += 5;
      if (this.stakeholderRelationships[s2]) this.stakeholderRelationships[s2].trust += 5;
    });
  }

  getCurrentRound() { return getRoundById(this.currentRound); }
  getCurrentPhase() { const r = this.getCurrentRound(); return r ? PHASE_DESCRIPTIONS[r.phase] : null; }

  makeDecision(optionId) {
    const round = this.getCurrentRound();
    if (!round) return { success: false, error: 'No active round' };
    const option = round.options.find(o => o.id === optionId);
    if (!option) return { success: false, error: 'Invalid option' };

    Object.entries(option.impact).forEach(([dim, val]) => {
      if (this.state[dim] !== undefined) this.state[dim] = Math.max(0, Math.min(100, this.state[dim] + val));
    });

    Object.entries(option.stakeholderReactions).forEach(([id, change]) => {
      const rel = this.stakeholderRelationships[id];
      if (rel) {
        rel.trust = Math.max(0, Math.min(100, rel.trust + change * 0.6));
        rel.satisfaction = Math.max(0, Math.min(100, rel.satisfaction + change * 0.4));
      }
    });

    let eventOccurred = null;
    if (Math.random() < option.risk) {
      const events = [
        { type: 'MARKET_SHIFT', impact: { portfolioBalance: -5, capitalEfficiency: -3 } },
        { type: 'ACTIVIST_PRESSURE', impact: { stakeholderSupport: -5, executionCapability: -3 } },
        { type: 'INTEGRATION_ISSUE', impact: { synergyCaptvre: -5, executionCapability: -3 } }
      ];
      eventOccurred = events[Math.floor(Math.random() * events.length)];
      Object.entries(eventOccurred.impact).forEach(([d, v]) => {
        if (this.state[d] !== undefined) this.state[d] = Math.max(0, Math.min(100, this.state[d] + v));
      });
      this.events.push({ round: this.currentRound, ...eventOccurred });
    }

    this.decisions.push({ round: this.currentRound, optionId, optionText: option.text, stateAfter: { ...this.state } });
    this.currentRound++;
    return { success: true, newState: this.state, nextRound: this.getCurrentRound(), isComplete: this.currentRound > 24 };
  }

  getScore() {
    let total = 0;
    Object.entries(DIMENSION_WEIGHTS).forEach(([dim, weight]) => { total += (this.state[dim] || 0) * weight; });
    const avgTrust = Object.values(this.stakeholderRelationships).reduce((s, r) => s + r.trust, 0) / Object.keys(this.stakeholderRelationships).length;
    return Math.round(total * (avgTrust / 100));
  }

  getRating() {
    const score = this.getScore();
    if (score >= 85) return { grade: 'A+', title: 'Portfolio Master' };
    if (score >= 75) return { grade: 'A', title: 'Strategic Architect' };
    if (score >= 65) return { grade: 'B+', title: 'Value Creator' };
    if (score >= 55) return { grade: 'B', title: 'Solid Manager' };
    if (score >= 45) return { grade: 'C', title: 'Developing' };
    return { grade: 'D', title: 'Needs Improvement' };
  }

  getSummary() {
    return { configuration: this.configuration.id, currentRound: this.currentRound, state: this.state, score: this.getScore(), rating: this.getRating(), decisions: this.decisions.length, events: this.events.length };
  }

  exportResults() {
    return { simulation: 'Portfolio Roulette', configuration: this.configuration, finalState: this.state, finalScore: this.getScore(), finalRating: this.getRating(), decisions: this.decisions, events: this.events, stakeholderRelationships: this.stakeholderRelationships, completedAt: new Date().toISOString() };
  }
}

export { CONFIGURATIONS, STAKEHOLDERS, ROUNDS, PHASE_DESCRIPTIONS };
