// Metamorphosis Simulation Rounds
// 24 rounds across 4 phases with 6 options each

export const ROUNDS = [
  // Phase 1: Envision (Rounds 1-6)
  {
    id: 1,
    phase: 'ENVISION',
    title: 'Transformation Imperative',
    scenario: 'The case for transformation is clear but not everyone sees it. Building shared understanding of why change is needed is the first step.',
    stakeholderFocus: ['CEO', 'TRANSFORM_LEAD', 'BOARD_MEMBER'],
    options: [
      { id: 'A', text: 'Compelling burning platform narrative and data', impact: { changeReadiness: 15, stakeholderBuyIn: 10, transformationProgress: 5 }, risk: 0.25, stakeholderReactions: { CEO: 18, TRANSFORM_LEAD: 15, BOARD_MEMBER: 12 } },
      { id: 'B', text: 'Future vision with inspiring possibilities', impact: { stakeholderBuyIn: 15, changeReadiness: 8, culturalShift: 5 }, risk: 0.25, stakeholderReactions: { CEO: 18, CHANGE_CHAMPION: 15, CTO: 12 } },
      { id: 'C', text: 'External benchmarking and competitive pressure', impact: { changeReadiness: 12, transformationProgress: 8, stakeholderBuyIn: 3 }, risk: 0.25, stakeholderReactions: { BOARD_MEMBER: 15, CFO: 12, EXTERNAL_ADVISOR: 10 } },
      { id: 'D', text: 'Employee engagement in defining the why', impact: { stakeholderBuyIn: 12, culturalShift: 10, resistanceManagement: 8 }, risk: 0.25, stakeholderReactions: { CHANGE_CHAMPION: 18, CHRO: 15, MIDDLE_MANAGER: 10 } },
      { id: 'E', text: 'Customer and market insight driven case', impact: { changeReadiness: 12, valueCapture: 10, stakeholderBuyIn: 5 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 18, CEO: 12, BUSINESS_UNIT_HEAD: 8 } },
      { id: 'F', text: 'Executive alignment sessions before broader rollout', impact: { stakeholderBuyIn: 10, changeReadiness: 8, executionMomentum: -3 }, risk: 0.20, stakeholderReactions: { COO: 15, CFO: 12, BUSINESS_UNIT_HEAD: 10 } }
    ]
  },
  {
    id: 2,
    phase: 'ENVISION',
    title: 'Vision Definition',
    scenario: 'What does success look like? The transformation vision must be clear, compelling, and achievable. Defining the destination is critical.',
    stakeholderFocus: ['CEO', 'TRANSFORM_LEAD', 'CTO'],
    options: [
      { id: 'A', text: 'Bold transformational vision with stretch goals', impact: { transformationProgress: 15, stakeholderBuyIn: 8, executionMomentum: -5 }, risk: 0.35, stakeholderReactions: { CEO: 18, TRANSFORM_LEAD: 15, CFO: -8 } },
      { id: 'B', text: 'Pragmatic vision with clear milestones', impact: { executionMomentum: 12, transformationProgress: 10, changeReadiness: 8 }, risk: 0.20, stakeholderReactions: { CFO: 18, COO: 15, BOARD_MEMBER: 12 } },
      { id: 'C', text: 'Co-created vision with broad stakeholder input', impact: { stakeholderBuyIn: 15, culturalShift: 10, executionMomentum: -5 }, risk: 0.25, stakeholderReactions: { CHANGE_CHAMPION: 18, CHRO: 15, MIDDLE_MANAGER: 12 } },
      { id: 'D', text: 'Technology-led transformation vision', impact: { capabilityBuilding: 15, transformationProgress: 10, culturalShift: -3 }, risk: 0.30, stakeholderReactions: { CTO: 20, IT_HEAD: 15, BUSINESS_UNIT_HEAD: -5 } },
      { id: 'E', text: 'Customer-centric transformation vision', impact: { valueCapture: 15, stakeholderBuyIn: 10, transformationProgress: 5 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 18, CEO: 15, COO: 10 } },
      { id: 'F', text: 'Culture-first transformation vision', impact: { culturalShift: 15, stakeholderBuyIn: 10, transformationProgress: -3 }, risk: 0.30, stakeholderReactions: { CHRO: 20, CHANGE_CHAMPION: 15, CFO: -8 } }
    ]
  },
  {
    id: 3,
    phase: 'ENVISION',
    title: 'Leadership Alignment',
    scenario: 'Leaders must be aligned before transformation can succeed. Executive team unity is essential. Visible disagreements will undermine change.',
    stakeholderFocus: ['CEO', 'CFO', 'COO'],
    options: [
      { id: 'A', text: 'Executive offsite for alignment and commitment', impact: { stakeholderBuyIn: 15, executionMomentum: 10, changeReadiness: 8 }, risk: 0.25, stakeholderReactions: { CEO: 18, COO: 15, CFO: 12 } },
      { id: 'B', text: 'Individual executive coaching and alignment', impact: { stakeholderBuyIn: 12, resistanceManagement: 10, executionMomentum: -3 }, risk: 0.25, stakeholderReactions: { CFO: 15, BUSINESS_UNIT_HEAD: 12, COO: 10 } },
      { id: 'C', text: 'Clear executive accountabilities and incentives', impact: { executionMomentum: 15, stakeholderBuyIn: 8, valueCapture: 5 }, risk: 0.30, stakeholderReactions: { BOARD_MEMBER: 15, CEO: 12, CFO: 10 } },
      { id: 'D', text: 'Address leadership team skeptics directly', impact: { stakeholderBuyIn: 12, resistanceManagement: 12, culturalShift: -5 }, risk: 0.35, stakeholderReactions: { CEO: 15, BUSINESS_UNIT_HEAD: -10, TRANSFORM_LEAD: 10 } },
      { id: 'E', text: 'External perspective and benchmarking for leaders', impact: { changeReadiness: 12, stakeholderBuyIn: 10, capabilityBuilding: 5 }, risk: 0.25, stakeholderReactions: { EXTERNAL_ADVISOR: 18, BOARD_MEMBER: 12, CFO: 8 } },
      { id: 'F', text: 'Leadership modeling of transformation behaviors', impact: { culturalShift: 15, stakeholderBuyIn: 10, changeReadiness: 8 }, risk: 0.25, stakeholderReactions: { CHANGE_CHAMPION: 18, CHRO: 15, CEO: 12 } }
    ]
  },
  {
    id: 4,
    phase: 'ENVISION',
    title: 'Transformation Design',
    scenario: 'How will transformation happen? Design choices about scope, speed, and approach will shape success. Planning must be thorough yet flexible.',
    stakeholderFocus: ['TRANSFORM_LEAD', 'EXTERNAL_ADVISOR', 'CTO'],
    options: [
      { id: 'A', text: 'Comprehensive transformation program design', impact: { transformationProgress: 15, executionMomentum: 8, capabilityBuilding: 5 }, risk: 0.25, stakeholderReactions: { TRANSFORM_LEAD: 20, EXTERNAL_ADVISOR: 15, CEO: 10 } },
      { id: 'B', text: 'Agile transformation with iterative approach', impact: { executionMomentum: 15, transformationProgress: 8, resistanceManagement: 5 }, risk: 0.30, stakeholderReactions: { CTO: 18, TRANSFORM_LEAD: 12, CFO: -5 } },
      { id: 'C', text: 'Quick wins strategy for early momentum', impact: { executionMomentum: 18, stakeholderBuyIn: 10, transformationProgress: -3 }, risk: 0.25, stakeholderReactions: { COO: 15, CHANGE_CHAMPION: 18, BOARD_MEMBER: 8 } },
      { id: 'D', text: 'Technology-led transformation roadmap', impact: { capabilityBuilding: 18, transformationProgress: 10, culturalShift: -5 }, risk: 0.35, stakeholderReactions: { CTO: 20, IT_HEAD: 18, CHRO: -8 } },
      { id: 'E', text: 'Operating model transformation design', impact: { transformationProgress: 12, executionMomentum: 10, valueCapture: 8 }, risk: 0.30, stakeholderReactions: { COO: 18, TRANSFORM_LEAD: 15, BUSINESS_UNIT_HEAD: -5 } },
      { id: 'F', text: 'Pilot and scale approach with learning', impact: { executionMomentum: 12, resistanceManagement: 10, transformationProgress: 5 }, risk: 0.20, stakeholderReactions: { TRANSFORM_LEAD: 15, CHANGE_CHAMPION: 12, CFO: 10 } }
    ]
  },
  {
    id: 5,
    phase: 'ENVISION',
    title: 'Resource Commitment',
    scenario: 'Transformation requires investment. Competing priorities demand attention. Securing adequate resources determines success potential.',
    stakeholderFocus: ['CFO', 'BOARD_MEMBER', 'CEO'],
    options: [
      { id: 'A', text: 'Full transformation budget with dedicated team', impact: { transformationProgress: 18, capabilityBuilding: 12, valueCapture: -8 }, risk: 0.30, stakeholderReactions: { TRANSFORM_LEAD: 20, CEO: 15, CFO: -10 } },
      { id: 'B', text: 'Phased investment with milestone releases', impact: { valueCapture: 12, transformationProgress: 10, executionMomentum: -3 }, risk: 0.25, stakeholderReactions: { CFO: 18, BOARD_MEMBER: 15, TRANSFORM_LEAD: -5 } },
      { id: 'C', text: 'Self-funding transformation with efficiency gains', impact: { valueCapture: 15, transformationProgress: 8, stakeholderBuyIn: -5 }, risk: 0.35, stakeholderReactions: { CFO: 18, COO: 12, UNION_REP: -12 } },
      { id: 'D', text: 'External investment for transformation acceleration', impact: { capabilityBuilding: 15, transformationProgress: 12, valueCapture: -10 }, risk: 0.35, stakeholderReactions: { EXTERNAL_ADVISOR: 18, CTO: 12, CFO: -8 } },
      { id: 'E', text: 'Resource reallocation from other initiatives', impact: { transformationProgress: 12, executionMomentum: 10, stakeholderBuyIn: -8 }, risk: 0.35, stakeholderReactions: { CEO: 15, TRANSFORM_LEAD: 12, BUSINESS_UNIT_HEAD: -15 } },
      { id: 'F', text: 'Mixed model with dedicated and borrowed resources', impact: { transformationProgress: 10, stakeholderBuyIn: 8, executionMomentum: 5 }, risk: 0.25, stakeholderReactions: { COO: 15, TRANSFORM_LEAD: 12, CFO: 8 } }
    ]
  },
  {
    id: 6,
    phase: 'ENVISION',
    title: 'Communication Foundation',
    scenario: 'How transformation is communicated matters as much as what is communicated. Building understanding and engagement requires careful messaging.',
    stakeholderFocus: ['COMMS_HEAD', 'CEO', 'CHANGE_CHAMPION'],
    options: [
      { id: 'A', text: 'Comprehensive communication strategy and plan', impact: { stakeholderBuyIn: 15, changeReadiness: 12, resistanceManagement: 8 }, risk: 0.20, stakeholderReactions: { COMMS_HEAD: 20, CEO: 15, TRANSFORM_LEAD: 12 } },
      { id: 'B', text: 'CEO-led transformation narrative', impact: { stakeholderBuyIn: 15, changeReadiness: 10, culturalShift: 8 }, risk: 0.25, stakeholderReactions: { CEO: 18, COMMS_HEAD: 12, BOARD_MEMBER: 10 } },
      { id: 'C', text: 'Employee engagement and two-way dialogue', impact: { stakeholderBuyIn: 12, resistanceManagement: 12, culturalShift: 8 }, risk: 0.25, stakeholderReactions: { CHANGE_CHAMPION: 18, CHRO: 15, UNION_REP: 12 } },
      { id: 'D', text: 'Cascade communication through leadership', impact: { changeReadiness: 12, executionMomentum: 10, stakeholderBuyIn: 5 }, risk: 0.25, stakeholderReactions: { COO: 15, MIDDLE_MANAGER: 12, COMMS_HEAD: 10 } },
      { id: 'E', text: 'Digital communication platform launch', impact: { changeReadiness: 10, stakeholderBuyIn: 10, executionMomentum: 8 }, risk: 0.25, stakeholderReactions: { IT_HEAD: 15, COMMS_HEAD: 12, CTO: 10 } },
      { id: 'F', text: 'Storytelling through transformation champions', impact: { culturalShift: 12, stakeholderBuyIn: 12, resistanceManagement: 8 }, risk: 0.20, stakeholderReactions: { CHANGE_CHAMPION: 20, CHRO: 15, COMMS_HEAD: 10 } }
    ]
  },

  // Phase 2: Engage (Rounds 7-12)
  {
    id: 7,
    phase: 'ENGAGE',
    title: 'Organization Mobilization',
    scenario: 'Time to mobilize the organization. Moving from planning to action requires energy and coordination. The transformation must come alive.',
    stakeholderFocus: ['TRANSFORM_LEAD', 'CHRO', 'CHANGE_CHAMPION'],
    options: [
      { id: 'A', text: 'Launch event with visible transformation kickoff', impact: { executionMomentum: 18, stakeholderBuyIn: 12, changeReadiness: 8 }, risk: 0.25, stakeholderReactions: { CEO: 15, COMMS_HEAD: 18, CHANGE_CHAMPION: 15 } },
      { id: 'B', text: 'Transformation team deployment across organization', impact: { executionMomentum: 15, transformationProgress: 10, capabilityBuilding: 5 }, risk: 0.25, stakeholderReactions: { TRANSFORM_LEAD: 18, COO: 12, BUSINESS_UNIT_HEAD: 5 } },
      { id: 'C', text: 'Change champion network activation', impact: { stakeholderBuyIn: 15, resistanceManagement: 12, culturalShift: 8 }, risk: 0.20, stakeholderReactions: { CHANGE_CHAMPION: 20, CHRO: 18, MIDDLE_MANAGER: 10 } },
      { id: 'D', text: 'Training and capability building launch', impact: { capabilityBuilding: 18, changeReadiness: 10, valueCapture: -5 }, risk: 0.25, stakeholderReactions: { CHRO: 18, IT_HEAD: 12, CFO: -5 } },
      { id: 'E', text: 'Pilot programs in receptive areas', impact: { executionMomentum: 12, transformationProgress: 12, resistanceManagement: 8 }, risk: 0.25, stakeholderReactions: { TRANSFORM_LEAD: 15, CHANGE_CHAMPION: 15, BUSINESS_UNIT_HEAD: 8 } },
      { id: 'F', text: 'Quick wins execution for credibility', impact: { executionMomentum: 18, stakeholderBuyIn: 10, valueCapture: 5 }, risk: 0.30, stakeholderReactions: { COO: 18, CEO: 15, BOARD_MEMBER: 10 } }
    ]
  },
  {
    id: 8,
    phase: 'ENGAGE',
    title: 'Resistance Response',
    scenario: 'Resistance is emerging. Some are actively opposing, others are passively waiting. How you respond will determine transformation momentum.',
    stakeholderFocus: ['BUSINESS_UNIT_HEAD', 'UNION_REP', 'MIDDLE_MANAGER'],
    options: [
      { id: 'A', text: 'Direct engagement with resistance sources', impact: { resistanceManagement: 18, stakeholderBuyIn: 8, executionMomentum: -5 }, risk: 0.35, stakeholderReactions: { TRANSFORM_LEAD: 15, BUSINESS_UNIT_HEAD: 10, UNION_REP: 5 } },
      { id: 'B', text: 'Involvement of resisters in solution design', impact: { resistanceManagement: 15, stakeholderBuyIn: 12, executionMomentum: -8 }, risk: 0.30, stakeholderReactions: { CHANGE_CHAMPION: 15, MIDDLE_MANAGER: 12, UNION_REP: 10 } },
      { id: 'C', text: 'Clear consequences for blocking behaviors', impact: { executionMomentum: 15, resistanceManagement: 10, culturalShift: -10 }, risk: 0.40, stakeholderReactions: { CEO: 15, BUSINESS_UNIT_HEAD: -15, UNION_REP: -18 } },
      { id: 'D', text: 'Peer influence and success story sharing', impact: { resistanceManagement: 12, stakeholderBuyIn: 12, culturalShift: 8 }, risk: 0.25, stakeholderReactions: { CHANGE_CHAMPION: 18, COMMS_HEAD: 12, MIDDLE_MANAGER: 10 } },
      { id: 'E', text: 'Additional support and training for struggling areas', impact: { resistanceManagement: 12, capabilityBuilding: 12, changeReadiness: 8 }, risk: 0.25, stakeholderReactions: { CHRO: 18, CHANGE_CHAMPION: 12, CFO: -5 } },
      { id: 'F', text: 'Work around resisters while maintaining momentum', impact: { executionMomentum: 15, transformationProgress: 10, stakeholderBuyIn: -8 }, risk: 0.35, stakeholderReactions: { COO: 15, TRANSFORM_LEAD: 12, MIDDLE_MANAGER: -10 } }
    ]
  },
  {
    id: 9,
    phase: 'ENGAGE',
    title: 'Capability Development',
    scenario: 'New capabilities are needed. People must learn new skills and ways of working. Building capability enables sustained transformation.',
    stakeholderFocus: ['CHRO', 'CTO', 'IT_HEAD'],
    options: [
      { id: 'A', text: 'Comprehensive learning and development program', impact: { capabilityBuilding: 18, changeReadiness: 12, valueCapture: -8 }, risk: 0.25, stakeholderReactions: { CHRO: 20, TRANSFORM_LEAD: 15, CFO: -8 } },
      { id: 'B', text: 'Digital skills transformation initiative', impact: { capabilityBuilding: 15, transformationProgress: 10, executionMomentum: 5 }, risk: 0.30, stakeholderReactions: { CTO: 18, IT_HEAD: 18, CHRO: 10 } },
      { id: 'C', text: 'Learning by doing with embedded support', impact: { capabilityBuilding: 12, executionMomentum: 12, transformationProgress: 8 }, risk: 0.25, stakeholderReactions: { CHANGE_CHAMPION: 18, TRANSFORM_LEAD: 15, COO: 10 } },
      { id: 'D', text: 'External talent infusion for capability gaps', impact: { capabilityBuilding: 15, transformationProgress: 10, culturalShift: -5 }, risk: 0.35, stakeholderReactions: { CEO: 15, CTO: 12, UNION_REP: -12 } },
      { id: 'E', text: 'Certification and career progression linking', impact: { capabilityBuilding: 12, stakeholderBuyIn: 12, changeReadiness: 8 }, risk: 0.25, stakeholderReactions: { CHRO: 18, MIDDLE_MANAGER: 15, CHANGE_CHAMPION: 10 } },
      { id: 'F', text: 'Peer learning and knowledge sharing networks', impact: { capabilityBuilding: 10, culturalShift: 12, resistanceManagement: 8 }, risk: 0.20, stakeholderReactions: { CHANGE_CHAMPION: 18, CHRO: 12, IT_HEAD: 10 } }
    ]
  },
  {
    id: 10,
    phase: 'ENGAGE',
    title: 'Progress Tracking',
    scenario: 'Is transformation on track? Measuring progress enables adjustment. What gets measured gets managed.',
    stakeholderFocus: ['TRANSFORM_LEAD', 'CFO', 'BOARD_MEMBER'],
    options: [
      { id: 'A', text: 'Comprehensive transformation metrics dashboard', impact: { executionMomentum: 12, transformationProgress: 12, valueCapture: 8 }, risk: 0.20, stakeholderReactions: { TRANSFORM_LEAD: 18, CFO: 15, BOARD_MEMBER: 12 } },
      { id: 'B', text: 'Regular transformation review cadence', impact: { executionMomentum: 15, stakeholderBuyIn: 8, transformationProgress: 10 }, risk: 0.20, stakeholderReactions: { CEO: 15, TRANSFORM_LEAD: 12, COO: 10 } },
      { id: 'C', text: 'Value realization tracking and reporting', impact: { valueCapture: 18, stakeholderBuyIn: 10, executionMomentum: 5 }, risk: 0.25, stakeholderReactions: { CFO: 20, BOARD_MEMBER: 15, CEO: 10 } },
      { id: 'D', text: 'Employee engagement and sentiment tracking', impact: { stakeholderBuyIn: 12, resistanceManagement: 12, culturalShift: 8 }, risk: 0.20, stakeholderReactions: { CHRO: 18, CHANGE_CHAMPION: 15, COMMS_HEAD: 10 } },
      { id: 'E', text: 'Capability and behavior change measurement', impact: { capabilityBuilding: 12, culturalShift: 12, changeReadiness: 8 }, risk: 0.25, stakeholderReactions: { CHRO: 15, TRANSFORM_LEAD: 12, EXTERNAL_ADVISOR: 10 } },
      { id: 'F', text: 'Customer and market impact measurement', impact: { valueCapture: 15, transformationProgress: 8, stakeholderBuyIn: 5 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 18, CEO: 12, COO: 10 } }
    ]
  },
  {
    id: 11,
    phase: 'ENGAGE',
    title: 'Stakeholder Deepening',
    scenario: 'Initial engagement achieved. Now relationships must deepen. Sustained transformation requires committed stakeholders.',
    stakeholderFocus: ['KEY_CUSTOMER', 'UNION_REP', 'MIDDLE_MANAGER'],
    options: [
      { id: 'A', text: 'Customer co-creation in transformation', impact: { stakeholderBuyIn: 15, valueCapture: 12, transformationProgress: 8 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 20, CEO: 15, COO: 10 } },
      { id: 'B', text: 'Union partnership for people-focused change', impact: { stakeholderBuyIn: 15, resistanceManagement: 12, culturalShift: 8 }, risk: 0.30, stakeholderReactions: { UNION_REP: 20, CHRO: 15, CHANGE_CHAMPION: 10 } },
      { id: 'C', text: 'Middle management empowerment and support', impact: { executionMomentum: 15, stakeholderBuyIn: 12, resistanceManagement: 10 }, risk: 0.25, stakeholderReactions: { MIDDLE_MANAGER: 20, COO: 15, CHRO: 10 } },
      { id: 'D', text: 'Board engagement and governance updates', impact: { stakeholderBuyIn: 12, transformationProgress: 10, valueCapture: 8 }, risk: 0.20, stakeholderReactions: { BOARD_MEMBER: 18, CEO: 15, CFO: 10 } },
      { id: 'E', text: 'External stakeholder communication refresh', impact: { stakeholderBuyIn: 10, valueCapture: 10, transformationProgress: 5 }, risk: 0.25, stakeholderReactions: { COMMS_HEAD: 18, KEY_CUSTOMER: 12, EXTERNAL_ADVISOR: 10 } },
      { id: 'F', text: 'Supplier and partner engagement in transformation', impact: { valueCapture: 12, transformationProgress: 10, executionMomentum: 5 }, risk: 0.25, stakeholderReactions: { COO: 15, KEY_CUSTOMER: 12, CFO: 8 } }
    ]
  },
  {
    id: 12,
    phase: 'ENGAGE',
    title: 'Engagement Assessment',
    scenario: 'Time to assess engagement effectiveness. What is working, what needs adjustment? The foundation must be solid before scaling.',
    stakeholderFocus: ['TRANSFORM_LEAD', 'CHRO', 'EXTERNAL_ADVISOR'],
    options: [
      { id: 'A', text: 'Comprehensive engagement audit and adjustment', impact: { stakeholderBuyIn: 12, executionMomentum: 10, transformationProgress: 8 }, risk: 0.20, stakeholderReactions: { TRANSFORM_LEAD: 18, EXTERNAL_ADVISOR: 15, CEO: 10 } },
      { id: 'B', text: 'Culture health check and intervention', impact: { culturalShift: 15, stakeholderBuyIn: 10, resistanceManagement: 8 }, risk: 0.25, stakeholderReactions: { CHRO: 18, CHANGE_CHAMPION: 15, TRANSFORM_LEAD: 10 } },
      { id: 'C', text: 'Resistance mapping and targeted response', impact: { resistanceManagement: 18, stakeholderBuyIn: 8, executionMomentum: 5 }, risk: 0.30, stakeholderReactions: { TRANSFORM_LEAD: 15, CHRO: 12, MIDDLE_MANAGER: 8 } },
      { id: 'D', text: 'Capability gap assessment and planning', impact: { capabilityBuilding: 15, changeReadiness: 10, transformationProgress: 5 }, risk: 0.25, stakeholderReactions: { CHRO: 18, CTO: 12, EXTERNAL_ADVISOR: 10 } },
      { id: 'E', text: 'Value delivery review and acceleration', impact: { valueCapture: 15, executionMomentum: 10, stakeholderBuyIn: 5 }, risk: 0.25, stakeholderReactions: { CFO: 18, BOARD_MEMBER: 12, CEO: 10 } },
      { id: 'F', text: 'Leadership effectiveness review and coaching', impact: { stakeholderBuyIn: 12, executionMomentum: 10, culturalShift: 8 }, risk: 0.25, stakeholderReactions: { CEO: 15, EXTERNAL_ADVISOR: 18, CHRO: 10 } }
    ]
  },

  // Phase 3: Transform (Rounds 13-18)
  {
    id: 13,
    phase: 'TRANSFORM',
    title: 'Transformation Acceleration',
    scenario: 'Foundation is set. Now transformation must accelerate. Moving from pilots to scale requires bold action.',
    stakeholderFocus: ['CEO', 'TRANSFORM_LEAD', 'COO'],
    options: [
      { id: 'A', text: 'Full-scale transformation rollout', impact: { transformationProgress: 20, executionMomentum: 15, resistanceManagement: -8 }, risk: 0.35, stakeholderReactions: { TRANSFORM_LEAD: 18, CEO: 15, BUSINESS_UNIT_HEAD: -10 } },
      { id: 'B', text: 'Phased acceleration with stabilization', impact: { transformationProgress: 15, executionMomentum: 12, stakeholderBuyIn: 5 }, risk: 0.25, stakeholderReactions: { COO: 18, TRANSFORM_LEAD: 15, CFO: 10 } },
      { id: 'C', text: 'Fast follower strategy after pilot success', impact: { transformationProgress: 12, resistanceManagement: 10, valueCapture: 8 }, risk: 0.25, stakeholderReactions: { CHANGE_CHAMPION: 18, MIDDLE_MANAGER: 12, TRANSFORM_LEAD: 10 } },
      { id: 'D', text: 'Resource surge for transformation push', impact: { transformationProgress: 18, capabilityBuilding: 10, valueCapture: -10 }, risk: 0.35, stakeholderReactions: { CEO: 18, TRANSFORM_LEAD: 15, CFO: -12 } },
      { id: 'E', text: 'Technology deployment acceleration', impact: { capabilityBuilding: 18, transformationProgress: 12, culturalShift: -5 }, risk: 0.35, stakeholderReactions: { CTO: 20, IT_HEAD: 15, CHRO: -5 } },
      { id: 'F', text: 'Operating model implementation', impact: { transformationProgress: 15, executionMomentum: 10, valueCapture: 8 }, risk: 0.30, stakeholderReactions: { COO: 18, CEO: 12, BUSINESS_UNIT_HEAD: 5 } }
    ]
  },
  {
    id: 14,
    phase: 'TRANSFORM',
    title: 'Culture Shift',
    scenario: 'Behaviors must change for transformation to stick. Culture change is the hardest part. Visible shifts signal real progress.',
    stakeholderFocus: ['CHRO', 'CHANGE_CHAMPION', 'CEO'],
    options: [
      { id: 'A', text: 'Values refresh and behavioral embedding', impact: { culturalShift: 18, stakeholderBuyIn: 10, transformationProgress: 5 }, risk: 0.30, stakeholderReactions: { CHRO: 20, CEO: 15, CHANGE_CHAMPION: 15 } },
      { id: 'B', text: 'Leadership behavior transformation program', impact: { culturalShift: 15, stakeholderBuyIn: 12, executionMomentum: 5 }, risk: 0.25, stakeholderReactions: { CEO: 18, CHRO: 15, EXTERNAL_ADVISOR: 10 } },
      { id: 'C', text: 'Recognition and reward system alignment', impact: { culturalShift: 12, stakeholderBuyIn: 12, executionMomentum: 10 }, risk: 0.25, stakeholderReactions: { CHRO: 18, CHANGE_CHAMPION: 15, CFO: 8 } },
      { id: 'D', text: 'Performance management transformation', impact: { culturalShift: 12, valueCapture: 10, resistanceManagement: -5 }, risk: 0.30, stakeholderReactions: { CHRO: 15, CFO: 12, UNION_REP: -10 } },
      { id: 'E', text: 'Storytelling and cultural reinforcement', impact: { culturalShift: 12, stakeholderBuyIn: 12, changeReadiness: 8 }, risk: 0.20, stakeholderReactions: { COMMS_HEAD: 18, CHANGE_CHAMPION: 15, CEO: 10 } },
      { id: 'F', text: 'Role modeling and visible commitment', impact: { culturalShift: 15, stakeholderBuyIn: 10, transformationProgress: 5 }, risk: 0.25, stakeholderReactions: { CEO: 18, CHANGE_CHAMPION: 15, MIDDLE_MANAGER: 10 } }
    ]
  },
  {
    id: 15,
    phase: 'TRANSFORM',
    title: 'Value Delivery',
    scenario: 'Transformation must deliver value. Stakeholders are watching for results. Demonstrating impact sustains momentum.',
    stakeholderFocus: ['CFO', 'BOARD_MEMBER', 'CEO'],
    options: [
      { id: 'A', text: 'Aggressive value capture program', impact: { valueCapture: 20, transformationProgress: 10, culturalShift: -5 }, risk: 0.35, stakeholderReactions: { CFO: 20, BOARD_MEMBER: 15, UNION_REP: -10 } },
      { id: 'B', text: 'Balanced value and change delivery', impact: { valueCapture: 12, transformationProgress: 12, stakeholderBuyIn: 8 }, risk: 0.25, stakeholderReactions: { CEO: 18, CFO: 12, TRANSFORM_LEAD: 10 } },
      { id: 'C', text: 'Customer value focus and measurement', impact: { valueCapture: 15, stakeholderBuyIn: 12, transformationProgress: 5 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 20, CEO: 15, COO: 10 } },
      { id: 'D', text: 'Efficiency and productivity gains priority', impact: { valueCapture: 18, executionMomentum: 10, culturalShift: -8 }, risk: 0.35, stakeholderReactions: { CFO: 18, COO: 15, UNION_REP: -15 } },
      { id: 'E', text: 'Revenue and growth impact measurement', impact: { valueCapture: 15, stakeholderBuyIn: 10, transformationProgress: 8 }, risk: 0.30, stakeholderReactions: { CEO: 18, BOARD_MEMBER: 12, KEY_CUSTOMER: 10 } },
      { id: 'F', text: 'Long-term value creation focus', impact: { transformationProgress: 15, valueCapture: 10, stakeholderBuyIn: 5 }, risk: 0.25, stakeholderReactions: { BOARD_MEMBER: 15, CEO: 12, EXTERNAL_ADVISOR: 10 } }
    ]
  },
  {
    id: 16,
    phase: 'TRANSFORM',
    title: 'Organizational Redesign',
    scenario: 'Structure must follow strategy. Organization design changes are needed. New ways of working require new structures.',
    stakeholderFocus: ['COO', 'CHRO', 'BUSINESS_UNIT_HEAD'],
    options: [
      { id: 'A', text: 'Comprehensive organization restructure', impact: { transformationProgress: 18, executionMomentum: 10, resistanceManagement: -12 }, risk: 0.40, stakeholderReactions: { CEO: 15, COO: 12, BUSINESS_UNIT_HEAD: -15 } },
      { id: 'B', text: 'Agile organization model adoption', impact: { transformationProgress: 15, culturalShift: 12, executionMomentum: 5 }, risk: 0.35, stakeholderReactions: { CTO: 18, TRANSFORM_LEAD: 15, MIDDLE_MANAGER: -8 } },
      { id: 'C', text: 'Selective structure changes in key areas', impact: { transformationProgress: 12, resistanceManagement: 8, executionMomentum: 10 }, risk: 0.25, stakeholderReactions: { COO: 18, CHRO: 12, BUSINESS_UNIT_HEAD: 5 } },
      { id: 'D', text: 'Role redesign with capability alignment', impact: { capabilityBuilding: 15, transformationProgress: 10, stakeholderBuyIn: 5 }, risk: 0.30, stakeholderReactions: { CHRO: 18, TRANSFORM_LEAD: 12, MIDDLE_MANAGER: 8 } },
      { id: 'E', text: 'Cross-functional team structures', impact: { culturalShift: 12, executionMomentum: 12, transformationProgress: 8 }, risk: 0.30, stakeholderReactions: { COO: 15, CHANGE_CHAMPION: 15, BUSINESS_UNIT_HEAD: -5 } },
      { id: 'F', text: 'Governance and decision rights update', impact: { executionMomentum: 15, transformationProgress: 10, stakeholderBuyIn: 5 }, risk: 0.25, stakeholderReactions: { CEO: 15, BOARD_MEMBER: 12, COO: 10 } }
    ]
  },
  {
    id: 17,
    phase: 'TRANSFORM',
    title: 'Technology Transformation',
    scenario: 'Technology is the backbone. Systems must support new ways of working. Digital transformation enables broader change.',
    stakeholderFocus: ['CTO', 'IT_HEAD', 'COO'],
    options: [
      { id: 'A', text: 'Enterprise platform transformation', impact: { capabilityBuilding: 20, transformationProgress: 12, valueCapture: -10 }, risk: 0.40, stakeholderReactions: { CTO: 20, IT_HEAD: 18, CFO: -12 } },
      { id: 'B', text: 'Modular technology modernization', impact: { capabilityBuilding: 15, transformationProgress: 10, executionMomentum: 8 }, risk: 0.30, stakeholderReactions: { IT_HEAD: 18, CTO: 15, COO: 10 } },
      { id: 'C', text: 'Data and analytics transformation', impact: { capabilityBuilding: 15, valueCapture: 12, transformationProgress: 8 }, risk: 0.30, stakeholderReactions: { CTO: 18, CFO: 12, CEO: 10 } },
      { id: 'D', text: 'Digital workplace and collaboration tools', impact: { capabilityBuilding: 12, culturalShift: 12, executionMomentum: 10 }, risk: 0.25, stakeholderReactions: { IT_HEAD: 18, CHANGE_CHAMPION: 15, CHRO: 10 } },
      { id: 'E', text: 'Customer-facing technology priority', impact: { valueCapture: 15, capabilityBuilding: 10, stakeholderBuyIn: 8 }, risk: 0.30, stakeholderReactions: { KEY_CUSTOMER: 18, CTO: 15, CEO: 10 } },
      { id: 'F', text: 'Technology debt elimination program', impact: { capabilityBuilding: 12, executionMomentum: 10, valueCapture: 5 }, risk: 0.25, stakeholderReactions: { IT_HEAD: 18, CFO: 15, CTO: 12 } }
    ]
  },
  {
    id: 18,
    phase: 'TRANSFORM',
    title: 'Transformation Checkpoint',
    scenario: 'Major transformation checkpoint. Assess progress and adjust course. The final push requires clarity on what remains.',
    stakeholderFocus: ['CEO', 'TRANSFORM_LEAD', 'BOARD_MEMBER'],
    options: [
      { id: 'A', text: 'Comprehensive transformation review', impact: { transformationProgress: 12, executionMomentum: 10, stakeholderBuyIn: 10 }, risk: 0.20, stakeholderReactions: { BOARD_MEMBER: 18, CEO: 15, TRANSFORM_LEAD: 12 } },
      { id: 'B', text: 'Value realization assessment and adjustment', impact: { valueCapture: 15, transformationProgress: 8, executionMomentum: 5 }, risk: 0.25, stakeholderReactions: { CFO: 18, BOARD_MEMBER: 15, CEO: 10 } },
      { id: 'C', text: 'Culture and behavior change assessment', impact: { culturalShift: 12, stakeholderBuyIn: 12, resistanceManagement: 8 }, risk: 0.25, stakeholderReactions: { CHRO: 18, CHANGE_CHAMPION: 15, EXTERNAL_ADVISOR: 10 } },
      { id: 'D', text: 'Capability and readiness review', impact: { capabilityBuilding: 12, changeReadiness: 12, transformationProgress: 8 }, risk: 0.25, stakeholderReactions: { CHRO: 15, CTO: 12, TRANSFORM_LEAD: 12 } },
      { id: 'E', text: 'Stakeholder feedback and adjustment', impact: { stakeholderBuyIn: 15, resistanceManagement: 10, executionMomentum: 5 }, risk: 0.20, stakeholderReactions: { KEY_CUSTOMER: 15, UNION_REP: 12, MIDDLE_MANAGER: 10 } },
      { id: 'F', text: 'External benchmark and validation', impact: { transformationProgress: 10, stakeholderBuyIn: 10, valueCapture: 8 }, risk: 0.25, stakeholderReactions: { EXTERNAL_ADVISOR: 18, BOARD_MEMBER: 12, CEO: 10 } }
    ]
  },

  // Phase 4: Sustain (Rounds 19-24)
  {
    id: 19,
    phase: 'SUSTAIN',
    title: 'Embedding Change',
    scenario: 'Transformation gains must be locked in. Without embedding, change will fade. Making transformation the new normal is the goal.',
    stakeholderFocus: ['CHRO', 'TRANSFORM_LEAD', 'COO'],
    options: [
      { id: 'A', text: 'Process and system institutionalization', impact: { transformationProgress: 15, executionMomentum: 12, culturalShift: 8 }, risk: 0.25, stakeholderReactions: { COO: 18, TRANSFORM_LEAD: 15, IT_HEAD: 10 } },
      { id: 'B', text: 'Culture reinforcement and recognition', impact: { culturalShift: 18, stakeholderBuyIn: 12, transformationProgress: 5 }, risk: 0.25, stakeholderReactions: { CHRO: 20, CHANGE_CHAMPION: 18, CEO: 10 } },
      { id: 'C', text: 'Performance management embedding', impact: { transformationProgress: 12, valueCapture: 12, culturalShift: 8 }, risk: 0.25, stakeholderReactions: { CHRO: 18, CFO: 12, COO: 10 } },
      { id: 'D', text: 'Leadership development for new capabilities', impact: { capabilityBuilding: 15, culturalShift: 10, stakeholderBuyIn: 8 }, risk: 0.25, stakeholderReactions: { CHRO: 18, CEO: 15, EXTERNAL_ADVISOR: 10 } },
      { id: 'E', text: 'Governance and accountability systems', impact: { executionMomentum: 15, transformationProgress: 10, valueCapture: 8 }, risk: 0.25, stakeholderReactions: { BOARD_MEMBER: 18, CEO: 12, CFO: 10 } },
      { id: 'F', text: 'Continuous improvement culture building', impact: { culturalShift: 12, capabilityBuilding: 12, transformationProgress: 8 }, risk: 0.20, stakeholderReactions: { COO: 18, CHANGE_CHAMPION: 15, TRANSFORM_LEAD: 10 } }
    ]
  },
  {
    id: 20,
    phase: 'SUSTAIN',
    title: 'Capability Maturation',
    scenario: 'New capabilities need time to mature. Building depth and expertise ensures lasting competitive advantage.',
    stakeholderFocus: ['CTO', 'CHRO', 'KEY_CUSTOMER'],
    options: [
      { id: 'A', text: 'Center of excellence development', impact: { capabilityBuilding: 18, transformationProgress: 10, valueCapture: 5 }, risk: 0.25, stakeholderReactions: { CTO: 18, CHRO: 15, TRANSFORM_LEAD: 12 } },
      { id: 'B', text: 'Knowledge management and sharing systems', impact: { capabilityBuilding: 15, culturalShift: 10, executionMomentum: 8 }, risk: 0.25, stakeholderReactions: { IT_HEAD: 18, CHANGE_CHAMPION: 12, CHRO: 10 } },
      { id: 'C', text: 'External partnership for capability building', impact: { capabilityBuilding: 15, valueCapture: 8, transformationProgress: 5 }, risk: 0.30, stakeholderReactions: { CEO: 15, KEY_CUSTOMER: 12, EXTERNAL_ADVISOR: 10 } },
      { id: 'D', text: 'Talent pipeline development', impact: { capabilityBuilding: 12, stakeholderBuyIn: 12, culturalShift: 8 }, risk: 0.25, stakeholderReactions: { CHRO: 18, CEO: 12, MIDDLE_MANAGER: 10 } },
      { id: 'E', text: 'Innovation and experimentation culture', impact: { capabilityBuilding: 12, culturalShift: 12, valueCapture: 8 }, risk: 0.30, stakeholderReactions: { CTO: 18, CHANGE_CHAMPION: 15, KEY_CUSTOMER: 10 } },
      { id: 'F', text: 'Customer-centric capability focus', impact: { valueCapture: 15, capabilityBuilding: 10, stakeholderBuyIn: 10 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 20, CEO: 12, COO: 10 } }
    ]
  },
  {
    id: 21,
    phase: 'SUSTAIN',
    title: 'Stakeholder Sustainability',
    scenario: 'Long-term stakeholder relationships sustain transformation. Building lasting engagement ensures continued support.',
    stakeholderFocus: ['KEY_CUSTOMER', 'UNION_REP', 'BOARD_MEMBER'],
    options: [
      { id: 'A', text: 'Customer partnership deepening', impact: { stakeholderBuyIn: 18, valueCapture: 12, transformationProgress: 5 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 20, CEO: 15, COO: 10 } },
      { id: 'B', text: 'Employee partnership and engagement', impact: { stakeholderBuyIn: 15, culturalShift: 12, resistanceManagement: 8 }, risk: 0.25, stakeholderReactions: { UNION_REP: 18, CHRO: 15, CHANGE_CHAMPION: 12 } },
      { id: 'C', text: 'Board and investor engagement evolution', impact: { stakeholderBuyIn: 12, valueCapture: 12, transformationProgress: 8 }, risk: 0.20, stakeholderReactions: { BOARD_MEMBER: 18, CFO: 15, CEO: 10 } },
      { id: 'D', text: 'Community and social responsibility integration', impact: { stakeholderBuyIn: 12, culturalShift: 10, valueCapture: 5 }, risk: 0.25, stakeholderReactions: { COMMS_HEAD: 18, CHRO: 12, KEY_CUSTOMER: 10 } },
      { id: 'E', text: 'Supplier and partner ecosystem building', impact: { valueCapture: 15, transformationProgress: 10, capabilityBuilding: 8 }, risk: 0.25, stakeholderReactions: { COO: 18, CEO: 12, KEY_CUSTOMER: 10 } },
      { id: 'F', text: 'Transparent ongoing communication', impact: { stakeholderBuyIn: 15, culturalShift: 8, transformationProgress: 5 }, risk: 0.20, stakeholderReactions: { COMMS_HEAD: 18, CEO: 12, BOARD_MEMBER: 10 } }
    ]
  },
  {
    id: 22,
    phase: 'SUSTAIN',
    title: 'Value Optimization',
    scenario: 'Transformation value must be maximized. Continuous improvement captures additional value. The journey of improvement never ends.',
    stakeholderFocus: ['CFO', 'COO', 'CEO'],
    options: [
      { id: 'A', text: 'Value optimization program institutionalization', impact: { valueCapture: 18, transformationProgress: 10, executionMomentum: 8 }, risk: 0.25, stakeholderReactions: { CFO: 20, CEO: 15, BOARD_MEMBER: 12 } },
      { id: 'B', text: 'Continuous improvement culture embedding', impact: { valueCapture: 12, culturalShift: 12, capabilityBuilding: 10 }, risk: 0.20, stakeholderReactions: { COO: 18, CHANGE_CHAMPION: 15, TRANSFORM_LEAD: 10 } },
      { id: 'C', text: 'Customer value proposition enhancement', impact: { valueCapture: 15, stakeholderBuyIn: 12, transformationProgress: 8 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 20, CEO: 15, COO: 10 } },
      { id: 'D', text: 'Innovation pipeline development', impact: { valueCapture: 12, capabilityBuilding: 12, transformationProgress: 10 }, risk: 0.30, stakeholderReactions: { CTO: 18, CEO: 12, EXTERNAL_ADVISOR: 10 } },
      { id: 'E', text: 'Operational excellence sustainability', impact: { valueCapture: 15, executionMomentum: 12, transformationProgress: 8 }, risk: 0.25, stakeholderReactions: { COO: 20, CFO: 15, CEO: 10 } },
      { id: 'F', text: 'Growth investment from transformation gains', impact: { transformationProgress: 15, valueCapture: 10, capabilityBuilding: 8 }, risk: 0.30, stakeholderReactions: { CEO: 18, BOARD_MEMBER: 15, CFO: -5 } }
    ]
  },
  {
    id: 23,
    phase: 'SUSTAIN',
    title: 'Adaptive Capacity',
    scenario: 'The organization must continue to evolve. Building adaptive capacity ensures future readiness. Change must become a capability.',
    stakeholderFocus: ['CEO', 'TRANSFORM_LEAD', 'EXTERNAL_ADVISOR'],
    options: [
      { id: 'A', text: 'Change capability institutionalization', impact: { capabilityBuilding: 18, culturalShift: 12, transformationProgress: 8 }, risk: 0.25, stakeholderReactions: { TRANSFORM_LEAD: 20, CHRO: 15, CEO: 12 } },
      { id: 'B', text: 'Learning organization culture', impact: { culturalShift: 15, capabilityBuilding: 12, stakeholderBuyIn: 8 }, risk: 0.25, stakeholderReactions: { CHRO: 18, CHANGE_CHAMPION: 15, EXTERNAL_ADVISOR: 10 } },
      { id: 'C', text: 'Scenario planning and future readiness', impact: { capabilityBuilding: 12, transformationProgress: 12, valueCapture: 8 }, risk: 0.25, stakeholderReactions: { CEO: 18, BOARD_MEMBER: 12, EXTERNAL_ADVISOR: 10 } },
      { id: 'D', text: 'Agile ways of working embedding', impact: { culturalShift: 15, executionMomentum: 10, capabilityBuilding: 8 }, risk: 0.30, stakeholderReactions: { CTO: 18, COO: 12, TRANSFORM_LEAD: 10 } },
      { id: 'E', text: 'External ecosystem monitoring and response', impact: { capabilityBuilding: 12, valueCapture: 12, stakeholderBuyIn: 8 }, risk: 0.25, stakeholderReactions: { EXTERNAL_ADVISOR: 18, CEO: 15, KEY_CUSTOMER: 10 } },
      { id: 'F', text: 'Leadership agility development', impact: { capabilityBuilding: 15, culturalShift: 10, stakeholderBuyIn: 8 }, risk: 0.25, stakeholderReactions: { CEO: 18, CHRO: 15, BOARD_MEMBER: 10 } }
    ]
  },
  {
    id: 24,
    phase: 'SUSTAIN',
    title: 'Transformation Legacy',
    scenario: 'Final decisions to cement transformation success. Your choices will define the lasting impact of this organizational metamorphosis.',
    stakeholderFocus: ['CEO', 'BOARD_MEMBER', 'KEY_CUSTOMER'],
    options: [
      { id: 'A', text: 'Transformation as competitive advantage', impact: { transformationProgress: 15, valueCapture: 12, capabilityBuilding: 10 }, risk: 0.25, stakeholderReactions: { CEO: 18, BOARD_MEMBER: 15, KEY_CUSTOMER: 12 } },
      { id: 'B', text: 'Culture as lasting legacy', impact: { culturalShift: 18, stakeholderBuyIn: 12, transformationProgress: 8 }, risk: 0.25, stakeholderReactions: { CHRO: 20, CHANGE_CHAMPION: 18, CEO: 12 } },
      { id: 'C', text: 'Customer value creation leadership', impact: { valueCapture: 18, stakeholderBuyIn: 12, transformationProgress: 8 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 20, CEO: 15, COO: 10 } },
      { id: 'D', text: 'People and capability excellence', impact: { capabilityBuilding: 18, culturalShift: 10, stakeholderBuyIn: 10 }, risk: 0.25, stakeholderReactions: { CHRO: 18, CEO: 15, CHANGE_CHAMPION: 12 } },
      { id: 'E', text: 'Operational and digital excellence', impact: { executionMomentum: 15, capabilityBuilding: 12, valueCapture: 10 }, risk: 0.25, stakeholderReactions: { CTO: 18, COO: 18, CFO: 12 } },
      { id: 'F', text: 'Balanced excellence across all dimensions', impact: { transformationProgress: 12, culturalShift: 12, valueCapture: 12 }, risk: 0.20, stakeholderReactions: { CEO: 15, BOARD_MEMBER: 15, TRANSFORM_LEAD: 12 } }
    ]
  }
];

export const PHASE_DESCRIPTIONS = {
  ENVISION: {
    name: 'Envision',
    description: 'Build the case for change and define the transformation vision',
    rounds: [1, 2, 3, 4, 5, 6]
  },
  ENGAGE: {
    name: 'Engage',
    description: 'Mobilize the organization and build transformation momentum',
    rounds: [7, 8, 9, 10, 11, 12]
  },
  TRANSFORM: {
    name: 'Transform',
    description: 'Execute transformation and deliver value',
    rounds: [13, 14, 15, 16, 17, 18]
  },
  SUSTAIN: {
    name: 'Sustain',
    description: 'Embed change and build adaptive capacity',
    rounds: [19, 20, 21, 22, 23, 24]
  }
};

export const getRoundById = (id) => ROUNDS.find(r => r.id === id);
export const getRoundsByPhase = (phase) => ROUNDS.filter(r => r.phase === phase);
export const getAllRounds = () => ROUNDS;
