// Sales Mastery Simulation Configuration
// Focuses on sales strategy, team leadership, and customer acquisition

export const CONFIGURATIONS = {
  ENTERPRISE_SALES: {
    id: 'ENTERPRISE_SALES',
    name: 'Enterprise Sales Transformation',
    description: 'Lead enterprise sales organization through complex deal cycles and relationship selling',
    initialState: {
      pipelineHealth: 60,
      winRate: 35,
      customerRelationships: 55,
      teamPerformance: 58,
      salesProcessMaturity: 50,
      forecastAccuracy: 45,
      dealVelocity: 50,
      accountPenetration: 52
    },
    salesContext: {
      avgDealSize: 850000,
      salesCycleLength: 180, // days
      teamSize: 45,
      annualQuota: 95000000,
      marketType: 'B2B_ENTERPRISE',
      complexityLevel: 'HIGH'
    },
    challenges: ['Long sales cycles', 'Multiple stakeholders', 'Competitive pressure', 'Quota pressure']
  },

  GROWTH_SCALING: {
    id: 'GROWTH_SCALING',
    name: 'Hypergrowth Sales Scaling',
    description: 'Scale sales organization rapidly while maintaining quality and culture',
    initialState: {
      pipelineHealth: 70,
      winRate: 42,
      customerRelationships: 48,
      teamPerformance: 55,
      salesProcessMaturity: 40,
      forecastAccuracy: 38,
      dealVelocity: 65,
      accountPenetration: 35
    },
    salesContext: {
      avgDealSize: 45000,
      salesCycleLength: 30, // days
      teamSize: 120,
      annualQuota: 150000000,
      marketType: 'B2B_MID_MARKET',
      complexityLevel: 'MODERATE'
    },
    challenges: ['Hiring at scale', 'Process standardization', 'Quality consistency', 'Market expansion']
  },

  TURNAROUND: {
    id: 'TURNAROUND',
    name: 'Sales Turnaround',
    description: 'Revive underperforming sales organization and rebuild pipeline',
    initialState: {
      pipelineHealth: 35,
      winRate: 22,
      customerRelationships: 40,
      teamPerformance: 38,
      salesProcessMaturity: 35,
      forecastAccuracy: 30,
      dealVelocity: 40,
      accountPenetration: 45
    },
    salesContext: {
      avgDealSize: 250000,
      salesCycleLength: 90, // days
      teamSize: 65,
      annualQuota: 80000000,
      marketType: 'B2B_MIXED',
      complexityLevel: 'HIGH'
    },
    challenges: ['Low morale', 'Pipeline gaps', 'Lost key accounts', 'Competitor gains']
  },

  STRATEGIC_ACCOUNTS: {
    id: 'STRATEGIC_ACCOUNTS',
    name: 'Strategic Account Management',
    description: 'Lead strategic account program to maximize value from key customers',
    initialState: {
      pipelineHealth: 55,
      winRate: 48,
      customerRelationships: 72,
      teamPerformance: 62,
      salesProcessMaturity: 58,
      forecastAccuracy: 55,
      dealVelocity: 45,
      accountPenetration: 68
    },
    salesContext: {
      avgDealSize: 2500000,
      salesCycleLength: 270, // days
      teamSize: 25,
      annualQuota: 120000000,
      marketType: 'STRATEGIC_ENTERPRISE',
      complexityLevel: 'VERY_HIGH'
    },
    challenges: ['Executive access', 'Multi-year planning', 'Competitive threats', 'Value demonstration']
  }
};

export const DIMENSION_WEIGHTS = {
  pipelineHealth: 0.18,
  winRate: 0.16,
  customerRelationships: 0.14,
  teamPerformance: 0.14,
  salesProcessMaturity: 0.10,
  forecastAccuracy: 0.10,
  dealVelocity: 0.10,
  accountPenetration: 0.08
};

export const SALES_CONSTANTS = {
  WIN_RATE_BENCHMARKS: {
    WORLD_CLASS: 45,
    EXCELLENT: 35,
    GOOD: 28,
    AVERAGE: 22,
    POOR: 15
  },
  PIPELINE_COVERAGE: {
    OPTIMAL: 3.5,
    HEALTHY: 3.0,
    ADEQUATE: 2.5,
    RISKY: 2.0
  },
  DEAL_STAGES: ['PROSPECT', 'QUALIFY', 'DISCOVER', 'PROPOSE', 'NEGOTIATE', 'CLOSE'],
  SALES_METHODOLOGIES: ['CHALLENGER', 'MEDDIC', 'SPIN', 'VALUE_SELLING', 'SOLUTION_SELLING'],
  PERFORMANCE_TIERS: ['TOP_PERFORMER', 'SOLID_PERFORMER', 'DEVELOPING', 'UNDERPERFORMER']
};

export const getConfigurationById = (id) => CONFIGURATIONS[id] || CONFIGURATIONS.ENTERPRISE_SALES;
