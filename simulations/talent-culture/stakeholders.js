// Talent & Culture Simulation - Stakeholders
// 15 stakeholders representing the talent and culture ecosystem

export const STAKEHOLDERS = {
  // Executive Leadership
  CEO: {
    id: 'ceo',
    name: 'Marcus Johnson',
    role: 'executive',
    title: 'Chief Executive Officer',
    influence: 1.0,
    talentPriority: 'high',
    priorities: ['performance', 'culture', 'leadership_pipeline'],
    expectations: ['business_alignment', 'talent_roi', 'culture_as_strategy'],
    profile: {
      background: 'Operations and Strategy',
      tenure: '5 years as CEO',
      leadershipStyle: 'transformational',
      communicationPreference: 'strategic_summary'
    }
  },

  CHRO: {
    id: 'chro',
    name: 'Sarah Chen',
    role: 'executive',
    title: 'Chief Human Resources Officer',
    influence: 0.9,
    talentPriority: 'critical',
    priorities: ['talent_strategy', 'employee_experience', 'hr_transformation'],
    expectations: ['resources', 'executive_support', 'strategic_seat'],
    profile: {
      background: 'HR Leadership and Consulting',
      tenure: '3 years in role',
      leadershipStyle: 'collaborative',
      communicationPreference: 'data_driven'
    }
  },

  CFO: {
    id: 'cfo',
    name: 'Robert Williams',
    role: 'executive',
    title: 'Chief Financial Officer',
    influence: 0.85,
    talentPriority: 'medium',
    priorities: ['cost_efficiency', 'productivity', 'workforce_planning'],
    expectations: ['roi_demonstration', 'cost_control', 'metrics'],
    profile: {
      background: 'Finance and Operations',
      tenure: '6 years in role',
      leadershipStyle: 'analytical',
      communicationPreference: 'financial_impact'
    }
  },

  COO: {
    id: 'coo',
    name: 'Jennifer Martinez',
    role: 'executive',
    title: 'Chief Operating Officer',
    influence: 0.85,
    talentPriority: 'high',
    priorities: ['operational_talent', 'productivity', 'workforce_capability'],
    expectations: ['practical_solutions', 'speed', 'operational_alignment'],
    profile: {
      background: 'Operations Management',
      tenure: '4 years in role',
      leadershipStyle: 'results_driven',
      communicationPreference: 'action_oriented'
    }
  },

  CTO: {
    id: 'cto',
    name: 'David Park',
    role: 'executive',
    title: 'Chief Technology Officer',
    influence: 0.8,
    talentPriority: 'critical',
    priorities: ['technical_talent', 'innovation_capability', 'skills_development'],
    expectations: ['tech_talent_pipeline', 'competitive_offers', 'learning_investment'],
    profile: {
      background: 'Engineering Leadership',
      tenure: '2 years in role',
      leadershipStyle: 'innovative',
      communicationPreference: 'direct'
    }
  },

  // HR Function
  VP_TALENT_ACQUISITION: {
    id: 'vp_ta',
    name: 'Michelle Thompson',
    role: 'hr',
    title: 'VP Talent Acquisition',
    influence: 0.7,
    talentPriority: 'critical',
    priorities: ['hiring_targets', 'quality_of_hire', 'employer_brand'],
    expectations: ['recruiter_capacity', 'tools', 'hiring_manager_partnership'],
    profile: {
      background: 'Recruiting and Talent Acquisition',
      tenure: '4 years in role',
      leadershipStyle: 'energetic',
      communicationPreference: 'metrics_focused'
    }
  },

  VP_LEARNING: {
    id: 'vp_learning',
    name: 'Thomas Anderson',
    role: 'hr',
    title: 'VP Learning & Development',
    influence: 0.65,
    talentPriority: 'high',
    priorities: ['capability_building', 'leadership_development', 'learning_culture'],
    expectations: ['budget', 'time_allocation', 'executive_sponsorship'],
    profile: {
      background: 'Learning and Organizational Development',
      tenure: '5 years in role',
      leadershipStyle: 'developmental',
      communicationPreference: 'outcome_focused'
    }
  },

  VP_TOTAL_REWARDS: {
    id: 'vp_rewards',
    name: 'Lisa Kim',
    role: 'hr',
    title: 'VP Total Rewards',
    influence: 0.7,
    talentPriority: 'high',
    priorities: ['competitive_compensation', 'benefits_value', 'pay_equity'],
    expectations: ['market_data', 'budget_flexibility', 'executive_buy_in'],
    profile: {
      background: 'Compensation and Benefits',
      tenure: '3 years in role',
      leadershipStyle: 'analytical',
      communicationPreference: 'data_driven'
    }
  },

  HR_BUSINESS_PARTNER: {
    id: 'hrbp_lead',
    name: 'James Wilson',
    role: 'hr',
    title: 'Senior HRBP Lead',
    influence: 0.6,
    talentPriority: 'high',
    priorities: ['business_partnership', 'employee_relations', 'change_management'],
    expectations: ['client_access', 'decision_authority', 'support'],
    profile: {
      background: 'HR Business Partnership',
      tenure: '6 years in role',
      leadershipStyle: 'consultative',
      communicationPreference: 'relationship_based'
    }
  },

  // Business Stakeholders
  BUSINESS_UNIT_HEAD: {
    id: 'bu_head',
    name: 'Patricia Morrison',
    role: 'business',
    title: 'President, Largest Business Unit',
    influence: 0.85,
    talentPriority: 'medium',
    priorities: ['business_results', 'team_performance', 'talent_access'],
    expectations: ['hiring_speed', 'retention_support', 'minimal_bureaucracy'],
    profile: {
      background: 'Sales and General Management',
      tenure: '7 years in role',
      leadershipStyle: 'demanding',
      communicationPreference: 'bottom_line'
    }
  },

  FRONTLINE_MANAGER: {
    id: 'frontline_mgr',
    name: 'Representative Frontline Manager',
    role: 'management',
    title: 'Senior Manager',
    influence: 0.5,
    talentPriority: 'high',
    priorities: ['team_capability', 'day_to_day_support', 'fair_treatment'],
    expectations: ['simple_processes', 'quick_decisions', 'hr_availability'],
    profile: {
      background: 'Promoted from Individual Contributor',
      tenure: '3 years as manager',
      leadershipStyle: 'supportive',
      communicationPreference: 'practical'
    }
  },

  HIGH_POTENTIAL_EMPLOYEE: {
    id: 'high_potential',
    name: 'Representative High-Potential',
    role: 'employee',
    title: 'Senior Individual Contributor',
    influence: 0.4,
    talentPriority: 'personal_growth',
    priorities: ['career_growth', 'meaningful_work', 'recognition'],
    expectations: ['development_opportunities', 'feedback', 'fair_advancement'],
    profile: {
      background: '5 years with company',
      tenure: 'High performer, flight risk',
      leadershipStyle: 'emerging',
      communicationPreference: 'transparent'
    }
  },

  // External Stakeholders
  UNION_REPRESENTATIVE: {
    id: 'union_rep',
    name: 'Michael O\'Brien',
    role: 'external',
    title: 'Union President',
    influence: 0.65,
    talentPriority: 'worker_welfare',
    priorities: ['job_security', 'fair_wages', 'working_conditions'],
    expectations: ['good_faith_negotiation', 'transparency', 'respect'],
    profile: {
      background: 'Labor organizing',
      tenure: '12 years as union leader',
      leadershipStyle: 'advocacy',
      communicationPreference: 'formal_negotiation'
    }
  },

  BOARD_COMPENSATION_CHAIR: {
    id: 'comp_chair',
    name: 'Elizabeth Warren',
    role: 'governance',
    title: 'Compensation Committee Chair',
    influence: 0.8,
    talentPriority: 'high',
    priorities: ['executive_talent', 'pay_for_performance', 'succession'],
    expectations: ['board_reporting', 'market_alignment', 'risk_management'],
    profile: {
      background: 'Former CHRO',
      tenure: '5 years on board',
      leadershipStyle: 'governance_focused',
      communicationPreference: 'structured_reporting'
    }
  },

  EMPLOYER_BRAND_ANALYST: {
    id: 'brand_analyst',
    name: 'Glassdoor/LinkedIn Analyst',
    role: 'external',
    title: 'Employer Brand Researcher',
    influence: 0.5,
    talentPriority: 'reputation',
    priorities: ['employee_sentiment', 'employer_ranking', 'culture_perception'],
    expectations: ['transparency', 'authentic_culture', 'employee_voice'],
    profile: {
      background: 'HR Technology and Research',
      tenure: 'Covers company for 3 years',
      leadershipStyle: 'analytical',
      communicationPreference: 'data_based'
    }
  }
};

