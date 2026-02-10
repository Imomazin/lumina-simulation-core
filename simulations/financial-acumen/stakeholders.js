// Financial Acumen Simulation - Stakeholders
// 15 stakeholders representing the financial ecosystem

export const STAKEHOLDERS = {
  CEO: {
    id: 'ceo',
    name: 'Richard Chen',
    role: 'executive',
    title: 'Chief Executive Officer',
    influence: 1.0,
    financialPriority: 'high',
    priorities: ['shareholder_value', 'growth', 'strategic_investment'],
    expectations: ['financial_strategy', 'capital_allocation', 'investor_confidence'],
    profile: { background: 'Strategy and Operations', tenure: '5 years', style: 'growth_oriented' }
  },

  CFO: {
    id: 'cfo',
    name: 'Sarah Martinez',
    role: 'executive',
    title: 'Chief Financial Officer',
    influence: 0.95,
    financialPriority: 'critical',
    priorities: ['financial_performance', 'capital_efficiency', 'risk_management'],
    expectations: ['accurate_forecasting', 'capital_access', 'cost_discipline'],
    profile: { background: 'Investment Banking and Corporate Finance', tenure: '4 years', style: 'analytical' }
  },

  BOARD_CHAIR: {
    id: 'board_chair',
    name: 'Margaret Thompson',
    role: 'governance',
    title: 'Board Chairperson',
    influence: 0.95,
    financialPriority: 'high',
    priorities: ['fiduciary_duty', 'long_term_value', 'governance'],
    expectations: ['transparency', 'prudent_decisions', 'shareholder_alignment'],
    profile: { background: 'Former Fortune 500 CFO', tenure: '6 years on board', style: 'governance_focused' }
  },

  AUDIT_COMMITTEE_CHAIR: {
    id: 'audit_chair',
    name: 'William Foster',
    role: 'governance',
    title: 'Audit Committee Chair',
    influence: 0.85,
    financialPriority: 'critical',
    priorities: ['financial_integrity', 'internal_controls', 'audit_quality'],
    expectations: ['accurate_reporting', 'control_effectiveness', 'risk_oversight'],
    profile: { background: 'Retired Big Four Partner', tenure: '7 years on board', style: 'control_oriented' }
  },

  TREASURER: {
    id: 'treasurer',
    name: 'David Park',
    role: 'finance',
    title: 'Treasurer',
    influence: 0.7,
    financialPriority: 'critical',
    priorities: ['liquidity', 'debt_management', 'cash_optimization'],
    expectations: ['funding_access', 'interest_rate_management', 'bank_relationships'],
    profile: { background: 'Treasury and Banking', tenure: '5 years', style: 'risk_conscious' }
  },

  CONTROLLER: {
    id: 'controller',
    name: 'Jennifer Walsh',
    role: 'finance',
    title: 'Corporate Controller',
    influence: 0.65,
    financialPriority: 'critical',
    priorities: ['financial_reporting', 'compliance', 'process_efficiency'],
    expectations: ['close_timeliness', 'accuracy', 'audit_readiness'],
    profile: { background: 'Public Accounting', tenure: '6 years', style: 'process_oriented' }
  },

  VP_FPA: {
    id: 'vp_fpa',
    name: 'Michael Torres',
    role: 'finance',
    title: 'VP Financial Planning & Analysis',
    influence: 0.7,
    financialPriority: 'high',
    priorities: ['forecasting', 'business_partnership', 'decision_support'],
    expectations: ['analytical_tools', 'business_access', 'strategic_involvement'],
    profile: { background: 'FP&A and Strategy', tenure: '4 years', style: 'strategic' }
  },

  IR_DIRECTOR: {
    id: 'ir_director',
    name: 'Lisa Kim',
    role: 'finance',
    title: 'Director of Investor Relations',
    influence: 0.6,
    financialPriority: 'high',
    priorities: ['investor_communication', 'analyst_coverage', 'market_perception'],
    expectations: ['executive_access', 'timely_information', 'messaging_consistency'],
    profile: { background: 'Sell-side Research and IR', tenure: '3 years', style: 'communicative' }
  },

  BUSINESS_UNIT_CFO: {
    id: 'bu_cfo',
    name: 'Robert Anderson',
    role: 'business',
    title: 'CFO, Largest Business Unit',
    influence: 0.75,
    financialPriority: 'high',
    priorities: ['bu_performance', 'resource_allocation', 'growth_investment'],
    expectations: ['capital_access', 'autonomy', 'fair_allocation'],
    profile: { background: 'Operations Finance', tenure: '6 years', style: 'business_focused' }
  },

  COO: {
    id: 'coo',
    name: 'Patricia Williams',
    role: 'executive',
    title: 'Chief Operating Officer',
    influence: 0.85,
    financialPriority: 'medium',
    priorities: ['operational_efficiency', 'capex_execution', 'cost_management'],
    expectations: ['investment_support', 'realistic_targets', 'operational_flexibility'],
    profile: { background: 'Operations and Manufacturing', tenure: '5 years', style: 'efficiency_driven' }
  },

  LEAD_INVESTOR: {
    id: 'lead_investor',
    name: 'Capital Partners Fund',
    role: 'external',
    title: 'Lead Institutional Investor (12% stake)',
    influence: 0.8,
    financialPriority: 'critical',
    priorities: ['shareholder_returns', 'capital_discipline', 'governance'],
    expectations: ['return_on_capital', 'strategic_clarity', 'management_access'],
    profile: { background: 'Institutional Investment', tenure: '5 years as investor', style: 'engaged' }
  },

  ACTIVIST_INVESTOR: {
    id: 'activist',
    name: 'Value Creation Partners',
    role: 'external',
    title: 'Activist Investor (5% stake)',
    influence: 0.7,
    financialPriority: 'critical',
    priorities: ['immediate_value', 'capital_return', 'operational_efficiency'],
    expectations: ['margin_improvement', 'buybacks', 'portfolio_optimization'],
    profile: { background: 'Activist Investing', tenure: '18 months as investor', style: 'aggressive' }
  },

  LEAD_BANKER: {
    id: 'lead_banker',
    name: 'Global Investment Bank',
    role: 'external',
    title: 'Lead Banking Relationship',
    influence: 0.65,
    financialPriority: 'high',
    priorities: ['deal_flow', 'relationship_depth', 'credit_quality'],
    expectations: ['transaction_mandates', 'information_sharing', 'fee_opportunities'],
    profile: { background: 'Investment Banking', tenure: '8 year relationship', style: 'relationship_focused' }
  },

  CREDIT_RATING_ANALYST: {
    id: 'rating_analyst',
    name: 'Major Rating Agency',
    role: 'external',
    title: 'Lead Credit Analyst',
    influence: 0.7,
    financialPriority: 'high',
    priorities: ['credit_quality', 'financial_policy', 'business_risk'],
    expectations: ['transparency', 'consistent_policy', 'proactive_communication'],
    profile: { background: 'Credit Analysis', tenure: '4 years covering company', style: 'analytical' }
  },

  EXTERNAL_AUDITOR: {
    id: 'external_auditor',
    name: 'Big Four Audit Partner',
    role: 'external',
    title: 'Lead Audit Partner',
    influence: 0.7,
    financialPriority: 'critical',
    priorities: ['audit_quality', 'financial_accuracy', 'control_assessment'],
    expectations: ['management_cooperation', 'timely_information', 'issue_resolution'],
    profile: { background: 'Public Accounting', tenure: '3 years on engagement', style: 'professionally_skeptical' }
  }
};

export const FINANCE_COMMITTEES = {
  investment_committee: ['ceo', 'cfo', 'coo', 'bu_cfo'],
  audit_committee: ['audit_chair', 'board_chair'],
  capital_committee: ['cfo', 'treasurer', 'vp_fpa'],
  disclosure_committee: ['cfo', 'controller', 'ir_director']
};

export const RELATIONSHIP_DYNAMICS = {
  alliances: [
    ['cfo', 'audit_chair'],
    ['treasurer', 'lead_banker'],
    ['ir_director', 'lead_investor'],
    ['controller', 'external_auditor']
  ],
  tensions: [
    ['cfo', 'activist'],
    ['bu_cfo', 'vp_fpa'],
    ['coo', 'cfo'],
    ['lead_investor', 'activist']
  ]
};

export function getStakeholderById(id) {
  return Object.values(STAKEHOLDERS).find(s => s.id === id);
}

export function getStakeholdersByRole(role) {
  return Object.values(STAKEHOLDERS).filter(s => s.role === role);
}

export default STAKEHOLDERS;
