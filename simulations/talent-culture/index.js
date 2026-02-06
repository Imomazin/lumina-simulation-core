// Talent & Culture Simulation - Main Module
// Integrates configurations, stakeholders, and rounds into a complete simulation

import { CONFIGURATIONS, TALENT_DIMENSIONS, CULTURE_ARCHETYPES, EMPLOYEE_SEGMENTS } from './config.js';
import { STAKEHOLDERS, HR_COMMITTEES, RELATIONSHIP_DYNAMICS, getStakeholderById, getCommitteeMembers } from './stakeholders.js';
import { ROUNDS, PHASE_DESCRIPTIONS, getRoundById, getOptionById } from './rounds.js';

export const SIMULATION_META = {
  id: 'talent-culture',
  name: 'Talent & Culture',
  version: '1.0.0',
  description: 'Master the art of building and sustaining high-performing organizations through strategic talent management and culture leadership across 24 challenging rounds.',
  difficulty: 'advanced',
  estimatedDuration: '4-6 hours',
  playerCount: { min: 1, max: 6 },
  learningObjectives: [
    'Develop comprehensive talent strategies',
    'Build and transform organizational culture',
    'Navigate complex people challenges',
    'Lead HR transformation',
    'Create sustainable talent practices'
  ],
  prerequisites: [
    'Understanding of HR fundamentals',
    'Familiarity with organizational behavior',
    'Basic knowledge of talent management'
  ]
};

export class TalentCultureSimulation {
  constructor(configurationId = 'high_growth') {
    this.configuration = CONFIGURATIONS[configurationId.toUpperCase()] || CONFIGURATIONS.HIGH_GROWTH;
    this.state = this.initializeState();
    this.history = [];
    this.currentRound = 1;
    this.isComplete = false;
  }

  initializeState() {
    return {
      ...this.configuration.initialState,
      headcount: this.configuration.context.headcount,
      attritionRate: this.configuration.context.annualAttrition,
      hrBudgetRemaining: this.configuration.context.hrBudget,
      openPositions: Math.floor(this.configuration.context.annualHiring * 0.3),
      decisions: [],
      events: [],
      relationships: this.initializeRelationships(),
      metrics: {
        hiresMade: 0,
        promotions: 0,
        voluntaryAttrition: 0,
        trainingHours: 0,
        engagementScore: 65
      }
    };
  }

