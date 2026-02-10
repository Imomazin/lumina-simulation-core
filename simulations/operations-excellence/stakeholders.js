// Operations Excellence Simulation Stakeholders
// 15 stakeholders representing operations ecosystem

export const STAKEHOLDERS = {
  COO: {
    id: 'COO',
    name: 'Chief Operations Officer',
    role: 'Operations Strategy Lead',
    archetype: 'EFFICIENCY_CHAMPION',
    influence: 0.95,
    initialTrust: 75,
    initialAlignment: 80,
    priorities: ['operationalEfficiency', 'costPosition', 'deliveryPerformance'],
    riskTolerance: 0.60,
    decisionStyle: 'DATA_DRIVEN',
    background: 'Former plant manager who rose through operations, obsessed with metrics'
  },

  PLANT_DIRECTOR: {
    id: 'PLANT_DIRECTOR',
    name: 'Plant Director',
    role: 'Facility Operations Lead',
    archetype: 'OPERATOR',
    influence: 0.85,
    initialTrust: 70,
    initialAlignment: 65,
    priorities: ['operationalEfficiency', 'safetyRecord', 'employeeEngagement'],
    riskTolerance: 0.50,
    decisionStyle: 'PRAGMATIC',
    background: 'Veteran operator with 20+ years on shop floor, deeply respected by workers'
  },

  QUALITY_VP: {
    id: 'QUALITY_VP',
    name: 'VP of Quality',
    role: 'Quality Management Lead',
    archetype: 'PERFECTIONIST',
    influence: 0.82,
    initialTrust: 72,
    initialAlignment: 75,
    priorities: ['qualityScore', 'processMaturity', 'supplychainResilience'],
    riskTolerance: 0.35,
    decisionStyle: 'SYSTEMATIC',
    background: 'Six Sigma Master Black Belt with aerospace quality background'
  },

  SUPPLY_CHAIN_VP: {
    id: 'SUPPLY_CHAIN_VP',
    name: 'VP of Supply Chain',
    role: 'Supply Chain Strategy',
    archetype: 'STRATEGIST',
    influence: 0.88,
    initialTrust: 68,
    initialAlignment: 70,
    priorities: ['supplychainResilience', 'costPosition', 'deliveryPerformance'],
    riskTolerance: 0.55,
    decisionStyle: 'ANALYTICAL',
    background: 'Global supply chain experience, weathered multiple disruption crises'
  },

  CONTINUOUS_IMPROVEMENT: {
    id: 'CONTINUOUS_IMPROVEMENT',
    name: 'Continuous Improvement Director',
    role: 'Lean/CI Program Lead',
    archetype: 'CHANGE_AGENT',
    influence: 0.72,
    initialTrust: 65,
    initialAlignment: 78,
    priorities: ['processMaturity', 'operationalEfficiency', 'employeeEngagement'],
    riskTolerance: 0.70,
    decisionStyle: 'COLLABORATIVE',
    background: 'Toyota Production System trained, passionate about kaizen culture'
  },

  MAINTENANCE_MANAGER: {
    id: 'MAINTENANCE_MANAGER',
    name: 'Maintenance Manager',
    role: 'Asset Reliability Lead',
    archetype: 'RELIABILITY_ENGINEER',
    influence: 0.65,
    initialTrust: 70,
    initialAlignment: 65,
    priorities: ['operationalEfficiency', 'safetyRecord', 'costPosition'],
    riskTolerance: 0.40,
    decisionStyle: 'PREVENTIVE',
    background: 'Engineering degree with TPM expertise, fights for maintenance budgets'
  },

  SAFETY_DIRECTOR: {
    id: 'SAFETY_DIRECTOR',
    name: 'Safety Director',
    role: 'EHS Management Lead',
    archetype: 'GUARDIAN',
    influence: 0.75,
    initialTrust: 75,
    initialAlignment: 70,
    priorities: ['safetyRecord', 'employeeEngagement', 'processMaturity'],
    riskTolerance: 0.25,
    decisionStyle: 'RISK_AVERSE',
    background: 'Industrial hygienist turned safety leader, zero tolerance for shortcuts'
  },

  PROCUREMENT_HEAD: {
    id: 'PROCUREMENT_HEAD',
    name: 'Head of Procurement',
    role: 'Strategic Sourcing Lead',
    archetype: 'NEGOTIATOR',
    influence: 0.70,
    initialTrust: 62,
    initialAlignment: 60,
    priorities: ['costPosition', 'supplychainResilience', 'qualityScore'],
    riskTolerance: 0.50,
    decisionStyle: 'COST_FOCUSED',
    background: 'Commodity trading background, aggressive on cost but learning resilience'
  },

  OPERATIONS_FINANCE: {
    id: 'OPERATIONS_FINANCE',
    name: 'Operations Finance Director',
    role: 'Operations Financial Management',
    archetype: 'CONTROLLER',
    influence: 0.72,
    initialTrust: 65,
    initialAlignment: 55,
    priorities: ['costPosition', 'operationalEfficiency', 'processMaturity'],
    riskTolerance: 0.35,
    decisionStyle: 'ROI_FOCUSED',
    background: 'CPA with manufacturing cost accounting expertise, budget guardian'
  },

  UNION_REPRESENTATIVE: {
    id: 'UNION_REPRESENTATIVE',
    name: 'Union Representative',
    role: 'Labor Relations',
    archetype: 'WORKER_ADVOCATE',
    influence: 0.68,
    initialTrust: 50,
    initialAlignment: 45,
    priorities: ['safetyRecord', 'employeeEngagement', 'operationalEfficiency'],
    riskTolerance: 0.30,
    decisionStyle: 'PROTECTIVE',
    background: 'Former line worker, elected shop steward, balances member needs'
  },

  DIGITAL_OPS_LEAD: {
    id: 'DIGITAL_OPS_LEAD',
    name: 'Digital Operations Lead',
    role: 'Industry 4.0 Implementation',
    archetype: 'TECH_EVANGELIST',
    influence: 0.65,
    initialTrust: 60,
    initialAlignment: 72,
    priorities: ['processMaturity', 'operationalEfficiency', 'qualityScore'],
    riskTolerance: 0.75,
    decisionStyle: 'INNOVATIVE',
    background: 'IT background with IoT and analytics expertise, pushing smart factory'
  },

  KEY_SUPPLIER: {
    id: 'KEY_SUPPLIER',
    name: 'Key Supplier Executive',
    role: 'Strategic Supplier Partner',
    archetype: 'PARTNER',
    influence: 0.60,
    initialTrust: 58,
    initialAlignment: 55,
    priorities: ['supplychainResilience', 'qualityScore', 'deliveryPerformance'],
    riskTolerance: 0.45,
    decisionStyle: 'COLLABORATIVE',
    background: 'CEO of critical component supplier, seeking long-term partnership'
  },

  LOGISTICS_DIRECTOR: {
    id: 'LOGISTICS_DIRECTOR',
    name: 'Logistics Director',
    role: 'Distribution & Warehousing',
    archetype: 'FLOW_OPTIMIZER',
    influence: 0.62,
    initialTrust: 65,
    initialAlignment: 60,
    priorities: ['deliveryPerformance', 'costPosition', 'supplychainResilience'],
    riskTolerance: 0.50,
    decisionStyle: 'SYSTEMATIC',
    background: 'Military logistics background, excels under pressure'
  },

  CUSTOMER_OPS: {
    id: 'CUSTOMER_OPS',
    name: 'Customer Operations Manager',
    role: 'Customer Fulfillment Lead',
    archetype: 'CUSTOMER_CHAMPION',
    influence: 0.58,
    initialTrust: 68,
    initialAlignment: 65,
    priorities: ['deliveryPerformance', 'qualityScore', 'operationalEfficiency'],
    riskTolerance: 0.45,
    decisionStyle: 'CUSTOMER_CENTRIC',
    background: 'Interface between operations and sales, fights for customer priorities'
  },

  REGULATORY_LIAISON: {
    id: 'REGULATORY_LIAISON',
    name: 'Regulatory Affairs Manager',
    role: 'Compliance Management',
    archetype: 'COMPLIANCE_OFFICER',
    influence: 0.55,
    initialTrust: 60,
    initialAlignment: 58,
    priorities: ['qualityScore', 'safetyRecord', 'processMaturity'],
    riskTolerance: 0.25,
    decisionStyle: 'PROCEDURAL',
    background: 'Regulatory agency background, navigates complex compliance landscape'
  }
};

