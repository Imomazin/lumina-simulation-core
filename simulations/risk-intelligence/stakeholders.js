// Risk Intelligence Simulation - Stakeholders
// 15 stakeholders with distinct perspectives, influence, and risk attitudes

export const STAKEHOLDERS = {
  // C-Suite Executives
  CEO: {
    id: 'ceo',
    name: 'Chief Executive Officer',
    role: 'executive',
    title: 'CEO',
    influence: 1.0,
    riskAttitude: 'balanced',
    priorities: ['shareholder_value', 'strategic_growth', 'reputation'],
    decisionAuthority: ['strategic_risk', 'major_investments', 'crisis_response'],
    visibility: 'full',
    reportingLine: null,
    profile: {
      yearsInRole: 5,
      background: 'operations',
      temperament: 'decisive',
      communicationStyle: 'direct'
    }
  },

  CFO: {
    id: 'cfo',
    name: 'Chief Financial Officer',
    role: 'executive',
    title: 'CFO',
    influence: 0.9,
    riskAttitude: 'conservative',
    priorities: ['financial_stability', 'capital_efficiency', 'audit_compliance'],
    decisionAuthority: ['financial_risk', 'budget_allocation', 'insurance'],
    visibility: 'financial',
    reportingLine: 'ceo',
    profile: {
      yearsInRole: 3,
      background: 'accounting',
      temperament: 'analytical',
      communicationStyle: 'data_driven'
    }
  },

  CRO: {
    id: 'cro',
    name: 'Chief Risk Officer',
    role: 'executive',
    title: 'CRO',
    influence: 0.85,
    riskAttitude: 'risk_aware',
    priorities: ['risk_framework', 'early_warning', 'risk_culture'],
    decisionAuthority: ['risk_appetite', 'control_standards', 'risk_reporting'],
    visibility: 'risk_focused',
    reportingLine: 'ceo',
    profile: {
      yearsInRole: 4,
      background: 'risk_management',
      temperament: 'cautious',
      communicationStyle: 'structured'
    }
  },

  COO: {
    id: 'coo',
    name: 'Chief Operating Officer',
    role: 'executive',
    title: 'COO',
    influence: 0.85,
    riskAttitude: 'pragmatic',
    priorities: ['operational_efficiency', 'supply_chain', 'business_continuity'],
    decisionAuthority: ['operational_risk', 'vendor_management', 'process_changes'],
    visibility: 'operational',
    reportingLine: 'ceo',
    profile: {
      yearsInRole: 6,
      background: 'supply_chain',
      temperament: 'methodical',
      communicationStyle: 'process_oriented'
    }
  },

  CISO: {
    id: 'ciso',
    name: 'Chief Information Security Officer',
    role: 'executive',
    title: 'CISO',
    influence: 0.75,
    riskAttitude: 'defensive',
    priorities: ['cyber_security', 'data_protection', 'incident_response'],
    decisionAuthority: ['cyber_risk', 'security_investments', 'breach_response'],
    visibility: 'technical',
    reportingLine: 'cro',
    profile: {
      yearsInRole: 2,
      background: 'cybersecurity',
      temperament: 'vigilant',
      communicationStyle: 'technical'
    }
  },

  // Board Members
  BOARD_CHAIR: {
    id: 'board_chair',
    name: 'Board Chairperson',
    role: 'governance',
    title: 'Board Chair',
    influence: 0.95,
    riskAttitude: 'oversight',
    priorities: ['governance', 'fiduciary_duty', 'long_term_value'],
    decisionAuthority: ['board_decisions', 'ceo_evaluation', 'major_strategy'],
    visibility: 'strategic',
    reportingLine: null,
    profile: {
      yearsInRole: 8,
      background: 'former_ceo',
      temperament: 'measured',
      communicationStyle: 'diplomatic'
    }
  },

  AUDIT_COMMITTEE_CHAIR: {
    id: 'audit_chair',
    name: 'Audit Committee Chair',
    role: 'governance',
    title: 'Audit Committee Chair',
    influence: 0.8,
    riskAttitude: 'skeptical',
    priorities: ['internal_controls', 'financial_integrity', 'compliance'],
    decisionAuthority: ['audit_scope', 'control_remediation', 'whistleblower'],
    visibility: 'audit_focused',
    reportingLine: 'board_chair',
    profile: {
      yearsInRole: 5,
      background: 'big_four_partner',
      temperament: 'inquisitive',
      communicationStyle: 'probing'
    }
  },

  // Middle Management
  VP_RISK: {
    id: 'vp_risk',
    name: 'VP of Enterprise Risk',
    role: 'management',
    title: 'VP Enterprise Risk',
    influence: 0.6,
    riskAttitude: 'systematic',
    priorities: ['risk_assessment', 'risk_monitoring', 'risk_reporting'],
    decisionAuthority: ['risk_assessments', 'kri_thresholds', 'risk_training'],
    visibility: 'enterprise',
    reportingLine: 'cro',
    profile: {
      yearsInRole: 4,
      background: 'consulting',
      temperament: 'thorough',
      communicationStyle: 'formal'
    }
  },

  COMPLIANCE_DIRECTOR: {
    id: 'compliance_dir',
    name: 'Director of Compliance',
    role: 'management',
    title: 'Compliance Director',
    influence: 0.55,
    riskAttitude: 'rule_bound',
    priorities: ['regulatory_compliance', 'policy_adherence', 'training'],
    decisionAuthority: ['compliance_policies', 'regulatory_filings', 'investigations'],
    visibility: 'compliance',
    reportingLine: 'cro',
    profile: {
      yearsInRole: 7,
      background: 'legal',
      temperament: 'precise',
      communicationStyle: 'formal'
    }
  },

  INTERNAL_AUDIT_HEAD: {
    id: 'internal_audit',
    name: 'Head of Internal Audit',
    role: 'assurance',
    title: 'Chief Audit Executive',
    influence: 0.65,
    riskAttitude: 'independent',
    priorities: ['audit_coverage', 'control_testing', 'findings_remediation'],
    decisionAuthority: ['audit_plan', 'audit_findings', 'management_actions'],
    visibility: 'audit',
    reportingLine: 'audit_chair',
    profile: {
      yearsInRole: 5,
      background: 'internal_audit',
      temperament: 'objective',
      communicationStyle: 'factual'
    }
  },

  // Operational Stakeholders
  BUSINESS_UNIT_HEAD: {
    id: 'bu_head',
    name: 'Business Unit President',
    role: 'operations',
    title: 'BU President',
    influence: 0.7,
    riskAttitude: 'opportunistic',
    priorities: ['revenue_growth', 'market_share', 'team_performance'],
    decisionAuthority: ['bu_strategy', 'resource_allocation', 'pricing'],
    visibility: 'business_unit',
    reportingLine: 'coo',
    profile: {
      yearsInRole: 3,
      background: 'sales',
      temperament: 'ambitious',
      communicationStyle: 'persuasive'
    }
  },

  SUPPLY_CHAIN_VP: {
    id: 'supply_chain_vp',
    name: 'VP of Supply Chain',
    role: 'operations',
    title: 'VP Supply Chain',
    influence: 0.5,
    riskAttitude: 'contingency_minded',
    priorities: ['supply_continuity', 'cost_optimization', 'vendor_reliability'],
    decisionAuthority: ['supplier_selection', 'inventory_levels', 'logistics'],
    visibility: 'supply_chain',
    reportingLine: 'coo',
    profile: {
      yearsInRole: 4,
      background: 'operations',
      temperament: 'practical',
      communicationStyle: 'concise'
    }
  },

  // External Stakeholders
  EXTERNAL_AUDITOR: {
    id: 'ext_auditor',
    name: 'External Audit Partner',
    role: 'external',
    title: 'Audit Partner',
    influence: 0.7,
    riskAttitude: 'independent',
    priorities: ['financial_accuracy', 'material_misstatement', 'audit_opinion'],
    decisionAuthority: ['audit_opinion', 'management_letter', 'material_weakness'],
    visibility: 'financial_statements',
    reportingLine: null,
    profile: {
      yearsInRole: 3,
      background: 'public_accounting',
      temperament: 'professional',
      communicationStyle: 'formal'
    }
  },

  REGULATOR: {
    id: 'regulator',
    name: 'Primary Regulator',
    role: 'external',
    title: 'Regulatory Examiner',
    influence: 0.85,
    riskAttitude: 'enforcement',
    priorities: ['regulatory_compliance', 'consumer_protection', 'systemic_risk'],
    decisionAuthority: ['enforcement_actions', 'examination_findings', 'consent_orders'],
    visibility: 'regulatory',
    reportingLine: null,
    profile: {
      yearsInRole: 10,
      background: 'regulatory',
      temperament: 'authoritative',
      communicationStyle: 'official'
    }
  },

  INVESTOR_REPRESENTATIVE: {
    id: 'investor_rep',
    name: 'Lead Institutional Investor',
    role: 'external',
    title: 'Portfolio Manager',
    influence: 0.6,
    riskAttitude: 'return_focused',
    priorities: ['shareholder_returns', 'governance_quality', 'risk_disclosure'],
    decisionAuthority: ['voting_decisions', 'engagement_priorities', 'divestment'],
    visibility: 'public_information',
    reportingLine: null,
    profile: {
      yearsInRole: 8,
      background: 'investment_management',
      temperament: 'analytical',
      communicationStyle: 'challenging'
    }
  }
};

