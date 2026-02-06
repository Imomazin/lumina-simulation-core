// Crucible Simulation Configuration
// High-pressure crisis leadership simulation - trial by fire

export const CONFIGURATIONS = {
  CORPORATE_CRISIS: {
    id: 'CORPORATE_CRISIS',
    name: 'Corporate Crisis',
    description: 'Navigate simultaneous crises threatening company survival',
    initialState: {
      crisisControl: 35,
      stakeholderConfidence: 40,
      operationalContinuity: 45,
      reputationHealth: 38,
      teamResilience: 50,
      resourceReserves: 42,
      communicationEffectiveness: 45,
      strategicClarity: 40
    },
    crisisContext: { crisisType: 'MULTI_FRONT', severity: 'CRITICAL', timeframe: 'IMMEDIATE', publicExposure: 'HIGH' }
  },
  MARKET_COLLAPSE: {
    id: 'MARKET_COLLAPSE',
    name: 'Market Collapse',
    description: 'Lead through sudden market downturn threatening viability',
    initialState: {
      crisisControl: 42,
      stakeholderConfidence: 35,
      operationalContinuity: 55,
      reputationHealth: 50,
      teamResilience: 45,
      resourceReserves: 30,
      communicationEffectiveness: 48,
      strategicClarity: 38
    },
    crisisContext: { crisisType: 'FINANCIAL', severity: 'SEVERE', timeframe: 'URGENT', publicExposure: 'MODERATE' }
  },
  LEADERSHIP_VACUUM: {
    id: 'LEADERSHIP_VACUUM',
    name: 'Leadership Vacuum',
    description: 'Step into leadership role during sudden executive departure',
    initialState: {
      crisisControl: 40,
      stakeholderConfidence: 32,
      operationalContinuity: 50,
      reputationHealth: 45,
      teamResilience: 38,
      resourceReserves: 55,
      communicationEffectiveness: 35,
      strategicClarity: 30
    },
    crisisContext: { crisisType: 'LEADERSHIP', severity: 'HIGH', timeframe: 'COMPRESSED', publicExposure: 'HIGH' }
  },
  CYBER_BREACH: {
    id: 'CYBER_BREACH',
    name: 'Cyber Breach',
    description: 'Manage major cybersecurity incident with data exposure',
    initialState: {
      crisisControl: 30,
      stakeholderConfidence: 35,
      operationalContinuity: 40,
      reputationHealth: 42,
      teamResilience: 52,
      resourceReserves: 48,
      communicationEffectiveness: 38,
      strategicClarity: 45
    },
    crisisContext: { crisisType: 'SECURITY', severity: 'CRITICAL', timeframe: 'IMMEDIATE', publicExposure: 'VERY_HIGH' }
  }
};

export const DIMENSION_WEIGHTS = {
  crisisControl: 0.18, stakeholderConfidence: 0.16, operationalContinuity: 0.14, reputationHealth: 0.14,
  teamResilience: 0.10, resourceReserves: 0.10, communicationEffectiveness: 0.10, strategicClarity: 0.08
};

export const CRISIS_CONSTANTS = {
  SEVERITY_LEVELS: ['LOW', 'MODERATE', 'HIGH', 'SEVERE', 'CRITICAL'],
  RESPONSE_MODES: ['CONTAIN', 'STABILIZE', 'RECOVER', 'TRANSFORM'],
  STAKEHOLDER_PRIORITY: ['EMPLOYEES', 'CUSTOMERS', 'INVESTORS', 'REGULATORS', 'MEDIA', 'PUBLIC']
};

export const getConfigurationById = (id) => CONFIGURATIONS[id] || CONFIGURATIONS.CORPORATE_CRISIS;
