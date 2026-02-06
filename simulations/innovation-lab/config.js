// Innovation Lab Simulation Configuration
// Focuses on R&D management, innovation strategy, and breakthrough product development

export const CONFIGURATIONS = {
  BREAKTHROUGH_INNOVATION: {
    id: 'BREAKTHROUGH_INNOVATION',
    name: 'Breakthrough Innovation',
    description: 'Lead R&D lab pursuing disruptive technologies with uncertain outcomes',
    initialState: {
      innovationPipeline: 55,
      researchQuality: 60,
      teamCapability: 58,
      resourceEfficiency: 50,
      marketAlignment: 45,
      intellectualProperty: 52,
      partnerEcosystem: 48,
      executiveSupport: 55
    },
    labContext: { labType: 'CORPORATE_RD', budget: 150000000, headcount: 280, projectCount: 25, timeHorizon: 'LONG_TERM' }
  },
  INCREMENTAL_INNOVATION: {
    id: 'INCREMENTAL_INNOVATION',
    name: 'Incremental Innovation',
    description: 'Drive continuous product improvement and next-generation development',
    initialState: {
      innovationPipeline: 65,
      researchQuality: 55,
      teamCapability: 62,
      resourceEfficiency: 60,
      marketAlignment: 70,
      intellectualProperty: 48,
      partnerEcosystem: 55,
      executiveSupport: 65
    },
    labContext: { labType: 'PRODUCT_DEVELOPMENT', budget: 80000000, headcount: 150, projectCount: 45, timeHorizon: 'SHORT_TERM' }
  },
  OPEN_INNOVATION: {
    id: 'OPEN_INNOVATION',
    name: 'Open Innovation Hub',
    description: 'Build innovation through external partnerships, startups, and ecosystem',
    initialState: {
      innovationPipeline: 50,
      researchQuality: 52,
      teamCapability: 55,
      resourceEfficiency: 58,
      marketAlignment: 55,
      intellectualProperty: 40,
      partnerEcosystem: 68,
      executiveSupport: 52
    },
    labContext: { labType: 'INNOVATION_HUB', budget: 60000000, headcount: 80, projectCount: 60, timeHorizon: 'MIXED' }
  },
  TURNAROUND_LAB: {
    id: 'TURNAROUND_LAB',
    name: 'Innovation Lab Turnaround',
    description: 'Revive struggling R&D organization and rebuild innovation capability',
    initialState: {
      innovationPipeline: 35,
      researchQuality: 42,
      teamCapability: 40,
      resourceEfficiency: 38,
      marketAlignment: 35,
      intellectualProperty: 45,
      partnerEcosystem: 30,
      executiveSupport: 35
    },
    labContext: { labType: 'LEGACY_RD', budget: 100000000, headcount: 200, projectCount: 35, timeHorizon: 'CRITICAL' }
  }
};

export const DIMENSION_WEIGHTS = {
  innovationPipeline: 0.18, researchQuality: 0.15, teamCapability: 0.14, resourceEfficiency: 0.12,
  marketAlignment: 0.12, intellectualProperty: 0.10, partnerEcosystem: 0.10, executiveSupport: 0.09
};

export const INNOVATION_CONSTANTS = {
  TRL_LEVELS: ['BASIC_RESEARCH', 'CONCEPT', 'PROOF_OF_CONCEPT', 'PROTOTYPE', 'PILOT', 'SCALE_UP', 'COMMERCIAL'],
  INNOVATION_TYPES: ['DISRUPTIVE', 'SUSTAINING', 'EFFICIENCY', 'ADJACENT', 'TRANSFORMATIONAL'],
  STAGE_GATES: ['IDEATION', 'FEASIBILITY', 'DEVELOPMENT', 'VALIDATION', 'LAUNCH']
};

export const getConfigurationById = (id) => CONFIGURATIONS[id] || CONFIGURATIONS.BREAKTHROUGH_INNOVATION;
