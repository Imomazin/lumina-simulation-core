// Portfolio Roulette Simulation Configuration
// Strategic portfolio management and capital allocation

export const CONFIGURATIONS = {
  PORTFOLIO_OPTIMIZATION: {
    id: 'PORTFOLIO_OPTIMIZATION',
    name: 'Portfolio Optimization',
    description: 'Optimize business portfolio for maximum value creation',
    initialState: {
      portfolioBalance: 50,
      capitalEfficiency: 48,
      strategicFit: 52,
      synergyCaptvre: 45,
      riskDiversification: 55,
      growthPotential: 50,
      executionCapability: 52,
      stakeholderSupport: 48
    },
    portfolioContext: { businessUnits: 8, totalRevenue: 12000000000, portfolioAge: 'MATURE', marketCycle: 'MID' }
  },
  DIVESTITURE_STRATEGY: {
    id: 'DIVESTITURE_STRATEGY',
    name: 'Divestiture Strategy',
    description: 'Execute strategic divestitures to focus portfolio',
    initialState: {
      portfolioBalance: 42,
      capitalEfficiency: 38,
      strategicFit: 45,
      synergyCaptvre: 40,
      riskDiversification: 60,
      growthPotential: 42,
      executionCapability: 50,
      stakeholderSupport: 45
    },
    portfolioContext: { businessUnits: 12, totalRevenue: 18000000000, portfolioAge: 'LEGACY', marketCycle: 'LATE' }
  },
  GROWTH_PORTFOLIO: {
    id: 'GROWTH_PORTFOLIO',
    name: 'Growth Portfolio',
    description: 'Build high-growth portfolio through acquisitions and investments',
    initialState: {
      portfolioBalance: 45,
      capitalEfficiency: 52,
      strategicFit: 48,
      synergyCaptvre: 42,
      riskDiversification: 40,
      growthPotential: 65,
      executionCapability: 48,
      stakeholderSupport: 55
    },
    portfolioContext: { businessUnits: 5, totalRevenue: 5000000000, portfolioAge: 'YOUNG', marketCycle: 'EARLY' }
  },
  TURNAROUND_PORTFOLIO: {
    id: 'TURNAROUND_PORTFOLIO',
    name: 'Turnaround Portfolio',
    description: 'Restructure underperforming portfolio for value recovery',
    initialState: {
      portfolioBalance: 35,
      capitalEfficiency: 32,
      strategicFit: 40,
      synergyCaptvre: 35,
      riskDiversification: 45,
      growthPotential: 38,
      executionCapability: 42,
      stakeholderSupport: 35
    },
    portfolioContext: { businessUnits: 10, totalRevenue: 8000000000, portfolioAge: 'DISTRESSED', marketCycle: 'TROUGH' }
  }
};

export const DIMENSION_WEIGHTS = {
  portfolioBalance: 0.16, capitalEfficiency: 0.16, strategicFit: 0.14, synergyCaptvre: 0.12,
  riskDiversification: 0.10, growthPotential: 0.12, executionCapability: 0.10, stakeholderSupport: 0.10
};

export const PORTFOLIO_CONSTANTS = {
  MATRIX_POSITIONS: ['STAR', 'CASH_COW', 'QUESTION_MARK', 'DOG'],
  PORTFOLIO_MOVES: ['HOLD', 'INVEST', 'HARVEST', 'DIVEST', 'ACQUIRE'],
  VALUE_LEVERS: ['REVENUE_GROWTH', 'MARGIN_EXPANSION', 'CAPITAL_EFFICIENCY', 'MULTIPLE_EXPANSION']
};

export const getConfigurationById = (id) => CONFIGURATIONS[id] || CONFIGURATIONS.PORTFOLIO_OPTIMIZATION;
