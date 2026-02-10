// Financial Acumen Simulation - Configuration
// 4 distinct configurations representing different financial contexts

export const CONFIGURATIONS = {
  GROWTH_CAPITAL: {
    id: 'growth_capital',
    name: 'Growth Capital Allocation',
    description: 'Allocate capital effectively in a high-growth environment with competing investment opportunities',
    initialState: {
      financialHealth: 0.7,
      capitalEfficiency: 0.5,
      investorConfidence: 0.7,
      cashPosition: 0.6,
      debtCapacity: 0.7,
      forecastAccuracy: 0.5
    },
    modifiers: {
      marketVolatility: 1.2,
      costOfCapital: 0.08,
      growthPressure: 1.5,
      investorScrutiny: 1.3
    },
    context: {
      revenue: 500000000,
      ebitda: 75000000,
      cashOnHand: 150000000,
      debtLevel: 100000000,
      marketCap: 2000000000
    }
  },

  TURNAROUND: {
    id: 'turnaround',
    name: 'Financial Turnaround',
    description: 'Navigate a company through financial distress back to stability',
    initialState: {
      financialHealth: 0.3,
      capitalEfficiency: 0.4,
      investorConfidence: 0.3,
      cashPosition: 0.2,
      debtCapacity: 0.2,
      forecastAccuracy: 0.4
    },
    modifiers: {
      marketVolatility: 1.5,
      costOfCapital: 0.15,
      growthPressure: 0.5,
      investorScrutiny: 2.0
    },
    context: {
      revenue: 300000000,
      ebitda: -15000000,
      cashOnHand: 30000000,
      debtLevel: 200000000,
      marketCap: 150000000
    }
  },

  VALUE_CREATION: {
    id: 'value_creation',
    name: 'Value Creation Focus',
    description: 'Maximize shareholder value through strategic financial decisions',
    initialState: {
      financialHealth: 0.6,
      capitalEfficiency: 0.5,
      investorConfidence: 0.6,
      cashPosition: 0.5,
      debtCapacity: 0.6,
      forecastAccuracy: 0.6
    },
    modifiers: {
      marketVolatility: 1.0,
      costOfCapital: 0.10,
      growthPressure: 1.2,
      investorScrutiny: 1.5
    },
    context: {
      revenue: 1000000000,
      ebitda: 150000000,
      cashOnHand: 200000000,
      debtLevel: 300000000,
      marketCap: 3000000000
    }
  },

  CAPITAL_MARKETS: {
    id: 'capital_markets',
    name: 'Capital Markets Navigation',
    description: 'Successfully navigate capital markets for financing and investor relations',
    initialState: {
      financialHealth: 0.6,
      capitalEfficiency: 0.5,
      investorConfidence: 0.5,
      cashPosition: 0.4,
      debtCapacity: 0.5,
      forecastAccuracy: 0.5
    },
    modifiers: {
      marketVolatility: 1.8,
      costOfCapital: 0.12,
      growthPressure: 1.3,
      investorScrutiny: 1.8
    },
    context: {
      revenue: 750000000,
      ebitda: 90000000,
      cashOnHand: 100000000,
      debtLevel: 250000000,
      marketCap: 1500000000
    }
  }
};

export const FINANCIAL_DIMENSIONS = {
  PROFITABILITY: { weight: 0.20, name: 'Profitability Management' },
  LIQUIDITY: { weight: 0.18, name: 'Liquidity & Cash Flow' },
  CAPITAL_STRUCTURE: { weight: 0.18, name: 'Capital Structure' },
  INVESTMENT: { weight: 0.18, name: 'Investment Decisions' },
  RISK_MANAGEMENT: { weight: 0.13, name: 'Financial Risk Management' },
  REPORTING: { weight: 0.13, name: 'Financial Reporting' }
};

export const VALUATION_METHODS = {
  DCF: { name: 'Discounted Cash Flow', complexity: 'high', reliability: 0.8 },
  COMPARABLES: { name: 'Trading Comparables', complexity: 'medium', reliability: 0.7 },
  PRECEDENT: { name: 'Precedent Transactions', complexity: 'medium', reliability: 0.75 },
  LBO: { name: 'LBO Analysis', complexity: 'high', reliability: 0.7 }
};

export const CAPITAL_SOURCES = {
  RETAINED_EARNINGS: { cost: 0.0, dilution: false, flexibility: 'high' },
  BANK_DEBT: { cost: 0.06, dilution: false, flexibility: 'medium' },
  BONDS: { cost: 0.07, dilution: false, flexibility: 'low' },
  EQUITY: { cost: 0.12, dilution: true, flexibility: 'high' },
  CONVERTIBLE: { cost: 0.04, dilution: true, flexibility: 'medium' }
};

export default CONFIGURATIONS;
