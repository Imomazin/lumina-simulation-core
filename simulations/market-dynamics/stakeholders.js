// Market Dynamics Simulation Stakeholders
// 15 stakeholders representing market ecosystem participants

export const STAKEHOLDERS = {
  CMO: {
    id: 'CMO',
    name: 'Chief Marketing Officer',
    role: 'Marketing Strategy Lead',
    archetype: 'BRAND_BUILDER',
    influence: 0.92,
    initialTrust: 75,
    initialAlignment: 70,
    priorities: ['brandEquity', 'marketSentiment', 'customerLoyalty'],
    riskTolerance: 0.65,
    decisionStyle: 'DATA_DRIVEN',
    background: 'Built brands at leading consumer companies, believes in premium positioning'
  },

  SALES_VP: {
    id: 'SALES_VP',
    name: 'VP of Sales',
    role: 'Revenue Generation Lead',
    archetype: 'QUOTA_CRUSHER',
    influence: 0.88,
    initialTrust: 70,
    initialAlignment: 65,
    priorities: ['marketShare', 'channelStrength', 'pricingPower'],
    riskTolerance: 0.70,
    decisionStyle: 'AGGRESSIVE',
    background: 'Former top performer, focused on short-term results and deal closing'
  },

  PRODUCT_HEAD: {
    id: 'PRODUCT_HEAD',
    name: 'Head of Product',
    role: 'Product Strategy Lead',
    archetype: 'INNOVATOR',
    influence: 0.85,
    initialTrust: 72,
    initialAlignment: 75,
    priorities: ['innovationPipeline', 'customerLoyalty', 'brandEquity'],
    riskTolerance: 0.75,
    decisionStyle: 'CUSTOMER_CENTRIC',
    background: 'Product visionary who built breakthrough offerings at tech leaders'
  },

  STRATEGY_DIRECTOR: {
    id: 'STRATEGY_DIRECTOR',
    name: 'Strategy Director',
    role: 'Competitive Intelligence Lead',
    archetype: 'ANALYST',
    influence: 0.78,
    initialTrust: 68,
    initialAlignment: 72,
    priorities: ['competitiveIntelligence', 'marketShare', 'marketSentiment'],
    riskTolerance: 0.50,
    decisionStyle: 'ANALYTICAL',
    background: 'Former strategy consultant with deep market analysis expertise'
  },

  BOARD_MEMBER: {
    id: 'BOARD_MEMBER',
    name: 'Board Representative',
    role: 'Governance Oversight',
    archetype: 'SHAREHOLDER_ADVOCATE',
    influence: 0.95,
    initialTrust: 60,
    initialAlignment: 55,
    priorities: ['marketShare', 'pricingPower', 'brandEquity'],
    riskTolerance: 0.45,
    decisionStyle: 'ROI_FOCUSED',
    background: 'Former CEO and active board member of multiple public companies'
  },

  CHANNEL_PARTNER: {
    id: 'CHANNEL_PARTNER',
    name: 'Key Channel Partner',
    role: 'Distribution Partner',
    archetype: 'PARTNER',
    influence: 0.72,
    initialTrust: 65,
    initialAlignment: 60,
    priorities: ['channelStrength', 'pricingPower', 'marketShare'],
    riskTolerance: 0.55,
    decisionStyle: 'MARGIN_FOCUSED',
    background: 'Major distributor controlling significant market access'
  },

  KEY_CUSTOMER: {
    id: 'KEY_CUSTOMER',
    name: 'Enterprise Customer Executive',
    role: 'Strategic Customer Voice',
    archetype: 'DEMANDING_BUYER',
    influence: 0.70,
    initialTrust: 62,
    initialAlignment: 58,
    priorities: ['customerLoyalty', 'innovationPipeline', 'brandEquity'],
    riskTolerance: 0.40,
    decisionStyle: 'VALUE_SEEKING',
    background: 'CTO of top-5 customer, represents major revenue concentration'
  },

  INDUSTRY_ANALYST: {
    id: 'INDUSTRY_ANALYST',
    name: 'Lead Industry Analyst',
    role: 'Market Intelligence Influencer',
    archetype: 'THOUGHT_LEADER',
    influence: 0.68,
    initialTrust: 55,
    initialAlignment: 50,
    priorities: ['marketSentiment', 'innovationPipeline', 'competitiveIntelligence'],
    riskTolerance: 0.35,
    decisionStyle: 'OBJECTIVE',
    background: 'Senior analyst at leading research firm, shapes buyer decisions'
  },

  PRICING_MANAGER: {
    id: 'PRICING_MANAGER',
    name: 'Pricing Strategy Manager',
    role: 'Pricing Optimization Lead',
    archetype: 'OPTIMIZER',
    influence: 0.62,
    initialTrust: 70,
    initialAlignment: 68,
    priorities: ['pricingPower', 'marketShare', 'customerLoyalty'],
    riskTolerance: 0.45,
    decisionStyle: 'DATA_DRIVEN',
    background: 'Economics PhD specializing in price elasticity and value capture'
  },

  DIGITAL_LEAD: {
    id: 'DIGITAL_LEAD',
    name: 'Digital Transformation Lead',
    role: 'Digital Channel Strategy',
    archetype: 'DISRUPTOR',
    influence: 0.65,
    initialTrust: 68,
    initialAlignment: 72,
    priorities: ['channelStrength', 'innovationPipeline', 'customerLoyalty'],
    riskTolerance: 0.80,
    decisionStyle: 'EXPERIMENTAL',
    background: 'Built digital-first businesses, advocates for channel disruption'
  },

  COMPETITOR_ANALYST: {
    id: 'COMPETITOR_ANALYST',
    name: 'Competitive Intelligence Analyst',
    role: 'Competitor Tracking',
    archetype: 'INTELLIGENCE_GATHERER',
    influence: 0.55,
    initialTrust: 72,
    initialAlignment: 70,
    priorities: ['competitiveIntelligence', 'marketSentiment', 'marketShare'],
    riskTolerance: 0.50,
    decisionStyle: 'EVIDENCE_BASED',
    background: 'Former competitor employee with deep industry network'
  },

  CUSTOMER_SUCCESS: {
    id: 'CUSTOMER_SUCCESS',
    name: 'Customer Success Director',
    role: 'Customer Retention Lead',
    archetype: 'RELATIONSHIP_BUILDER',
    influence: 0.60,
    initialTrust: 75,
    initialAlignment: 72,
    priorities: ['customerLoyalty', 'brandEquity', 'marketSentiment'],
    riskTolerance: 0.40,
    decisionStyle: 'CUSTOMER_CENTRIC',
    background: 'Built world-class retention programs, obsessed with NPS'
  },

  INVESTOR_RELATIONS: {
    id: 'INVESTOR_RELATIONS',
    name: 'Investor Relations Director',
    role: 'Market Communications',
    archetype: 'COMMUNICATOR',
    influence: 0.58,
    initialTrust: 65,
    initialAlignment: 60,
    priorities: ['marketSentiment', 'marketShare', 'brandEquity'],
    riskTolerance: 0.35,
    decisionStyle: 'CONSENSUS_BUILDING',
    background: 'Former sell-side analyst, understands market perception dynamics'
  },

  REGIONAL_GM: {
    id: 'REGIONAL_GM',
    name: 'Regional General Manager',
    role: 'Regional Market Lead',
    archetype: 'OPERATOR',
    influence: 0.70,
    initialTrust: 68,
    initialAlignment: 65,
    priorities: ['marketShare', 'channelStrength', 'customerLoyalty'],
    riskTolerance: 0.55,
    decisionStyle: 'PRAGMATIC',
    background: 'P&L owner for largest region, deep local market knowledge'
  },

  TRADE_ASSOCIATION: {
    id: 'TRADE_ASSOCIATION',
    name: 'Trade Association Executive',
    role: 'Industry Representative',
    archetype: 'COALITION_BUILDER',
    influence: 0.50,
    initialTrust: 55,
    initialAlignment: 50,
    priorities: ['marketSentiment', 'competitiveIntelligence', 'brandEquity'],
    riskTolerance: 0.30,
    decisionStyle: 'COLLABORATIVE',
    background: 'Industry veteran, shapes collective industry positioning'
  }
};