export const STAKEHOLDER_RELATIONSHIPS = {
  alliances: [
    ['cfo', 'cro'],
    ['cro', 'ciso'],
    ['audit_chair', 'internal_audit'],
    ['ceo', 'board_chair']
  ],
  tensions: [
    ['bu_head', 'cro'],
    ['bu_head', 'compliance_dir'],
    ['cfo', 'bu_head'],
    ['regulator', 'bu_head']
  ],
  dependencies: [
    { from: 'ciso', to: 'cfo', type: 'budget' },
    { from: 'vp_risk', to: 'bu_head', type: 'information' },
    { from: 'internal_audit', to: 'audit_chair', type: 'reporting' },
    { from: 'compliance_dir', to: 'regulator', type: 'regulatory' }
  ]
};

export function getStakeholderById(id) {
  return Object.values(STAKEHOLDERS).find(s => s.id === id);
}

export function getStakeholdersByRole(role) {
  return Object.values(STAKEHOLDERS).filter(s => s.role === role);
}

export function calculateInfluenceScore(stakeholderIds) {
  return stakeholderIds.reduce((sum, id) => {
    const stakeholder = getStakeholderById(id);
    return sum + (stakeholder ? stakeholder.influence : 0);
  }, 0) / stakeholderIds.length;
}

export default STAKEHOLDERS;
