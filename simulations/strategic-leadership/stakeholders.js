// Strategic Leadership Simulation - Stakeholders
// 15 stakeholders representing the leadership ecosystem

export const STAKEHOLDERS = {
  // Board & Governance
  BOARD_CHAIR: {
    id: 'board_chair',
    name: 'Alexandra Chen',
    role: 'governance',
    title: 'Board Chairperson',
    influence: 1.0,
    leadershipStyle: 'steward',
    priorities: ['shareholder_value', 'governance', 'succession_planning'],
    expectations: ['strategic_results', 'transparency', 'board_engagement'],
    patience: 0.6,
    profile: {
      background: 'Former Fortune 500 CEO',
      tenure: '6 years on board',
      stance: 'supportive_but_demanding',
      communicationPreference: 'formal_briefings'
    }
  },

  LEAD_DIRECTOR: {
    id: 'lead_director',
    name: 'Robert Okonkwo',
    role: 'governance',
    title: 'Lead Independent Director',
    influence: 0.85,
    leadershipStyle: 'challenger',
    priorities: ['independence', 'accountability', 'risk_oversight'],
    expectations: ['honest_assessment', 'no_surprises', 'proactive_communication'],
    patience: 0.5,
    profile: {
      background: 'Retired Banking Executive',
      tenure: '4 years on board',
      stance: 'constructively_skeptical',
      communicationPreference: 'direct_dialogue'
    }
  },

  ACTIVIST_INVESTOR: {
    id: 'activist_investor',
    name: 'Marcus Sterling',
    role: 'external',
    title: 'Activist Fund Manager',
    influence: 0.75,
    leadershipStyle: 'disruptor',
    priorities: ['shareholder_returns', 'capital_allocation', 'management_accountability'],
    expectations: ['rapid_value_creation', 'strategic_clarity', 'operational_efficiency'],
    patience: 0.3,
    profile: {
      background: 'Hedge Fund Principal',
      tenure: '18 months as investor',
      stance: 'aggressive',
      communicationPreference: 'public_pressure'
    }
  },

  // Executive Team
  CFO: {
    id: 'cfo',
    name: 'Sarah Mitchell',
    role: 'executive',
    title: 'Chief Financial Officer',
    influence: 0.9,
    leadershipStyle: 'analytical',
    priorities: ['financial_performance', 'capital_efficiency', 'investor_relations'],
    expectations: ['data_driven_decisions', 'fiscal_discipline', 'transparency'],
    patience: 0.7,
    profile: {
      background: 'Investment Banking & Corporate Finance',
      tenure: '5 years in role',
      stance: 'trusted_advisor',
      communicationPreference: 'structured_analysis'
    }
  },

  COO: {
    id: 'coo',
    name: 'David Park',
    role: 'executive',
    title: 'Chief Operating Officer',
    influence: 0.85,
    leadershipStyle: 'executor',
    priorities: ['operational_excellence', 'efficiency', 'execution'],
    expectations: ['clear_priorities', 'resource_commitment', 'realistic_timelines'],
    patience: 0.6,
    profile: {
      background: 'Operations & Supply Chain',
      tenure: '7 years in role',
      stance: 'loyal_implementer',
      communicationPreference: 'action_oriented'
    }
  },

  CHRO: {
    id: 'chro',
    name: 'Maria Santos',
    role: 'executive',
    title: 'Chief Human Resources Officer',
    influence: 0.7,
    leadershipStyle: 'people_champion',
    priorities: ['talent', 'culture', 'employee_engagement'],
    expectations: ['people_focus', 'fair_treatment', 'development_investment'],
    patience: 0.8,
    profile: {
      background: 'HR & Organizational Development',
      tenure: '3 years in role',
      stance: 'employee_advocate',
      communicationPreference: 'empathetic_dialogue'
    }
  },

  CTO: {
    id: 'cto',
    name: 'James Liu',
    role: 'executive',
    title: 'Chief Technology Officer',
    influence: 0.75,
    leadershipStyle: 'innovator',
    priorities: ['technology_leadership', 'digital_capability', 'innovation'],
    expectations: ['technology_investment', 'innovation_freedom', 'talent_retention'],
    patience: 0.5,
    profile: {
      background: 'Engineering & Product Development',
      tenure: '2 years in role',
      stance: 'change_agent',
      communicationPreference: 'vision_driven'
    }
  },

  CMO: {
    id: 'cmo',
    name: 'Jennifer Walsh',
    role: 'executive',
    title: 'Chief Marketing Officer',
    influence: 0.7,
    leadershipStyle: 'brand_builder',
    priorities: ['brand_strength', 'customer_experience', 'market_position'],
    expectations: ['marketing_investment', 'customer_centricity', 'brand_protection'],
    patience: 0.6,
    profile: {
      background: 'Brand Management & Digital Marketing',
      tenure: '4 years in role',
      stance: 'customer_voice',
      communicationPreference: 'storytelling'
    }
  },

  // Middle Management & Organization
  DIVISION_PRESIDENT: {
    id: 'division_president',
    name: 'Michael Thompson',
    role: 'management',
    title: 'President, Largest Division',
    influence: 0.8,
    leadershipStyle: 'empire_builder',
    priorities: ['division_performance', 'autonomy', 'resources'],
    expectations: ['support', 'fair_allocation', 'recognition'],
    patience: 0.5,
    profile: {
      background: 'General Management',
      tenure: '8 years with company',
      stance: 'territorial',
      communicationPreference: 'results_focused'
    }
  },

  HIGH_POTENTIAL_LEADER: {
    id: 'rising_star',
    name: 'Aisha Johnson',
    role: 'management',
    title: 'VP, Strategic Initiatives',
    influence: 0.5,
    leadershipStyle: 'emerging',
    priorities: ['career_growth', 'impact', 'learning'],
    expectations: ['mentorship', 'opportunities', 'feedback'],
    patience: 0.7,
    profile: {
      background: 'Strategy Consulting & Operations',
      tenure: '3 years with company',
      stance: 'ambitious_loyal',
      communicationPreference: 'developmental'
    }
  },

  LONG_TENURED_EXECUTIVE: {
    id: 'veteran_exec',
    name: 'William Anderson',
    role: 'management',
    title: 'SVP, Legacy Business',
    influence: 0.6,
    leadershipStyle: 'traditionalist',
    priorities: ['stability', 'proven_approaches', 'institutional_knowledge'],
    expectations: ['respect_for_history', 'measured_change', 'consultation'],
    patience: 0.8,
    profile: {
      background: '25 years with company',
      tenure: 'Career employee',
      stance: 'resistant_to_change',
      communicationPreference: 'formal_hierarchy'
    }
  },

  // External Stakeholders
  KEY_CUSTOMER: {
    id: 'key_customer',
    name: 'Global Retail Partners Inc.',
    role: 'external',
    title: 'Strategic Account (15% revenue)',
    influence: 0.7,
    leadershipStyle: 'demanding_partner',
    priorities: ['service_quality', 'innovation', 'partnership'],
    expectations: ['reliability', 'responsiveness', 'value_creation'],
    patience: 0.4,
    profile: {
      background: 'Long-term strategic account',
      tenure: '12 year relationship',
      stance: 'performance_driven',
      communicationPreference: 'executive_access'
    }
  },

  UNION_LEADER: {
    id: 'union_leader',
    name: 'Thomas O\'Brien',
    role: 'external',
    title: 'Union President',
    influence: 0.65,
    leadershipStyle: 'advocate',
    priorities: ['worker_rights', 'job_security', 'fair_compensation'],
    expectations: ['good_faith', 'transparency', 'worker_voice'],
    patience: 0.6,
    profile: {
      background: 'Labor organizing',
      tenure: '15 years as union leader',
      stance: 'cautiously_cooperative',
      communicationPreference: 'negotiation'
    }
  },

  MEDIA_ANALYST: {
    id: 'media_analyst',
    name: 'Industry Observer',
    role: 'external',
    title: 'Lead Industry Analyst',
    influence: 0.55,
    leadershipStyle: 'evaluator',
    priorities: ['accurate_coverage', 'insight', 'access'],
    expectations: ['transparency', 'availability', 'consistency'],
    patience: 0.5,
    profile: {
      background: 'Business journalism',
      tenure: 'Covers company for 8 years',
      stance: 'professionally_skeptical',
      communicationPreference: 'exclusive_access'
    }
  },

  COMMUNITY_LEADER: {
    id: 'community_leader',
    name: 'Mayor Patricia Williams',
    role: 'external',
    title: 'Mayor, Headquarters City',
    influence: 0.5,
    leadershipStyle: 'civic_partner',
    priorities: ['jobs', 'community_investment', 'corporate_citizenship'],
    expectations: ['local_commitment', 'community_engagement', 'transparency'],
    patience: 0.7,
    profile: {
      background: 'Local politics',
      tenure: 'Second term as mayor',
      stance: 'collaborative',
      communicationPreference: 'public_partnership'
    }
  }
};

