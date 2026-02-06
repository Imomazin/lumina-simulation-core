// Strategic Leadership Simulation - Main Module
// Integrates configurations, stakeholders, and rounds into a complete simulation

import { CONFIGURATIONS, LEADERSHIP_DIMENSIONS, DECISION_STYLES, LEADERSHIP_CAPITAL } from './config.js';
import { STAKEHOLDERS, STAKEHOLDER_COALITIONS, RELATIONSHIP_DYNAMICS, getStakeholderById, getCoalitionMembers } from './stakeholders.js';
import { ROUNDS, PHASE_DESCRIPTIONS, getRoundById, getOptionById } from './rounds.js';

export const SIMULATION_META = {
  id: 'strategic-leadership',
  name: 'Strategic Leadership',
  version: '1.0.0',
  description: 'Navigate the complex challenges of executive leadership through 24 rounds of strategic decision-making, stakeholder management, and organizational transformation.',
  difficulty: 'advanced',
  estimatedDuration: '4-6 hours',
  playerCount: { min: 1, max: 6 },
  learningObjectives: [
    'Develop executive-level strategic thinking',
    'Master stakeholder management and influence',
    'Build crisis leadership capabilities',
    'Understand board dynamics and governance',
    'Practice succession planning and legacy building'
  ],
  prerequisites: [
    'Management experience or MBA coursework',
    'Understanding of corporate governance',
    'Familiarity with strategic planning concepts'
  ]
};

export class StrategicLeadershipSimulation {
  constructor(configurationId = 'succession') {
    this.configuration = CONFIGURATIONS[configurationId.toUpperCase()] || CONFIGURATIONS.SUCCESSION;
    this.state = this.initializeState();
    this.history = [];
    this.currentRound = 1;
    this.isComplete = false;
    this.leadershipCapital = this.initializeCapital();
  }

  initializeState() {
    return {
      ...this.configuration.initialState,
      boardSupport: 0.7,
      mediaPerception: 0.5,
      employeeEngagement: 0.6,
      customerSatisfaction: 0.7,
      competitivePosition: 0.5,
      decisions: [],
      events: [],
      relationships: this.initializeRelationships(),
      metrics: {
        decisionsCount: 0,
        stakeholderWins: 0,
        crisesManaged: 0,
        strategicMoves: 0
      }
    };
  }

  initializeCapital() {
    return {
      political: 50,
      relational: 50,
      expertise: 60,
      positional: 70,
      reputational: 50
    };
  }

  initializeRelationships() {
    const relationships = {};
    Object.keys(STAKEHOLDERS).forEach(key => {
      relationships[STAKEHOLDERS[key].id] = {
        trust: 0.5,
        alignment: 0.5,
        engagement: 0.5
      };
    });
    return relationships;
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

    // Apply state impacts
    this.applyImpact(option.impact);

    // Process stakeholder reactions
    this.processStakeholderReactions(option.stakeholderReactions);

    // Update leadership capital
    this.updateLeadershipCapital(option);

    // Check for triggered events
    const triggeredEvents = this.checkForEvents(option, round);

    // Record decision
    const decision = {
      round: this.currentRound,
      phase: round.phase,
      optionId,
      optionLabel: option.label,
      impact: option.impact,
      stakeholderReactions: option.stakeholderReactions,
      triggeredEvents,
      stateSnapshot: { ...this.state },
      capitalSnapshot: { ...this.leadershipCapital }
    };

    this.history.push(decision);
    this.state.decisions.push(decision);
    this.state.metrics.decisionsCount++;

    // Advance round
    this.currentRound++;
    if (this.currentRound > 24) {
      this.isComplete = true;
    }

    return {
      decision,
      newState: this.state,
      leadershipCapital: this.leadershipCapital,
      nextRound: this.isComplete ? null : this.getCurrentRound(),
      isComplete: this.isComplete
    };
  }

  applyImpact(impact) {
    const stateKeys = ['strategicClarity', 'executionCapability', 'stakeholderTrust',
                       'organizationalMomentum', 'leadershipCredibility', 'changeReadiness'];

    stateKeys.forEach(key => {
      if (impact[key] !== undefined) {
        this.state[key] = Math.max(0, Math.min(1, this.state[key] + impact[key]));
      }
    });

    // Apply secondary effects based on configuration modifiers
    const modifiers = this.configuration.modifiers;

    if (impact.stakeholderTrust && impact.stakeholderTrust < 0) {
      this.state.boardSupport -= 0.02 * modifiers.mediaScrutiny;
    }

    if (impact.leadershipCredibility && impact.leadershipCredibility > 0.1) {
      this.state.employeeEngagement += 0.02;
    }
  }

