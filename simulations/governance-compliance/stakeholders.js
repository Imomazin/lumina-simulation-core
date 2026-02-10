// Governance & Compliance Simulation - Stakeholders
// 15 stakeholders representing the governance and compliance ecosystem

export const STAKEHOLDERS = {
  // Board & Governance
  BOARD_CHAIR: {
    id: 'board_chair',
    name: 'Patricia Morrison',
    role: 'governance',
    title: 'Board Chairperson',
    influence: 1.0,
    compliancePriority: 'high',
    priorities: ['fiduciary_duty', 'reputation', 'regulatory_standing'],
    expectations: ['proactive_disclosure', 'no_surprises', 'board_engagement'],
    riskTolerance: 'low',
    profile: {
      background: 'Former General Counsel, Fortune 100',
      tenure: '5 years on board',
      stance: 'governance_focused',
      communicationPreference: 'formal_presentations'
    }
  },

  AUDIT_COMMITTEE_CHAIR: {
    id: 'audit_chair',
    name: 'Richard Chen',
    role: 'governance',
    title: 'Audit Committee Chair',
    influence: 0.95,
    compliancePriority: 'critical',
    priorities: ['internal_controls', 'audit_quality', 'financial_integrity'],
    expectations: ['detailed_reporting', 'issue_escalation', 'remediation_progress'],
    riskTolerance: 'very_low',
    profile: {
      background: 'Retired Big Four Partner',
      tenure: '7 years on board',
      stance: 'control_oriented',
      communicationPreference: 'data_driven_analysis'
    }
  },

  COMPENSATION_COMMITTEE_CHAIR: {
    id: 'comp_chair',
    name: 'Sandra Williams',
    role: 'governance',
    title: 'Compensation Committee Chair',
    influence: 0.75,
    compliancePriority: 'medium',
    priorities: ['executive_accountability', 'incentive_alignment', 'clawback_enforcement'],
    expectations: ['compliance_metrics_in_comp', 'fair_consequences', 'transparent_decisions'],
    riskTolerance: 'low',
    profile: {
      background: 'HR Executive and Board Professional',
      tenure: '4 years on board',
      stance: 'accountability_focused',
      communicationPreference: 'balanced_discussion'
    }
  },

  // Executive Leadership
  CEO: {
    id: 'ceo',
    name: 'Michael Torres',
    role: 'executive',
    title: 'Chief Executive Officer',
    influence: 0.95,
    compliancePriority: 'high',
    priorities: ['business_performance', 'reputation', 'regulatory_relationships'],
    expectations: ['business_enablement', 'risk_management', 'strategic_alignment'],
    riskTolerance: 'medium',
    profile: {
      background: 'Operations and Strategy',
      tenure: '4 years as CEO',
      stance: 'balanced_pragmatic',
      communicationPreference: 'executive_summary'
    }
  },

  CHIEF_COMPLIANCE_OFFICER: {
    id: 'cco',
    name: 'Elena Rodriguez',
    role: 'executive',
    title: 'Chief Compliance Officer',
    influence: 0.85,
    compliancePriority: 'critical',
    priorities: ['regulatory_compliance', 'program_effectiveness', 'culture'],
    expectations: ['resources', 'access', 'independence'],
    riskTolerance: 'low',
    profile: {
      background: 'Regulatory and Legal',
      tenure: '3 years in role',
      stance: 'principled_pragmatic',
      communicationPreference: 'structured_reporting'
    }
  },

  GENERAL_COUNSEL: {
    id: 'general_counsel',
    name: 'David Park',
    role: 'executive',
    title: 'General Counsel',
    influence: 0.9,
    compliancePriority: 'high',
    priorities: ['legal_risk', 'litigation_avoidance', 'regulatory_defense'],
    expectations: ['early_involvement', 'legal_compliance', 'privilege_protection'],
    riskTolerance: 'low',
    profile: {
      background: 'Litigation and Regulatory',
      tenure: '6 years in role',
      stance: 'protective',
      communicationPreference: 'legal_precision'
    }
  },

  CFO: {
    id: 'cfo',
    name: 'Jennifer Walsh',
    role: 'executive',
    title: 'Chief Financial Officer',
    influence: 0.85,
    compliancePriority: 'high',
    priorities: ['financial_controls', 'sox_compliance', 'disclosure_accuracy'],
    expectations: ['cost_efficiency', 'control_effectiveness', 'audit_support'],
    riskTolerance: 'low',
    profile: {
      background: 'Public Accounting and Corporate Finance',
      tenure: '5 years in role',
      stance: 'control_conscious',
      communicationPreference: 'quantitative_analysis'
    }
  },

  // Compliance Function
  HEAD_OF_REGULATORY_AFFAIRS: {
    id: 'reg_affairs_head',
    name: 'Thomas Anderson',
    role: 'compliance',
    title: 'SVP Regulatory Affairs',
    influence: 0.7,
    compliancePriority: 'critical',
    priorities: ['regulatory_relationships', 'examination_management', 'policy_advocacy'],
    expectations: ['regulatory_intelligence', 'examination_prep', 'relationship_building'],
    riskTolerance: 'low',
    profile: {
      background: 'Former Regulator',
      tenure: '4 years in role',
      stance: 'relationship_builder',
      communicationPreference: 'diplomatic'
    }
  },

  CHIEF_ETHICS_OFFICER: {
    id: 'ethics_officer',
    name: 'Maria Santos',
    role: 'compliance',
    title: 'Chief Ethics Officer',
    influence: 0.65,
    compliancePriority: 'high',
    priorities: ['ethical_culture', 'conduct_standards', 'whistleblower_program'],
    expectations: ['culture_investment', 'investigation_support', 'tone_from_top'],
    riskTolerance: 'very_low',
    profile: {
      background: 'Ethics and Compliance',
      tenure: '3 years in role',
      stance: 'principled',
      communicationPreference: 'values_based'
    }
  },

  HEAD_OF_INTERNAL_AUDIT: {
    id: 'internal_audit',
    name: 'Robert Kim',
    role: 'assurance',
    title: 'Chief Audit Executive',
    influence: 0.75,
    compliancePriority: 'high',
    priorities: ['audit_coverage', 'issue_identification', 'management_accountability'],
    expectations: ['independence', 'resources', 'management_cooperation'],
    riskTolerance: 'low',
    profile: {
      background: 'Internal Audit and Risk',
      tenure: '5 years in role',
      stance: 'independent_objective',
      communicationPreference: 'fact_based'
    }
  },

  // Business Stakeholders
  BUSINESS_UNIT_PRESIDENT: {
    id: 'bu_president',
    name: 'James Mitchell',
    role: 'business',
    title: 'President, Largest Business Unit',
    influence: 0.8,
    compliancePriority: 'medium',
    priorities: ['business_growth', 'operational_efficiency', 'customer_satisfaction'],
    expectations: ['business_enablement', 'practical_solutions', 'speed_to_market'],
    riskTolerance: 'medium',
    profile: {
      background: 'Sales and Operations',
      tenure: '7 years in role',
      stance: 'business_first',
      communicationPreference: 'results_oriented'
    }
  },

  HEAD_OF_OPERATIONS: {
    id: 'ops_head',
    name: 'Lisa Thompson',
    role: 'business',
    title: 'COO',
    influence: 0.8,
    compliancePriority: 'medium',
    priorities: ['operational_excellence', 'process_efficiency', 'control_integration'],
    expectations: ['practical_controls', 'clear_requirements', 'implementation_support'],
    riskTolerance: 'medium',
    profile: {
      background: 'Operations Management',
      tenure: '4 years in role',
      stance: 'process_oriented',
      communicationPreference: 'operational_detail'
    }
  },

  // External Stakeholders
  PRIMARY_REGULATOR: {
    id: 'primary_regulator',
    name: 'Federal Regulatory Agency',
    role: 'external',
    title: 'Lead Examiner',
    influence: 0.95,
    compliancePriority: 'critical',
    priorities: ['consumer_protection', 'safety_soundness', 'compliance_effectiveness'],
    expectations: ['transparency', 'responsiveness', 'sustainable_compliance'],
    riskTolerance: 'very_low',
    profile: {
      background: 'Regulatory Examination',
      tenure: '15 years regulatory experience',
      stance: 'enforcement_minded',
      communicationPreference: 'formal_official'
    }
  },

  EXTERNAL_AUDITOR: {
    id: 'external_auditor',
    name: 'Big Four Audit Partner',
    role: 'external',
    title: 'Lead Audit Partner',
    influence: 0.7,
    compliancePriority: 'high',
    priorities: ['financial_statement_accuracy', 'internal_controls', 'audit_quality'],
    expectations: ['management_cooperation', 'control_evidence', 'timely_remediation'],
    riskTolerance: 'very_low',
    profile: {
      background: 'Public Accounting',
      tenure: '3 years on engagement',
      stance: 'professionally_skeptical',
      communicationPreference: 'audit_focused'
    }
  },

  INVESTOR_GOVERNANCE_ANALYST: {
    id: 'governance_analyst',
    name: 'ISS/Glass Lewis Analyst',
    role: 'external',
    title: 'Governance Research Analyst',
    influence: 0.6,
    compliancePriority: 'high',
    priorities: ['governance_quality', 'board_effectiveness', 'shareholder_rights'],
    expectations: ['disclosure_quality', 'best_practices', 'responsiveness'],
    riskTolerance: 'low',
    profile: {
      background: 'Governance Research',
      tenure: '5 years covering company',
      stance: 'shareholder_advocate',
      communicationPreference: 'proxy_focused'
    }
  }
};

