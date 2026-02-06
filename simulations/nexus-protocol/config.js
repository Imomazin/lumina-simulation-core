// Nexus Protocol Simulation Configuration
// Strategic alliance and partnership management

export const CONFIGURATIONS = {
  STRATEGIC_ALLIANCE: {
    id: 'STRATEGIC_ALLIANCE',
    name: 'Strategic Alliance',
    description: 'Build and manage transformational strategic partnership',
    initialState: {
      partnerAlignment: 55,
      valueCreation: 45,
      trustFoundation: 50,
      governanceEffectiveness: 48,
      operationalIntegration: 40,
      conflictManagement: 52,
      innovationSynergy: 45,
      exitReadiness: 35
    },
    allianceContext: { allianceType: 'STRATEGIC', partnerCount: 2, duration: 'LONG_TERM', complexity: 'HIGH' }
  },
  ECOSYSTEM_ORCHESTRATION: {
    id: 'ECOSYSTEM_ORCHESTRATION',
    name: 'Ecosystem Orchestration',
    description: 'Orchestrate multi-partner ecosystem for platform dominance',
    initialState: {
      partnerAlignment: 42,
      valueCreation: 50,
      trustFoundation: 45,
      governanceEffectiveness: 40,
      operationalIntegration: 48,
      conflictManagement: 45,
      innovationSynergy: 55,
      exitReadiness: 40
    },
    allianceContext: { allianceType: 'ECOSYSTEM', partnerCount: 15, duration: 'ONGOING', complexity: 'VERY_HIGH' }
  },
  COOPETITION: {
    id: 'COOPETITION',
    name: 'Coopetition',
    description: 'Navigate partnership with competitor for mutual benefit',
    initialState: {
      partnerAlignment: 38,
      valueCreation: 48,
      trustFoundation: 35,
      governanceEffectiveness: 45,
      operationalIntegration: 35,
      conflictManagement: 40,
      innovationSynergy: 50,
      exitReadiness: 55
    },
    allianceContext: { allianceType: 'COOPETITION', partnerCount: 1, duration: 'MEDIUM_TERM', complexity: 'HIGH' }
  },
  GLOBAL_EXPANSION: {
    id: 'GLOBAL_EXPANSION',
    name: 'Global Expansion Partnership',
    description: 'Partner for international market entry and expansion',
    initialState: {
      partnerAlignment: 48,
      valueCreation: 42,
      trustFoundation: 52,
      governanceEffectiveness: 45,
      operationalIntegration: 38,
      conflictManagement: 50,
      innovationSynergy: 40,
      exitReadiness: 45
    },
    allianceContext: { allianceType: 'MARKET_ENTRY', partnerCount: 3, duration: 'LONG_TERM', complexity: 'MODERATE' }
  }
};

export const DIMENSION_WEIGHTS = {
  partnerAlignment: 0.18, valueCreation: 0.16, trustFoundation: 0.14, governanceEffectiveness: 0.12,
  operationalIntegration: 0.10, conflictManagement: 0.10, innovationSynergy: 0.10, exitReadiness: 0.10
};

export const NEXUS_CONSTANTS = {
  ALLIANCE_STAGES: ['FORMATION', 'OPERATION', 'EVOLUTION', 'TERMINATION'],
  VALUE_DRIVERS: ['MARKET_ACCESS', 'CAPABILITY', 'COST', 'RISK', 'SPEED', 'INNOVATION'],
  GOVERNANCE_MODELS: ['EQUITY_JV', 'CONTRACTUAL', 'CONSORTIUM', 'NETWORK', 'PLATFORM']
};

export const getConfigurationById = (id) => CONFIGURATIONS[id] || CONFIGURATIONS.STRATEGIC_ALLIANCE;
