// Sales Mastery Simulation Stakeholders
// 15 stakeholders representing sales ecosystem

export const STAKEHOLDERS = {
  CRO: {
    id: 'CRO',
    name: 'Chief Revenue Officer',
    role: 'Revenue Strategy Lead',
    archetype: 'REVENUE_DRIVER',
    influence: 0.95,
    initialTrust: 72,
    initialAlignment: 75,
    priorities: ['pipelineHealth', 'winRate', 'forecastAccuracy'],
    riskTolerance: 0.65,
    decisionStyle: 'RESULTS_ORIENTED',
    background: 'Built multiple high-growth sales organizations, board-level credibility'
  },

  SALES_VP: {
    id: 'SALES_VP',
    name: 'VP of Sales',
    role: 'Sales Operations Lead',
    archetype: 'FIELD_GENERAL',
    influence: 0.88,
    initialTrust: 70,
    initialAlignment: 70,
    priorities: ['teamPerformance', 'winRate', 'pipelineHealth'],
    riskTolerance: 0.60,
    decisionStyle: 'TACTICAL',
    background: 'Former top rep who rose through ranks, deeply connected to field'
  },

  TOP_PERFORMER: {
    id: 'TOP_PERFORMER',
    name: 'Top Sales Performer',
    role: 'Sales Excellence Example',
    archetype: 'QUOTA_CRUSHER',
    influence: 0.72,
    initialTrust: 65,
    initialAlignment: 60,
    priorities: ['dealVelocity', 'customerRelationships', 'winRate'],
    riskTolerance: 0.75,
    decisionStyle: 'AUTONOMOUS',
    background: 'Consistently 150%+ of quota, influential with peers but protective of methods'
  },

  SALES_ENABLEMENT: {
    id: 'SALES_ENABLEMENT',
    name: 'Sales Enablement Director',
    role: 'Sales Capability Lead',
    archetype: 'CAPABILITY_BUILDER',
    influence: 0.68,
    initialTrust: 68,
    initialAlignment: 72,
    priorities: ['salesProcessMaturity', 'teamPerformance', 'winRate'],
    riskTolerance: 0.55,
    decisionStyle: 'SYSTEMATIC',
    background: 'Learning and development expert specializing in sales methodology'
  },

  SALES_OPS: {
    id: 'SALES_OPS',
    name: 'Sales Operations Manager',
    role: 'Sales Analytics & Process',
    archetype: 'DATA_ANALYST',
    influence: 0.65,
    initialTrust: 70,
    initialAlignment: 68,
    priorities: ['forecastAccuracy', 'salesProcessMaturity', 'pipelineHealth'],
    riskTolerance: 0.40,
    decisionStyle: 'ANALYTICAL',
    background: 'MBA with analytics background, drives data-driven sales management'
  },

  KEY_CUSTOMER: {
    id: 'KEY_CUSTOMER',
    name: 'Key Customer Executive',
    role: 'Strategic Customer Voice',
    archetype: 'DEMANDING_BUYER',
    influence: 0.75,
    initialTrust: 55,
    initialAlignment: 50,
    priorities: ['customerRelationships', 'accountPenetration', 'winRate'],
    riskTolerance: 0.35,
    decisionStyle: 'VALUE_FOCUSED',
    background: 'Procurement VP at largest account, significant influence on reputation'
  },

  REGIONAL_DIRECTOR: {
    id: 'REGIONAL_DIRECTOR',
    name: 'Regional Sales Director',
    role: 'Regional Performance Lead',
    archetype: 'TERRITORY_OWNER',
    influence: 0.70,
    initialTrust: 68,
    initialAlignment: 65,
    priorities: ['teamPerformance', 'pipelineHealth', 'winRate'],
    riskTolerance: 0.55,
    decisionStyle: 'PRAGMATIC',
    background: 'Manages largest region, respected for consistent delivery'
  },

  SDR_MANAGER: {
    id: 'SDR_MANAGER',
    name: 'SDR Manager',
    role: 'Pipeline Generation Lead',
    archetype: 'PIPELINE_BUILDER',
    influence: 0.58,
    initialTrust: 65,
    initialAlignment: 70,
    priorities: ['pipelineHealth', 'dealVelocity', 'teamPerformance'],
    riskTolerance: 0.60,
    decisionStyle: 'METRICS_DRIVEN',
    background: 'Built SDR function from scratch, passionate about top-of-funnel'
  },

  SOLUTION_ENGINEER: {
    id: 'SOLUTION_ENGINEER',
    name: 'Solutions Engineering Lead',
    role: 'Technical Sales Support',
    archetype: 'TECHNICAL_EXPERT',
    influence: 0.62,
    initialTrust: 72,
    initialAlignment: 65,
    priorities: ['winRate', 'customerRelationships', 'salesProcessMaturity'],
    riskTolerance: 0.45,
    decisionStyle: 'CONSULTATIVE',
    background: 'Engineering background with strong customer-facing skills'
  },

  CHANNEL_MANAGER: {
    id: 'CHANNEL_MANAGER',
    name: 'Channel Sales Manager',
    role: 'Partner Sales Lead',
    archetype: 'PARTNER_DEVELOPER',
    influence: 0.60,
    initialTrust: 62,
    initialAlignment: 58,
    priorities: ['accountPenetration', 'pipelineHealth', 'customerRelationships'],
    riskTolerance: 0.50,
    decisionStyle: 'COLLABORATIVE',
    background: 'Manages partner ecosystem contributing 30% of revenue'
  },

  MARKETING_VP: {
    id: 'MARKETING_VP',
    name: 'VP of Marketing',
    role: 'Demand Generation Lead',
    archetype: 'BRAND_BUILDER',
    influence: 0.72,
    initialTrust: 58,
    initialAlignment: 55,
    priorities: ['pipelineHealth', 'customerRelationships', 'winRate'],
    riskTolerance: 0.55,
    decisionStyle: 'CREATIVE',
    background: 'Drives marketing-sales alignment, sometimes contentious relationship'
  },

  CUSTOMER_SUCCESS: {
    id: 'CUSTOMER_SUCCESS',
    name: 'Customer Success Director',
    role: 'Customer Retention Lead',
    archetype: 'RELATIONSHIP_BUILDER',
    influence: 0.65,
    initialTrust: 70,
    initialAlignment: 62,
    priorities: ['customerRelationships', 'accountPenetration', 'winRate'],
    riskTolerance: 0.40,
    decisionStyle: 'CUSTOMER_CENTRIC',
    background: 'Owns renewal and expansion, critical for land-and-expand'
  },

  FINANCE_BP: {
    id: 'FINANCE_BP',
    name: 'Sales Finance Business Partner',
    role: 'Sales Financial Management',
    archetype: 'CONTROLLER',
    influence: 0.58,
    initialTrust: 65,
    initialAlignment: 55,
    priorities: ['forecastAccuracy', 'dealVelocity', 'winRate'],
    riskTolerance: 0.30,
    decisionStyle: 'CONSERVATIVE',
    background: 'Manages sales compensation and deal desk, focused on profitability'
  },

  NEW_HIRE_REP: {
    id: 'NEW_HIRE_REP',
    name: 'New Sales Representative',
    role: 'Developing Talent',
    archetype: 'EMERGING_TALENT',
    influence: 0.45,
    initialTrust: 60,
    initialAlignment: 75,
    priorities: ['teamPerformance', 'salesProcessMaturity', 'pipelineHealth'],
    riskTolerance: 0.65,
    decisionStyle: 'LEARNING',
    background: 'High-potential hire, represents 40% of team who joined in last year'
  },

  COMPETITOR_INTEL: {
    id: 'COMPETITOR_INTEL',
    name: 'Competitive Intelligence Analyst',
    role: 'Competitive Strategy Support',
    archetype: 'INTELLIGENCE_GATHERER',
    influence: 0.52,
    initialTrust: 68,
    initialAlignment: 70,
    priorities: ['winRate', 'salesProcessMaturity', 'customerRelationships'],
    riskTolerance: 0.45,
    decisionStyle: 'RESEARCH_BASED',
    background: 'Tracks competitive landscape, arms sales with battlecards'
  }
};

