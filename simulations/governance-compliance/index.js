// Governance & Compliance Simulation - Main Module
// Integrates configurations, stakeholders, and rounds into a complete simulation

import { CONFIGURATIONS, COMPLIANCE_DOMAINS, GOVERNANCE_PILLARS, REGULATORY_ACTIONS } from './config.js';
import { STAKEHOLDERS, GOVERNANCE_COMMITTEES, RELATIONSHIP_DYNAMICS, getStakeholderById, getCommitteeMembers } from './stakeholders.js';
import { ROUNDS, PHASE_DESCRIPTIONS, getRoundById, getOptionById } from './rounds.js';

export const SIMULATION_META = {
  id: 'governance-compliance',
  name: 'Governance & Compliance',
  version: '1.0.0',
  description: 'Master the complexities of corporate governance and regulatory compliance through 24 rounds of challenging scenarios involving ethics, regulation, and stakeholder management.',
  difficulty: 'advanced',
  estimatedDuration: '4-6 hours',
  playerCount: { min: 1, max: 6 },
  learningObjectives: [
    'Understand regulatory compliance frameworks',
    'Develop board and governance relationships',
    'Navigate ethical dilemmas and whistleblower situations',
    'Manage regulatory examinations and enforcement',
    'Build sustainable compliance culture'
  ],
  prerequisites: [
    'Understanding of corporate governance',
    'Familiarity with regulatory concepts',
    'Basic knowledge of internal controls'
  ]
};

export class GovernanceComplianceSimulation {
  constructor(configurationId = 'heavily_regulated') {
    this.configuration = CONFIGURATIONS[configurationId.toUpperCase()] || CONFIGURATIONS.HEAVILY_REGULATED;
    this.state = this.initializeState();
    this.history = [];
    this.currentRound = 1;
    this.isComplete = false;
    this.regulatoryActions = [];
  }

