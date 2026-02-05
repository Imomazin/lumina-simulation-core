// Governance & Compliance Simulation - Rounds & Scenarios
// 24 rounds with progressive compliance challenges, each with 6 decision options

export const ROUNDS = [
  // PHASE 1: FOUNDATION (Rounds 1-6)
  {
    round: 1,
    phase: 'foundation',
    title: 'Compliance Program Assessment',
    scenario: {
      description: 'You have been appointed Chief Compliance Officer. Your first task is to assess the current state of the compliance program and set priorities.',
      context: 'The previous CCO departed suddenly. Initial observations suggest gaps in the program, but resources are constrained.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['audit_chair', 'ceo', 'general_counsel']
    },
    options: [
      { id: 'r1_o1', label: 'Comprehensive program assessment', impact: { complianceMaturity: 0.1, governanceEffectiveness: 0.05, auditReadiness: 0.08 }, risk: 'low', stakeholderReactions: { audit_chair: 'very_positive', ceo: 'neutral', bu_president: 'concerned' } },
      { id: 'r1_o2', label: 'Focus on highest-risk areas first', impact: { complianceMaturity: 0.08, regulatoryStanding: 0.05, controlEnvironment: 0.05 }, risk: 'medium', stakeholderReactions: { primary_regulator: 'positive', ceo: 'positive', audit_chair: 'neutral' } },
      { id: 'r1_o3', label: 'Quick wins to build credibility', impact: { complianceMaturity: 0.05, ethicalCulture: 0.05, governanceEffectiveness: 0.05 }, risk: 'low', stakeholderReactions: { ceo: 'positive', bu_president: 'positive', audit_chair: 'concerned' } },
      { id: 'r1_o4', label: 'External benchmarking study', impact: { complianceMaturity: 0.05, governanceEffectiveness: 0.08, auditReadiness: 0.05 }, risk: 'low', stakeholderReactions: { governance_analyst: 'positive', audit_chair: 'positive', cfo: 'concerned' } },
      { id: 'r1_o5', label: 'Regulatory relationship building first', impact: { regulatoryStanding: 0.1, complianceMaturity: 0.02, governanceEffectiveness: 0.02 }, risk: 'medium', stakeholderReactions: { primary_regulator: 'positive', reg_affairs_head: 'very_positive', audit_chair: 'neutral' } },
      { id: 'r1_o6', label: 'Delay assessment pending resources', impact: { complianceMaturity: -0.05, governanceEffectiveness: -0.05, auditReadiness: -0.05 }, risk: 'high', stakeholderReactions: { audit_chair: 'very_negative', primary_regulator: 'negative', internal_audit: 'negative' } }
    ]
  },

  {
    round: 2,
    phase: 'foundation',
    title: 'Compliance Organizational Structure',
    scenario: {
      description: 'The compliance function is understaffed and lacks clear accountability. You must propose a new organizational structure to the board.',
      context: 'Budget pressures are real, but regulatory expectations for compliance resources are increasing.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['audit_chair', 'cfo', 'ceo']
    },
    options: [
      { id: 'r2_o1', label: 'Centralized compliance model', impact: { complianceMaturity: 0.1, controlEnvironment: 0.08, governanceEffectiveness: 0.05 }, risk: 'medium', stakeholderReactions: { audit_chair: 'positive', bu_president: 'negative', cco: 'positive' } },
      { id: 'r2_o2', label: 'Federated model with business partners', impact: { complianceMaturity: 0.08, ethicalCulture: 0.08, controlEnvironment: 0.05 }, risk: 'medium', stakeholderReactions: { bu_president: 'positive', cco: 'neutral', audit_chair: 'neutral' } },
      { id: 'r2_o3', label: 'Significant headcount investment', impact: { complianceMaturity: 0.12, auditReadiness: 0.1, controlEnvironment: 0.1 }, risk: 'low', stakeholderReactions: { audit_chair: 'very_positive', cfo: 'very_negative', primary_regulator: 'positive' } },
      { id: 'r2_o4', label: 'Technology-enabled lean model', impact: { complianceMaturity: 0.08, controlEnvironment: 0.08, auditReadiness: 0.05 }, risk: 'medium', stakeholderReactions: { cfo: 'positive', ceo: 'positive', internal_audit: 'concerned' } },
      { id: 'r2_o5', label: 'Outsource non-core compliance', impact: { complianceMaturity: 0.05, controlEnvironment: 0.05, auditReadiness: 0.02 }, risk: 'high', stakeholderReactions: { cfo: 'positive', primary_regulator: 'negative', internal_audit: 'negative' } },
      { id: 'r2_o6', label: 'Maintain current structure with tweaks', impact: { complianceMaturity: 0.02, controlEnvironment: 0.02, governanceEffectiveness: 0 }, risk: 'medium', stakeholderReactions: { cfo: 'positive', audit_chair: 'negative', primary_regulator: 'concerned' } }
    ]
  },

  {
    round: 3,
    phase: 'foundation',
    title: 'Compliance Risk Assessment',
    scenario: {
      description: 'The annual compliance risk assessment is due. Methodology and scope decisions will shape the compliance program for the year.',
      context: 'Last year\'s assessment missed key risks that later materialized. The board expects improvements.',
      pressure: 'medium',
      timeConstraint: 'urgent',
      stakeholderFocus: ['internal_audit', 'audit_chair', 'primary_regulator']
    },
    options: [
      { id: 'r3_o1', label: 'Comprehensive enterprise-wide assessment', impact: { complianceMaturity: 0.1, auditReadiness: 0.1, controlEnvironment: 0.08 }, risk: 'low', stakeholderReactions: { internal_audit: 'very_positive', audit_chair: 'positive', bu_president: 'negative' } },
      { id: 'r3_o2', label: 'Risk-based prioritized approach', impact: { complianceMaturity: 0.08, regulatoryStanding: 0.05, auditReadiness: 0.05 }, risk: 'medium', stakeholderReactions: { primary_regulator: 'positive', ceo: 'positive', internal_audit: 'neutral' } },
      { id: 'r3_o3', label: 'Regulatory-focused assessment', impact: { regulatoryStanding: 0.1, complianceMaturity: 0.05, auditReadiness: 0.05 }, risk: 'medium', stakeholderReactions: { primary_regulator: 'positive', reg_affairs_head: 'positive', ethics_officer: 'concerned' } },
      { id: 'r3_o4', label: 'Business-integrated assessment', impact: { complianceMaturity: 0.05, ethicalCulture: 0.08, controlEnvironment: 0.05 }, risk: 'medium', stakeholderReactions: { bu_president: 'positive', ops_head: 'positive', audit_chair: 'neutral' } },
      { id: 'r3_o5', label: 'External assessment with consultants', impact: { complianceMaturity: 0.1, governanceEffectiveness: 0.08, auditReadiness: 0.08 }, risk: 'low', stakeholderReactions: { audit_chair: 'positive', cfo: 'concerned', governance_analyst: 'positive' } },
      { id: 'r3_o6', label: 'Update last year\'s assessment', impact: { complianceMaturity: 0.02, auditReadiness: 0.02, controlEnvironment: 0 }, risk: 'high', stakeholderReactions: { audit_chair: 'negative', internal_audit: 'negative', primary_regulator: 'concerned' } }
    ]
  },

  {
    round: 4,
    phase: 'foundation',
    title: 'Policy Framework Overhaul',
    scenario: {
      description: 'The compliance policy framework is outdated and inconsistent. A comprehensive update is needed but requires significant effort.',
      context: 'Employees complain policies are confusing and contradictory. Regulators have noted policy gaps in recent examinations.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['general_counsel', 'ethics_officer', 'ops_head']
    },
    options: [
      { id: 'r4_o1', label: 'Complete policy framework redesign', impact: { complianceMaturity: 0.12, ethicalCulture: 0.08, controlEnvironment: 0.1 }, risk: 'medium', stakeholderReactions: { general_counsel: 'positive', ethics_officer: 'very_positive', bu_president: 'concerned' } },
      { id: 'r4_o2', label: 'Prioritize high-risk policy updates', impact: { complianceMaturity: 0.08, regulatoryStanding: 0.08, controlEnvironment: 0.05 }, risk: 'low', stakeholderReactions: { primary_regulator: 'positive', general_counsel: 'positive', ops_head: 'positive' } },
      { id: 'r4_o3', label: 'Simplification and consolidation focus', impact: { complianceMaturity: 0.05, ethicalCulture: 0.1, controlEnvironment: 0.05 }, risk: 'low', stakeholderReactions: { ops_head: 'very_positive', bu_president: 'positive', audit_chair: 'neutral' } },
      { id: 'r4_o4', label: 'Digital policy management platform', impact: { complianceMaturity: 0.1, auditReadiness: 0.1, controlEnvironment: 0.08 }, risk: 'medium', stakeholderReactions: { cfo: 'concerned', internal_audit: 'positive', ops_head: 'positive' } },
      { id: 'r4_o5', label: 'Employee-centered policy design', impact: { ethicalCulture: 0.12, complianceMaturity: 0.05, controlEnvironment: 0.05 }, risk: 'low', stakeholderReactions: { ethics_officer: 'very_positive', bu_president: 'positive', audit_chair: 'neutral' } },
      { id: 'r4_o6', label: 'Defer to next fiscal year', impact: { complianceMaturity: -0.02, ethicalCulture: -0.05, regulatoryStanding: -0.05 }, risk: 'high', stakeholderReactions: { primary_regulator: 'negative', ethics_officer: 'negative', audit_chair: 'negative' } }
    ]
  },

  {
    round: 5,
    phase: 'foundation',
    title: 'Training and Awareness Program',
    scenario: {
      description: 'Compliance training completion rates are low and effectiveness is questioned. A new approach is needed.',
      context: 'Recent incidents suggest employees don\'t understand compliance requirements. Regulators expect robust training programs.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['ethics_officer', 'bu_president', 'ops_head']
    },
    options: [
      { id: 'r5_o1', label: 'Mandatory comprehensive training program', impact: { ethicalCulture: 0.1, complianceMaturity: 0.08, controlEnvironment: 0.05 }, risk: 'low', stakeholderReactions: { ethics_officer: 'very_positive', bu_president: 'negative', primary_regulator: 'positive' } },
      { id: 'r5_o2', label: 'Role-based targeted training', impact: { ethicalCulture: 0.08, complianceMaturity: 0.08, controlEnvironment: 0.05 }, risk: 'low', stakeholderReactions: { ops_head: 'positive', bu_president: 'positive', ethics_officer: 'positive' } },
      { id: 'r5_o3', label: 'Interactive scenario-based learning', impact: { ethicalCulture: 0.12, complianceMaturity: 0.05, auditReadiness: 0.02 }, risk: 'medium', stakeholderReactions: { ethics_officer: 'very_positive', bu_president: 'neutral', cfo: 'concerned' } },
      { id: 'r5_o4', label: 'Manager-led compliance conversations', impact: { ethicalCulture: 0.1, complianceMaturity: 0.05, governanceEffectiveness: 0.05 }, risk: 'medium', stakeholderReactions: { bu_president: 'positive', ethics_officer: 'positive', audit_chair: 'neutral' } },
      { id: 'r5_o5', label: 'Compliance certification program', impact: { complianceMaturity: 0.1, ethicalCulture: 0.05, auditReadiness: 0.08 }, risk: 'low', stakeholderReactions: { internal_audit: 'positive', primary_regulator: 'positive', bu_president: 'concerned' } },
      { id: 'r5_o6', label: 'Minimal annual refresher only', impact: { ethicalCulture: -0.05, complianceMaturity: 0, regulatoryStanding: -0.05 }, risk: 'high', stakeholderReactions: { primary_regulator: 'negative', ethics_officer: 'very_negative', audit_chair: 'negative' } }
    ]
  },

  {
    round: 6,
    phase: 'foundation',
    title: 'Board Reporting Framework',
    scenario: {
      description: 'The board has requested enhanced compliance reporting. You must design a reporting framework that is informative without overwhelming.',
      context: 'Current reports are inconsistent and lack actionable insights. The audit committee wants leading indicators.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['audit_chair', 'board_chair', 'ceo']
    },
    options: [
      { id: 'r6_o1', label: 'Comprehensive compliance dashboard', impact: { governanceEffectiveness: 0.12, auditReadiness: 0.08, complianceMaturity: 0.05 }, risk: 'low', stakeholderReactions: { audit_chair: 'very_positive', board_chair: 'positive', cfo: 'concerned' } },
      { id: 'r6_o2', label: 'Risk-based exception reporting', impact: { governanceEffectiveness: 0.1, complianceMaturity: 0.05, auditReadiness: 0.05 }, risk: 'low', stakeholderReactions: { audit_chair: 'positive', ceo: 'positive', internal_audit: 'positive' } },
      { id: 'r6_o3', label: 'Quarterly deep-dive rotation', impact: { governanceEffectiveness: 0.08, complianceMaturity: 0.08, ethicalCulture: 0.02 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', audit_chair: 'positive', bu_president: 'neutral' } },
      { id: 'r6_o4', label: 'KRI-focused reporting', impact: { governanceEffectiveness: 0.1, auditReadiness: 0.1, controlEnvironment: 0.05 }, risk: 'medium', stakeholderReactions: { audit_chair: 'very_positive', internal_audit: 'positive', ceo: 'neutral' } },
      { id: 'r6_o5', label: 'Regulatory-aligned reporting', impact: { regulatoryStanding: 0.08, governanceEffectiveness: 0.08, auditReadiness: 0.08 }, risk: 'low', stakeholderReactions: { primary_regulator: 'positive', audit_chair: 'positive', governance_analyst: 'positive' } },
      { id: 'r6_o6', label: 'Maintain current reporting', impact: { governanceEffectiveness: 0, auditReadiness: -0.02, complianceMaturity: 0 }, risk: 'medium', stakeholderReactions: { audit_chair: 'negative', board_chair: 'concerned', governance_analyst: 'negative' } }
    ]
  },

  // PHASE 2: OPERATIONALIZING (Rounds 7-12)
  {
    round: 7,
    phase: 'operationalizing',
    title: 'Regulatory Examination Preparation',
    scenario: {
      description: 'A comprehensive regulatory examination has been announced for next quarter. Preparation will be critical to the outcome.',
      context: 'The last examination resulted in several findings. The regulator expects to see meaningful progress.',
      pressure: 'high',
      timeConstraint: 'urgent',
      stakeholderFocus: ['primary_regulator', 'reg_affairs_head', 'audit_chair']
    },
    options: [
      { id: 'r7_o1', label: 'Full examination readiness program', impact: { auditReadiness: 0.15, regulatoryStanding: 0.08, complianceMaturity: 0.05 }, risk: 'low', stakeholderReactions: { primary_regulator: 'positive', reg_affairs_head: 'very_positive', bu_president: 'concerned' } },
      { id: 'r7_o2', label: 'Close prior findings aggressively', impact: { regulatoryStanding: 0.12, auditReadiness: 0.08, controlEnvironment: 0.08 }, risk: 'medium', stakeholderReactions: { primary_regulator: 'positive', audit_chair: 'positive', ops_head: 'concerned' } },
      { id: 'r7_o3', label: 'Proactive regulator engagement', impact: { regulatoryStanding: 0.1, governanceEffectiveness: 0.05, auditReadiness: 0.05 }, risk: 'medium', stakeholderReactions: { primary_regulator: 'positive', ceo: 'positive', reg_affairs_head: 'positive' } },
      { id: 'r7_o4', label: 'Document enhancement focus', impact: { auditReadiness: 0.12, controlEnvironment: 0.08, complianceMaturity: 0.05 }, risk: 'low', stakeholderReactions: { internal_audit: 'positive', external_auditor: 'positive', ops_head: 'neutral' } },
      { id: 'r7_o5', label: 'Mock examination exercise', impact: { auditReadiness: 0.1, complianceMaturity: 0.08, ethicalCulture: 0.05 }, risk: 'low', stakeholderReactions: { audit_chair: 'positive', reg_affairs_head: 'positive', bu_president: 'neutral' } },
      { id: 'r7_o6', label: 'Business as usual approach', impact: { auditReadiness: -0.05, regulatoryStanding: -0.1, governanceEffectiveness: -0.05 }, risk: 'very_high', stakeholderReactions: { primary_regulator: 'very_negative', audit_chair: 'very_negative', reg_affairs_head: 'very_negative' } }
    ]
  },

  {
    round: 8,
    phase: 'operationalizing',
    title: 'Whistleblower Allegation',
    scenario: {
      description: 'A whistleblower has alleged systematic compliance violations in a major business unit. The allegations are serious and specific.',
      context: 'The business unit is a top performer. The executive accused is well-connected and disputes the allegations.',
      pressure: 'critical',
      timeConstraint: 'immediate',
      stakeholderFocus: ['ethics_officer', 'general_counsel', 'audit_chair']
    },
    options: [
      { id: 'r8_o1', label: 'Independent external investigation', impact: { ethicalCulture: 0.1, governanceEffectiveness: 0.1, regulatoryStanding: 0.05 }, risk: 'medium', stakeholderReactions: { audit_chair: 'very_positive', ethics_officer: 'positive', bu_president: 'very_negative' } },
      { id: 'r8_o2', label: 'Internal investigation with oversight', impact: { ethicalCulture: 0.08, governanceEffectiveness: 0.05, complianceMaturity: 0.05 }, risk: 'medium', stakeholderReactions: { general_counsel: 'positive', audit_chair: 'neutral', ethics_officer: 'neutral' } },
      { id: 'r8_o3', label: 'Immediate administrative leave for accused', impact: { ethicalCulture: 0.12, governanceEffectiveness: 0.08, complianceMaturity: 0.02 }, risk: 'medium', stakeholderReactions: { ethics_officer: 'positive', bu_president: 'very_negative', ceo: 'concerned' } },
      { id: 'r8_o4', label: 'Quiet preliminary inquiry', impact: { ethicalCulture: -0.05, governanceEffectiveness: 0.02, regulatoryStanding: -0.05 }, risk: 'high', stakeholderReactions: { audit_chair: 'negative', ethics_officer: 'negative', primary_regulator: 'concerned' } },
      { id: 'r8_o5', label: 'Board notification and guidance', impact: { governanceEffectiveness: 0.1, ethicalCulture: 0.08, auditReadiness: 0.05 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', audit_chair: 'very_positive', ceo: 'neutral' } },
      { id: 'r8_o6', label: 'Discredit whistleblower', impact: { ethicalCulture: -0.2, governanceEffectiveness: -0.15, regulatoryStanding: -0.15 }, risk: 'very_high', stakeholderReactions: { ethics_officer: 'very_negative', primary_regulator: 'very_negative', governance_analyst: 'very_negative' } }
    ]
  },

  {
    round: 9,
    phase: 'operationalizing',
    title: 'Third-Party Risk Event',
    scenario: {
      description: 'A critical vendor has experienced a data breach that may have exposed customer information. Your third-party risk program is under scrutiny.',
      context: 'The vendor was rated low-risk in your assessment. Due diligence documentation is incomplete.',
      pressure: 'critical',
      timeConstraint: 'immediate',
      stakeholderFocus: ['primary_regulator', 'general_counsel', 'ops_head']
    },
    options: [
      { id: 'r9_o1', label: 'Immediate vendor relationship suspension', impact: { controlEnvironment: 0.08, regulatoryStanding: 0.05, complianceMaturity: 0.02 }, risk: 'medium', stakeholderReactions: { primary_regulator: 'positive', ops_head: 'very_negative', bu_president: 'very_negative' } },
      { id: 'r9_o2', label: 'Proactive customer notification', impact: { ethicalCulture: 0.1, regulatoryStanding: 0.08, governanceEffectiveness: 0.05 }, risk: 'medium', stakeholderReactions: { primary_regulator: 'positive', general_counsel: 'concerned', ceo: 'neutral' } },
      { id: 'r9_o3', label: 'Comprehensive third-party program review', impact: { complianceMaturity: 0.12, controlEnvironment: 0.1, auditReadiness: 0.08 }, risk: 'low', stakeholderReactions: { audit_chair: 'positive', internal_audit: 'very_positive', ops_head: 'concerned' } },
      { id: 'r9_o4', label: 'Incident response and containment', impact: { controlEnvironment: 0.08, complianceMaturity: 0.05, auditReadiness: 0.05 }, risk: 'low', stakeholderReactions: { ops_head: 'positive', general_counsel: 'positive', primary_regulator: 'neutral' } },
      { id: 'r9_o5', label: 'Regulatory self-disclosure', impact: { regulatoryStanding: 0.1, ethicalCulture: 0.08, governanceEffectiveness: 0.05 }, risk: 'medium', stakeholderReactions: { primary_regulator: 'very_positive', ceo: 'concerned', general_counsel: 'neutral' } },
      { id: 'r9_o6', label: 'Minimize and monitor situation', impact: { regulatoryStanding: -0.1, ethicalCulture: -0.08, controlEnvironment: -0.05 }, risk: 'very_high', stakeholderReactions: { primary_regulator: 'very_negative', audit_chair: 'negative', ethics_officer: 'negative' } }
    ]
  },

  {
    round: 10,
    phase: 'operationalizing',
    title: 'Compliance Technology Investment',
    scenario: {
      description: 'Current compliance systems are fragmented and manual. A major technology investment could transform capability but requires significant resources.',
      context: 'Competitors are investing heavily in RegTech. Manual processes are causing compliance gaps.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['cfo', 'audit_chair', 'ops_head']
    },
    options: [
      { id: 'r10_o1', label: 'Enterprise GRC platform implementation', impact: { complianceMaturity: 0.15, auditReadiness: 0.12, controlEnvironment: 0.1 }, risk: 'medium', stakeholderReactions: { audit_chair: 'very_positive', cfo: 'negative', ops_head: 'positive' } },
      { id: 'r10_o2', label: 'Best-of-breed point solutions', impact: { complianceMaturity: 0.1, auditReadiness: 0.08, controlEnvironment: 0.08 }, risk: 'medium', stakeholderReactions: { cfo: 'neutral', ops_head: 'positive', internal_audit: 'positive' } },
      { id: 'r10_o3', label: 'Phased modernization approach', impact: { complianceMaturity: 0.08, auditReadiness: 0.08, controlEnvironment: 0.05 }, risk: 'low', stakeholderReactions: { cfo: 'positive', audit_chair: 'positive', ceo: 'positive' } },
      { id: 'r10_o4', label: 'AI-powered compliance monitoring', impact: { complianceMaturity: 0.12, controlEnvironment: 0.1, auditReadiness: 0.05 }, risk: 'high', stakeholderReactions: { ceo: 'positive', ethics_officer: 'concerned', internal_audit: 'concerned' } },
      { id: 'r10_o5', label: 'Process improvement before technology', impact: { complianceMaturity: 0.08, controlEnvironment: 0.1, ethicalCulture: 0.05 }, risk: 'low', stakeholderReactions: { ops_head: 'very_positive', cfo: 'positive', audit_chair: 'neutral' } },
      { id: 'r10_o6', label: 'Defer technology investment', impact: { complianceMaturity: -0.02, auditReadiness: -0.05, controlEnvironment: -0.02 }, risk: 'medium', stakeholderReactions: { audit_chair: 'negative', internal_audit: 'negative', governance_analyst: 'concerned' } }
    ]
  },

  {
    round: 11,
    phase: 'operationalizing',
    title: 'Regulatory Change Response',
    scenario: {
      description: 'A significant new regulation has been finalized with a 12-month implementation deadline. The scope is broad and requirements are complex.',
      context: 'Industry peers are struggling with implementation. The regulation represents a fundamental shift in compliance expectations.',
      pressure: 'high',
      timeConstraint: 'urgent',
      stakeholderFocus: ['reg_affairs_head', 'general_counsel', 'ops_head']
    },
    options: [
      { id: 'r11_o1', label: 'Comprehensive implementation program', impact: { complianceMaturity: 0.12, regulatoryStanding: 0.1, controlEnvironment: 0.08 }, risk: 'medium', stakeholderReactions: { primary_regulator: 'positive', audit_chair: 'positive', bu_president: 'concerned' } },
      { id: 'r11_o2', label: 'Minimum viable compliance approach', impact: { complianceMaturity: 0.05, regulatoryStanding: 0.02, controlEnvironment: 0.02 }, risk: 'high', stakeholderReactions: { cfo: 'positive', primary_regulator: 'concerned', audit_chair: 'concerned' } },
      { id: 'r11_o3', label: 'Industry coalition for interpretation', impact: { regulatoryStanding: 0.08, complianceMaturity: 0.05, governanceEffectiveness: 0.05 }, risk: 'medium', stakeholderReactions: { reg_affairs_head: 'positive', general_counsel: 'positive', primary_regulator: 'neutral' } },
      { id: 'r11_o4', label: 'Technology-enabled compliance', impact: { complianceMaturity: 0.1, controlEnvironment: 0.1, auditReadiness: 0.08 }, risk: 'medium', stakeholderReactions: { ops_head: 'positive', cfo: 'neutral', audit_chair: 'positive' } },
      { id: 'r11_o5', label: 'Request implementation extension', impact: { regulatoryStanding: -0.05, complianceMaturity: 0.02, governanceEffectiveness: 0 }, risk: 'high', stakeholderReactions: { primary_regulator: 'negative', audit_chair: 'concerned', governance_analyst: 'negative' } },
      { id: 'r11_o6', label: 'Wait for regulatory guidance', impact: { complianceMaturity: -0.05, regulatoryStanding: -0.08, auditReadiness: -0.05 }, risk: 'very_high', stakeholderReactions: { primary_regulator: 'very_negative', audit_chair: 'negative', reg_affairs_head: 'negative' } }
    ]
  },

  {
    round: 12,
    phase: 'operationalizing',
    title: 'Business Partnership Tension',
    scenario: {
      description: 'A major business initiative requires compliance sign-off, but the design raises significant concerns. The business is pressuring for approval.',
      context: 'The initiative is critical to meeting quarterly targets. Delaying could have significant financial impact.',
      pressure: 'high',
      timeConstraint: 'urgent',
      stakeholderFocus: ['bu_president', 'ceo', 'general_counsel']
    },
    options: [
      { id: 'r12_o1', label: 'Decline approval citing risks', impact: { ethicalCulture: 0.1, complianceMaturity: 0.08, governanceEffectiveness: 0.05 }, risk: 'low', stakeholderReactions: { audit_chair: 'positive', bu_president: 'very_negative', ceo: 'concerned' } },
      { id: 'r12_o2', label: 'Conditional approval with mitigations', impact: { ethicalCulture: 0.05, complianceMaturity: 0.05, controlEnvironment: 0.05 }, risk: 'medium', stakeholderReactions: { bu_president: 'neutral', ceo: 'positive', general_counsel: 'positive' } },
      { id: 'r12_o3', label: 'Collaborative redesign of initiative', impact: { ethicalCulture: 0.08, complianceMaturity: 0.08, governanceEffectiveness: 0.08 }, risk: 'low', stakeholderReactions: { bu_president: 'neutral', ops_head: 'positive', audit_chair: 'positive' } },
      { id: 'r12_o4', label: 'Escalate to CEO for decision', impact: { governanceEffectiveness: 0.08, ethicalCulture: 0.02, complianceMaturity: 0.02 }, risk: 'medium', stakeholderReactions: { ceo: 'neutral', bu_president: 'negative', audit_chair: 'positive' } },
      { id: 'r12_o5', label: 'Approve with documented concerns', impact: { ethicalCulture: -0.05, regulatoryStanding: -0.05, complianceMaturity: -0.02 }, risk: 'high', stakeholderReactions: { bu_president: 'positive', primary_regulator: 'negative', ethics_officer: 'negative' } },
      { id: 'r12_o6', label: 'Approve without documentation', impact: { ethicalCulture: -0.15, regulatoryStanding: -0.1, complianceMaturity: -0.1 }, risk: 'very_high', stakeholderReactions: { bu_president: 'positive', audit_chair: 'very_negative', primary_regulator: 'very_negative' } }
    ]
  },

  // PHASE 3: CRISIS MANAGEMENT (Rounds 13-18)
  {
    round: 13,
    phase: 'crisis',
    title: 'Regulatory Enforcement Action',
    scenario: {
      description: 'The regulator has issued a formal enforcement action citing compliance deficiencies. A consent order with significant remediation requirements is proposed.',
      context: 'The action will be public. Management response will be scrutinized by board, investors, and media.',
      pressure: 'critical',
      timeConstraint: 'urgent',
      stakeholderFocus: ['primary_regulator', 'board_chair', 'ceo']
    },
    options: [
      { id: 'r13_o1', label: 'Accept order and commit to remediation', impact: { regulatoryStanding: 0.05, governanceEffectiveness: 0.08, complianceMaturity: 0.05 }, risk: 'low', stakeholderReactions: { primary_regulator: 'positive', board_chair: 'neutral', governance_analyst: 'neutral' } },
      { id: 'r13_o2', label: 'Negotiate reduced terms', impact: { regulatoryStanding: 0.02, governanceEffectiveness: 0.02, complianceMaturity: 0.02 }, risk: 'medium', stakeholderReactions: { general_counsel: 'positive', primary_regulator: 'neutral', audit_chair: 'neutral' } },
      { id: 'r13_o3', label: 'Contest findings formally', impact: { regulatoryStanding: -0.15, governanceEffectiveness: -0.05, ethicalCulture: -0.05 }, risk: 'very_high', stakeholderReactions: { primary_regulator: 'very_negative', board_chair: 'concerned', governance_analyst: 'negative' } },
      { id: 'r13_o4', label: 'Board-led transformation commitment', impact: { governanceEffectiveness: 0.15, regulatoryStanding: 0.1, complianceMaturity: 0.1 }, risk: 'medium', stakeholderReactions: { board_chair: 'positive', primary_regulator: 'very_positive', governance_analyst: 'positive' } },
      { id: 'r13_o5', label: 'Management accountability actions', impact: { ethicalCulture: 0.12, governanceEffectiveness: 0.1, regulatoryStanding: 0.05 }, risk: 'medium', stakeholderReactions: { comp_chair: 'positive', primary_regulator: 'positive', ceo: 'concerned' } },
      { id: 'r13_o6', label: 'Minimize public disclosure', impact: { regulatoryStanding: -0.1, ethicalCulture: -0.1, governanceEffectiveness: -0.08 }, risk: 'high', stakeholderReactions: { primary_regulator: 'negative', governance_analyst: 'very_negative', ethics_officer: 'negative' } }
    ]
  },

  {
    round: 14,
    phase: 'crisis',
    title: 'Data Privacy Breach',
    scenario: {
      description: 'A significant data breach has been discovered affecting millions of customer records. Multiple regulatory notifications are required.',
      context: 'The breach exploited a known vulnerability that was not remediated. Documentation of compliance decisions is incomplete.',
      pressure: 'critical',
      timeConstraint: 'immediate',
      stakeholderFocus: ['primary_regulator', 'general_counsel', 'ceo']
    },
    options: [
      { id: 'r14_o1', label: 'Immediate multi-regulator notification', impact: { regulatoryStanding: 0.08, ethicalCulture: 0.1, governanceEffectiveness: 0.05 }, risk: 'medium', stakeholderReactions: { primary_regulator: 'positive', ethics_officer: 'positive', general_counsel: 'neutral' } },
      { id: 'r14_o2', label: 'Proactive customer notification', impact: { ethicalCulture: 0.12, regulatoryStanding: 0.05, governanceEffectiveness: 0.02 }, risk: 'medium', stakeholderReactions: { ethics_officer: 'very_positive', ceo: 'neutral', cfo: 'concerned' } },
      { id: 'r14_o3', label: 'Comprehensive incident response', impact: { controlEnvironment: 0.1, complianceMaturity: 0.08, auditReadiness: 0.05 }, risk: 'low', stakeholderReactions: { ops_head: 'positive', audit_chair: 'positive', primary_regulator: 'positive' } },
      { id: 'r14_o4', label: 'External forensic investigation', impact: { governanceEffectiveness: 0.1, auditReadiness: 0.1, regulatoryStanding: 0.05 }, risk: 'low', stakeholderReactions: { audit_chair: 'very_positive', general_counsel: 'positive', cfo: 'concerned' } },
      { id: 'r14_o5', label: 'Delay notification pending assessment', impact: { regulatoryStanding: -0.1, ethicalCulture: -0.08, governanceEffectiveness: -0.05 }, risk: 'very_high', stakeholderReactions: { primary_regulator: 'very_negative', ethics_officer: 'negative', general_counsel: 'concerned' } },
      { id: 'r14_o6', label: 'Contain breach and minimize scope', impact: { regulatoryStanding: -0.05, ethicalCulture: -0.1, complianceMaturity: -0.05 }, risk: 'high', stakeholderReactions: { primary_regulator: 'negative', governance_analyst: 'negative', ethics_officer: 'negative' } }
    ]
  },

  {
    round: 15,
    phase: 'crisis',
    title: 'Executive Misconduct Confirmed',
    scenario: {
      description: 'The investigation into the whistleblower allegations has confirmed systematic misconduct by senior executives. The board must act.',
      context: 'The executives involved are high performers with significant institutional knowledge. Legal exposure is substantial.',
      pressure: 'critical',
      timeConstraint: 'urgent',
      stakeholderFocus: ['board_chair', 'comp_chair', 'general_counsel']
    },
    options: [
      { id: 'r15_o1', label: 'Immediate termination and disclosure', impact: { ethicalCulture: 0.15, governanceEffectiveness: 0.12, regulatoryStanding: 0.08 }, risk: 'medium', stakeholderReactions: { ethics_officer: 'very_positive', primary_regulator: 'positive', bu_president: 'concerned' } },
      { id: 'r15_o2', label: 'Clawback compensation and terminate', impact: { ethicalCulture: 0.12, governanceEffectiveness: 0.1, complianceMaturity: 0.05 }, risk: 'medium', stakeholderReactions: { comp_chair: 'very_positive', governance_analyst: 'positive', general_counsel: 'neutral' } },
      { id: 'r15_o3', label: 'Refer to authorities for prosecution', impact: { ethicalCulture: 0.1, regulatoryStanding: 0.1, governanceEffectiveness: 0.08 }, risk: 'high', stakeholderReactions: { primary_regulator: 'very_positive', ethics_officer: 'positive', ceo: 'concerned' } },
      { id: 'r15_o4', label: 'Quiet resignation with NDA', impact: { ethicalCulture: -0.15, governanceEffectiveness: -0.1, regulatoryStanding: -0.1 }, risk: 'very_high', stakeholderReactions: { ethics_officer: 'very_negative', primary_regulator: 'very_negative', governance_analyst: 'very_negative' } },
      { id: 'r15_o5', label: 'Board-led culture review', impact: { ethicalCulture: 0.1, governanceEffectiveness: 0.1, complianceMaturity: 0.05 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', ethics_officer: 'positive', audit_chair: 'positive' } },
      { id: 'r15_o6', label: 'Disciplinary action without termination', impact: { ethicalCulture: -0.08, governanceEffectiveness: -0.05, regulatoryStanding: -0.05 }, risk: 'high', stakeholderReactions: { ethics_officer: 'negative', primary_regulator: 'negative', governance_analyst: 'negative' } }
    ]
  },

  {
    round: 16,
    phase: 'crisis',
    title: 'Control Failure',
    scenario: {
      description: 'A material weakness in internal controls has been identified that affects financial reporting. External auditors may issue a qualified opinion.',
      context: 'The weakness existed for multiple quarters. Prior certifications may be questioned.',
      pressure: 'critical',
      timeConstraint: 'urgent',
      stakeholderFocus: ['external_auditor', 'cfo', 'audit_chair']
    },
    options: [
      { id: 'r16_o1', label: 'Immediate remediation program', impact: { controlEnvironment: 0.12, auditReadiness: 0.1, governanceEffectiveness: 0.08 }, risk: 'medium', stakeholderReactions: { external_auditor: 'positive', audit_chair: 'positive', cfo: 'neutral' } },
      { id: 'r16_o2', label: 'Restate prior financials if needed', impact: { governanceEffectiveness: 0.1, ethicalCulture: 0.1, regulatoryStanding: 0.05 }, risk: 'high', stakeholderReactions: { external_auditor: 'very_positive', cfo: 'concerned', ceo: 'concerned' } },
      { id: 'r16_o3', label: 'Proactive SEC disclosure', impact: { regulatoryStanding: 0.1, governanceEffectiveness: 0.08, ethicalCulture: 0.08 }, risk: 'medium', stakeholderReactions: { primary_regulator: 'positive', governance_analyst: 'positive', general_counsel: 'neutral' } },
      { id: 'r16_o4', label: 'Management accountability review', impact: { ethicalCulture: 0.08, governanceEffectiveness: 0.1, controlEnvironment: 0.05 }, risk: 'medium', stakeholderReactions: { comp_chair: 'positive', audit_chair: 'positive', cfo: 'concerned' } },
      { id: 'r16_o5', label: 'Negotiate with auditors on timing', impact: { controlEnvironment: 0.05, auditReadiness: 0.05, governanceEffectiveness: 0 }, risk: 'high', stakeholderReactions: { external_auditor: 'concerned', audit_chair: 'concerned', cfo: 'positive' } },
      { id: 'r16_o6', label: 'Challenge auditor assessment', impact: { controlEnvironment: -0.05, governanceEffectiveness: -0.08, regulatoryStanding: -0.1 }, risk: 'very_high', stakeholderReactions: { external_auditor: 'very_negative', audit_chair: 'very_negative', primary_regulator: 'negative' } }
    ]
  },

  {
    round: 17,
    phase: 'crisis',
    title: 'Reputational Crisis',
    scenario: {
      description: 'Media coverage of compliance failures is intensifying. Social media criticism is viral. Employee morale is suffering.',
      context: 'The CEO is being personally criticized. Customers are questioning the relationship.',
      pressure: 'critical',
      timeConstraint: 'immediate',
      stakeholderFocus: ['ceo', 'board_chair', 'governance_analyst']
    },
    options: [
      { id: 'r17_o1', label: 'CEO public accountability statement', impact: { ethicalCulture: 0.1, governanceEffectiveness: 0.08, complianceMaturity: 0.02 }, risk: 'medium', stakeholderReactions: { governance_analyst: 'positive', board_chair: 'neutral', ceo: 'concerned' } },
      { id: 'r17_o2', label: 'Comprehensive stakeholder engagement', impact: { ethicalCulture: 0.08, governanceEffectiveness: 0.1, regulatoryStanding: 0.05 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', ethics_officer: 'positive', ceo: 'positive' } },
      { id: 'r17_o3', label: 'Independent board investigation', impact: { governanceEffectiveness: 0.12, ethicalCulture: 0.1, auditReadiness: 0.08 }, risk: 'low', stakeholderReactions: { governance_analyst: 'very_positive', audit_chair: 'positive', ceo: 'concerned' } },
      { id: 'r17_o4', label: 'Crisis communications campaign', impact: { ethicalCulture: 0.05, governanceEffectiveness: 0.05, complianceMaturity: 0.02 }, risk: 'medium', stakeholderReactions: { ceo: 'positive', governance_analyst: 'neutral', ethics_officer: 'neutral' } },
      { id: 'r17_o5', label: 'Legal defensive posture', impact: { governanceEffectiveness: -0.05, ethicalCulture: -0.08, regulatoryStanding: -0.05 }, risk: 'high', stakeholderReactions: { governance_analyst: 'negative', ethics_officer: 'negative', board_chair: 'concerned' } },
      { id: 'r17_o6', label: 'Wait for news cycle to pass', impact: { ethicalCulture: -0.1, governanceEffectiveness: -0.08, regulatoryStanding: -0.08 }, risk: 'very_high', stakeholderReactions: { governance_analyst: 'very_negative', board_chair: 'negative', primary_regulator: 'negative' } }
    ]
  },

  {
    round: 18,
    phase: 'crisis',
    title: 'Board Confidence Crisis',
    scenario: {
      description: 'Following the cascade of compliance failures, some board members are questioning the compliance leadership. Your position is under review.',
      context: 'You inherited many of the problems but are being held accountable. The CEO is supportive but facing pressure.',
      pressure: 'critical',
      timeConstraint: 'urgent',
      stakeholderFocus: ['board_chair', 'audit_chair', 'ceo']
    },
    options: [
      { id: 'r18_o1', label: 'Present comprehensive transformation plan', impact: { complianceMaturity: 0.1, governanceEffectiveness: 0.1, auditReadiness: 0.08 }, risk: 'medium', stakeholderReactions: { board_chair: 'positive', audit_chair: 'positive', ceo: 'positive' } },
      { id: 'r18_o2', label: 'Request external program assessment', impact: { complianceMaturity: 0.08, governanceEffectiveness: 0.1, auditReadiness: 0.08 }, risk: 'low', stakeholderReactions: { audit_chair: 'positive', board_chair: 'positive', internal_audit: 'positive' } },
      { id: 'r18_o3', label: 'Individual director engagement', impact: { governanceEffectiveness: 0.08, complianceMaturity: 0.05, ethicalCulture: 0.05 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', audit_chair: 'positive', ceo: 'positive' } },
      { id: 'r18_o4', label: 'Offer to resign if targets not met', impact: { ethicalCulture: 0.1, governanceEffectiveness: 0.08, complianceMaturity: 0.02 }, risk: 'high', stakeholderReactions: { audit_chair: 'positive', board_chair: 'neutral', ceo: 'concerned' } },
      { id: 'r18_o5', label: 'Document inherited issues', impact: { governanceEffectiveness: 0.02, complianceMaturity: 0.02, ethicalCulture: -0.05 }, risk: 'medium', stakeholderReactions: { board_chair: 'concerned', ceo: 'concerned', audit_chair: 'neutral' } },
      { id: 'r18_o6', label: 'Defend current approach', impact: { governanceEffectiveness: -0.05, complianceMaturity: -0.02, ethicalCulture: -0.05 }, risk: 'high', stakeholderReactions: { audit_chair: 'negative', board_chair: 'negative', ceo: 'concerned' } }
    ]
  },

  // PHASE 4: TRANSFORMATION (Rounds 19-24)
  {
    round: 19,
    phase: 'transformation',
    title: 'Compliance Operating Model',
    scenario: {
      description: 'With board support for transformation, you must redesign the compliance operating model for sustainable effectiveness.',
      context: 'Resources have been approved but expectations are high. The new model must balance control with business enablement.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['audit_chair', 'ceo', 'bu_president']
    },
    options: [
      { id: 'r19_o1', label: 'Three lines model enhancement', impact: { complianceMaturity: 0.12, governanceEffectiveness: 0.1, controlEnvironment: 0.1 }, risk: 'low', stakeholderReactions: { internal_audit: 'very_positive', audit_chair: 'positive', bu_president: 'neutral' } },
      { id: 'r19_o2', label: 'Business-integrated compliance', impact: { complianceMaturity: 0.1, ethicalCulture: 0.1, controlEnvironment: 0.08 }, risk: 'medium', stakeholderReactions: { bu_president: 'very_positive', ops_head: 'positive', internal_audit: 'concerned' } },
      { id: 'r19_o3', label: 'Technology-first operating model', impact: { complianceMaturity: 0.12, auditReadiness: 0.12, controlEnvironment: 0.1 }, risk: 'medium', stakeholderReactions: { cfo: 'neutral', audit_chair: 'positive', ops_head: 'positive' } },
      { id: 'r19_o4', label: 'Risk-based compliance framework', impact: { complianceMaturity: 0.1, regulatoryStanding: 0.08, governanceEffectiveness: 0.08 }, risk: 'low', stakeholderReactions: { primary_regulator: 'positive', audit_chair: 'positive', internal_audit: 'positive' } },
      { id: 'r19_o5', label: 'Agile compliance methodology', impact: { complianceMaturity: 0.08, ethicalCulture: 0.08, controlEnvironment: 0.05 }, risk: 'medium', stakeholderReactions: { bu_president: 'positive', ops_head: 'positive', audit_chair: 'concerned' } },
      { id: 'r19_o6', label: 'Traditional enhanced model', impact: { complianceMaturity: 0.05, governanceEffectiveness: 0.05, controlEnvironment: 0.05 }, risk: 'low', stakeholderReactions: { internal_audit: 'positive', audit_chair: 'neutral', bu_president: 'neutral' } }
    ]
  },

  {
    round: 20,
    phase: 'transformation',
    title: 'Ethical Culture Transformation',
    scenario: {
      description: 'Compliance failures revealed cultural issues that must be addressed. A comprehensive culture transformation is needed.',
      context: 'Employee trust is low. Rebuilding ethical culture will require sustained effort and visible leadership commitment.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['ethics_officer', 'ceo', 'board_chair']
    },
    options: [
      { id: 'r20_o1', label: 'CEO-led culture transformation', impact: { ethicalCulture: 0.15, governanceEffectiveness: 0.08, complianceMaturity: 0.05 }, risk: 'medium', stakeholderReactions: { ceo: 'positive', ethics_officer: 'very_positive', board_chair: 'positive' } },
      { id: 'r20_o2', label: 'Values and ethics integration', impact: { ethicalCulture: 0.12, complianceMaturity: 0.08, governanceEffectiveness: 0.05 }, risk: 'low', stakeholderReactions: { ethics_officer: 'very_positive', bu_president: 'neutral', comp_chair: 'positive' } },
      { id: 'r20_o3', label: 'Accountability and consequences focus', impact: { ethicalCulture: 0.1, governanceEffectiveness: 0.1, controlEnvironment: 0.08 }, risk: 'medium', stakeholderReactions: { comp_chair: 'very_positive', ethics_officer: 'positive', bu_president: 'concerned' } },
      { id: 'r20_o4', label: 'Speak-up culture investment', impact: { ethicalCulture: 0.12, complianceMaturity: 0.05, governanceEffectiveness: 0.05 }, risk: 'low', stakeholderReactions: { ethics_officer: 'very_positive', audit_chair: 'positive', bu_president: 'neutral' } },
      { id: 'r20_o5', label: 'Recognition and incentive alignment', impact: { ethicalCulture: 0.1, complianceMaturity: 0.05, controlEnvironment: 0.05 }, risk: 'low', stakeholderReactions: { comp_chair: 'positive', bu_president: 'positive', ethics_officer: 'positive' } },
      { id: 'r20_o6', label: 'Training and communication focus', impact: { ethicalCulture: 0.08, complianceMaturity: 0.05, governanceEffectiveness: 0.02 }, risk: 'low', stakeholderReactions: { ethics_officer: 'positive', bu_president: 'positive', audit_chair: 'neutral' } }
    ]
  },

  {
    round: 21,
    phase: 'transformation',
    title: 'Regulatory Relationship Rebuilding',
    scenario: {
      description: 'Regulatory relationships were damaged by the compliance failures. Rebuilding trust with regulators is essential for sustainable operations.',
      context: 'Enhanced supervision continues. The regulator wants to see sustained improvement, not just quick fixes.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['primary_regulator', 'reg_affairs_head', 'ceo']
    },
    options: [
      { id: 'r21_o1', label: 'Proactive regulatory engagement program', impact: { regulatoryStanding: 0.12, governanceEffectiveness: 0.08, complianceMaturity: 0.05 }, risk: 'low', stakeholderReactions: { primary_regulator: 'very_positive', reg_affairs_head: 'positive', ceo: 'positive' } },
      { id: 'r21_o2', label: 'Transparent progress reporting', impact: { regulatoryStanding: 0.1, ethicalCulture: 0.08, governanceEffectiveness: 0.08 }, risk: 'low', stakeholderReactions: { primary_regulator: 'positive', audit_chair: 'positive', governance_analyst: 'positive' } },
      { id: 'r21_o3', label: 'Industry leadership on compliance', impact: { regulatoryStanding: 0.1, complianceMaturity: 0.08, ethicalCulture: 0.05 }, risk: 'medium', stakeholderReactions: { primary_regulator: 'positive', governance_analyst: 'positive', ceo: 'positive' } },
      { id: 'r21_o4', label: 'Regulatory secondment program', impact: { regulatoryStanding: 0.08, complianceMaturity: 0.08, governanceEffectiveness: 0.05 }, risk: 'low', stakeholderReactions: { primary_regulator: 'positive', reg_affairs_head: 'very_positive', internal_audit: 'positive' } },
      { id: 'r21_o5', label: 'Self-assessment and disclosure', impact: { regulatoryStanding: 0.1, ethicalCulture: 0.1, auditReadiness: 0.08 }, risk: 'medium', stakeholderReactions: { primary_regulator: 'very_positive', audit_chair: 'positive', general_counsel: 'neutral' } },
      { id: 'r21_o6', label: 'Minimum required engagement', impact: { regulatoryStanding: 0.02, complianceMaturity: 0.02, governanceEffectiveness: 0 }, risk: 'medium', stakeholderReactions: { primary_regulator: 'neutral', reg_affairs_head: 'concerned', audit_chair: 'concerned' } }
    ]
  },

  {
    round: 22,
    phase: 'transformation',
    title: 'Compliance Talent Strategy',
    scenario: {
      description: 'The compliance team needs new capabilities for the transformed program. Traditional compliance skills are insufficient.',
      context: 'Competition for compliance talent is intense. Retention of existing staff is also a concern.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['cfo', 'audit_chair', 'ethics_officer']
    },
    options: [
      { id: 'r22_o1', label: 'Comprehensive talent development', impact: { complianceMaturity: 0.1, ethicalCulture: 0.1, controlEnvironment: 0.08 }, risk: 'low', stakeholderReactions: { ethics_officer: 'positive', cfo: 'neutral', audit_chair: 'positive' } },
      { id: 'r22_o2', label: 'External hiring for key roles', impact: { complianceMaturity: 0.1, controlEnvironment: 0.08, auditReadiness: 0.05 }, risk: 'medium', stakeholderReactions: { audit_chair: 'positive', cfo: 'concerned', ethics_officer: 'neutral' } },
      { id: 'r22_o3', label: 'Data and technology upskilling', impact: { complianceMaturity: 0.12, auditReadiness: 0.1, controlEnvironment: 0.08 }, risk: 'medium', stakeholderReactions: { ops_head: 'positive', cfo: 'positive', ethics_officer: 'neutral' } },
      { id: 'r22_o4', label: 'Rotation program with business', impact: { complianceMaturity: 0.08, ethicalCulture: 0.1, governanceEffectiveness: 0.05 }, risk: 'low', stakeholderReactions: { bu_president: 'positive', ethics_officer: 'positive', cfo: 'positive' } },
      { id: 'r22_o5', label: 'Competitive compensation overhaul', impact: { complianceMaturity: 0.08, controlEnvironment: 0.05, ethicalCulture: 0.05 }, risk: 'low', stakeholderReactions: { ethics_officer: 'positive', cfo: 'negative', audit_chair: 'neutral' } },
      { id: 'r22_o6', label: 'Outsource specialized functions', impact: { complianceMaturity: 0.05, controlEnvironment: 0.05, auditReadiness: 0.02 }, risk: 'medium', stakeholderReactions: { cfo: 'positive', ethics_officer: 'concerned', internal_audit: 'concerned' } }
    ]
  },

  {
    round: 23,
    phase: 'transformation',
    title: 'Sustainable Compliance',
    scenario: {
      description: 'The transformation is showing results. Now you must ensure sustainability and prevent regression to old patterns.',
      context: 'There are early signs of compliance fatigue. Business pressures are returning.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['audit_chair', 'bu_president', 'ceo']
    },
    options: [
      { id: 'r23_o1', label: 'Compliance governance institutionalization', impact: { governanceEffectiveness: 0.12, complianceMaturity: 0.1, controlEnvironment: 0.08 }, risk: 'low', stakeholderReactions: { audit_chair: 'very_positive', board_chair: 'positive', bu_president: 'neutral' } },
      { id: 'r23_o2', label: 'Business integration and ownership', impact: { ethicalCulture: 0.1, complianceMaturity: 0.08, controlEnvironment: 0.08 }, risk: 'medium', stakeholderReactions: { bu_president: 'very_positive', ops_head: 'positive', internal_audit: 'neutral' } },
      { id: 'r23_o3', label: 'Continuous improvement culture', impact: { complianceMaturity: 0.1, ethicalCulture: 0.1, governanceEffectiveness: 0.05 }, risk: 'low', stakeholderReactions: { ethics_officer: 'positive', audit_chair: 'positive', ops_head: 'positive' } },
      { id: 'r23_o4', label: 'Leading indicator monitoring', impact: { complianceMaturity: 0.1, auditReadiness: 0.1, controlEnvironment: 0.08 }, risk: 'low', stakeholderReactions: { internal_audit: 'very_positive', audit_chair: 'positive', primary_regulator: 'positive' } },
      { id: 'r23_o5', label: 'Regulatory relationship maturation', impact: { regulatoryStanding: 0.1, governanceEffectiveness: 0.08, complianceMaturity: 0.05 }, risk: 'low', stakeholderReactions: { primary_regulator: 'positive', reg_affairs_head: 'positive', audit_chair: 'positive' } },
      { id: 'r23_o6', label: 'Reduce compliance intensity', impact: { complianceMaturity: -0.05, controlEnvironment: -0.05, regulatoryStanding: -0.05 }, risk: 'high', stakeholderReactions: { bu_president: 'positive', primary_regulator: 'negative', audit_chair: 'negative' } }
    ]
  },

  {
    round: 24,
    phase: 'transformation',
    title: 'Compliance Legacy',
    scenario: {
      description: 'As you reflect on the transformation journey, you must position the compliance function for long-term success.',
      context: 'The organization has recovered from crisis. Your decisions will shape compliance culture for years to come.',
      pressure: 'low',
      timeConstraint: 'standard',
      stakeholderFocus: ['board_chair', 'ceo', 'ethics_officer']
    },
    options: [
      { id: 'r24_o1', label: 'Compliance as competitive advantage', impact: { complianceMaturity: 0.12, ethicalCulture: 0.12, governanceEffectiveness: 0.1 }, risk: 'medium', stakeholderReactions: { ceo: 'very_positive', board_chair: 'positive', governance_analyst: 'positive' } },
      { id: 'r24_o2', label: 'Regulatory leadership positioning', impact: { regulatoryStanding: 0.12, complianceMaturity: 0.1, governanceEffectiveness: 0.08 }, risk: 'low', stakeholderReactions: { primary_regulator: 'very_positive', governance_analyst: 'positive', reg_affairs_head: 'positive' } },
      { id: 'r24_o3', label: 'Ethical culture institutionalization', impact: { ethicalCulture: 0.15, complianceMaturity: 0.08, governanceEffectiveness: 0.08 }, risk: 'low', stakeholderReactions: { ethics_officer: 'very_positive', board_chair: 'positive', ceo: 'positive' } },
      { id: 'r24_o4', label: 'Innovation and continuous improvement', impact: { complianceMaturity: 0.12, controlEnvironment: 0.1, auditReadiness: 0.08 }, risk: 'medium', stakeholderReactions: { audit_chair: 'positive', ops_head: 'positive', ceo: 'positive' } },
      { id: 'r24_o5', label: 'Succession and knowledge transfer', impact: { governanceEffectiveness: 0.1, complianceMaturity: 0.08, ethicalCulture: 0.08 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', audit_chair: 'positive', ethics_officer: 'positive' } },
      { id: 'r24_o6', label: 'Maintain current achievements', impact: { complianceMaturity: 0.05, governanceEffectiveness: 0.05, controlEnvironment: 0.05 }, risk: 'low', stakeholderReactions: { cfo: 'positive', audit_chair: 'neutral', ceo: 'neutral' } }
    ]
  }
];

export const PHASE_DESCRIPTIONS = {
  foundation: {
    name: 'Foundation Building',
    description: 'Establish the fundamentals of an effective compliance program',
    rounds: [1, 6],
    objectives: ['Assess current state', 'Build organizational structure', 'Establish governance framework']
  },
  operationalizing: {
    name: 'Operationalizing Compliance',
    description: 'Make compliance operational and responsive to business needs',
    rounds: [7, 12],
    objectives: ['Manage regulatory relationships', 'Handle compliance events', 'Balance business partnership']
  },
  crisis: {
    name: 'Crisis Management',
    description: 'Navigate significant compliance failures and rebuild trust',
    rounds: [13, 18],
    objectives: ['Manage enforcement actions', 'Address systemic failures', 'Maintain stakeholder confidence']
  },
  transformation: {
    name: 'Compliance Transformation',
    description: 'Transform compliance into a sustainable strategic capability',
    rounds: [19, 24],
    objectives: ['Redesign operating model', 'Build ethical culture', 'Ensure sustainability']
  }
};

export function getRoundById(roundNumber) {
  return ROUNDS.find(r => r.round === roundNumber);
}

export function getRoundsByPhase(phase) {
  return ROUNDS.filter(r => r.phase === phase);
}

export function getOptionById(roundNumber, optionId) {
  const round = getRoundById(roundNumber);
  return round?.options.find(o => o.id === optionId);
}

export default ROUNDS;