export const STAKEHOLDER_COMMITTEES = {
  OPERATIONS_LEADERSHIP: ['COO', 'PLANT_DIRECTOR', 'SUPPLY_CHAIN_VP', 'QUALITY_VP'],
  CONTINUOUS_IMPROVEMENT_COUNCIL: ['CONTINUOUS_IMPROVEMENT', 'QUALITY_VP', 'PLANT_DIRECTOR', 'DIGITAL_OPS_LEAD'],
  SUPPLY_CHAIN_COUNCIL: ['SUPPLY_CHAIN_VP', 'PROCUREMENT_HEAD', 'LOGISTICS_DIRECTOR', 'KEY_SUPPLIER'],
  SAFETY_COMMITTEE: ['SAFETY_DIRECTOR', 'PLANT_DIRECTOR', 'UNION_REPRESENTATIVE', 'MAINTENANCE_MANAGER'],
  TRANSFORMATION_BOARD: ['COO', 'DIGITAL_OPS_LEAD', 'CONTINUOUS_IMPROVEMENT', 'OPERATIONS_FINANCE']
};

export const RELATIONSHIP_DYNAMICS = {
  ALLIANCES: [
    ['COO', 'CONTINUOUS_IMPROVEMENT'],
    ['PLANT_DIRECTOR', 'UNION_REPRESENTATIVE'],
    ['QUALITY_VP', 'SAFETY_DIRECTOR'],
    ['SUPPLY_CHAIN_VP', 'LOGISTICS_DIRECTOR']
  ],
  TENSIONS: [
    ['PROCUREMENT_HEAD', 'QUALITY_VP'],
    ['OPERATIONS_FINANCE', 'DIGITAL_OPS_LEAD'],
    ['PLANT_DIRECTOR', 'CONTINUOUS_IMPROVEMENT'],
    ['CUSTOMER_OPS', 'SUPPLY_CHAIN_VP']
  ]
};

export const getStakeholderById = (id) => STAKEHOLDERS[id];
export const getAllStakeholders = () => Object.values(STAKEHOLDERS);
export const getCommitteeMembers = (committee) =>
  STAKEHOLDER_COMMITTEES[committee]?.map(id => STAKEHOLDERS[id]) || [];
