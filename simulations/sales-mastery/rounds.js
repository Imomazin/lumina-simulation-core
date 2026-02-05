// Sales Mastery Simulation Rounds
// 24 rounds across 4 phases with 6 options each

export const ROUNDS = [
  // Phase 1: Sales Foundation (Rounds 1-6)
  {
    id: 1,
    phase: 'SALES_FOUNDATION',
    title: 'Pipeline Assessment',
    scenario: 'Initial pipeline review reveals significant gaps. Coverage is below target and quality of opportunities varies widely. Immediate action needed.',
    stakeholderFocus: ['CRO', 'SALES_VP', 'SALES_OPS'],
    options: [
      { id: 'A', text: 'Launch intensive pipeline generation blitz', impact: { pipelineHealth: 15, dealVelocity: 5, teamPerformance: -3 }, risk: 0.25, stakeholderReactions: { SDR_MANAGER: 18, SALES_VP: 12, TOP_PERFORMER: -8 } },
      { id: 'B', text: 'Implement rigorous pipeline qualification process', impact: { pipelineHealth: 8, winRate: 10, forecastAccuracy: 8 }, risk: 0.20, stakeholderReactions: { SALES_OPS: 18, CRO: 10, REGIONAL_DIRECTOR: -5 } },
      { id: 'C', text: 'Focus on accelerating existing high-value deals', impact: { dealVelocity: 12, winRate: 8, pipelineHealth: -5 }, risk: 0.30, stakeholderReactions: { TOP_PERFORMER: 15, SALES_VP: 12, SDR_MANAGER: -10 } },
      { id: 'D', text: 'Marketing-sales alignment for demand generation', impact: { pipelineHealth: 10, customerRelationships: 5, teamPerformance: 3 }, risk: 0.25, stakeholderReactions: { MARKETING_VP: 18, SDR_MANAGER: 12, SALES_VP: 5 } },
      { id: 'E', text: 'Customer referral and expansion program', impact: { pipelineHealth: 8, customerRelationships: 12, accountPenetration: 8 }, risk: 0.15, stakeholderReactions: { CUSTOMER_SUCCESS: 18, KEY_CUSTOMER: 10, CRO: 8 } },
      { id: 'F', text: 'Partner-sourced pipeline initiative', impact: { pipelineHealth: 10, accountPenetration: 8, winRate: -3 }, risk: 0.30, stakeholderReactions: { CHANNEL_MANAGER: 18, REGIONAL_DIRECTOR: 10, TOP_PERFORMER: -5 } }
    ]
  },
  {
    id: 2,
    phase: 'SALES_FOUNDATION',
    title: 'Sales Process Definition',
    scenario: 'Sales methodology inconsistency is affecting results. Need to establish consistent process while respecting top performer autonomy.',
    stakeholderFocus: ['SALES_ENABLEMENT', 'SALES_OPS', 'TOP_PERFORMER'],
    options: [
      { id: 'A', text: 'Implement comprehensive sales methodology (MEDDIC)', impact: { salesProcessMaturity: 15, winRate: 8, teamPerformance: -5 }, risk: 0.30, stakeholderReactions: { SALES_ENABLEMENT: 18, SALES_OPS: 15, TOP_PERFORMER: -12 } },
      { id: 'B', text: 'Codify best practices from top performers', impact: { salesProcessMaturity: 10, teamPerformance: 10, winRate: 5 }, risk: 0.20, stakeholderReactions: { TOP_PERFORMER: 15, SALES_ENABLEMENT: 12, NEW_HIRE_REP: 10 } },
      { id: 'C', text: 'Stage-gate process with clear exit criteria', impact: { forecastAccuracy: 12, salesProcessMaturity: 10, dealVelocity: -5 }, risk: 0.25, stakeholderReactions: { SALES_OPS: 18, CRO: 12, REGIONAL_DIRECTOR: -8 } },
      { id: 'D', text: 'Flexible framework with mandatory checkpoints', impact: { salesProcessMaturity: 8, teamPerformance: 8, forecastAccuracy: 5 }, risk: 0.20, stakeholderReactions: { SALES_VP: 15, TOP_PERFORMER: 8, SALES_OPS: 10 } },
      { id: 'E', text: 'Customer-centric selling methodology', impact: { customerRelationships: 12, winRate: 8, salesProcessMaturity: 5 }, risk: 0.20, stakeholderReactions: { SOLUTION_ENGINEER: 18, CUSTOMER_SUCCESS: 12, KEY_CUSTOMER: 10 } },
      { id: 'F', text: 'Minimal process - trust the reps', impact: { teamPerformance: 5, dealVelocity: 8, salesProcessMaturity: -8 }, risk: 0.35, stakeholderReactions: { TOP_PERFORMER: 15, SALES_OPS: -15, CRO: -8 } }
    ]
  },
  {
    id: 3,
    phase: 'SALES_FOUNDATION',
    title: 'Team Performance Baseline',
    scenario: 'Performance distribution shows significant variance. Top 20% deliver 60% of results while 30% are below quota. Talent decisions required.',
    stakeholderFocus: ['SALES_VP', 'REGIONAL_DIRECTOR', 'NEW_HIRE_REP'],
    options: [
      { id: 'A', text: 'Performance improvement plans for underperformers', impact: { teamPerformance: 10, winRate: 5, pipelineHealth: -3 }, risk: 0.30, stakeholderReactions: { SALES_VP: 15, CRO: 12, NEW_HIRE_REP: -10 } },
      { id: 'B', text: 'Coaching and development investment for all', impact: { teamPerformance: 8, salesProcessMaturity: 8, customerRelationships: 5 }, risk: 0.15, stakeholderReactions: { SALES_ENABLEMENT: 18, NEW_HIRE_REP: 15, FINANCE_BP: -5 } },
      { id: 'C', text: 'Restructure territories for better balance', impact: { teamPerformance: 8, pipelineHealth: 5, accountPenetration: 5 }, risk: 0.35, stakeholderReactions: { REGIONAL_DIRECTOR: 10, TOP_PERFORMER: -15, SALES_VP: 8 } },
      { id: 'D', text: 'Upgrade talent through strategic hiring', impact: { teamPerformance: 12, pipelineHealth: -5, winRate: 5 }, risk: 0.40, stakeholderReactions: { CRO: 15, SALES_VP: 10, NEW_HIRE_REP: -8 } },
      { id: 'E', text: 'Peer mentoring and buddy system', impact: { teamPerformance: 8, salesProcessMaturity: 5, customerRelationships: 3 }, risk: 0.15, stakeholderReactions: { TOP_PERFORMER: 10, NEW_HIRE_REP: 18, SALES_ENABLEMENT: 10 } },
      { id: 'F', text: 'Compensation restructure to drive performance', impact: { teamPerformance: 10, dealVelocity: 8, customerRelationships: -5 }, risk: 0.35, stakeholderReactions: { FINANCE_BP: 15, TOP_PERFORMER: 12, CUSTOMER_SUCCESS: -10 } }
    ]
  },
  {
    id: 4,
    phase: 'SALES_FOUNDATION',
    title: 'Customer Relationship Assessment',
    scenario: 'Customer health analysis shows risk in key accounts. Relationships are transactional rather than strategic. Executive access is limited.',
    stakeholderFocus: ['CUSTOMER_SUCCESS', 'KEY_CUSTOMER', 'TOP_PERFORMER'],
    options: [
      { id: 'A', text: 'Executive sponsorship program for key accounts', impact: { customerRelationships: 15, accountPenetration: 10, winRate: 5 }, risk: 0.25, stakeholderReactions: { CRO: 15, KEY_CUSTOMER: 18, CUSTOMER_SUCCESS: 12 } },
      { id: 'B', text: 'Customer advisory board establishment', impact: { customerRelationships: 12, salesProcessMaturity: 5, pipelineHealth: 5 }, risk: 0.20, stakeholderReactions: { KEY_CUSTOMER: 18, MARKETING_VP: 12, SOLUTION_ENGINEER: 10 } },
      { id: 'C', text: 'Value realization and ROI documentation', impact: { customerRelationships: 10, winRate: 8, accountPenetration: 5 }, risk: 0.20, stakeholderReactions: { CUSTOMER_SUCCESS: 18, SOLUTION_ENGINEER: 12, KEY_CUSTOMER: 10 } },
      { id: 'D', text: 'Quarterly business reviews institutionalization', impact: { customerRelationships: 10, forecastAccuracy: 8, accountPenetration: 8 }, risk: 0.15, stakeholderReactions: { CUSTOMER_SUCCESS: 15, REGIONAL_DIRECTOR: 10, KEY_CUSTOMER: 12 } },
      { id: 'E', text: 'Customer success metrics and health scoring', impact: { forecastAccuracy: 10, customerRelationships: 8, accountPenetration: 5 }, risk: 0.20, stakeholderReactions: { SALES_OPS: 15, CUSTOMER_SUCCESS: 12, CRO: 8 } },
      { id: 'F', text: 'At-risk account intervention program', impact: { customerRelationships: 8, accountPenetration: 5, pipelineHealth: -3 }, risk: 0.25, stakeholderReactions: { CUSTOMER_SUCCESS: 15, SALES_VP: 10, SDR_MANAGER: -5 } }
    ]
  },
  {
    id: 5,
    phase: 'SALES_FOUNDATION',
    title: 'Competitive Positioning',
    scenario: 'Win/loss analysis shows increasing competitive pressure. Differentiation is unclear and competitors are winning on price and features.',
    stakeholderFocus: ['COMPETITOR_INTEL', 'SOLUTION_ENGINEER', 'MARKETING_VP'],
    options: [
      { id: 'A', text: 'Comprehensive competitive battlecard program', impact: { winRate: 10, salesProcessMaturity: 8, teamPerformance: 5 }, risk: 0.20, stakeholderReactions: { COMPETITOR_INTEL: 18, SALES_ENABLEMENT: 12, TOP_PERFORMER: 10 } },
      { id: 'B', text: 'Value selling transformation', impact: { winRate: 12, customerRelationships: 8, pipelineHealth: -3 }, risk: 0.30, stakeholderReactions: { SOLUTION_ENGINEER: 18, SALES_ENABLEMENT: 12, REGIONAL_DIRECTOR: -5 } },
      { id: 'C', text: 'Technical differentiation emphasis', impact: { winRate: 8, customerRelationships: 5, dealVelocity: -5 }, risk: 0.25, stakeholderReactions: { SOLUTION_ENGINEER: 18, COMPETITOR_INTEL: 10, TOP_PERFORMER: -5 } },
      { id: 'D', text: 'Strategic discounting authority for competitive deals', impact: { winRate: 10, dealVelocity: 8, forecastAccuracy: -5 }, risk: 0.35, stakeholderReactions: { REGIONAL_DIRECTOR: 15, FINANCE_BP: -15, TOP_PERFORMER: 10 } },
      { id: 'E', text: 'Early engagement strategy to preempt competition', impact: { pipelineHealth: 10, winRate: 8, dealVelocity: 5 }, risk: 0.25, stakeholderReactions: { SDR_MANAGER: 15, MARKETING_VP: 12, COMPETITOR_INTEL: 10 } },
      { id: 'F', text: 'Reference customer program for proof points', impact: { winRate: 8, customerRelationships: 10, salesProcessMaturity: 5 }, risk: 0.15, stakeholderReactions: { KEY_CUSTOMER: 15, CUSTOMER_SUCCESS: 12, MARKETING_VP: 10 } }
    ]
  },
  {
    id: 6,
    phase: 'SALES_FOUNDATION',
    title: 'Forecasting and Planning',
    scenario: 'Forecast accuracy is poor, causing planning issues. Commit culture is weak and pipeline visibility is limited.',
    stakeholderFocus: ['SALES_OPS', 'CRO', 'FINANCE_BP'],
    options: [
      { id: 'A', text: 'AI-powered forecasting system implementation', impact: { forecastAccuracy: 15, salesProcessMaturity: 8, teamPerformance: -3 }, risk: 0.35, stakeholderReactions: { SALES_OPS: 18, CRO: 12, REGIONAL_DIRECTOR: -8 } },
      { id: 'B', text: 'Rigorous forecast review cadence', impact: { forecastAccuracy: 12, salesProcessMaturity: 8, dealVelocity: -3 }, risk: 0.20, stakeholderReactions: { CRO: 15, SALES_OPS: 12, TOP_PERFORMER: -5 } },
      { id: 'C', text: 'Deal scoring and probability calibration', impact: { forecastAccuracy: 10, winRate: 5, pipelineHealth: 5 }, risk: 0.20, stakeholderReactions: { SALES_OPS: 15, FINANCE_BP: 12, SALES_VP: 8 } },
      { id: 'D', text: 'Bottom-up forecasting with rep accountability', impact: { forecastAccuracy: 8, teamPerformance: 8, salesProcessMaturity: 5 }, risk: 0.25, stakeholderReactions: { REGIONAL_DIRECTOR: 15, SALES_VP: 12, TOP_PERFORMER: -8 } },
      { id: 'E', text: 'Weighted pipeline with stage conversion rates', impact: { forecastAccuracy: 10, pipelineHealth: 8, salesProcessMaturity: 5 }, risk: 0.20, stakeholderReactions: { SALES_OPS: 15, CRO: 10, FINANCE_BP: 10 } },
      { id: 'F', text: 'Conservative forecasting with upside tracking', impact: { forecastAccuracy: 8, pipelineHealth: 5, teamPerformance: -5 }, risk: 0.15, stakeholderReactions: { FINANCE_BP: 18, CRO: 10, REGIONAL_DIRECTOR: -10 } }
    ]
  },

  // Phase 2: Sales Execution (Rounds 7-12)
  {
    id: 7,
    phase: 'SALES_EXECUTION',
    title: 'Deal Strategy Optimization',
    scenario: 'Large deal review shows inconsistent strategy execution. Some deals stall while others close but with margin erosion.',
    stakeholderFocus: ['TOP_PERFORMER', 'SOLUTION_ENGINEER', 'SALES_VP'],
    options: [
      { id: 'A', text: 'Deal desk with strategic deal support', impact: { winRate: 12, forecastAccuracy: 8, dealVelocity: -5 }, risk: 0.25, stakeholderReactions: { FINANCE_BP: 15, SALES_OPS: 12, TOP_PERFORMER: -8 } },
      { id: 'B', text: 'Champion and coach program for complex deals', impact: { winRate: 10, customerRelationships: 10, salesProcessMaturity: 5 }, risk: 0.20, stakeholderReactions: { SOLUTION_ENGINEER: 18, TOP_PERFORMER: 12, SALES_ENABLEMENT: 10 } },
      { id: 'C', text: 'Deal acceleration team for stalled opportunities', impact: { dealVelocity: 12, winRate: 8, pipelineHealth: 3 }, risk: 0.30, stakeholderReactions: { SALES_VP: 15, TOP_PERFORMER: 10, REGIONAL_DIRECTOR: 8 } },
      { id: 'D', text: 'Value engineering for every major deal', impact: { winRate: 10, customerRelationships: 8, dealVelocity: -3 }, risk: 0.25, stakeholderReactions: { SOLUTION_ENGINEER: 18, KEY_CUSTOMER: 12, TOP_PERFORMER: -5 } },
      { id: 'E', text: 'Executive engagement protocol for strategic deals', impact: { winRate: 10, accountPenetration: 8, customerRelationships: 5 }, risk: 0.20, stakeholderReactions: { CRO: 15, KEY_CUSTOMER: 15, REGIONAL_DIRECTOR: 8 } },
      { id: 'F', text: 'Competitive kill sheets for head-to-head situations', impact: { winRate: 8, salesProcessMaturity: 5, teamPerformance: 5 }, risk: 0.20, stakeholderReactions: { COMPETITOR_INTEL: 18, TOP_PERFORMER: 12, SALES_ENABLEMENT: 8 } }
    ]
  },
  {
    id: 8,
    phase: 'SALES_EXECUTION',
    title: 'Pipeline Velocity Challenge',
    scenario: 'Deal velocity has slowed significantly. Sales cycles are extending and customers are delaying decisions.',
    stakeholderFocus: ['SALES_VP', 'SDR_MANAGER', 'TOP_PERFORMER'],
    options: [
      { id: 'A', text: 'Time-limited promotions and incentives', impact: { dealVelocity: 15, winRate: -5, forecastAccuracy: -3 }, risk: 0.35, stakeholderReactions: { REGIONAL_DIRECTOR: 15, FINANCE_BP: -12, TOP_PERFORMER: 10 } },
      { id: 'B', text: 'Mutual action plans with customer commitments', impact: { dealVelocity: 10, customerRelationships: 8, winRate: 5 }, risk: 0.20, stakeholderReactions: { SOLUTION_ENGINEER: 15, TOP_PERFORMER: 12, KEY_CUSTOMER: 8 } },
      { id: 'C', text: 'Pipeline stage time limits and escalation', impact: { dealVelocity: 12, forecastAccuracy: 8, pipelineHealth: -5 }, risk: 0.30, stakeholderReactions: { SALES_OPS: 15, CRO: 10, REGIONAL_DIRECTOR: -8 } },
      { id: 'D', text: 'Early buying cycle engagement strategy', impact: { pipelineHealth: 10, dealVelocity: 8, customerRelationships: 5 }, risk: 0.25, stakeholderReactions: { SDR_MANAGER: 18, MARKETING_VP: 12, COMPETITOR_INTEL: 8 } },
      { id: 'E', text: 'Proof of concept and trial acceleration', impact: { dealVelocity: 10, winRate: 8, customerRelationships: 5 }, risk: 0.25, stakeholderReactions: { SOLUTION_ENGINEER: 18, TOP_PERFORMER: 10, CUSTOMER_SUCCESS: 8 } },
      { id: 'F', text: 'Decision maker identification and access program', impact: { dealVelocity: 8, winRate: 10, accountPenetration: 5 }, risk: 0.25, stakeholderReactions: { TOP_PERFORMER: 15, SALES_ENABLEMENT: 10, REGIONAL_DIRECTOR: 8 } }
    ]
  },
  {
    id: 9,
    phase: 'SALES_EXECUTION',
    title: 'Account Expansion Strategy',
    scenario: 'Net revenue retention is below target. Cross-sell and upsell opportunities are not being captured systematically.',
    stakeholderFocus: ['CUSTOMER_SUCCESS', 'CHANNEL_MANAGER', 'KEY_CUSTOMER'],
    options: [
      { id: 'A', text: 'Dedicated expansion sales team', impact: { accountPenetration: 15, pipelineHealth: 8, teamPerformance: -5 }, risk: 0.30, stakeholderReactions: { CRO: 12, CUSTOMER_SUCCESS: 15, REGIONAL_DIRECTOR: -10 } },
      { id: 'B', text: 'Customer success-led expansion motions', impact: { accountPenetration: 12, customerRelationships: 10, salesProcessMaturity: 3 }, risk: 0.20, stakeholderReactions: { CUSTOMER_SUCCESS: 18, KEY_CUSTOMER: 12, SALES_VP: 5 } },
      { id: 'C', text: 'White space analysis and account planning', impact: { accountPenetration: 10, forecastAccuracy: 8, pipelineHealth: 5 }, risk: 0.20, stakeholderReactions: { SALES_OPS: 15, REGIONAL_DIRECTOR: 12, TOP_PERFORMER: 8 } },
      { id: 'D', text: 'Partner-assisted expansion program', impact: { accountPenetration: 10, pipelineHealth: 8, customerRelationships: 5 }, risk: 0.25, stakeholderReactions: { CHANNEL_MANAGER: 18, CUSTOMER_SUCCESS: 10, KEY_CUSTOMER: 8 } },
      { id: 'E', text: 'Product adoption driving expansion', impact: { accountPenetration: 8, customerRelationships: 12, winRate: 5 }, risk: 0.15, stakeholderReactions: { CUSTOMER_SUCCESS: 15, SOLUTION_ENGINEER: 12, KEY_CUSTOMER: 10 } },
      { id: 'F', text: 'Incentive alignment for expansion revenue', impact: { accountPenetration: 10, teamPerformance: 8, customerRelationships: -3 }, risk: 0.30, stakeholderReactions: { FINANCE_BP: 12, REGIONAL_DIRECTOR: 15, CUSTOMER_SUCCESS: -8 } }
    ]
  },
  {
    id: 10,
    phase: 'SALES_EXECUTION',
    title: 'Team Development Push',
    scenario: 'Skills gaps are limiting performance. New hires take too long to ramp and even experienced reps need development.',
    stakeholderFocus: ['SALES_ENABLEMENT', 'NEW_HIRE_REP', 'REGIONAL_DIRECTOR'],
    options: [
      { id: 'A', text: 'Comprehensive sales academy launch', impact: { teamPerformance: 12, salesProcessMaturity: 10, winRate: 5 }, risk: 0.25, stakeholderReactions: { SALES_ENABLEMENT: 18, NEW_HIRE_REP: 15, FINANCE_BP: -8 } },
      { id: 'B', text: 'Role-play and simulation training', impact: { teamPerformance: 10, winRate: 8, salesProcessMaturity: 5 }, risk: 0.20, stakeholderReactions: { SALES_ENABLEMENT: 15, NEW_HIRE_REP: 12, TOP_PERFORMER: 5 } },
      { id: 'C', text: 'Field ride-alongs and shadowing program', impact: { teamPerformance: 8, customerRelationships: 8, salesProcessMaturity: 5 }, risk: 0.15, stakeholderReactions: { TOP_PERFORMER: 12, NEW_HIRE_REP: 18, REGIONAL_DIRECTOR: 10 } },
      { id: 'D', text: 'Certification programs with career progression', impact: { teamPerformance: 10, salesProcessMaturity: 8, winRate: 3 }, risk: 0.20, stakeholderReactions: { SALES_ENABLEMENT: 15, NEW_HIRE_REP: 12, CRO: 8 } },
      { id: 'E', text: 'Deal coaching and win/loss reviews', impact: { winRate: 10, teamPerformance: 8, forecastAccuracy: 5 }, risk: 0.15, stakeholderReactions: { SALES_VP: 15, TOP_PERFORMER: 10, SALES_ENABLEMENT: 12 } },
      { id: 'F', text: 'Product and industry knowledge intensive', impact: { winRate: 8, customerRelationships: 8, teamPerformance: 5 }, risk: 0.15, stakeholderReactions: { SOLUTION_ENGINEER: 15, COMPETITOR_INTEL: 12, NEW_HIRE_REP: 10 } }
    ]
  },
  {
    id: 11,
    phase: 'SALES_EXECUTION',
    title: 'Channel Strategy Execution',
    scenario: 'Partner channel is underperforming. Conflict with direct sales and unclear rules of engagement are limiting results.',
    stakeholderFocus: ['CHANNEL_MANAGER', 'REGIONAL_DIRECTOR', 'SALES_VP'],
    options: [
      { id: 'A', text: 'Clear channel segmentation and rules', impact: { pipelineHealth: 10, accountPenetration: 8, teamPerformance: 3 }, risk: 0.25, stakeholderReactions: { CHANNEL_MANAGER: 15, REGIONAL_DIRECTOR: 12, TOP_PERFORMER: 5 } },
      { id: 'B', text: 'Partner enablement investment', impact: { accountPenetration: 10, winRate: 5, pipelineHealth: 8 }, risk: 0.20, stakeholderReactions: { CHANNEL_MANAGER: 18, SALES_ENABLEMENT: 10, SALES_VP: 8 } },
      { id: 'C', text: 'Co-selling program with direct support', impact: { winRate: 10, accountPenetration: 8, teamPerformance: -3 }, risk: 0.25, stakeholderReactions: { CHANNEL_MANAGER: 15, SOLUTION_ENGINEER: 12, TOP_PERFORMER: -8 } },
      { id: 'D', text: 'Partner incentive restructure', impact: { pipelineHealth: 12, accountPenetration: 5, forecastAccuracy: -3 }, risk: 0.30, stakeholderReactions: { CHANNEL_MANAGER: 18, FINANCE_BP: -10, CRO: 8 } },
      { id: 'E', text: 'Partner tier system with benefits', impact: { pipelineHealth: 8, winRate: 5, accountPenetration: 8 }, risk: 0.20, stakeholderReactions: { CHANNEL_MANAGER: 15, SALES_VP: 10, REGIONAL_DIRECTOR: 8 } },
      { id: 'F', text: 'Direct-first strategy with partner supplement', impact: { winRate: 8, teamPerformance: 8, accountPenetration: -5 }, risk: 0.30, stakeholderReactions: { TOP_PERFORMER: 15, REGIONAL_DIRECTOR: 12, CHANNEL_MANAGER: -15 } }
    ]
  },
  {
    id: 12,
    phase: 'SALES_EXECUTION',
    title: 'Technology and Tools Upgrade',
    scenario: 'Sales technology stack is limiting productivity. CRM adoption is low and tools don\'t support the selling process effectively.',
    stakeholderFocus: ['SALES_OPS', 'TOP_PERFORMER', 'SALES_ENABLEMENT'],
    options: [
      { id: 'A', text: 'Modern CRM implementation with AI', impact: { salesProcessMaturity: 12, forecastAccuracy: 10, teamPerformance: -5 }, risk: 0.40, stakeholderReactions: { SALES_OPS: 18, CRO: 10, TOP_PERFORMER: -10 } },
      { id: 'B', text: 'Sales engagement platform deployment', impact: { dealVelocity: 10, pipelineHealth: 8, salesProcessMaturity: 5 }, risk: 0.30, stakeholderReactions: { SDR_MANAGER: 18, SALES_OPS: 12, TOP_PERFORMER: 5 } },
      { id: 'C', text: 'Revenue intelligence and conversation analytics', impact: { winRate: 10, forecastAccuracy: 8, salesProcessMaturity: 8 }, risk: 0.30, stakeholderReactions: { SALES_OPS: 15, SALES_ENABLEMENT: 12, TOP_PERFORMER: -8 } },
      { id: 'D', text: 'Mobile-first sales tools', impact: { teamPerformance: 10, dealVelocity: 8, salesProcessMaturity: 5 }, risk: 0.25, stakeholderReactions: { REGIONAL_DIRECTOR: 15, TOP_PERFORMER: 12, SALES_OPS: 10 } },
      { id: 'E', text: 'Simplified tech stack consolidation', impact: { teamPerformance: 8, salesProcessMaturity: 5, forecastAccuracy: 5 }, risk: 0.20, stakeholderReactions: { TOP_PERFORMER: 15, FINANCE_BP: 12, SALES_OPS: 8 } },
      { id: 'F', text: 'CPQ and deal configuration automation', impact: { dealVelocity: 12, winRate: 5, forecastAccuracy: 8 }, risk: 0.30, stakeholderReactions: { FINANCE_BP: 15, SOLUTION_ENGINEER: 12, SALES_OPS: 10 } }
    ]
  },

  // Phase 3: Sales Challenges (Rounds 13-18)
  {
    id: 13,
    phase: 'SALES_CHALLENGES',
    title: 'Major Account at Risk',
    scenario: 'Largest customer signals potential competitive review. Relationship has weakened and competitor is actively pursuing.',
    stakeholderFocus: ['KEY_CUSTOMER', 'CRO', 'CUSTOMER_SUCCESS'],
    options: [
      { id: 'A', text: 'Executive-to-executive intervention', impact: { customerRelationships: 12, accountPenetration: 5, pipelineHealth: -3 }, risk: 0.30, stakeholderReactions: { CRO: 15, KEY_CUSTOMER: 12, CUSTOMER_SUCCESS: 10 } },
      { id: 'B', text: 'Custom value demonstration and ROI review', impact: { customerRelationships: 10, winRate: 8, forecastAccuracy: 3 }, risk: 0.25, stakeholderReactions: { SOLUTION_ENGINEER: 18, KEY_CUSTOMER: 15, CUSTOMER_SUCCESS: 10 } },
      { id: 'C', text: 'Strategic pricing concession', impact: { customerRelationships: 8, accountPenetration: 5, forecastAccuracy: -8 }, risk: 0.35, stakeholderReactions: { FINANCE_BP: -15, KEY_CUSTOMER: 15, CRO: -5 } },
      { id: 'D', text: 'Innovation partnership proposal', impact: { customerRelationships: 12, accountPenetration: 10, pipelineHealth: 5 }, risk: 0.30, stakeholderReactions: { KEY_CUSTOMER: 18, SOLUTION_ENGINEER: 12, MARKETING_VP: 10 } },
      { id: 'E', text: 'Multi-year strategic agreement offer', impact: { accountPenetration: 12, customerRelationships: 8, forecastAccuracy: -5 }, risk: 0.35, stakeholderReactions: { KEY_CUSTOMER: 15, CRO: 12, FINANCE_BP: -8 } },
      { id: 'F', text: 'Competitive displacement defense strategy', impact: { winRate: 10, customerRelationships: 5, salesProcessMaturity: 5 }, risk: 0.30, stakeholderReactions: { COMPETITOR_INTEL: 18, TOP_PERFORMER: 12, KEY_CUSTOMER: 5 } }
    ]
  },
  {
    id: 14,
    phase: 'SALES_CHALLENGES',
    title: 'Quota Miss Crisis',
    scenario: 'Quarter is at risk of significant miss. Pipeline is insufficient and deals are slipping. Board pressure is mounting.',
    stakeholderFocus: ['CRO', 'SALES_VP', 'FINANCE_BP'],
    options: [
      { id: 'A', text: 'All-hands deal acceleration push', impact: { dealVelocity: 15, winRate: -5, teamPerformance: -8 }, risk: 0.40, stakeholderReactions: { SALES_VP: 15, TOP_PERFORMER: -8, NEW_HIRE_REP: -12 } },
      { id: 'B', text: 'Pull-forward deals with incentives', impact: { pipelineHealth: -10, dealVelocity: 12, forecastAccuracy: -8 }, risk: 0.45, stakeholderReactions: { FINANCE_BP: -12, CRO: 10, REGIONAL_DIRECTOR: 5 } },
      { id: 'C', text: 'Transparent reset with realistic forecast', impact: { forecastAccuracy: 15, teamPerformance: 5, dealVelocity: -5 }, risk: 0.25, stakeholderReactions: { FINANCE_BP: 18, CRO: -8, SALES_VP: 5 } },
      { id: 'D', text: 'Strategic deal focus on closeable opportunities', impact: { winRate: 12, dealVelocity: 8, pipelineHealth: -5 }, risk: 0.30, stakeholderReactions: { SALES_VP: 15, TOP_PERFORMER: 12, SDR_MANAGER: -8 } },
      { id: 'E', text: 'Extended quarter with bridge plan', impact: { forecastAccuracy: 8, teamPerformance: 5, pipelineHealth: 5 }, risk: 0.35, stakeholderReactions: { FINANCE_BP: -10, CRO: 8, REGIONAL_DIRECTOR: 10 } },
      { id: 'F', text: 'Expansion blitz on existing customers', impact: { accountPenetration: 12, customerRelationships: -5, dealVelocity: 8 }, risk: 0.35, stakeholderReactions: { CUSTOMER_SUCCESS: -10, CRO: 12, REGIONAL_DIRECTOR: 10 } }
    ]
  },
  {
    id: 15,
    phase: 'SALES_CHALLENGES',
    title: 'Top Performer Departure',
    scenario: 'Your best sales rep has been recruited by a competitor. They\'re taking key relationships and team morale is shaken.',
    stakeholderFocus: ['TOP_PERFORMER', 'REGIONAL_DIRECTOR', 'NEW_HIRE_REP'],
    options: [
      { id: 'A', text: 'Counter-offer and retention package', impact: { teamPerformance: 8, customerRelationships: 5, pipelineHealth: 3 }, risk: 0.30, stakeholderReactions: { TOP_PERFORMER: 15, FINANCE_BP: -15, NEW_HIRE_REP: -8 } },
      { id: 'B', text: 'Customer relationship protection plan', impact: { customerRelationships: 12, accountPenetration: 8, teamPerformance: -3 }, risk: 0.25, stakeholderReactions: { CUSTOMER_SUCCESS: 18, KEY_CUSTOMER: 10, REGIONAL_DIRECTOR: 10 } },
      { id: 'C', text: 'Team reassignment and territory restructure', impact: { pipelineHealth: 8, teamPerformance: 5, accountPenetration: 3 }, risk: 0.35, stakeholderReactions: { REGIONAL_DIRECTOR: 15, NEW_HIRE_REP: 8, SALES_VP: 10 } },
      { id: 'D', text: 'Leadership and culture investment', impact: { teamPerformance: 12, salesProcessMaturity: 5, customerRelationships: 3 }, risk: 0.20, stakeholderReactions: { NEW_HIRE_REP: 18, SALES_ENABLEMENT: 12, REGIONAL_DIRECTOR: 10 } },
      { id: 'E', text: 'Accelerated hiring to fill gap', impact: { pipelineHealth: 5, teamPerformance: -5, winRate: -3 }, risk: 0.35, stakeholderReactions: { CRO: 10, NEW_HIRE_REP: -5, SALES_VP: 8 } },
      { id: 'F', text: 'Knowledge capture and transition planning', impact: { salesProcessMaturity: 10, teamPerformance: 5, pipelineHealth: -5 }, risk: 0.20, stakeholderReactions: { SALES_ENABLEMENT: 15, SALES_OPS: 12, TOP_PERFORMER: -10 } }
    ]
  },
  {
    id: 16,
    phase: 'SALES_CHALLENGES',
    title: 'Competitive Price War',
    scenario: 'Major competitor has slashed prices. Customers are demanding matching discounts and deals are stalling.',
    stakeholderFocus: ['COMPETITOR_INTEL', 'FINANCE_BP', 'REGIONAL_DIRECTOR'],
    options: [
      { id: 'A', text: 'Match competitive pricing selectively', impact: { winRate: 8, forecastAccuracy: -10, pipelineHealth: 5 }, risk: 0.35, stakeholderReactions: { REGIONAL_DIRECTOR: 15, FINANCE_BP: -15, TOP_PERFORMER: 10 } },
      { id: 'B', text: 'Value differentiation campaign', impact: { winRate: 10, customerRelationships: 8, dealVelocity: -5 }, risk: 0.30, stakeholderReactions: { SOLUTION_ENGINEER: 18, MARKETING_VP: 12, COMPETITOR_INTEL: 10 } },
      { id: 'C', text: 'Bundle and add value versus discount', impact: { winRate: 8, accountPenetration: 8, forecastAccuracy: 3 }, risk: 0.25, stakeholderReactions: { SOLUTION_ENGINEER: 15, CUSTOMER_SUCCESS: 10, KEY_CUSTOMER: 8 } },
      { id: 'D', text: 'Attack competitor weakness positioning', impact: { winRate: 10, pipelineHealth: 5, customerRelationships: -3 }, risk: 0.35, stakeholderReactions: { COMPETITOR_INTEL: 18, MARKETING_VP: 10, KEY_CUSTOMER: -5 } },
      { id: 'E', text: 'Customer success and ROI emphasis', impact: { customerRelationships: 12, winRate: 5, accountPenetration: 5 }, risk: 0.20, stakeholderReactions: { CUSTOMER_SUCCESS: 18, KEY_CUSTOMER: 12, SOLUTION_ENGINEER: 10 } },
      { id: 'F', text: 'Strategic retreat from price-sensitive segments', impact: { winRate: 5, forecastAccuracy: 8, pipelineHealth: -8 }, risk: 0.30, stakeholderReactions: { FINANCE_BP: 15, CRO: -8, REGIONAL_DIRECTOR: -10 } }
    ]
  },
  {
    id: 17,
    phase: 'SALES_CHALLENGES',
    title: 'Market Downturn Impact',
    scenario: 'Economic uncertainty is freezing budgets. Customers are delaying decisions and pipeline is aging.',
    stakeholderFocus: ['CRO', 'KEY_CUSTOMER', 'SALES_OPS'],
    options: [
      { id: 'A', text: 'Essential messaging and risk reduction offers', impact: { winRate: 10, dealVelocity: 8, forecastAccuracy: 5 }, risk: 0.25, stakeholderReactions: { MARKETING_VP: 15, SOLUTION_ENGINEER: 12, KEY_CUSTOMER: 10 } },
      { id: 'B', text: 'Flexible payment and financing options', impact: { dealVelocity: 12, winRate: 5, forecastAccuracy: -5 }, risk: 0.30, stakeholderReactions: { FINANCE_BP: -10, KEY_CUSTOMER: 15, CRO: 10 } },
      { id: 'C', text: 'Focus on recession-proof use cases', impact: { pipelineHealth: 10, winRate: 8, customerRelationships: 5 }, risk: 0.25, stakeholderReactions: { COMPETITOR_INTEL: 12, SOLUTION_ENGINEER: 15, SDR_MANAGER: 10 } },
      { id: 'D', text: 'Customer investment protection program', impact: { customerRelationships: 15, accountPenetration: 8, dealVelocity: -3 }, risk: 0.20, stakeholderReactions: { CUSTOMER_SUCCESS: 18, KEY_CUSTOMER: 15, CRO: 8 } },
      { id: 'E', text: 'Aggressive pursuit of competitor\'s vulnerable customers', impact: { pipelineHealth: 12, winRate: 5, customerRelationships: -3 }, risk: 0.35, stakeholderReactions: { COMPETITOR_INTEL: 15, SDR_MANAGER: 12, TOP_PERFORMER: 10 } },
      { id: 'F', text: 'Cost takeout and efficiency value proposition', impact: { winRate: 12, dealVelocity: 5, forecastAccuracy: 5 }, risk: 0.25, stakeholderReactions: { SOLUTION_ENGINEER: 18, KEY_CUSTOMER: 12, MARKETING_VP: 10 } }
    ]
  },
  {
    id: 18,
    phase: 'SALES_CHALLENGES',
    title: 'Sales and Marketing Conflict',
    scenario: 'Lead quality disputes and attribution conflicts have escalated. Marketing and sales alignment is broken.',
    stakeholderFocus: ['MARKETING_VP', 'SDR_MANAGER', 'SALES_VP'],
    options: [
      { id: 'A', text: 'Revenue operations integration', impact: { pipelineHealth: 12, salesProcessMaturity: 10, forecastAccuracy: 5 }, risk: 0.30, stakeholderReactions: { SALES_OPS: 18, CRO: 15, MARKETING_VP: -5 } },
      { id: 'B', text: 'Shared metrics and SLA agreement', impact: { pipelineHealth: 10, forecastAccuracy: 8, teamPerformance: 5 }, risk: 0.20, stakeholderReactions: { SALES_OPS: 15, MARKETING_VP: 10, SDR_MANAGER: 12 } },
      { id: 'C', text: 'Account-based marketing alignment', impact: { pipelineHealth: 8, accountPenetration: 10, winRate: 5 }, risk: 0.25, stakeholderReactions: { MARKETING_VP: 15, TOP_PERFORMER: 10, KEY_CUSTOMER: 8 } },
      { id: 'D', text: 'Joint demand generation planning', impact: { pipelineHealth: 12, customerRelationships: 5, salesProcessMaturity: 5 }, risk: 0.25, stakeholderReactions: { MARKETING_VP: 18, SDR_MANAGER: 12, CRO: 10 } },
      { id: 'E', text: 'Marketing reporting to sales leadership', impact: { pipelineHealth: 10, teamPerformance: 5, customerRelationships: -5 }, risk: 0.40, stakeholderReactions: { SALES_VP: 18, MARKETING_VP: -20, CRO: 5 } },
      { id: 'F', text: 'Separate but coordinated functions', impact: { teamPerformance: 5, pipelineHealth: 5, salesProcessMaturity: 3 }, risk: 0.20, stakeholderReactions: { MARKETING_VP: 10, SALES_VP: 10, SDR_MANAGER: 5 } }
    ]
  },

  // Phase 4: Sales Excellence (Rounds 19-24)
  {
    id: 19,
    phase: 'SALES_EXCELLENCE',
    title: 'Sales Organization Optimization',
    scenario: 'Post-challenges, opportunity to optimize sales organization for sustainable excellence.',
    stakeholderFocus: ['CRO', 'SALES_VP', 'FINANCE_BP'],
    options: [
      { id: 'A', text: 'Specialist role structure implementation', impact: { winRate: 12, salesProcessMaturity: 10, teamPerformance: 5 }, risk: 0.30, stakeholderReactions: { SALES_VP: 15, CRO: 12, TOP_PERFORMER: -5 } },
      { id: 'B', text: 'Account-based sales model', impact: { accountPenetration: 15, customerRelationships: 10, pipelineHealth: -5 }, risk: 0.35, stakeholderReactions: { KEY_CUSTOMER: 18, CUSTOMER_SUCCESS: 15, SDR_MANAGER: -8 } },
      { id: 'C', text: 'Hybrid inside/field sales optimization', impact: { dealVelocity: 12, teamPerformance: 8, winRate: 5 }, risk: 0.25, stakeholderReactions: { REGIONAL_DIRECTOR: 15, SALES_OPS: 12, TOP_PERFORMER: 8 } },
      { id: 'D', text: 'Customer segment-aligned teams', impact: { customerRelationships: 12, winRate: 8, salesProcessMaturity: 5 }, risk: 0.30, stakeholderReactions: { CRO: 15, SOLUTION_ENGINEER: 12, REGIONAL_DIRECTOR: 8 } },
      { id: 'E', text: 'Self-directed team model', impact: { teamPerformance: 12, salesProcessMaturity: 8, forecastAccuracy: -5 }, risk: 0.35, stakeholderReactions: { TOP_PERFORMER: 18, NEW_HIRE_REP: 12, SALES_OPS: -10 } },
      { id: 'F', text: 'Lean sales organization design', impact: { teamPerformance: 10, winRate: 8, forecastAccuracy: 8 }, risk: 0.25, stakeholderReactions: { FINANCE_BP: 18, CRO: 12, REGIONAL_DIRECTOR: 10 } }
    ]
  },
  {
    id: 20,
    phase: 'SALES_EXCELLENCE',
    title: 'Customer Success Integration',
    scenario: 'Opportunity to deeply integrate sales and customer success for complete customer lifecycle management.',
    stakeholderFocus: ['CUSTOMER_SUCCESS', 'KEY_CUSTOMER', 'TOP_PERFORMER'],
    options: [
      { id: 'A', text: 'Unified revenue team model', impact: { accountPenetration: 15, customerRelationships: 12, salesProcessMaturity: 5 }, risk: 0.35, stakeholderReactions: { CUSTOMER_SUCCESS: 18, CRO: 15, SALES_VP: -5 } },
      { id: 'B', text: 'Integrated account planning process', impact: { accountPenetration: 12, forecastAccuracy: 10, customerRelationships: 8 }, risk: 0.25, stakeholderReactions: { CUSTOMER_SUCCESS: 15, SALES_OPS: 12, KEY_CUSTOMER: 10 } },
      { id: 'C', text: 'Customer health-driven sales motions', impact: { customerRelationships: 15, winRate: 8, accountPenetration: 8 }, risk: 0.25, stakeholderReactions: { CUSTOMER_SUCCESS: 18, KEY_CUSTOMER: 15, CRO: 10 } },
      { id: 'D', text: 'Expansion quota for customer success', impact: { accountPenetration: 10, customerRelationships: -5, teamPerformance: 8 }, risk: 0.35, stakeholderReactions: { CUSTOMER_SUCCESS: -8, CRO: 15, FINANCE_BP: 12 } },
      { id: 'E', text: 'Joint customer business reviews', impact: { customerRelationships: 12, accountPenetration: 10, forecastAccuracy: 5 }, risk: 0.20, stakeholderReactions: { KEY_CUSTOMER: 18, CUSTOMER_SUCCESS: 15, TOP_PERFORMER: 10 } },
      { id: 'F', text: 'Customer advocacy program', impact: { pipelineHealth: 10, customerRelationships: 12, winRate: 5 }, risk: 0.20, stakeholderReactions: { KEY_CUSTOMER: 18, MARKETING_VP: 15, CUSTOMER_SUCCESS: 12 } }
    ]
  },
  {
    id: 21,
    phase: 'SALES_EXCELLENCE',
    title: 'Sales Excellence Culture',
    scenario: 'Building sustainable sales culture that attracts and retains top talent while driving consistent results.',
    stakeholderFocus: ['SALES_VP', 'TOP_PERFORMER', 'NEW_HIRE_REP'],
    options: [
      { id: 'A', text: 'High-performance sales culture program', impact: { teamPerformance: 15, winRate: 10, salesProcessMaturity: 5 }, risk: 0.25, stakeholderReactions: { SALES_VP: 18, TOP_PERFORMER: 15, CRO: 12 } },
      { id: 'B', text: 'Sales coaching excellence system', impact: { teamPerformance: 12, winRate: 8, salesProcessMaturity: 8 }, risk: 0.20, stakeholderReactions: { SALES_ENABLEMENT: 18, NEW_HIRE_REP: 15, REGIONAL_DIRECTOR: 12 } },
      { id: 'C', text: 'Recognition and rewards transformation', impact: { teamPerformance: 12, pipelineHealth: 5, customerRelationships: 3 }, risk: 0.25, stakeholderReactions: { TOP_PERFORMER: 18, NEW_HIRE_REP: 12, FINANCE_BP: -5 } },
      { id: 'D', text: 'Career development pathways', impact: { teamPerformance: 10, salesProcessMaturity: 8, winRate: 5 }, risk: 0.20, stakeholderReactions: { NEW_HIRE_REP: 18, SALES_ENABLEMENT: 15, SALES_VP: 10 } },
      { id: 'E', text: 'Collaborative selling culture', impact: { winRate: 10, customerRelationships: 10, teamPerformance: 8 }, risk: 0.20, stakeholderReactions: { SOLUTION_ENGINEER: 15, TOP_PERFORMER: 10, NEW_HIRE_REP: 12 } },
      { id: 'F', text: 'Data-driven performance management', impact: { forecastAccuracy: 12, teamPerformance: 8, winRate: 5 }, risk: 0.25, stakeholderReactions: { SALES_OPS: 18, CRO: 12, TOP_PERFORMER: -8 } }
    ]
  },
  {
    id: 22,
    phase: 'SALES_EXCELLENCE',
    title: 'Predictable Revenue Engine',
    scenario: 'Building predictable, scalable revenue generation capability for sustained growth.',
    stakeholderFocus: ['CRO', 'SALES_OPS', 'MARKETING_VP'],
    options: [
      { id: 'A', text: 'Revenue operations excellence', impact: { forecastAccuracy: 15, pipelineHealth: 12, salesProcessMaturity: 10 }, risk: 0.30, stakeholderReactions: { SALES_OPS: 18, CRO: 15, FINANCE_BP: 12 } },
      { id: 'B', text: 'Demand generation machine', impact: { pipelineHealth: 15, dealVelocity: 10, forecastAccuracy: 5 }, risk: 0.30, stakeholderReactions: { MARKETING_VP: 18, SDR_MANAGER: 15, CRO: 12 } },
      { id: 'C', text: 'Sales velocity optimization', impact: { dealVelocity: 15, winRate: 8, pipelineHealth: 5 }, risk: 0.25, stakeholderReactions: { TOP_PERFORMER: 15, SALES_OPS: 12, REGIONAL_DIRECTOR: 10 } },
      { id: 'D', text: 'Win rate improvement program', impact: { winRate: 15, salesProcessMaturity: 10, teamPerformance: 5 }, risk: 0.25, stakeholderReactions: { SALES_ENABLEMENT: 18, SOLUTION_ENGINEER: 15, CRO: 12 } },
      { id: 'E', text: 'Account expansion excellence', impact: { accountPenetration: 15, customerRelationships: 10, pipelineHealth: 5 }, risk: 0.25, stakeholderReactions: { CUSTOMER_SUCCESS: 18, KEY_CUSTOMER: 15, CRO: 10 } },
      { id: 'F', text: 'Balanced revenue growth model', impact: { pipelineHealth: 10, winRate: 8, accountPenetration: 10 }, risk: 0.20, stakeholderReactions: { CRO: 18, FINANCE_BP: 12, SALES_VP: 10 } }
    ]
  },
  {
    id: 23,
    phase: 'SALES_EXCELLENCE',
    title: 'Strategic Account Excellence',
    scenario: 'Establishing world-class strategic account management for long-term competitive advantage.',
    stakeholderFocus: ['KEY_CUSTOMER', 'TOP_PERFORMER', 'SOLUTION_ENGINEER'],
    options: [
      { id: 'A', text: 'Strategic account program formalization', impact: { accountPenetration: 15, customerRelationships: 12, winRate: 8 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 18, CRO: 15, TOP_PERFORMER: 12 } },
      { id: 'B', text: 'Executive relationship mapping', impact: { customerRelationships: 15, accountPenetration: 10, forecastAccuracy: 5 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 18, TOP_PERFORMER: 15, CRO: 10 } },
      { id: 'C', text: 'Value creation partnership model', impact: { customerRelationships: 12, accountPenetration: 12, winRate: 8 }, risk: 0.30, stakeholderReactions: { KEY_CUSTOMER: 18, SOLUTION_ENGINEER: 15, CUSTOMER_SUCCESS: 12 } },
      { id: 'D', text: 'Multi-year strategic agreements', impact: { forecastAccuracy: 12, accountPenetration: 10, pipelineHealth: -5 }, risk: 0.30, stakeholderReactions: { CRO: 15, KEY_CUSTOMER: 12, FINANCE_BP: 10 } },
      { id: 'E', text: 'Innovation partnership with key accounts', impact: { customerRelationships: 15, accountPenetration: 8, pipelineHealth: 5 }, risk: 0.30, stakeholderReactions: { KEY_CUSTOMER: 18, SOLUTION_ENGINEER: 15, MARKETING_VP: 10 } },
      { id: 'F', text: 'Customer advisory board influence', impact: { customerRelationships: 10, salesProcessMaturity: 8, winRate: 8 }, risk: 0.20, stakeholderReactions: { KEY_CUSTOMER: 18, MARKETING_VP: 12, CRO: 10 } }
    ]
  },
  {
    id: 24,
    phase: 'SALES_EXCELLENCE',
    title: 'Sales Legacy and Future',
    scenario: 'Final strategic decisions to establish lasting sales excellence and sustainable competitive advantage.',
    stakeholderFocus: ['CRO', 'SALES_VP', 'KEY_CUSTOMER'],
    options: [
      { id: 'A', text: 'World-class sales organization benchmark', impact: { teamPerformance: 15, winRate: 12, salesProcessMaturity: 10 }, risk: 0.30, stakeholderReactions: { CRO: 18, SALES_VP: 15, SALES_ENABLEMENT: 12 } },
      { id: 'B', text: 'Customer relationship excellence', impact: { customerRelationships: 15, accountPenetration: 12, pipelineHealth: 8 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 18, CUSTOMER_SUCCESS: 15, CRO: 12 } },
      { id: 'C', text: 'Revenue predictability mastery', impact: { forecastAccuracy: 15, pipelineHealth: 12, winRate: 8 }, risk: 0.25, stakeholderReactions: { SALES_OPS: 18, CRO: 15, FINANCE_BP: 15 } },
      { id: 'D', text: 'Sales talent excellence', impact: { teamPerformance: 15, winRate: 10, customerRelationships: 8 }, risk: 0.25, stakeholderReactions: { SALES_VP: 18, TOP_PERFORMER: 15, NEW_HIRE_REP: 15 } },
      { id: 'E', text: 'Technology-enabled selling', impact: { salesProcessMaturity: 12, dealVelocity: 12, winRate: 8 }, risk: 0.30, stakeholderReactions: { SALES_OPS: 18, DIGITAL_OPS: 15, CRO: 12 } },
      { id: 'F', text: 'Balanced excellence across all dimensions', impact: { winRate: 10, teamPerformance: 10, customerRelationships: 10 }, risk: 0.20, stakeholderReactions: { CRO: 15, SALES_VP: 12, KEY_CUSTOMER: 12 } }
    ]
  }
];

export const PHASE_DESCRIPTIONS = {
  SALES_FOUNDATION: {
    name: 'Sales Foundation',
    description: 'Establish core sales capabilities and processes',
    rounds: [1, 2, 3, 4, 5, 6]
  },
  SALES_EXECUTION: {
    name: 'Sales Execution',
    description: 'Execute sales strategies and drive performance',
    rounds: [7, 8, 9, 10, 11, 12]
  },
  SALES_CHALLENGES: {
    name: 'Sales Challenges',
    description: 'Navigate sales crises and competitive pressures',
    rounds: [13, 14, 15, 16, 17, 18]
  },
  SALES_EXCELLENCE: {
    name: 'Sales Excellence',
    description: 'Achieve and sustain world-class sales performance',
    rounds: [19, 20, 21, 22, 23, 24]
  }
};

export const getRoundById = (id) => ROUNDS.find(r => r.id === id);
export const getRoundsByPhase = (phase) => ROUNDS.filter(r => r.phase === phase);
export const getAllRounds = () => ROUNDS;
