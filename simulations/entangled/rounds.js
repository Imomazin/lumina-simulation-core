// Entangled Simulation Rounds
// 24 rounds across 4 phases with 6 options each

export const ROUNDS = [
  // Phase 1: Assessment (Rounds 1-6)
  {
    id: 1,
    phase: 'ASSESSMENT',
    title: 'Stakeholder Mapping',
    scenario: 'Complex stakeholder landscape requires systematic mapping. Multiple parties have competing interests. Understanding the web of relationships is critical.',
    stakeholderFocus: ['INTEGRATION_LEAD', 'ACQUIRER_CEO', 'TARGET_CEO'],
    options: [
      { id: 'A', text: 'Comprehensive stakeholder analysis and influence mapping', impact: { stakeholderAlignment: 12, communicationClarity: 10, decisionVelocity: -3 }, risk: 0.20, stakeholderReactions: { INTEGRATION_LEAD: 18, BOARD_REP: 12, ACQUIRER_CEO: 10 } },
      { id: 'B', text: 'Quick stakeholder prioritization based on power dynamics', impact: { decisionVelocity: 12, stakeholderAlignment: 8, trustLevel: -3 }, risk: 0.30, stakeholderReactions: { ACQUIRER_CEO: 15, ACQUIRER_CFO: 12, TARGET_CEO: -10 } },
      { id: 'C', text: 'Bilateral meetings with key stakeholder groups', impact: { trustLevel: 12, stakeholderAlignment: 8, conflictResolution: 5 }, risk: 0.25, stakeholderReactions: { TARGET_CEO: 15, KEY_EXECUTIVE_T: 12, INTEGRATION_LEAD: 8 } },
      { id: 'D', text: 'External stakeholder analysis by consulting firm', impact: { stakeholderAlignment: 10, communicationClarity: 8, operationalSynergy: -5 }, risk: 0.25, stakeholderReactions: { BOARD_REP: 15, INVESTOR: 10, INTEGRATION_LEAD: -5 } },
      { id: 'E', text: 'Employee sentiment survey across both organizations', impact: { culturalIntegration: 12, trustLevel: 10, decisionVelocity: -5 }, risk: 0.20, stakeholderReactions: { TARGET_CHRO: 18, UNION_LEADER: 15, ACQUIRER_CFO: -5 } },
      { id: 'F', text: 'Focus on visible leadership alignment first', impact: { stakeholderAlignment: 10, communicationClarity: 8, culturalIntegration: -3 }, risk: 0.25, stakeholderReactions: { ACQUIRER_CEO: 18, COMMS_HEAD: 12, TARGET_CEO: 5 } }
    ]
  },
  {
    id: 2,
    phase: 'ASSESSMENT',
    title: 'Interest Analysis',
    scenario: 'Divergent interests are emerging. What different parties want varies significantly. Understanding these interests enables negotiation.',
    stakeholderFocus: ['TARGET_CEO', 'ACQUIRER_CFO', 'UNION_LEADER'],
    options: [
      { id: 'A', text: 'Structured interest negotiation sessions', impact: { conflictResolution: 12, stakeholderAlignment: 10, decisionVelocity: -5 }, risk: 0.25, stakeholderReactions: { INTEGRATION_LEAD: 15, TARGET_CEO: 12, UNION_LEADER: 10 } },
      { id: 'B', text: 'Financial value focus to align interests', impact: { valueRealization: 15, stakeholderAlignment: 5, culturalIntegration: -5 }, risk: 0.30, stakeholderReactions: { ACQUIRER_CFO: 18, INVESTOR: 15, TARGET_CHRO: -10 } },
      { id: 'C', text: 'Culture and people interest prioritization', impact: { culturalIntegration: 15, trustLevel: 10, valueRealization: -3 }, risk: 0.25, stakeholderReactions: { TARGET_CHRO: 18, UNION_LEADER: 15, ACQUIRER_CFO: -8 } },
      { id: 'D', text: 'Customer continuity as unifying interest', impact: { operationalSynergy: 12, stakeholderAlignment: 10, decisionVelocity: 5 }, risk: 0.20, stakeholderReactions: { KEY_CUSTOMER: 18, SUPPLIER_KEY: 12, INTEGRATION_LEAD: 10 } },
      { id: 'E', text: 'Power-based interest assertion by acquirer', impact: { decisionVelocity: 15, valueRealization: 8, trustLevel: -12 }, risk: 0.40, stakeholderReactions: { ACQUIRER_CEO: 15, TARGET_CEO: -20, UNION_LEADER: -15 } },
      { id: 'F', text: 'Win-win framework development for all parties', impact: { stakeholderAlignment: 12, conflictResolution: 10, decisionVelocity: -3 }, risk: 0.20, stakeholderReactions: { INTEGRATION_LEAD: 18, CULTURE_LEAD: 15, BOARD_REP: 10 } }
    ]
  },
  {
    id: 3,
    phase: 'ASSESSMENT',
    title: 'Power Dynamics',
    scenario: 'Power imbalances are creating friction. Some stakeholders feel marginalized. How power is exercised will determine trust.',
    stakeholderFocus: ['ACQUIRER_CEO', 'TARGET_CEO', 'BOARD_REP'],
    options: [
      { id: 'A', text: 'Balanced governance structure with shared decision rights', impact: { stakeholderAlignment: 15, trustLevel: 12, decisionVelocity: -8 }, risk: 0.25, stakeholderReactions: { TARGET_CEO: 18, BOARD_REP: 15, ACQUIRER_CEO: -5 } },
      { id: 'B', text: 'Clear acquirer authority with target consultation', impact: { decisionVelocity: 15, operationalSynergy: 8, trustLevel: -8 }, risk: 0.35, stakeholderReactions: { ACQUIRER_CEO: 18, ACQUIRER_CFO: 12, TARGET_CEO: -15 } },
      { id: 'C', text: 'Meritocracy-based leadership selection', impact: { stakeholderAlignment: 10, culturalIntegration: 8, conflictResolution: -5 }, risk: 0.35, stakeholderReactions: { KEY_EXECUTIVE_A: 15, KEY_EXECUTIVE_T: 10, TARGET_CEO: -8 } },
      { id: 'D', text: 'Integration committee with equal representation', impact: { stakeholderAlignment: 12, communicationClarity: 10, decisionVelocity: -5 }, risk: 0.25, stakeholderReactions: { INTEGRATION_LEAD: 18, TARGET_CEO: 12, ACQUIRER_CEO: 5 } },
      { id: 'E', text: 'External facilitator to manage power dynamics', impact: { conflictResolution: 12, stakeholderAlignment: 8, trustLevel: 5 }, risk: 0.25, stakeholderReactions: { BOARD_REP: 15, TARGET_CEO: 10, ACQUIRER_CEO: 5 } },
      { id: 'F', text: 'Transparent criteria for all decisions', impact: { communicationClarity: 15, stakeholderAlignment: 8, decisionVelocity: -3 }, risk: 0.20, stakeholderReactions: { COMMS_HEAD: 18, KEY_EXECUTIVE_T: 12, UNION_LEADER: 10 } }
    ]
  },
  {
    id: 4,
    phase: 'ASSESSMENT',
    title: 'Cultural Assessment',
    scenario: 'Cultural differences between organizations are significant. Values and ways of working differ. Cultural integration will be challenging.',
    stakeholderFocus: ['TARGET_CHRO', 'CULTURE_LEAD', 'KEY_EXECUTIVE_T'],
    options: [
      { id: 'A', text: 'Deep cultural assessment and gap analysis', impact: { culturalIntegration: 15, communicationClarity: 10, decisionVelocity: -5 }, risk: 0.20, stakeholderReactions: { CULTURE_LEAD: 20, TARGET_CHRO: 15, INTEGRATION_LEAD: 10 } },
      { id: 'B', text: 'Best of both cultures approach', impact: { culturalIntegration: 12, stakeholderAlignment: 10, operationalSynergy: -3 }, risk: 0.30, stakeholderReactions: { CULTURE_LEAD: 18, KEY_EXECUTIVE_T: 15, KEY_EXECUTIVE_A: 10 } },
      { id: 'C', text: 'Acquirer culture adoption with transition support', impact: { decisionVelocity: 12, operationalSynergy: 10, culturalIntegration: -8 }, risk: 0.35, stakeholderReactions: { ACQUIRER_CEO: 15, KEY_EXECUTIVE_A: 12, TARGET_CHRO: -15 } },
      { id: 'D', text: 'New unified culture creation', impact: { culturalIntegration: 12, stakeholderAlignment: 8, valueRealization: -5 }, risk: 0.35, stakeholderReactions: { CULTURE_LEAD: 18, TARGET_CEO: 10, ACQUIRER_CFO: -10 } },
      { id: 'E', text: 'Cultural integration through joint projects', impact: { culturalIntegration: 10, operationalSynergy: 12, trustLevel: 8 }, risk: 0.25, stakeholderReactions: { KEY_EXECUTIVE_A: 15, KEY_EXECUTIVE_T: 15, INTEGRATION_LEAD: 12 } },
      { id: 'F', text: 'Employee exchange programs for cultural understanding', impact: { culturalIntegration: 12, trustLevel: 10, operationalSynergy: -3 }, risk: 0.25, stakeholderReactions: { TARGET_CHRO: 18, CULTURE_LEAD: 15, UNION_LEADER: 10 } }
    ]
  },
  {
    id: 5,
    phase: 'ASSESSMENT',
    title: 'Conflict Identification',
    scenario: 'Early conflicts are surfacing. Disagreements about direction, resources, and roles are creating tension. Addressing them early is critical.',
    stakeholderFocus: ['KEY_EXECUTIVE_A', 'KEY_EXECUTIVE_T', 'INTEGRATION_LEAD'],
    options: [
      { id: 'A', text: 'Structured conflict resolution process', impact: { conflictResolution: 15, stakeholderAlignment: 10, communicationClarity: 8 }, risk: 0.25, stakeholderReactions: { INTEGRATION_LEAD: 18, CULTURE_LEAD: 15, BOARD_REP: 10 } },
      { id: 'B', text: 'Leadership mediation for key disputes', impact: { conflictResolution: 12, trustLevel: 10, decisionVelocity: -5 }, risk: 0.25, stakeholderReactions: { ACQUIRER_CEO: 15, TARGET_CEO: 12, KEY_EXECUTIVE_T: 10 } },
      { id: 'C', text: 'Clear escalation path and decision authority', impact: { decisionVelocity: 15, conflictResolution: 8, stakeholderAlignment: -3 }, risk: 0.30, stakeholderReactions: { ACQUIRER_CFO: 15, INTEGRATION_LEAD: 12, KEY_EXECUTIVE_T: -8 } },
      { id: 'D', text: 'Team building activities to reduce friction', impact: { culturalIntegration: 12, trustLevel: 10, conflictResolution: 5 }, risk: 0.20, stakeholderReactions: { CULTURE_LEAD: 18, TARGET_CHRO: 15, KEY_EXECUTIVE_A: 8 } },
      { id: 'E', text: 'External coach for conflicting executives', impact: { conflictResolution: 12, stakeholderAlignment: 8, trustLevel: 5 }, risk: 0.30, stakeholderReactions: { KEY_EXECUTIVE_T: 15, KEY_EXECUTIVE_A: 12, BOARD_REP: 8 } },
      { id: 'F', text: 'Separate teams until synergies are clearer', impact: { operationalSynergy: -8, conflictResolution: 8, culturalIntegration: -5 }, risk: 0.30, stakeholderReactions: { KEY_EXECUTIVE_T: 15, TARGET_CEO: 12, ACQUIRER_CFO: -12 } }
    ]
  },
  {
    id: 6,
    phase: 'ASSESSMENT',
    title: 'Communication Foundation',
    scenario: 'Mixed messages are creating confusion. Different stakeholders hear different stories. Establishing clear communication is essential.',
    stakeholderFocus: ['COMMS_HEAD', 'BOARD_REP', 'INVESTOR'],
    options: [
      { id: 'A', text: 'Unified communication strategy and messaging', impact: { communicationClarity: 18, stakeholderAlignment: 10, trustLevel: 8 }, risk: 0.20, stakeholderReactions: { COMMS_HEAD: 20, INTEGRATION_LEAD: 15, BOARD_REP: 12 } },
      { id: 'B', text: 'Stakeholder-specific communication plans', impact: { communicationClarity: 12, stakeholderAlignment: 10, decisionVelocity: -3 }, risk: 0.25, stakeholderReactions: { COMMS_HEAD: 18, KEY_CUSTOMER: 12, INVESTOR: 10 } },
      { id: 'C', text: 'Town halls and open forums for transparency', impact: { trustLevel: 15, communicationClarity: 10, decisionVelocity: -5 }, risk: 0.25, stakeholderReactions: { UNION_LEADER: 18, TARGET_CHRO: 15, COMMS_HEAD: 10 } },
      { id: 'D', text: 'Leadership communication training and alignment', impact: { communicationClarity: 12, stakeholderAlignment: 10, culturalIntegration: 5 }, risk: 0.20, stakeholderReactions: { ACQUIRER_CEO: 15, TARGET_CEO: 12, COMMS_HEAD: 15 } },
      { id: 'E', text: 'Digital communication platform for real-time updates', impact: { communicationClarity: 12, decisionVelocity: 8, trustLevel: 5 }, risk: 0.25, stakeholderReactions: { COMMS_HEAD: 18, KEY_EXECUTIVE_A: 12, INTEGRATION_LEAD: 10 } },
      { id: 'F', text: 'Minimal communication until decisions are final', impact: { decisionVelocity: 10, communicationClarity: -8, trustLevel: -10 }, risk: 0.35, stakeholderReactions: { ACQUIRER_CFO: 12, UNION_LEADER: -18, TARGET_CHRO: -12 } }
    ]
  },

  // Phase 2: Engagement (Rounds 7-12)
  {
    id: 7,
    phase: 'ENGAGEMENT',
    title: 'Coalition Building',
    scenario: 'Need to build coalitions of support. Key stakeholders can influence others. Building alliances will accelerate progress.',
    stakeholderFocus: ['KEY_EXECUTIVE_A', 'KEY_EXECUTIVE_T', 'CULTURE_LEAD'],
    options: [
      { id: 'A', text: 'Identify and empower change champions across both sides', impact: { stakeholderAlignment: 15, culturalIntegration: 10, trustLevel: 8 }, risk: 0.25, stakeholderReactions: { CULTURE_LEAD: 18, KEY_EXECUTIVE_T: 15, INTEGRATION_LEAD: 12 } },
      { id: 'B', text: 'Executive coalition with visible collaboration', impact: { stakeholderAlignment: 12, communicationClarity: 10, operationalSynergy: 5 }, risk: 0.25, stakeholderReactions: { ACQUIRER_CEO: 15, TARGET_CEO: 12, BOARD_REP: 10 } },
      { id: 'C', text: 'Middle management engagement program', impact: { operationalSynergy: 12, stakeholderAlignment: 10, decisionVelocity: -3 }, risk: 0.20, stakeholderReactions: { KEY_EXECUTIVE_A: 15, KEY_EXECUTIVE_T: 12, TARGET_CHRO: 10 } },
      { id: 'D', text: 'Customer-facing team alignment priority', impact: { operationalSynergy: 15, valueRealization: 10, culturalIntegration: -3 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 18, SUPPLIER_KEY: 12, INTEGRATION_LEAD: 10 } },
      { id: 'E', text: 'Union and employee representative partnership', impact: { trustLevel: 15, stakeholderAlignment: 10, decisionVelocity: -5 }, risk: 0.25, stakeholderReactions: { UNION_LEADER: 20, TARGET_CHRO: 15, ACQUIRER_CFO: -8 } },
      { id: 'F', text: 'Quick wins team to build momentum', impact: { valueRealization: 12, stakeholderAlignment: 8, communicationClarity: 5 }, risk: 0.25, stakeholderReactions: { INTEGRATION_LEAD: 18, KEY_EXECUTIVE_A: 12, INVESTOR: 10 } }
    ]
  },
  {
    id: 8,
    phase: 'ENGAGEMENT',
    title: 'Negotiation Dynamics',
    scenario: 'Critical negotiations are underway. Resources, roles, and responsibilities must be allocated. Fair process matters as much as outcomes.',
    stakeholderFocus: ['ACQUIRER_CFO', 'TARGET_CEO', 'UNION_LEADER'],
    options: [
      { id: 'A', text: 'Interest-based negotiation with joint problem-solving', impact: { conflictResolution: 15, stakeholderAlignment: 12, trustLevel: 8 }, risk: 0.25, stakeholderReactions: { INTEGRATION_LEAD: 18, TARGET_CEO: 15, UNION_LEADER: 12 } },
      { id: 'B', text: 'Data-driven resource allocation decisions', impact: { valueRealization: 15, operationalSynergy: 10, stakeholderAlignment: -3 }, risk: 0.30, stakeholderReactions: { ACQUIRER_CFO: 18, INVESTOR: 15, TARGET_CEO: -5 } },
      { id: 'C', text: 'Leadership role negotiation with clear criteria', impact: { stakeholderAlignment: 12, conflictResolution: 10, decisionVelocity: -5 }, risk: 0.30, stakeholderReactions: { KEY_EXECUTIVE_T: 15, KEY_EXECUTIVE_A: 12, BOARD_REP: 10 } },
      { id: 'D', text: 'Phased decisions with pilot testing', impact: { operationalSynergy: 10, trustLevel: 12, decisionVelocity: -8 }, risk: 0.25, stakeholderReactions: { TARGET_CEO: 15, INTEGRATION_LEAD: 12, ACQUIRER_CFO: -5 } },
      { id: 'E', text: 'Third-party arbitration for disputed decisions', impact: { conflictResolution: 15, stakeholderAlignment: 8, decisionVelocity: -5 }, risk: 0.30, stakeholderReactions: { BOARD_REP: 15, TARGET_CEO: 12, UNION_LEADER: 10 } },
      { id: 'F', text: 'Executive authority for final decisions', impact: { decisionVelocity: 18, valueRealization: 8, trustLevel: -10 }, risk: 0.40, stakeholderReactions: { ACQUIRER_CEO: 15, ACQUIRER_CFO: 12, TARGET_CEO: -15 } }
    ]
  },
  {
    id: 9,
    phase: 'ENGAGEMENT',
    title: 'Trust Building',
    scenario: 'Trust remains fragile. Past promises must be kept. Building genuine trust requires consistent action over time.',
    stakeholderFocus: ['TARGET_CHRO', 'UNION_LEADER', 'KEY_EXECUTIVE_T'],
    options: [
      { id: 'A', text: 'Transparent decision-making with rationale sharing', impact: { trustLevel: 15, communicationClarity: 12, stakeholderAlignment: 8 }, risk: 0.20, stakeholderReactions: { TARGET_CEO: 18, UNION_LEADER: 15, COMMS_HEAD: 12 } },
      { id: 'B', text: 'Honor all commitments made during acquisition', impact: { trustLevel: 18, stakeholderAlignment: 10, valueRealization: -8 }, risk: 0.25, stakeholderReactions: { TARGET_CHRO: 20, UNION_LEADER: 18, ACQUIRER_CFO: -12 } },
      { id: 'C', text: 'Joint success metrics with shared accountability', impact: { trustLevel: 12, operationalSynergy: 10, valueRealization: 8 }, risk: 0.25, stakeholderReactions: { INTEGRATION_LEAD: 18, KEY_EXECUTIVE_A: 12, KEY_EXECUTIVE_T: 12 } },
      { id: 'D', text: 'Early warning system for trust issues', impact: { conflictResolution: 12, trustLevel: 10, communicationClarity: 8 }, risk: 0.25, stakeholderReactions: { TARGET_CHRO: 15, CULTURE_LEAD: 12, INTEGRATION_LEAD: 10 } },
      { id: 'E', text: 'Leadership vulnerability and authenticity program', impact: { trustLevel: 15, culturalIntegration: 10, stakeholderAlignment: 5 }, risk: 0.25, stakeholderReactions: { TARGET_CEO: 15, ACQUIRER_CEO: 12, CULTURE_LEAD: 15 } },
      { id: 'F', text: 'Results focus to prove commitment through action', impact: { valueRealization: 15, trustLevel: 8, operationalSynergy: 10 }, risk: 0.30, stakeholderReactions: { ACQUIRER_CFO: 18, INVESTOR: 15, TARGET_CHRO: -5 } }
    ]
  },
  {
    id: 10,
    phase: 'ENGAGEMENT',
    title: 'Resistance Management',
    scenario: 'Resistance is building in some areas. Some stakeholders are blocking progress. Addressing resistance constructively is essential.',
    stakeholderFocus: ['UNION_LEADER', 'KEY_EXECUTIVE_T', 'TARGET_CEO'],
    options: [
      { id: 'A', text: 'Understand and address root causes of resistance', impact: { conflictResolution: 15, stakeholderAlignment: 12, decisionVelocity: -5 }, risk: 0.25, stakeholderReactions: { CULTURE_LEAD: 18, UNION_LEADER: 15, TARGET_CHRO: 12 } },
      { id: 'B', text: 'Clear consequences for blocking behaviors', impact: { decisionVelocity: 15, operationalSynergy: 8, trustLevel: -10 }, risk: 0.40, stakeholderReactions: { ACQUIRER_CEO: 15, ACQUIRER_CFO: 12, TARGET_CEO: -15 } },
      { id: 'C', text: 'Convert resisters through involvement', impact: { stakeholderAlignment: 12, culturalIntegration: 10, trustLevel: 8 }, risk: 0.25, stakeholderReactions: { KEY_EXECUTIVE_T: 15, UNION_LEADER: 12, INTEGRATION_LEAD: 10 } },
      { id: 'D', text: 'Work around resisters with parallel paths', impact: { operationalSynergy: 10, decisionVelocity: 12, stakeholderAlignment: -8 }, risk: 0.35, stakeholderReactions: { KEY_EXECUTIVE_A: 15, ACQUIRER_CFO: 12, TARGET_CEO: -12 } },
      { id: 'E', text: 'Peer influence and social pressure mobilization', impact: { stakeholderAlignment: 12, culturalIntegration: 8, conflictResolution: 5 }, risk: 0.30, stakeholderReactions: { KEY_EXECUTIVE_A: 15, CULTURE_LEAD: 12, KEY_EXECUTIVE_T: -8 } },
      { id: 'F', text: 'Patience and persistence with consistent message', impact: { trustLevel: 12, stakeholderAlignment: 8, decisionVelocity: -8 }, risk: 0.25, stakeholderReactions: { TARGET_CEO: 15, TARGET_CHRO: 12, INTEGRATION_LEAD: 8 } }
    ]
  },
  {
    id: 11,
    phase: 'ENGAGEMENT',
    title: 'Synergy Acceleration',
    scenario: 'Pressure to demonstrate synergy value is mounting. Quick wins are needed but sustainable value requires careful integration.',
    stakeholderFocus: ['ACQUIRER_CFO', 'INVESTOR', 'INTEGRATION_LEAD'],
    options: [
      { id: 'A', text: 'Prioritize high-confidence synergies for early delivery', impact: { valueRealization: 15, operationalSynergy: 10, stakeholderAlignment: 5 }, risk: 0.25, stakeholderReactions: { ACQUIRER_CFO: 18, INVESTOR: 15, INTEGRATION_LEAD: 12 } },
      { id: 'B', text: 'Comprehensive synergy program with staged rollout', impact: { operationalSynergy: 12, valueRealization: 10, decisionVelocity: -5 }, risk: 0.25, stakeholderReactions: { INTEGRATION_LEAD: 18, KEY_EXECUTIVE_A: 12, BOARD_REP: 10 } },
      { id: 'C', text: 'Cost synergy focus for financial credibility', impact: { valueRealization: 18, operationalSynergy: 8, trustLevel: -8 }, risk: 0.35, stakeholderReactions: { ACQUIRER_CFO: 18, INVESTOR: 15, UNION_LEADER: -15 } },
      { id: 'D', text: 'Revenue synergy prioritization for growth story', impact: { valueRealization: 12, stakeholderAlignment: 10, operationalSynergy: 5 }, risk: 0.30, stakeholderReactions: { KEY_CUSTOMER: 15, KEY_EXECUTIVE_A: 12, INVESTOR: 10 } },
      { id: 'E', text: 'Joint synergy teams with shared targets', impact: { operationalSynergy: 15, culturalIntegration: 10, trustLevel: 8 }, risk: 0.25, stakeholderReactions: { KEY_EXECUTIVE_T: 15, KEY_EXECUTIVE_A: 15, INTEGRATION_LEAD: 12 } },
      { id: 'F', text: 'Conservative synergy estimates to manage expectations', impact: { trustLevel: 12, communicationClarity: 10, valueRealization: -5 }, risk: 0.20, stakeholderReactions: { BOARD_REP: 15, TARGET_CEO: 12, INVESTOR: -8 } }
    ]
  },
  {
    id: 12,
    phase: 'ENGAGEMENT',
    title: 'External Stakeholder Alignment',
    scenario: 'Customers, suppliers, and regulators need reassurance. External stakeholders impact success. Coordinated engagement is required.',
    stakeholderFocus: ['KEY_CUSTOMER', 'SUPPLIER_KEY', 'REGULATOR'],
    options: [
      { id: 'A', text: 'Proactive customer reassurance and retention program', impact: { operationalSynergy: 15, valueRealization: 10, stakeholderAlignment: 8 }, risk: 0.20, stakeholderReactions: { KEY_CUSTOMER: 20, COMMS_HEAD: 15, INTEGRATION_LEAD: 10 } },
      { id: 'B', text: 'Supplier relationship reinforcement initiative', impact: { operationalSynergy: 12, trustLevel: 10, valueRealization: 5 }, risk: 0.25, stakeholderReactions: { SUPPLIER_KEY: 18, KEY_EXECUTIVE_A: 12, ACQUIRER_CFO: 8 } },
      { id: 'C', text: 'Regulatory compliance and approval focus', impact: { stakeholderAlignment: 12, communicationClarity: 10, decisionVelocity: -5 }, risk: 0.25, stakeholderReactions: { REGULATOR: 18, BOARD_REP: 15, INTEGRATION_LEAD: 8 } },
      { id: 'D', text: 'Joint external communication strategy', impact: { communicationClarity: 15, stakeholderAlignment: 10, trustLevel: 8 }, risk: 0.25, stakeholderReactions: { COMMS_HEAD: 18, KEY_CUSTOMER: 12, INVESTOR: 10 } },
      { id: 'E', text: 'Key account management continuity priority', impact: { valueRealization: 12, operationalSynergy: 10, stakeholderAlignment: 8 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 18, KEY_EXECUTIVE_T: 12, ACQUIRER_CEO: 10 } },
      { id: 'F', text: 'External stakeholder advisory group formation', impact: { stakeholderAlignment: 12, communicationClarity: 10, trustLevel: 8 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 15, SUPPLIER_KEY: 12, REGULATOR: 10 } }
    ]
  },

  // Phase 3: Resolution (Rounds 13-18)
  {
    id: 13,
    phase: 'RESOLUTION',
    title: 'Structural Decisions',
    scenario: 'Critical structural decisions must be finalized. Organization design, roles, and governance require clarity. Stakes are high.',
    stakeholderFocus: ['ACQUIRER_CEO', 'TARGET_CEO', 'BOARD_REP'],
    options: [
      { id: 'A', text: 'Collaborative organization design with input from both sides', impact: { stakeholderAlignment: 15, culturalIntegration: 10, decisionVelocity: -5 }, risk: 0.25, stakeholderReactions: { TARGET_CEO: 18, KEY_EXECUTIVE_T: 15, INTEGRATION_LEAD: 12 } },
      { id: 'B', text: 'Best-in-class structure regardless of origin', impact: { operationalSynergy: 15, valueRealization: 10, stakeholderAlignment: -5 }, risk: 0.35, stakeholderReactions: { ACQUIRER_CEO: 15, ACQUIRER_CFO: 12, TARGET_CEO: -10 } },
      { id: 'C', text: 'Phased integration with transition structure', impact: { trustLevel: 12, operationalSynergy: 8, decisionVelocity: -8 }, risk: 0.25, stakeholderReactions: { TARGET_CEO: 15, TARGET_CHRO: 12, INTEGRATION_LEAD: 10 } },
      { id: 'D', text: 'Clear leadership appointments with support plans', impact: { decisionVelocity: 15, stakeholderAlignment: 8, culturalIntegration: -3 }, risk: 0.30, stakeholderReactions: { ACQUIRER_CEO: 18, BOARD_REP: 15, KEY_EXECUTIVE_T: -8 } },
      { id: 'E', text: 'Governance framework with balanced oversight', impact: { stakeholderAlignment: 12, trustLevel: 10, communicationClarity: 8 }, risk: 0.25, stakeholderReactions: { BOARD_REP: 18, TARGET_CEO: 12, INVESTOR: 10 } },
      { id: 'F', text: 'Flexible structure with evolution built in', impact: { culturalIntegration: 10, stakeholderAlignment: 8, operationalSynergy: -5 }, risk: 0.30, stakeholderReactions: { TARGET_CEO: 15, CULTURE_LEAD: 12, ACQUIRER_CFO: -8 } }
    ]
  },
  {
    id: 14,
    phase: 'RESOLUTION',
    title: 'People Decisions',
    scenario: 'Difficult people decisions cannot be delayed further. Redundancies, role changes, and talent retention require action.',
    stakeholderFocus: ['TARGET_CHRO', 'UNION_LEADER', 'KEY_EXECUTIVE_T'],
    options: [
      { id: 'A', text: 'Fair and transparent selection process for all roles', impact: { stakeholderAlignment: 12, trustLevel: 15, decisionVelocity: -5 }, risk: 0.25, stakeholderReactions: { TARGET_CHRO: 18, UNION_LEADER: 15, KEY_EXECUTIVE_T: 12 } },
      { id: 'B', text: 'Performance-based retention with clear criteria', impact: { operationalSynergy: 15, valueRealization: 10, trustLevel: -5 }, risk: 0.35, stakeholderReactions: { ACQUIRER_CFO: 18, KEY_EXECUTIVE_A: 12, UNION_LEADER: -12 } },
      { id: 'C', text: 'Generous separation packages for impacted employees', impact: { trustLevel: 15, stakeholderAlignment: 10, valueRealization: -10 }, risk: 0.25, stakeholderReactions: { UNION_LEADER: 18, TARGET_CHRO: 15, ACQUIRER_CFO: -10 } },
      { id: 'D', text: 'Redeployment and retraining priority before separation', impact: { culturalIntegration: 12, trustLevel: 12, operationalSynergy: -5 }, risk: 0.25, stakeholderReactions: { TARGET_CHRO: 18, UNION_LEADER: 15, KEY_EXECUTIVE_T: 10 } },
      { id: 'E', text: 'Key talent retention program with incentives', impact: { operationalSynergy: 15, valueRealization: 8, stakeholderAlignment: -3 }, risk: 0.30, stakeholderReactions: { KEY_EXECUTIVE_A: 18, KEY_EXECUTIVE_T: 15, ACQUIRER_CFO: 10 } },
      { id: 'F', text: 'Swift decisions to end uncertainty quickly', impact: { decisionVelocity: 18, operationalSynergy: 8, trustLevel: -10 }, risk: 0.40, stakeholderReactions: { ACQUIRER_CEO: 15, INVESTOR: 12, TARGET_CHRO: -15 } }
    ]
  },
  {
    id: 15,
    phase: 'RESOLUTION',
    title: 'Process Integration',
    scenario: 'Business processes must be harmonized. Different systems and ways of working need integration. Operational efficiency is the goal.',
    stakeholderFocus: ['KEY_EXECUTIVE_A', 'KEY_EXECUTIVE_T', 'SUPPLIER_KEY'],
    options: [
      { id: 'A', text: 'Best practice process selection from both organizations', impact: { operationalSynergy: 15, culturalIntegration: 10, trustLevel: 8 }, risk: 0.25, stakeholderReactions: { KEY_EXECUTIVE_T: 18, KEY_EXECUTIVE_A: 15, INTEGRATION_LEAD: 12 } },
      { id: 'B', text: 'Standardization on acquirer processes for speed', impact: { operationalSynergy: 12, decisionVelocity: 15, culturalIntegration: -8 }, risk: 0.35, stakeholderReactions: { ACQUIRER_CFO: 18, KEY_EXECUTIVE_A: 12, KEY_EXECUTIVE_T: -12 } },
      { id: 'C', text: 'Phased process integration with change support', impact: { culturalIntegration: 12, trustLevel: 10, operationalSynergy: 5 }, risk: 0.25, stakeholderReactions: { TARGET_CHRO: 15, KEY_EXECUTIVE_T: 12, INTEGRATION_LEAD: 10 } },
      { id: 'D', text: 'Technology-led process transformation', impact: { operationalSynergy: 12, valueRealization: 10, decisionVelocity: -5 }, risk: 0.30, stakeholderReactions: { KEY_EXECUTIVE_A: 15, ACQUIRER_CFO: 12, SUPPLIER_KEY: 8 } },
      { id: 'E', text: 'Customer-facing process priority for continuity', impact: { valueRealization: 15, operationalSynergy: 10, stakeholderAlignment: 8 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 18, KEY_EXECUTIVE_T: 12, INTEGRATION_LEAD: 10 } },
      { id: 'F', text: 'Process innovation opportunity capture', impact: { valueRealization: 12, operationalSynergy: 8, culturalIntegration: 5 }, risk: 0.30, stakeholderReactions: { KEY_EXECUTIVE_A: 15, KEY_EXECUTIVE_T: 12, ACQUIRER_CEO: 10 } }
    ]
  },
  {
    id: 16,
    phase: 'RESOLUTION',
    title: 'Value Capture Acceleration',
    scenario: 'Synergy targets are at risk. Stakeholders expect results. Accelerating value capture while maintaining integration quality is challenging.',
    stakeholderFocus: ['ACQUIRER_CFO', 'INVESTOR', 'INTEGRATION_LEAD'],
    options: [
      { id: 'A', text: 'Synergy tracking with accountability and transparency', impact: { valueRealization: 15, communicationClarity: 10, stakeholderAlignment: 8 }, risk: 0.25, stakeholderReactions: { INVESTOR: 18, ACQUIRER_CFO: 15, BOARD_REP: 12 } },
      { id: 'B', text: 'Aggressive cost reduction to hit targets', impact: { valueRealization: 18, trustLevel: -10, culturalIntegration: -8 }, risk: 0.40, stakeholderReactions: { ACQUIRER_CFO: 18, INVESTOR: 15, UNION_LEADER: -18 } },
      { id: 'C', text: 'Revenue synergy focus with customer growth', impact: { valueRealization: 12, operationalSynergy: 10, stakeholderAlignment: 8 }, risk: 0.30, stakeholderReactions: { KEY_CUSTOMER: 15, KEY_EXECUTIVE_A: 12, ACQUIRER_CEO: 10 } },
      { id: 'D', text: 'Realistic synergy revision with credible plan', impact: { trustLevel: 12, communicationClarity: 10, valueRealization: -5 }, risk: 0.30, stakeholderReactions: { BOARD_REP: 15, TARGET_CEO: 12, INVESTOR: -10 } },
      { id: 'E', text: 'Joint synergy teams with shared incentives', impact: { operationalSynergy: 12, culturalIntegration: 10, valueRealization: 8 }, risk: 0.25, stakeholderReactions: { KEY_EXECUTIVE_T: 15, KEY_EXECUTIVE_A: 15, INTEGRATION_LEAD: 12 } },
      { id: 'F', text: 'Process efficiency focus for sustainable savings', impact: { operationalSynergy: 15, valueRealization: 10, decisionVelocity: -3 }, risk: 0.25, stakeholderReactions: { ACQUIRER_CFO: 15, KEY_EXECUTIVE_A: 12, SUPPLIER_KEY: 10 } }
    ]
  },
  {
    id: 17,
    phase: 'RESOLUTION',
    title: 'Conflict Resolution',
    scenario: 'Major conflicts require resolution. Unresolved tensions are blocking progress. Finding workable solutions is critical.',
    stakeholderFocus: ['TARGET_CEO', 'ACQUIRER_CEO', 'BOARD_REP'],
    options: [
      { id: 'A', text: 'Structured mediation with professional facilitator', impact: { conflictResolution: 18, stakeholderAlignment: 10, trustLevel: 8 }, risk: 0.25, stakeholderReactions: { BOARD_REP: 18, TARGET_CEO: 15, INTEGRATION_LEAD: 12 } },
      { id: 'B', text: 'Leadership summit for relationship reset', impact: { conflictResolution: 15, culturalIntegration: 10, stakeholderAlignment: 8 }, risk: 0.30, stakeholderReactions: { ACQUIRER_CEO: 15, TARGET_CEO: 15, CULTURE_LEAD: 12 } },
      { id: 'C', text: 'Clear decision authority to end disputes', impact: { decisionVelocity: 18, conflictResolution: 10, trustLevel: -8 }, risk: 0.35, stakeholderReactions: { ACQUIRER_CEO: 15, ACQUIRER_CFO: 12, TARGET_CEO: -12 } },
      { id: 'D', text: 'Compromise solutions with shared sacrifice', impact: { stakeholderAlignment: 15, conflictResolution: 12, valueRealization: -5 }, risk: 0.25, stakeholderReactions: { TARGET_CEO: 15, ACQUIRER_CEO: 12, BOARD_REP: 10 } },
      { id: 'E', text: 'Remove blocking individuals from key roles', impact: { decisionVelocity: 15, operationalSynergy: 8, stakeholderAlignment: -10 }, risk: 0.45, stakeholderReactions: { ACQUIRER_CEO: 15, KEY_EXECUTIVE_T: -18, UNION_LEADER: -12 } },
      { id: 'F', text: 'Patience with continued dialogue and trust building', impact: { trustLevel: 12, culturalIntegration: 10, decisionVelocity: -10 }, risk: 0.25, stakeholderReactions: { TARGET_CEO: 15, CULTURE_LEAD: 12, INVESTOR: -8 } }
    ]
  },
  {
    id: 18,
    phase: 'RESOLUTION',
    title: 'Integration Checkpoint',
    scenario: 'Time for honest assessment of integration progress. What is working, what is not? Adjustments may be needed.',
    stakeholderFocus: ['INTEGRATION_LEAD', 'BOARD_REP', 'INVESTOR'],
    options: [
      { id: 'A', text: 'Comprehensive integration audit with stakeholder input', impact: { communicationClarity: 15, stakeholderAlignment: 12, trustLevel: 10 }, risk: 0.20, stakeholderReactions: { BOARD_REP: 18, INTEGRATION_LEAD: 15, TARGET_CEO: 10 } },
      { id: 'B', text: 'Financial metrics review with course corrections', impact: { valueRealization: 15, operationalSynergy: 8, stakeholderAlignment: -3 }, risk: 0.30, stakeholderReactions: { ACQUIRER_CFO: 18, INVESTOR: 15, TARGET_CHRO: -5 } },
      { id: 'C', text: 'Cultural integration health check', impact: { culturalIntegration: 15, trustLevel: 12, decisionVelocity: -5 }, risk: 0.25, stakeholderReactions: { CULTURE_LEAD: 18, TARGET_CHRO: 15, INTEGRATION_LEAD: 10 } },
      { id: 'D', text: 'External assessment for objective perspective', impact: { communicationClarity: 12, stakeholderAlignment: 10, trustLevel: 8 }, risk: 0.25, stakeholderReactions: { BOARD_REP: 15, INVESTOR: 12, ACQUIRER_CEO: 8 } },
      { id: 'E', text: 'Employee pulse survey and feedback sessions', impact: { trustLevel: 15, culturalIntegration: 10, communicationClarity: 8 }, risk: 0.25, stakeholderReactions: { TARGET_CHRO: 18, UNION_LEADER: 15, CULTURE_LEAD: 12 } },
      { id: 'F', text: 'Customer and external stakeholder feedback collection', impact: { operationalSynergy: 12, valueRealization: 10, stakeholderAlignment: 8 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 18, SUPPLIER_KEY: 12, COMMS_HEAD: 10 } }
    ]
  },

  // Phase 4: Integration (Rounds 19-24)
  {
    id: 19,
    phase: 'INTEGRATION',
    title: 'Cultural Fusion',
    scenario: 'True cultural integration requires intentional effort. Moving beyond coexistence to a unified culture is the goal.',
    stakeholderFocus: ['CULTURE_LEAD', 'TARGET_CHRO', 'ACQUIRER_CEO'],
    options: [
      { id: 'A', text: 'New unified values and behaviors definition', impact: { culturalIntegration: 18, stakeholderAlignment: 10, trustLevel: 8 }, risk: 0.25, stakeholderReactions: { CULTURE_LEAD: 20, ACQUIRER_CEO: 15, TARGET_CEO: 12 } },
      { id: 'B', text: 'Cultural celebration and storytelling initiative', impact: { culturalIntegration: 15, communicationClarity: 10, trustLevel: 10 }, risk: 0.20, stakeholderReactions: { COMMS_HEAD: 18, CULTURE_LEAD: 15, TARGET_CHRO: 12 } },
      { id: 'C', text: 'Leadership modeling of integrated behaviors', impact: { culturalIntegration: 12, stakeholderAlignment: 12, trustLevel: 10 }, risk: 0.25, stakeholderReactions: { ACQUIRER_CEO: 18, TARGET_CEO: 15, BOARD_REP: 10 } },
      { id: 'D', text: 'Recognition and reward alignment to new culture', impact: { culturalIntegration: 15, operationalSynergy: 8, stakeholderAlignment: 5 }, risk: 0.25, stakeholderReactions: { TARGET_CHRO: 18, KEY_EXECUTIVE_A: 12, KEY_EXECUTIVE_T: 10 } },
      { id: 'E', text: 'Cross-organizational rotation and collaboration', impact: { culturalIntegration: 15, operationalSynergy: 10, decisionVelocity: -5 }, risk: 0.25, stakeholderReactions: { KEY_EXECUTIVE_T: 15, KEY_EXECUTIVE_A: 15, INTEGRATION_LEAD: 12 } },
      { id: 'F', text: 'Culture metrics and ongoing measurement', impact: { culturalIntegration: 12, communicationClarity: 10, trustLevel: 8 }, risk: 0.20, stakeholderReactions: { CULTURE_LEAD: 18, BOARD_REP: 12, INTEGRATION_LEAD: 10 } }
    ]
  },
  {
    id: 20,
    phase: 'INTEGRATION',
    title: 'Operational Excellence',
    scenario: 'Integrated operations must perform at excellence. Achieving operational synergies while maintaining quality is the challenge.',
    stakeholderFocus: ['KEY_EXECUTIVE_A', 'KEY_EXECUTIVE_T', 'SUPPLIER_KEY'],
    options: [
      { id: 'A', text: 'Operational excellence program with best practices', impact: { operationalSynergy: 18, valueRealization: 12, stakeholderAlignment: 5 }, risk: 0.25, stakeholderReactions: { KEY_EXECUTIVE_A: 18, KEY_EXECUTIVE_T: 15, INTEGRATION_LEAD: 12 } },
      { id: 'B', text: 'Continuous improvement culture embedding', impact: { operationalSynergy: 15, culturalIntegration: 10, valueRealization: 8 }, risk: 0.25, stakeholderReactions: { KEY_EXECUTIVE_T: 18, CULTURE_LEAD: 12, KEY_EXECUTIVE_A: 10 } },
      { id: 'C', text: 'Technology platform consolidation', impact: { operationalSynergy: 15, valueRealization: 10, decisionVelocity: -5 }, risk: 0.30, stakeholderReactions: { ACQUIRER_CFO: 18, KEY_EXECUTIVE_A: 12, KEY_EXECUTIVE_T: 8 } },
      { id: 'D', text: 'Supply chain optimization initiative', impact: { operationalSynergy: 12, valueRealization: 12, trustLevel: 5 }, risk: 0.25, stakeholderReactions: { SUPPLIER_KEY: 18, KEY_EXECUTIVE_A: 12, ACQUIRER_CFO: 10 } },
      { id: 'E', text: 'Customer service excellence focus', impact: { valueRealization: 15, operationalSynergy: 10, stakeholderAlignment: 8 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 18, KEY_EXECUTIVE_T: 12, COMMS_HEAD: 10 } },
      { id: 'F', text: 'Quality management system harmonization', impact: { operationalSynergy: 12, trustLevel: 10, valueRealization: 8 }, risk: 0.25, stakeholderReactions: { KEY_EXECUTIVE_A: 15, REGULATOR: 12, SUPPLIER_KEY: 10 } }
    ]
  },
  {
    id: 21,
    phase: 'INTEGRATION',
    title: 'Stakeholder Relationship Maturity',
    scenario: 'Stakeholder relationships need to mature beyond transactional to partnership. Long-term relationship health matters.',
    stakeholderFocus: ['KEY_CUSTOMER', 'INVESTOR', 'UNION_LEADER'],
    options: [
      { id: 'A', text: 'Strategic partnership development with key stakeholders', impact: { stakeholderAlignment: 18, trustLevel: 12, valueRealization: 8 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 18, INVESTOR: 15, BOARD_REP: 12 } },
      { id: 'B', text: 'Regular stakeholder engagement and feedback loops', impact: { communicationClarity: 15, stakeholderAlignment: 12, trustLevel: 10 }, risk: 0.20, stakeholderReactions: { COMMS_HEAD: 18, KEY_CUSTOMER: 12, UNION_LEADER: 10 } },
      { id: 'C', text: 'Joint value creation initiatives with partners', impact: { valueRealization: 15, stakeholderAlignment: 10, operationalSynergy: 8 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 18, SUPPLIER_KEY: 15, INTEGRATION_LEAD: 10 } },
      { id: 'D', text: 'Employee partnership and voice mechanisms', impact: { trustLevel: 15, culturalIntegration: 10, stakeholderAlignment: 8 }, risk: 0.25, stakeholderReactions: { UNION_LEADER: 18, TARGET_CHRO: 15, CULTURE_LEAD: 10 } },
      { id: 'E', text: 'Investor relations excellence program', impact: { stakeholderAlignment: 12, communicationClarity: 12, valueRealization: 8 }, risk: 0.25, stakeholderReactions: { INVESTOR: 18, BOARD_REP: 15, ACQUIRER_CFO: 10 } },
      { id: 'F', text: 'Community and social responsibility integration', impact: { stakeholderAlignment: 12, trustLevel: 10, culturalIntegration: 8 }, risk: 0.25, stakeholderReactions: { COMMS_HEAD: 15, UNION_LEADER: 12, TARGET_CHRO: 10 } }
    ]
  },
  {
    id: 22,
    phase: 'INTEGRATION',
    title: 'Sustainable Value',
    scenario: 'Moving from synergy capture to sustainable value creation. Integration success requires lasting performance improvement.',
    stakeholderFocus: ['ACQUIRER_CFO', 'BOARD_REP', 'KEY_EXECUTIVE_A'],
    options: [
      { id: 'A', text: 'Sustainable performance management system', impact: { valueRealization: 18, operationalSynergy: 10, stakeholderAlignment: 8 }, risk: 0.25, stakeholderReactions: { ACQUIRER_CFO: 18, BOARD_REP: 15, KEY_EXECUTIVE_A: 12 } },
      { id: 'B', text: 'Growth investment with integration capabilities', impact: { valueRealization: 15, operationalSynergy: 8, decisionVelocity: -3 }, risk: 0.30, stakeholderReactions: { KEY_EXECUTIVE_A: 18, ACQUIRER_CEO: 15, INVESTOR: 10 } },
      { id: 'C', text: 'Efficiency program institutionalization', impact: { operationalSynergy: 15, valueRealization: 12, culturalIntegration: -3 }, risk: 0.25, stakeholderReactions: { ACQUIRER_CFO: 18, KEY_EXECUTIVE_A: 12, UNION_LEADER: -8 } },
      { id: 'D', text: 'Innovation and capability investment', impact: { valueRealization: 12, culturalIntegration: 10, operationalSynergy: 8 }, risk: 0.30, stakeholderReactions: { KEY_EXECUTIVE_T: 15, ACQUIRER_CEO: 12, INVESTOR: 10 } },
      { id: 'E', text: 'Customer value proposition enhancement', impact: { valueRealization: 15, stakeholderAlignment: 10, operationalSynergy: 8 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 18, KEY_EXECUTIVE_A: 12, COMMS_HEAD: 10 } },
      { id: 'F', text: 'Balanced scorecard with integrated metrics', impact: { communicationClarity: 15, valueRealization: 10, stakeholderAlignment: 10 }, risk: 0.20, stakeholderReactions: { BOARD_REP: 18, INTEGRATION_LEAD: 15, ACQUIRER_CFO: 12 } }
    ]
  },
  {
    id: 23,
    phase: 'INTEGRATION',
    title: 'Organization Evolution',
    scenario: 'The integrated organization must continue to evolve. Building adaptive capacity ensures long-term success.',
    stakeholderFocus: ['ACQUIRER_CEO', 'TARGET_CEO', 'CULTURE_LEAD'],
    options: [
      { id: 'A', text: 'Learning organization culture development', impact: { culturalIntegration: 15, operationalSynergy: 10, stakeholderAlignment: 8 }, risk: 0.25, stakeholderReactions: { CULTURE_LEAD: 18, TARGET_CHRO: 15, KEY_EXECUTIVE_T: 10 } },
      { id: 'B', text: 'Leadership pipeline for integrated organization', impact: { stakeholderAlignment: 15, culturalIntegration: 10, valueRealization: 5 }, risk: 0.25, stakeholderReactions: { TARGET_CHRO: 18, KEY_EXECUTIVE_A: 12, ACQUIRER_CEO: 10 } },
      { id: 'C', text: 'Agile operating model adoption', impact: { decisionVelocity: 15, operationalSynergy: 10, culturalIntegration: 5 }, risk: 0.30, stakeholderReactions: { KEY_EXECUTIVE_A: 18, KEY_EXECUTIVE_T: 12, INTEGRATION_LEAD: 10 } },
      { id: 'D', text: 'Change capability institutionalization', impact: { culturalIntegration: 12, conflictResolution: 10, stakeholderAlignment: 10 }, risk: 0.25, stakeholderReactions: { CULTURE_LEAD: 18, INTEGRATION_LEAD: 15, TARGET_CHRO: 10 } },
      { id: 'E', text: 'Strategic planning for next phase of growth', impact: { valueRealization: 15, stakeholderAlignment: 10, decisionVelocity: 5 }, risk: 0.25, stakeholderReactions: { ACQUIRER_CEO: 18, BOARD_REP: 15, INVESTOR: 12 } },
      { id: 'F', text: 'Continuous stakeholder engagement evolution', impact: { stakeholderAlignment: 15, communicationClarity: 12, trustLevel: 10 }, risk: 0.20, stakeholderReactions: { COMMS_HEAD: 18, KEY_CUSTOMER: 12, UNION_LEADER: 10 } }
    ]
  },
  {
    id: 24,
    phase: 'INTEGRATION',
    title: 'Integration Legacy',
    scenario: 'Final decisions to cement integration success. Your choices will define the legacy of this complex stakeholder journey.',
    stakeholderFocus: ['ACQUIRER_CEO', 'TARGET_CEO', 'BOARD_REP'],
    options: [
      { id: 'A', text: 'Unified organization identity and brand', impact: { culturalIntegration: 18, stakeholderAlignment: 12, communicationClarity: 10 }, risk: 0.25, stakeholderReactions: { COMMS_HEAD: 18, ACQUIRER_CEO: 15, TARGET_CEO: 12 } },
      { id: 'B', text: 'Sustainable value creation commitment', impact: { valueRealization: 18, stakeholderAlignment: 10, operationalSynergy: 10 }, risk: 0.25, stakeholderReactions: { INVESTOR: 18, BOARD_REP: 15, ACQUIRER_CFO: 12 } },
      { id: 'C', text: 'People and culture excellence legacy', impact: { culturalIntegration: 15, trustLevel: 15, stakeholderAlignment: 10 }, risk: 0.25, stakeholderReactions: { TARGET_CHRO: 18, CULTURE_LEAD: 18, UNION_LEADER: 12 } },
      { id: 'D', text: 'Stakeholder partnership model establishment', impact: { stakeholderAlignment: 18, trustLevel: 12, valueRealization: 8 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 18, SUPPLIER_KEY: 15, INVESTOR: 12 } },
      { id: 'E', text: 'Operational excellence reputation', impact: { operationalSynergy: 18, valueRealization: 12, culturalIntegration: 5 }, risk: 0.25, stakeholderReactions: { KEY_EXECUTIVE_A: 18, KEY_EXECUTIVE_T: 15, ACQUIRER_CFO: 12 } },
      { id: 'F', text: 'Balanced success across all dimensions', impact: { stakeholderAlignment: 12, culturalIntegration: 12, valueRealization: 12 }, risk: 0.20, stakeholderReactions: { BOARD_REP: 15, ACQUIRER_CEO: 12, TARGET_CEO: 12 } }
    ]
  }
];

export const PHASE_DESCRIPTIONS = {
  ASSESSMENT: {
    name: 'Assessment',
    description: 'Map stakeholders, understand interests, and assess dynamics',
    rounds: [1, 2, 3, 4, 5, 6]
  },
  ENGAGEMENT: {
    name: 'Engagement',
    description: 'Build coalitions, negotiate, and develop trust',
    rounds: [7, 8, 9, 10, 11, 12]
  },
  RESOLUTION: {
    name: 'Resolution',
    description: 'Make decisions, resolve conflicts, and capture value',
    rounds: [13, 14, 15, 16, 17, 18]
  },
  INTEGRATION: {
    name: 'Integration',
    description: 'Achieve cultural fusion and sustainable performance',
    rounds: [19, 20, 21, 22, 23, 24]
  }
};

export const getRoundById = (id) => ROUNDS.find(r => r.id === id);
export const getRoundsByPhase = (phase) => ROUNDS.filter(r => r.phase === phase);
export const getAllRounds = () => ROUNDS;