export const HR_COMMITTEES = {
  talent_review: ['ceo', 'chro', 'coo', 'bu_head'],
  compensation_committee: ['comp_chair', 'chro', 'cfo'],
  hr_leadership: ['chro', 'vp_ta', 'vp_learning', 'vp_rewards', 'hrbp_lead'],
  culture_council: ['chro', 'ceo', 'cto', 'high_potential']
};

export const RELATIONSHIP_DYNAMICS = {
  alliances: [
    ['chro', 'ceo'],
    ['vp_ta', 'bu_head'],
    ['vp_learning', 'cto'],
    ['hrbp_lead', 'frontline_mgr']
  ],
  tensions: [
    ['chro', 'cfo'],
    ['vp_ta', 'vp_rewards'],
    ['bu_head', 'union_rep'],
    ['high_potential', 'frontline_mgr']
  ],
  dependencies: [
    { from: 'vp_ta', to: 'bu_head', type: 'hiring_demand' },
    { from: 'vp_rewards', to: 'cfo', type: 'budget' },
    { from: 'hrbp_lead', to: 'chro', type: 'strategy' },
    { from: 'frontline_mgr', to: 'hrbp_lead', type: 'support' }
  ]
};

export function getStakeholderById(id) {
  return Object.values(STAKEHOLDERS).find(s => s.id === id);
}

export function getStakeholdersByRole(role) {
  return Object.values(STAKEHOLDERS).filter(s => s.role === role);
}

export function getCommitteeMembers(committeeName) {
  const memberIds = HR_COMMITTEES[committeeName] || [];
  return memberIds.map(id => getStakeholderById(id)).filter(Boolean);
}

export default STAKEHOLDERS;
