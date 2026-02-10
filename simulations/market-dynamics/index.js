// Market Dynamics Simulation
// Core simulation engine for competitive market strategy

import { CONFIGURATIONS, DIMENSION_WEIGHTS, MARKET_CONSTANTS, getConfigurationById } from './config.js';
import { STAKEHOLDERS, RELATIONSHIP_DYNAMICS, getStakeholderById, getAllStakeholders } from './stakeholders.js';
import { ROUNDS, PHASE_DESCRIPTIONS, getRoundById, getRoundsByPhase } from './rounds.js';

export class MarketDynamicsSimulation {
  constructor(configurationId = 'MARKET_LEADER') {
    this.configuration = getConfigurationById(configurationId);
    this.currentRound = 1;
    this.decisions = [];
    this.events = [];
    this.state = {};
    this.stakeholderRelationships = {};
    this.competitorPositions = {};
    this.marketCycle = 'EXPANSION';
    this.initializeState();
    this.initializeRelationships();
    this.initializeCompetitors();
  }

  initializeState() {
    this.state = { ...this.configuration.initialState };
    this.marketContext = { ...this.configuration.marketContext };
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

  initializeCompetitors() {
    this.configuration.competitors.forEach(competitor => {
      this.competitorPositions[competitor.name] = {
        share: competitor.share,
        threat: competitor.threat,
        strategy: competitor.strategy,
        momentum: 0,
        recentMoves: []
      };
    });
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

    // Check for risk events
    const eventOccurred = this.checkForEvents(option, round);

    // Simulate competitor responses
    const competitorResponses = this.simulateCompetitorResponses(option);

    // Update market cycle
    this.updateMarketCycle();

    // Record decision
    const decision = {
      round: this.currentRound,
      phase: round.phase,
      optionId,
      optionText: option.text,
      impact: option.impact,
      timestamp: new Date().toISOString(),
      stateAfter: { ...this.state },
      eventOccurred,
      competitorResponses
    };
    this.decisions.push(decision);

    // Advance round
    this.currentRound++;

    return {
      success: true,
      decision,
      newState: this.state,
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
        { type: 'COMPETITOR_RESPONSE', impact: { marketShare: -3, competitiveIntelligence: 5 } },
        { type: 'MARKET_SHIFT', impact: { marketSentiment: -5, pricingPower: -3 } },
        { type: 'CUSTOMER_REACTION', impact: { customerLoyalty: -5, brandEquity: -3 } },
        { type: 'CHANNEL_DISRUPTION', impact: { channelStrength: -5, marketShare: -2 } },
        { type: 'REGULATORY_ATTENTION', impact: { marketSentiment: -3, pricingPower: -3 } }
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

  simulateCompetitorResponses(option) {
    const responses = [];

    Object.entries(this.competitorPositions).forEach(([name, competitor]) => {
      const responseProbability = MARKET_CONSTANTS.COMPETITIVE_RESPONSE_PROBABILITY[competitor.threat] || 0.3;

      if (Math.random() < responseProbability) {
        const responseTypes = {
          PRICE_DISRUPTION: { type: 'price_cut', shareChange: 2 },
          TECH_DISRUPTION: { type: 'product_launch', shareChange: 1 },
          DEFENSIVE: { type: 'customer_lock_in', shareChange: 0 },
          AGGRESSIVE_GROWTH: { type: 'market_expansion', shareChange: 2 },
          NICHE_FOCUS: { type: 'segment_targeting', shareChange: 1 }
        };

        const response = responseTypes[competitor.strategy] || { type: 'general', shareChange: 1 };
        competitor.share = Math.min(50, competitor.share + response.shareChange);
        competitor.momentum += 1;
        competitor.recentMoves.push(response.type);

        // Impact on our market share
        this.state.marketShare = Math.max(5, this.state.marketShare - response.shareChange * 0.5);

        responses.push({ competitor: name, response: response.type });
      }
    });

    return responses;
  }

  updateMarketCycle() {
    const cycles = MARKET_CONSTANTS.MARKET_CYCLE_PHASES;
    const currentIndex = cycles.indexOf(this.marketCycle);

    if (Math.random() < 0.15) {
      this.marketCycle = cycles[(currentIndex + 1) % cycles.length];

      // Apply cycle effects
      const cycleEffects = {
        EXPANSION: { marketSentiment: 3, pricingPower: 2 },
        PEAK: { pricingPower: 3, marketShare: -1 },
        CONTRACTION: { marketSentiment: -3, pricingPower: -2 },
        TROUGH: { marketShare: 2, pricingPower: -3 }
      };

      if (cycleEffects[this.marketCycle]) {
        this.applyImpact(cycleEffects[this.marketCycle]);
      }
    }
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

    // Competitive position factor
    const competitorShareTotal = Object.values(this.competitorPositions)
      .reduce((sum, c) => sum + c.share, 0);
    const competitiveFactor = this.state.marketShare / (this.state.marketShare + competitorShareTotal);

    return Math.round((totalScore / maxPossible) * 100 * stakeholderFactor * (0.5 + competitiveFactor * 0.5));
  }

  getRating() {
    const score = this.getScore();
    if (score >= 90) return { grade: 'A+', title: 'Market Dominator', description: 'Exceptional competitive strategy execution' };
    if (score >= 80) return { grade: 'A', title: 'Market Leader', description: 'Strong market position and competitive advantage' };
    if (score >= 70) return { grade: 'B+', title: 'Strong Competitor', description: 'Solid market strategy with room for improvement' };
    if (score >= 60) return { grade: 'B', title: 'Competitive Player', description: 'Adequate market positioning' };
    if (score >= 50) return { grade: 'C', title: 'Market Participant', description: 'Struggling to maintain competitive position' };
    return { grade: 'D', title: 'Market Challenged', description: 'Significant competitive strategy gaps' };
  }

  getMarketPosition() {
    const ourShare = this.state.marketShare;
    const positions = Object.entries(this.competitorPositions)
      .map(([name, data]) => ({ name, share: data.share }))
      .concat([{ name: 'Our Company', share: ourShare }])
      .sort((a, b) => b.share - a.share);

    return {
      ranking: positions.findIndex(p => p.name === 'Our Company') + 1,
      positions,
      totalMarket: this.marketContext.totalMarketSize,
      ourValue: (ourShare / 100) * this.marketContext.totalMarketSize
    };
  }

  getSummary() {
    return {
      configuration: this.configuration.id,
      currentRound: this.currentRound,
      phase: this.getCurrentPhase()?.name,
      state: { ...this.state },
      score: this.getScore(),
      rating: this.getRating(),
      marketPosition: this.getMarketPosition(),
      marketCycle: this.marketCycle,
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
      simulation: 'Market Dynamics',
      configuration: this.configuration,
      finalState: this.state,
      finalScore: this.getScore(),
      finalRating: this.getRating(),
      marketPosition: this.getMarketPosition(),
      competitorPositions: this.competitorPositions,
      decisions: this.decisions,
      events: this.events,
      stakeholderRelationships: this.stakeholderRelationships,
      marketCycle: this.marketCycle,
      completedAt: new Date().toISOString()
    };
  }
}

export { CONFIGURATIONS, STAKEHOLDERS, ROUNDS, PHASE_DESCRIPTIONS };
