// Nexus Protocol Simulation Rounds
// 24 rounds across 4 phases with 6 options each

export const ROUNDS = [
  // Phase 1: Formation (Rounds 1-6)
  {
    id: 1,
    phase: 'FORMATION',
    title: 'Partnership Vision',
    scenario: 'A strategic partnership opportunity emerges. Defining the vision and scope of collaboration is the first critical step.',
    stakeholderFocus: ['CEO', 'PARTNER_CEO', 'ALLIANCE_LEAD'],
    options: [
      { id: 'A', text: 'Joint vision workshop with both leadership teams', impact: { partnerAlignment: 15, trustFoundation: 12, governanceEffectiveness: 5 }, risk: 0.25, stakeholderReactions: { CEO: 18, PARTNER_CEO: 18, ALLIANCE_LEAD: 15 } },
      { id: 'B', text: 'Clear value proposition definition for both parties', impact: { valueCreation: 15, partnerAlignment: 10, trustFoundation: 5 }, risk: 0.20, stakeholderReactions: { CFO: 18, PARTNER_CFO: 15, STRATEGY_VP: 12 } },
      { id: 'C', text: 'Phased partnership with pilot scope', impact: { exitReadiness: 12, partnerAlignment: 8, valueCreation: 5 }, risk: 0.20, stakeholderReactions: { CFO: 15, RISK_MANAGER: 18, LEGAL_COUNSEL: 12 } },
      { id: 'D', text: 'Ambitious strategic alliance with broad scope', impact: { valueCreation: 18, innovationSynergy: 12, exitReadiness: -8 }, risk: 0.40, stakeholderReactions: { CEO: 18, PARTNER_CEO: 15, CFO: -10 } },
      { id: 'E', text: 'Customer-centric partnership focus', impact: { valueCreation: 12, partnerAlignment: 10, operationalIntegration: 8 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 20, OPERATIONS_LEAD: 15, CEO: 10 } },
      { id: 'F', text: 'Innovation and technology partnership emphasis', impact: { innovationSynergy: 18, valueCreation: 10, operationalIntegration: -5 }, risk: 0.35, stakeholderReactions: { INNOVATION_LEAD: 20, ECOSYSTEM_MGR: 15, CFO: -5 } }
    ]
  },
  {
    id: 2,
    phase: 'FORMATION',
    title: 'Partner Assessment',
    scenario: 'Due diligence on the partnership. Understanding partner capabilities, culture, and alignment is essential before commitment.',
    stakeholderFocus: ['STRATEGY_VP', 'CFO', 'LEGAL_COUNSEL'],
    options: [
      { id: 'A', text: 'Comprehensive partner due diligence', impact: { trustFoundation: 12, governanceEffectiveness: 10, valueCreation: -3 }, risk: 0.20, stakeholderReactions: { LEGAL_COUNSEL: 18, CFO: 15, RISK_MANAGER: 12 } },
      { id: 'B', text: 'Capability and cultural fit assessment', impact: { partnerAlignment: 15, trustFoundation: 10, operationalIntegration: 5 }, risk: 0.25, stakeholderReactions: { STRATEGY_VP: 18, ALLIANCE_LEAD: 15, OPERATIONS_LEAD: 10 } },
      { id: 'C', text: 'Financial viability and stability review', impact: { exitReadiness: 12, valueCreation: 10, trustFoundation: 5 }, risk: 0.20, stakeholderReactions: { CFO: 20, PARTNER_CFO: 12, BOARD_REP: 15 } },
      { id: 'D', text: 'Reference checks with existing partners', impact: { trustFoundation: 15, partnerAlignment: 8, conflictManagement: 5 }, risk: 0.20, stakeholderReactions: { ALLIANCE_LEAD: 15, STRATEGY_VP: 12, ECOSYSTEM_MGR: 10 } },
      { id: 'E', text: 'Rapid assessment to seize opportunity', impact: { valueCreation: 12, innovationSynergy: 10, trustFoundation: -5 }, risk: 0.35, stakeholderReactions: { CEO: 15, PARTNER_CEO: 12, LEGAL_COUNSEL: -10 } },
      { id: 'F', text: 'Pilot project for practical assessment', impact: { operationalIntegration: 12, trustFoundation: 10, partnerAlignment: 8 }, risk: 0.25, stakeholderReactions: { OPERATIONS_LEAD: 18, PARTNER_OPS: 15, ALLIANCE_LEAD: 10 } }
    ]
  },
  {
    id: 3,
    phase: 'FORMATION',
    title: 'Governance Design',
    scenario: 'How will the partnership be governed? Clear decision rights and processes prevent future conflicts.',
    stakeholderFocus: ['LEGAL_COUNSEL', 'BOARD_REP', 'ALLIANCE_LEAD'],
    options: [
      { id: 'A', text: 'Comprehensive governance framework with joint board', impact: { governanceEffectiveness: 18, partnerAlignment: 10, conflictManagement: 8 }, risk: 0.25, stakeholderReactions: { LEGAL_COUNSEL: 20, BOARD_REP: 18, ALLIANCE_LEAD: 12 } },
      { id: 'B', text: 'Light governance with operational focus', impact: { operationalIntegration: 15, valueCreation: 10, governanceEffectiveness: -5 }, risk: 0.30, stakeholderReactions: { OPERATIONS_LEAD: 18, PARTNER_OPS: 15, LEGAL_COUNSEL: -8 } },
      { id: 'C', text: 'Clear escalation and decision authority matrix', impact: { governanceEffectiveness: 15, conflictManagement: 12, partnerAlignment: 5 }, risk: 0.20, stakeholderReactions: { ALLIANCE_LEAD: 18, LEGAL_COUNSEL: 15, CEO: 10 } },
      { id: 'D', text: 'Balanced governance with equal representation', impact: { partnerAlignment: 15, trustFoundation: 12, governanceEffectiveness: 8 }, risk: 0.25, stakeholderReactions: { PARTNER_CEO: 18, CEO: 15, BOARD_REP: 10 } },
      { id: 'E', text: 'Performance-based governance with metrics', impact: { valueCreation: 12, governanceEffectiveness: 10, conflictManagement: 5 }, risk: 0.25, stakeholderReactions: { CFO: 18, PARTNER_CFO: 12, ALLIANCE_LEAD: 10 } },
      { id: 'F', text: 'Flexible governance evolving with partnership', impact: { partnerAlignment: 10, innovationSynergy: 8, governanceEffectiveness: -3 }, risk: 0.30, stakeholderReactions: { INNOVATION_LEAD: 15, ALLIANCE_LEAD: 12, LEGAL_COUNSEL: -8 } }
    ]
  },
  {
    id: 4,
    phase: 'FORMATION',
    title: 'Value Proposition',
    scenario: 'The value proposition must be clear. What does each party contribute and gain? Ensuring mutual benefit is foundational.',
    stakeholderFocus: ['CFO', 'PARTNER_CFO', 'STRATEGY_VP'],
    options: [
      { id: 'A', text: 'Detailed value share model with clear metrics', impact: { valueCreation: 18, governanceEffectiveness: 10, partnerAlignment: 5 }, risk: 0.25, stakeholderReactions: { CFO: 20, PARTNER_CFO: 18, BOARD_REP: 12 } },
      { id: 'B', text: 'Joint value creation with shared investment', impact: { valueCreation: 15, partnerAlignment: 12, innovationSynergy: 8 }, risk: 0.30, stakeholderReactions: { CEO: 18, PARTNER_CEO: 15, CFO: 5 } },
      { id: 'C', text: 'Capability exchange with complementary assets', impact: { operationalIntegration: 15, valueCreation: 10, innovationSynergy: 10 }, risk: 0.25, stakeholderReactions: { OPERATIONS_LEAD: 18, PARTNER_OPS: 15, INNOVATION_LEAD: 12 } },
      { id: 'D', text: 'Market access and growth focused value', impact: { valueCreation: 15, partnerAlignment: 10, exitReadiness: -3 }, risk: 0.30, stakeholderReactions: { CEO: 15, KEY_CUSTOMER: 18, STRATEGY_VP: 12 } },
      { id: 'E', text: 'Risk and reward sharing mechanism', impact: { partnerAlignment: 15, trustFoundation: 10, valueCreation: 5 }, risk: 0.25, stakeholderReactions: { CFO: 15, PARTNER_CFO: 15, RISK_MANAGER: 12 } },
      { id: 'F', text: 'Asymmetric value with strategic premium', impact: { valueCreation: 12, exitReadiness: 10, partnerAlignment: -8 }, risk: 0.35, stakeholderReactions: { CFO: 18, PARTNER_CFO: -15, CEO: 10 } }
    ]
  },
  {
    id: 5,
    phase: 'FORMATION',
    title: 'Trust Building',
    scenario: 'Trust is the foundation. Before formal agreements, relationship building sets the tone for collaboration.',
    stakeholderFocus: ['CEO', 'PARTNER_CEO', 'COMMS_LEAD'],
    options: [
      { id: 'A', text: 'Executive relationship building program', impact: { trustFoundation: 18, partnerAlignment: 12, conflictManagement: 8 }, risk: 0.20, stakeholderReactions: { CEO: 18, PARTNER_CEO: 18, ALLIANCE_LEAD: 12 } },
      { id: 'B', text: 'Cross-team collaboration projects', impact: { trustFoundation: 15, operationalIntegration: 12, innovationSynergy: 8 }, risk: 0.25, stakeholderReactions: { OPERATIONS_LEAD: 18, PARTNER_OPS: 18, INNOVATION_LEAD: 12 } },
      { id: 'C', text: 'Transparent communication and information sharing', impact: { trustFoundation: 15, partnerAlignment: 10, governanceEffectiveness: 5 }, risk: 0.25, stakeholderReactions: { COMMS_LEAD: 20, ALLIANCE_LEAD: 15, PARTNER_CEO: 10 } },
      { id: 'D', text: 'Joint customer engagement for alignment', impact: { trustFoundation: 12, valueCreation: 12, partnerAlignment: 10 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 18, CEO: 12, PARTNER_CEO: 12 } },
      { id: 'E', text: 'Cultural exchange and understanding program', impact: { trustFoundation: 15, partnerAlignment: 12, conflictManagement: 8 }, risk: 0.25, stakeholderReactions: { ALLIANCE_LEAD: 18, COMMS_LEAD: 15, PARTNER_OPS: 10 } },
      { id: 'F', text: 'Quick wins collaboration for credibility', impact: { trustFoundation: 12, valueCreation: 12, operationalIntegration: 8 }, risk: 0.25, stakeholderReactions: { OPERATIONS_LEAD: 18, PARTNER_OPS: 15, CFO: 10 } }
    ]
  },
  {
    id: 6,
    phase: 'FORMATION',
    title: 'Agreement Framework',
    scenario: 'Legal framework must be established. Protecting interests while enabling collaboration requires careful balance.',
    stakeholderFocus: ['LEGAL_COUNSEL', 'CFO', 'RISK_MANAGER'],
    options: [
      { id: 'A', text: 'Comprehensive legal agreement with full terms', impact: { governanceEffectiveness: 15, exitReadiness: 12, partnerAlignment: -5 }, risk: 0.25, stakeholderReactions: { LEGAL_COUNSEL: 20, RISK_MANAGER: 18, PARTNER_CEO: -8 } },
      { id: 'B', text: 'Framework agreement with operational flexibility', impact: { partnerAlignment: 12, operationalIntegration: 10, governanceEffectiveness: 5 }, risk: 0.30, stakeholderReactions: { ALLIANCE_LEAD: 18, PARTNER_CEO: 15, LEGAL_COUNSEL: -5 } },
      { id: 'C', text: 'Phased agreements matching partnership evolution', impact: { trustFoundation: 12, partnerAlignment: 10, governanceEffectiveness: 8 }, risk: 0.25, stakeholderReactions: { ALLIANCE_LEAD: 15, LEGAL_COUNSEL: 12, CFO: 10 } },
      { id: 'D', text: 'IP and confidentiality focused agreement', impact: { exitReadiness: 15, innovationSynergy: 5, trustFoundation: -3 }, risk: 0.30, stakeholderReactions: { LEGAL_COUNSEL: 18, INNOVATION_LEAD: 10, PARTNER_CEO: -8 } },
      { id: 'E', text: 'Balanced terms with mutual protections', impact: { partnerAlignment: 15, governanceEffectiveness: 10, trustFoundation: 8 }, risk: 0.25, stakeholderReactions: { LEGAL_COUNSEL: 15, PARTNER_CEO: 15, CEO: 12 } },
      { id: 'F', text: 'Performance-linked agreement with milestones', impact: { valueCreation: 12, governanceEffectiveness: 10, exitReadiness: 8 }, risk: 0.25, stakeholderReactions: { CFO: 18, PARTNER_CFO: 12, ALLIANCE_LEAD: 10 } }
    ]
  },

  // Phase 2: Operation (Rounds 7-12)
  {
    id: 7,
    phase: 'OPERATION',
    title: 'Operational Launch',
    scenario: 'Partnership is formalized. Now operations must begin. Executing effectively while managing the relationship requires skill.',
    stakeholderFocus: ['OPERATIONS_LEAD', 'PARTNER_OPS', 'ALLIANCE_LEAD'],
    options: [
      { id: 'A', text: 'Joint operating model implementation', impact: { operationalIntegration: 18, valueCreation: 10, partnerAlignment: 8 }, risk: 0.25, stakeholderReactions: { OPERATIONS_LEAD: 20, PARTNER_OPS: 18, ALLIANCE_LEAD: 12 } },
      { id: 'B', text: 'Phased operational rollout with learning', impact: { operationalIntegration: 15, conflictManagement: 10, trustFoundation: 8 }, risk: 0.25, stakeholderReactions: { ALLIANCE_LEAD: 18, OPERATIONS_LEAD: 15, RISK_MANAGER: 10 } },
      { id: 'C', text: 'Quick integration for immediate value', impact: { valueCreation: 15, operationalIntegration: 12, conflictManagement: -5 }, risk: 0.35, stakeholderReactions: { CFO: 18, PARTNER_CFO: 12, OPERATIONS_LEAD: -5 } },
      { id: 'D', text: 'Dedicated integration team deployment', impact: { operationalIntegration: 15, partnerAlignment: 10, valueCreation: 5 }, risk: 0.25, stakeholderReactions: { ALLIANCE_LEAD: 18, OPERATIONS_LEAD: 15, PARTNER_OPS: 12 } },
      { id: 'E', text: 'Customer-focused operational priorities', impact: { valueCreation: 15, operationalIntegration: 10, partnerAlignment: 8 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 20, OPERATIONS_LEAD: 15, CEO: 10 } },
      { id: 'F', text: 'Technology integration for efficiency', impact: { operationalIntegration: 12, innovationSynergy: 12, valueCreation: 8 }, risk: 0.30, stakeholderReactions: { INNOVATION_LEAD: 18, OPERATIONS_LEAD: 12, PARTNER_OPS: 10 } }
    ]
  },
  {
    id: 8,
    phase: 'OPERATION',
    title: 'Performance Management',
    scenario: 'Measuring partnership performance is essential. Tracking value creation and operational effectiveness drives improvement.',
    stakeholderFocus: ['CFO', 'PARTNER_CFO', 'ALLIANCE_LEAD'],
    options: [
      { id: 'A', text: 'Comprehensive partnership scorecard', impact: { valueCreation: 15, governanceEffectiveness: 12, partnerAlignment: 8 }, risk: 0.20, stakeholderReactions: { CFO: 20, ALLIANCE_LEAD: 18, BOARD_REP: 12 } },
      { id: 'B', text: 'Joint value tracking and reporting', impact: { valueCreation: 15, partnerAlignment: 12, trustFoundation: 8 }, risk: 0.25, stakeholderReactions: { CFO: 18, PARTNER_CFO: 18, CEO: 10 } },
      { id: 'C', text: 'Operational KPI dashboard', impact: { operationalIntegration: 15, valueCreation: 10, governanceEffectiveness: 8 }, risk: 0.20, stakeholderReactions: { OPERATIONS_LEAD: 18, PARTNER_OPS: 15, ALLIANCE_LEAD: 10 } },
      { id: 'D', text: 'Customer impact measurement', impact: { valueCreation: 15, partnerAlignment: 8, operationalIntegration: 5 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 18, CEO: 15, OPERATIONS_LEAD: 10 } },
      { id: 'E', text: 'Quarterly business reviews with partners', impact: { partnerAlignment: 15, trustFoundation: 12, conflictManagement: 8 }, risk: 0.20, stakeholderReactions: { ALLIANCE_LEAD: 18, PARTNER_CEO: 15, CEO: 10 } },
      { id: 'F', text: 'Innovation metrics and pipeline tracking', impact: { innovationSynergy: 15, valueCreation: 10, partnerAlignment: 5 }, risk: 0.25, stakeholderReactions: { INNOVATION_LEAD: 20, ECOSYSTEM_MGR: 12, CEO: 10 } }
    ]
  },
  {
    id: 9,
    phase: 'OPERATION',
    title: 'Conflict Navigation',
    scenario: 'Disagreements are emerging. How conflicts are handled defines partnership health. Resolution approaches matter.',
    stakeholderFocus: ['ALLIANCE_LEAD', 'PARTNER_CEO', 'LEGAL_COUNSEL'],
    options: [
      { id: 'A', text: 'Structured conflict resolution process', impact: { conflictManagement: 18, partnerAlignment: 10, governanceEffectiveness: 8 }, risk: 0.25, stakeholderReactions: { ALLIANCE_LEAD: 20, LEGAL_COUNSEL: 15, PARTNER_CEO: 10 } },
      { id: 'B', text: 'Executive intervention for quick resolution', impact: { conflictManagement: 15, trustFoundation: 8, governanceEffectiveness: -3 }, risk: 0.30, stakeholderReactions: { CEO: 18, PARTNER_CEO: 15, ALLIANCE_LEAD: -5 } },
      { id: 'C', text: 'Mediated discussions with neutral facilitator', impact: { conflictManagement: 15, trustFoundation: 12, partnerAlignment: 10 }, risk: 0.25, stakeholderReactions: { ALLIANCE_LEAD: 15, PARTNER_CEO: 12, BOARD_REP: 10 } },
      { id: 'D', text: 'Data-driven resolution with objective analysis', impact: { conflictManagement: 12, valueCreation: 10, governanceEffectiveness: 8 }, risk: 0.25, stakeholderReactions: { CFO: 18, PARTNER_CFO: 15, ALLIANCE_LEAD: 10 } },
      { id: 'E', text: 'Compromise approach with mutual concessions', impact: { conflictManagement: 12, partnerAlignment: 15, valueCreation: -5 }, risk: 0.25, stakeholderReactions: { PARTNER_CEO: 18, CEO: 12, CFO: -5 } },
      { id: 'F', text: 'Clear contractual reference for disputes', impact: { conflictManagement: 10, exitReadiness: 12, partnerAlignment: -8 }, risk: 0.35, stakeholderReactions: { LEGAL_COUNSEL: 18, PARTNER_CEO: -12, RISK_MANAGER: 10 } }
    ]
  },
  {
    id: 10,
    phase: 'OPERATION',
    title: 'Value Acceleration',
    scenario: 'Partnership must deliver value. Pressure to demonstrate results is building. Accelerating value capture is the focus.',
    stakeholderFocus: ['CEO', 'CFO', 'OPERATIONS_LEAD'],
    options: [
      { id: 'A', text: 'Joint value capture initiative', impact: { valueCreation: 18, partnerAlignment: 10, operationalIntegration: 8 }, risk: 0.25, stakeholderReactions: { CFO: 20, PARTNER_CFO: 15, ALLIANCE_LEAD: 12 } },
      { id: 'B', text: 'Operational efficiency optimization', impact: { valueCreation: 15, operationalIntegration: 12, innovationSynergy: -3 }, risk: 0.25, stakeholderReactions: { OPERATIONS_LEAD: 18, PARTNER_OPS: 15, CFO: 12 } },
      { id: 'C', text: 'New market opportunity pursuit together', impact: { valueCreation: 15, innovationSynergy: 12, exitReadiness: -5 }, risk: 0.35, stakeholderReactions: { CEO: 18, PARTNER_CEO: 15, KEY_CUSTOMER: 12 } },
      { id: 'D', text: 'Customer cross-sell and upsell program', impact: { valueCreation: 15, operationalIntegration: 10, partnerAlignment: 8 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 18, OPERATIONS_LEAD: 12, CEO: 10 } },
      { id: 'E', text: 'Innovation pipeline acceleration', impact: { innovationSynergy: 18, valueCreation: 10, operationalIntegration: -3 }, risk: 0.35, stakeholderReactions: { INNOVATION_LEAD: 20, ECOSYSTEM_MGR: 15, CFO: -5 } },
      { id: 'F', text: 'Resource optimization across partnership', impact: { valueCreation: 12, operationalIntegration: 12, trustFoundation: 5 }, risk: 0.25, stakeholderReactions: { CFO: 18, PARTNER_CFO: 15, OPERATIONS_LEAD: 10 } }
    ]
  },
  {
    id: 11,
    phase: 'OPERATION',
    title: 'Relationship Deepening',
    scenario: 'Surface collaboration must deepen. Building genuine partnership requires investment in relationship quality.',
    stakeholderFocus: ['ALLIANCE_LEAD', 'COMMS_LEAD', 'PARTNER_CEO'],
    options: [
      { id: 'A', text: 'Executive relationship investment program', impact: { trustFoundation: 18, partnerAlignment: 12, conflictManagement: 8 }, risk: 0.25, stakeholderReactions: { CEO: 18, PARTNER_CEO: 18, ALLIANCE_LEAD: 15 } },
      { id: 'B', text: 'Team integration and cross-pollination', impact: { trustFoundation: 15, operationalIntegration: 12, innovationSynergy: 8 }, risk: 0.25, stakeholderReactions: { OPERATIONS_LEAD: 18, PARTNER_OPS: 18, ALLIANCE_LEAD: 10 } },
      { id: 'C', text: 'Joint strategic planning sessions', impact: { partnerAlignment: 18, trustFoundation: 10, valueCreation: 5 }, risk: 0.25, stakeholderReactions: { STRATEGY_VP: 18, PARTNER_CEO: 15, CEO: 12 } },
      { id: 'D', text: 'Regular communication and transparency', impact: { trustFoundation: 15, partnerAlignment: 10, conflictManagement: 8 }, risk: 0.20, stakeholderReactions: { COMMS_LEAD: 18, ALLIANCE_LEAD: 15, PARTNER_CEO: 10 } },
      { id: 'E', text: 'Joint customer engagement and success', impact: { valueCreation: 12, trustFoundation: 12, partnerAlignment: 10 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 18, OPERATIONS_LEAD: 15, PARTNER_OPS: 12 } },
      { id: 'F', text: 'Cultural alignment initiatives', impact: { trustFoundation: 12, partnerAlignment: 15, operationalIntegration: 8 }, risk: 0.25, stakeholderReactions: { ALLIANCE_LEAD: 18, COMMS_LEAD: 15, PARTNER_OPS: 10 } }
    ]
  },
  {
    id: 12,
    phase: 'OPERATION',
    title: 'Operational Assessment',
    scenario: 'Time to assess operational performance. What is working, what needs adjustment? Course correction may be needed.',
    stakeholderFocus: ['ALLIANCE_LEAD', 'CFO', 'BOARD_REP'],
    options: [
      { id: 'A', text: 'Comprehensive partnership review', impact: { governanceEffectiveness: 15, valueCreation: 10, partnerAlignment: 8 }, risk: 0.20, stakeholderReactions: { BOARD_REP: 18, ALLIANCE_LEAD: 15, CFO: 12 } },
      { id: 'B', text: 'Value delivery assessment and adjustment', impact: { valueCreation: 15, governanceEffectiveness: 10, partnerAlignment: 5 }, risk: 0.25, stakeholderReactions: { CFO: 20, PARTNER_CFO: 15, CEO: 10 } },
      { id: 'C', text: 'Operational efficiency review', impact: { operationalIntegration: 15, valueCreation: 10, innovationSynergy: -3 }, risk: 0.25, stakeholderReactions: { OPERATIONS_LEAD: 18, PARTNER_OPS: 12, CFO: 10 } },
      { id: 'D', text: 'Relationship health assessment', impact: { trustFoundation: 15, partnerAlignment: 12, conflictManagement: 8 }, risk: 0.25, stakeholderReactions: { ALLIANCE_LEAD: 18, PARTNER_CEO: 12, CEO: 10 } },
      { id: 'E', text: 'Customer impact evaluation', impact: { valueCreation: 12, partnerAlignment: 10, operationalIntegration: 8 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 18, OPERATIONS_LEAD: 12, CEO: 10 } },
      { id: 'F', text: 'Innovation pipeline review', impact: { innovationSynergy: 15, valueCreation: 10, exitReadiness: -3 }, risk: 0.30, stakeholderReactions: { INNOVATION_LEAD: 18, ECOSYSTEM_MGR: 15, CFO: -5 } }
    ]
  },

  // Phase 3: Evolution (Rounds 13-18)
  {
    id: 13,
    phase: 'EVOLUTION',
    title: 'Partnership Expansion',
    scenario: 'Partnership has proven itself. Opportunity to expand scope or deepen collaboration. Growth decisions shape future.',
    stakeholderFocus: ['CEO', 'PARTNER_CEO', 'STRATEGY_VP'],
    options: [
      { id: 'A', text: 'Significant scope expansion into new areas', impact: { valueCreation: 18, innovationSynergy: 12, exitReadiness: -10 }, risk: 0.40, stakeholderReactions: { CEO: 18, PARTNER_CEO: 15, CFO: -8 } },
      { id: 'B', text: 'Deepening in current scope for excellence', impact: { operationalIntegration: 18, valueCreation: 12, innovationSynergy: 5 }, risk: 0.25, stakeholderReactions: { OPERATIONS_LEAD: 20, PARTNER_OPS: 15, CFO: 10 } },
      { id: 'C', text: 'Geographic expansion together', impact: { valueCreation: 15, partnerAlignment: 10, exitReadiness: -5 }, risk: 0.35, stakeholderReactions: { CEO: 18, KEY_CUSTOMER: 15, CFO: -5 } },
      { id: 'D', text: 'Innovation and R&D collaboration expansion', impact: { innovationSynergy: 20, valueCreation: 10, operationalIntegration: -5 }, risk: 0.35, stakeholderReactions: { INNOVATION_LEAD: 20, ECOSYSTEM_MGR: 18, CFO: -8 } },
      { id: 'E', text: 'Customer solutions co-development', impact: { valueCreation: 15, innovationSynergy: 12, partnerAlignment: 10 }, risk: 0.30, stakeholderReactions: { KEY_CUSTOMER: 20, CEO: 15, PARTNER_CEO: 12 } },
      { id: 'F', text: 'Measured expansion with clear criteria', impact: { valueCreation: 12, governanceEffectiveness: 10, exitReadiness: 5 }, risk: 0.25, stakeholderReactions: { CFO: 18, RISK_MANAGER: 15, ALLIANCE_LEAD: 10 } }
    ]
  },
  {
    id: 14,
    phase: 'EVOLUTION',
    title: 'Governance Evolution',
    scenario: 'Partnership governance needs to evolve. Original structures may not fit the maturing relationship.',
    stakeholderFocus: ['BOARD_REP', 'LEGAL_COUNSEL', 'ALLIANCE_LEAD'],
    options: [
      { id: 'A', text: 'Enhanced joint governance structure', impact: { governanceEffectiveness: 18, partnerAlignment: 10, exitReadiness: -5 }, risk: 0.25, stakeholderReactions: { BOARD_REP: 18, LEGAL_COUNSEL: 15, PARTNER_CEO: 10 } },
      { id: 'B', text: 'Streamlined governance for efficiency', impact: { operationalIntegration: 15, governanceEffectiveness: 8, valueCreation: 10 }, risk: 0.30, stakeholderReactions: { OPERATIONS_LEAD: 18, CFO: 15, LEGAL_COUNSEL: -5 } },
      { id: 'C', text: 'Performance-based governance updates', impact: { valueCreation: 15, governanceEffectiveness: 10, partnerAlignment: 5 }, risk: 0.25, stakeholderReactions: { CFO: 18, PARTNER_CFO: 12, BOARD_REP: 10 } },
      { id: 'D', text: 'Risk management framework enhancement', impact: { exitReadiness: 15, governanceEffectiveness: 12, conflictManagement: 8 }, risk: 0.25, stakeholderReactions: { RISK_MANAGER: 20, LEGAL_COUNSEL: 15, CFO: 10 } },
      { id: 'E', text: 'Dispute resolution mechanism update', impact: { conflictManagement: 18, governanceEffectiveness: 10, partnerAlignment: 5 }, risk: 0.25, stakeholderReactions: { LEGAL_COUNSEL: 18, ALLIANCE_LEAD: 15, PARTNER_CEO: 8 } },
      { id: 'F', text: 'Equal partnership governance model', impact: { partnerAlignment: 18, trustFoundation: 12, governanceEffectiveness: 5 }, risk: 0.30, stakeholderReactions: { PARTNER_CEO: 20, CEO: 12, CFO: -5 } }
    ]
  },
  {
    id: 15,
    phase: 'EVOLUTION',
    title: 'Innovation Collaboration',
    scenario: 'Innovation potential exists. Joint R&D and development could create unique value. Managing intellectual property is key.',
    stakeholderFocus: ['INNOVATION_LEAD', 'LEGAL_COUNSEL', 'ECOSYSTEM_MGR'],
    options: [
      { id: 'A', text: 'Joint innovation lab or center', impact: { innovationSynergy: 20, valueCreation: 12, exitReadiness: -8 }, risk: 0.35, stakeholderReactions: { INNOVATION_LEAD: 20, ECOSYSTEM_MGR: 18, LEGAL_COUNSEL: -5 } },
      { id: 'B', text: 'Co-development projects with IP sharing', impact: { innovationSynergy: 18, valueCreation: 10, partnerAlignment: 8 }, risk: 0.35, stakeholderReactions: { INNOVATION_LEAD: 18, PARTNER_CEO: 12, LEGAL_COUNSEL: -8 } },
      { id: 'C', text: 'Technology exchange and licensing', impact: { innovationSynergy: 12, valueCreation: 12, exitReadiness: 8 }, risk: 0.25, stakeholderReactions: { LEGAL_COUNSEL: 18, INNOVATION_LEAD: 12, CFO: 10 } },
      { id: 'D', text: 'Customer-driven innovation collaboration', impact: { valueCreation: 18, innovationSynergy: 12, operationalIntegration: 5 }, risk: 0.30, stakeholderReactions: { KEY_CUSTOMER: 20, INNOVATION_LEAD: 15, CEO: 12 } },
      { id: 'E', text: 'Ecosystem innovation with broader partners', impact: { innovationSynergy: 15, valueCreation: 10, partnerAlignment: -3 }, risk: 0.35, stakeholderReactions: { ECOSYSTEM_MGR: 20, INNOVATION_LEAD: 15, PARTNER_CEO: -8 } },
      { id: 'F', text: 'Controlled innovation pilots', impact: { innovationSynergy: 12, exitReadiness: 10, valueCreation: 8 }, risk: 0.25, stakeholderReactions: { RISK_MANAGER: 18, INNOVATION_LEAD: 12, LEGAL_COUNSEL: 10 } }
    ]
  },
  {
    id: 16,
    phase: 'EVOLUTION',
    title: 'Market Evolution Response',
    scenario: 'Market conditions are changing. Partnership must adapt. Responding together strengthens the relationship.',
    stakeholderFocus: ['CEO', 'STRATEGY_VP', 'KEY_CUSTOMER'],
    options: [
      { id: 'A', text: 'Joint market response strategy', impact: { partnerAlignment: 18, valueCreation: 12, trustFoundation: 8 }, risk: 0.30, stakeholderReactions: { CEO: 18, PARTNER_CEO: 18, STRATEGY_VP: 12 } },
      { id: 'B', text: 'Defensive partnership strengthening', impact: { partnerAlignment: 15, exitReadiness: 8, conflictManagement: 5 }, risk: 0.25, stakeholderReactions: { ALLIANCE_LEAD: 18, CFO: 12, RISK_MANAGER: 10 } },
      { id: 'C', text: 'Aggressive market opportunity pursuit', impact: { valueCreation: 18, innovationSynergy: 10, exitReadiness: -8 }, risk: 0.40, stakeholderReactions: { CEO: 18, KEY_CUSTOMER: 15, CFO: -5 } },
      { id: 'D', text: 'Customer-centric adaptation together', impact: { valueCreation: 15, partnerAlignment: 12, operationalIntegration: 8 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 20, OPERATIONS_LEAD: 15, CEO: 10 } },
      { id: 'E', text: 'Innovation acceleration for competitive edge', impact: { innovationSynergy: 18, valueCreation: 10, operationalIntegration: -5 }, risk: 0.35, stakeholderReactions: { INNOVATION_LEAD: 20, ECOSYSTEM_MGR: 15, CFO: -8 } },
      { id: 'F', text: 'Measured response with risk management', impact: { exitReadiness: 12, partnerAlignment: 10, valueCreation: 5 }, risk: 0.20, stakeholderReactions: { RISK_MANAGER: 18, CFO: 15, LEGAL_COUNSEL: 10 } }
    ]
  },
  {
    id: 17,
    phase: 'EVOLUTION',
    title: 'Relationship Challenges',
    scenario: 'Partnership faces challenges. Tensions are rising. How issues are addressed will determine future trajectory.',
    stakeholderFocus: ['ALLIANCE_LEAD', 'PARTNER_CEO', 'BOARD_REP'],
    options: [
      { id: 'A', text: 'Open dialogue and relationship reset', impact: { trustFoundation: 18, partnerAlignment: 12, conflictManagement: 10 }, risk: 0.30, stakeholderReactions: { CEO: 18, PARTNER_CEO: 18, ALLIANCE_LEAD: 15 } },
      { id: 'B', text: 'Structured problem-solving process', impact: { conflictManagement: 18, governanceEffectiveness: 10, partnerAlignment: 5 }, risk: 0.25, stakeholderReactions: { ALLIANCE_LEAD: 20, LEGAL_COUNSEL: 12, BOARD_REP: 10 } },
      { id: 'C', text: 'Value rebalancing discussions', impact: { partnerAlignment: 15, valueCreation: 10, trustFoundation: -5 }, risk: 0.35, stakeholderReactions: { CFO: 18, PARTNER_CFO: -10, CEO: 10 } },
      { id: 'D', text: 'Third-party mediation for resolution', impact: { conflictManagement: 15, trustFoundation: 10, partnerAlignment: 8 }, risk: 0.30, stakeholderReactions: { BOARD_REP: 18, PARTNER_CEO: 12, ALLIANCE_LEAD: 10 } },
      { id: 'E', text: 'Exit planning while negotiating', impact: { exitReadiness: 18, conflictManagement: 8, partnerAlignment: -10 }, risk: 0.40, stakeholderReactions: { LEGAL_COUNSEL: 15, RISK_MANAGER: 18, PARTNER_CEO: -15 } },
      { id: 'F', text: 'Leadership intervention and commitment', impact: { trustFoundation: 15, partnerAlignment: 15, conflictManagement: 10 }, risk: 0.30, stakeholderReactions: { CEO: 18, PARTNER_CEO: 15, BOARD_REP: 10 } }
    ]
  },
  {
    id: 18,
    phase: 'EVOLUTION',
    title: 'Evolution Assessment',
    scenario: 'Time to assess partnership evolution. Where are we, where should we go? Strategic decisions about future direction.',
    stakeholderFocus: ['CEO', 'BOARD_REP', 'ALLIANCE_LEAD'],
    options: [
      { id: 'A', text: 'Comprehensive partnership evolution review', impact: { governanceEffectiveness: 15, partnerAlignment: 12, valueCreation: 8 }, risk: 0.20, stakeholderReactions: { BOARD_REP: 18, CEO: 15, ALLIANCE_LEAD: 12 } },
      { id: 'B', text: 'Value creation trajectory assessment', impact: { valueCreation: 15, governanceEffectiveness: 10, partnerAlignment: 5 }, risk: 0.25, stakeholderReactions: { CFO: 20, PARTNER_CFO: 15, BOARD_REP: 10 } },
      { id: 'C', text: 'Relationship health and future potential', impact: { trustFoundation: 15, partnerAlignment: 12, innovationSynergy: 8 }, risk: 0.25, stakeholderReactions: { ALLIANCE_LEAD: 18, CEO: 12, PARTNER_CEO: 12 } },
      { id: 'D', text: 'Strategic options analysis', impact: { exitReadiness: 12, valueCreation: 10, governanceEffectiveness: 8 }, risk: 0.25, stakeholderReactions: { STRATEGY_VP: 18, BOARD_REP: 15, CFO: 10 } },
      { id: 'E', text: 'Stakeholder feedback and input collection', impact: { partnerAlignment: 15, trustFoundation: 10, conflictManagement: 8 }, risk: 0.20, stakeholderReactions: { KEY_CUSTOMER: 15, PARTNER_OPS: 12, ALLIANCE_LEAD: 10 } },
      { id: 'F', text: 'External benchmark and validation', impact: { governanceEffectiveness: 12, valueCreation: 10, partnerAlignment: 8 }, risk: 0.25, stakeholderReactions: { BOARD_REP: 15, CFO: 12, CEO: 10 } }
    ]
  },

  // Phase 4: Optimization (Rounds 19-24)
  {
    id: 19,
    phase: 'OPTIMIZATION',
    title: 'Value Optimization',
    scenario: 'Partnership is mature. Focus on optimizing value creation and capture. Efficiency and effectiveness are the goals.',
    stakeholderFocus: ['CFO', 'OPERATIONS_LEAD', 'PARTNER_CFO'],
    options: [
      { id: 'A', text: 'Joint value optimization program', impact: { valueCreation: 20, operationalIntegration: 12, partnerAlignment: 8 }, risk: 0.25, stakeholderReactions: { CFO: 20, PARTNER_CFO: 18, ALLIANCE_LEAD: 12 } },
      { id: 'B', text: 'Operational excellence initiative', impact: { operationalIntegration: 18, valueCreation: 12, innovationSynergy: -3 }, risk: 0.25, stakeholderReactions: { OPERATIONS_LEAD: 20, PARTNER_OPS: 18, CFO: 10 } },
      { id: 'C', text: 'Customer value maximization focus', impact: { valueCreation: 18, partnerAlignment: 10, operationalIntegration: 5 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 20, CEO: 15, PARTNER_CEO: 10 } },
      { id: 'D', text: 'Innovation value capture acceleration', impact: { innovationSynergy: 15, valueCreation: 15, exitReadiness: -5 }, risk: 0.35, stakeholderReactions: { INNOVATION_LEAD: 18, ECOSYSTEM_MGR: 15, CFO: -5 } },
      { id: 'E', text: 'Cost optimization across partnership', impact: { valueCreation: 15, operationalIntegration: 10, partnerAlignment: -5 }, risk: 0.30, stakeholderReactions: { CFO: 18, PARTNER_CFO: 10, PARTNER_OPS: -8 } },
      { id: 'F', text: 'Growth investment for future value', impact: { valueCreation: 12, innovationSynergy: 12, partnerAlignment: 10 }, risk: 0.30, stakeholderReactions: { CEO: 18, PARTNER_CEO: 15, CFO: -5 } }
    ]
  },
  {
    id: 20,
    phase: 'OPTIMIZATION',
    title: 'Relationship Excellence',
    scenario: 'Building world-class partnership relationship. Trust and collaboration must reach the highest levels.',
    stakeholderFocus: ['CEO', 'PARTNER_CEO', 'ALLIANCE_LEAD'],
    options: [
      { id: 'A', text: 'Strategic partnership elevation', impact: { trustFoundation: 18, partnerAlignment: 15, valueCreation: 10 }, risk: 0.25, stakeholderReactions: { CEO: 20, PARTNER_CEO: 20, ALLIANCE_LEAD: 15 } },
      { id: 'B', text: 'Deep integration and collaboration', impact: { operationalIntegration: 18, trustFoundation: 12, exitReadiness: -8 }, risk: 0.35, stakeholderReactions: { OPERATIONS_LEAD: 18, PARTNER_OPS: 18, LEGAL_COUNSEL: -10 } },
      { id: 'C', text: 'Joint culture and values alignment', impact: { trustFoundation: 15, partnerAlignment: 15, conflictManagement: 10 }, risk: 0.25, stakeholderReactions: { ALLIANCE_LEAD: 18, COMMS_LEAD: 15, PARTNER_CEO: 12 } },
      { id: 'D', text: 'Ecosystem partnership model', impact: { partnerAlignment: 12, innovationSynergy: 12, valueCreation: 10 }, risk: 0.30, stakeholderReactions: { ECOSYSTEM_MGR: 20, PARTNER_CEO: 12, KEY_CUSTOMER: 10 } },
      { id: 'E', text: 'Long-term commitment and investment', impact: { trustFoundation: 18, valueCreation: 10, exitReadiness: -10 }, risk: 0.35, stakeholderReactions: { PARTNER_CEO: 20, CEO: 15, CFO: -10 } },
      { id: 'F', text: 'Balanced excellence with flexibility', impact: { trustFoundation: 12, partnerAlignment: 12, exitReadiness: 8 }, risk: 0.20, stakeholderReactions: { ALLIANCE_LEAD: 15, CFO: 12, RISK_MANAGER: 10 } }
    ]
  },
  {
    id: 21,
    phase: 'OPTIMIZATION',
    title: 'Governance Maturity',
    scenario: 'Partnership governance must reach maturity. Sustainable processes and structures for long-term success.',
    stakeholderFocus: ['BOARD_REP', 'LEGAL_COUNSEL', 'CFO'],
    options: [
      { id: 'A', text: 'World-class governance framework', impact: { governanceEffectiveness: 20, partnerAlignment: 10, conflictManagement: 8 }, risk: 0.25, stakeholderReactions: { BOARD_REP: 20, LEGAL_COUNSEL: 18, CEO: 10 } },
      { id: 'B', text: 'Continuous improvement governance', impact: { governanceEffectiveness: 15, valueCreation: 10, partnerAlignment: 8 }, risk: 0.20, stakeholderReactions: { ALLIANCE_LEAD: 18, CFO: 12, BOARD_REP: 10 } },
      { id: 'C', text: 'Risk management excellence', impact: { exitReadiness: 15, governanceEffectiveness: 12, conflictManagement: 10 }, risk: 0.25, stakeholderReactions: { RISK_MANAGER: 20, LEGAL_COUNSEL: 15, CFO: 10 } },
      { id: 'D', text: 'Stakeholder governance integration', impact: { partnerAlignment: 15, governanceEffectiveness: 12, valueCreation: 5 }, risk: 0.25, stakeholderReactions: { BOARD_REP: 18, PARTNER_CEO: 12, CEO: 10 } },
      { id: 'E', text: 'Performance-driven governance model', impact: { valueCreation: 15, governanceEffectiveness: 12, partnerAlignment: 5 }, risk: 0.25, stakeholderReactions: { CFO: 18, PARTNER_CFO: 15, BOARD_REP: 10 } },
      { id: 'F', text: 'Adaptive governance for market changes', impact: { governanceEffectiveness: 12, innovationSynergy: 10, partnerAlignment: 8 }, risk: 0.25, stakeholderReactions: { STRATEGY_VP: 18, ALLIANCE_LEAD: 12, LEGAL_COUNSEL: 8 } }
    ]
  },
  {
    id: 22,
    phase: 'OPTIMIZATION',
    title: 'Innovation Sustainability',
    scenario: 'Innovation collaboration must be sustainable. Building lasting innovation capability together.',
    stakeholderFocus: ['INNOVATION_LEAD', 'ECOSYSTEM_MGR', 'KEY_CUSTOMER'],
    options: [
      { id: 'A', text: 'Joint innovation capability building', impact: { innovationSynergy: 20, valueCreation: 12, partnerAlignment: 8 }, risk: 0.30, stakeholderReactions: { INNOVATION_LEAD: 20, ECOSYSTEM_MGR: 18, PARTNER_CEO: 10 } },
      { id: 'B', text: 'Customer-driven innovation focus', impact: { valueCreation: 18, innovationSynergy: 12, operationalIntegration: 5 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 20, INNOVATION_LEAD: 15, CEO: 12 } },
      { id: 'C', text: 'Innovation ecosystem expansion', impact: { innovationSynergy: 15, valueCreation: 10, partnerAlignment: -5 }, risk: 0.35, stakeholderReactions: { ECOSYSTEM_MGR: 20, INNOVATION_LEAD: 15, PARTNER_CEO: -8 } },
      { id: 'D', text: 'Technology platform co-investment', impact: { innovationSynergy: 18, valueCreation: 10, exitReadiness: -8 }, risk: 0.35, stakeholderReactions: { INNOVATION_LEAD: 18, CFO: -8, PARTNER_CEO: 12 } },
      { id: 'E', text: 'Innovation process excellence', impact: { innovationSynergy: 15, governanceEffectiveness: 10, valueCreation: 10 }, risk: 0.25, stakeholderReactions: { INNOVATION_LEAD: 18, ALLIANCE_LEAD: 12, OPERATIONS_LEAD: 10 } },
      { id: 'F', text: 'Balanced innovation with IP protection', impact: { innovationSynergy: 12, exitReadiness: 12, valueCreation: 8 }, risk: 0.25, stakeholderReactions: { LEGAL_COUNSEL: 18, INNOVATION_LEAD: 12, CFO: 10 } }
    ]
  },
  {
    id: 23,
    phase: 'OPTIMIZATION',
    title: 'Future Readiness',
    scenario: 'Partnership must be ready for the future. Building adaptability and resilience for long-term success.',
    stakeholderFocus: ['CEO', 'STRATEGY_VP', 'PARTNER_CEO'],
    options: [
      { id: 'A', text: 'Long-term strategic planning together', impact: { partnerAlignment: 18, valueCreation: 12, innovationSynergy: 10 }, risk: 0.25, stakeholderReactions: { CEO: 18, PARTNER_CEO: 18, STRATEGY_VP: 15 } },
      { id: 'B', text: 'Scenario planning for market changes', impact: { exitReadiness: 15, partnerAlignment: 10, governanceEffectiveness: 8 }, risk: 0.25, stakeholderReactions: { STRATEGY_VP: 18, RISK_MANAGER: 15, CFO: 10 } },
      { id: 'C', text: 'Capability building for future needs', impact: { operationalIntegration: 15, innovationSynergy: 12, valueCreation: 8 }, risk: 0.30, stakeholderReactions: { OPERATIONS_LEAD: 18, INNOVATION_LEAD: 15, PARTNER_OPS: 10 } },
      { id: 'D', text: 'Relationship resilience development', impact: { trustFoundation: 18, conflictManagement: 12, partnerAlignment: 10 }, risk: 0.25, stakeholderReactions: { ALLIANCE_LEAD: 18, CEO: 12, PARTNER_CEO: 12 } },
      { id: 'E', text: 'Expansion opportunity assessment', impact: { valueCreation: 15, innovationSynergy: 10, exitReadiness: -5 }, risk: 0.35, stakeholderReactions: { CEO: 18, PARTNER_CEO: 15, CFO: -5 } },
      { id: 'F', text: 'Exit optionality preservation', impact: { exitReadiness: 18, governanceEffectiveness: 10, partnerAlignment: -5 }, risk: 0.30, stakeholderReactions: { LEGAL_COUNSEL: 18, RISK_MANAGER: 15, PARTNER_CEO: -10 } }
    ]
  },
  {
    id: 24,
    phase: 'OPTIMIZATION',
    title: 'Partnership Legacy',
    scenario: 'Final decisions to cement partnership success. Your choices will define the lasting impact of this strategic alliance.',
    stakeholderFocus: ['CEO', 'PARTNER_CEO', 'BOARD_REP'],
    options: [
      { id: 'A', text: 'Transformational partnership commitment', impact: { partnerAlignment: 18, valueCreation: 15, innovationSynergy: 12 }, risk: 0.30, stakeholderReactions: { CEO: 20, PARTNER_CEO: 20, BOARD_REP: 12 } },
      { id: 'B', text: 'Value creation excellence legacy', impact: { valueCreation: 20, operationalIntegration: 12, governanceEffectiveness: 8 }, risk: 0.25, stakeholderReactions: { CFO: 20, PARTNER_CFO: 18, BOARD_REP: 12 } },
      { id: 'C', text: 'Trust and relationship as foundation', impact: { trustFoundation: 20, partnerAlignment: 15, conflictManagement: 10 }, risk: 0.25, stakeholderReactions: { CEO: 18, PARTNER_CEO: 18, ALLIANCE_LEAD: 15 } },
      { id: 'D', text: 'Innovation partnership leadership', impact: { innovationSynergy: 20, valueCreation: 12, partnerAlignment: 8 }, risk: 0.30, stakeholderReactions: { INNOVATION_LEAD: 20, ECOSYSTEM_MGR: 18, KEY_CUSTOMER: 12 } },
      { id: 'E', text: 'Sustainable governance model', impact: { governanceEffectiveness: 18, exitReadiness: 12, partnerAlignment: 10 }, risk: 0.25, stakeholderReactions: { BOARD_REP: 18, LEGAL_COUNSEL: 15, CFO: 12 } },
      { id: 'F', text: 'Balanced excellence across all dimensions', impact: { partnerAlignment: 12, valueCreation: 12, trustFoundation: 12 }, risk: 0.20, stakeholderReactions: { CEO: 15, PARTNER_CEO: 15, BOARD_REP: 12 } }
    ]
  }
];

export const PHASE_DESCRIPTIONS = {
  FORMATION: {
    name: 'Formation',
    description: 'Define vision, assess fit, and establish partnership foundation',
    rounds: [1, 2, 3, 4, 5, 6]
  },
  OPERATION: {
    name: 'Operation',
    description: 'Execute operations, manage performance, and build relationships',
    rounds: [7, 8, 9, 10, 11, 12]
  },
  EVOLUTION: {
    name: 'Evolution',
    description: 'Expand, adapt, and address challenges together',
    rounds: [13, 14, 15, 16, 17, 18]
  },
  OPTIMIZATION: {
    name: 'Optimization',
    description: 'Optimize value, achieve excellence, and build lasting success',
    rounds: [19, 20, 21, 22, 23, 24]
  }
};

export const getRoundById = (id) => ROUNDS.find(r => r.id === id);
export const getRoundsByPhase = (phase) => ROUNDS.filter(r => r.phase === phase);
export const getAllRounds = () => ROUNDS;