  initializeState() {
    return {
      ...this.configuration.initialState,
      budgetRemaining: this.configuration.context.annualComplianceBudget,
      staffCount: this.configuration.context.complianceStaff,
      openFindings: 0,
      regulatoryPenalties: 0,
      decisions: [],
      events: [],
      relationships: this.initializeRelationships(),
      metrics: {
        findingsIdentified: 0,
        findingsRemediated: 0,
        regulatoryExaminations: 0,
        whistleblowerCases: 0,
        policyUpdates: 0
      }
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
    const stateKeys = ['complianceMaturity', 'governanceEffectiveness', 'regulatoryStanding',
                       'ethicalCulture', 'controlEnvironment', 'auditReadiness'];

    stateKeys.forEach(key => {
      if (impact[key] !== undefined) {
        this.state[key] = Math.max(0, Math.min(1, this.state[key] + impact[key]));
      }
    });

    // Apply configuration modifiers
    const modifiers = this.configuration.modifiers;

    if (impact.regulatoryStanding && impact.regulatoryStanding < 0) {
      // Regulatory issues have amplified impact in heavily regulated industries
      const amplifiedImpact = impact.regulatoryStanding * modifiers.regulatoryIntensity;
      this.state.regulatoryStanding = Math.max(0, this.state.regulatoryStanding + amplifiedImpact - impact.regulatoryStanding);
    }

    if (impact.ethicalCulture && impact.ethicalCulture < -0.1) {
      // Severe ethical issues trigger potential regulatory scrutiny
      this.state.regulatoryStanding -= 0.02 * modifiers.reputationSensitivity;
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
    }
  }

  checkForEvents(option, round) {
    const events = [];
    const riskLevel = option.risk;
    const modifiers = this.configuration.modifiers;

    // Event probability based on risk
    const eventProbability = {
      'low': 0.05,
      'medium': 0.15,
      'high': 0.30,
      'very_high': 0.50
    };

    const baseProb = eventProbability[riskLevel] || 0.1;
    const adjustedProb = baseProb * modifiers.regulatoryIntensity * 0.5;

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
      foundation: [
        { type: 'regulatory_inquiry', description: 'Regulator requests information on compliance program' },
        { type: 'audit_finding', description: 'Internal audit identifies control gap' },
        { type: 'policy_gap', description: 'Policy gap identified in key area' }
      ],
      operationalizing: [
        { type: 'examination_announced', description: 'Regulatory examination scheduled' },
        { type: 'whistleblower_report', description: 'Whistleblower allegation received' },
        { type: 'vendor_issue', description: 'Third-party compliance concern identified' }
      ],
      crisis: [
        { type: 'enforcement_action', description: 'Regulatory enforcement action initiated' },
        { type: 'control_failure', description: 'Material control failure identified' },
        { type: 'data_breach', description: 'Data security incident detected' }
      ],
      transformation: [
        { type: 'regulatory_recognition', description: 'Regulator recognizes compliance improvements' },
        { type: 'best_practice', description: 'Program identified as industry best practice' },
        { type: 'talent_opportunity', description: 'Key compliance talent opportunity' }
      ]
    };

    const phaseEvents = eventTypes[phase] || eventTypes.operationalizing;
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
      case 'regulatory_inquiry':
      case 'examination_announced':
        this.state.metrics.regulatoryExaminations++;
        this.state.auditReadiness -= impact * 0.5;
        break;
      case 'audit_finding':
      case 'control_failure':
        this.state.openFindings++;
        this.state.metrics.findingsIdentified++;
        this.state.controlEnvironment -= impact;
        break;
      case 'whistleblower_report':
        this.state.metrics.whistleblowerCases++;
        this.state.ethicalCulture -= impact * 0.5;
        break;
      case 'enforcement_action':
        this.state.regulatoryStanding -= impact * 1.5;
        this.state.regulatoryPenalties += 1000000 * this.configuration.modifiers.penaltyMultiplier;
        break;
      case 'data_breach':
        this.state.controlEnvironment -= impact;
        this.state.regulatoryStanding -= impact;
        break;
      case 'regulatory_recognition':
      case 'best_practice':
        this.state.regulatoryStanding += impact;
        this.state.complianceMaturity += impact * 0.5;
        break;
      case 'talent_opportunity':
        this.state.complianceMaturity += impact * 0.5;
        break;
    }
  }

  getScore() {
    const weights = {
      complianceMaturity: 0.20,
      governanceEffectiveness: 0.15,
      regulatoryStanding: 0.20,
      ethicalCulture: 0.20,
      controlEnvironment: 0.15,
      auditReadiness: 0.10
    };

    let score = 0;
    for (const [metric, weight] of Object.entries(weights)) {
      score += (this.state[metric] || 0) * weight * 100;
    }

    // Deductions for unresolved issues
    score -= this.state.openFindings * 2;
    score -= (this.state.regulatoryPenalties / 1000000);

    return Math.max(0, Math.round(score));
  }

  getComplianceRating() {
    const score = this.getScore();
    if (score >= 85) return { rating: 'Best-in-Class Compliance', grade: 'A+' };
    if (score >= 75) return { rating: 'Strong Compliance Program', grade: 'A' };
    if (score >= 65) return { rating: 'Effective Compliance', grade: 'B' };
    if (score >= 55) return { rating: 'Adequate Compliance', grade: 'C' };
    if (score >= 45) return { rating: 'Compliance Needs Improvement', grade: 'D' };
    return { rating: 'Compliance Deficient', grade: 'F' };
  }

  getSummary() {
    return {
      simulation: SIMULATION_META,
      configuration: this.configuration.name,
      currentRound: this.currentRound,
      isComplete: this.isComplete,
      state: this.state,
      score: this.getScore(),
      rating: this.getComplianceRating(),
      metrics: this.state.metrics,
      openFindings: this.state.openFindings,
      regulatoryPenalties: this.state.regulatoryPenalties
    };
  }

  exportResults() {
    return {
      meta: SIMULATION_META,
      configuration: this.configuration,
      finalState: this.state,
      history: this.history,
      score: this.getScore(),
      rating: this.getComplianceRating(),
      completedAt: new Date().toISOString()
    };
  }
}

// Export all modules
export { CONFIGURATIONS, COMPLIANCE_DOMAINS, GOVERNANCE_PILLARS, REGULATORY_ACTIONS } from './config.js';
export { STAKEHOLDERS, GOVERNANCE_COMMITTEES, RELATIONSHIP_DYNAMICS } from './stakeholders.js';
export { ROUNDS, PHASE_DESCRIPTIONS } from './rounds.js';

export default GovernanceComplianceSimulation;