export const STAKEHOLDER_COMMITTEES = {
  REVENUE_LEADERSHIP: ['CRO', 'SALES_VP', 'MARKETING_VP', 'CUSTOMER_SUCCESS'],
  SALES_OPERATIONS: ['SALES_OPS', 'SALES_ENABLEMENT', 'FINANCE_BP', 'SDR_MANAGER'],
  FIELD_LEADERSHIP: ['SALES_VP', 'REGIONAL_DIRECTOR', 'TOP_PERFORMER', 'SOLUTION_ENGINEER'],
  CUSTOMER_COUNCIL: ['KEY_CUSTOMER', 'CUSTOMER_SUCCESS', 'SOLUTION_ENGINEER', 'CHANNEL_MANAGER'],
  ENABLEMENT_TEAM: ['SALES_ENABLEMENT', 'COMPETITOR_INTEL', 'SOLUTION_ENGINEER', 'NEW_HIRE_REP']
};

export const RELATIONSHIP_DYNAMICS = {
  ALLIANCES: [
    ['CRO', 'SALES_VP'],
    ['SALES_ENABLEMENT', 'NEW_HIRE_REP'],
    ['SOLUTION_ENGINEER', 'TOP_PERFORMER'],
    ['CUSTOMER_SUCCESS', 'KEY_CUSTOMER']
  ],
  TENSIONS: [
    ['SALES_VP', 'MARKETING_VP'],
    ['TOP_PERFORMER', 'SALES_OPS'],
    ['FINANCE_BP', 'REGIONAL_DIRECTOR'],
    ['SDR_MANAGER', 'TOP_PERFORMER']
  ]
};

export const getStakeholderById = (id) => STAKEHOLDERS[id];
export const getAllStakeholders = () => Object.values(STAKEHOLDERS);
export const getCommitteeMembers = (committee) =>
  STAKEHOLDER_COMMITTEES[committee]?.map(id => STAKEHOLDERS[id]) || [];
