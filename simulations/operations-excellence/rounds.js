// Operations Excellence Simulation Rounds
// 24 rounds across 4 phases with 6 options each

export const ROUNDS = [
  // Phase 1: Operational Assessment (Rounds 1-6)
  {
    id: 1,
    phase: 'OPERATIONAL_ASSESSMENT',
    title: 'Operations Diagnostic',
    scenario: 'Initial assessment reveals significant operational gaps. Multiple improvement opportunities exist but resources are limited. Where do you focus first?',
    stakeholderFocus: ['COO', 'CONTINUOUS_IMPROVEMENT', 'OPERATIONS_FINANCE'],
    options: [
      { id: 'A', text: 'Launch comprehensive value stream mapping across all facilities', impact: { processMaturity: 12, operationalEfficiency: 5, employeeEngagement: 3 }, risk: 0.20, stakeholderReactions: { CONTINUOUS_IMPROVEMENT: 18, PLANT_DIRECTOR: 8, COO: 12 } },
      { id: 'B', text: 'Focus on quick wins with immediate cost impact', impact: { costPosition: 10, operationalEfficiency: 8, processMaturity: -3 }, risk: 0.25, stakeholderReactions: { OPERATIONS_FINANCE: 15, COO: 10, CONTINUOUS_IMPROVEMENT: -8 } },
      { id: 'C', text: 'Prioritize quality system overhaul', impact: { qualityScore: 12, processMaturity: 8, costPosition: -5 }, risk: 0.30, stakeholderReactions: { QUALITY_VP: 18, REGULATORY_LIAISON: 12, PROCUREMENT_HEAD: -5 } },
      { id: 'D', text: 'Start with safety and engagement baseline', impact: { safetyRecord: 10, employeeEngagement: 12, operationalEfficiency: 3 }, risk: 0.15, stakeholderReactions: { SAFETY_DIRECTOR: 18, UNION_REPRESENTATIVE: 15, COO: -5 } },
      { id: 'E', text: 'Benchmark against industry best practices', impact: { processMaturity: 8, operationalEfficiency: 5, costPosition: 3 }, risk: 0.20, stakeholderReactions: { CONTINUOUS_IMPROVEMENT: 12, QUALITY_VP: 10, PLANT_DIRECTOR: 5 } },
      { id: 'F', text: 'Deploy digital diagnostics and IoT sensors', impact: { processMaturity: 10, operationalEfficiency: 8, costPosition: -8 }, risk: 0.35, stakeholderReactions: { DIGITAL_OPS_LEAD: 18, COO: 8, OPERATIONS_FINANCE: -10 } }
    ]
  },
  {
    id: 2,
    phase: 'OPERATIONAL_ASSESSMENT',
    title: 'Supply Chain Visibility',
    scenario: 'Supply chain mapping reveals significant blind spots and single-source dependencies. Recent disruptions highlight vulnerability.',
    stakeholderFocus: ['SUPPLY_CHAIN_VP', 'PROCUREMENT_HEAD', 'KEY_SUPPLIER'],
    options: [
      { id: 'A', text: 'Implement end-to-end supply chain control tower', impact: { supplychainResilience: 12, processMaturity: 8, costPosition: -5 }, risk: 0.30, stakeholderReactions: { SUPPLY_CHAIN_VP: 18, DIGITAL_OPS_LEAD: 12, OPERATIONS_FINANCE: -8 } },
      { id: 'B', text: 'Dual-source all critical components', impact: { supplychainResilience: 15, costPosition: -10, qualityScore: -3 }, risk: 0.35, stakeholderReactions: { SUPPLY_CHAIN_VP: 15, KEY_SUPPLIER: -12, PROCUREMENT_HEAD: 8 } },
      { id: 'C', text: 'Build strategic inventory buffers', impact: { supplychainResilience: 10, deliveryPerformance: 8, costPosition: -8 }, risk: 0.20, stakeholderReactions: { LOGISTICS_DIRECTOR: 15, CUSTOMER_OPS: 12, OPERATIONS_FINANCE: -10 } },
      { id: 'D', text: 'Nearshore critical supplier base', impact: { supplychainResilience: 12, deliveryPerformance: 5, costPosition: -12 }, risk: 0.40, stakeholderReactions: { SUPPLY_CHAIN_VP: 12, KEY_SUPPLIER: -15, COO: 5 } },
      { id: 'E', text: 'Strengthen supplier partnerships with integration', impact: { supplychainResilience: 8, qualityScore: 8, processMaturity: 5 }, risk: 0.25, stakeholderReactions: { KEY_SUPPLIER: 18, QUALITY_VP: 10, PROCUREMENT_HEAD: 5 } },
      { id: 'F', text: 'Accept current risk with contingency planning', impact: { costPosition: 5, supplychainResilience: -5, processMaturity: 3 }, risk: 0.15, stakeholderReactions: { OPERATIONS_FINANCE: 12, SUPPLY_CHAIN_VP: -10, COO: -5 } }
    ]
  },
  {
    id: 3,
    phase: 'OPERATIONAL_ASSESSMENT',
    title: 'Quality System Evaluation',
    scenario: 'Quality audit reveals gaps in procedures, training, and measurement systems. Customer complaints are rising and regulatory scrutiny increases.',
    stakeholderFocus: ['QUALITY_VP', 'REGULATORY_LIAISON', 'CUSTOMER_OPS'],
    options: [
      { id: 'A', text: 'Implement comprehensive quality management system', impact: { qualityScore: 15, processMaturity: 10, costPosition: -8 }, risk: 0.25, stakeholderReactions: { QUALITY_VP: 18, REGULATORY_LIAISON: 15, OPERATIONS_FINANCE: -8 } },
      { id: 'B', text: 'Focus on supplier quality improvement program', impact: { qualityScore: 10, supplychainResilience: 8, costPosition: -5 }, risk: 0.30, stakeholderReactions: { PROCUREMENT_HEAD: 12, KEY_SUPPLIER: 8, QUALITY_VP: 15 } },
      { id: 'C', text: 'Statistical process control across all lines', impact: { qualityScore: 12, operationalEfficiency: 5, processMaturity: 8 }, risk: 0.25, stakeholderReactions: { QUALITY_VP: 15, PLANT_DIRECTOR: 10, DIGITAL_OPS_LEAD: 8 } },
      { id: 'D', text: 'Quality training and certification program', impact: { qualityScore: 8, employeeEngagement: 10, processMaturity: 5 }, risk: 0.15, stakeholderReactions: { QUALITY_VP: 12, UNION_REPRESENTATIVE: 12, CONTINUOUS_IMPROVEMENT: 10 } },
      { id: 'E', text: 'Customer quality feedback loop integration', impact: { qualityScore: 10, deliveryPerformance: 5, employeeEngagement: 3 }, risk: 0.20, stakeholderReactions: { CUSTOMER_OPS: 18, QUALITY_VP: 10, PLANT_DIRECTOR: 5 } },
      { id: 'F', text: 'Root cause analysis and corrective action system', impact: { qualityScore: 8, processMaturity: 12, operationalEfficiency: 3 }, risk: 0.20, stakeholderReactions: { CONTINUOUS_IMPROVEMENT: 15, QUALITY_VP: 12, SAFETY_DIRECTOR: 8 } }
    ]
  },
  {
    id: 4,
    phase: 'OPERATIONAL_ASSESSMENT',
    title: 'Workforce Capability Assessment',
    scenario: 'Skills gap analysis shows significant training needs while experienced workers approach retirement. Knowledge transfer is critical.',
    stakeholderFocus: ['PLANT_DIRECTOR', 'UNION_REPRESENTATIVE', 'CONTINUOUS_IMPROVEMENT'],
    options: [
      { id: 'A', text: 'Comprehensive skills development academy', impact: { employeeEngagement: 15, processMaturity: 8, costPosition: -8 }, risk: 0.25, stakeholderReactions: { UNION_REPRESENTATIVE: 18, CONTINUOUS_IMPROVEMENT: 12, OPERATIONS_FINANCE: -8 } },
      { id: 'B', text: 'Cross-training and multi-skilling program', impact: { operationalEfficiency: 10, employeeEngagement: 8, deliveryPerformance: 5 }, risk: 0.20, stakeholderReactions: { PLANT_DIRECTOR: 15, UNION_REPRESENTATIVE: 10, COO: 8 } },
      { id: 'C', text: 'Knowledge capture from retiring experts', impact: { processMaturity: 12, employeeEngagement: 5, qualityScore: 5 }, risk: 0.15, stakeholderReactions: { PLANT_DIRECTOR: 12, QUALITY_VP: 10, CONTINUOUS_IMPROVEMENT: 8 } },
      { id: 'D', text: 'Automation to reduce skill dependencies', impact: { operationalEfficiency: 12, costPosition: 5, employeeEngagement: -10 }, risk: 0.40, stakeholderReactions: { DIGITAL_OPS_LEAD: 18, UNION_REPRESENTATIVE: -18, OPERATIONS_FINANCE: 10 } },
      { id: 'E', text: 'External recruitment for critical skills', impact: { processMaturity: 8, operationalEfficiency: 5, employeeEngagement: -5 }, risk: 0.30, stakeholderReactions: { COO: 10, UNION_REPRESENTATIVE: -10, PLANT_DIRECTOR: 5 } },
      { id: 'F', text: 'Contractor partnerships for flexibility', impact: { operationalEfficiency: 8, costPosition: 5, qualityScore: -5 }, risk: 0.35, stakeholderReactions: { OPERATIONS_FINANCE: 12, UNION_REPRESENTATIVE: -15, QUALITY_VP: -8 } }
    ]
  },
  {
    id: 5,
    phase: 'OPERATIONAL_ASSESSMENT',
    title: 'Equipment and Asset Review',
    scenario: 'Asset condition assessment shows aging equipment with increasing downtime. Capital investment decisions are needed.',
    stakeholderFocus: ['MAINTENANCE_MANAGER', 'OPERATIONS_FINANCE', 'PLANT_DIRECTOR'],
    options: [
      { id: 'A', text: 'Comprehensive equipment modernization program', impact: { operationalEfficiency: 15, costPosition: -15, safetyRecord: 8 }, risk: 0.40, stakeholderReactions: { MAINTENANCE_MANAGER: 18, PLANT_DIRECTOR: 12, OPERATIONS_FINANCE: -15 } },
      { id: 'B', text: 'Predictive maintenance system implementation', impact: { operationalEfficiency: 10, costPosition: -5, processMaturity: 8 }, risk: 0.30, stakeholderReactions: { DIGITAL_OPS_LEAD: 18, MAINTENANCE_MANAGER: 12, COO: 10 } },
      { id: 'C', text: 'TPM (Total Productive Maintenance) rollout', impact: { operationalEfficiency: 8, employeeEngagement: 10, processMaturity: 8 }, risk: 0.20, stakeholderReactions: { CONTINUOUS_IMPROVEMENT: 15, PLANT_DIRECTOR: 10, MAINTENANCE_MANAGER: 12 } },
      { id: 'D', text: 'Selective replacement of critical bottlenecks', impact: { operationalEfficiency: 10, deliveryPerformance: 8, costPosition: -8 }, risk: 0.25, stakeholderReactions: { OPERATIONS_FINANCE: 10, COO: 12, MAINTENANCE_MANAGER: 8 } },
      { id: 'E', text: 'Extended equipment lifecycle through refurbishment', impact: { costPosition: 8, operationalEfficiency: 3, safetyRecord: -5 }, risk: 0.30, stakeholderReactions: { OPERATIONS_FINANCE: 15, SAFETY_DIRECTOR: -10, MAINTENANCE_MANAGER: -5 } },
      { id: 'F', text: 'Lease vs. buy strategy for flexibility', impact: { costPosition: 5, operationalEfficiency: 5, processMaturity: -3 }, risk: 0.25, stakeholderReactions: { OPERATIONS_FINANCE: 12, MAINTENANCE_MANAGER: -5, COO: 5 } }
    ]
  },
  {
    id: 6,
    phase: 'OPERATIONAL_ASSESSMENT',
    title: 'Performance Measurement Framework',
    scenario: 'Current metrics are siloed and inconsistent. Need unified performance management system to drive improvement.',
    stakeholderFocus: ['COO', 'DIGITAL_OPS_LEAD', 'CONTINUOUS_IMPROVEMENT'],
    options: [
      { id: 'A', text: 'Deploy enterprise OEE (Overall Equipment Effectiveness) system', impact: { processMaturity: 12, operationalEfficiency: 8, costPosition: -5 }, risk: 0.25, stakeholderReactions: { DIGITAL_OPS_LEAD: 15, PLANT_DIRECTOR: 10, MAINTENANCE_MANAGER: 12 } },
      { id: 'B', text: 'Balanced scorecard across all operations', impact: { processMaturity: 10, employeeEngagement: 5, deliveryPerformance: 5 }, risk: 0.20, stakeholderReactions: { COO: 15, CONTINUOUS_IMPROVEMENT: 10, OPERATIONS_FINANCE: 8 } },
      { id: 'C', text: 'Real-time visual management dashboards', impact: { operationalEfficiency: 8, employeeEngagement: 8, processMaturity: 8 }, risk: 0.20, stakeholderReactions: { DIGITAL_OPS_LEAD: 18, PLANT_DIRECTOR: 12, UNION_REPRESENTATIVE: 5 } },
      { id: 'D', text: 'Daily management and tier board system', impact: { employeeEngagement: 12, processMaturity: 8, operationalEfficiency: 5 }, risk: 0.15, stakeholderReactions: { CONTINUOUS_IMPROVEMENT: 18, PLANT_DIRECTOR: 10, UNION_REPRESENTATIVE: 8 } },
      { id: 'E', text: 'Customer-centric metrics alignment', impact: { deliveryPerformance: 10, qualityScore: 5, processMaturity: 5 }, risk: 0.20, stakeholderReactions: { CUSTOMER_OPS: 18, COO: 10, SUPPLY_CHAIN_VP: 8 } },
      { id: 'F', text: 'AI-driven performance analytics', impact: { processMaturity: 10, operationalEfficiency: 10, costPosition: -8 }, risk: 0.40, stakeholderReactions: { DIGITAL_OPS_LEAD: 18, CONTINUOUS_IMPROVEMENT: 8, OPERATIONS_FINANCE: -10 } }
    ]
  },

  // Phase 2: Operational Improvement (Rounds 7-12)
  {
    id: 7,
    phase: 'OPERATIONAL_IMPROVEMENT',
    title: 'Lean Implementation Launch',
    scenario: 'Ready to launch formal lean program. Multiple methodologies and approaches available, but organization capacity is limited.',
    stakeholderFocus: ['CONTINUOUS_IMPROVEMENT', 'PLANT_DIRECTOR', 'COO'],
    options: [
      { id: 'A', text: 'Enterprise-wide lean transformation with external consultants', impact: { processMaturity: 15, operationalEfficiency: 10, costPosition: -12 }, risk: 0.40, stakeholderReactions: { CONTINUOUS_IMPROVEMENT: 15, COO: 12, OPERATIONS_FINANCE: -12 } },
      { id: 'B', text: 'Model line approach with internal capability building', impact: { processMaturity: 10, employeeEngagement: 12, operationalEfficiency: 8 }, risk: 0.25, stakeholderReactions: { CONTINUOUS_IMPROVEMENT: 18, PLANT_DIRECTOR: 15, UNION_REPRESENTATIVE: 10 } },
      { id: 'C', text: 'Kaizen blitz events focused on quick wins', impact: { operationalEfficiency: 10, employeeEngagement: 8, costPosition: 5 }, risk: 0.20, stakeholderReactions: { PLANT_DIRECTOR: 15, CONTINUOUS_IMPROVEMENT: 12, COO: 10 } },
      { id: 'D', text: 'Six Sigma quality-focused improvement program', impact: { qualityScore: 12, processMaturity: 10, employeeEngagement: -3 }, risk: 0.30, stakeholderReactions: { QUALITY_VP: 18, CONTINUOUS_IMPROVEMENT: 10, UNION_REPRESENTATIVE: -8 } },
      { id: 'E', text: 'Hybrid lean-digital transformation', impact: { operationalEfficiency: 12, processMaturity: 12, costPosition: -10 }, risk: 0.45, stakeholderReactions: { DIGITAL_OPS_LEAD: 15, CONTINUOUS_IMPROVEMENT: 10, OPERATIONS_FINANCE: -10 } },
      { id: 'F', text: 'Bottom-up improvement with suggestion system', impact: { employeeEngagement: 15, processMaturity: 5, operationalEfficiency: 5 }, risk: 0.15, stakeholderReactions: { UNION_REPRESENTATIVE: 18, PLANT_DIRECTOR: 10, COO: -5 } }
    ]
  },
  {
    id: 8,
    phase: 'OPERATIONAL_IMPROVEMENT',
    title: 'Supply Chain Optimization',
    scenario: 'Supply chain improvement program is ready to launch. Need to balance cost, resilience, and customer service objectives.',
    stakeholderFocus: ['SUPPLY_CHAIN_VP', 'LOGISTICS_DIRECTOR', 'CUSTOMER_OPS'],
    options: [
      { id: 'A', text: 'Network optimization and consolidation', impact: { costPosition: 12, supplychainResilience: -5, deliveryPerformance: 5 }, risk: 0.35, stakeholderReactions: { OPERATIONS_FINANCE: 15, LOGISTICS_DIRECTOR: 10, SUPPLY_CHAIN_VP: 8 } },
      { id: 'B', text: 'Demand-driven supply chain (DDMRP)', impact: { deliveryPerformance: 12, supplychainResilience: 10, costPosition: -5 }, risk: 0.30, stakeholderReactions: { SUPPLY_CHAIN_VP: 18, CUSTOMER_OPS: 15, LOGISTICS_DIRECTOR: 10 } },
      { id: 'C', text: 'Supplier development and integration program', impact: { qualityScore: 10, supplychainResilience: 12, costPosition: -3 }, risk: 0.25, stakeholderReactions: { KEY_SUPPLIER: 18, PROCUREMENT_HEAD: 12, QUALITY_VP: 10 } },
      { id: 'D', text: 'Warehouse automation and modernization', impact: { operationalEfficiency: 12, deliveryPerformance: 8, costPosition: -10 }, risk: 0.35, stakeholderReactions: { LOGISTICS_DIRECTOR: 15, DIGITAL_OPS_LEAD: 12, OPERATIONS_FINANCE: -8 } },
      { id: 'E', text: 'Transportation optimization and carrier partnerships', impact: { deliveryPerformance: 10, costPosition: 8, supplychainResilience: 5 }, risk: 0.20, stakeholderReactions: { LOGISTICS_DIRECTOR: 15, SUPPLY_CHAIN_VP: 10, CUSTOMER_OPS: 8 } },
      { id: 'F', text: 'Inventory optimization across network', impact: { costPosition: 10, deliveryPerformance: 5, supplychainResilience: 3 }, risk: 0.25, stakeholderReactions: { OPERATIONS_FINANCE: 15, LOGISTICS_DIRECTOR: 10, SUPPLY_CHAIN_VP: 8 } }
    ]
  },
  {
    id: 9,
    phase: 'OPERATIONAL_IMPROVEMENT',
    title: 'Quality Improvement Initiative',
    scenario: 'Quality improvement program needs to accelerate. Customer quality expectations are increasing and competitors are improving.',
    stakeholderFocus: ['QUALITY_VP', 'PLANT_DIRECTOR', 'CUSTOMER_OPS'],
    options: [
      { id: 'A', text: 'Zero defects program with aggressive targets', impact: { qualityScore: 15, employeeEngagement: -5, costPosition: -5 }, risk: 0.40, stakeholderReactions: { QUALITY_VP: 18, PLANT_DIRECTOR: -5, UNION_REPRESENTATIVE: -8 } },
      { id: 'B', text: 'Poka-yoke and error-proofing deployment', impact: { qualityScore: 12, operationalEfficiency: 5, processMaturity: 8 }, risk: 0.25, stakeholderReactions: { CONTINUOUS_IMPROVEMENT: 15, QUALITY_VP: 12, PLANT_DIRECTOR: 10 } },
      { id: 'C', text: 'Quality circles and team-based problem solving', impact: { qualityScore: 8, employeeEngagement: 15, processMaturity: 5 }, risk: 0.15, stakeholderReactions: { UNION_REPRESENTATIVE: 18, PLANT_DIRECTOR: 12, QUALITY_VP: 8 } },
      { id: 'D', text: 'Advanced quality planning (APQP) implementation', impact: { qualityScore: 10, processMaturity: 12, supplychainResilience: 5 }, risk: 0.30, stakeholderReactions: { QUALITY_VP: 15, PROCUREMENT_HEAD: 10, KEY_SUPPLIER: 8 } },
      { id: 'E', text: 'Customer quality partnership program', impact: { qualityScore: 10, deliveryPerformance: 8, employeeEngagement: 5 }, risk: 0.20, stakeholderReactions: { CUSTOMER_OPS: 18, QUALITY_VP: 12, PLANT_DIRECTOR: 8 } },
      { id: 'F', text: 'AI-powered quality inspection systems', impact: { qualityScore: 12, operationalEfficiency: 8, costPosition: -8 }, risk: 0.35, stakeholderReactions: { DIGITAL_OPS_LEAD: 18, QUALITY_VP: 12, OPERATIONS_FINANCE: -8 } }
    ]
  },
  {
    id: 10,
    phase: 'OPERATIONAL_IMPROVEMENT',
    title: 'Safety Excellence Program',
    scenario: 'Safety performance improvement is critical for both employee welfare and operational continuity. Regulatory requirements are tightening.',
    stakeholderFocus: ['SAFETY_DIRECTOR', 'PLANT_DIRECTOR', 'UNION_REPRESENTATIVE'],
    options: [
      { id: 'A', text: 'Behavior-based safety program', impact: { safetyRecord: 12, employeeEngagement: 8, processMaturity: 5 }, risk: 0.20, stakeholderReactions: { SAFETY_DIRECTOR: 18, PLANT_DIRECTOR: 10, UNION_REPRESENTATIVE: 12 } },
      { id: 'B', text: 'Engineering controls and safety technology investment', impact: { safetyRecord: 15, costPosition: -10, operationalEfficiency: 3 }, risk: 0.25, stakeholderReactions: { SAFETY_DIRECTOR: 15, DIGITAL_OPS_LEAD: 12, OPERATIONS_FINANCE: -10 } },
      { id: 'C', text: 'Safety leadership and accountability program', impact: { safetyRecord: 10, employeeEngagement: 10, processMaturity: 5 }, risk: 0.15, stakeholderReactions: { SAFETY_DIRECTOR: 15, COO: 12, PLANT_DIRECTOR: 10 } },
      { id: 'D', text: 'Near-miss reporting and proactive risk management', impact: { safetyRecord: 10, processMaturity: 8, employeeEngagement: 5 }, risk: 0.15, stakeholderReactions: { SAFETY_DIRECTOR: 15, CONTINUOUS_IMPROVEMENT: 10, UNION_REPRESENTATIVE: 10 } },
      { id: 'E', text: 'Safety incentive and recognition program', impact: { safetyRecord: 8, employeeEngagement: 12, costPosition: -3 }, risk: 0.20, stakeholderReactions: { UNION_REPRESENTATIVE: 15, PLANT_DIRECTOR: 10, SAFETY_DIRECTOR: 8 } },
      { id: 'F', text: 'Comprehensive ergonomics program', impact: { safetyRecord: 8, employeeEngagement: 10, operationalEfficiency: 5 }, risk: 0.15, stakeholderReactions: { UNION_REPRESENTATIVE: 18, SAFETY_DIRECTOR: 12, PLANT_DIRECTOR: 8 } }
    ]
  },
  {
    id: 11,
    phase: 'OPERATIONAL_IMPROVEMENT',
    title: 'Digital Operations Deployment',
    scenario: 'Industry 4.0 pilot results are promising. Decision needed on scaling digital operations technologies.',
    stakeholderFocus: ['DIGITAL_OPS_LEAD', 'COO', 'OPERATIONS_FINANCE'],
    options: [
      { id: 'A', text: 'Full smart factory transformation', impact: { operationalEfficiency: 15, processMaturity: 12, costPosition: -15 }, risk: 0.50, stakeholderReactions: { DIGITAL_OPS_LEAD: 18, COO: 10, OPERATIONS_FINANCE: -15 } },
      { id: 'B', text: 'Focused IoT deployment for critical assets', impact: { operationalEfficiency: 10, processMaturity: 8, costPosition: -5 }, risk: 0.30, stakeholderReactions: { DIGITAL_OPS_LEAD: 15, MAINTENANCE_MANAGER: 12, COO: 10 } },
      { id: 'C', text: 'Advanced analytics and AI for operations', impact: { processMaturity: 12, qualityScore: 8, operationalEfficiency: 8 }, risk: 0.40, stakeholderReactions: { DIGITAL_OPS_LEAD: 18, QUALITY_VP: 10, CONTINUOUS_IMPROVEMENT: 8 } },
      { id: 'D', text: 'Digital twin implementation for key processes', impact: { processMaturity: 10, operationalEfficiency: 10, costPosition: -8 }, risk: 0.35, stakeholderReactions: { DIGITAL_OPS_LEAD: 15, CONTINUOUS_IMPROVEMENT: 12, PLANT_DIRECTOR: 8 } },
      { id: 'E', text: 'Robotic process automation (RPA) for operations', impact: { operationalEfficiency: 10, costPosition: 5, employeeEngagement: -8 }, risk: 0.30, stakeholderReactions: { OPERATIONS_FINANCE: 15, DIGITAL_OPS_LEAD: 12, UNION_REPRESENTATIVE: -15 } },
      { id: 'F', text: 'Connected worker platforms', impact: { employeeEngagement: 10, safetyRecord: 8, operationalEfficiency: 5 }, risk: 0.25, stakeholderReactions: { DIGITAL_OPS_LEAD: 15, UNION_REPRESENTATIVE: 10, SAFETY_DIRECTOR: 12 } }
    ]
  },
  {
    id: 12,
    phase: 'OPERATIONAL_IMPROVEMENT',
    title: 'Cost Optimization Program',
    scenario: 'Cost pressures are mounting. Need structured approach to cost reduction while maintaining quality and capability.',
    stakeholderFocus: ['OPERATIONS_FINANCE', 'COO', 'PROCUREMENT_HEAD'],
    options: [
      { id: 'A', text: 'Strategic sourcing and spend optimization', impact: { costPosition: 15, supplychainResilience: -5, qualityScore: -3 }, risk: 0.30, stakeholderReactions: { PROCUREMENT_HEAD: 18, OPERATIONS_FINANCE: 15, KEY_SUPPLIER: -10 } },
      { id: 'B', text: 'Energy and utility management program', impact: { costPosition: 10, operationalEfficiency: 5, safetyRecord: 3 }, risk: 0.15, stakeholderReactions: { OPERATIONS_FINANCE: 15, MAINTENANCE_MANAGER: 10, SAFETY_DIRECTOR: 8 } },
      { id: 'C', text: 'Waste reduction and yield improvement', impact: { costPosition: 12, qualityScore: 8, processMaturity: 5 }, risk: 0.20, stakeholderReactions: { CONTINUOUS_IMPROVEMENT: 18, OPERATIONS_FINANCE: 12, QUALITY_VP: 10 } },
      { id: 'D', text: 'Workforce productivity improvement', impact: { costPosition: 10, operationalEfficiency: 10, employeeEngagement: -8 }, risk: 0.35, stakeholderReactions: { OPERATIONS_FINANCE: 15, COO: 12, UNION_REPRESENTATIVE: -15 } },
      { id: 'E', text: 'Overhead and indirect cost reduction', impact: { costPosition: 8, operationalEfficiency: 3, employeeEngagement: -5 }, risk: 0.25, stakeholderReactions: { OPERATIONS_FINANCE: 15, COO: 10, PLANT_DIRECTOR: -5 } },
      { id: 'F', text: 'Value engineering and design cost-out', impact: { costPosition: 10, qualityScore: 3, processMaturity: 5 }, risk: 0.30, stakeholderReactions: { OPERATIONS_FINANCE: 12, QUALITY_VP: 8, CONTINUOUS_IMPROVEMENT: 10 } }
    ]
  },

  // Phase 3: Operational Challenges (Rounds 13-18)
  {
    id: 13,
    phase: 'OPERATIONAL_CHALLENGES',
    title: 'Major Equipment Failure',
    scenario: 'Critical production equipment has failed catastrophically. Repair will take weeks, affecting customer commitments and production targets.',
    stakeholderFocus: ['MAINTENANCE_MANAGER', 'PLANT_DIRECTOR', 'CUSTOMER_OPS'],
    options: [
      { id: 'A', text: 'Emergency equipment replacement', impact: { deliveryPerformance: 8, costPosition: -15, operationalEfficiency: 5 }, risk: 0.35, stakeholderReactions: { CUSTOMER_OPS: 15, OPERATIONS_FINANCE: -15, MAINTENANCE_MANAGER: 10 } },
      { id: 'B', text: 'Redistribute production across network', impact: { deliveryPerformance: 5, costPosition: -8, supplychainResilience: 5 }, risk: 0.30, stakeholderReactions: { SUPPLY_CHAIN_VP: 15, LOGISTICS_DIRECTOR: 12, PLANT_DIRECTOR: -5 } },
      { id: 'C', text: 'Customer communication and order rescheduling', impact: { deliveryPerformance: -5, costPosition: 5, qualityScore: 3 }, risk: 0.25, stakeholderReactions: { CUSTOMER_OPS: -10, QUALITY_VP: 10, COO: 5 } },
      { id: 'D', text: 'Outsource production temporarily', impact: { deliveryPerformance: 8, qualityScore: -8, costPosition: -10 }, risk: 0.40, stakeholderReactions: { CUSTOMER_OPS: 12, QUALITY_VP: -15, OPERATIONS_FINANCE: -8 } },
      { id: 'E', text: 'Accelerated repair with premium resources', impact: { operationalEfficiency: 5, costPosition: -10, deliveryPerformance: 3 }, risk: 0.30, stakeholderReactions: { MAINTENANCE_MANAGER: 15, OPERATIONS_FINANCE: -12, PLANT_DIRECTOR: 8 } },
      { id: 'F', text: 'Work around with alternative processes', impact: { operationalEfficiency: -5, deliveryPerformance: 5, employeeEngagement: 8 }, risk: 0.35, stakeholderReactions: { PLANT_DIRECTOR: 15, UNION_REPRESENTATIVE: 10, QUALITY_VP: -5 } }
    ]
  },
  {
    id: 14,
    phase: 'OPERATIONAL_CHALLENGES',
    title: 'Supplier Quality Crisis',
    scenario: 'Major supplier quality failure has caused production line stoppage and potential customer recalls. Root cause still being investigated.',
    stakeholderFocus: ['QUALITY_VP', 'PROCUREMENT_HEAD', 'KEY_SUPPLIER'],
    options: [
      { id: 'A', text: 'Immediate supplier replacement', impact: { supplychainResilience: -8, qualityScore: 5, costPosition: -10 }, risk: 0.45, stakeholderReactions: { PROCUREMENT_HEAD: 10, KEY_SUPPLIER: -20, QUALITY_VP: 12 } },
      { id: 'B', text: 'Joint supplier improvement program', impact: { qualityScore: 10, supplychainResilience: 8, costPosition: -5 }, risk: 0.30, stakeholderReactions: { KEY_SUPPLIER: 15, QUALITY_VP: 12, PROCUREMENT_HEAD: 8 } },
      { id: 'C', text: 'Enhanced incoming inspection (short-term)', impact: { qualityScore: 8, costPosition: -5, deliveryPerformance: -3 }, risk: 0.20, stakeholderReactions: { QUALITY_VP: 15, CUSTOMER_OPS: -5, OPERATIONS_FINANCE: -5 } },
      { id: 'D', text: 'In-source critical component production', impact: { supplychainResilience: 12, costPosition: -15, qualityScore: 5 }, risk: 0.50, stakeholderReactions: { SUPPLY_CHAIN_VP: 10, KEY_SUPPLIER: -15, OPERATIONS_FINANCE: -12 } },
      { id: 'E', text: 'Customer notification and recall management', impact: { deliveryPerformance: -10, qualityScore: -5, costPosition: -12 }, risk: 0.35, stakeholderReactions: { CUSTOMER_OPS: -8, REGULATORY_LIAISON: 15, QUALITY_VP: 5 } },
      { id: 'F', text: 'Quality containment and sorted inspection', impact: { qualityScore: 5, deliveryPerformance: -5, costPosition: -8 }, risk: 0.25, stakeholderReactions: { QUALITY_VP: 10, PLANT_DIRECTOR: 8, CUSTOMER_OPS: -5 } }
    ]
  },
  {
    id: 15,
    phase: 'OPERATIONAL_CHALLENGES',
    title: 'Labor Relations Crisis',
    scenario: 'Contract negotiations have broken down. Work slowdown is affecting productivity and there are threats of strike action.',
    stakeholderFocus: ['UNION_REPRESENTATIVE', 'PLANT_DIRECTOR', 'COO'],
    options: [
      { id: 'A', text: 'Negotiate compromise with enhanced benefits', impact: { employeeEngagement: 15, costPosition: -10, operationalEfficiency: 8 }, risk: 0.30, stakeholderReactions: { UNION_REPRESENTATIVE: 18, PLANT_DIRECTOR: 10, OPERATIONS_FINANCE: -12 } },
      { id: 'B', text: 'Firm stance with contingency planning', impact: { costPosition: 5, employeeEngagement: -15, operationalEfficiency: -10 }, risk: 0.50, stakeholderReactions: { OPERATIONS_FINANCE: 12, UNION_REPRESENTATIVE: -20, PLANT_DIRECTOR: -5 } },
      { id: 'C', text: 'Mediation with neutral third party', impact: { employeeEngagement: 8, operationalEfficiency: 5, processMaturity: 3 }, risk: 0.25, stakeholderReactions: { UNION_REPRESENTATIVE: 10, COO: 12, PLANT_DIRECTOR: 8 } },
      { id: 'D', text: 'Gainsharing program proposal', impact: { employeeEngagement: 12, operationalEfficiency: 10, costPosition: -5 }, risk: 0.30, stakeholderReactions: { UNION_REPRESENTATIVE: 15, CONTINUOUS_IMPROVEMENT: 12, OPERATIONS_FINANCE: -8 } },
      { id: 'E', text: 'Transparency and open communication campaign', impact: { employeeEngagement: 10, processMaturity: 5, safetyRecord: 3 }, risk: 0.20, stakeholderReactions: { PLANT_DIRECTOR: 15, UNION_REPRESENTATIVE: 8, COO: 10 } },
      { id: 'F', text: 'Leadership change and fresh start approach', impact: { employeeEngagement: 5, processMaturity: -5, operationalEfficiency: 3 }, risk: 0.40, stakeholderReactions: { COO: 10, UNION_REPRESENTATIVE: -5, PLANT_DIRECTOR: -10 } }
    ]
  },
  {
    id: 16,
    phase: 'OPERATIONAL_CHALLENGES',
    title: 'Regulatory Compliance Issue',
    scenario: 'Regulatory audit has identified compliance gaps. Potential for fines, production restrictions, or license revocation.',
    stakeholderFocus: ['REGULATORY_LIAISON', 'QUALITY_VP', 'SAFETY_DIRECTOR'],
    options: [
      { id: 'A', text: 'Immediate full compliance program', impact: { processMaturity: 12, safetyRecord: 10, costPosition: -10 }, risk: 0.25, stakeholderReactions: { REGULATORY_LIAISON: 18, SAFETY_DIRECTOR: 15, OPERATIONS_FINANCE: -10 } },
      { id: 'B', text: 'Negotiate compliance timeline with regulators', impact: { processMaturity: 5, costPosition: -3, safetyRecord: 3 }, risk: 0.30, stakeholderReactions: { REGULATORY_LIAISON: 10, COO: 12, SAFETY_DIRECTOR: -5 } },
      { id: 'C', text: 'Third-party audit and certification', impact: { processMaturity: 8, qualityScore: 8, costPosition: -5 }, risk: 0.20, stakeholderReactions: { QUALITY_VP: 15, REGULATORY_LIAISON: 12, COO: 8 } },
      { id: 'D', text: 'Production modification to meet requirements', impact: { operationalEfficiency: -8, qualityScore: 8, safetyRecord: 10 }, risk: 0.35, stakeholderReactions: { SAFETY_DIRECTOR: 15, PLANT_DIRECTOR: -8, REGULATORY_LIAISON: 10 } },
      { id: 'E', text: 'Management system overhaul', impact: { processMaturity: 15, qualityScore: 5, costPosition: -8 }, risk: 0.35, stakeholderReactions: { QUALITY_VP: 15, CONTINUOUS_IMPROVEMENT: 12, REGULATORY_LIAISON: 10 } },
      { id: 'F', text: 'Industry coalition for regulatory dialogue', impact: { processMaturity: 3, costPosition: 3, operationalEfficiency: -3 }, risk: 0.25, stakeholderReactions: { REGULATORY_LIAISON: 8, COO: 10, SAFETY_DIRECTOR: -5 } }
    ]
  },
  {
    id: 17,
    phase: 'OPERATIONAL_CHALLENGES',
    title: 'Supply Chain Disruption',
    scenario: 'Major global disruption affecting multiple suppliers. Raw material costs spiking and lead times extending significantly.',
    stakeholderFocus: ['SUPPLY_CHAIN_VP', 'PROCUREMENT_HEAD', 'LOGISTICS_DIRECTOR'],
    options: [
      { id: 'A', text: 'Activate alternative supplier network', impact: { supplychainResilience: 12, costPosition: -10, qualityScore: -5 }, risk: 0.35, stakeholderReactions: { SUPPLY_CHAIN_VP: 15, KEY_SUPPLIER: -10, QUALITY_VP: -8 } },
      { id: 'B', text: 'Strategic inventory build despite costs', impact: { supplychainResilience: 10, deliveryPerformance: 8, costPosition: -15 }, risk: 0.30, stakeholderReactions: { LOGISTICS_DIRECTOR: 15, CUSTOMER_OPS: 12, OPERATIONS_FINANCE: -15 } },
      { id: 'C', text: 'Product redesign for material substitution', impact: { supplychainResilience: 8, qualityScore: -5, costPosition: 5 }, risk: 0.40, stakeholderReactions: { QUALITY_VP: -8, SUPPLY_CHAIN_VP: 12, CUSTOMER_OPS: -5 } },
      { id: 'D', text: 'Collaborative planning with key suppliers', impact: { supplychainResilience: 10, costPosition: -5, deliveryPerformance: 5 }, risk: 0.25, stakeholderReactions: { KEY_SUPPLIER: 18, SUPPLY_CHAIN_VP: 12, PROCUREMENT_HEAD: 8 } },
      { id: 'E', text: 'Customer allocation and priority management', impact: { deliveryPerformance: -5, costPosition: 5, supplychainResilience: 3 }, risk: 0.30, stakeholderReactions: { CUSTOMER_OPS: -12, SUPPLY_CHAIN_VP: 10, COO: 8 } },
      { id: 'F', text: 'Vertical integration of critical inputs', impact: { supplychainResilience: 15, costPosition: -20, operationalEfficiency: -5 }, risk: 0.50, stakeholderReactions: { SUPPLY_CHAIN_VP: 10, OPERATIONS_FINANCE: -18, KEY_SUPPLIER: -15 } }
    ]
  },
  {
    id: 18,
    phase: 'OPERATIONAL_CHALLENGES',
    title: 'Technology System Failure',
    scenario: 'Critical operations technology system has failed. Manual workarounds are limiting productivity and data integrity is at risk.',
    stakeholderFocus: ['DIGITAL_OPS_LEAD', 'PLANT_DIRECTOR', 'COO'],
    options: [
      { id: 'A', text: 'Emergency system replacement', impact: { processMaturity: 8, costPosition: -15, operationalEfficiency: 5 }, risk: 0.40, stakeholderReactions: { DIGITAL_OPS_LEAD: 15, OPERATIONS_FINANCE: -15, COO: 8 } },
      { id: 'B', text: 'Manual operations with enhanced procedures', impact: { operationalEfficiency: -10, employeeEngagement: 5, qualityScore: -5 }, risk: 0.35, stakeholderReactions: { PLANT_DIRECTOR: 10, UNION_REPRESENTATIVE: 12, QUALITY_VP: -8 } },
      { id: 'C', text: 'Phased system recovery and upgrade', impact: { processMaturity: 10, operationalEfficiency: 3, costPosition: -8 }, risk: 0.30, stakeholderReactions: { DIGITAL_OPS_LEAD: 12, COO: 10, OPERATIONS_FINANCE: -5 } },
      { id: 'D', text: 'Cloud migration for resilience', impact: { supplychainResilience: 10, processMaturity: 12, costPosition: -10 }, risk: 0.40, stakeholderReactions: { DIGITAL_OPS_LEAD: 18, SUPPLY_CHAIN_VP: 10, OPERATIONS_FINANCE: -8 } },
      { id: 'E', text: 'Hybrid system with backup capability', impact: { supplychainResilience: 8, processMaturity: 5, costPosition: -5 }, risk: 0.25, stakeholderReactions: { DIGITAL_OPS_LEAD: 10, COO: 12, PLANT_DIRECTOR: 8 } },
      { id: 'F', text: 'Business continuity plan activation', impact: { deliveryPerformance: -5, operationalEfficiency: -3, processMaturity: 5 }, risk: 0.20, stakeholderReactions: { COO: 15, PLANT_DIRECTOR: 10, CUSTOMER_OPS: -5 } }
    ]
  },

  // Phase 4: Operational Excellence (Rounds 19-24)
  {
    id: 19,
    phase: 'OPERATIONAL_EXCELLENCE',
    title: 'Excellence Program Consolidation',
    scenario: 'Multiple improvement initiatives need consolidation into sustainable excellence program. Resource allocation decisions required.',
    stakeholderFocus: ['COO', 'CONTINUOUS_IMPROVEMENT', 'OPERATIONS_FINANCE'],
    options: [
      { id: 'A', text: 'Integrated operations excellence system', impact: { processMaturity: 15, operationalEfficiency: 10, costPosition: -5 }, risk: 0.30, stakeholderReactions: { CONTINUOUS_IMPROVEMENT: 18, COO: 15, QUALITY_VP: 12 } },
      { id: 'B', text: 'Center of excellence model', impact: { processMaturity: 12, employeeEngagement: 8, operationalEfficiency: 5 }, risk: 0.25, stakeholderReactions: { CONTINUOUS_IMPROVEMENT: 15, PLANT_DIRECTOR: 10, COO: 12 } },
      { id: 'C', text: 'Decentralized excellence with standards', impact: { operationalEfficiency: 10, employeeEngagement: 12, processMaturity: 5 }, risk: 0.25, stakeholderReactions: { PLANT_DIRECTOR: 18, UNION_REPRESENTATIVE: 10, CONTINUOUS_IMPROVEMENT: 8 } },
      { id: 'D', text: 'Digital excellence platform', impact: { processMaturity: 12, operationalEfficiency: 12, costPosition: -10 }, risk: 0.40, stakeholderReactions: { DIGITAL_OPS_LEAD: 18, CONTINUOUS_IMPROVEMENT: 12, OPERATIONS_FINANCE: -10 } },
      { id: 'E', text: 'Industry-leading certification pursuit', impact: { qualityScore: 12, processMaturity: 10, costPosition: -5 }, risk: 0.30, stakeholderReactions: { QUALITY_VP: 18, REGULATORY_LIAISON: 12, COO: 10 } },
      { id: 'F', text: 'Customer-aligned excellence metrics', impact: { deliveryPerformance: 12, qualityScore: 8, operationalEfficiency: 5 }, risk: 0.20, stakeholderReactions: { CUSTOMER_OPS: 18, COO: 12, QUALITY_VP: 10 } }
    ]
  },
  {
    id: 20,
    phase: 'OPERATIONAL_EXCELLENCE',
    title: 'Supply Chain Excellence',
    scenario: 'Supply chain has matured significantly. Time to build world-class capabilities and sustainable competitive advantage.',
    stakeholderFocus: ['SUPPLY_CHAIN_VP', 'KEY_SUPPLIER', 'LOGISTICS_DIRECTOR'],
    options: [
      { id: 'A', text: 'End-to-end supply chain integration', impact: { supplychainResilience: 15, deliveryPerformance: 12, costPosition: -8 }, risk: 0.35, stakeholderReactions: { SUPPLY_CHAIN_VP: 18, KEY_SUPPLIER: 15, DIGITAL_OPS_LEAD: 10 } },
      { id: 'B', text: 'Strategic supplier partnership program', impact: { supplychainResilience: 12, qualityScore: 10, costPosition: -3 }, risk: 0.25, stakeholderReactions: { KEY_SUPPLIER: 18, PROCUREMENT_HEAD: 12, QUALITY_VP: 10 } },
      { id: 'C', text: 'Supply chain analytics and AI deployment', impact: { processMaturity: 12, supplychainResilience: 10, costPosition: -8 }, risk: 0.40, stakeholderReactions: { DIGITAL_OPS_LEAD: 18, SUPPLY_CHAIN_VP: 12, OPERATIONS_FINANCE: -8 } },
      { id: 'D', text: 'Sustainable supply chain transformation', impact: { supplychainResilience: 10, qualityScore: 5, employeeEngagement: 8 }, risk: 0.30, stakeholderReactions: { SUPPLY_CHAIN_VP: 12, REGULATORY_LIAISON: 15, KEY_SUPPLIER: 8 } },
      { id: 'E', text: 'Agile and responsive supply network', impact: { deliveryPerformance: 15, supplychainResilience: 8, costPosition: -5 }, risk: 0.35, stakeholderReactions: { CUSTOMER_OPS: 18, SUPPLY_CHAIN_VP: 12, LOGISTICS_DIRECTOR: 15 } },
      { id: 'F', text: 'Cost leadership through supply excellence', impact: { costPosition: 15, supplychainResilience: 5, qualityScore: -3 }, risk: 0.30, stakeholderReactions: { PROCUREMENT_HEAD: 18, OPERATIONS_FINANCE: 15, QUALITY_VP: -8 } }
    ]
  },
  {
    id: 21,
    phase: 'OPERATIONAL_EXCELLENCE',
    title: 'Quality Leadership Position',
    scenario: 'Quality performance has improved significantly. Opportunity to establish quality leadership position in the industry.',
    stakeholderFocus: ['QUALITY_VP', 'CUSTOMER_OPS', 'REGULATORY_LIAISON'],
    options: [
      { id: 'A', text: 'World-class quality certification and recognition', impact: { qualityScore: 15, processMaturity: 10, costPosition: -5 }, risk: 0.25, stakeholderReactions: { QUALITY_VP: 18, REGULATORY_LIAISON: 15, COO: 12 } },
      { id: 'B', text: 'Quality as competitive differentiation strategy', impact: { qualityScore: 12, deliveryPerformance: 8, costPosition: 5 }, risk: 0.25, stakeholderReactions: { CUSTOMER_OPS: 18, QUALITY_VP: 15, COO: 10 } },
      { id: 'C', text: 'Zero defect culture institutionalization', impact: { qualityScore: 12, employeeEngagement: 10, processMaturity: 8 }, risk: 0.30, stakeholderReactions: { QUALITY_VP: 15, CONTINUOUS_IMPROVEMENT: 15, PLANT_DIRECTOR: 10 } },
      { id: 'D', text: 'Customer quality partnership expansion', impact: { qualityScore: 10, deliveryPerformance: 10, employeeEngagement: 5 }, risk: 0.20, stakeholderReactions: { CUSTOMER_OPS: 18, QUALITY_VP: 12, KEY_SUPPLIER: 8 } },
      { id: 'E', text: 'Quality innovation and R&D investment', impact: { qualityScore: 10, processMaturity: 12, costPosition: -8 }, risk: 0.35, stakeholderReactions: { QUALITY_VP: 15, DIGITAL_OPS_LEAD: 12, CONTINUOUS_IMPROVEMENT: 10 } },
      { id: 'F', text: 'Quality knowledge sharing and industry leadership', impact: { qualityScore: 8, processMaturity: 8, employeeEngagement: 8 }, risk: 0.20, stakeholderReactions: { QUALITY_VP: 12, REGULATORY_LIAISON: 10, CONTINUOUS_IMPROVEMENT: 12 } }
    ]
  },
  {
    id: 22,
    phase: 'OPERATIONAL_EXCELLENCE',
    title: 'Workforce Excellence',
    scenario: 'Operations workforce has developed significantly. Build sustainable people excellence for long-term competitive advantage.',
    stakeholderFocus: ['PLANT_DIRECTOR', 'UNION_REPRESENTATIVE', 'CONTINUOUS_IMPROVEMENT'],
    options: [
      { id: 'A', text: 'High-performance work system implementation', impact: { employeeEngagement: 15, operationalEfficiency: 12, processMaturity: 8 }, risk: 0.30, stakeholderReactions: { PLANT_DIRECTOR: 18, CONTINUOUS_IMPROVEMENT: 15, UNION_REPRESENTATIVE: 10 } },
      { id: 'B', text: 'Autonomous team structure rollout', impact: { employeeEngagement: 12, operationalEfficiency: 10, qualityScore: 5 }, risk: 0.35, stakeholderReactions: { CONTINUOUS_IMPROVEMENT: 18, UNION_REPRESENTATIVE: 12, PLANT_DIRECTOR: 10 } },
      { id: 'C', text: 'Skills-based career development paths', impact: { employeeEngagement: 12, processMaturity: 8, operationalEfficiency: 5 }, risk: 0.20, stakeholderReactions: { UNION_REPRESENTATIVE: 18, PLANT_DIRECTOR: 12, CONTINUOUS_IMPROVEMENT: 10 } },
      { id: 'D', text: 'Knowledge management and learning organization', impact: { processMaturity: 12, employeeEngagement: 10, qualityScore: 5 }, risk: 0.25, stakeholderReactions: { CONTINUOUS_IMPROVEMENT: 15, QUALITY_VP: 12, PLANT_DIRECTOR: 10 } },
      { id: 'E', text: 'Employee ownership and engagement programs', impact: { employeeEngagement: 15, safetyRecord: 8, costPosition: -5 }, risk: 0.25, stakeholderReactions: { UNION_REPRESENTATIVE: 18, PLANT_DIRECTOR: 15, OPERATIONS_FINANCE: -8 } },
      { id: 'F', text: 'Next-generation workforce preparation', impact: { employeeEngagement: 8, processMaturity: 10, operationalEfficiency: 5 }, risk: 0.30, stakeholderReactions: { DIGITAL_OPS_LEAD: 15, CONTINUOUS_IMPROVEMENT: 12, UNION_REPRESENTATIVE: 8 } }
    ]
  },
  {
    id: 23,
    phase: 'OPERATIONAL_EXCELLENCE',
    title: 'Technology and Innovation Leadership',
    scenario: 'Digital operations maturity enables innovation leadership. Define technology strategy for sustainable advantage.',
    stakeholderFocus: ['DIGITAL_OPS_LEAD', 'COO', 'CONTINUOUS_IMPROVEMENT'],
    options: [
      { id: 'A', text: 'Industry 4.0 leadership position', impact: { processMaturity: 15, operationalEfficiency: 12, costPosition: -10 }, risk: 0.40, stakeholderReactions: { DIGITAL_OPS_LEAD: 18, COO: 12, OPERATIONS_FINANCE: -10 } },
      { id: 'B', text: 'Operations innovation lab establishment', impact: { processMaturity: 10, operationalEfficiency: 8, employeeEngagement: 8 }, risk: 0.30, stakeholderReactions: { DIGITAL_OPS_LEAD: 15, CONTINUOUS_IMPROVEMENT: 15, PLANT_DIRECTOR: 8 } },
      { id: 'C', text: 'AI and machine learning operations deployment', impact: { operationalEfficiency: 15, qualityScore: 10, costPosition: -8 }, risk: 0.45, stakeholderReactions: { DIGITAL_OPS_LEAD: 18, QUALITY_VP: 12, CONTINUOUS_IMPROVEMENT: 10 } },
      { id: 'D', text: 'Sustainable technology transformation', impact: { processMaturity: 10, employeeEngagement: 8, costPosition: -5 }, risk: 0.30, stakeholderReactions: { DIGITAL_OPS_LEAD: 12, REGULATORY_LIAISON: 10, SUPPLY_CHAIN_VP: 8 } },
      { id: 'E', text: 'Technology partnership ecosystem', impact: { processMaturity: 8, supplychainResilience: 8, operationalEfficiency: 5 }, risk: 0.25, stakeholderReactions: { DIGITAL_OPS_LEAD: 12, SUPPLY_CHAIN_VP: 10, KEY_SUPPLIER: 10 } },
      { id: 'F', text: 'Pragmatic technology adoption approach', impact: { costPosition: 8, operationalEfficiency: 8, processMaturity: 5 }, risk: 0.20, stakeholderReactions: { OPERATIONS_FINANCE: 15, COO: 12, PLANT_DIRECTOR: 10 } }
    ]
  },
  {
    id: 24,
    phase: 'OPERATIONAL_EXCELLENCE',
    title: 'Sustainable Excellence Legacy',
    scenario: 'Final strategic decisions will define the lasting impact of the operations transformation. Balance current performance with long-term sustainability.',
    stakeholderFocus: ['COO', 'CONTINUOUS_IMPROVEMENT', 'QUALITY_VP'],
    options: [
      { id: 'A', text: 'World-class operations benchmark achievement', impact: { operationalEfficiency: 15, qualityScore: 12, processMaturity: 10 }, risk: 0.35, stakeholderReactions: { COO: 18, CONTINUOUS_IMPROVEMENT: 15, QUALITY_VP: 15 } },
      { id: 'B', text: 'Sustainable operations leadership', impact: { processMaturity: 12, employeeEngagement: 12, safetyRecord: 10 }, risk: 0.25, stakeholderReactions: { REGULATORY_LIAISON: 15, SAFETY_DIRECTOR: 15, CONTINUOUS_IMPROVEMENT: 12 } },
      { id: 'C', text: 'Cost leadership through operational excellence', impact: { costPosition: 15, operationalEfficiency: 12, qualityScore: 5 }, risk: 0.30, stakeholderReactions: { OPERATIONS_FINANCE: 18, COO: 15, PROCUREMENT_HEAD: 12 } },
      { id: 'D', text: 'Customer excellence focus', impact: { deliveryPerformance: 15, qualityScore: 12, supplychainResilience: 8 }, risk: 0.25, stakeholderReactions: { CUSTOMER_OPS: 18, SUPPLY_CHAIN_VP: 15, QUALITY_VP: 12 } },
      { id: 'E', text: 'People and culture excellence', impact: { employeeEngagement: 15, safetyRecord: 12, processMaturity: 8 }, risk: 0.20, stakeholderReactions: { UNION_REPRESENTATIVE: 18, PLANT_DIRECTOR: 15, SAFETY_DIRECTOR: 15 } },
      { id: 'F', text: 'Balanced excellence across all dimensions', impact: { operationalEfficiency: 10, qualityScore: 10, employeeEngagement: 10 }, risk: 0.20, stakeholderReactions: { COO: 15, CONTINUOUS_IMPROVEMENT: 12, QUALITY_VP: 10 } }
    ]
  }
];

export const PHASE_DESCRIPTIONS = {
  OPERATIONAL_ASSESSMENT: {
    name: 'Operational Assessment',
    description: 'Evaluate current operations state and identify improvement opportunities',
    rounds: [1, 2, 3, 4, 5, 6]
  },
  OPERATIONAL_IMPROVEMENT: {
    name: 'Operational Improvement',
    description: 'Implement systematic improvement programs across operations',
    rounds: [7, 8, 9, 10, 11, 12]
  },
  OPERATIONAL_CHALLENGES: {
    name: 'Operational Challenges',
    description: 'Navigate operational disruptions and crises',
    rounds: [13, 14, 15, 16, 17, 18]
  },
  OPERATIONAL_EXCELLENCE: {
    name: 'Operational Excellence',
    description: 'Achieve and sustain world-class operational performance',
    rounds: [19, 20, 21, 22, 23, 24]
  }
};

export const getRoundById = (id) => ROUNDS.find(r => r.id === id);
export const getRoundsByPhase = (phase) => ROUNDS.filter(r => r.phase === phase);
export const getAllRounds = () => ROUNDS;