export const GOVERNANCE_COMMITTEES = {
  audit_committee: ['audit_chair', 'board_chair'],
  compliance_committee: ['cco', 'general_counsel', 'ethics_officer'],
  executive_committee: ['ceo', 'cfo', 'general_counsel', 'ops_head'],
  risk_committee: ['cco', 'internal_audit', 'cfo']
};

export const RELATIONSHIP_DYNAMICS = {
  alliances: [
    ['audit_chair', 'internal_audit'],
    ['cco', 'ethics_officer'],
    ['general_counsel', 'cco'],
    ['cfo', 'external_auditor']
  ],
  tensions: [
    ['bu_president', 'cco'],
    ['ops_head', 'internal_audit'],
    ['ceo', 'primary_regulator'],
    ['bu_president', 'ethics_officer']
  ],
  reporting_lines: [
    { from: 'cco', to: 'audit_chair', type: 'functional' },
    { from: 'cco', to: 'ceo', type: 'administrative' },
    { from: 'internal_audit', to: 'audit_chair', type: 'functional' },
    { from: 'ethics_officer', to: 'cco', type: 'direct' }
  ]
};

export function getStakeholderById(id) {
  return Object.values(STAKEHOLDERS).find(s => s.id === id);
}

export function getStakeholdersByRole(role) {
  return Object.values(STAKEHOLDERS).filter(s => s.role === role);
}

export function getCommitteeMembers(committeeName) {
  const memberIds = GOVERNANCE_COMMITTEES[committeeName] || [];
  return memberIds.map(id => getStakeholderById(id)).filter(Boolean);
}

export default STAKEHOLDERS;
