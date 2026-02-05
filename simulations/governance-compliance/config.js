// Governance & Compliance Simulation - Configuration
// 4 distinct configurations representing different regulatory environments

export const CONFIGURATIONS = {
  HEAVILY_REGULATED: {
    id: 'heavily_regulated',
    name: 'Heavily Regulated Industry',
    description: 'Navigate complex regulatory requirements in financial services or healthcare',
    initialState: {
      complianceMaturity: 0.7,
      governanceEffectiveness: 0.6,
      regulatoryStanding: 0.7,
      ethicalCulture: 0.6,
      controlEnvironment: 0.7,
      auditReadiness: 0.6
    },
    modifiers: {
      regulatoryIntensity: 2.0,
      penaltyMultiplier: 1.5,
      reputationSensitivity: 1.3,
      changeComplexity: 1.4
    },
    context: {
      industry: 'financial_services',
      primaryRegulators: ['SEC', 'OCC', 'FINRA'],
      complianceStaff: 150,
      annualComplianceBudget: 25000000
    }
  },

  EMERGING_REGULATION: {
    id: 'emerging_regulation',
    name: 'Emerging Regulatory Landscape',
    description: 'Adapt to rapidly evolving regulations in technology or data privacy',
    initialState: {
      complianceMaturity: 0.4,
      governanceEffectiveness: 0.5,
      regulatoryStanding: 0.6,
      ethicalCulture: 0.5,
      controlEnvironment: 0.4,
      auditReadiness: 0.4
    },
    modifiers: {
      regulatoryIntensity: 1.5,
      penaltyMultiplier: 1.2,
      reputationSensitivity: 1.5,
      changeComplexity: 1.8
    },
    context: {
      industry: 'technology',
      primaryRegulators: ['FTC', 'State_AGs', 'EU_DPA'],
      complianceStaff: 40,
      annualComplianceBudget: 8000000
    }
  },

  GLOBAL_OPERATIONS: {
    id: 'global_operations',
    name: 'Global Multi-Jurisdictional',
    description: 'Manage compliance across multiple countries and regulatory regimes',
    initialState: {
      complianceMaturity: 0.5,
      governanceEffectiveness: 0.5,
      regulatoryStanding: 0.6,
      ethicalCulture: 0.5,
      controlEnvironment: 0.5,
      auditReadiness: 0.5
    },
    modifiers: {
      regulatoryIntensity: 1.8,
      penaltyMultiplier: 1.4,
      reputationSensitivity: 1.4,
      changeComplexity: 2.0
    },
    context: {
      industry: 'multinational',
      primaryRegulators: ['SEC', 'EU_Commission', 'APAC_Regulators'],
      complianceStaff: 200,
      annualComplianceBudget: 35000000
    }
  },

  POST_CRISIS: {
    id: 'post_crisis',
    name: 'Post-Compliance Crisis',
    description: 'Rebuild compliance function after a major regulatory failure',
    initialState: {
      complianceMaturity: 0.3,
      governanceEffectiveness: 0.3,
      regulatoryStanding: 0.2,
      ethicalCulture: 0.3,
      controlEnvironment: 0.3,
      auditReadiness: 0.3
    },
    modifiers: {
      regulatoryIntensity: 2.5,
      penaltyMultiplier: 2.0,
      reputationSensitivity: 2.0,
      changeComplexity: 1.5
    },
    context: {
      industry: 'recovery',
      primaryRegulators: ['Multiple_Under_Consent'],
      complianceStaff: 80,
      annualComplianceBudget: 50000000
    }
  }
};

export const COMPLIANCE_DOMAINS = {
  REGULATORY: { weight: 0.25, name: 'Regulatory Compliance' },
  ETHICS: { weight: 0.20, name: 'Ethics & Conduct' },
  DATA_PRIVACY: { weight: 0.15, name: 'Data Privacy' },
  FINANCIAL: { weight: 0.15, name: 'Financial Controls' },
  OPERATIONAL: { weight: 0.15, name: 'Operational Compliance' },
  THIRD_PARTY: { weight: 0.10, name: 'Third-Party Governance' }
};

export const GOVERNANCE_PILLARS = {
  BOARD_OVERSIGHT: 'Effective board-level governance and oversight',
  MANAGEMENT_ACCOUNTABILITY: 'Clear management accountability structures',
  RISK_INTEGRATION: 'Integration of compliance with risk management',
  CULTURE_ETHICS: 'Strong ethical culture and tone from top',
  MONITORING_TESTING: 'Robust monitoring and testing programs',
  REPORTING_TRANSPARENCY: 'Transparent reporting and disclosure'
};

export const REGULATORY_ACTIONS = {
  INFORMAL_GUIDANCE: { severity: 1, publicDisclosure: false },
  MATTER_REQUIRING_ATTENTION: { severity: 2, publicDisclosure: false },
  FORMAL_WARNING: { severity: 3, publicDisclosure: false },
  CIVIL_MONEY_PENALTY: { severity: 4, publicDisclosure: true },
  CONSENT_ORDER: { severity: 5, publicDisclosure: true },
  CEASE_AND_DESIST: { severity: 6, publicDisclosure: true }
};

export default CONFIGURATIONS;