  processStakeholderReactions(reactions) {
    if (!reactions) return;

    const reactionValues = {
      'very_positive': { trust: 0.15, alignment: 0.1, engagement: 0.1 },
      'positive': { trust: 0.08, alignment: 0.05, engagement: 0.05 },
      'neutral': { trust: 0, alignment: 0, engagement: 0 },
      'concerned': { trust: -0.05, alignment: -0.03, engagement: 0.02 },
      'negative': { trust: -0.1, alignment: -0.08, engagement: -0.05 },
      'very_negative': { trust: -0.2, alignment: -0.15, engagement: -0.1 }
    };

    for (const [stakeholderId, reaction] of Object.entries(reactions)) {
      const values = reactionValues[reaction];
      if (values && this.state.relationships[stakeholderId]) {
        const rel = this.state.relationships[stakeholderId];
        rel.trust = Math.max(0, Math.min(1, rel.trust + values.trust));
        rel.alignment = Math.max(0, Math.min(1, rel.alignment + values.alignment));
        rel.engagement = Math.max(0, Math.min(1, rel.engagement + values.engagement));
      }

      // Track stakeholder wins
      if (reaction === 'very_positive' || reaction === 'positive') {
        this.state.metrics.stakeholderWins++;
      }
    }
  }

  updateLeadershipCapital(option) {
    // Political capital - affected by stakeholder reactions
    const positiveReactions = Object.values(option.stakeholderReactions || {})
      .filter(r => r === 'positive' || r === 'very_positive').length;
    const negativeReactions = Object.values(option.stakeholderReactions || {})
      .filter(r => r === 'negative' || r === 'very_negative').length;

    this.leadershipCapital.political += (positiveReactions - negativeReactions) * 3;
    this.leadershipCapital.political = Math.max(0, Math.min(100, this.leadershipCapital.political));

    // Relational capital - from trust changes
    const trustGain = Object.values(this.state.relationships)
      .reduce((sum, r) => sum + r.trust, 0) / Object.keys(this.state.relationships).length;
    this.leadershipCapital.relational = Math.round(trustGain * 100);

    // Expertise capital - grows with strategic clarity
    if (option.impact.strategicClarity && option.impact.strategicClarity > 0) {
      this.leadershipCapital.expertise = Math.min(100, this.leadershipCapital.expertise + 2);
    }

    // Reputational capital - tied to credibility
    this.leadershipCapital.reputational = Math.round(this.state.leadershipCredibility * 100);
  }

  checkForEvents(option, round) {
    const events = [];
    const riskLevel = option.risk;
    const modifiers = this.configuration.modifiers;

    // Event probability based on risk and urgency
    const eventProbability = {
      'low': 0.05,
      'medium': 0.15,
      'high': 0.30,
      'very_high': 0.50
    };

    const baseProb = eventProbability[riskLevel] || 0.1;
    const adjustedProb = baseProb * modifiers.urgencyMultiplier;

    if (Math.random() < adjustedProb) {
      const event = this.generateEvent(riskLevel, round.phase);
      events.push(event);
      this.state.events.push(event);
      this.applyEventImpact(event);

      if (event.type === 'crisis') {
        this.state.metrics.crisesManaged++;
      }
    }

    return events;
  }

  generateEvent(severity, phase) {
    const eventTypes = {
      establishing: [
        { type: 'board_concern', description: 'Board members express concern about pace of progress' },
        { type: 'media_inquiry', description: 'Media requests interview about strategic direction' },
        { type: 'talent_loss', description: 'Key team member announces departure' }
      ],
      momentum: [
        { type: 'competitor_move', description: 'Major competitor announces aggressive strategy' },
        { type: 'market_shift', description: 'Market conditions change unexpectedly' },
        { type: 'crisis', description: 'Operational issue requires immediate attention' }
      ],
      challenges: [
        { type: 'crisis', description: 'Significant challenge requires leadership response' },
        { type: 'stakeholder_conflict', description: 'Key stakeholders in open disagreement' },
        { type: 'external_pressure', description: 'External forces demand response' }
      ],
      legacy: [
        { type: 'succession_issue', description: 'Succession planning faces unexpected complication' },
        { type: 'legacy_threat', description: 'Previous decision comes back with consequences' },
        { type: 'opportunity', description: 'Unexpected opportunity to cement legacy' }
      ]
    };

    const phaseEvents = eventTypes[phase] || eventTypes.momentum;
    const event = phaseEvents[Math.floor(Math.random() * phaseEvents.length)];

    return {
      id: `event_${Date.now()}`,
      round: this.currentRound,
      severity,
      ...event,
      resolved: false
    };
  }

