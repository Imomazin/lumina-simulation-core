// Portfolio Roulette Rounds - 24 rounds across 4 phases
export const ROUNDS = [
  // Phase 1: Assessment (1-6)
  { id: 1, phase: 'ASSESSMENT', title: 'Portfolio Diagnostic', scenario: 'Assess current business portfolio health and strategic fit.', stakeholderFocus: ['CEO', 'STRATEGY_HEAD', 'CFO'], options: [
    { id: 'A', text: 'Comprehensive strategic review of all units', impact: { portfolioBalance: 10, strategicFit: 12, executionCapability: -3 }, risk: 0.20, stakeholderReactions: { STRATEGY_HEAD: 18, CEO: 12, BU_HEAD_C: -8 } },
    { id: 'B', text: 'Financial performance deep-dive', impact: { capitalEfficiency: 15, portfolioBalance: 5, stakeholderSupport: -3 }, risk: 0.15, stakeholderReactions: { CFO: 18, TREASURY: 12, BU_HEAD_B: -5 } },
    { id: 'C', text: 'Market position and competitive analysis', impact: { strategicFit: 12, growthPotential: 8, capitalEfficiency: -3 }, risk: 0.20, stakeholderReactions: { STRATEGY_HEAD: 15, MA_HEAD: 12, CFO: -5 } },
    { id: 'D', text: 'Synergy and integration assessment', impact: { synergyCaptvre: 15, portfolioBalance: 8, executionCapability: -5 }, risk: 0.25, stakeholderReactions: { INTEGRATION_LEAD: 18, STRATEGY_HEAD: 10, BU_HEAD_A: -8 } },
    { id: 'E', text: 'Risk and diversification analysis', impact: { riskDiversification: 15, portfolioBalance: 8, growthPotential: -3 }, risk: 0.15, stakeholderReactions: { CFO: 15, BOARD_CHAIR: 12, BU_HEAD_B: -5 } },
    { id: 'F', text: 'Stakeholder value creation review', impact: { stakeholderSupport: 12, portfolioBalance: 8, executionCapability: 3 }, risk: 0.20, stakeholderReactions: { IR_HEAD: 18, LEAD_INVESTOR: 12, ACTIVIST: -5 } }
  ]},
  { id: 2, phase: 'ASSESSMENT', title: 'Business Unit Valuation', scenario: 'Determine fair value of each business unit.', stakeholderFocus: ['CFO', 'MA_HEAD', 'ADVISOR'], options: [
    { id: 'A', text: 'DCF and intrinsic value analysis', impact: { capitalEfficiency: 12, portfolioBalance: 8, stakeholderSupport: 5 }, risk: 0.20, stakeholderReactions: { CFO: 18, ADVISOR: 15, BU_HEAD_C: -5 } },
    { id: 'B', text: 'Market multiples comparison', impact: { capitalEfficiency: 10, stakeholderSupport: 8, strategicFit: 3 }, risk: 0.15, stakeholderReactions: { IR_HEAD: 15, LEAD_INVESTOR: 12, CFO: 8 } },
    { id: 'C', text: 'Sum-of-parts analysis', impact: { portfolioBalance: 12, capitalEfficiency: 10, synergyCaptvre: -5 }, risk: 0.25, stakeholderReactions: { ACTIVIST: 18, ADVISOR: 12, INTEGRATION_LEAD: -10 } },
    { id: 'D', text: 'Strategic value assessment', impact: { strategicFit: 15, synergyCaptvre: 10, capitalEfficiency: -3 }, risk: 0.25, stakeholderReactions: { STRATEGY_HEAD: 18, CEO: 12, CFO: -8 } },
    { id: 'E', text: 'Option value methodology', impact: { growthPotential: 12, capitalEfficiency: 8, stakeholderSupport: -3 }, risk: 0.30, stakeholderReactions: { ADVISOR: 15, BU_HEAD_B: 12, ACTIVIST: -8 } },
    { id: 'F', text: 'Transaction market analysis', impact: { capitalEfficiency: 10, executionCapability: 8, portfolioBalance: 5 }, risk: 0.20, stakeholderReactions: { MA_HEAD: 18, ADVISOR: 12, CFO: 8 } }
  ]},
  { id: 3, phase: 'ASSESSMENT', title: 'Strategic Fit Analysis', scenario: 'Evaluate how each unit fits the overall strategy.', stakeholderFocus: ['STRATEGY_HEAD', 'CEO', 'BU_HEAD_A'], options: [
    { id: 'A', text: 'Core vs non-core classification', impact: { strategicFit: 15, portfolioBalance: 10, stakeholderSupport: -5 }, risk: 0.25, stakeholderReactions: { STRATEGY_HEAD: 18, CEO: 12, BU_HEAD_C: -15 } },
    { id: 'B', text: 'Synergy potential mapping', impact: { synergyCaptvre: 15, strategicFit: 10, executionCapability: -3 }, risk: 0.25, stakeholderReactions: { INTEGRATION_LEAD: 18, STRATEGY_HEAD: 12, BU_HEAD_A: 5 } },
    { id: 'C', text: 'Capability and resource analysis', impact: { executionCapability: 12, strategicFit: 10, capitalEfficiency: 3 }, risk: 0.20, stakeholderReactions: { CEO: 15, BU_HEAD_A: 12, CFO: 8 } },
    { id: 'D', text: 'Market position assessment', impact: { growthPotential: 12, strategicFit: 10, riskDiversification: 5 }, risk: 0.20, stakeholderReactions: { STRATEGY_HEAD: 15, BU_HEAD_B: 12, MA_HEAD: 8 } },
    { id: 'E', text: 'Future industry alignment', impact: { growthPotential: 15, strategicFit: 8, capitalEfficiency: -5 }, risk: 0.30, stakeholderReactions: { CEO: 18, STRATEGY_HEAD: 12, CFO: -8 } },
    { id: 'F', text: 'Stakeholder value alignment', impact: { stakeholderSupport: 12, strategicFit: 8, portfolioBalance: 5 }, risk: 0.15, stakeholderReactions: { BOARD_CHAIR: 15, IR_HEAD: 12, LEAD_INVESTOR: 10 } }
  ]},
  { id: 4, phase: 'ASSESSMENT', title: 'Growth Potential Review', scenario: 'Assess growth opportunities across portfolio.', stakeholderFocus: ['BU_HEAD_B', 'STRATEGY_HEAD', 'MA_HEAD'], options: [
    { id: 'A', text: 'Organic growth runway analysis', impact: { growthPotential: 15, capitalEfficiency: 8, riskDiversification: 3 }, risk: 0.20, stakeholderReactions: { BU_HEAD_B: 18, STRATEGY_HEAD: 12, CFO: 8 } },
    { id: 'B', text: 'M&A opportunity pipeline', impact: { growthPotential: 12, executionCapability: 5, capitalEfficiency: -8 }, risk: 0.35, stakeholderReactions: { MA_HEAD: 18, STRATEGY_HEAD: 12, CFO: -10 } },
    { id: 'C', text: 'Adjacent market opportunities', impact: { growthPotential: 10, strategicFit: 8, riskDiversification: 5 }, risk: 0.25, stakeholderReactions: { STRATEGY_HEAD: 15, BU_HEAD_B: 12, CEO: 8 } },
    { id: 'D', text: 'Geographic expansion potential', impact: { growthPotential: 12, riskDiversification: 8, executionCapability: -5 }, risk: 0.30, stakeholderReactions: { BU_HEAD_A: 15, STRATEGY_HEAD: 10, CFO: -8 } },
    { id: 'E', text: 'Innovation and disruption opportunities', impact: { growthPotential: 15, strategicFit: 5, capitalEfficiency: -5 }, risk: 0.35, stakeholderReactions: { BU_HEAD_B: 18, CEO: 12, ACTIVIST: -8 } },
    { id: 'F', text: 'Partnership and alliance potential', impact: { growthPotential: 10, synergyCaptvre: 10, executionCapability: 5 }, risk: 0.25, stakeholderReactions: { MA_HEAD: 15, INTEGRATION_LEAD: 12, CFO: 5 } }
  ]},
  { id: 5, phase: 'ASSESSMENT', title: 'Risk Portfolio Analysis', scenario: 'Evaluate portfolio risk concentration and diversification.', stakeholderFocus: ['CFO', 'BOARD_CHAIR', 'TREASURY'], options: [
    { id: 'A', text: 'Correlation and concentration analysis', impact: { riskDiversification: 15, portfolioBalance: 10, stakeholderSupport: 5 }, risk: 0.15, stakeholderReactions: { TREASURY: 18, CFO: 15, BOARD_CHAIR: 12 } },
    { id: 'B', text: 'Scenario and stress testing', impact: { riskDiversification: 12, executionCapability: 8, stakeholderSupport: 5 }, risk: 0.20, stakeholderReactions: { CFO: 18, TREASURY: 12, CEO: 8 } },
    { id: 'C', text: 'Tail risk assessment', impact: { riskDiversification: 10, portfolioBalance: 8, growthPotential: -3 }, risk: 0.20, stakeholderReactions: { BOARD_CHAIR: 15, CFO: 12, LEAD_INVESTOR: 8 } },
    { id: 'D', text: 'Hedging and mitigation review', impact: { riskDiversification: 10, capitalEfficiency: -5, executionCapability: 5 }, risk: 0.25, stakeholderReactions: { TREASURY: 18, CFO: 10, ACTIVIST: -5 } },
    { id: 'E', text: 'Portfolio insurance options', impact: { riskDiversification: 8, capitalEfficiency: -8, stakeholderSupport: 5 }, risk: 0.20, stakeholderReactions: { TREASURY: 15, BOARD_CHAIR: 10, CFO: -5 } },
    { id: 'F', text: 'Dynamic risk allocation framework', impact: { riskDiversification: 12, executionCapability: 8, portfolioBalance: 5 }, risk: 0.25, stakeholderReactions: { STRATEGY_HEAD: 15, CFO: 12, TREASURY: 10 } }
  ]},
  { id: 6, phase: 'ASSESSMENT', title: 'Execution Capability Review', scenario: 'Assess organizational capacity for portfolio changes.', stakeholderFocus: ['CEO', 'INTEGRATION_LEAD', 'BU_HEAD_A'], options: [
    { id: 'A', text: 'M&A execution track record review', impact: { executionCapability: 15, stakeholderSupport: 8, portfolioBalance: 3 }, risk: 0.20, stakeholderReactions: { MA_HEAD: 18, INTEGRATION_LEAD: 15, CEO: 10 } },
    { id: 'B', text: 'Integration capability assessment', impact: { executionCapability: 12, synergyCaptvre: 10, capitalEfficiency: -3 }, risk: 0.25, stakeholderReactions: { INTEGRATION_LEAD: 18, MA_HEAD: 12, BU_HEAD_A: -5 } },
    { id: 'C', text: 'Change management readiness', impact: { executionCapability: 10, stakeholderSupport: 10, portfolioBalance: 5 }, risk: 0.20, stakeholderReactions: { CEO: 15, BU_HEAD_A: 10, BU_HEAD_C: 8 } },
    { id: 'D', text: 'Resource and bandwidth analysis', impact: { executionCapability: 8, capitalEfficiency: 8, growthPotential: -3 }, risk: 0.15, stakeholderReactions: { CFO: 15, CEO: 10, MA_HEAD: -5 } },
    { id: 'E', text: 'External support requirements', impact: { executionCapability: 12, capitalEfficiency: -8, stakeholderSupport: 3 }, risk: 0.25, stakeholderReactions: { ADVISOR: 18, MA_HEAD: 12, CFO: -10 } },
    { id: 'F', text: 'Governance and decision framework', impact: { executionCapability: 10, stakeholderSupport: 10, portfolioBalance: 5 }, risk: 0.15, stakeholderReactions: { BOARD_CHAIR: 18, LEGAL_COUNSEL: 12, CEO: 10 } }
  ]},
  // Phase 2: Optimization (7-12)
  { id: 7, phase: 'OPTIMIZATION', title: 'Portfolio Strategy Decision', scenario: 'Choose overall portfolio optimization approach.', stakeholderFocus: ['CEO', 'BOARD_CHAIR', 'STRATEGY_HEAD'], options: [
    { id: 'A', text: 'Focus and simplify portfolio', impact: { portfolioBalance: 15, strategicFit: 12, riskDiversification: -8 }, risk: 0.30, stakeholderReactions: { ACTIVIST: 18, STRATEGY_HEAD: 15, BU_HEAD_C: -15 } },
    { id: 'B', text: 'Diversify for risk reduction', impact: { riskDiversification: 15, portfolioBalance: 8, capitalEfficiency: -5 }, risk: 0.25, stakeholderReactions: { TREASURY: 15, BOARD_CHAIR: 12, ACTIVIST: -10 } },
    { id: 'C', text: 'Growth-oriented expansion', impact: { growthPotential: 15, capitalEfficiency: -8, riskDiversification: -5 }, risk: 0.35, stakeholderReactions: { BU_HEAD_B: 18, CEO: 12, CFO: -12 } },
    { id: 'D', text: 'Value extraction optimization', impact: { capitalEfficiency: 15, stakeholderSupport: 8, growthPotential: -5 }, risk: 0.25, stakeholderReactions: { ACTIVIST: 18, CFO: 15, BU_HEAD_B: -10 } },
    { id: 'E', text: 'Synergy maximization', impact: { synergyCaptvre: 15, portfolioBalance: 10, executionCapability: -5 }, risk: 0.30, stakeholderReactions: { INTEGRATION_LEAD: 18, STRATEGY_HEAD: 12, BU_HEAD_A: -8 } },
    { id: 'F', text: 'Balanced portfolio approach', impact: { portfolioBalance: 12, stakeholderSupport: 10, capitalEfficiency: 5 }, risk: 0.20, stakeholderReactions: { CEO: 15, BOARD_CHAIR: 12, IR_HEAD: 10 } }
  ]},
  { id: 8, phase: 'OPTIMIZATION', title: 'Divestiture Candidates', scenario: 'Identify and prioritize divestiture candidates.', stakeholderFocus: ['CFO', 'MA_HEAD', 'BU_HEAD_C'], options: [
    { id: 'A', text: 'Divest all non-core businesses', impact: { strategicFit: 15, portfolioBalance: 12, stakeholderSupport: -8 }, risk: 0.35, stakeholderReactions: { ACTIVIST: 18, STRATEGY_HEAD: 12, BU_HEAD_C: -20 } },
    { id: 'B', text: 'Selective underperformer divestiture', impact: { capitalEfficiency: 12, portfolioBalance: 10, stakeholderSupport: -5 }, risk: 0.25, stakeholderReactions: { CFO: 15, MA_HEAD: 12, BU_HEAD_C: -15 } },
    { id: 'C', text: 'Spin-off for value unlock', impact: { capitalEfficiency: 15, stakeholderSupport: 10, synergyCaptvre: -8 }, risk: 0.30, stakeholderReactions: { LEAD_INVESTOR: 18, IR_HEAD: 15, INTEGRATION_LEAD: -10 } },
    { id: 'D', text: 'Strategic trade sale', impact: { capitalEfficiency: 12, executionCapability: 8, stakeholderSupport: 5 }, risk: 0.25, stakeholderReactions: { MA_HEAD: 18, CFO: 12, BU_HEAD_C: -8 } },
    { id: 'E', text: 'Turnaround before decision', impact: { executionCapability: 8, capitalEfficiency: -5, stakeholderSupport: 5 }, risk: 0.35, stakeholderReactions: { BU_HEAD_C: 18, CEO: 10, ACTIVIST: -12 } },
    { id: 'F', text: 'Hold and harvest strategy', impact: { capitalEfficiency: 8, portfolioBalance: 5, growthPotential: -5 }, risk: 0.20, stakeholderReactions: { CFO: 12, BU_HEAD_C: 10, ACTIVIST: -8 } }
  ]},
  { id: 9, phase: 'OPTIMIZATION', title: 'Acquisition Priorities', scenario: 'Define M&A priorities and targets.', stakeholderFocus: ['MA_HEAD', 'STRATEGY_HEAD', 'CEO'], options: [
    { id: 'A', text: 'Transformational acquisition', impact: { growthPotential: 15, capitalEfficiency: -12, executionCapability: -5 }, risk: 0.50, stakeholderReactions: { CEO: 15, MA_HEAD: 18, CFO: -15 } },
    { id: 'B', text: 'Bolt-on acquisition strategy', impact: { synergyCaptvre: 12, growthPotential: 8, capitalEfficiency: -5 }, risk: 0.30, stakeholderReactions: { MA_HEAD: 18, INTEGRATION_LEAD: 15, CFO: -5 } },
    { id: 'C', text: 'Capability acquisition focus', impact: { executionCapability: 12, strategicFit: 10, capitalEfficiency: -8 }, risk: 0.35, stakeholderReactions: { STRATEGY_HEAD: 18, CEO: 12, CFO: -10 } },
    { id: 'D', text: 'Geographic expansion M&A', impact: { growthPotential: 12, riskDiversification: 8, executionCapability: -5 }, risk: 0.40, stakeholderReactions: { BU_HEAD_A: 15, MA_HEAD: 12, CFO: -8 } },
    { id: 'E', text: 'Defensive acquisition strategy', impact: { portfolioBalance: 10, strategicFit: 8, capitalEfficiency: -5 }, risk: 0.30, stakeholderReactions: { STRATEGY_HEAD: 15, BOARD_CHAIR: 10, ACTIVIST: -8 } },
    { id: 'F', text: 'Organic growth priority', impact: { capitalEfficiency: 10, growthPotential: 5, executionCapability: 5 }, risk: 0.15, stakeholderReactions: { CFO: 18, BU_HEAD_B: 12, MA_HEAD: -8 } }
  ]},
  { id: 10, phase: 'OPTIMIZATION', title: 'Capital Allocation', scenario: 'Reallocate capital across portfolio.', stakeholderFocus: ['CFO', 'CEO', 'TREASURY'], options: [
    { id: 'A', text: 'Growth business investment priority', impact: { growthPotential: 15, capitalEfficiency: 8, riskDiversification: -5 }, risk: 0.30, stakeholderReactions: { BU_HEAD_B: 18, CEO: 12, BU_HEAD_C: -15 } },
    { id: 'B', text: 'Core business reinvestment', impact: { capitalEfficiency: 12, portfolioBalance: 10, growthPotential: -3 }, risk: 0.20, stakeholderReactions: { BU_HEAD_A: 18, CFO: 12, BU_HEAD_B: -5 } },
    { id: 'C', text: 'Shareholder return priority', impact: { stakeholderSupport: 15, capitalEfficiency: 8, growthPotential: -8 }, risk: 0.25, stakeholderReactions: { LEAD_INVESTOR: 18, IR_HEAD: 15, BU_HEAD_B: -12 } },
    { id: 'D', text: 'Debt reduction focus', impact: { riskDiversification: 12, capitalEfficiency: 10, growthPotential: -5 }, risk: 0.15, stakeholderReactions: { TREASURY: 18, BOARD_CHAIR: 12, BU_HEAD_B: -8 } },
    { id: 'E', text: 'M&A war chest building', impact: { executionCapability: 10, growthPotential: 8, capitalEfficiency: -5 }, risk: 0.25, stakeholderReactions: { MA_HEAD: 18, STRATEGY_HEAD: 12, ACTIVIST: -8 } },
    { id: 'F', text: 'Balanced capital allocation', impact: { portfolioBalance: 12, capitalEfficiency: 8, stakeholderSupport: 8 }, risk: 0.20, stakeholderReactions: { CEO: 15, CFO: 12, BOARD_CHAIR: 10 } }
  ]},
  { id: 11, phase: 'OPTIMIZATION', title: 'Synergy Planning', scenario: 'Plan and prioritize synergy capture.', stakeholderFocus: ['INTEGRATION_LEAD', 'BU_HEAD_A', 'CFO'], options: [
    { id: 'A', text: 'Aggressive cost synergy target', impact: { synergyCaptvre: 15, capitalEfficiency: 10, stakeholderSupport: -8 }, risk: 0.35, stakeholderReactions: { ACTIVIST: 18, CFO: 15, BU_HEAD_A: -12 } },
    { id: 'B', text: 'Revenue synergy focus', impact: { synergyCaptvre: 12, growthPotential: 10, executionCapability: -5 }, risk: 0.35, stakeholderReactions: { BU_HEAD_B: 18, STRATEGY_HEAD: 12, CFO: -5 } },
    { id: 'C', text: 'Operational excellence program', impact: { synergyCaptvre: 10, capitalEfficiency: 12, stakeholderSupport: 3 }, risk: 0.25, stakeholderReactions: { CFO: 15, INTEGRATION_LEAD: 12, BU_HEAD_A: 8 } },
    { id: 'D', text: 'Shared services consolidation', impact: { synergyCaptvre: 12, capitalEfficiency: 10, executionCapability: -3 }, risk: 0.30, stakeholderReactions: { INTEGRATION_LEAD: 18, CFO: 12, BU_HEAD_C: -8 } },
    { id: 'E', text: 'Strategic capability sharing', impact: { synergyCaptvre: 10, strategicFit: 10, portfolioBalance: 5 }, risk: 0.25, stakeholderReactions: { STRATEGY_HEAD: 18, INTEGRATION_LEAD: 12, BU_HEAD_A: 5 } },
    { id: 'F', text: 'Autonomy preservation approach', impact: { stakeholderSupport: 10, synergyCaptvre: -5, executionCapability: 8 }, risk: 0.20, stakeholderReactions: { BU_HEAD_A: 18, BU_HEAD_C: 15, ACTIVIST: -10 } }
  ]},
  { id: 12, phase: 'OPTIMIZATION', title: 'Stakeholder Communication', scenario: 'Plan portfolio change communication.', stakeholderFocus: ['IR_HEAD', 'CEO', 'LEGAL_COUNSEL'], options: [
    { id: 'A', text: 'Proactive investor communication', impact: { stakeholderSupport: 15, executionCapability: 8, capitalEfficiency: 3 }, risk: 0.20, stakeholderReactions: { IR_HEAD: 18, LEAD_INVESTOR: 15, ACTIVIST: 10 } },
    { id: 'B', text: 'Analyst day and roadshow', impact: { stakeholderSupport: 12, capitalEfficiency: 10, executionCapability: -3 }, risk: 0.25, stakeholderReactions: { IR_HEAD: 18, CFO: 12, CEO: 10 } },
    { id: 'C', text: 'Employee engagement program', impact: { executionCapability: 12, stakeholderSupport: 8, synergyCaptvre: 5 }, risk: 0.20, stakeholderReactions: { CEO: 15, BU_HEAD_A: 12, INTEGRATION_LEAD: 10 } },
    { id: 'D', text: 'Board alignment process', impact: { stakeholderSupport: 10, executionCapability: 10, portfolioBalance: 5 }, risk: 0.15, stakeholderReactions: { BOARD_CHAIR: 18, LEGAL_COUNSEL: 12, CEO: 10 } },
    { id: 'E', text: 'Regulatory and government engagement', impact: { executionCapability: 10, stakeholderSupport: 8, riskDiversification: 5 }, risk: 0.20, stakeholderReactions: { LEGAL_COUNSEL: 18, CEO: 10, BOARD_CHAIR: 8 } },
    { id: 'F', text: 'Limited disclosure approach', impact: { executionCapability: 5, stakeholderSupport: -5, capitalEfficiency: 5 }, risk: 0.30, stakeholderReactions: { CFO: 10, ACTIVIST: -15, IR_HEAD: -10 } }
  ]},
  // Phase 3: Execution (13-18)
  { id: 13, phase: 'EXECUTION', title: 'Divestiture Execution', scenario: 'Execute planned divestitures.', stakeholderFocus: ['MA_HEAD', 'CFO', 'LEGAL_COUNSEL'], options: [
    { id: 'A', text: 'Competitive auction process', impact: { capitalEfficiency: 15, executionCapability: 5, stakeholderSupport: 8 }, risk: 0.30, stakeholderReactions: { MA_HEAD: 18, CFO: 15, ADVISOR: 12 } },
    { id: 'B', text: 'Targeted strategic buyer approach', impact: { capitalEfficiency: 12, synergyCaptvre: 8, executionCapability: 8 }, risk: 0.25, stakeholderReactions: { MA_HEAD: 18, STRATEGY_HEAD: 12, CFO: 10 } },
    { id: 'C', text: 'IPO or spin-off route', impact: { stakeholderSupport: 15, capitalEfficiency: 10, executionCapability: -5 }, risk: 0.35, stakeholderReactions: { IR_HEAD: 18, LEAD_INVESTOR: 15, BU_HEAD_C: 10 } },
    { id: 'D', text: 'Management buyout facilitation', impact: { executionCapability: 10, stakeholderSupport: 8, capitalEfficiency: -5 }, risk: 0.30, stakeholderReactions: { BU_HEAD_C: 18, CEO: 10, ACTIVIST: -8 } },
    { id: 'E', text: 'Phased divestiture approach', impact: { executionCapability: 12, capitalEfficiency: 5, riskDiversification: 5 }, risk: 0.25, stakeholderReactions: { CFO: 15, MA_HEAD: 10, BU_HEAD_C: 8 } },
    { id: 'F', text: 'Hold pending better market', impact: { riskDiversification: 8, capitalEfficiency: -5, stakeholderSupport: -5 }, risk: 0.25, stakeholderReactions: { BU_HEAD_C: 15, ACTIVIST: -15, CFO: -5 } }
  ]},
  { id: 14, phase: 'EXECUTION', title: 'Acquisition Execution', scenario: 'Execute planned acquisitions.', stakeholderFocus: ['MA_HEAD', 'INTEGRATION_LEAD', 'CEO'], options: [
    { id: 'A', text: 'Aggressive deal pursuit', impact: { growthPotential: 15, capitalEfficiency: -12, executionCapability: -5 }, risk: 0.45, stakeholderReactions: { MA_HEAD: 18, CEO: 12, CFO: -15 } },
    { id: 'B', text: 'Disciplined value approach', impact: { capitalEfficiency: 10, growthPotential: 8, stakeholderSupport: 8 }, risk: 0.25, stakeholderReactions: { CFO: 18, BOARD_CHAIR: 12, MA_HEAD: 5 } },
    { id: 'C', text: 'Partnership before acquisition', impact: { executionCapability: 10, riskDiversification: 8, growthPotential: 5 }, risk: 0.20, stakeholderReactions: { STRATEGY_HEAD: 15, CFO: 12, MA_HEAD: -5 } },
    { id: 'D', text: 'Hostile approach if needed', impact: { growthPotential: 12, stakeholderSupport: -10, executionCapability: -5 }, risk: 0.50, stakeholderReactions: { MA_HEAD: 15, LEGAL_COUNSEL: 8, BOARD_CHAIR: -12 } },
    { id: 'E', text: 'Joint venture structure', impact: { riskDiversification: 10, growthPotential: 8, capitalEfficiency: 5 }, risk: 0.25, stakeholderReactions: { CFO: 15, STRATEGY_HEAD: 12, MA_HEAD: 8 } },
    { id: 'F', text: 'Wait for better opportunity', impact: { capitalEfficiency: 8, executionCapability: 5, growthPotential: -5 }, risk: 0.15, stakeholderReactions: { CFO: 15, ACTIVIST: -8, MA_HEAD: -10 } }
  ]},
  { id: 15, phase: 'EXECUTION', title: 'Integration Challenges', scenario: 'Navigate integration difficulties.', stakeholderFocus: ['INTEGRATION_LEAD', 'BU_HEAD_A', 'CEO'], options: [
    { id: 'A', text: 'Accelerate integration timeline', impact: { synergyCaptvre: 12, executionCapability: -8, stakeholderSupport: -5 }, risk: 0.40, stakeholderReactions: { ACTIVIST: 15, INTEGRATION_LEAD: 10, BU_HEAD_A: -12 } },
    { id: 'B', text: 'Pause and reassess approach', impact: { executionCapability: 10, synergyCaptvre: -5, stakeholderSupport: 5 }, risk: 0.25, stakeholderReactions: { BU_HEAD_A: 15, CEO: 10, ACTIVIST: -10 } },
    { id: 'C', text: 'External integration support', impact: { executionCapability: 12, synergyCaptvre: 8, capitalEfficiency: -8 }, risk: 0.30, stakeholderReactions: { ADVISOR: 18, INTEGRATION_LEAD: 12, CFO: -10 } },
    { id: 'D', text: 'Leadership change for integration', impact: { executionCapability: 8, synergyCaptvre: 10, stakeholderSupport: -5 }, risk: 0.35, stakeholderReactions: { CEO: 12, BOARD_CHAIR: 10, BU_HEAD_A: -15 } },
    { id: 'E', text: 'Revised synergy targets', impact: { stakeholderSupport: -8, synergyCaptvre: -5, executionCapability: 8 }, risk: 0.30, stakeholderReactions: { BU_HEAD_A: 12, INTEGRATION_LEAD: 8, ACTIVIST: -18 } },
    { id: 'F', text: 'Best practice sharing focus', impact: { synergyCaptvre: 8, executionCapability: 10, portfolioBalance: 5 }, risk: 0.20, stakeholderReactions: { INTEGRATION_LEAD: 15, BU_HEAD_A: 12, BU_HEAD_B: 8 } }
  ]},
  { id: 16, phase: 'EXECUTION', title: 'Activist Pressure', scenario: 'Respond to activist investor campaign.', stakeholderFocus: ['ACTIVIST', 'BOARD_CHAIR', 'IR_HEAD'], options: [
    { id: 'A', text: 'Engage constructively with activist', impact: { stakeholderSupport: 10, portfolioBalance: 8, executionCapability: -3 }, risk: 0.25, stakeholderReactions: { ACTIVIST: 15, BOARD_CHAIR: 10, CEO: 8 } },
    { id: 'B', text: 'Defend current strategy firmly', impact: { executionCapability: 10, stakeholderSupport: -8, portfolioBalance: 5 }, risk: 0.35, stakeholderReactions: { CEO: 15, ACTIVIST: -18, BOARD_CHAIR: 5 } },
    { id: 'C', text: 'Adopt some activist proposals', impact: { stakeholderSupport: 12, capitalEfficiency: 8, portfolioBalance: 5 }, risk: 0.25, stakeholderReactions: { ACTIVIST: 18, LEAD_INVESTOR: 12, BU_HEAD_C: -10 } },
    { id: 'D', text: 'Accelerate value creation plan', impact: { capitalEfficiency: 12, stakeholderSupport: 8, executionCapability: -5 }, risk: 0.30, stakeholderReactions: { ACTIVIST: 12, IR_HEAD: 15, CFO: 10 } },
    { id: 'E', text: 'Board composition changes', impact: { stakeholderSupport: 10, executionCapability: -5, portfolioBalance: 5 }, risk: 0.30, stakeholderReactions: { ACTIVIST: 15, BOARD_CHAIR: -10, LEAD_INVESTOR: 10 } },
    { id: 'F', text: 'Seek white knight support', impact: { stakeholderSupport: 5, riskDiversification: -5, capitalEfficiency: -5 }, risk: 0.40, stakeholderReactions: { BOARD_CHAIR: 12, ACTIVIST: -12, LEAD_INVESTOR: -8 } }
  ]},
  { id: 17, phase: 'EXECUTION', title: 'Market Disruption', scenario: 'Navigate market disruption affecting portfolio.', stakeholderFocus: ['CEO', 'STRATEGY_HEAD', 'BU_HEAD_B'], options: [
    { id: 'A', text: 'Accelerate portfolio transformation', impact: { portfolioBalance: 12, strategicFit: 10, capitalEfficiency: -8 }, risk: 0.40, stakeholderReactions: { STRATEGY_HEAD: 18, CEO: 15, CFO: -10 } },
    { id: 'B', text: 'Defensive consolidation', impact: { riskDiversification: 12, portfolioBalance: 8, growthPotential: -5 }, risk: 0.25, stakeholderReactions: { CFO: 15, BOARD_CHAIR: 12, BU_HEAD_B: -8 } },
    { id: 'C', text: 'Opportunistic M&A in disruption', impact: { growthPotential: 15, capitalEfficiency: -10, executionCapability: -5 }, risk: 0.45, stakeholderReactions: { MA_HEAD: 18, STRATEGY_HEAD: 12, CFO: -12 } },
    { id: 'D', text: 'Innovation and pivoting investment', impact: { growthPotential: 12, strategicFit: 8, capitalEfficiency: -5 }, risk: 0.35, stakeholderReactions: { BU_HEAD_B: 18, CEO: 12, ACTIVIST: -5 } },
    { id: 'E', text: 'Partnership for disruption response', impact: { executionCapability: 10, riskDiversification: 8, synergyCaptvre: 5 }, risk: 0.30, stakeholderReactions: { STRATEGY_HEAD: 15, MA_HEAD: 10, CFO: 5 } },
    { id: 'F', text: 'Wait and maintain flexibility', impact: { riskDiversification: 8, capitalEfficiency: 5, growthPotential: -5 }, risk: 0.20, stakeholderReactions: { CFO: 12, BOARD_CHAIR: 10, BU_HEAD_B: -10 } }
  ]},
  { id: 18, phase: 'EXECUTION', title: 'Leadership Transition', scenario: 'Manage leadership changes in portfolio.', stakeholderFocus: ['CEO', 'BOARD_CHAIR', 'BU_HEAD_A'], options: [
    { id: 'A', text: 'External CEO recruitment for units', impact: { executionCapability: 10, stakeholderSupport: 5, portfolioBalance: 3 }, risk: 0.35, stakeholderReactions: { BOARD_CHAIR: 15, CEO: 10, BU_HEAD_A: -12 } },
    { id: 'B', text: 'Internal talent development', impact: { executionCapability: 12, stakeholderSupport: 10, synergyCaptvre: 5 }, risk: 0.20, stakeholderReactions: { CEO: 18, BU_HEAD_A: 15, BU_HEAD_B: 10 } },
    { id: 'C', text: 'Leadership integration program', impact: { synergyCaptvre: 12, executionCapability: 8, portfolioBalance: 5 }, risk: 0.25, stakeholderReactions: { INTEGRATION_LEAD: 18, CEO: 12, BU_HEAD_A: 8 } },
    { id: 'D', text: 'Performance-based changes', impact: { executionCapability: 10, capitalEfficiency: 8, stakeholderSupport: -5 }, risk: 0.30, stakeholderReactions: { ACTIVIST: 15, CFO: 12, BU_HEAD_C: -15 } },
    { id: 'E', text: 'Board involvement in transitions', impact: { stakeholderSupport: 12, executionCapability: 5, portfolioBalance: 5 }, risk: 0.20, stakeholderReactions: { BOARD_CHAIR: 18, LEAD_INVESTOR: 12, CEO: 5 } },
    { id: 'F', text: 'Stability and continuity focus', impact: { executionCapability: 8, stakeholderSupport: 8, portfolioBalance: 5 }, risk: 0.15, stakeholderReactions: { BU_HEAD_A: 15, CEO: 12, ACTIVIST: -5 } }
  ]},
  // Phase 4: Value Creation (19-24)
  { id: 19, phase: 'VALUE_CREATION', title: 'Synergy Realization', scenario: 'Capture planned synergies.', stakeholderFocus: ['INTEGRATION_LEAD', 'CFO', 'BU_HEAD_A'], options: [
    { id: 'A', text: 'Aggressive synergy capture program', impact: { synergyCaptvre: 18, capitalEfficiency: 12, stakeholderSupport: -5 }, risk: 0.35, stakeholderReactions: { ACTIVIST: 18, CFO: 15, BU_HEAD_A: -10 } },
    { id: 'B', text: 'Revenue synergy acceleration', impact: { synergyCaptvre: 12, growthPotential: 10, capitalEfficiency: 5 }, risk: 0.30, stakeholderReactions: { BU_HEAD_B: 18, INTEGRATION_LEAD: 12, CFO: 8 } },
    { id: 'C', text: 'Operational excellence focus', impact: { synergyCaptvre: 10, capitalEfficiency: 12, executionCapability: 8 }, risk: 0.20, stakeholderReactions: { CFO: 18, INTEGRATION_LEAD: 15, BU_HEAD_A: 10 } },
    { id: 'D', text: 'Technology and capability synergies', impact: { synergyCaptvre: 12, strategicFit: 10, executionCapability: 5 }, risk: 0.25, stakeholderReactions: { STRATEGY_HEAD: 18, INTEGRATION_LEAD: 12, BU_HEAD_B: 8 } },
    { id: 'E', text: 'Customer and market synergies', impact: { synergyCaptvre: 10, growthPotential: 12, stakeholderSupport: 5 }, risk: 0.25, stakeholderReactions: { BU_HEAD_A: 15, BU_HEAD_B: 12, IR_HEAD: 8 } },
    { id: 'F', text: 'Sustainable synergy approach', impact: { synergyCaptvre: 8, stakeholderSupport: 10, portfolioBalance: 8 }, risk: 0.15, stakeholderReactions: { CEO: 15, BU_HEAD_A: 12, INTEGRATION_LEAD: 10 } }
  ]},
  { id: 20, phase: 'VALUE_CREATION', title: 'Growth Acceleration', scenario: 'Accelerate growth across portfolio.', stakeholderFocus: ['BU_HEAD_B', 'CEO', 'STRATEGY_HEAD'], options: [
    { id: 'A', text: 'Organic growth investment surge', impact: { growthPotential: 18, capitalEfficiency: -8, portfolioBalance: 5 }, risk: 0.35, stakeholderReactions: { BU_HEAD_B: 18, CEO: 15, CFO: -10 } },
    { id: 'B', text: 'Market expansion acceleration', impact: { growthPotential: 15, riskDiversification: 8, executionCapability: -5 }, risk: 0.35, stakeholderReactions: { STRATEGY_HEAD: 18, BU_HEAD_A: 12, CFO: -5 } },
    { id: 'C', text: 'Innovation-led growth', impact: { growthPotential: 12, strategicFit: 10, capitalEfficiency: -5 }, risk: 0.30, stakeholderReactions: { BU_HEAD_B: 18, STRATEGY_HEAD: 12, CEO: 10 } },
    { id: 'D', text: 'Acquisition-driven growth', impact: { growthPotential: 15, capitalEfficiency: -10, synergyCaptvre: 5 }, risk: 0.40, stakeholderReactions: { MA_HEAD: 18, CEO: 12, CFO: -12 } },
    { id: 'E', text: 'Partnership and ecosystem growth', impact: { growthPotential: 10, riskDiversification: 10, synergyCaptvre: 8 }, risk: 0.25, stakeholderReactions: { STRATEGY_HEAD: 15, MA_HEAD: 10, CFO: 8 } },
    { id: 'F', text: 'Profitable growth discipline', impact: { capitalEfficiency: 12, growthPotential: 8, stakeholderSupport: 10 }, risk: 0.20, stakeholderReactions: { CFO: 18, ACTIVIST: 12, LEAD_INVESTOR: 10 } }
  ]},
  { id: 21, phase: 'VALUE_CREATION', title: 'Capital Returns', scenario: 'Optimize capital returns to shareholders.', stakeholderFocus: ['CFO', 'LEAD_INVESTOR', 'IR_HEAD'], options: [
    { id: 'A', text: 'Special dividend distribution', impact: { stakeholderSupport: 15, capitalEfficiency: 8, growthPotential: -8 }, risk: 0.25, stakeholderReactions: { LEAD_INVESTOR: 18, ACTIVIST: 15, BU_HEAD_B: -12 } },
    { id: 'B', text: 'Share buyback program', impact: { stakeholderSupport: 12, capitalEfficiency: 10, growthPotential: -5 }, risk: 0.20, stakeholderReactions: { ACTIVIST: 18, IR_HEAD: 15, BU_HEAD_B: -8 } },
    { id: 'C', text: 'Debt reduction priority', impact: { riskDiversification: 12, capitalEfficiency: 10, growthPotential: -3 }, risk: 0.15, stakeholderReactions: { TREASURY: 18, BOARD_CHAIR: 12, ACTIVIST: -5 } },
    { id: 'D', text: 'Balanced return policy', impact: { stakeholderSupport: 10, capitalEfficiency: 8, portfolioBalance: 8 }, risk: 0.15, stakeholderReactions: { CFO: 15, BOARD_CHAIR: 12, LEAD_INVESTOR: 10 } },
    { id: 'E', text: 'Reinvestment priority', impact: { growthPotential: 12, stakeholderSupport: -5, capitalEfficiency: 5 }, risk: 0.25, stakeholderReactions: { BU_HEAD_B: 18, CEO: 12, ACTIVIST: -15 } },
    { id: 'F', text: 'Strategic flexibility preservation', impact: { executionCapability: 10, riskDiversification: 8, stakeholderSupport: -3 }, risk: 0.20, stakeholderReactions: { CFO: 15, STRATEGY_HEAD: 12, ACTIVIST: -8 } }
  ]},
  { id: 22, phase: 'VALUE_CREATION', title: 'Portfolio Optimization', scenario: 'Fine-tune portfolio composition.', stakeholderFocus: ['STRATEGY_HEAD', 'CEO', 'MA_HEAD'], options: [
    { id: 'A', text: 'Continued portfolio pruning', impact: { portfolioBalance: 15, capitalEfficiency: 10, stakeholderSupport: 5 }, risk: 0.25, stakeholderReactions: { ACTIVIST: 18, STRATEGY_HEAD: 15, BU_HEAD_C: -10 } },
    { id: 'B', text: 'Selective bolt-on acquisitions', impact: { synergyCaptvre: 12, growthPotential: 10, capitalEfficiency: -5 }, risk: 0.30, stakeholderReactions: { MA_HEAD: 18, INTEGRATION_LEAD: 12, CFO: -5 } },
    { id: 'C', text: 'Business unit consolidation', impact: { synergyCaptvre: 15, portfolioBalance: 10, executionCapability: -5 }, risk: 0.30, stakeholderReactions: { CFO: 15, INTEGRATION_LEAD: 12, BU_HEAD_A: -8 } },
    { id: 'D', text: 'Geographic optimization', impact: { portfolioBalance: 10, riskDiversification: 10, growthPotential: 5 }, risk: 0.25, stakeholderReactions: { STRATEGY_HEAD: 15, BU_HEAD_A: 10, CFO: 8 } },
    { id: 'E', text: 'Capability-based restructuring', impact: { strategicFit: 15, portfolioBalance: 10, executionCapability: 5 }, risk: 0.30, stakeholderReactions: { STRATEGY_HEAD: 18, CEO: 12, BU_HEAD_B: 8 } },
    { id: 'F', text: 'Stability and consolidation', impact: { executionCapability: 12, stakeholderSupport: 10, portfolioBalance: 5 }, risk: 0.15, stakeholderReactions: { CEO: 15, BOARD_CHAIR: 12, CFO: 10 } }
  ]},
  { id: 23, phase: 'VALUE_CREATION', title: 'Strategic Positioning', scenario: 'Position portfolio for future success.', stakeholderFocus: ['CEO', 'STRATEGY_HEAD', 'BOARD_CHAIR'], options: [
    { id: 'A', text: 'Industry leadership positioning', impact: { strategicFit: 15, growthPotential: 12, stakeholderSupport: 8 }, risk: 0.30, stakeholderReactions: { CEO: 18, STRATEGY_HEAD: 15, BOARD_CHAIR: 12 } },
    { id: 'B', text: 'Disruption-ready transformation', impact: { strategicFit: 12, growthPotential: 15, capitalEfficiency: -8 }, risk: 0.40, stakeholderReactions: { STRATEGY_HEAD: 18, BU_HEAD_B: 15, CFO: -10 } },
    { id: 'C', text: 'Resilience and sustainability focus', impact: { riskDiversification: 15, portfolioBalance: 10, stakeholderSupport: 8 }, risk: 0.25, stakeholderReactions: { BOARD_CHAIR: 18, CEO: 12, TREASURY: 10 } },
    { id: 'D', text: 'Technology and innovation investment', impact: { growthPotential: 12, strategicFit: 10, capitalEfficiency: -5 }, risk: 0.30, stakeholderReactions: { BU_HEAD_B: 18, STRATEGY_HEAD: 12, ACTIVIST: -5 } },
    { id: 'E', text: 'Customer excellence positioning', impact: { strategicFit: 12, stakeholderSupport: 10, growthPotential: 8 }, risk: 0.20, stakeholderReactions: { BU_HEAD_A: 18, CEO: 12, IR_HEAD: 10 } },
    { id: 'F', text: 'Flexible strategic options', impact: { executionCapability: 12, riskDiversification: 10, portfolioBalance: 8 }, risk: 0.20, stakeholderReactions: { CFO: 15, STRATEGY_HEAD: 12, CEO: 10 } }
  ]},
  { id: 24, phase: 'VALUE_CREATION', title: 'Portfolio Legacy', scenario: 'Establish lasting portfolio excellence.', stakeholderFocus: ['CEO', 'BOARD_CHAIR', 'STRATEGY_HEAD'], options: [
    { id: 'A', text: 'World-class portfolio management', impact: { portfolioBalance: 18, capitalEfficiency: 12, stakeholderSupport: 10 }, risk: 0.25, stakeholderReactions: { BOARD_CHAIR: 18, CEO: 18, STRATEGY_HEAD: 15 } },
    { id: 'B', text: 'Sustainable value creation engine', impact: { capitalEfficiency: 15, stakeholderSupport: 12, growthPotential: 10 }, risk: 0.25, stakeholderReactions: { LEAD_INVESTOR: 18, IR_HEAD: 15, CFO: 12 } },
    { id: 'C', text: 'Industry-leading portfolio', impact: { strategicFit: 18, portfolioBalance: 12, stakeholderSupport: 10 }, risk: 0.30, stakeholderReactions: { CEO: 18, STRATEGY_HEAD: 18, BOARD_CHAIR: 15 } },
    { id: 'D', text: 'Resilient diversified portfolio', impact: { riskDiversification: 18, portfolioBalance: 12, executionCapability: 8 }, risk: 0.25, stakeholderReactions: { TREASURY: 18, BOARD_CHAIR: 15, CFO: 12 } },
    { id: 'E', text: 'Growth and innovation leader', impact: { growthPotential: 18, strategicFit: 10, capitalEfficiency: -5 }, risk: 0.35, stakeholderReactions: { BU_HEAD_B: 18, CEO: 15, ACTIVIST: -5 } },
    { id: 'F', text: 'Balanced portfolio excellence', impact: { portfolioBalance: 15, capitalEfficiency: 10, stakeholderSupport: 12 }, risk: 0.20, stakeholderReactions: { CEO: 15, CFO: 12, BOARD_CHAIR: 12 } }
  ]}
];
export const PHASE_DESCRIPTIONS = { ASSESSMENT: { name: 'Portfolio Assessment', rounds: [1,2,3,4,5,6] }, OPTIMIZATION: { name: 'Portfolio Optimization', rounds: [7,8,9,10,11,12] }, EXECUTION: { name: 'Portfolio Execution', rounds: [13,14,15,16,17,18] }, VALUE_CREATION: { name: 'Value Creation', rounds: [19,20,21,22,23,24] }};
export const getRoundById = (id) => ROUNDS.find(r => r.id === id);
export const getRoundsByPhase = (phase) => ROUNDS.filter(r => r.phase === phase);
export const getAllRounds = () => ROUNDS;