export const STAKEHOLDER_COALITIONS = {
  board_alignment: ['board_chair', 'lead_director'],
  executive_team: ['cfo', 'coo', 'chro', 'cto', 'cmo'],
  operations_bloc: ['coo', 'division_president', 'veteran_exec'],
  change_coalition: ['cto', 'rising_star', 'cmo'],
  external_pressure: ['activist_investor', 'key_customer', 'media_analyst']
};

export const RELATIONSHIP_DYNAMICS = {
  alliances: [
    ['board_chair', 'cfo'],
    ['coo', 'division_president'],
    ['chro', 'union_leader'],
    ['cto', 'rising_star']
  ],
  tensions: [
    ['activist_investor', 'veteran_exec'],
    ['cto', 'veteran_exec'],
    ['division_president', 'rising_star'],
    ['cfo', 'activist_investor']
  ],
  influence_flows: [
    { from: 'board_chair', to: 'lead_director', strength: 0.8 },
    { from: 'cfo', to: 'board_chair', strength: 0.7 },
    { from: 'division_president', to: 'coo', strength: 0.6 },
    { from: 'media_analyst', to: 'activist_investor', strength: 0.5 }
  ]
};

export function getStakeholderById(id) {
  return Object.values(STAKEHOLDERS).find(s => s.id === id);
}

export function getStakeholdersByRole(role) {
  return Object.values(STAKEHOLDERS).filter(s => s.role === role);
}

export function getCoalitionMembers(coalitionName) {
  const memberIds = STAKEHOLDER_COALITIONS[coalitionName] || [];
  return memberIds.map(id => getStakeholderById(id)).filter(Boolean);
}

export function calculateCoalitionInfluence(coalitionName) {
  const members = getCoalitionMembers(coalitionName);
  if (members.length === 0) return 0;
  return members.reduce((sum, m) => sum + m.influence, 0) / members.length;
}

export default STAKEHOLDERS;
