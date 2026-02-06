// Metamorphosis Simulation Configuration
// Organizational transformation and change management

export const CONFIGURATIONS = {
  DIGITAL_TRANSFORMATION: {
    id: 'DIGITAL_TRANSFORMATION',
    name: 'Digital Transformation',
    description: 'Lead enterprise-wide digital transformation initiative',
    initialState: {
      transformationProgress: 25,
      changeReadiness: 40,
      culturalShift: 35,
      capabilityBuilding: 42,
      stakeholderBuyIn: 45,
      executionMomentum: 38,
      resistanceManagement: 40,
      valueCapture: 30
    },
    transformContext: { transformType: 'DIGITAL', scope: 'ENTERPRISE', duration: 36, investmentLevel: 'HIGH' }
  },
  AGILE_TRANSFORMATION: {
    id: 'AGILE_TRANSFORMATION',
    name: 'Agile Transformation',
    description: 'Transform traditional organization to agile operating model',
    initialState: {
      transformationProgress: 30,
      changeReadiness: 45,
      culturalShift: 38,
      capabilityBuilding: 40,
      stakeholderBuyIn: 42,
      executionMomentum: 35,
      resistanceManagement: 38,
      valueCapture: 35
    },
    transformContext: { transformType: 'OPERATING_MODEL', scope: 'ORGANIZATIONAL', duration: 24, investmentLevel: 'MODERATE' }
  },
  CULTURAL_REVOLUTION: {
    id: 'CULTURAL_REVOLUTION',
    name: 'Cultural Revolution',
    description: 'Drive fundamental cultural change across the organization',
    initialState: {
      transformationProgress: 20,
      changeReadiness: 35,
      culturalShift: 28,
      capabilityBuilding: 45,
      stakeholderBuyIn: 38,
      executionMomentum: 30,
      resistanceManagement: 32,
      valueCapture: 25
    },
    transformContext: { transformType: 'CULTURAL', scope: 'ENTERPRISE', duration: 48, investmentLevel: 'SUSTAINED' }
  },
  MERGER_TRANSFORMATION: {
    id: 'MERGER_TRANSFORMATION',
    name: 'Post-Merger Transformation',
    description: 'Transform merged organization into unified entity',
    initialState: {
      transformationProgress: 15,
      changeReadiness: 32,
      culturalShift: 25,
      capabilityBuilding: 38,
      stakeholderBuyIn: 35,
      executionMomentum: 28,
      resistanceManagement: 30,
      valueCapture: 35
    },
    transformContext: { transformType: 'INTEGRATION', scope: 'ENTERPRISE', duration: 30, investmentLevel: 'VERY_HIGH' }
  }
};

export const DIMENSION_WEIGHTS = {
  transformationProgress: 0.18, changeReadiness: 0.14, culturalShift: 0.14, capabilityBuilding: 0.12,
  stakeholderBuyIn: 0.12, executionMomentum: 0.10, resistanceManagement: 0.10, valueCapture: 0.10
};

export const METAMORPHOSIS_CONSTANTS = {
  CHANGE_STAGES: ['AWARENESS', 'DESIRE', 'KNOWLEDGE', 'ABILITY', 'REINFORCEMENT'],
  RESISTANCE_TYPES: ['COGNITIVE', 'EMOTIONAL', 'BEHAVIORAL', 'SYSTEMIC'],
  TRANSFORMATION_LEVERS: ['LEADERSHIP', 'CULTURE', 'STRUCTURE', 'PROCESS', 'TECHNOLOGY', 'TALENT']
};

export const getConfigurationById = (id) => CONFIGURATIONS[id] || CONFIGURATIONS.DIGITAL_TRANSFORMATION;
