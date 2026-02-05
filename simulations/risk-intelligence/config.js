// Risk Intelligence Simulation - Configuration
// 4 distinct configurations representing different organizational risk profiles

export const CONFIGURATIONS = {
  CONSERVATIVE: {
    id: 'conservative',
    name: 'Conservative Risk Posture',
    description: 'Risk-averse organization prioritizing stability over growth',
    initialState: {
      riskTolerance: 0.3,
      riskBudget: 500000,
      riskAppetiteStatement: 'Preserve capital and reputation at all costs',
      controlMaturity: 0.8,
      incidentResponseCapability: 0.7,
      riskCultureScore: 0.6
    },
    modifiers: {
      reputationSensitivity: 1.5,
      regulatoryScrutiny: 1.2,
      marketVolatility: 0.8,
      innovationPressure: 0.6
    }
  },

  AGGRESSIVE: {
    id: 'aggressive',
    name: 'Aggressive Growth Focus',
    description: 'High risk tolerance pursuing rapid market expansion',
    initialState: {
      riskTolerance: 0.8,
      riskBudget: 2000000,
      riskAppetiteStatement: 'Accept calculated risks for market leadership',
      controlMaturity: 0.5,
      incidentResponseCapability: 0.4,
      riskCultureScore: 0.4
    },
    modifiers: {
      reputationSensitivity: 0.7,
      regulatoryScrutiny: 0.9,
      marketVolatility: 1.3,
      innovationPressure: 1.5
    }
  },

  REGULATED: {
    id: 'regulated',
    name: 'Heavily Regulated Industry',
    description: 'Operating under strict regulatory oversight with compliance-first approach',
    initialState: {
      riskTolerance: 0.4,
      riskBudget: 1000000,
      riskAppetiteStatement: 'Compliance is non-negotiable; growth within guardrails',
      controlMaturity: 0.9,
      incidentResponseCapability: 0.8,
      riskCultureScore: 0.7
    },
    modifiers: {
      reputationSensitivity: 1.3,
      regulatoryScrutiny: 2.0,
      marketVolatility: 0.7,
      innovationPressure: 0.8
    }
  },

  TRANSFORMING: {
    id: 'transforming',
    name: 'Digital Transformation',
    description: 'Legacy organization undergoing rapid technological change',
    initialState: {
      riskTolerance: 0.6,
      riskBudget: 1500000,
      riskAppetiteStatement: 'Embrace change while managing transition risks',
      controlMaturity: 0.5,
      incidentResponseCapability: 0.5,
      riskCultureScore: 0.5
    },
    modifiers: {
      reputationSensitivity: 1.1,
      regulatoryScrutiny: 1.1,
      marketVolatility: 1.2,
      innovationPressure: 1.4
    }
  }
};

export const RISK_CATEGORIES = {
  STRATEGIC: { weight: 0.25, name: 'Strategic Risk' },
  OPERATIONAL: { weight: 0.20, name: 'Operational Risk' },
  FINANCIAL: { weight: 0.20, name: 'Financial Risk' },
  COMPLIANCE: { weight: 0.15, name: 'Compliance Risk' },
  REPUTATIONAL: { weight: 0.10, name: 'Reputational Risk' },
  CYBER: { weight: 0.10, name: 'Cyber Risk' }
};

export const RISK_METRICS = {
  VALUE_AT_RISK: 'var',
  EXPECTED_LOSS: 'el',
  RISK_ADJUSTED_RETURN: 'rar',
  KEY_RISK_INDICATORS: 'kri',
  RISK_APPETITE_UTILIZATION: 'rau'
};

export default CONFIGURATIONS;
