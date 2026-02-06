// Margin Call Simulation Rounds
// 24 rounds across 4 phases with 6 options each

export const ROUNDS = [
  // Phase 1: Crisis Assessment (Rounds 1-6)
  {
    id: 1,
    phase: 'CRISIS_ASSESSMENT',
    title: 'Financial Reality Check',
    scenario: 'The numbers are worse than expected. Liquidity is critically low and creditors are nervous. You need to assess the true financial position.',
    stakeholderFocus: ['CFO', 'TREASURER', 'LEAD_BANKER'],
    options: [
      { id: 'A', text: 'Comprehensive liquidity analysis with 13-week cash flow', impact: { liquidityPosition: 10, debtManagement: 8, creditorRelations: 5 }, risk: 0.20, stakeholderReactions: { CFO: 18, TREASURER: 20, BOARD_CHAIR: 10 } },
      { id: 'B', text: 'Immediate cost reduction to preserve cash', impact: { liquidityPosition: 15, operationalCashflow: 8, marketPosition: -5 }, risk: 0.30, stakeholderReactions: { CFO: 15, EMPLOYEE_REP: -15, SENIOR_CREDITOR: 10 } },
      { id: 'C', text: 'Asset sale identification for quick liquidity', impact: { liquidityPosition: 12, riskExposure: 5, recoveryTrajectory: -5 }, risk: 0.35, stakeholderReactions: { LEAD_BANKER: 15, EQUITY_HOLDER: -10, CFO: 12 } },
      { id: 'D', text: 'Engage restructuring advisor for assessment', impact: { debtManagement: 12, creditorRelations: 8, liquidityPosition: -5 }, risk: 0.25, stakeholderReactions: { TURNAROUND_EXPERT: 20, LEAD_BANKER: 15, CEO: -5 } },
      { id: 'E', text: 'Emergency credit line negotiation with existing banks', impact: { liquidityPosition: 15, debtManagement: -5, creditorRelations: 5 }, risk: 0.35, stakeholderReactions: { SENIOR_CREDITOR: 10, CFO: 15, TREASURER: 12 } },
      { id: 'F', text: 'Delay supplier payments to extend runway', impact: { liquidityPosition: 10, creditorRelations: -8, operationalCashflow: -5 }, risk: 0.30, stakeholderReactions: { KEY_SUPPLIER: -18, TREASURER: 12, COO: -8 } }
    ]
  },
  {
    id: 2,
    phase: 'CRISIS_ASSESSMENT',
    title: 'Creditor Communication',
    scenario: 'Creditors are demanding answers. Rumors are spreading. How you communicate now will shape negotiations ahead.',
    stakeholderFocus: ['SENIOR_CREDITOR', 'UNSECURED_CREDITOR', 'LEGAL_COUNSEL'],
    options: [
      { id: 'A', text: 'Proactive creditor outreach with transparent assessment', impact: { creditorRelations: 15, investorConfidence: 8, debtManagement: 5 }, risk: 0.25, stakeholderReactions: { SENIOR_CREDITOR: 15, UNSECURED_CREDITOR: 12, LEGAL_COUNSEL: 10 } },
      { id: 'B', text: 'Selective communication to key creditors first', impact: { creditorRelations: 10, debtManagement: 8, riskExposure: -5 }, risk: 0.30, stakeholderReactions: { SENIOR_CREDITOR: 18, UNSECURED_CREDITOR: -10, LEAD_BANKER: 12 } },
      { id: 'C', text: 'Formal standstill request to freeze obligations', impact: { liquidityPosition: 12, creditorRelations: -5, debtManagement: 8 }, risk: 0.35, stakeholderReactions: { LEGAL_COUNSEL: 18, SENIOR_CREDITOR: -8, KEY_SUPPLIER: -10 } },
      { id: 'D', text: 'Third-party led creditor communication', impact: { creditorRelations: 12, debtManagement: 10, investorConfidence: -3 }, risk: 0.25, stakeholderReactions: { TURNAROUND_EXPERT: 18, SENIOR_CREDITOR: 10, CEO: -5 } },
      { id: 'E', text: 'Business as usual messaging while preparing plan', impact: { operationalCashflow: 8, creditorRelations: -10, marketPosition: 5 }, risk: 0.40, stakeholderReactions: { COO: 12, SENIOR_CREDITOR: -15, MEDIA_ANALYST: -8 } },
      { id: 'F', text: 'Regular creditor updates with timeline commitment', impact: { creditorRelations: 12, debtManagement: 8, liquidityPosition: -3 }, risk: 0.25, stakeholderReactions: { UNSECURED_CREDITOR: 15, SENIOR_CREDITOR: 12, BOARD_CHAIR: 10 } }
    ]
  },
  {
    id: 3,
    phase: 'CRISIS_ASSESSMENT',
    title: 'Covenant Analysis',
    scenario: 'Multiple covenant breaches are imminent or have occurred. Legal and financial implications are severe. Response strategy is critical.',
    stakeholderFocus: ['LEGAL_COUNSEL', 'CFO', 'SENIOR_CREDITOR'],
    options: [
      { id: 'A', text: 'Proactive covenant waiver negotiations', impact: { debtManagement: 15, creditorRelations: 10, liquidityPosition: -5 }, risk: 0.25, stakeholderReactions: { LEGAL_COUNSEL: 18, SENIOR_CREDITOR: 12, CFO: 15 } },
      { id: 'B', text: 'Comprehensive amendment package proposal', impact: { debtManagement: 12, creditorRelations: 8, recoveryTrajectory: 5 }, risk: 0.30, stakeholderReactions: { LEAD_BANKER: 18, LEGAL_COUNSEL: 15, BOARD_CHAIR: 10 } },
      { id: 'C', text: 'Technical breach cure through financial engineering', impact: { debtManagement: 10, liquidityPosition: -8, riskExposure: 5 }, risk: 0.35, stakeholderReactions: { CFO: 15, TREASURER: 12, SENIOR_CREDITOR: -5 } },
      { id: 'D', text: 'Negotiate forbearance agreement', impact: { debtManagement: 12, liquidityPosition: 8, creditorRelations: -3 }, risk: 0.30, stakeholderReactions: { LEGAL_COUNSEL: 18, SENIOR_CREDITOR: 10, UNSECURED_CREDITOR: -5 } },
      { id: 'E', text: 'Accelerated refinancing to replace existing debt', impact: { debtManagement: 15, liquidityPosition: -10, recoveryTrajectory: 8 }, risk: 0.40, stakeholderReactions: { LEAD_BANKER: 15, CFO: 12, SENIOR_CREDITOR: -10 } },
      { id: 'F', text: 'Defensive legal positioning with cure rights', impact: { riskExposure: 10, debtManagement: 5, creditorRelations: -8 }, risk: 0.30, stakeholderReactions: { LEGAL_COUNSEL: 18, SENIOR_CREDITOR: -12, EQUITY_HOLDER: 8 } }
    ]
  },
  {
    id: 4,
    phase: 'CRISIS_ASSESSMENT',
    title: 'Stakeholder Prioritization',
    scenario: 'Cannot satisfy all stakeholders. Difficult choices about who gets paid and who waits. Prioritization decisions shape outcomes.',
    stakeholderFocus: ['BOARD_CHAIR', 'EQUITY_HOLDER', 'EMPLOYEE_REP'],
    options: [
      { id: 'A', text: 'Secured creditor priority to maintain financing access', impact: { creditorRelations: 12, debtManagement: 10, investorConfidence: -5 }, risk: 0.25, stakeholderReactions: { SENIOR_CREDITOR: 20, EQUITY_HOLDER: -15, KEY_SUPPLIER: -8 } },
      { id: 'B', text: 'Employee and operational priority for business continuity', impact: { operationalCashflow: 15, marketPosition: 8, creditorRelations: -8 }, risk: 0.30, stakeholderReactions: { EMPLOYEE_REP: 20, COO: 18, SENIOR_CREDITOR: -12 } },
      { id: 'C', text: 'Customer focus to preserve revenue base', impact: { operationalCashflow: 12, marketPosition: 12, liquidityPosition: -5 }, risk: 0.25, stakeholderReactions: { COO: 15, KEY_SUPPLIER: 8, SENIOR_CREDITOR: -5 } },
      { id: 'D', text: 'Balanced approach with negotiated compromises', impact: { creditorRelations: 8, operationalCashflow: 8, investorConfidence: 5 }, risk: 0.30, stakeholderReactions: { BOARD_CHAIR: 15, TURNAROUND_EXPERT: 12, EQUITY_HOLDER: 5 } },
      { id: 'E', text: 'Equity holder protection focus', impact: { investorConfidence: 15, recoveryTrajectory: 8, creditorRelations: -12 }, risk: 0.40, stakeholderReactions: { EQUITY_HOLDER: 20, SENIOR_CREDITOR: -18, UNSECURED_CREDITOR: -15 } },
      { id: 'F', text: 'Legal-driven prioritization based on obligations', impact: { riskExposure: 12, debtManagement: 10, operationalCashflow: -5 }, risk: 0.25, stakeholderReactions: { LEGAL_COUNSEL: 18, REGULATOR: 12, KEY_SUPPLIER: -10 } }
    ]
  },
  {
    id: 5,
    phase: 'CRISIS_ASSESSMENT',
    title: 'Business Assessment',
    scenario: 'Need to assess what parts of the business are viable. Some units may need to be sold or closed. Strategic choices affect recovery.',
    stakeholderFocus: ['CEO', 'COO', 'TURNAROUND_EXPERT'],
    options: [
      { id: 'A', text: 'Comprehensive business unit review with viability analysis', impact: { recoveryTrajectory: 15, marketPosition: 8, operationalCashflow: -3 }, risk: 0.25, stakeholderReactions: { TURNAROUND_EXPERT: 18, CEO: 15, BOARD_CHAIR: 12 } },
      { id: 'B', text: 'Quick divestiture of non-core assets', impact: { liquidityPosition: 18, recoveryTrajectory: 5, marketPosition: -8 }, risk: 0.35, stakeholderReactions: { CFO: 15, SENIOR_CREDITOR: 18, EMPLOYEE_REP: -12 } },
      { id: 'C', text: 'Operational efficiency focus across all units', impact: { operationalCashflow: 15, marketPosition: 5, recoveryTrajectory: 8 }, risk: 0.25, stakeholderReactions: { COO: 18, CFO: 12, EMPLOYEE_REP: -5 } },
      { id: 'D', text: 'Customer and market analysis to identify core strengths', impact: { marketPosition: 12, recoveryTrajectory: 10, operationalCashflow: 5 }, risk: 0.25, stakeholderReactions: { CEO: 15, COO: 12, KEY_SUPPLIER: 8 } },
      { id: 'E', text: 'External strategic options review', impact: { recoveryTrajectory: 12, investorConfidence: 8, debtManagement: 5 }, risk: 0.30, stakeholderReactions: { LEAD_BANKER: 18, BOARD_CHAIR: 15, CEO: -5 } },
      { id: 'F', text: 'Protect core business while managing distressed units', impact: { operationalCashflow: 12, marketPosition: 10, liquidityPosition: -5 }, risk: 0.25, stakeholderReactions: { COO: 18, CEO: 12, TURNAROUND_EXPERT: 10 } }
    ]
  },
  {
    id: 6,
    phase: 'CRISIS_ASSESSMENT',
    title: 'Governance Under Pressure',
    scenario: 'Board oversight intensifies. Fiduciary duties in distress are complex. Directors need assurance that process is sound.',
    stakeholderFocus: ['BOARD_CHAIR', 'LEGAL_COUNSEL', 'REGULATOR'],
    options: [
      { id: 'A', text: 'Enhanced board reporting and decision documentation', impact: { riskExposure: 12, investorConfidence: 10, debtManagement: 5 }, risk: 0.20, stakeholderReactions: { BOARD_CHAIR: 18, LEGAL_COUNSEL: 15, REGULATOR: 12 } },
      { id: 'B', text: 'Independent committee for restructuring oversight', impact: { riskExposure: 15, creditorRelations: 8, investorConfidence: 5 }, risk: 0.25, stakeholderReactions: { BOARD_CHAIR: 15, UNSECURED_CREDITOR: 10, EQUITY_HOLDER: 5 } },
      { id: 'C', text: 'External legal opinion on director duties', impact: { riskExposure: 12, debtManagement: 8, liquidityPosition: -5 }, risk: 0.25, stakeholderReactions: { LEGAL_COUNSEL: 18, BOARD_CHAIR: 15, CFO: -3 } },
      { id: 'D', text: 'Regulatory proactive engagement and disclosure', impact: { riskExposure: 10, creditorRelations: 8, investorConfidence: 5 }, risk: 0.25, stakeholderReactions: { REGULATOR: 18, BOARD_CHAIR: 12, LEGAL_COUNSEL: 10 } },
      { id: 'E', text: 'Crisis governance framework adoption', impact: { riskExposure: 12, operationalCashflow: 5, recoveryTrajectory: 5 }, risk: 0.20, stakeholderReactions: { TURNAROUND_EXPERT: 15, BOARD_CHAIR: 15, CEO: 10 } },
      { id: 'F', text: 'D&O liability management and insurance review', impact: { riskExposure: 10, investorConfidence: 5, creditorRelations: -3 }, risk: 0.25, stakeholderReactions: { LEGAL_COUNSEL: 18, BOARD_CHAIR: 12, SENIOR_CREDITOR: -5 } }
    ]
  },

  // Phase 2: Stabilization (Rounds 7-12)
  {
    id: 7,
    phase: 'STABILIZATION',
    title: 'Cash Preservation',
    scenario: 'Immediate cash preservation is critical. Every dollar matters. Short-term survival depends on aggressive cash management.',
    stakeholderFocus: ['TREASURER', 'CFO', 'KEY_SUPPLIER'],
    options: [
      { id: 'A', text: 'Implement daily cash forecasting and control', impact: { liquidityPosition: 15, operationalCashflow: 10, riskExposure: 5 }, risk: 0.20, stakeholderReactions: { TREASURER: 20, CFO: 18, COO: 10 } },
      { id: 'B', text: 'Aggressive working capital optimization', impact: { liquidityPosition: 18, operationalCashflow: 8, marketPosition: -5 }, risk: 0.30, stakeholderReactions: { CFO: 18, KEY_SUPPLIER: -12, TREASURER: 15 } },
      { id: 'C', text: 'Centralize all cash management and payments', impact: { liquidityPosition: 12, operationalCashflow: 10, riskExposure: 8 }, risk: 0.25, stakeholderReactions: { TREASURER: 18, CFO: 15, COO: -5 } },
      { id: 'D', text: 'Renegotiate all payment terms with suppliers', impact: { liquidityPosition: 15, creditorRelations: -5, operationalCashflow: 5 }, risk: 0.35, stakeholderReactions: { CFO: 15, KEY_SUPPLIER: -15, UNSECURED_CREDITOR: -8 } },
      { id: 'E', text: 'Accelerate customer collections program', impact: { liquidityPosition: 12, operationalCashflow: 15, marketPosition: -3 }, risk: 0.25, stakeholderReactions: { TREASURER: 18, COO: 12, KEY_SUPPLIER: 5 } },
      { id: 'F', text: 'Cash pooling from subsidiaries', impact: { liquidityPosition: 12, riskExposure: -5, operationalCashflow: 8 }, risk: 0.30, stakeholderReactions: { CFO: 18, LEGAL_COUNSEL: 10, REGULATOR: -5 } }
    ]
  },
  {
    id: 8,
    phase: 'STABILIZATION',
    title: 'Creditor Negotiations',
    scenario: 'Formal creditor negotiations begin. Multiple classes with different interests. Finding common ground is essential.',
    stakeholderFocus: ['SENIOR_CREDITOR', 'UNSECURED_CREDITOR', 'LEAD_BANKER'],
    options: [
      { id: 'A', text: 'Consensual restructuring negotiation approach', impact: { creditorRelations: 15, debtManagement: 12, liquidityPosition: -3 }, risk: 0.30, stakeholderReactions: { SENIOR_CREDITOR: 15, UNSECURED_CREDITOR: 12, LEAD_BANKER: 18 } },
      { id: 'B', text: 'Senior creditor focused deal structure', impact: { debtManagement: 15, creditorRelations: 8, investorConfidence: -8 }, risk: 0.35, stakeholderReactions: { SENIOR_CREDITOR: 20, UNSECURED_CREDITOR: -15, EQUITY_HOLDER: -12 } },
      { id: 'C', text: 'All creditor standstill to create negotiation space', impact: { liquidityPosition: 12, debtManagement: 10, creditorRelations: -5 }, risk: 0.35, stakeholderReactions: { LEGAL_COUNSEL: 18, SENIOR_CREDITOR: 5, KEY_SUPPLIER: -10 } },
      { id: 'D', text: 'Debt-for-equity conversion proposal', impact: { debtManagement: 18, liquidityPosition: 10, investorConfidence: -12 }, risk: 0.40, stakeholderReactions: { SENIOR_CREDITOR: 15, EQUITY_HOLDER: -20, LEAD_BANKER: 12 } },
      { id: 'E', text: 'Extend and amend approach with maturity relief', impact: { debtManagement: 12, creditorRelations: 10, liquidityPosition: 5 }, risk: 0.30, stakeholderReactions: { UNSECURED_CREDITOR: 15, SENIOR_CREDITOR: 12, CFO: 10 } },
      { id: 'F', text: 'Interest deferral with enhanced security package', impact: { liquidityPosition: 15, debtManagement: 8, creditorRelations: 5 }, risk: 0.30, stakeholderReactions: { SENIOR_CREDITOR: 15, TREASURER: 18, UNSECURED_CREDITOR: -5 } }
    ]
  },
  {
    id: 9,
    phase: 'STABILIZATION',
    title: 'Operational Stabilization',
    scenario: 'Operations must continue during restructuring. Supplier confidence is shaky. Customer relationships need protection.',
    stakeholderFocus: ['COO', 'KEY_SUPPLIER', 'EMPLOYEE_REP'],
    options: [
      { id: 'A', text: 'Critical supplier relationship protection program', impact: { operationalCashflow: 15, marketPosition: 10, liquidityPosition: -8 }, risk: 0.25, stakeholderReactions: { KEY_SUPPLIER: 20, COO: 18, SENIOR_CREDITOR: -5 } },
      { id: 'B', text: 'Operational efficiency transformation', impact: { operationalCashflow: 18, marketPosition: 5, recoveryTrajectory: 8 }, risk: 0.30, stakeholderReactions: { COO: 18, TURNAROUND_EXPERT: 15, EMPLOYEE_REP: -10 } },
      { id: 'C', text: 'Customer retention with service guarantees', impact: { marketPosition: 15, operationalCashflow: 10, liquidityPosition: -5 }, risk: 0.25, stakeholderReactions: { COO: 15, KEY_SUPPLIER: 10, CFO: 8 } },
      { id: 'D', text: 'Workforce optimization and restructuring', impact: { operationalCashflow: 15, liquidityPosition: 10, marketPosition: -5 }, risk: 0.35, stakeholderReactions: { CFO: 18, EMPLOYEE_REP: -18, TURNAROUND_EXPERT: 12 } },
      { id: 'E', text: 'Supply chain rationalization', impact: { operationalCashflow: 12, liquidityPosition: 8, riskExposure: 5 }, risk: 0.30, stakeholderReactions: { COO: 18, KEY_SUPPLIER: -8, CFO: 12 } },
      { id: 'F', text: 'Business continuity focus with minimal changes', impact: { marketPosition: 12, operationalCashflow: 8, recoveryTrajectory: -5 }, risk: 0.25, stakeholderReactions: { CEO: 15, EMPLOYEE_REP: 10, TURNAROUND_EXPERT: -8 } }
    ]
  },
  {
    id: 10,
    phase: 'STABILIZATION',
    title: 'New Capital Options',
    scenario: 'Fresh capital is needed but options are limited. Distressed financing is expensive. Trade-offs between cost and availability.',
    stakeholderFocus: ['LEAD_BANKER', 'EQUITY_HOLDER', 'CFO'],
    options: [
      { id: 'A', text: 'DIP financing negotiation for new liquidity', impact: { liquidityPosition: 20, debtManagement: -8, recoveryTrajectory: 10 }, risk: 0.35, stakeholderReactions: { SENIOR_CREDITOR: 15, CFO: 18, EQUITY_HOLDER: -10 } },
      { id: 'B', text: 'Rights issue to existing shareholders', impact: { liquidityPosition: 15, investorConfidence: 8, debtManagement: 5 }, risk: 0.35, stakeholderReactions: { EQUITY_HOLDER: 10, BOARD_CHAIR: 15, SENIOR_CREDITOR: 5 } },
      { id: 'C', text: 'Strategic investor search for capital injection', impact: { liquidityPosition: 15, recoveryTrajectory: 12, investorConfidence: -5 }, risk: 0.40, stakeholderReactions: { LEAD_BANKER: 18, CEO: 12, EQUITY_HOLDER: -8 } },
      { id: 'D', text: 'Asset-backed financing on remaining collateral', impact: { liquidityPosition: 12, debtManagement: 5, riskExposure: -5 }, risk: 0.30, stakeholderReactions: { TREASURER: 18, CFO: 15, SENIOR_CREDITOR: -5 } },
      { id: 'E', text: 'Vendor financing and trade credit enhancement', impact: { liquidityPosition: 10, operationalCashflow: 12, creditorRelations: 5 }, risk: 0.25, stakeholderReactions: { KEY_SUPPLIER: 15, COO: 12, CFO: 10 } },
      { id: 'F', text: 'Distressed debt investor engagement', impact: { liquidityPosition: 18, debtManagement: 10, investorConfidence: -10 }, risk: 0.40, stakeholderReactions: { LEAD_BANKER: 15, EQUITY_HOLDER: -15, SENIOR_CREDITOR: 8 } }
    ]
  },
  {
    id: 11,
    phase: 'STABILIZATION',
    title: 'Market Confidence',
    scenario: 'Market perception affects everything. Customers may defect, suppliers may cut credit, employees may leave. Confidence matters.',
    stakeholderFocus: ['MEDIA_ANALYST', 'CEO', 'EMPLOYEE_REP'],
    options: [
      { id: 'A', text: 'Proactive market communication with restructuring plan', impact: { investorConfidence: 15, marketPosition: 12, creditorRelations: 5 }, risk: 0.25, stakeholderReactions: { MEDIA_ANALYST: 18, CEO: 15, BOARD_CHAIR: 10 } },
      { id: 'B', text: 'Customer retention campaign with guarantees', impact: { marketPosition: 18, operationalCashflow: 10, liquidityPosition: -8 }, risk: 0.30, stakeholderReactions: { COO: 18, CEO: 15, SENIOR_CREDITOR: -5 } },
      { id: 'C', text: 'Employee communication and retention program', impact: { operationalCashflow: 12, marketPosition: 8, liquidityPosition: -5 }, risk: 0.25, stakeholderReactions: { EMPLOYEE_REP: 20, CEO: 12, CFO: -5 } },
      { id: 'D', text: 'Selective disclosure to key stakeholders', impact: { creditorRelations: 10, investorConfidence: 8, marketPosition: -3 }, risk: 0.30, stakeholderReactions: { SENIOR_CREDITOR: 15, EQUITY_HOLDER: 12, MEDIA_ANALYST: -10 } },
      { id: 'E', text: 'Crisis communications firm engagement', impact: { investorConfidence: 12, marketPosition: 10, liquidityPosition: -5 }, risk: 0.25, stakeholderReactions: { CEO: 15, MEDIA_ANALYST: 15, CFO: -3 } },
      { id: 'F', text: 'Actions over words - let results speak', impact: { operationalCashflow: 12, marketPosition: 8, investorConfidence: -3 }, risk: 0.30, stakeholderReactions: { COO: 18, TURNAROUND_EXPERT: 12, MEDIA_ANALYST: -8 } }
    ]
  },
  {
    id: 12,
    phase: 'STABILIZATION',
    title: 'Stabilization Assessment',
    scenario: 'Time to assess stabilization progress. Is the patient stable enough for surgery? Can restructuring proceed?',
    stakeholderFocus: ['TURNAROUND_EXPERT', 'BOARD_CHAIR', 'CFO'],
    options: [
      { id: 'A', text: 'Comprehensive stabilization review and readiness assessment', impact: { recoveryTrajectory: 15, riskExposure: 10, debtManagement: 5 }, risk: 0.20, stakeholderReactions: { TURNAROUND_EXPERT: 18, BOARD_CHAIR: 15, CFO: 12 } },
      { id: 'B', text: 'Accelerate to restructuring despite remaining risks', impact: { recoveryTrajectory: 12, debtManagement: 10, riskExposure: -8 }, risk: 0.40, stakeholderReactions: { SENIOR_CREDITOR: 15, LEAD_BANKER: 12, BOARD_CHAIR: -8 } },
      { id: 'C', text: 'Extended stabilization with additional measures', impact: { liquidityPosition: 10, riskExposure: 12, recoveryTrajectory: -5 }, risk: 0.30, stakeholderReactions: { CFO: 15, TREASURER: 12, SENIOR_CREDITOR: -8 } },
      { id: 'D', text: 'Independent assessment for creditor confidence', impact: { creditorRelations: 15, recoveryTrajectory: 8, liquidityPosition: -3 }, risk: 0.25, stakeholderReactions: { UNSECURED_CREDITOR: 15, SENIOR_CREDITOR: 12, BOARD_CHAIR: 10 } },
      { id: 'E', text: 'Contingency planning for stabilization failure', impact: { riskExposure: 15, debtManagement: 8, investorConfidence: -5 }, risk: 0.30, stakeholderReactions: { LEGAL_COUNSEL: 18, TURNAROUND_EXPERT: 12, CEO: -8 } },
      { id: 'F', text: 'Stakeholder confidence survey and adjustment', impact: { creditorRelations: 12, investorConfidence: 10, operationalCashflow: 5 }, risk: 0.25, stakeholderReactions: { BOARD_CHAIR: 15, EMPLOYEE_REP: 10, MEDIA_ANALYST: 8 } }
    ]
  },

  // Phase 3: Restructuring (Rounds 13-18)
  {
    id: 13,
    phase: 'RESTRUCTURING',
    title: 'Restructuring Strategy',
    scenario: 'The restructuring plan must be finalized. Multiple paths exist - out-of-court, prepack, or full restructuring. Stakes are highest now.',
    stakeholderFocus: ['LEAD_BANKER', 'LEGAL_COUNSEL', 'BOARD_CHAIR'],
    options: [
      { id: 'A', text: 'Out-of-court consensual restructuring', impact: { debtManagement: 15, creditorRelations: 12, recoveryTrajectory: 8 }, risk: 0.30, stakeholderReactions: { LEAD_BANKER: 18, UNSECURED_CREDITOR: 12, BOARD_CHAIR: 15 } },
      { id: 'B', text: 'Pre-packaged restructuring with key creditor support', impact: { debtManagement: 18, recoveryTrajectory: 10, creditorRelations: 5 }, risk: 0.35, stakeholderReactions: { SENIOR_CREDITOR: 18, LEAD_BANKER: 15, LEGAL_COUNSEL: 12 } },
      { id: 'C', text: 'Full court-supervised restructuring process', impact: { debtManagement: 15, riskExposure: 12, marketPosition: -10 }, risk: 0.40, stakeholderReactions: { LEGAL_COUNSEL: 18, REGULATOR: 12, MEDIA_ANALYST: -15 } },
      { id: 'D', text: 'Scheme of arrangement approach', impact: { debtManagement: 12, creditorRelations: 10, recoveryTrajectory: 8 }, risk: 0.30, stakeholderReactions: { LEGAL_COUNSEL: 18, UNSECURED_CREDITOR: 12, BOARD_CHAIR: 10 } },
      { id: 'E', text: 'Strategic sale as restructuring exit', impact: { liquidityPosition: 18, recoveryTrajectory: 12, investorConfidence: -8 }, risk: 0.40, stakeholderReactions: { LEAD_BANKER: 18, EQUITY_HOLDER: -15, CEO: -5 } },
      { id: 'F', text: 'Hybrid approach with flexibility for evolution', impact: { recoveryTrajectory: 12, debtManagement: 10, creditorRelations: 8 }, risk: 0.30, stakeholderReactions: { TURNAROUND_EXPERT: 18, BOARD_CHAIR: 12, LEAD_BANKER: 10 } }
    ]
  },
  {
    id: 14,
    phase: 'RESTRUCTURING',
    title: 'Debt Restructuring',
    scenario: 'The capital structure must be fixed. Debt levels are unsustainable. Haircuts, conversions, and extensions are on the table.',
    stakeholderFocus: ['SENIOR_CREDITOR', 'UNSECURED_CREDITOR', 'CFO'],
    options: [
      { id: 'A', text: 'Pro-rata creditor treatment with universal haircut', impact: { debtManagement: 18, creditorRelations: 10, liquidityPosition: 8 }, risk: 0.35, stakeholderReactions: { UNSECURED_CREDITOR: 15, SENIOR_CREDITOR: -5, BOARD_CHAIR: 10 } },
      { id: 'B', text: 'Seniority-based waterfall restructuring', impact: { debtManagement: 15, creditorRelations: 5, liquidityPosition: 10 }, risk: 0.30, stakeholderReactions: { SENIOR_CREDITOR: 20, UNSECURED_CREDITOR: -12, LEGAL_COUNSEL: 10 } },
      { id: 'C', text: 'Debt-to-equity conversion for junior creditors', impact: { debtManagement: 20, liquidityPosition: 12, investorConfidence: -10 }, risk: 0.40, stakeholderReactions: { UNSECURED_CREDITOR: 12, EQUITY_HOLDER: -18, CFO: 15 } },
      { id: 'D', text: 'Maturity extension with amended terms', impact: { debtManagement: 12, liquidityPosition: 10, creditorRelations: 8 }, risk: 0.25, stakeholderReactions: { SENIOR_CREDITOR: 15, UNSECURED_CREDITOR: 10, TREASURER: 12 } },
      { id: 'E', text: 'Partial debt buyback at discount', impact: { debtManagement: 15, liquidityPosition: -8, recoveryTrajectory: 8 }, risk: 0.35, stakeholderReactions: { CFO: 18, LEAD_BANKER: 12, SENIOR_CREDITOR: 8 } },
      { id: 'F', text: 'New money with super-priority and old debt restructure', impact: { liquidityPosition: 18, debtManagement: 10, creditorRelations: -5 }, risk: 0.40, stakeholderReactions: { LEAD_BANKER: 18, SENIOR_CREDITOR: 10, UNSECURED_CREDITOR: -12 } }
    ]
  },
  {
    id: 15,
    phase: 'RESTRUCTURING',
    title: 'Operational Restructuring',
    scenario: 'Business model changes are needed. Cost structure must be right-sized. Operations must match the new financial reality.',
    stakeholderFocus: ['COO', 'TURNAROUND_EXPERT', 'EMPLOYEE_REP'],
    options: [
      { id: 'A', text: 'Comprehensive business transformation program', impact: { operationalCashflow: 18, recoveryTrajectory: 12, marketPosition: -5 }, risk: 0.35, stakeholderReactions: { TURNAROUND_EXPERT: 20, COO: 15, EMPLOYEE_REP: -12 } },
      { id: 'B', text: 'Focused cost reduction with minimal business impact', impact: { operationalCashflow: 15, marketPosition: 8, recoveryTrajectory: 5 }, risk: 0.25, stakeholderReactions: { COO: 18, CFO: 15, EMPLOYEE_REP: -5 } },
      { id: 'C', text: 'Portfolio rationalization and non-core exits', impact: { liquidityPosition: 15, recoveryTrajectory: 10, marketPosition: -8 }, risk: 0.35, stakeholderReactions: { LEAD_BANKER: 18, CFO: 12, EMPLOYEE_REP: -15 } },
      { id: 'D', text: 'Digital transformation for efficiency gains', impact: { operationalCashflow: 12, recoveryTrajectory: 15, liquidityPosition: -8 }, risk: 0.35, stakeholderReactions: { CEO: 15, COO: 12, TURNAROUND_EXPERT: 8 } },
      { id: 'E', text: 'Outsourcing and partnership restructure', impact: { operationalCashflow: 15, marketPosition: 5, riskExposure: 5 }, risk: 0.30, stakeholderReactions: { COO: 15, KEY_SUPPLIER: 10, EMPLOYEE_REP: -12 } },
      { id: 'F', text: 'Workforce restructuring with retention of key talent', impact: { operationalCashflow: 15, marketPosition: 8, liquidityPosition: 5 }, risk: 0.35, stakeholderReactions: { CFO: 18, TURNAROUND_EXPERT: 12, EMPLOYEE_REP: -10 } }
    ]
  },
  {
    id: 16,
    phase: 'RESTRUCTURING',
    title: 'Equity Resolution',
    scenario: 'Equity position must be addressed. Existing shareholders face dilution or wipeout. New equity structure needs design.',
    stakeholderFocus: ['EQUITY_HOLDER', 'BOARD_CHAIR', 'LEAD_BANKER'],
    options: [
      { id: 'A', text: 'Significant dilution with equity raise', impact: { liquidityPosition: 15, investorConfidence: -10, debtManagement: 8 }, risk: 0.35, stakeholderReactions: { LEAD_BANKER: 15, EQUITY_HOLDER: -18, BOARD_CHAIR: 8 } },
      { id: 'B', text: 'Equity wipeout with creditor conversion', impact: { debtManagement: 20, investorConfidence: -15, recoveryTrajectory: 10 }, risk: 0.45, stakeholderReactions: { SENIOR_CREDITOR: 18, EQUITY_HOLDER: -25, LEGAL_COUNSEL: 10 } },
      { id: 'C', text: 'Management equity plan for retention', impact: { operationalCashflow: 10, recoveryTrajectory: 12, investorConfidence: -3 }, risk: 0.30, stakeholderReactions: { CEO: 18, COO: 15, EQUITY_HOLDER: -8 } },
      { id: 'D', text: 'Rights offering with backstop commitment', impact: { liquidityPosition: 12, investorConfidence: 5, debtManagement: 8 }, risk: 0.35, stakeholderReactions: { EQUITY_HOLDER: 12, BOARD_CHAIR: 15, LEAD_BANKER: 10 } },
      { id: 'E', text: 'Strategic investor with majority stake', impact: { liquidityPosition: 18, recoveryTrajectory: 12, investorConfidence: -10 }, risk: 0.40, stakeholderReactions: { LEAD_BANKER: 18, CEO: -8, EQUITY_HOLDER: -15 } },
      { id: 'F', text: 'Hybrid equity structure preserving some existing value', impact: { investorConfidence: 8, debtManagement: 10, creditorRelations: -5 }, risk: 0.35, stakeholderReactions: { EQUITY_HOLDER: 10, BOARD_CHAIR: 12, UNSECURED_CREDITOR: -10 } }
    ]
  },
  {
    id: 17,
    phase: 'RESTRUCTURING',
    title: 'Creditor Approval',
    scenario: 'Restructuring plan needs creditor approval. Different classes have different recovery. Building consensus is critical.',
    stakeholderFocus: ['SENIOR_CREDITOR', 'UNSECURED_CREDITOR', 'LEGAL_COUNSEL'],
    options: [
      { id: 'A', text: 'Enhanced recovery for holdout risk mitigation', impact: { creditorRelations: 15, debtManagement: -5, recoveryTrajectory: 8 }, risk: 0.30, stakeholderReactions: { UNSECURED_CREDITOR: 18, SENIOR_CREDITOR: 12, CFO: -5 } },
      { id: 'B', text: 'Cramdown strategy for dissenting creditors', impact: { debtManagement: 15, creditorRelations: -10, recoveryTrajectory: 5 }, risk: 0.40, stakeholderReactions: { LEGAL_COUNSEL: 15, UNSECURED_CREDITOR: -15, SENIOR_CREDITOR: -8 } },
      { id: 'C', text: 'Creditor advisory board for plan refinement', impact: { creditorRelations: 15, recoveryTrajectory: 10, debtManagement: 5 }, risk: 0.25, stakeholderReactions: { SENIOR_CREDITOR: 15, UNSECURED_CREDITOR: 15, TURNAROUND_EXPERT: 10 } },
      { id: 'D', text: 'Sweeteners for key creditor class support', impact: { creditorRelations: 12, debtManagement: 8, liquidityPosition: -5 }, risk: 0.30, stakeholderReactions: { SENIOR_CREDITOR: 18, LEAD_BANKER: 12, UNSECURED_CREDITOR: -5 } },
      { id: 'E', text: 'Mediated negotiations for final consensus', impact: { creditorRelations: 15, debtManagement: 10, recoveryTrajectory: 8 }, risk: 0.30, stakeholderReactions: { TURNAROUND_EXPERT: 18, UNSECURED_CREDITOR: 12, SENIOR_CREDITOR: 10 } },
      { id: 'F', text: 'Timeline pressure to force decision', impact: { recoveryTrajectory: 12, creditorRelations: -5, debtManagement: 8 }, risk: 0.40, stakeholderReactions: { CEO: 15, SENIOR_CREDITOR: -8, UNSECURED_CREDITOR: -10 } }
    ]
  },
  {
    id: 18,
    phase: 'RESTRUCTURING',
    title: 'Restructuring Implementation',
    scenario: 'Plan approved. Now execution begins. Implementation complexity is high. Every detail matters.',
    stakeholderFocus: ['TURNAROUND_EXPERT', 'CFO', 'COO'],
    options: [
      { id: 'A', text: 'Comprehensive implementation program management', impact: { recoveryTrajectory: 18, operationalCashflow: 10, riskExposure: 8 }, risk: 0.25, stakeholderReactions: { TURNAROUND_EXPERT: 20, CFO: 15, BOARD_CHAIR: 12 } },
      { id: 'B', text: 'Accelerated implementation for quick stabilization', impact: { recoveryTrajectory: 15, riskExposure: -5, operationalCashflow: 8 }, risk: 0.35, stakeholderReactions: { CEO: 15, CFO: 12, TURNAROUND_EXPERT: -5 } },
      { id: 'C', text: 'Phased implementation with milestone reviews', impact: { riskExposure: 15, recoveryTrajectory: 10, creditorRelations: 8 }, risk: 0.25, stakeholderReactions: { BOARD_CHAIR: 18, TURNAROUND_EXPERT: 12, SENIOR_CREDITOR: 10 } },
      { id: 'D', text: 'External implementation support team', impact: { recoveryTrajectory: 12, operationalCashflow: 8, liquidityPosition: -8 }, risk: 0.30, stakeholderReactions: { TURNAROUND_EXPERT: 15, CFO: -5, BOARD_CHAIR: 10 } },
      { id: 'E', text: 'Internal ownership with management accountability', impact: { operationalCashflow: 15, recoveryTrajectory: 10, marketPosition: 8 }, risk: 0.30, stakeholderReactions: { CEO: 18, COO: 15, EMPLOYEE_REP: 8 } },
      { id: 'F', text: 'Stakeholder communication throughout implementation', impact: { creditorRelations: 12, investorConfidence: 12, recoveryTrajectory: 8 }, risk: 0.20, stakeholderReactions: { MEDIA_ANALYST: 15, EMPLOYEE_REP: 12, SENIOR_CREDITOR: 10 } }
    ]
  },

  // Phase 4: Recovery (Rounds 19-24)
  {
    id: 19,
    phase: 'RECOVERY',
    title: 'Post-Restructuring Operations',
    scenario: 'Restructuring is complete. The new company must now perform. Proving the business model works is essential.',
    stakeholderFocus: ['CEO', 'COO', 'KEY_SUPPLIER'],
    options: [
      { id: 'A', text: 'Performance improvement program launch', impact: { operationalCashflow: 18, marketPosition: 12, recoveryTrajectory: 10 }, risk: 0.25, stakeholderReactions: { CEO: 18, COO: 18, TURNAROUND_EXPERT: 12 } },
      { id: 'B', text: 'Customer win-back and growth initiative', impact: { marketPosition: 18, operationalCashflow: 10, liquidityPosition: -5 }, risk: 0.30, stakeholderReactions: { COO: 18, KEY_SUPPLIER: 12, CFO: 8 } },
      { id: 'C', text: 'Supplier partnership rebuilding', impact: { operationalCashflow: 12, marketPosition: 10, creditorRelations: 8 }, risk: 0.25, stakeholderReactions: { KEY_SUPPLIER: 20, COO: 15, UNSECURED_CREDITOR: 5 } },
      { id: 'D', text: 'Innovation and product development restart', impact: { marketPosition: 15, recoveryTrajectory: 12, operationalCashflow: -5 }, risk: 0.35, stakeholderReactions: { CEO: 18, COO: 12, CFO: -5 } },
      { id: 'E', text: 'Operational excellence and efficiency focus', impact: { operationalCashflow: 15, liquidityPosition: 10, marketPosition: 5 }, risk: 0.20, stakeholderReactions: { CFO: 18, COO: 15, TREASURER: 12 } },
      { id: 'F', text: 'Talent and capability investment', impact: { marketPosition: 12, operationalCashflow: 8, recoveryTrajectory: 12 }, risk: 0.30, stakeholderReactions: { EMPLOYEE_REP: 18, CEO: 15, CFO: -5 } }
    ]
  },
  {
    id: 20,
    phase: 'RECOVERY',
    title: 'Creditor Relationship Normalization',
    scenario: 'Time to normalize creditor relationships. Trust must be rebuilt. Long-term financing stability is the goal.',
    stakeholderFocus: ['SENIOR_CREDITOR', 'LEAD_BANKER', 'TREASURER'],
    options: [
      { id: 'A', text: 'Regular creditor communication and transparency', impact: { creditorRelations: 18, debtManagement: 10, investorConfidence: 8 }, risk: 0.20, stakeholderReactions: { SENIOR_CREDITOR: 18, UNSECURED_CREDITOR: 15, TREASURER: 12 } },
      { id: 'B', text: 'Early debt paydown to demonstrate commitment', impact: { creditorRelations: 15, debtManagement: 12, liquidityPosition: -8 }, risk: 0.25, stakeholderReactions: { SENIOR_CREDITOR: 18, TREASURER: 12, CFO: 10 } },
      { id: 'C', text: 'Banking relationship diversification', impact: { debtManagement: 12, riskExposure: 10, creditorRelations: 5 }, risk: 0.30, stakeholderReactions: { LEAD_BANKER: -8, TREASURER: 15, CFO: 12 } },
      { id: 'D', text: 'Credit facility improvement negotiations', impact: { debtManagement: 15, creditorRelations: 8, liquidityPosition: 5 }, risk: 0.30, stakeholderReactions: { LEAD_BANKER: 15, TREASURER: 18, SENIOR_CREDITOR: 10 } },
      { id: 'E', text: 'Covenant reset with appropriate headroom', impact: { debtManagement: 12, riskExposure: 10, creditorRelations: 8 }, risk: 0.25, stakeholderReactions: { CFO: 18, LEGAL_COUNSEL: 12, SENIOR_CREDITOR: 10 } },
      { id: 'F', text: 'Performance-linked creditor arrangements', impact: { creditorRelations: 12, recoveryTrajectory: 10, debtManagement: 8 }, risk: 0.30, stakeholderReactions: { SENIOR_CREDITOR: 15, TURNAROUND_EXPERT: 12, CFO: 10 } }
    ]
  },
  {
    id: 21,
    phase: 'RECOVERY',
    title: 'Market Position Recovery',
    scenario: 'Market credibility must be restored. Reputation was damaged. Rebuilding market position takes sustained effort.',
    stakeholderFocus: ['CEO', 'MEDIA_ANALYST', 'COO'],
    options: [
      { id: 'A', text: 'Transformation story and brand rebuilding', impact: { marketPosition: 18, investorConfidence: 12, operationalCashflow: 5 }, risk: 0.25, stakeholderReactions: { CEO: 18, MEDIA_ANALYST: 15, EMPLOYEE_REP: 10 } },
      { id: 'B', text: 'Customer experience excellence initiative', impact: { marketPosition: 15, operationalCashflow: 12, recoveryTrajectory: 8 }, risk: 0.25, stakeholderReactions: { COO: 18, KEY_SUPPLIER: 12, CEO: 10 } },
      { id: 'C', text: 'Industry thought leadership and visibility', impact: { marketPosition: 12, investorConfidence: 10, operationalCashflow: 3 }, risk: 0.25, stakeholderReactions: { CEO: 18, MEDIA_ANALYST: 15, BOARD_CHAIR: 8 } },
      { id: 'D', text: 'Strategic partnerships for market credibility', impact: { marketPosition: 15, operationalCashflow: 8, recoveryTrajectory: 10 }, risk: 0.30, stakeholderReactions: { CEO: 15, KEY_SUPPLIER: 18, BOARD_CHAIR: 10 } },
      { id: 'E', text: 'Product and service quality reinvestment', impact: { marketPosition: 12, operationalCashflow: 10, liquidityPosition: -5 }, risk: 0.25, stakeholderReactions: { COO: 18, CEO: 12, CFO: -5 } },
      { id: 'F', text: 'Transparent progress reporting to stakeholders', impact: { investorConfidence: 15, marketPosition: 10, creditorRelations: 8 }, risk: 0.20, stakeholderReactions: { MEDIA_ANALYST: 18, BOARD_CHAIR: 15, SENIOR_CREDITOR: 10 } }
    ]
  },
  {
    id: 22,
    phase: 'RECOVERY',
    title: 'Financial Strength Building',
    scenario: 'Building sustainable financial strength. Moving from survival to growth. Balance sheet must support future plans.',
    stakeholderFocus: ['CFO', 'TREASURER', 'EQUITY_HOLDER'],
    options: [
      { id: 'A', text: 'Balance sheet optimization and deleveraging', impact: { debtManagement: 18, liquidityPosition: 10, recoveryTrajectory: 8 }, risk: 0.25, stakeholderReactions: { CFO: 18, TREASURER: 15, SENIOR_CREDITOR: 12 } },
      { id: 'B', text: 'Working capital efficiency improvement', impact: { liquidityPosition: 15, operationalCashflow: 12, riskExposure: 5 }, risk: 0.20, stakeholderReactions: { TREASURER: 18, CFO: 15, COO: 10 } },
      { id: 'C', text: 'Cash generation focus and dividend policy', impact: { investorConfidence: 15, liquidityPosition: 8, recoveryTrajectory: 5 }, risk: 0.25, stakeholderReactions: { EQUITY_HOLDER: 18, BOARD_CHAIR: 12, CFO: 10 } },
      { id: 'D', text: 'Capital structure optimization for growth', impact: { debtManagement: 12, recoveryTrajectory: 15, riskExposure: 5 }, risk: 0.30, stakeholderReactions: { CFO: 18, LEAD_BANKER: 12, BOARD_CHAIR: 10 } },
      { id: 'E', text: 'Investment grade rating path development', impact: { debtManagement: 15, creditorRelations: 10, recoveryTrajectory: 8 }, risk: 0.30, stakeholderReactions: { CFO: 18, SENIOR_CREDITOR: 15, MEDIA_ANALYST: 10 } },
      { id: 'F', text: 'Reserve building for future resilience', impact: { liquidityPosition: 15, riskExposure: 12, recoveryTrajectory: 5 }, risk: 0.20, stakeholderReactions: { TREASURER: 18, CFO: 15, BOARD_CHAIR: 12 } }
    ]
  },
  {
    id: 23,
    phase: 'RECOVERY',
    title: 'Growth Foundation',
    scenario: 'Survival is assured. Growth is now possible. Building the foundation for sustainable value creation.',
    stakeholderFocus: ['CEO', 'BOARD_CHAIR', 'EQUITY_HOLDER'],
    options: [
      { id: 'A', text: 'Strategic growth investment program', impact: { recoveryTrajectory: 18, marketPosition: 12, liquidityPosition: -8 }, risk: 0.35, stakeholderReactions: { CEO: 18, BOARD_CHAIR: 15, CFO: -5 } },
      { id: 'B', text: 'Organic growth focus with market share gains', impact: { marketPosition: 15, operationalCashflow: 12, recoveryTrajectory: 10 }, risk: 0.25, stakeholderReactions: { COO: 18, CEO: 15, KEY_SUPPLIER: 10 } },
      { id: 'C', text: 'Strategic M&A for capability and scale', impact: { marketPosition: 15, recoveryTrajectory: 12, debtManagement: -8 }, risk: 0.40, stakeholderReactions: { CEO: 15, LEAD_BANKER: 12, CFO: -8 } },
      { id: 'D', text: 'Innovation and R&D investment restart', impact: { recoveryTrajectory: 15, marketPosition: 10, operationalCashflow: -5 }, risk: 0.35, stakeholderReactions: { CEO: 18, COO: 12, EQUITY_HOLDER: 8 } },
      { id: 'E', text: 'Geographic or market expansion', impact: { marketPosition: 15, recoveryTrajectory: 12, riskExposure: -5 }, risk: 0.35, stakeholderReactions: { CEO: 15, BOARD_CHAIR: 12, CFO: -5 } },
      { id: 'F', text: 'Balanced growth with financial discipline', impact: { recoveryTrajectory: 12, operationalCashflow: 10, debtManagement: 8 }, risk: 0.25, stakeholderReactions: { CFO: 18, BOARD_CHAIR: 15, TREASURER: 12 } }
    ]
  },
  {
    id: 24,
    phase: 'RECOVERY',
    title: 'Financial Recovery Legacy',
    scenario: 'Final decisions to cement the recovery. Your choices will define whether this crisis becomes a transformation or just survival.',
    stakeholderFocus: ['CEO', 'BOARD_CHAIR', 'EQUITY_HOLDER'],
    options: [
      { id: 'A', text: 'Transformation story - emerged stronger', impact: { investorConfidence: 18, recoveryTrajectory: 15, marketPosition: 12 }, risk: 0.25, stakeholderReactions: { CEO: 18, MEDIA_ANALYST: 18, EQUITY_HOLDER: 15 } },
      { id: 'B', text: 'Financial resilience as competitive advantage', impact: { liquidityPosition: 15, debtManagement: 12, riskExposure: 10 }, risk: 0.25, stakeholderReactions: { CFO: 18, TREASURER: 18, SENIOR_CREDITOR: 12 } },
      { id: 'C', text: 'Stakeholder value commitment and delivery', impact: { investorConfidence: 15, creditorRelations: 12, operationalCashflow: 10 }, risk: 0.25, stakeholderReactions: { EQUITY_HOLDER: 18, SENIOR_CREDITOR: 15, EMPLOYEE_REP: 12 } },
      { id: 'D', text: 'Operational excellence as foundation', impact: { operationalCashflow: 18, marketPosition: 12, recoveryTrajectory: 10 }, risk: 0.25, stakeholderReactions: { COO: 18, CEO: 15, KEY_SUPPLIER: 12 } },
      { id: 'E', text: 'Governance and risk management excellence', impact: { riskExposure: 18, debtManagement: 12, creditorRelations: 10 }, risk: 0.20, stakeholderReactions: { BOARD_CHAIR: 18, REGULATOR: 15, LEGAL_COUNSEL: 12 } },
      { id: 'F', text: 'Balanced excellence across all dimensions', impact: { recoveryTrajectory: 12, operationalCashflow: 12, investorConfidence: 12 }, risk: 0.20, stakeholderReactions: { BOARD_CHAIR: 15, CEO: 15, CFO: 12 } }
    ]
  }
];

export const PHASE_DESCRIPTIONS = {
  CRISIS_ASSESSMENT: {
    name: 'Crisis Assessment',
    description: 'Assess the true financial position and stakeholder landscape',
    rounds: [1, 2, 3, 4, 5, 6]
  },
  STABILIZATION: {
    name: 'Stabilization',
    description: 'Preserve cash, negotiate with creditors, and stabilize operations',
    rounds: [7, 8, 9, 10, 11, 12]
  },
  RESTRUCTURING: {
    name: 'Restructuring',
    description: 'Execute debt and operational restructuring',
    rounds: [13, 14, 15, 16, 17, 18]
  },
  RECOVERY: {
    name: 'Recovery',
    description: 'Build sustainable performance and financial strength',
    rounds: [19, 20, 21, 22, 23, 24]
  }
};

export const getRoundById = (id) => ROUNDS.find(r => r.id === id);
export const getRoundsByPhase = (phase) => ROUNDS.filter(r => r.phase === phase);
export const getAllRounds = () => ROUNDS;
