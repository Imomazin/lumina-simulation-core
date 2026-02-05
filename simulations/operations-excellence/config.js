// Operations Excellence Simulation Configuration
// Focuses on operational efficiency, supply chain, and process optimization

export const CONFIGURATIONS = {
  LEAN_TRANSFORMATION: {
    id: 'LEAN_TRANSFORMATION',
    name: 'Lean Transformation',
    description: 'Lead enterprise-wide lean transformation in a traditional manufacturing company',
    initialState: {
      operationalEfficiency: 55,
      qualityScore: 65,
      supplychainResilience: 50,
      processMaturity: 45,
      costPosition: 60,
      deliveryPerformance: 58,
      safetyRecord: 70,
      employeeEngagement: 55
    },
    operationalContext: {
      industryType: 'MANUFACTURING',
      facilityCount: 12,
      employeeCount: 8500,
      annualRevenue: 2400000000,
      wasteLevel: 'HIGH',
      automationLevel: 'LOW'
    },
    challenges: ['Legacy processes', 'Resistance to change', 'Siloed operations', 'Aging equipment']
  },

  SUPPLY_CHAIN_RESILIENCE: {
    id: 'SUPPLY_CHAIN_RESILIENCE',
    name: 'Supply Chain Resilience',
    description: 'Build resilient global supply chain after major disruptions',
    initialState: {
      operationalEfficiency: 60,
      qualityScore: 70,
      supplychainResilience: 35,
      processMaturity: 55,
      costPosition: 50,
      deliveryPerformance: 45,
      safetyRecord: 75,
      employeeEngagement: 60
    },
    operationalContext: {
      industryType: 'CONSUMER_GOODS',
      facilityCount: 25,
      employeeCount: 15000,
      annualRevenue: 5500000000,
      wasteLevel: 'MODERATE',
      automationLevel: 'MODERATE'
    },
    challenges: ['Single-source dependencies', 'Geographic concentration', 'Inventory volatility', 'Logistics complexity']
  },

  DIGITAL_OPERATIONS: {
    id: 'DIGITAL_OPERATIONS',
    name: 'Digital Operations',
    description: 'Drive digital transformation of operations through Industry 4.0 technologies',
    initialState: {
      operationalEfficiency: 65,
      qualityScore: 72,
      supplychainResilience: 60,
      processMaturity: 50,
      costPosition: 55,
      deliveryPerformance: 65,
      safetyRecord: 78,
      employeeEngagement: 58
    },
    operationalContext: {
      industryType: 'HIGH_TECH',
      facilityCount: 8,
      employeeCount: 5000,
      annualRevenue: 1800000000,
      wasteLevel: 'LOW',
      automationLevel: 'HIGH'
    },
    challenges: ['Technology integration', 'Data silos', 'Skill gaps', 'Cybersecurity']
  },

  QUALITY_TURNAROUND: {
    id: 'QUALITY_TURNAROUND',
    name: 'Quality Turnaround',
    description: 'Execute quality turnaround after major product recalls and customer complaints',
    initialState: {
      operationalEfficiency: 58,
      qualityScore: 40,
      supplychainResilience: 55,
      processMaturity: 42,
      costPosition: 45,
      deliveryPerformance: 52,
      safetyRecord: 55,
      employeeEngagement: 45
    },
    operationalContext: {
      industryType: 'AUTOMOTIVE',
      facilityCount: 6,
      employeeCount: 12000,
      annualRevenue: 4200000000,
      wasteLevel: 'HIGH',
      automationLevel: 'MODERATE'
    },
    challenges: ['Quality culture gaps', 'Supplier quality issues', 'Regulatory scrutiny', 'Customer trust deficit']
  }
};

export const DIMENSION_WEIGHTS = {
  operationalEfficiency: 0.18,
  qualityScore: 0.16,
  supplychainResilience: 0.14,
  processMaturity: 0.12,
  costPosition: 0.12,
  deliveryPerformance: 0.12,
  safetyRecord: 0.08,
  employeeEngagement: 0.08
};

export const OPERATIONS_CONSTANTS = {
  EFFICIENCY_LEVELS: {
    WORLD_CLASS: 90,
    EXCELLENT: 80,
    GOOD: 70,
    AVERAGE: 60,
    BELOW_AVERAGE: 50
  },
  QUALITY_STANDARDS: {
    SIX_SIGMA: 99.99966,
    FIVE_SIGMA: 99.977,
    FOUR_SIGMA: 99.38,
    THREE_SIGMA: 93.32
  },
  SUPPLY_CHAIN_METRICS: ['OTIF', 'INVENTORY_TURNS', 'SUPPLIER_RELIABILITY', 'LEAD_TIME'],
  PROCESS_MATURITY_LEVELS: ['INITIAL', 'MANAGED', 'DEFINED', 'QUANTITATIVELY_MANAGED', 'OPTIMIZING'],
  IMPROVEMENT_METHODOLOGIES: ['LEAN', 'SIX_SIGMA', 'TQM', 'KAIZEN', 'AGILE_OPS']
};

export const getConfigurationById = (id) => CONFIGURATIONS[id] || CONFIGURATIONS.LEAN_TRANSFORMATION;
