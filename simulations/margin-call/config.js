// Margin Call Simulation Configuration
// High-stakes financial decision-making under pressure

export const CONFIGURATIONS = {
  LIQUIDITY_CRISIS: {
    id: 'LIQUIDITY_CRISIS',
    name: 'Liquidity Crisis',
    description: 'Navigate cash flow crisis with creditors closing in',
    initialState: {
      liquidityPosition: 25,
      debtManagement: 35,
      creditorRelations: 38,
      operationalCashflow: 40,
      investorConfidence: 42,
      marketPosition: 50,
      riskExposure: 30,
      recoveryTrajectory: 35
    },
    financialContext: { crisisType: 'LIQUIDITY', cashRunway: 45, debtMaturity: 'NEAR_TERM', marketAccess: 'LIMITED' }
  },
  COVENANT_BREACH: {
    id: 'COVENANT_BREACH',
    name: 'Covenant Breach',
    description: 'Manage debt covenant violations and lender negotiations',
    initialState: {
      liquidityPosition: 45,
      debtManagement: 28,
      creditorRelations: 32,
      operationalCashflow: 48,
      investorConfidence: 38,
      marketPosition: 55,
      riskExposure: 35,
      recoveryTrajectory: 40
    },
    financialContext: { crisisType: 'COVENANT', cashRunway: 90, debtMaturity: 'MEDIUM_TERM', marketAccess: 'MODERATE' }
  },
  DISTRESSED_ACQUISITION: {
    id: 'DISTRESSED_ACQUISITION',
    name: 'Distressed Acquisition',
    description: 'Execute acquisition of distressed company while managing risks',
    initialState: {
      liquidityPosition: 55,
      debtManagement: 50,
      creditorRelations: 52,
      operationalCashflow: 45,
      investorConfidence: 48,
      marketPosition: 42,
      riskExposure: 40,
      recoveryTrajectory: 45
    },
    financialContext: { crisisType: 'OPPORTUNISTIC', cashRunway: 180, debtMaturity: 'LONG_TERM', marketAccess: 'GOOD' }
  },
  CAPITAL_RESTRUCTURING: {
    id: 'CAPITAL_RESTRUCTURING',
    name: 'Capital Restructuring',
    description: 'Lead comprehensive balance sheet restructuring',
    initialState: {
      liquidityPosition: 38,
      debtManagement: 32,
      creditorRelations: 40,
      operationalCashflow: 42,
      investorConfidence: 35,
      marketPosition: 48,
      riskExposure: 32,
      recoveryTrajectory: 38
    },
    financialContext: { crisisType: 'STRUCTURAL', cashRunway: 120, debtMaturity: 'MIXED', marketAccess: 'RESTRICTED' }
  }
};

export const DIMENSION_WEIGHTS = {
  liquidityPosition: 0.18, debtManagement: 0.16, creditorRelations: 0.14, operationalCashflow: 0.12,
  investorConfidence: 0.12, marketPosition: 0.10, riskExposure: 0.10, recoveryTrajectory: 0.08
};

export const MARGIN_CONSTANTS = {
  DISTRESS_LEVELS: ['WATCH', 'CONCERN', 'DISTRESSED', 'CRITICAL', 'DEFAULT'],
  RESTRUCTURING_OPTIONS: ['REFINANCE', 'EXTEND', 'CONVERT', 'HAIRCUT', 'EQUITY_SWAP'],
  STAKEHOLDER_PRIORITY: ['SECURED_CREDITORS', 'UNSECURED_CREDITORS', 'EQUITY', 'EMPLOYEES', 'SUPPLIERS']
};

export const getConfigurationById = (id) => CONFIGURATIONS[id] || CONFIGURATIONS.LIQUIDITY_CRISIS;