export const STAKEHOLDER_COMMITTEES = {
  PRICING_COUNCIL: ['CMO', 'SALES_VP', 'PRICING_MANAGER', 'STRATEGY_DIRECTOR'],
  PRODUCT_COMMITTEE: ['PRODUCT_HEAD', 'CMO', 'KEY_CUSTOMER', 'DIGITAL_LEAD'],
  MARKET_INTELLIGENCE: ['STRATEGY_DIRECTOR', 'COMPETITOR_ANALYST', 'INDUSTRY_ANALYST', 'REGIONAL_GM'],
  CHANNEL_STRATEGY: ['SALES_VP', 'CHANNEL_PARTNER', 'DIGITAL_LEAD', 'REGIONAL_GM'],
  CUSTOMER_ADVISORY: ['KEY_CUSTOMER', 'CUSTOMER_SUCCESS', 'PRODUCT_HEAD', 'CMO']
};

export const RELATIONSHIP_DYNAMICS = {
  ALLIANCES: [
    ['CMO', 'PRODUCT_HEAD'],
    ['SALES_VP', 'CHANNEL_PARTNER'],
    ['STRATEGY_DIRECTOR', 'COMPETITOR_ANALYST'],
    ['CUSTOMER_SUCCESS', 'KEY_CUSTOMER']
  ],
  TENSIONS: [
    ['SALES_VP', 'PRICING_MANAGER'],
    ['CMO', 'SALES_VP'],
    ['DIGITAL_LEAD', 'CHANNEL_PARTNER'],
    ['BOARD_MEMBER', 'PRODUCT_HEAD']
  ]
};

export const getStakeholderById = (id) => STAKEHOLDERS[id];
export const getAllStakeholders = () => Object.values(STAKEHOLDERS);
export const getCommitteeMembers = (committee) =>
  STAKEHOLDER_COMMITTEES[committee]?.map(id => STAKEHOLDERS[id]) || [];
