// Market Dynamics Simulation Configuration
// Focuses on competitive strategy, market positioning, and dynamic market responses

export const CONFIGURATIONS = {
  MARKET_LEADER: {
    id: 'MARKET_LEADER',
    name: 'Defending Market Leadership',
    description: 'Lead a dominant player facing disruptive challengers and market shifts',
    initialState: {
      marketShare: 42,
      brandEquity: 85,
      customerLoyalty: 78,
      pricingPower: 72,
      innovationPipeline: 55,
      channelStrength: 80,
      competitiveIntelligence: 60,
      marketSentiment: 70
    },
    marketContext: {
      totalMarketSize: 50000000000, // $50B market
      growthRate: 0.04,
      concentrationIndex: 0.35,
      disruptionRisk: 'HIGH',
      regulatoryPressure: 'MODERATE'
    },
    competitors: [
      { name: 'Aggressive Challenger', share: 22, threat: 'HIGH', strategy: 'PRICE_DISRUPTION' },
      { name: 'Innovation Disruptor', share: 12, threat: 'CRITICAL', strategy: 'TECH_DISRUPTION' },
      { name: 'Regional Player', share: 8, threat: 'MODERATE', strategy: 'NICHE_FOCUS' },
      { name: 'Global Entrant', share: 5, threat: 'HIGH', strategy: 'MARKET_ENTRY' }
    ]
  },

  CHALLENGER_POSITION: {
    id: 'CHALLENGER_POSITION',
    name: 'Challenger Strategy',
    description: 'Lead a challenger brand seeking to disrupt established market leaders',
    initialState: {
      marketShare: 15,
      brandEquity: 55,
      customerLoyalty: 60,
      pricingPower: 45,
      innovationPipeline: 80,
      channelStrength: 50,
      competitiveIntelligence: 75,
      marketSentiment: 65
    },
    marketContext: {
      totalMarketSize: 30000000000, // $30B market
      growthRate: 0.08,
      concentrationIndex: 0.45,
      disruptionRisk: 'MODERATE',
      regulatoryPressure: 'LOW'
    },
    competitors: [
      { name: 'Dominant Incumbent', share: 38, threat: 'MODERATE', strategy: 'DEFENSIVE' },
      { name: 'Secondary Leader', share: 25, threat: 'HIGH', strategy: 'AGGRESSIVE_GROWTH' },
      { name: 'Fellow Challenger', share: 12, threat: 'HIGH', strategy: 'PRICE_WAR' },
      { name: 'Niche Specialist', share: 6, threat: 'LOW', strategy: 'SEGMENT_FOCUS' }
    ]
  },

  NEW_MARKET_ENTRY: {
    id: 'NEW_MARKET_ENTRY',
    name: 'New Market Entry',
    description: 'Enter and establish position in a new geographic or product market',
    initialState: {
      marketShare: 2,
      brandEquity: 30,
      customerLoyalty: 25,
      pricingPower: 35,
      innovationPipeline: 70,
      channelStrength: 20,
      competitiveIntelligence: 50,
      marketSentiment: 55
    },
    marketContext: {
      totalMarketSize: 20000000000, // $20B market
      growthRate: 0.12,
      concentrationIndex: 0.25,
      disruptionRisk: 'HIGH',
      regulatoryPressure: 'HIGH'
    },
    competitors: [
      { name: 'Local Champion', share: 32, threat: 'CRITICAL', strategy: 'TERRITORIAL_DEFENSE' },
      { name: 'Regional Leader', share: 24, threat: 'HIGH', strategy: 'AGGRESSIVE_RESPONSE' },
      { name: 'Global Competitor', share: 18, threat: 'MODERATE', strategy: 'BALANCED' },
      { name: 'Local Disruptor', share: 10, threat: 'HIGH', strategy: 'INNOVATION' }
    ]
  },

  COMMODITIZED_MARKET: {
    id: 'COMMODITIZED_MARKET',
    name: 'Commoditized Market Revival',
    description: 'Differentiate and create value in a mature, commoditized market',
    initialState: {
      marketShare: 20,
      brandEquity: 45,
      customerLoyalty: 40,
      pricingPower: 30,
      innovationPipeline: 40,
      channelStrength: 65,
      competitiveIntelligence: 55,
      marketSentiment: 35
    },
    marketContext: {
      totalMarketSize: 80000000000, // $80B market
      growthRate: 0.01,
      concentrationIndex: 0.20,
      disruptionRisk: 'MODERATE',
      regulatoryPressure: 'MODERATE'
    },
    competitors: [
      { name: 'Price Leader', share: 22, threat: 'HIGH', strategy: 'COST_LEADERSHIP' },
      { name: 'Premium Player', share: 15, threat: 'MODERATE', strategy: 'DIFFERENTIATION' },
      { name: 'Digital Disruptor', share: 8, threat: 'HIGH', strategy: 'DIGITAL_TRANSFORMATION' },
      { name: 'Consolidator', share: 18, threat: 'MODERATE', strategy: 'ACQUISITION' }
    ]
  }
};

export const DIMENSION_WEIGHTS = {
  marketShare: 0.20,
  brandEquity: 0.15,
  customerLoyalty: 0.15,
  pricingPower: 0.12,
  innovationPipeline: 0.12,
  channelStrength: 0.10,
  competitiveIntelligence: 0.08,
  marketSentiment: 0.08
};

export const MARKET_CONSTANTS = {
  SHARE_THRESHOLDS: {
    DOMINANT: 35,
    STRONG: 25,
    COMPETITIVE: 15,
    MARGINAL: 5
  },
  BRAND_MULTIPLIERS: {
    PREMIUM: 1.3,
    STANDARD: 1.0,
    VALUE: 0.8,
    COMMODITY: 0.6
  },
  COMPETITIVE_RESPONSE_PROBABILITY: {
    CRITICAL: 0.90,
    HIGH: 0.70,
    MODERATE: 0.45,
    LOW: 0.20
  },
  MARKET_CYCLE_PHASES: ['EXPANSION', 'PEAK', 'CONTRACTION', 'TROUGH'],
  CUSTOMER_SEGMENTS: ['ENTERPRISE', 'MID_MARKET', 'SMB', 'CONSUMER', 'PROSUMER']
};

export const getConfigurationById = (id) => CONFIGURATIONS[id] || CONFIGURATIONS.MARKET_LEADER;
