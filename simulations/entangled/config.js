// Entangled Simulation Configuration
// Complex stakeholder management with competing interests

export const CONFIGURATIONS = {
  MERGER_INTEGRATION: {
    id: 'MERGER_INTEGRATION',
    name: 'Merger Integration',
    description: 'Navigate complex post-merger integration with cultural conflicts',
    initialState: {
      stakeholderAlignment: 35,
      culturalIntegration: 30,
      operationalSynergy: 40,
      communicationClarity: 42,
      trustLevel: 38,
      decisionVelocity: 35,
      conflictResolution: 40,
      valueRealization: 45
    },
    entanglementContext: { complexity: 'VERY_HIGH', stakeholderCount: 45, conflictIntensity: 'HIGH', timeline: 'COMPRESSED' }
  },
  FAMILY_BUSINESS: {
    id: 'FAMILY_BUSINESS',
    name: 'Family Business Succession',
    description: 'Manage family dynamics in business succession planning',
    initialState: {
      stakeholderAlignment: 40,
      culturalIntegration: 55,
      operationalSynergy: 50,
      communicationClarity: 35,
      trustLevel: 45,
      decisionVelocity: 30,
      conflictResolution: 32,
      valueRealization: 52
    },
    entanglementContext: { complexity: 'HIGH', stakeholderCount: 25, conflictIntensity: 'VERY_HIGH', timeline: 'EXTENDED' }
  },
  JOINT_VENTURE: {
    id: 'JOINT_VENTURE',
    name: 'Joint Venture Leadership',
    description: 'Lead joint venture with divergent parent company interests',
    initialState: {
      stakeholderAlignment: 42,
      culturalIntegration: 38,
      operationalSynergy: 45,
      communicationClarity: 40,
      trustLevel: 42,
      decisionVelocity: 38,
      conflictResolution: 45,
      valueRealization: 40
    },
    entanglementContext: { complexity: 'HIGH', stakeholderCount: 30, conflictIntensity: 'MODERATE', timeline: 'ONGOING' }
  },
  ACTIVIST_PRESSURE: {
    id: 'ACTIVIST_PRESSURE',
    name: 'Activist Investor Pressure',
    description: 'Balance activist demands with long-term strategy and stakeholder needs',
    initialState: {
      stakeholderAlignment: 38,
      culturalIntegration: 60,
      operationalSynergy: 55,
      communicationClarity: 45,
      trustLevel: 35,
      decisionVelocity: 42,
      conflictResolution: 38,
      valueRealization: 48
    },
    entanglementContext: { complexity: 'HIGH', stakeholderCount: 35, conflictIntensity: 'HIGH', timeline: 'URGENT' }
  }
};

export const DIMENSION_WEIGHTS = {
  stakeholderAlignment: 0.18, culturalIntegration: 0.14, operationalSynergy: 0.14, communicationClarity: 0.12,
  trustLevel: 0.12, decisionVelocity: 0.10, conflictResolution: 0.10, valueRealization: 0.10
};

export const ENTANGLEMENT_CONSTANTS = {
  CONFLICT_TYPES: ['STRATEGIC', 'CULTURAL', 'RESOURCE', 'POWER', 'VALUE'],
  RESOLUTION_STRATEGIES: ['COLLABORATE', 'COMPROMISE', 'COMPETE', 'ACCOMMODATE', 'AVOID'],
  STAKEHOLDER_TYPES: ['INTERNAL', 'EXTERNAL', 'GOVERNANCE', 'OPERATIONAL', 'STRATEGIC']
};

export const getConfigurationById = (id) => CONFIGURATIONS[id] || CONFIGURATIONS.MERGER_INTEGRATION;