  applyEventImpact(event) {
    const severityImpact = {
      'low': 0.02,
      'medium': 0.05,
      'high': 0.08,
      'very_high': 0.12
    };

    const impact = severityImpact[event.severity] || 0.05;

    switch (event.type) {
      case 'board_concern':
        this.state.boardSupport -= impact;
        break;
      case 'media_inquiry':
        this.state.mediaPerception -= impact * 0.5;
        break;
      case 'talent_loss':
        this.state.executionCapability -= impact;
        break;
      case 'competitor_move':
        this.state.competitivePosition -= impact;
        break;
      case 'market_shift':
        this.state.strategicClarity -= impact;
        break;
      case 'crisis':
        this.state.stakeholderTrust -= impact;
        this.state.leadershipCredibility -= impact * 0.5;
        break;
      case 'stakeholder_conflict':
        this.state.organizationalMomentum -= impact;
        break;
      case 'external_pressure':
        this.state.changeReadiness -= impact;
        break;
      case 'succession_issue':
        this.leadershipCapital.positional -= impact * 20;
        break;
      case 'legacy_threat':
        this.leadershipCapital.reputational -= impact * 15;
        break;
      case 'opportunity':
        this.state.leadershipCredibility += impact;
        this.state.metrics.strategicMoves++;
        break;
    }
  }

  getScore() {
    const weights = {
      strategicClarity: 0.15,
      executionCapability: 0.15,
      stakeholderTrust: 0.15,
      organizationalMomentum: 0.1,
      leadershipCredibility: 0.2,
      changeReadiness: 0.1,
      boardSupport: 0.15
    };

    let score = 0;
    for (const [metric, weight] of Object.entries(weights)) {
      score += (this.state[metric] || 0) * weight * 100;
    }

    // Bonus for leadership capital
    const capitalBonus = Object.values(this.leadershipCapital).reduce((a, b) => a + b, 0) / 50;
    score += capitalBonus;

    return Math.round(score);
  }

  getLeadershipRating() {
    const score = this.getScore();
    if (score >= 85) return { rating: 'Transformational Leader', grade: 'A+' };
    if (score >= 75) return { rating: 'Exceptional Leader', grade: 'A' };
    if (score >= 65) return { rating: 'Strong Leader', grade: 'B' };
    if (score >= 55) return { rating: 'Capable Leader', grade: 'C' };
    if (score >= 45) return { rating: 'Developing Leader', grade: 'D' };
    return { rating: 'Leadership Challenged', grade: 'F' };
  }

  getSummary() {
    return {
      simulation: SIMULATION_META,
      configuration: this.configuration.name,
      currentRound: this.currentRound,
      isComplete: this.isComplete,
      state: this.state,
      leadershipCapital: this.leadershipCapital,
      score: this.getScore(),
      rating: this.getLeadershipRating(),
      metrics: this.state.metrics
    };
  }

  exportResults() {
    return {
      meta: SIMULATION_META,
      configuration: this.configuration,
      finalState: this.state,
      leadershipCapital: this.leadershipCapital,
      history: this.history,
      score: this.getScore(),
      rating: this.getLeadershipRating(),
      completedAt: new Date().toISOString()
    };
  }
}

// Export all modules
export { CONFIGURATIONS, LEADERSHIP_DIMENSIONS, DECISION_STYLES, LEADERSHIP_CAPITAL } from './config.js';
export { STAKEHOLDERS, STAKEHOLDER_COALITIONS, RELATIONSHIP_DYNAMICS } from './stakeholders.js';
export { ROUNDS, PHASE_DESCRIPTIONS } from './rounds.js';

export default StrategicLeadershipSimulation;
