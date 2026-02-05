// Financial Acumen Simulation - Rounds & Scenarios
// 24 rounds with progressive financial challenges, each with 6 decision options

export const ROUNDS = [
  // PHASE 1: FINANCIAL FOUNDATION (Rounds 1-6)
  {
    round: 1,
    phase: 'foundation',
    title: 'Financial Strategy Definition',
    scenario: {
      description: 'As the new CFO, you must define the financial strategy and communicate it to stakeholders. The company lacks a clear financial framework.',
      context: 'Investors are confused about capital allocation priorities. The board wants a clear financial policy.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['board_chair', 'lead_investor', 'ceo']
    },
    options: [
      { id: 'r1_o1', label: 'Comprehensive capital allocation framework', impact: { capitalEfficiency: 0.1, investorConfidence: 0.1, forecastAccuracy: 0.05 }, risk: 'low', stakeholderReactions: { board_chair: 'very_positive', lead_investor: 'positive', activist: 'neutral' } },
      { id: 'r1_o2', label: 'Growth-focused investment strategy', impact: { capitalEfficiency: 0.05, investorConfidence: 0.08, financialHealth: 0.05 }, risk: 'medium', stakeholderReactions: { ceo: 'very_positive', activist: 'negative', lead_investor: 'neutral' } },
      { id: 'r1_o3', label: 'Shareholder return priority', impact: { investorConfidence: 0.12, capitalEfficiency: 0.08, cashPosition: -0.05 }, risk: 'medium', stakeholderReactions: { activist: 'very_positive', lead_investor: 'positive', ceo: 'concerned' } },
      { id: 'r1_o4', label: 'Balanced stakeholder approach', impact: { investorConfidence: 0.05, capitalEfficiency: 0.05, financialHealth: 0.05 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', ceo: 'positive', activist: 'concerned' } },
      { id: 'r1_o5', label: 'Debt reduction focus', impact: { debtCapacity: 0.12, investorConfidence: 0.08, capitalEfficiency: 0.02 }, risk: 'low', stakeholderReactions: { rating_analyst: 'very_positive', treasurer: 'positive', ceo: 'neutral' } },
      { id: 'r1_o6', label: 'Wait for market clarity', impact: { investorConfidence: -0.08, capitalEfficiency: -0.02, forecastAccuracy: -0.05 }, risk: 'high', stakeholderReactions: { activist: 'very_negative', lead_investor: 'negative', board_chair: 'negative' } }
    ]
  },

  {
    round: 2,
    phase: 'foundation',
    title: 'Financial Reporting Enhancement',
    scenario: {
      description: 'Financial reporting is inconsistent and lacks analytical depth. Investors and analysts complain about transparency.',
      context: 'Competitor reporting is more detailed. Analysts are lowering coverage quality scores.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['ir_director', 'controller', 'lead_investor']
    },
    options: [
      { id: 'r2_o1', label: 'Enhanced segment and metric disclosure', impact: { investorConfidence: 0.1, forecastAccuracy: 0.08, financialHealth: 0.02 }, risk: 'low', stakeholderReactions: { lead_investor: 'very_positive', ir_director: 'positive', controller: 'concerned' } },
      { id: 'r2_o2', label: 'Real-time financial dashboard', impact: { forecastAccuracy: 0.12, capitalEfficiency: 0.05, investorConfidence: 0.05 }, risk: 'medium', stakeholderReactions: { vp_fpa: 'very_positive', ceo: 'positive', controller: 'concerned' } },
      { id: 'r2_o3', label: 'Industry-leading transparency', impact: { investorConfidence: 0.12, forecastAccuracy: 0.05, capitalEfficiency: 0.02 }, risk: 'medium', stakeholderReactions: { ir_director: 'very_positive', activist: 'positive', cfo: 'neutral' } },
      { id: 'r2_o4', label: 'Streamlined essential metrics', impact: { forecastAccuracy: 0.08, investorConfidence: 0.05, financialHealth: 0.02 }, risk: 'low', stakeholderReactions: { controller: 'positive', cfo: 'positive', lead_investor: 'neutral' } },
      { id: 'r2_o5', label: 'Analyst day and investor outreach', impact: { investorConfidence: 0.1, forecastAccuracy: 0.02, capitalEfficiency: 0.02 }, risk: 'low', stakeholderReactions: { ir_director: 'positive', lead_investor: 'positive', ceo: 'positive' } },
      { id: 'r2_o6', label: 'Maintain current reporting', impact: { investorConfidence: -0.05, forecastAccuracy: -0.02, capitalEfficiency: 0 }, risk: 'medium', stakeholderReactions: { lead_investor: 'negative', ir_director: 'negative', activist: 'negative' } }
    ]
  },

  {
    round: 3,
    phase: 'foundation',
    title: 'Working Capital Optimization',
    scenario: {
      description: 'Cash conversion cycle is longer than industry peers. Significant capital is tied up in working capital.',
      context: 'Operations wants inventory buffers. Sales wants extended customer terms. Procurement wants quick supplier payments.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['treasurer', 'coo', 'bu_cfo']
    },
    options: [
      { id: 'r3_o1', label: 'Comprehensive working capital program', impact: { cashPosition: 0.12, capitalEfficiency: 0.1, financialHealth: 0.05 }, risk: 'medium', stakeholderReactions: { treasurer: 'very_positive', coo: 'concerned', bu_cfo: 'negative' } },
      { id: 'r3_o2', label: 'Supply chain financing initiative', impact: { cashPosition: 0.08, capitalEfficiency: 0.08, debtCapacity: 0.02 }, risk: 'low', stakeholderReactions: { treasurer: 'positive', coo: 'positive', lead_banker: 'positive' } },
      { id: 'r3_o3', label: 'Inventory optimization focus', impact: { cashPosition: 0.1, capitalEfficiency: 0.08, financialHealth: 0.02 }, risk: 'medium', stakeholderReactions: { coo: 'concerned', treasurer: 'positive', bu_cfo: 'neutral' } },
      { id: 'r3_o4', label: 'Customer terms rationalization', impact: { cashPosition: 0.08, investorConfidence: 0.02, capitalEfficiency: 0.05 }, risk: 'medium', stakeholderReactions: { bu_cfo: 'negative', treasurer: 'positive', ceo: 'concerned' } },
      { id: 'r3_o5', label: 'Technology-enabled automation', impact: { capitalEfficiency: 0.1, forecastAccuracy: 0.08, cashPosition: 0.05 }, risk: 'medium', stakeholderReactions: { controller: 'positive', vp_fpa: 'positive', coo: 'positive' } },
      { id: 'r3_o6', label: 'Accept current working capital levels', impact: { cashPosition: -0.02, capitalEfficiency: -0.02, investorConfidence: -0.02 }, risk: 'medium', stakeholderReactions: { activist: 'negative', treasurer: 'negative', lead_investor: 'concerned' } }
    ]
  },

  {
    round: 4,
    phase: 'foundation',
    title: 'Cost Structure Review',
    scenario: {
      description: 'Operating margins lag peers. Fixed costs have grown faster than revenue. A comprehensive cost review is needed.',
      context: 'The activist investor is pushing for margin improvement. Operations believes cuts would hurt capabilities.',
      pressure: 'high',
      timeConstraint: 'urgent',
      stakeholderFocus: ['activist', 'coo', 'ceo']
    },
    options: [
      { id: 'r4_o1', label: 'Zero-based budgeting implementation', impact: { financialHealth: 0.12, capitalEfficiency: 0.1, investorConfidence: 0.08 }, risk: 'high', stakeholderReactions: { activist: 'very_positive', coo: 'negative', bu_cfo: 'negative' } },
      { id: 'r4_o2', label: 'Targeted efficiency initiatives', impact: { financialHealth: 0.08, capitalEfficiency: 0.08, investorConfidence: 0.05 }, risk: 'medium', stakeholderReactions: { ceo: 'positive', coo: 'neutral', activist: 'neutral' } },
      { id: 'r4_o3', label: 'Outsourcing and shared services', impact: { financialHealth: 0.1, capitalEfficiency: 0.08, forecastAccuracy: 0.02 }, risk: 'medium', stakeholderReactions: { coo: 'positive', activist: 'positive', bu_cfo: 'concerned' } },
      { id: 'r4_o4', label: 'Investment in automation', impact: { capitalEfficiency: 0.1, financialHealth: 0.05, forecastAccuracy: 0.05 }, risk: 'medium', stakeholderReactions: { coo: 'positive', ceo: 'positive', activist: 'neutral' } },
      { id: 'r4_o5', label: 'Revenue growth over cost cuts', impact: { financialHealth: 0.02, investorConfidence: 0.02, capitalEfficiency: -0.02 }, risk: 'high', stakeholderReactions: { ceo: 'positive', activist: 'very_negative', lead_investor: 'concerned' } },
      { id: 'r4_o6', label: 'Across-the-board reduction', impact: { financialHealth: 0.08, capitalEfficiency: 0.05, investorConfidence: -0.05 }, risk: 'high', stakeholderReactions: { activist: 'positive', coo: 'very_negative', ceo: 'concerned' } }
    ]
  },

  {
    round: 5,
    phase: 'foundation',
    title: 'Treasury Management',
    scenario: {
      description: 'Treasury operations are fragmented across regions. Cash visibility is limited and banking relationships are not optimized.',
      context: 'Interest rate volatility is increasing. Currency exposures are not fully hedged.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['treasurer', 'cfo', 'audit_chair']
    },
    options: [
      { id: 'r5_o1', label: 'Treasury management system upgrade', impact: { cashPosition: 0.1, forecastAccuracy: 0.1, capitalEfficiency: 0.05 }, risk: 'medium', stakeholderReactions: { treasurer: 'very_positive', controller: 'positive', cfo: 'positive' } },
      { id: 'r5_o2', label: 'Bank relationship rationalization', impact: { cashPosition: 0.08, debtCapacity: 0.08, capitalEfficiency: 0.05 }, risk: 'low', stakeholderReactions: { treasurer: 'positive', lead_banker: 'concerned', cfo: 'positive' } },
      { id: 'r5_o3', label: 'Comprehensive hedging program', impact: { financialHealth: 0.08, forecastAccuracy: 0.08, investorConfidence: 0.05 }, risk: 'medium', stakeholderReactions: { audit_chair: 'positive', treasurer: 'positive', activist: 'neutral' } },
      { id: 'r5_o4', label: 'Cash pooling and centralization', impact: { cashPosition: 0.1, capitalEfficiency: 0.08, forecastAccuracy: 0.05 }, risk: 'low', stakeholderReactions: { treasurer: 'positive', bu_cfo: 'concerned', cfo: 'positive' } },
      { id: 'r5_o5', label: 'Interest rate optimization', impact: { financialHealth: 0.05, debtCapacity: 0.05, cashPosition: 0.05 }, risk: 'low', stakeholderReactions: { treasurer: 'positive', cfo: 'positive', rating_analyst: 'neutral' } },
      { id: 'r5_o6', label: 'Maintain current treasury operations', impact: { cashPosition: -0.02, forecastAccuracy: -0.02, capitalEfficiency: 0 }, risk: 'medium', stakeholderReactions: { audit_chair: 'concerned', treasurer: 'negative', cfo: 'neutral' } }
    ]
  },

  {
    round: 6,
    phase: 'foundation',
    title: 'Financial Planning Process',
    scenario: {
      description: 'The annual budget process is lengthy and inaccurate. Forecasts consistently miss actuals. Business partners are frustrated.',
      context: 'The CEO wants faster planning cycles. Business units game the system.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['vp_fpa', 'bu_cfo', 'ceo']
    },
    options: [
      { id: 'r6_o1', label: 'Rolling forecast implementation', impact: { forecastAccuracy: 0.15, capitalEfficiency: 0.08, investorConfidence: 0.05 }, risk: 'medium', stakeholderReactions: { vp_fpa: 'very_positive', ceo: 'positive', bu_cfo: 'concerned' } },
      { id: 'r6_o2', label: 'Driver-based planning model', impact: { forecastAccuracy: 0.12, capitalEfficiency: 0.08, financialHealth: 0.02 }, risk: 'medium', stakeholderReactions: { vp_fpa: 'positive', coo: 'positive', bu_cfo: 'neutral' } },
      { id: 'r6_o3', label: 'AI-powered forecasting', impact: { forecastAccuracy: 0.12, capitalEfficiency: 0.05, investorConfidence: 0.05 }, risk: 'high', stakeholderReactions: { ceo: 'positive', vp_fpa: 'positive', controller: 'concerned' } },
      { id: 'r6_o4', label: 'Scenario planning capability', impact: { forecastAccuracy: 0.1, investorConfidence: 0.08, financialHealth: 0.02 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', ceo: 'positive', vp_fpa: 'positive' } },
      { id: 'r6_o5', label: 'Business partnership model', impact: { forecastAccuracy: 0.08, capitalEfficiency: 0.08, financialHealth: 0.05 }, risk: 'low', stakeholderReactions: { bu_cfo: 'very_positive', vp_fpa: 'positive', coo: 'positive' } },
      { id: 'r6_o6', label: 'Streamline current process only', impact: { forecastAccuracy: 0.02, capitalEfficiency: 0.02, investorConfidence: 0 }, risk: 'low', stakeholderReactions: { bu_cfo: 'positive', vp_fpa: 'neutral', ceo: 'concerned' } }
    ]
  },

  // PHASE 2: CAPITAL DECISIONS (Rounds 7-12)
  {
    round: 7,
    phase: 'capital',
    title: 'Major Capital Investment',
    scenario: {
      description: 'A significant growth investment opportunity requires $200M in capital. Returns are attractive but execution risk exists.',
      context: 'The investment would transform market position. Competitors are also considering similar investments.',
      pressure: 'high',
      timeConstraint: 'urgent',
      stakeholderFocus: ['ceo', 'board_chair', 'lead_investor']
    },
    options: [
      { id: 'r7_o1', label: 'Full investment commitment', impact: { capitalEfficiency: 0.08, cashPosition: -0.15, investorConfidence: 0.08 }, risk: 'high', stakeholderReactions: { ceo: 'very_positive', activist: 'concerned', lead_investor: 'neutral' } },
      { id: 'r7_o2', label: 'Phased investment approach', impact: { capitalEfficiency: 0.08, cashPosition: -0.08, forecastAccuracy: 0.05 }, risk: 'medium', stakeholderReactions: { board_chair: 'positive', ceo: 'neutral', lead_investor: 'positive' } },
      { id: 'r7_o3', label: 'Joint venture structure', impact: { capitalEfficiency: 0.1, cashPosition: -0.05, debtCapacity: 0.05 }, risk: 'medium', stakeholderReactions: { ceo: 'neutral', treasurer: 'positive', lead_banker: 'positive' } },
      { id: 'r7_o4', label: 'Decline and return capital', impact: { cashPosition: 0.1, investorConfidence: 0.05, capitalEfficiency: -0.02 }, risk: 'medium', stakeholderReactions: { activist: 'positive', ceo: 'negative', lead_investor: 'neutral' } },
      { id: 'r7_o5', label: 'Strategic alternative analysis', impact: { forecastAccuracy: 0.08, capitalEfficiency: 0.05, investorConfidence: 0.05 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', vp_fpa: 'positive', ceo: 'concerned' } },
      { id: 'r7_o6', label: 'Delay decision pending more data', impact: { capitalEfficiency: -0.05, investorConfidence: -0.05, forecastAccuracy: 0.02 }, risk: 'medium', stakeholderReactions: { ceo: 'negative', activist: 'negative', lead_investor: 'concerned' } }
    ]
  },

  {
    round: 8,
    phase: 'capital',
    title: 'Debt Refinancing',
    scenario: {
      description: 'A major debt facility matures in 18 months. Market conditions are favorable but uncertain. The rating agency is watching closely.',
      context: 'Interest rates may rise. The current rating is at risk if leverage increases.',
      pressure: 'high',
      timeConstraint: 'urgent',
      stakeholderFocus: ['treasurer', 'rating_analyst', 'lead_banker']
    },
    options: [
      { id: 'r8_o1', label: 'Refinance now at favorable rates', impact: { debtCapacity: 0.1, cashPosition: 0.05, financialHealth: 0.05 }, risk: 'low', stakeholderReactions: { treasurer: 'very_positive', rating_analyst: 'positive', lead_banker: 'positive' } },
      { id: 'r8_o2', label: 'Extend maturity with covenant flexibility', impact: { debtCapacity: 0.08, financialHealth: 0.05, forecastAccuracy: 0.02 }, risk: 'low', stakeholderReactions: { treasurer: 'positive', cfo: 'positive', rating_analyst: 'neutral' } },
      { id: 'r8_o3', label: 'Reduce debt with equity issuance', impact: { debtCapacity: 0.12, investorConfidence: -0.05, capitalEfficiency: 0.05 }, risk: 'medium', stakeholderReactions: { rating_analyst: 'very_positive', activist: 'negative', lead_investor: 'concerned' } },
      { id: 'r8_o4', label: 'Diversify funding sources', impact: { debtCapacity: 0.1, financialHealth: 0.05, investorConfidence: 0.02 }, risk: 'medium', stakeholderReactions: { treasurer: 'positive', lead_banker: 'concerned', cfo: 'positive' } },
      { id: 'r8_o5', label: 'Wait for better market conditions', impact: { debtCapacity: -0.02, financialHealth: -0.02, cashPosition: 0.02 }, risk: 'high', stakeholderReactions: { treasurer: 'negative', rating_analyst: 'concerned', board_chair: 'concerned' } },
      { id: 'r8_o6', label: 'Aggressive leverage increase', impact: { cashPosition: 0.1, debtCapacity: -0.1, investorConfidence: -0.05 }, risk: 'high', stakeholderReactions: { activist: 'positive', rating_analyst: 'very_negative', board_chair: 'negative' } }
    ]
  },

  {
    round: 9,
    phase: 'capital',
    title: 'Acquisition Opportunity',
    scenario: {
      description: 'A strategic acquisition target has become available. The deal would be transformative but requires significant financing.',
      context: 'Synergy potential is high but integration risk exists. Competitors may also bid.',
      pressure: 'critical',
      timeConstraint: 'immediate',
      stakeholderFocus: ['ceo', 'board_chair', 'lead_banker']
    },
    options: [
      { id: 'r9_o1', label: 'Aggressive bid to win', impact: { capitalEfficiency: 0.05, cashPosition: -0.2, debtCapacity: -0.1 }, risk: 'very_high', stakeholderReactions: { ceo: 'very_positive', board_chair: 'concerned', rating_analyst: 'negative' } },
      { id: 'r9_o2', label: 'Disciplined valuation approach', impact: { capitalEfficiency: 0.08, investorConfidence: 0.08, forecastAccuracy: 0.05 }, risk: 'medium', stakeholderReactions: { board_chair: 'positive', lead_investor: 'positive', ceo: 'neutral' } },
      { id: 'r9_o3', label: 'Partnership or minority stake', impact: { capitalEfficiency: 0.05, cashPosition: -0.05, debtCapacity: 0.02 }, risk: 'low', stakeholderReactions: { treasurer: 'positive', ceo: 'concerned', lead_banker: 'neutral' } },
      { id: 'r9_o4', label: 'Walk away - focus on organic growth', impact: { cashPosition: 0.05, investorConfidence: 0.02, capitalEfficiency: 0.02 }, risk: 'low', stakeholderReactions: { activist: 'neutral', ceo: 'negative', lead_investor: 'positive' } },
      { id: 'r9_o5', label: 'Creative financing structure', impact: { capitalEfficiency: 0.1, cashPosition: -0.1, debtCapacity: 0.02 }, risk: 'high', stakeholderReactions: { lead_banker: 'positive', treasurer: 'positive', rating_analyst: 'concerned' } },
      { id: 'r9_o6', label: 'Request exclusive negotiation period', impact: { forecastAccuracy: 0.05, capitalEfficiency: 0.02, investorConfidence: 0.02 }, risk: 'medium', stakeholderReactions: { board_chair: 'positive', ceo: 'positive', activist: 'neutral' } }
    ]
  },

  {
    round: 10,
    phase: 'capital',
    title: 'Shareholder Return Policy',
    scenario: {
      description: 'Cash has accumulated and investors are questioning capital allocation. Pressure for increased dividends and buybacks is mounting.',
      context: 'The activist wants aggressive capital return. Long-term investors prefer investment flexibility.',
      pressure: 'high',
      timeConstraint: 'standard',
      stakeholderFocus: ['activist', 'lead_investor', 'board_chair']
    },
    options: [
      { id: 'r10_o1', label: 'Significant buyback program', impact: { investorConfidence: 0.12, cashPosition: -0.15, capitalEfficiency: 0.08 }, risk: 'medium', stakeholderReactions: { activist: 'very_positive', lead_investor: 'positive', ceo: 'neutral' } },
      { id: 'r10_o2', label: 'Dividend increase commitment', impact: { investorConfidence: 0.1, cashPosition: -0.08, financialHealth: 0.02 }, risk: 'low', stakeholderReactions: { lead_investor: 'positive', activist: 'neutral', board_chair: 'positive' } },
      { id: 'r10_o3', label: 'Balanced return and investment', impact: { investorConfidence: 0.08, capitalEfficiency: 0.08, cashPosition: -0.1 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', lead_investor: 'positive', ceo: 'positive' } },
      { id: 'r10_o4', label: 'Special dividend', impact: { investorConfidence: 0.1, cashPosition: -0.12, capitalEfficiency: 0.05 }, risk: 'medium', stakeholderReactions: { activist: 'positive', lead_investor: 'positive', treasurer: 'concerned' } },
      { id: 'r10_o5', label: 'Retain for strategic optionality', impact: { cashPosition: 0.05, investorConfidence: -0.08, capitalEfficiency: -0.02 }, risk: 'high', stakeholderReactions: { activist: 'very_negative', ceo: 'positive', lead_investor: 'concerned' } },
      { id: 'r10_o6', label: 'Variable return based on performance', impact: { investorConfidence: 0.05, capitalEfficiency: 0.08, forecastAccuracy: 0.05 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', vp_fpa: 'positive', activist: 'neutral' } }
    ]
  },

  {
    round: 11,
    phase: 'capital',
    title: 'Portfolio Optimization',
    scenario: {
      description: 'Some business units are underperforming and consuming capital. A portfolio review suggests divestitures may create value.',
      context: 'Divestitures would simplify the company but reduce scale. Management teams resist change.',
      pressure: 'high',
      timeConstraint: 'standard',
      stakeholderFocus: ['activist', 'bu_cfo', 'ceo']
    },
    options: [
      { id: 'r11_o1', label: 'Divest underperforming units', impact: { capitalEfficiency: 0.12, investorConfidence: 0.1, financialHealth: 0.08 }, risk: 'high', stakeholderReactions: { activist: 'very_positive', bu_cfo: 'very_negative', lead_investor: 'positive' } },
      { id: 'r11_o2', label: 'Turnaround plan first', impact: { capitalEfficiency: 0.05, financialHealth: 0.05, investorConfidence: 0.02 }, risk: 'medium', stakeholderReactions: { ceo: 'positive', bu_cfo: 'positive', activist: 'concerned' } },
      { id: 'r11_o3', label: 'Spin-off to unlock value', impact: { investorConfidence: 0.1, capitalEfficiency: 0.1, financialHealth: 0.05 }, risk: 'high', stakeholderReactions: { activist: 'positive', lead_investor: 'positive', bu_cfo: 'negative' } },
      { id: 'r11_o4', label: 'Strategic buyer sale process', impact: { cashPosition: 0.15, capitalEfficiency: 0.1, investorConfidence: 0.08 }, risk: 'medium', stakeholderReactions: { lead_banker: 'positive', activist: 'positive', ceo: 'neutral' } },
      { id: 'r11_o5', label: 'Management buyout facilitation', impact: { capitalEfficiency: 0.08, financialHealth: 0.05, investorConfidence: 0.02 }, risk: 'medium', stakeholderReactions: { bu_cfo: 'positive', ceo: 'neutral', activist: 'neutral' } },
      { id: 'r11_o6', label: 'Maintain current portfolio', impact: { capitalEfficiency: -0.05, investorConfidence: -0.08, financialHealth: -0.02 }, risk: 'medium', stakeholderReactions: { activist: 'very_negative', lead_investor: 'negative', bu_cfo: 'positive' } }
    ]
  },

  {
    round: 12,
    phase: 'capital',
    title: 'Capital Structure Optimization',
    scenario: {
      description: 'The capital structure may not be optimal. Analysis suggests different leverage could reduce cost of capital.',
      context: 'Rating implications must be considered. Interest rate environment is uncertain.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['rating_analyst', 'treasurer', 'board_chair']
    },
    options: [
      { id: 'r12_o1', label: 'Increase leverage to optimize WACC', impact: { capitalEfficiency: 0.1, debtCapacity: -0.08, financialHealth: 0.05 }, risk: 'medium', stakeholderReactions: { activist: 'positive', rating_analyst: 'negative', treasurer: 'concerned' } },
      { id: 'r12_o2', label: 'Delever for rating upgrade', impact: { debtCapacity: 0.12, investorConfidence: 0.08, cashPosition: -0.05 }, risk: 'low', stakeholderReactions: { rating_analyst: 'very_positive', board_chair: 'positive', activist: 'negative' } },
      { id: 'r12_o3', label: 'Hybrid instruments for flexibility', impact: { capitalEfficiency: 0.08, debtCapacity: 0.05, financialHealth: 0.05 }, risk: 'medium', stakeholderReactions: { treasurer: 'positive', lead_banker: 'positive', rating_analyst: 'neutral' } },
      { id: 'r12_o4', label: 'Target rating maintenance', impact: { debtCapacity: 0.05, investorConfidence: 0.08, financialHealth: 0.05 }, risk: 'low', stakeholderReactions: { rating_analyst: 'positive', board_chair: 'positive', lead_investor: 'positive' } },
      { id: 'r12_o5', label: 'Dynamic capital structure policy', impact: { capitalEfficiency: 0.08, forecastAccuracy: 0.08, debtCapacity: 0.05 }, risk: 'medium', stakeholderReactions: { vp_fpa: 'positive', treasurer: 'positive', board_chair: 'positive' } },
      { id: 'r12_o6', label: 'Maintain current structure', impact: { capitalEfficiency: 0, debtCapacity: 0, investorConfidence: -0.02 }, risk: 'low', stakeholderReactions: { treasurer: 'neutral', rating_analyst: 'neutral', activist: 'concerned' } }
    ]
  },

  // PHASE 3: FINANCIAL CHALLENGES (Rounds 13-18)
  {
    round: 13,
    phase: 'challenges',
    title: 'Earnings Miss',
    scenario: {
      description: 'The quarter will miss analyst expectations significantly. You must decide how to communicate and respond.',
      context: 'The miss is due to market factors and execution issues. Guidance may need revision.',
      pressure: 'critical',
      timeConstraint: 'immediate',
      stakeholderFocus: ['ir_director', 'lead_investor', 'ceo']
    },
    options: [
      { id: 'r13_o1', label: 'Transparent disclosure with action plan', impact: { investorConfidence: 0.05, forecastAccuracy: 0.08, financialHealth: 0.02 }, risk: 'medium', stakeholderReactions: { lead_investor: 'positive', ir_director: 'positive', activist: 'neutral' } },
      { id: 'r13_o2', label: 'Pre-announce to manage expectations', impact: { investorConfidence: 0.08, forecastAccuracy: 0.05, capitalEfficiency: 0.02 }, risk: 'low', stakeholderReactions: { ir_director: 'positive', lead_investor: 'positive', ceo: 'neutral' } },
      { id: 'r13_o3', label: 'Emphasize non-GAAP adjusted results', impact: { investorConfidence: -0.05, forecastAccuracy: 0.02, capitalEfficiency: 0.02 }, risk: 'high', stakeholderReactions: { activist: 'negative', audit_chair: 'concerned', lead_investor: 'concerned' } },
      { id: 'r13_o4', label: 'Accelerate cost reduction announcement', impact: { investorConfidence: 0.05, financialHealth: 0.08, capitalEfficiency: 0.05 }, risk: 'medium', stakeholderReactions: { activist: 'positive', coo: 'concerned', ceo: 'neutral' } },
      { id: 'r13_o5', label: 'Management change announcement', impact: { investorConfidence: 0.02, capitalEfficiency: 0.05, financialHealth: -0.02 }, risk: 'high', stakeholderReactions: { board_chair: 'neutral', bu_cfo: 'very_negative', ceo: 'negative' } },
      { id: 'r13_o6', label: 'Minimize disclosure, blame externals', impact: { investorConfidence: -0.1, forecastAccuracy: -0.05, financialHealth: -0.02 }, risk: 'very_high', stakeholderReactions: { lead_investor: 'very_negative', audit_chair: 'negative', activist: 'very_negative' } }
    ]
  },

  {
    round: 14,
    phase: 'challenges',
    title: 'Liquidity Crisis',
    scenario: {
      description: 'An unexpected event has created a cash crunch. Near-term liquidity is at risk without immediate action.',
      context: 'Banks are nervous. The rating agency may downgrade. Options are limited.',
      pressure: 'critical',
      timeConstraint: 'immediate',
      stakeholderFocus: ['treasurer', 'lead_banker', 'rating_analyst']
    },
    options: [
      { id: 'r14_o1', label: 'Emergency credit facility draw', impact: { cashPosition: 0.15, debtCapacity: -0.1, investorConfidence: -0.05 }, risk: 'medium', stakeholderReactions: { treasurer: 'positive', lead_banker: 'neutral', rating_analyst: 'negative' } },
      { id: 'r14_o2', label: 'Asset sale for liquidity', impact: { cashPosition: 0.12, capitalEfficiency: 0.05, financialHealth: 0.02 }, risk: 'high', stakeholderReactions: { lead_banker: 'positive', activist: 'positive', bu_cfo: 'negative' } },
      { id: 'r14_o3', label: 'Emergency equity raise', impact: { cashPosition: 0.15, debtCapacity: 0.1, investorConfidence: -0.1 }, risk: 'high', stakeholderReactions: { rating_analyst: 'positive', activist: 'very_negative', lead_investor: 'negative' } },
      { id: 'r14_o4', label: 'Supplier and customer negotiations', impact: { cashPosition: 0.1, financialHealth: 0.02, capitalEfficiency: 0.02 }, risk: 'medium', stakeholderReactions: { treasurer: 'positive', coo: 'positive', bu_cfo: 'concerned' } },
      { id: 'r14_o5', label: 'Comprehensive restructuring', impact: { financialHealth: 0.1, debtCapacity: 0.08, cashPosition: 0.05 }, risk: 'high', stakeholderReactions: { lead_banker: 'positive', board_chair: 'concerned', ceo: 'concerned' } },
      { id: 'r14_o6', label: 'Hope for market improvement', impact: { cashPosition: -0.15, financialHealth: -0.1, investorConfidence: -0.15 }, risk: 'very_high', stakeholderReactions: { treasurer: 'very_negative', rating_analyst: 'very_negative', board_chair: 'very_negative' } }
    ]
  },

  {
    round: 15,
    phase: 'challenges',
    title: 'Accounting Investigation',
    scenario: {
      description: 'Internal audit has identified potential accounting irregularities. The external auditor is asking questions.',
      context: 'The issues may require restatement. SEC notification may be necessary.',
      pressure: 'critical',
      timeConstraint: 'urgent',
      stakeholderFocus: ['audit_chair', 'external_auditor', 'controller']
    },
    options: [
      { id: 'r15_o1', label: 'Full independent investigation', impact: { forecastAccuracy: 0.1, investorConfidence: 0.05, financialHealth: -0.05 }, risk: 'medium', stakeholderReactions: { audit_chair: 'very_positive', external_auditor: 'positive', ceo: 'concerned' } },
      { id: 'r15_o2', label: 'Proactive SEC disclosure', impact: { investorConfidence: 0.05, forecastAccuracy: 0.08, financialHealth: -0.02 }, risk: 'medium', stakeholderReactions: { audit_chair: 'positive', external_auditor: 'positive', board_chair: 'neutral' } },
      { id: 'r15_o3', label: 'Restatement if necessary', impact: { forecastAccuracy: 0.12, investorConfidence: -0.05, financialHealth: 0.02 }, risk: 'high', stakeholderReactions: { external_auditor: 'very_positive', activist: 'negative', lead_investor: 'negative' } },
      { id: 'r15_o4', label: 'Personnel accountability actions', impact: { forecastAccuracy: 0.08, investorConfidence: 0.05, capitalEfficiency: -0.02 }, risk: 'medium', stakeholderReactions: { board_chair: 'positive', audit_chair: 'positive', controller: 'concerned' } },
      { id: 'r15_o5', label: 'Control remediation program', impact: { forecastAccuracy: 0.1, financialHealth: 0.05, investorConfidence: 0.02 }, risk: 'low', stakeholderReactions: { external_auditor: 'positive', controller: 'positive', audit_chair: 'positive' } },
      { id: 'r15_o6', label: 'Minimize and contain', impact: { forecastAccuracy: -0.1, investorConfidence: -0.1, financialHealth: -0.08 }, risk: 'very_high', stakeholderReactions: { external_auditor: 'very_negative', audit_chair: 'very_negative', lead_investor: 'very_negative' } }
    ]
  },

  {
    round: 16,
    phase: 'challenges',
    title: 'Activist Campaign',
    scenario: {
      description: 'The activist investor has launched a public campaign demanding board seats and strategic changes.',
      context: 'Proxy season is approaching. Other investors are being solicited.',
      pressure: 'critical',
      timeConstraint: 'urgent',
      stakeholderFocus: ['activist', 'board_chair', 'lead_investor']
    },
    options: [
      { id: 'r16_o1', label: 'Negotiate settlement', impact: { investorConfidence: 0.05, capitalEfficiency: 0.05, financialHealth: 0.02 }, risk: 'medium', stakeholderReactions: { activist: 'positive', board_chair: 'neutral', lead_investor: 'positive' } },
      { id: 'r16_o2', label: 'Fight the campaign publicly', impact: { investorConfidence: -0.08, capitalEfficiency: 0.02, financialHealth: -0.02 }, risk: 'very_high', stakeholderReactions: { activist: 'very_negative', board_chair: 'concerned', lead_investor: 'concerned' } },
      { id: 'r16_o3', label: 'Accelerate value creation plan', impact: { capitalEfficiency: 0.1, investorConfidence: 0.08, financialHealth: 0.05 }, risk: 'medium', stakeholderReactions: { board_chair: 'positive', lead_investor: 'positive', activist: 'neutral' } },
      { id: 'r16_o4', label: 'Shareholder engagement campaign', impact: { investorConfidence: 0.1, capitalEfficiency: 0.02, forecastAccuracy: 0.02 }, risk: 'low', stakeholderReactions: { ir_director: 'positive', lead_investor: 'positive', activist: 'neutral' } },
      { id: 'r16_o5', label: 'Board refreshment proactively', impact: { investorConfidence: 0.08, capitalEfficiency: 0.05, financialHealth: 0.02 }, risk: 'medium', stakeholderReactions: { activist: 'positive', board_chair: 'concerned', lead_investor: 'positive' } },
      { id: 'r16_o6', label: 'Adopt activist demands', impact: { investorConfidence: 0.05, capitalEfficiency: 0.08, financialHealth: 0.05 }, risk: 'high', stakeholderReactions: { activist: 'very_positive', ceo: 'negative', board_chair: 'negative' } }
    ]
  },

  {
    round: 17,
    phase: 'challenges',
    title: 'Credit Downgrade',
    scenario: {
      description: 'The rating agency has placed the company on negative watch. A downgrade would increase borrowing costs significantly.',
      context: 'Covenant compliance is tight. Refinancing options would be limited with a lower rating.',
      pressure: 'high',
      timeConstraint: 'urgent',
      stakeholderFocus: ['rating_analyst', 'treasurer', 'board_chair']
    },
    options: [
      { id: 'r17_o1', label: 'Comprehensive credit improvement plan', impact: { debtCapacity: 0.1, financialHealth: 0.08, investorConfidence: 0.05 }, risk: 'medium', stakeholderReactions: { rating_analyst: 'positive', board_chair: 'positive', treasurer: 'positive' } },
      { id: 'r17_o2', label: 'Accelerate deleveraging', impact: { debtCapacity: 0.12, cashPosition: -0.1, capitalEfficiency: 0.05 }, risk: 'medium', stakeholderReactions: { rating_analyst: 'very_positive', activist: 'negative', ceo: 'concerned' } },
      { id: 'r17_o3', label: 'Equity issuance for debt reduction', impact: { debtCapacity: 0.15, investorConfidence: -0.08, financialHealth: 0.05 }, risk: 'high', stakeholderReactions: { rating_analyst: 'very_positive', activist: 'very_negative', lead_investor: 'negative' } },
      { id: 'r17_o4', label: 'Asset sales for debt reduction', impact: { debtCapacity: 0.1, cashPosition: 0.08, capitalEfficiency: 0.05 }, risk: 'high', stakeholderReactions: { rating_analyst: 'positive', activist: 'positive', bu_cfo: 'negative' } },
      { id: 'r17_o5', label: 'Cost reduction commitment', impact: { financialHealth: 0.1, debtCapacity: 0.08, capitalEfficiency: 0.08 }, risk: 'medium', stakeholderReactions: { rating_analyst: 'positive', activist: 'positive', coo: 'concerned' } },
      { id: 'r17_o6', label: 'Accept downgrade and adapt', impact: { debtCapacity: -0.1, financialHealth: -0.05, investorConfidence: -0.08 }, risk: 'high', stakeholderReactions: { rating_analyst: 'neutral', treasurer: 'negative', board_chair: 'negative' } }
    ]
  },

  {
    round: 18,
    phase: 'challenges',
    title: 'Market Volatility',
    scenario: {
      description: 'Extreme market volatility has impacted the stock price and capital market access. Investors are fleeing to safety.',
      context: 'Planned financings may need to be postponed. Cash burn must be managed carefully.',
      pressure: 'critical',
      timeConstraint: 'urgent',
      stakeholderFocus: ['treasurer', 'ir_director', 'board_chair']
    },
    options: [
      { id: 'r18_o1', label: 'Opportunistic share repurchase', impact: { investorConfidence: 0.1, cashPosition: -0.1, capitalEfficiency: 0.08 }, risk: 'medium', stakeholderReactions: { activist: 'positive', lead_investor: 'positive', treasurer: 'concerned' } },
      { id: 'r18_o2', label: 'Preserve cash and liquidity', impact: { cashPosition: 0.1, debtCapacity: 0.05, investorConfidence: 0.02 }, risk: 'low', stakeholderReactions: { treasurer: 'very_positive', rating_analyst: 'positive', activist: 'negative' } },
      { id: 'r18_o3', label: 'Lock in financing while available', impact: { debtCapacity: 0.08, cashPosition: 0.05, financialHealth: 0.02 }, risk: 'medium', stakeholderReactions: { treasurer: 'positive', lead_banker: 'positive', cfo: 'positive' } },
      { id: 'r18_o4', label: 'Enhanced investor communication', impact: { investorConfidence: 0.1, forecastAccuracy: 0.05, capitalEfficiency: 0.02 }, risk: 'low', stakeholderReactions: { ir_director: 'positive', lead_investor: 'positive', board_chair: 'positive' } },
      { id: 'r18_o5', label: 'Stress test and contingency planning', impact: { forecastAccuracy: 0.1, financialHealth: 0.05, investorConfidence: 0.05 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', audit_chair: 'positive', vp_fpa: 'positive' } },
      { id: 'r18_o6', label: 'Maintain business as usual', impact: { cashPosition: -0.05, investorConfidence: -0.05, financialHealth: -0.02 }, risk: 'high', stakeholderReactions: { treasurer: 'negative', board_chair: 'concerned', activist: 'negative' } }
    ]
  },

  // PHASE 4: VALUE CREATION (Rounds 19-24)
  {
    round: 19,
    phase: 'value',
    title: 'Long-Term Value Creation',
    scenario: {
      description: 'The company has stabilized. You must now design a sustainable value creation framework for the long term.',
      context: 'Investors want clarity on capital allocation priorities. The board expects a comprehensive plan.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['board_chair', 'lead_investor', 'ceo']
    },
    options: [
      { id: 'r19_o1', label: 'Total shareholder return framework', impact: { investorConfidence: 0.12, capitalEfficiency: 0.1, financialHealth: 0.05 }, risk: 'low', stakeholderReactions: { board_chair: 'very_positive', lead_investor: 'positive', activist: 'positive' } },
      { id: 'r19_o2', label: 'Economic value added focus', impact: { capitalEfficiency: 0.12, financialHealth: 0.08, forecastAccuracy: 0.05 }, risk: 'medium', stakeholderReactions: { vp_fpa: 'positive', board_chair: 'positive', bu_cfo: 'neutral' } },
      { id: 'r19_o3', label: 'Balanced scorecard approach', impact: { capitalEfficiency: 0.08, forecastAccuracy: 0.08, investorConfidence: 0.05 }, risk: 'low', stakeholderReactions: { ceo: 'positive', coo: 'positive', board_chair: 'positive' } },
      { id: 'r19_o4', label: 'ROIC-based capital allocation', impact: { capitalEfficiency: 0.1, investorConfidence: 0.1, financialHealth: 0.05 }, risk: 'medium', stakeholderReactions: { activist: 'positive', lead_investor: 'positive', bu_cfo: 'concerned' } },
      { id: 'r19_o5', label: 'Stakeholder value creation', impact: { investorConfidence: 0.05, financialHealth: 0.08, capitalEfficiency: 0.05 }, risk: 'low', stakeholderReactions: { ceo: 'positive', board_chair: 'positive', activist: 'neutral' } },
      { id: 'r19_o6', label: 'Opportunistic value creation', impact: { capitalEfficiency: 0.02, investorConfidence: -0.05, forecastAccuracy: -0.02 }, risk: 'medium', stakeholderReactions: { activist: 'negative', lead_investor: 'negative', board_chair: 'concerned' } }
    ]
  },

  {
    round: 20,
    phase: 'value',
    title: 'Finance Transformation',
    scenario: {
      description: 'The finance function needs modernization. Technology and talent investments could significantly enhance capability.',
      context: 'CFOs are increasingly strategic partners. The function must evolve to support the business.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['controller', 'vp_fpa', 'ceo']
    },
    options: [
      { id: 'r20_o1', label: 'Comprehensive finance transformation', impact: { forecastAccuracy: 0.15, capitalEfficiency: 0.1, financialHealth: 0.05 }, risk: 'high', stakeholderReactions: { controller: 'positive', vp_fpa: 'very_positive', ceo: 'positive' } },
      { id: 'r20_o2', label: 'Finance technology modernization', impact: { forecastAccuracy: 0.12, capitalEfficiency: 0.08, financialHealth: 0.02 }, risk: 'medium', stakeholderReactions: { controller: 'positive', vp_fpa: 'positive', treasurer: 'positive' } },
      { id: 'r20_o3', label: 'Shared services optimization', impact: { capitalEfficiency: 0.1, financialHealth: 0.08, forecastAccuracy: 0.05 }, risk: 'medium', stakeholderReactions: { controller: 'positive', coo: 'positive', bu_cfo: 'concerned' } },
      { id: 'r20_o4', label: 'Finance talent development', impact: { forecastAccuracy: 0.1, capitalEfficiency: 0.08, financialHealth: 0.05 }, risk: 'low', stakeholderReactions: { vp_fpa: 'very_positive', controller: 'positive', cfo: 'positive' } },
      { id: 'r20_o5', label: 'Strategic business partnership model', impact: { capitalEfficiency: 0.1, forecastAccuracy: 0.08, investorConfidence: 0.05 }, risk: 'medium', stakeholderReactions: { bu_cfo: 'very_positive', ceo: 'positive', coo: 'positive' } },
      { id: 'r20_o6', label: 'Incremental improvements only', impact: { forecastAccuracy: 0.02, capitalEfficiency: 0.02, financialHealth: 0.02 }, risk: 'low', stakeholderReactions: { controller: 'neutral', vp_fpa: 'negative', ceo: 'concerned' } }
    ]
  },

  {
    round: 21,
    phase: 'value',
    title: 'ESG Financial Integration',
    scenario: {
      description: 'ESG factors are increasingly important to investors. Financial implications of sustainability must be integrated into planning.',
      context: 'Investors are asking about ESG metrics. Sustainable finance options are expanding.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['lead_investor', 'ir_director', 'board_chair']
    },
    options: [
      { id: 'r21_o1', label: 'Comprehensive ESG financial integration', impact: { investorConfidence: 0.12, capitalEfficiency: 0.05, financialHealth: 0.05 }, risk: 'medium', stakeholderReactions: { lead_investor: 'very_positive', board_chair: 'positive', activist: 'neutral' } },
      { id: 'r21_o2', label: 'Sustainability-linked financing', impact: { debtCapacity: 0.08, investorConfidence: 0.08, financialHealth: 0.02 }, risk: 'low', stakeholderReactions: { treasurer: 'positive', lead_banker: 'positive', rating_analyst: 'positive' } },
      { id: 'r21_o3', label: 'Climate risk financial assessment', impact: { forecastAccuracy: 0.1, investorConfidence: 0.08, financialHealth: 0.02 }, risk: 'low', stakeholderReactions: { audit_chair: 'positive', board_chair: 'positive', vp_fpa: 'positive' } },
      { id: 'r21_o4', label: 'ESG reporting enhancement', impact: { investorConfidence: 0.1, forecastAccuracy: 0.05, capitalEfficiency: 0.02 }, risk: 'low', stakeholderReactions: { ir_director: 'positive', lead_investor: 'positive', controller: 'neutral' } },
      { id: 'r21_o5', label: 'Sustainable investment criteria', impact: { capitalEfficiency: 0.08, investorConfidence: 0.08, financialHealth: 0.05 }, risk: 'medium', stakeholderReactions: { board_chair: 'positive', ceo: 'positive', activist: 'neutral' } },
      { id: 'r21_o6', label: 'Minimal ESG compliance', impact: { investorConfidence: -0.08, capitalEfficiency: 0.02, financialHealth: 0 }, risk: 'high', stakeholderReactions: { lead_investor: 'negative', board_chair: 'concerned', ir_director: 'negative' } }
    ]
  },

  {
    round: 22,
    phase: 'value',
    title: 'Risk Management Excellence',
    scenario: {
      description: 'Financial risk management capabilities need enhancement. Volatility and uncertainty require better tools and processes.',
      context: 'The board wants assurance on risk management. Insurance and hedging costs are rising.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['audit_chair', 'treasurer', 'board_chair']
    },
    options: [
      { id: 'r22_o1', label: 'Enterprise risk management enhancement', impact: { financialHealth: 0.1, forecastAccuracy: 0.1, investorConfidence: 0.05 }, risk: 'low', stakeholderReactions: { audit_chair: 'very_positive', board_chair: 'positive', rating_analyst: 'positive' } },
      { id: 'r22_o2', label: 'Advanced hedging program', impact: { financialHealth: 0.1, forecastAccuracy: 0.08, debtCapacity: 0.02 }, risk: 'medium', stakeholderReactions: { treasurer: 'positive', audit_chair: 'positive', activist: 'neutral' } },
      { id: 'r22_o3', label: 'Risk analytics capability', impact: { forecastAccuracy: 0.12, financialHealth: 0.05, capitalEfficiency: 0.05 }, risk: 'medium', stakeholderReactions: { vp_fpa: 'positive', audit_chair: 'positive', treasurer: 'positive' } },
      { id: 'r22_o4', label: 'Insurance optimization', impact: { financialHealth: 0.08, capitalEfficiency: 0.05, cashPosition: 0.02 }, risk: 'low', stakeholderReactions: { treasurer: 'positive', audit_chair: 'positive', cfo: 'positive' } },
      { id: 'r22_o5', label: 'Scenario planning and stress testing', impact: { forecastAccuracy: 0.1, financialHealth: 0.08, investorConfidence: 0.05 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', vp_fpa: 'positive', audit_chair: 'positive' } },
      { id: 'r22_o6', label: 'Maintain current risk approach', impact: { financialHealth: -0.02, forecastAccuracy: -0.02, investorConfidence: -0.02 }, risk: 'medium', stakeholderReactions: { audit_chair: 'negative', board_chair: 'concerned', rating_analyst: 'concerned' } }
    ]
  },

  {
    round: 23,
    phase: 'value',
    title: 'Investor Relations Excellence',
    scenario: {
      description: 'Investor relations must evolve to support the value creation agenda. Communication and engagement need enhancement.',
      context: 'Sell-side coverage is limited. Institutional ownership could be expanded.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['ir_director', 'lead_investor', 'ceo']
    },
    options: [
      { id: 'r23_o1', label: 'Strategic IR program', impact: { investorConfidence: 0.12, forecastAccuracy: 0.05, capitalEfficiency: 0.02 }, risk: 'low', stakeholderReactions: { ir_director: 'very_positive', lead_investor: 'positive', ceo: 'positive' } },
      { id: 'r23_o2', label: 'Expanded analyst coverage', impact: { investorConfidence: 0.1, capitalEfficiency: 0.05, financialHealth: 0.02 }, risk: 'medium', stakeholderReactions: { ir_director: 'positive', lead_banker: 'positive', ceo: 'positive' } },
      { id: 'r23_o3', label: 'Institutional investor targeting', impact: { investorConfidence: 0.1, capitalEfficiency: 0.05, debtCapacity: 0.02 }, risk: 'low', stakeholderReactions: { lead_investor: 'positive', ir_director: 'positive', board_chair: 'positive' } },
      { id: 'r23_o4', label: 'ESG investor engagement', impact: { investorConfidence: 0.08, financialHealth: 0.05, capitalEfficiency: 0.05 }, risk: 'low', stakeholderReactions: { lead_investor: 'positive', board_chair: 'positive', ir_director: 'positive' } },
      { id: 'r23_o5', label: 'Digital IR innovation', impact: { investorConfidence: 0.08, forecastAccuracy: 0.05, capitalEfficiency: 0.02 }, risk: 'medium', stakeholderReactions: { ir_director: 'positive', lead_investor: 'neutral', ceo: 'positive' } },
      { id: 'r23_o6', label: 'Maintain current IR approach', impact: { investorConfidence: -0.02, capitalEfficiency: 0, forecastAccuracy: 0 }, risk: 'low', stakeholderReactions: { ir_director: 'neutral', lead_investor: 'concerned', activist: 'concerned' } }
    ]
  },

  {
    round: 24,
    phase: 'value',
    title: 'Financial Legacy',
    scenario: {
      description: 'As you reflect on your tenure, you must position the financial function for sustained excellence beyond your leadership.',
      context: 'The company has transformed significantly. Your decisions will shape financial practices for years.',
      pressure: 'low',
      timeConstraint: 'standard',
      stakeholderFocus: ['board_chair', 'ceo', 'lead_investor']
    },
    options: [
      { id: 'r24_o1', label: 'World-class finance organization', impact: { capitalEfficiency: 0.12, forecastAccuracy: 0.12, financialHealth: 0.1 }, risk: 'low', stakeholderReactions: { board_chair: 'very_positive', ceo: 'very_positive', lead_investor: 'positive' } },
      { id: 'r24_o2', label: 'Sustainable value creation model', impact: { investorConfidence: 0.12, capitalEfficiency: 0.1, financialHealth: 0.08 }, risk: 'low', stakeholderReactions: { lead_investor: 'very_positive', board_chair: 'positive', activist: 'positive' } },
      { id: 'r24_o3', label: 'Financial discipline institutionalized', impact: { financialHealth: 0.12, capitalEfficiency: 0.1, debtCapacity: 0.08 }, risk: 'low', stakeholderReactions: { rating_analyst: 'very_positive', audit_chair: 'positive', board_chair: 'positive' } },
      { id: 'r24_o4', label: 'Succession and knowledge transfer', impact: { forecastAccuracy: 0.1, capitalEfficiency: 0.08, financialHealth: 0.08 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', controller: 'positive', vp_fpa: 'positive' } },
      { id: 'r24_o5', label: 'Stakeholder trust foundation', impact: { investorConfidence: 0.15, financialHealth: 0.08, capitalEfficiency: 0.05 }, risk: 'low', stakeholderReactions: { lead_investor: 'positive', board_chair: 'positive', ceo: 'positive' } },
      { id: 'r24_o6', label: 'Maintain current achievements', impact: { capitalEfficiency: 0.05, financialHealth: 0.05, investorConfidence: 0.05 }, risk: 'low', stakeholderReactions: { board_chair: 'neutral', ceo: 'neutral', lead_investor: 'neutral' } }
    ]
  }
];

export const PHASE_DESCRIPTIONS = {
  foundation: {
    name: 'Financial Foundation',
    description: 'Establish core financial capabilities and frameworks',
    rounds: [1, 6],
    objectives: ['Define financial strategy', 'Optimize working capital', 'Build planning capability']
  },
  capital: {
    name: 'Capital Decisions',
    description: 'Make strategic capital allocation and financing decisions',
    rounds: [7, 12],
    objectives: ['Evaluate investments', 'Optimize capital structure', 'Manage shareholder returns']
  },
  challenges: {
    name: 'Financial Challenges',
    description: 'Navigate financial crises and market challenges',
    rounds: [13, 18],
    objectives: ['Manage earnings challenges', 'Address liquidity issues', 'Respond to market pressures']
  },
  value: {
    name: 'Value Creation',
    description: 'Build sustainable long-term value creation',
    rounds: [19, 24],
    objectives: ['Establish value framework', 'Transform finance function', 'Create financial legacy']
  }
};

export function getRoundById(roundNumber) {
  return ROUNDS.find(r => r.round === roundNumber);
}

export function getRoundsByPhase(phase) {
  return ROUNDS.filter(r => r.phase === phase);
}

export function getOptionById(roundNumber, optionId) {
  const round = getRoundById(roundNumber);
  return round?.options.find(o => o.id === optionId);
}

export default ROUNDS;