  initializeRelationships() {
    const relationships = {};
    Object.keys(STAKEHOLDERS).forEach(key => {
      relationships[STAKEHOLDERS[key].id] = {
        trust: 0.5,
        partnership: 0.5,
        satisfaction: 0.5
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

    // Check for triggered events
    const triggeredEvents = this.checkForEvents(option, round);

    // Update metrics
    this.updateMetrics(option);

    // Record decision
    const decision = {
      round: this.currentRound,
      phase: round.phase,
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
    const stateKeys = ['talentPipeline', 'employeeEngagement', 'culturalAlignment',
                       'leadershipBench', 'learningCapability', 'employerBrand'];

    stateKeys.forEach(key => {
      if (impact[key] !== undefined) {
        this.state[key] = Math.max(0, Math.min(1, this.state[key] + impact[key]));
      }
    });

    // Apply configuration modifiers
    const modifiers = this.configuration.modifiers;

    // Attrition risk increases with low engagement
    if (this.state.employeeEngagement < 0.4) {
      this.state.attritionRate = Math.min(0.35, this.state.attritionRate + 0.02 * modifiers.attritionRisk);
    }

    // Culture fragility affects alignment changes
    if (impact.culturalAlignment && impact.culturalAlignment < 0) {
      this.state.culturalAlignment += impact.culturalAlignment * (modifiers.cultureFragility - 1);
    }
  }

  processStakeholderReactions(reactions) {
    if (!reactions) return;

    const reactionValues = {
      'very_positive': { trust: 0.15, partnership: 0.1, satisfaction: 0.12 },
      'positive': { trust: 0.08, partnership: 0.05, satisfaction: 0.06 },
      'neutral': { trust: 0, partnership: 0, satisfaction: 0 },
      'concerned': { trust: -0.05, partnership: -0.03, satisfaction: -0.04 },
      'negative': { trust: -0.1, partnership: -0.08, satisfaction: -0.08 },
      'very_negative': { trust: -0.2, partnership: -0.15, satisfaction: -0.15 }
    };

    for (const [stakeholderId, reaction] of Object.entries(reactions)) {
      const values = reactionValues[reaction];
      if (values && this.state.relationships[stakeholderId]) {
        const rel = this.state.relationships[stakeholderId];
        rel.trust = Math.max(0, Math.min(1, rel.trust + values.trust));
        rel.partnership = Math.max(0, Math.min(1, rel.partnership + values.partnership));
        rel.satisfaction = Math.max(0, Math.min(1, rel.satisfaction + values.satisfaction));
      }
    }
  }

  checkForEvents(option, round) {
    const events = [];
    const riskLevel = option.risk;
    const modifiers = this.configuration.modifiers;

    const eventProbability = {
      'low': 0.05,
      'medium': 0.15,
      'high': 0.30,
      'very_high': 0.50
    };

    const baseProb = eventProbability[riskLevel] || 0.1;
    const adjustedProb = baseProb * modifiers.attritionRisk * 0.5;

    if (Math.random() < adjustedProb) {
      const event = this.generateEvent(riskLevel, round.phase);
      events.push(event);
      this.state.events.push(event);
      this.applyEventImpact(event);
    }

    return events;
  }

  generateEvent(severity, phase) {
    const eventTypes = {
      assessment: [
        { type: 'key_hire_decline', description: 'Top candidate declines offer for competitor' },
        { type: 'engagement_drop', description: 'Engagement scores drop in key department' },
        { type: 'executive_departure', description: 'Senior leader announces departure' }
      ],
      capability: [
        { type: 'talent_poaching', description: 'Competitor aggressively recruiting your team' },
        { type: 'skill_gap', description: 'Critical skill gap identified in strategic area' },
        { type: 'culture_conflict', description: 'Culture clash in growing team' }
      ],
      culture: [
        { type: 'toxic_behavior', description: 'Toxic behavior reported in leadership' },
        { type: 'union_activity', description: 'Union organizing activity detected' },
        { type: 'public_criticism', description: 'Company culture criticized publicly' }
      ],
      sustainable: [
        { type: 'employer_recognition', description: 'Company named top employer' },
        { type: 'talent_acquisition_win', description: 'Major talent acquisition success' },
        { type: 'culture_award', description: 'Culture recognized by industry' }
      ]
    };

    const phaseEvents = eventTypes[phase] || eventTypes.capability;
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
      case 'key_hire_decline':
        this.state.talentPipeline -= impact;
        break;
      case 'engagement_drop':
        this.state.employeeEngagement -= impact;
        this.state.metrics.engagementScore -= impact * 100;
        break;
      case 'executive_departure':
        this.state.leadershipBench -= impact;
        this.state.metrics.voluntaryAttrition++;
        break;
      case 'talent_poaching':
        this.state.talentPipeline -= impact;
        this.state.attritionRate += 0.01;
        break;
      case 'skill_gap':
        this.state.learningCapability -= impact;
        break;
      case 'culture_conflict':
        this.state.culturalAlignment -= impact;
        break;
      case 'toxic_behavior':
        this.state.culturalAlignment -= impact * 1.5;
        this.state.employerBrand -= impact;
        break;
      case 'union_activity':
        this.state.employeeEngagement -= impact * 0.5;
        break;
      case 'public_criticism':
        this.state.employerBrand -= impact * 1.5;
        break;
      case 'employer_recognition':
      case 'talent_acquisition_win':
      case 'culture_award':
        this.state.employerBrand += impact;
        this.state.talentPipeline += impact * 0.5;
        break;
    }
  }

  updateMetrics(option) {
    // Update engagement score based on state
    this.state.metrics.engagementScore = Math.round(this.state.employeeEngagement * 100);

    // Track hiring based on talent pipeline improvements
    if (option.impact.talentPipeline && option.impact.talentPipeline > 0) {
      this.state.metrics.hiresMade += Math.floor(option.impact.talentPipeline * 50);
    }

    // Track development based on learning improvements
    if (option.impact.learningCapability && option.impact.learningCapability > 0) {
      this.state.metrics.trainingHours += Math.floor(option.impact.learningCapability * 1000);
    }

    // Track promotions based on leadership bench improvements
    if (option.impact.leadershipBench && option.impact.leadershipBench > 0) {
      this.state.metrics.promotions += Math.floor(option.impact.leadershipBench * 20);
    }
  }

  getScore() {
    const weights = {
      talentPipeline: 0.18,
      employeeEngagement: 0.20,
      culturalAlignment: 0.18,
      leadershipBench: 0.15,
      learningCapability: 0.14,
      employerBrand: 0.15
    };

    let score = 0;
    for (const [metric, weight] of Object.entries(weights)) {
      score += (this.state[metric] || 0) * weight * 100;
    }

    // Adjustments for attrition
    if (this.state.attritionRate > 0.20) {
      score -= (this.state.attritionRate - 0.20) * 50;
    }

    return Math.max(0, Math.round(score));
  }

  getTalentRating() {
    const score = this.getScore();
    if (score >= 85) return { rating: 'World-Class Talent Organization', grade: 'A+' };
    if (score >= 75) return { rating: 'Exceptional Talent Culture', grade: 'A' };
    if (score >= 65) return { rating: 'Strong Talent Practices', grade: 'B' };
    if (score >= 55) return { rating: 'Developing Talent Capability', grade: 'C' };
    if (score >= 45) return { rating: 'Talent Challenges Present', grade: 'D' };
    return { rating: 'Critical Talent Issues', grade: 'F' };
  }

  getSummary() {
    return {
      simulation: SIMULATION_META,
      configuration: this.configuration.name,
      currentRound: this.currentRound,
      isComplete: this.isComplete,
      state: this.state,
      score: this.getScore(),
      rating: this.getTalentRating(),
      metrics: this.state.metrics
    };
  }

  exportResults() {
    return {
      meta: SIMULATION_META,
      configuration: this.configuration,
      finalState: this.state,
      history: this.history,
      score: this.getScore(),
      rating: this.getTalentRating(),
      completedAt: new Date().toISOString()
    };
  }
}

// Export all modules
export { CONFIGURATIONS, TALENT_DIMENSIONS, CULTURE_ARCHETYPES, EMPLOYEE_SEGMENTS } from './config.js';
export { STAKEHOLDERS, HR_COMMITTEES, RELATIONSHIP_DYNAMICS } from './stakeholders.js';
export { ROUNDS, PHASE_DESCRIPTIONS } from './rounds.js';

export default TalentCultureSimulation;
