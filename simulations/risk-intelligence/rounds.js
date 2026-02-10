// Risk Intelligence Simulation - Rounds & Scenarios
// 24 rounds with progressive complexity, each with 6 decision options

export const ROUNDS = [
  // PHASE 1: FOUNDATION (Rounds 1-6)
  {
    round: 1,
    phase: 'foundation',
    title: 'Risk Appetite Definition',
    scenario: {
      description: 'The board has requested a formal risk appetite statement. Current practices are informal and inconsistent across business units.',
      context: 'Recent industry incidents have heightened board awareness of risk governance gaps.',
      pressure: 'low',
      timeConstraint: 'standard',
      stakeholderFocus: ['board_chair', 'cro', 'ceo']
    },
    options: [
      { id: 'r1_o1', label: 'Adopt industry-standard framework', impact: { controlMaturity: 0.1, riskCultureScore: 0.05, riskBudget: -50000 }, risk: 'low', stakeholderReactions: { cro: 'positive', bu_head: 'neutral' } },
      { id: 'r1_o2', label: 'Develop custom framework with consultants', impact: { controlMaturity: 0.15, riskCultureScore: 0.1, riskBudget: -200000 }, risk: 'low', stakeholderReactions: { cro: 'very_positive', cfo: 'concerned' } },
      { id: 'r1_o3', label: 'Minimal compliance-focused statement', impact: { controlMaturity: 0.02, riskCultureScore: -0.05, riskBudget: -10000 }, risk: 'medium', stakeholderReactions: { regulator: 'negative', audit_chair: 'concerned' } },
      { id: 'r1_o4', label: 'Defer to next fiscal year', impact: { controlMaturity: 0, riskCultureScore: -0.1, riskBudget: 0 }, risk: 'high', stakeholderReactions: { board_chair: 'very_negative', regulator: 'negative' } },
      { id: 'r1_o5', label: 'Business unit-specific appetites only', impact: { controlMaturity: 0.05, riskCultureScore: 0, riskBudget: -30000 }, risk: 'medium', stakeholderReactions: { bu_head: 'positive', cro: 'concerned' } },
      { id: 'r1_o6', label: 'CEO-driven top-down mandate', impact: { controlMaturity: 0.08, riskCultureScore: 0.02, riskBudget: -20000 }, risk: 'low', stakeholderReactions: { ceo: 'positive', bu_head: 'negative' } }
    ]
  },

  {
    round: 2,
    phase: 'foundation',
    title: 'Risk Identification Process',
    scenario: {
      description: 'Multiple risk identification methods exist across the organization. Some units use spreadsheets, others use specialized tools, and some rely on informal processes.',
      context: 'A recent near-miss incident was not captured in any risk register until after escalation.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['vp_risk', 'internal_audit', 'bu_head']
    },
    options: [
      { id: 'r2_o1', label: 'Implement enterprise GRC platform', impact: { controlMaturity: 0.15, riskCultureScore: 0.1, riskBudget: -400000 }, risk: 'medium', stakeholderReactions: { cro: 'very_positive', cfo: 'concerned', bu_head: 'negative' } },
      { id: 'r2_o2', label: 'Standardize on spreadsheet templates', impact: { controlMaturity: 0.05, riskCultureScore: 0.02, riskBudget: -20000 }, risk: 'medium', stakeholderReactions: { cfo: 'positive', vp_risk: 'negative' } },
      { id: 'r2_o3', label: 'Mandate quarterly risk workshops', impact: { controlMaturity: 0.08, riskCultureScore: 0.15, riskBudget: -80000 }, risk: 'low', stakeholderReactions: { vp_risk: 'positive', bu_head: 'neutral' } },
      { id: 'r2_o4', label: 'Hire risk coordinators per business unit', impact: { controlMaturity: 0.1, riskCultureScore: 0.12, riskBudget: -250000 }, risk: 'low', stakeholderReactions: { bu_head: 'positive', cfo: 'concerned' } },
      { id: 'r2_o5', label: 'Outsource risk identification to consultants', impact: { controlMaturity: 0.07, riskCultureScore: -0.05, riskBudget: -150000 }, risk: 'medium', stakeholderReactions: { internal_audit: 'negative', cro: 'concerned' } },
      { id: 'r2_o6', label: 'AI-powered risk sensing pilot', impact: { controlMaturity: 0.12, riskCultureScore: 0.05, riskBudget: -300000 }, risk: 'high', stakeholderReactions: { ciso: 'concerned', cro: 'positive' } }
    ]
  },

  {
    round: 3,
    phase: 'foundation',
    title: 'Key Risk Indicators',
    scenario: {
      description: 'The organization lacks leading indicators for emerging risks. Most metrics are lagging indicators that report on past events.',
      context: 'Board members have questioned why management seems surprised by risk events that appear predictable in hindsight.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['cro', 'cfo', 'audit_chair']
    },
    options: [
      { id: 'r3_o1', label: 'Develop 50+ KRIs across all categories', impact: { controlMaturity: 0.1, riskCultureScore: 0.05, riskBudget: -100000 }, risk: 'medium', stakeholderReactions: { vp_risk: 'positive', bu_head: 'very_negative' } },
      { id: 'r3_o2', label: 'Focus on top 10 enterprise KRIs', impact: { controlMaturity: 0.08, riskCultureScore: 0.08, riskBudget: -40000 }, risk: 'low', stakeholderReactions: { cro: 'positive', board_chair: 'positive' } },
      { id: 'r3_o3', label: 'Let business units define own KRIs', impact: { controlMaturity: 0.03, riskCultureScore: 0.02, riskBudget: -20000 }, risk: 'medium', stakeholderReactions: { bu_head: 'very_positive', cro: 'negative' } },
      { id: 'r3_o4', label: 'Adopt industry benchmark KRIs', impact: { controlMaturity: 0.06, riskCultureScore: 0.04, riskBudget: -60000 }, risk: 'low', stakeholderReactions: { ext_auditor: 'positive', regulator: 'positive' } },
      { id: 'r3_o5', label: 'Real-time KRI dashboard investment', impact: { controlMaturity: 0.12, riskCultureScore: 0.1, riskBudget: -250000 }, risk: 'medium', stakeholderReactions: { ceo: 'positive', cfo: 'concerned' } },
      { id: 'r3_o6', label: 'Predictive analytics for KRI forecasting', impact: { controlMaturity: 0.15, riskCultureScore: 0.08, riskBudget: -350000 }, risk: 'high', stakeholderReactions: { cro: 'very_positive', internal_audit: 'concerned' } }
    ]
  },

  {
    round: 4,
    phase: 'foundation',
    title: 'Risk Assessment Methodology',
    scenario: {
      description: 'Risk assessments vary widely in quality and consistency. Some use 3x3 matrices, others 5x5, and qualitative descriptions differ by assessor.',
      context: 'Internal audit has flagged inconsistent risk ratings as a finding in their latest report.',
      pressure: 'medium',
      timeConstraint: 'urgent',
      stakeholderFocus: ['internal_audit', 'vp_risk', 'compliance_dir']
    },
    options: [
      { id: 'r4_o1', label: 'Mandate single 5x5 matrix enterprise-wide', impact: { controlMaturity: 0.1, riskCultureScore: 0.05, riskBudget: -30000 }, risk: 'low', stakeholderReactions: { internal_audit: 'very_positive', bu_head: 'negative' } },
      { id: 'r4_o2', label: 'Implement quantitative risk modeling', impact: { controlMaturity: 0.18, riskCultureScore: 0.08, riskBudget: -500000 }, risk: 'high', stakeholderReactions: { cfo: 'positive', vp_risk: 'concerned' } },
      { id: 'r4_o3', label: 'Training program for risk assessors', impact: { controlMaturity: 0.08, riskCultureScore: 0.12, riskBudget: -80000 }, risk: 'low', stakeholderReactions: { vp_risk: 'positive', compliance_dir: 'positive' } },
      { id: 'r4_o4', label: 'Centralize all assessments in risk team', impact: { controlMaturity: 0.12, riskCultureScore: -0.05, riskBudget: -150000 }, risk: 'medium', stakeholderReactions: { cro: 'positive', bu_head: 'very_negative' } },
      { id: 'r4_o5', label: 'Risk calibration workshops quarterly', impact: { controlMaturity: 0.07, riskCultureScore: 0.15, riskBudget: -60000 }, risk: 'low', stakeholderReactions: { vp_risk: 'very_positive', bu_head: 'neutral' } },
      { id: 'r4_o6', label: 'Hybrid approach by risk category', impact: { controlMaturity: 0.09, riskCultureScore: 0.06, riskBudget: -100000 }, risk: 'medium', stakeholderReactions: { cro: 'positive', internal_audit: 'neutral' } }
    ]
  },

  {
    round: 5,
    phase: 'foundation',
    title: 'Risk Reporting Structure',
    scenario: {
      description: 'Risk reports to the board are dense, backward-looking, and rarely drive discussion. Directors have requested more actionable reporting.',
      context: 'The audit committee chair privately expressed frustration about the quality of risk information reaching the board.',
      pressure: 'high',
      timeConstraint: 'urgent',
      stakeholderFocus: ['board_chair', 'audit_chair', 'cro']
    },
    options: [
      { id: 'r5_o1', label: 'Executive risk dashboard with drill-down', impact: { controlMaturity: 0.1, riskCultureScore: 0.1, riskBudget: -200000 }, risk: 'low', stakeholderReactions: { board_chair: 'very_positive', cro: 'positive' } },
      { id: 'r5_o2', label: 'Monthly risk committee meetings', impact: { controlMaturity: 0.08, riskCultureScore: 0.12, riskBudget: -50000 }, risk: 'low', stakeholderReactions: { ceo: 'neutral', cro: 'positive' } },
      { id: 'r5_o3', label: 'Streamlined quarterly risk report only', impact: { controlMaturity: 0.03, riskCultureScore: 0.02, riskBudget: -10000 }, risk: 'medium', stakeholderReactions: { audit_chair: 'negative', regulator: 'concerned' } },
      { id: 'r5_o4', label: 'Risk deep-dives rotating by category', impact: { controlMaturity: 0.09, riskCultureScore: 0.08, riskBudget: -40000 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', internal_audit: 'positive' } },
      { id: 'r5_o5', label: 'External risk benchmarking reports', impact: { controlMaturity: 0.06, riskCultureScore: 0.05, riskBudget: -120000 }, risk: 'low', stakeholderReactions: { investor_rep: 'positive', cfo: 'neutral' } },
      { id: 'r5_o6', label: 'Board risk education program', impact: { controlMaturity: 0.05, riskCultureScore: 0.15, riskBudget: -80000 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', audit_chair: 'very_positive' } }
    ]
  },

  {
    round: 6,
    phase: 'foundation',
    title: 'Risk Culture Assessment',
    scenario: {
      description: 'Employee surveys suggest risk is seen as a compliance burden rather than value-adding. "Risk" conversations are avoided in business discussions.',
      context: 'A recent project failure was attributed to risks that team members knew about but did not escalate.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['ceo', 'cro', 'bu_head']
    },
    options: [
      { id: 'r6_o1', label: 'Launch risk culture transformation program', impact: { controlMaturity: 0.05, riskCultureScore: 0.2, riskBudget: -300000 }, risk: 'medium', stakeholderReactions: { ceo: 'positive', bu_head: 'neutral' } },
      { id: 'r6_o2', label: 'Integrate risk into performance reviews', impact: { controlMaturity: 0.08, riskCultureScore: 0.15, riskBudget: -50000 }, risk: 'medium', stakeholderReactions: { bu_head: 'negative', cro: 'very_positive' } },
      { id: 'r6_o3', label: 'Anonymous risk reporting hotline', impact: { controlMaturity: 0.06, riskCultureScore: 0.1, riskBudget: -40000 }, risk: 'low', stakeholderReactions: { compliance_dir: 'positive', internal_audit: 'positive' } },
      { id: 'r6_o4', label: 'Risk champion network across units', impact: { controlMaturity: 0.07, riskCultureScore: 0.18, riskBudget: -100000 }, risk: 'low', stakeholderReactions: { vp_risk: 'very_positive', bu_head: 'positive' } },
      { id: 'r6_o5', label: 'CEO-led risk communication campaign', impact: { controlMaturity: 0.04, riskCultureScore: 0.12, riskBudget: -60000 }, risk: 'low', stakeholderReactions: { ceo: 'positive', board_chair: 'positive' } },
      { id: 'r6_o6', label: 'Delay until next strategic planning cycle', impact: { controlMaturity: 0, riskCultureScore: -0.05, riskBudget: 0 }, risk: 'high', stakeholderReactions: { cro: 'very_negative', audit_chair: 'negative' } }
    ]
  },

  // PHASE 2: OPERATIONALIZATION (Rounds 7-12)
  {
    round: 7,
    phase: 'operationalization',
    title: 'Emerging Risk: Supply Chain Disruption',
    scenario: {
      description: 'Intelligence reports suggest a key supplier in Southeast Asia faces potential labor unrest. The supplier provides 40% of a critical component.',
      context: 'Supply chain risks were identified as a top-5 risk in the last assessment but mitigation plans are incomplete.',
      pressure: 'high',
      timeConstraint: 'urgent',
      stakeholderFocus: ['supply_chain_vp', 'coo', 'cro']
    },
    options: [
      { id: 'r7_o1', label: 'Immediately dual-source the component', impact: { controlMaturity: 0.05, riskCultureScore: 0.08, riskBudget: -400000 }, risk: 'medium', stakeholderReactions: { supply_chain_vp: 'positive', cfo: 'concerned' } },
      { id: 'r7_o2', label: 'Increase safety stock to 90 days', impact: { controlMaturity: 0.03, riskCultureScore: 0.02, riskBudget: -600000 }, risk: 'low', stakeholderReactions: { cfo: 'negative', coo: 'positive' } },
      { id: 'r7_o3', label: 'Monitor situation and prepare contingency', impact: { controlMaturity: 0.02, riskCultureScore: 0.05, riskBudget: -30000 }, risk: 'high', stakeholderReactions: { cro: 'concerned', supply_chain_vp: 'neutral' } },
      { id: 'r7_o4', label: 'Negotiate long-term contract with guarantees', impact: { controlMaturity: 0.04, riskCultureScore: 0.03, riskBudget: -100000 }, risk: 'medium', stakeholderReactions: { supply_chain_vp: 'positive', cfo: 'positive' } },
      { id: 'r7_o5', label: 'Accelerate reshoring initiative', impact: { controlMaturity: 0.08, riskCultureScore: 0.1, riskBudget: -2000000 }, risk: 'high', stakeholderReactions: { board_chair: 'positive', cfo: 'very_negative' } },
      { id: 'r7_o6', label: 'Insurance and force majeure review', impact: { controlMaturity: 0.03, riskCultureScore: 0.02, riskBudget: -50000 }, risk: 'medium', stakeholderReactions: { cfo: 'positive', cro: 'neutral' } }
    ]
  },

  {
    round: 8,
    phase: 'operationalization',
    title: 'Cyber Threat Intelligence',
    scenario: {
      description: 'Threat intelligence indicates your industry is being targeted by a sophisticated threat actor. No breach detected yet, but reconnaissance activity observed.',
      context: 'Cyber risk budget was reduced last quarter due to cost pressures.',
      pressure: 'high',
      timeConstraint: 'urgent',
      stakeholderFocus: ['ciso', 'cro', 'cfo']
    },
    options: [
      { id: 'r8_o1', label: 'Emergency security budget increase', impact: { controlMaturity: 0.1, riskCultureScore: 0.05, riskBudget: -500000 }, risk: 'low', stakeholderReactions: { ciso: 'very_positive', cfo: 'negative' } },
      { id: 'r8_o2', label: 'Engage incident response retainer', impact: { controlMaturity: 0.08, riskCultureScore: 0.05, riskBudget: -150000 }, risk: 'low', stakeholderReactions: { ciso: 'positive', cro: 'positive' } },
      { id: 'r8_o3', label: 'Accelerate planned security upgrades', impact: { controlMaturity: 0.12, riskCultureScore: 0.08, riskBudget: -800000 }, risk: 'medium', stakeholderReactions: { ciso: 'very_positive', cfo: 'very_negative' } },
      { id: 'r8_o4', label: 'Enhanced monitoring only', impact: { controlMaturity: 0.04, riskCultureScore: 0.02, riskBudget: -50000 }, risk: 'high', stakeholderReactions: { ciso: 'concerned', cro: 'negative' } },
      { id: 'r8_o5', label: 'Industry threat sharing consortium', impact: { controlMaturity: 0.06, riskCultureScore: 0.1, riskBudget: -80000 }, risk: 'low', stakeholderReactions: { ciso: 'positive', board_chair: 'positive' } },
      { id: 'r8_o6', label: 'Board-level cyber briefing and decision', impact: { controlMaturity: 0.05, riskCultureScore: 0.12, riskBudget: -20000 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', audit_chair: 'positive' } }
    ]
  },

  {
    round: 9,
    phase: 'operationalization',
    title: 'Regulatory Examination',
    scenario: {
      description: 'The regulator has announced a comprehensive examination starting next month. Scope includes risk governance, controls, and compliance program effectiveness.',
      context: 'Last examination had three findings requiring management attention. One remains partially open.',
      pressure: 'very_high',
      timeConstraint: 'urgent',
      stakeholderFocus: ['regulator', 'compliance_dir', 'cro']
    },
    options: [
      { id: 'r9_o1', label: 'Full preparation war room', impact: { controlMaturity: 0.05, riskCultureScore: 0.02, riskBudget: -200000 }, risk: 'low', stakeholderReactions: { compliance_dir: 'positive', regulator: 'neutral' } },
      { id: 'r9_o2', label: 'Close open finding before exam', impact: { controlMaturity: 0.08, riskCultureScore: 0.05, riskBudget: -150000 }, risk: 'medium', stakeholderReactions: { regulator: 'positive', internal_audit: 'positive' } },
      { id: 'r9_o3', label: 'Proactive disclosure of known issues', impact: { controlMaturity: 0.06, riskCultureScore: 0.15, riskBudget: -50000 }, risk: 'medium', stakeholderReactions: { regulator: 'positive', ceo: 'concerned' } },
      { id: 'r9_o4', label: 'Business-as-usual approach', impact: { controlMaturity: 0, riskCultureScore: -0.05, riskBudget: 0 }, risk: 'very_high', stakeholderReactions: { regulator: 'very_negative', compliance_dir: 'very_negative' } },
      { id: 'r9_o5', label: 'Engage regulatory counsel', impact: { controlMaturity: 0.03, riskCultureScore: 0.02, riskBudget: -100000 }, risk: 'low', stakeholderReactions: { compliance_dir: 'positive', cfo: 'neutral' } },
      { id: 'r9_o6', label: 'CEO meeting with regulator leadership', impact: { controlMaturity: 0.02, riskCultureScore: 0.08, riskBudget: -10000 }, risk: 'medium', stakeholderReactions: { ceo: 'neutral', regulator: 'positive' } }
    ]
  },

  {
    round: 10,
    phase: 'operationalization',
    title: 'Third-Party Risk Event',
    scenario: {
      description: 'A major vendor has disclosed a data breach that may have exposed your customer data. The vendor manages your customer service platform.',
      context: 'Third-party risk assessments were last updated 18 months ago. This vendor was rated "medium" risk.',
      pressure: 'critical',
      timeConstraint: 'immediate',
      stakeholderFocus: ['ciso', 'compliance_dir', 'ceo']
    },
    options: [
      { id: 'r10_o1', label: 'Immediate vendor access suspension', impact: { controlMaturity: 0.05, riskCultureScore: 0.05, riskBudget: -100000 }, risk: 'medium', stakeholderReactions: { ciso: 'positive', bu_head: 'very_negative' } },
      { id: 'r10_o2', label: 'Launch internal investigation', impact: { controlMaturity: 0.08, riskCultureScore: 0.08, riskBudget: -200000 }, risk: 'low', stakeholderReactions: { cro: 'positive', compliance_dir: 'positive' } },
      { id: 'r10_o3', label: 'Proactive customer notification', impact: { controlMaturity: 0.03, riskCultureScore: 0.12, riskBudget: -500000 }, risk: 'medium', stakeholderReactions: { compliance_dir: 'positive', ceo: 'concerned' } },
      { id: 'r10_o4', label: 'Wait for vendor forensic report', impact: { controlMaturity: 0, riskCultureScore: -0.1, riskBudget: 0 }, risk: 'very_high', stakeholderReactions: { regulator: 'very_negative', ciso: 'negative' } },
      { id: 'r10_o5', label: 'Activate incident response plan', impact: { controlMaturity: 0.1, riskCultureScore: 0.1, riskBudget: -300000 }, risk: 'low', stakeholderReactions: { cro: 'very_positive', board_chair: 'positive' } },
      { id: 'r10_o6', label: 'Engage external breach counsel', impact: { controlMaturity: 0.05, riskCultureScore: 0.05, riskBudget: -250000 }, risk: 'low', stakeholderReactions: { compliance_dir: 'positive', cfo: 'neutral' } }
    ]
  },

  {
    round: 11,
    phase: 'operationalization',
    title: 'Risk Appetite Breach',
    scenario: {
      description: 'Quarterly risk reporting shows operational risk exposure has exceeded the stated appetite by 15%. The breach is driven by rapid business growth.',
      context: 'The business unit responsible has exceeded revenue targets by 25% this quarter.',
      pressure: 'high',
      timeConstraint: 'standard',
      stakeholderFocus: ['cro', 'bu_head', 'ceo']
    },
    options: [
      { id: 'r11_o1', label: 'Enforce immediate risk reduction', impact: { controlMaturity: 0.1, riskCultureScore: 0.1, riskBudget: -100000 }, risk: 'medium', stakeholderReactions: { cro: 'very_positive', bu_head: 'very_negative' } },
      { id: 'r11_o2', label: 'Revise risk appetite upward', impact: { controlMaturity: -0.05, riskCultureScore: -0.1, riskBudget: 0 }, risk: 'high', stakeholderReactions: { bu_head: 'very_positive', regulator: 'negative' } },
      { id: 'r11_o3', label: 'Temporary exception with remediation plan', impact: { controlMaturity: 0.03, riskCultureScore: 0.02, riskBudget: -50000 }, risk: 'medium', stakeholderReactions: { ceo: 'positive', cro: 'neutral' } },
      { id: 'r11_o4', label: 'Enhanced monitoring and controls', impact: { controlMaturity: 0.08, riskCultureScore: 0.05, riskBudget: -150000 }, risk: 'low', stakeholderReactions: { cro: 'positive', bu_head: 'neutral' } },
      { id: 'r11_o5', label: 'Board escalation for decision', impact: { controlMaturity: 0.05, riskCultureScore: 0.12, riskBudget: -20000 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', ceo: 'concerned' } },
      { id: 'r11_o6', label: 'Defer to annual risk review', impact: { controlMaturity: 0, riskCultureScore: -0.08, riskBudget: 0 }, risk: 'high', stakeholderReactions: { audit_chair: 'very_negative', cro: 'negative' } }
    ]
  },

  {
    round: 12,
    phase: 'operationalization',
    title: 'Competitive Intelligence Risk',
    scenario: {
      description: 'HR has flagged that a competitor is aggressively recruiting your product development team. Three key engineers have already resigned.',
      context: 'These engineers have knowledge of unreleased product features and strategic roadmaps.',
      pressure: 'high',
      timeConstraint: 'urgent',
      stakeholderFocus: ['ceo', 'cro', 'compliance_dir']
    },
    options: [
      { id: 'r12_o1', label: 'Retention bonuses for key personnel', impact: { controlMaturity: 0.02, riskCultureScore: 0.05, riskBudget: -500000 }, risk: 'low', stakeholderReactions: { ceo: 'positive', cfo: 'concerned' } },
      { id: 'r12_o2', label: 'Enforce non-compete agreements', impact: { controlMaturity: 0.05, riskCultureScore: -0.05, riskBudget: -100000 }, risk: 'medium', stakeholderReactions: { compliance_dir: 'positive', bu_head: 'neutral' } },
      { id: 'r12_o3', label: 'Accelerate product launch timeline', impact: { controlMaturity: -0.03, riskCultureScore: 0.02, riskBudget: -300000 }, risk: 'high', stakeholderReactions: { bu_head: 'positive', cro: 'concerned' } },
      { id: 'r12_o4', label: 'Information security review and access changes', impact: { controlMaturity: 0.08, riskCultureScore: 0.05, riskBudget: -80000 }, risk: 'low', stakeholderReactions: { ciso: 'positive', cro: 'positive' } },
      { id: 'r12_o5', label: 'Counter-intelligence monitoring', impact: { controlMaturity: 0.06, riskCultureScore: 0, riskBudget: -150000 }, risk: 'medium', stakeholderReactions: { ciso: 'positive', compliance_dir: 'concerned' } },
      { id: 'r12_o6', label: 'Accept attrition as market reality', impact: { controlMaturity: 0, riskCultureScore: -0.05, riskBudget: 0 }, risk: 'high', stakeholderReactions: { ceo: 'negative', board_chair: 'concerned' } }
    ]
  },

  // PHASE 3: CRISIS MANAGEMENT (Rounds 13-18)
  {
    round: 13,
    phase: 'crisis',
    title: 'Reputational Crisis',
    scenario: {
      description: 'A viral social media post alleges your product caused harm to a customer. The claim is unverified but gaining traction with 50K+ shares.',
      context: 'Your social media response team is understaffed and crisis communications plan was last tested two years ago.',
      pressure: 'critical',
      timeConstraint: 'immediate',
      stakeholderFocus: ['ceo', 'cro', 'bu_head']
    },
    options: [
      { id: 'r13_o1', label: 'Immediate public statement', impact: { controlMaturity: 0.02, riskCultureScore: 0.08, riskBudget: -50000 }, risk: 'medium', stakeholderReactions: { ceo: 'positive', compliance_dir: 'concerned' } },
      { id: 'r13_o2', label: 'Silent investigation first', impact: { controlMaturity: 0.05, riskCultureScore: 0, riskBudget: -100000 }, risk: 'high', stakeholderReactions: { cro: 'positive', investor_rep: 'concerned' } },
      { id: 'r13_o3', label: 'Engage crisis PR firm', impact: { controlMaturity: 0.03, riskCultureScore: 0.1, riskBudget: -300000 }, risk: 'low', stakeholderReactions: { ceo: 'positive', cfo: 'neutral' } },
      { id: 'r13_o4', label: 'CEO personal video response', impact: { controlMaturity: 0.02, riskCultureScore: 0.15, riskBudget: -20000 }, risk: 'high', stakeholderReactions: { board_chair: 'concerned', ceo: 'positive' } },
      { id: 'r13_o5', label: 'Legal cease and desist', impact: { controlMaturity: 0.01, riskCultureScore: -0.15, riskBudget: -80000 }, risk: 'very_high', stakeholderReactions: { compliance_dir: 'neutral', investor_rep: 'very_negative' } },
      { id: 'r13_o6', label: 'Proactive product safety review', impact: { controlMaturity: 0.1, riskCultureScore: 0.12, riskBudget: -200000 }, risk: 'low', stakeholderReactions: { regulator: 'positive', cro: 'very_positive' } }
    ]
  },

  {
    round: 14,
    phase: 'crisis',
    title: 'Financial Risk Crystallization',
    scenario: {
      description: 'A major customer representing 15% of revenue has filed for bankruptcy. Receivables exposure is $12M with uncertain recovery.',
      context: 'Credit risk monitoring flagged deteriorating payment patterns 6 months ago, but no action was taken.',
      pressure: 'critical',
      timeConstraint: 'urgent',
      stakeholderFocus: ['cfo', 'cro', 'bu_head']
    },
    options: [
      { id: 'r14_o1', label: 'Immediate bad debt provision', impact: { controlMaturity: 0.05, riskCultureScore: 0.05, riskBudget: -12000000 }, risk: 'low', stakeholderReactions: { cfo: 'positive', investor_rep: 'negative' } },
      { id: 'r14_o2', label: 'Negotiate restructured payment terms', impact: { controlMaturity: 0.02, riskCultureScore: 0.02, riskBudget: -500000 }, risk: 'medium', stakeholderReactions: { cfo: 'neutral', bu_head: 'positive' } },
      { id: 'r14_o3', label: 'Pursue legal recovery aggressively', impact: { controlMaturity: 0.01, riskCultureScore: 0, riskBudget: -300000 }, risk: 'medium', stakeholderReactions: { cfo: 'neutral', compliance_dir: 'positive' } },
      { id: 'r14_o4', label: 'Overhaul credit risk process', impact: { controlMaturity: 0.15, riskCultureScore: 0.1, riskBudget: -400000 }, risk: 'low', stakeholderReactions: { cro: 'very_positive', internal_audit: 'positive' } },
      { id: 'r14_o5', label: 'Diversification of customer base initiative', impact: { controlMaturity: 0.08, riskCultureScore: 0.08, riskBudget: -800000 }, risk: 'medium', stakeholderReactions: { bu_head: 'positive', ceo: 'positive' } },
      { id: 'r14_o6', label: 'Credit insurance for major accounts', impact: { controlMaturity: 0.1, riskCultureScore: 0.05, riskBudget: -600000 }, risk: 'low', stakeholderReactions: { cfo: 'positive', cro: 'positive' } }
    ]
  },

  {
    round: 15,
    phase: 'crisis',
    title: 'Operational Failure',
    scenario: {
      description: 'A critical production system has failed, halting manufacturing. Root cause appears to be a maintenance decision made to reduce costs.',
      context: 'The maintenance deferral was approved by operations leadership over risk team objections.',
      pressure: 'critical',
      timeConstraint: 'immediate',
      stakeholderFocus: ['coo', 'cro', 'ceo']
    },
    options: [
      { id: 'r15_o1', label: 'Emergency equipment replacement', impact: { controlMaturity: 0.05, riskCultureScore: 0.05, riskBudget: -2000000 }, risk: 'low', stakeholderReactions: { coo: 'positive', cfo: 'very_negative' } },
      { id: 'r15_o2', label: 'Activate business continuity plan', impact: { controlMaturity: 0.1, riskCultureScore: 0.12, riskBudget: -500000 }, risk: 'medium', stakeholderReactions: { cro: 'very_positive', coo: 'positive' } },
      { id: 'r15_o3', label: 'Outsource production temporarily', impact: { controlMaturity: 0.02, riskCultureScore: 0.02, riskBudget: -1500000 }, risk: 'high', stakeholderReactions: { bu_head: 'positive', ciso: 'concerned' } },
      { id: 'r15_o4', label: 'Root cause analysis before repair', impact: { controlMaturity: 0.12, riskCultureScore: 0.08, riskBudget: -300000 }, risk: 'medium', stakeholderReactions: { internal_audit: 'positive', bu_head: 'negative' } },
      { id: 'r15_o5', label: 'Management accountability review', impact: { controlMaturity: 0.08, riskCultureScore: 0.15, riskBudget: -100000 }, risk: 'medium', stakeholderReactions: { board_chair: 'positive', coo: 'very_negative' } },
      { id: 'r15_o6', label: 'Insurance claim and minimal repair', impact: { controlMaturity: 0, riskCultureScore: -0.05, riskBudget: -200000 }, risk: 'high', stakeholderReactions: { cfo: 'positive', cro: 'negative' } }
    ]
  },

  {
    round: 16,
    phase: 'crisis',
    title: 'Regulatory Enforcement',
    scenario: {
      description: 'The regulator has issued a formal enforcement action citing inadequate risk controls. A consent order with significant remediation requirements is proposed.',
      context: 'The action stems from findings in the examination three months ago that management disputed.',
      pressure: 'critical',
      timeConstraint: 'urgent',
      stakeholderFocus: ['regulator', 'ceo', 'board_chair']
    },
    options: [
      { id: 'r16_o1', label: 'Accept consent order and remediate', impact: { controlMaturity: 0.15, riskCultureScore: 0.05, riskBudget: -3000000 }, risk: 'low', stakeholderReactions: { regulator: 'positive', board_chair: 'neutral' } },
      { id: 'r16_o2', label: 'Negotiate reduced terms', impact: { controlMaturity: 0.08, riskCultureScore: 0.02, riskBudget: -500000 }, risk: 'medium', stakeholderReactions: { regulator: 'neutral', compliance_dir: 'positive' } },
      { id: 'r16_o3', label: 'Contest findings formally', impact: { controlMaturity: 0, riskCultureScore: -0.1, riskBudget: -1000000 }, risk: 'very_high', stakeholderReactions: { regulator: 'very_negative', investor_rep: 'negative' } },
      { id: 'r16_o4', label: 'Board-led governance overhaul', impact: { controlMaturity: 0.2, riskCultureScore: 0.15, riskBudget: -2000000 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', regulator: 'very_positive' } },
      { id: 'r16_o5', label: 'Engage specialized regulatory counsel', impact: { controlMaturity: 0.05, riskCultureScore: 0.02, riskBudget: -800000 }, risk: 'low', stakeholderReactions: { compliance_dir: 'positive', cfo: 'neutral' } },
      { id: 'r16_o6', label: 'Public commitment to transformation', impact: { controlMaturity: 0.1, riskCultureScore: 0.12, riskBudget: -200000 }, risk: 'medium', stakeholderReactions: { ceo: 'positive', investor_rep: 'positive' } }
    ]
  },

  {
    round: 17,
    phase: 'crisis',
    title: 'Emerging Technology Risk',
    scenario: {
      description: 'Your AI-powered product has made a decision that resulted in customer harm. The algorithm behavior was unexpected and not covered by testing.',
      context: 'AI risk governance was flagged as a gap in the last risk assessment but deprioritized for other initiatives.',
      pressure: 'critical',
      timeConstraint: 'immediate',
      stakeholderFocus: ['ceo', 'cro', 'regulator']
    },
    options: [
      { id: 'r17_o1', label: 'Immediate product suspension', impact: { controlMaturity: 0.1, riskCultureScore: 0.1, riskBudget: -5000000 }, risk: 'medium', stakeholderReactions: { regulator: 'positive', bu_head: 'very_negative' } },
      { id: 'r17_o2', label: 'Algorithm audit and fix', impact: { controlMaturity: 0.12, riskCultureScore: 0.08, riskBudget: -800000 }, risk: 'medium', stakeholderReactions: { cro: 'positive', regulator: 'neutral' } },
      { id: 'r17_o3', label: 'Human oversight layer implementation', impact: { controlMaturity: 0.15, riskCultureScore: 0.12, riskBudget: -1200000 }, risk: 'low', stakeholderReactions: { cro: 'very_positive', regulator: 'positive' } },
      { id: 'r17_o4', label: 'Customer compensation program', impact: { controlMaturity: 0.02, riskCultureScore: 0.08, riskBudget: -2000000 }, risk: 'low', stakeholderReactions: { compliance_dir: 'positive', cfo: 'negative' } },
      { id: 'r17_o5', label: 'AI ethics board establishment', impact: { controlMaturity: 0.1, riskCultureScore: 0.2, riskBudget: -500000 }, risk: 'low', stakeholderReactions: { board_chair: 'very_positive', investor_rep: 'positive' } },
      { id: 'r17_o6', label: 'Blame vendor and terminate contract', impact: { controlMaturity: -0.05, riskCultureScore: -0.15, riskBudget: -300000 }, risk: 'very_high', stakeholderReactions: { regulator: 'very_negative', internal_audit: 'very_negative' } }
    ]
  },

  {
    round: 18,
    phase: 'crisis',
    title: 'Geopolitical Risk Impact',
    scenario: {
      description: 'Escalating geopolitical tensions have resulted in sanctions affecting a market representing 8% of revenue. Operations must cease within 30 days.',
      context: 'Geopolitical risk was rated "low probability" in strategic risk assessment despite intelligence indicators.',
      pressure: 'critical',
      timeConstraint: 'urgent',
      stakeholderFocus: ['ceo', 'cfo', 'compliance_dir']
    },
    options: [
      { id: 'r18_o1', label: 'Orderly wind-down with compliance focus', impact: { controlMaturity: 0.1, riskCultureScore: 0.1, riskBudget: -3000000 }, risk: 'low', stakeholderReactions: { compliance_dir: 'very_positive', regulator: 'positive' } },
      { id: 'r18_o2', label: 'Seek sanctions license exception', impact: { controlMaturity: 0.02, riskCultureScore: 0, riskBudget: -500000 }, risk: 'high', stakeholderReactions: { compliance_dir: 'concerned', regulator: 'negative' } },
      { id: 'r18_o3', label: 'Accelerate market diversification', impact: { controlMaturity: 0.08, riskCultureScore: 0.1, riskBudget: -2000000 }, risk: 'medium', stakeholderReactions: { ceo: 'positive', bu_head: 'positive' } },
      { id: 'r18_o4', label: 'Political risk insurance claim', impact: { controlMaturity: 0.03, riskCultureScore: 0.02, riskBudget: -100000 }, risk: 'low', stakeholderReactions: { cfo: 'positive', cro: 'positive' } },
      { id: 'r18_o5', label: 'Geopolitical risk function establishment', impact: { controlMaturity: 0.12, riskCultureScore: 0.15, riskBudget: -600000 }, risk: 'low', stakeholderReactions: { cro: 'very_positive', board_chair: 'positive' } },
      { id: 'r18_o6', label: 'Continue operations through intermediaries', impact: { controlMaturity: -0.1, riskCultureScore: -0.2, riskBudget: -200000 }, risk: 'very_high', stakeholderReactions: { compliance_dir: 'very_negative', regulator: 'very_negative' } }
    ]
  },

  // PHASE 4: STRATEGIC EVOLUTION (Rounds 19-24)
  {
    round: 19,
    phase: 'evolution',
    title: 'Risk Function Transformation',
    scenario: {
      description: 'Following recent events, the board has mandated a comprehensive review of the risk function. External consultants recommend significant changes.',
      context: 'The CRO has announced retirement, creating an opportunity for transformation.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['board_chair', 'ceo', 'audit_chair']
    },
    options: [
      { id: 'r19_o1', label: 'Hire transformational CRO externally', impact: { controlMaturity: 0.15, riskCultureScore: 0.15, riskBudget: -400000 }, risk: 'medium', stakeholderReactions: { board_chair: 'positive', vp_risk: 'concerned' } },
      { id: 'r19_o2', label: 'Promote internal candidate for continuity', impact: { controlMaturity: 0.05, riskCultureScore: 0.08, riskBudget: -100000 }, risk: 'low', stakeholderReactions: { vp_risk: 'very_positive', audit_chair: 'neutral' } },
      { id: 'r19_o3', label: 'Merge risk into finance function', impact: { controlMaturity: -0.05, riskCultureScore: -0.1, riskBudget: 200000 }, risk: 'high', stakeholderReactions: { cfo: 'positive', audit_chair: 'very_negative' } },
      { id: 'r19_o4', label: 'Decentralize risk to business units', impact: { controlMaturity: 0, riskCultureScore: 0.05, riskBudget: 100000 }, risk: 'high', stakeholderReactions: { bu_head: 'very_positive', regulator: 'negative' } },
      { id: 'r19_o5', label: 'Three lines model enhancement', impact: { controlMaturity: 0.12, riskCultureScore: 0.1, riskBudget: -300000 }, risk: 'low', stakeholderReactions: { internal_audit: 'very_positive', compliance_dir: 'positive' } },
      { id: 'r19_o6', label: 'Technology-led risk transformation', impact: { controlMaturity: 0.18, riskCultureScore: 0.08, riskBudget: -1500000 }, risk: 'medium', stakeholderReactions: { ceo: 'positive', cfo: 'concerned' } }
    ]
  },

  {
    round: 20,
    phase: 'evolution',
    title: 'Enterprise Resilience Strategy',
    scenario: {
      description: 'Multiple recent events have highlighted organizational fragility. The board wants a comprehensive resilience strategy beyond traditional risk management.',
      context: 'Competitors have publicized their resilience investments, creating stakeholder expectations.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['ceo', 'board_chair', 'cro']
    },
    options: [
      { id: 'r20_o1', label: 'Enterprise resilience program', impact: { controlMaturity: 0.15, riskCultureScore: 0.15, riskBudget: -2000000 }, risk: 'low', stakeholderReactions: { board_chair: 'very_positive', cro: 'very_positive' } },
      { id: 'r20_o2', label: 'Focus on operational resilience only', impact: { controlMaturity: 0.08, riskCultureScore: 0.05, riskBudget: -800000 }, risk: 'medium', stakeholderReactions: { coo: 'positive', regulator: 'neutral' } },
      { id: 'r20_o3', label: 'Scenario planning capability', impact: { controlMaturity: 0.1, riskCultureScore: 0.12, riskBudget: -400000 }, risk: 'low', stakeholderReactions: { cro: 'positive', ceo: 'positive' } },
      { id: 'r20_o4', label: 'Crisis simulation exercises', impact: { controlMaturity: 0.08, riskCultureScore: 0.18, riskBudget: -300000 }, risk: 'low', stakeholderReactions: { ceo: 'positive', bu_head: 'neutral' } },
      { id: 'r20_o5', label: 'Resilience metrics in executive comp', impact: { controlMaturity: 0.1, riskCultureScore: 0.2, riskBudget: -100000 }, risk: 'medium', stakeholderReactions: { board_chair: 'positive', bu_head: 'negative' } },
      { id: 'r20_o6', label: 'Maintain current approach', impact: { controlMaturity: 0, riskCultureScore: -0.05, riskBudget: 0 }, risk: 'high', stakeholderReactions: { investor_rep: 'negative', audit_chair: 'negative' } }
    ]
  },

  {
    round: 21,
    phase: 'evolution',
    title: 'Integrated Risk and Strategy',
    scenario: {
      description: 'Strategic planning and risk management operate in silos. Strategy sets direction, then risk reacts. The CEO wants integration.',
      context: 'A strategic initiative failed last year due to risks identified too late in the process.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['ceo', 'cro', 'bu_head']
    },
    options: [
      { id: 'r21_o1', label: 'CRO joins executive strategy committee', impact: { controlMaturity: 0.1, riskCultureScore: 0.15, riskBudget: -50000 }, risk: 'low', stakeholderReactions: { cro: 'very_positive', ceo: 'positive' } },
      { id: 'r21_o2', label: 'Risk-adjusted strategy framework', impact: { controlMaturity: 0.12, riskCultureScore: 0.1, riskBudget: -200000 }, risk: 'low', stakeholderReactions: { cro: 'positive', bu_head: 'neutral' } },
      { id: 'r21_o3', label: 'Strategic risk officer role creation', impact: { controlMaturity: 0.08, riskCultureScore: 0.08, riskBudget: -300000 }, risk: 'medium', stakeholderReactions: { ceo: 'positive', vp_risk: 'concerned' } },
      { id: 'r21_o4', label: 'Business unit risk integration', impact: { controlMaturity: 0.1, riskCultureScore: 0.12, riskBudget: -400000 }, risk: 'medium', stakeholderReactions: { bu_head: 'positive', cro: 'positive' } },
      { id: 'r21_o5', label: 'Strategy risk workshops', impact: { controlMaturity: 0.06, riskCultureScore: 0.15, riskBudget: -150000 }, risk: 'low', stakeholderReactions: { ceo: 'positive', vp_risk: 'positive' } },
      { id: 'r21_o6', label: 'Keep functions separate but coordinated', impact: { controlMaturity: 0.02, riskCultureScore: 0.02, riskBudget: -30000 }, risk: 'medium', stakeholderReactions: { bu_head: 'positive', audit_chair: 'neutral' } }
    ]
  },

  {
    round: 22,
    phase: 'evolution',
    title: 'Risk Technology Investment',
    scenario: {
      description: 'Current risk technology is fragmented and aging. A comprehensive modernization would require significant investment but enable advanced capabilities.',
      context: 'Regulators are increasingly expecting technology-enabled risk management and real-time monitoring.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['cro', 'cfo', 'ciso']
    },
    options: [
      { id: 'r22_o1', label: 'Full GRC platform implementation', impact: { controlMaturity: 0.2, riskCultureScore: 0.1, riskBudget: -3000000 }, risk: 'medium', stakeholderReactions: { cro: 'very_positive', cfo: 'negative' } },
      { id: 'r22_o2', label: 'Best-of-breed point solutions', impact: { controlMaturity: 0.12, riskCultureScore: 0.05, riskBudget: -1500000 }, risk: 'medium', stakeholderReactions: { ciso: 'positive', vp_risk: 'positive' } },
      { id: 'r22_o3', label: 'Cloud-native risk platform', impact: { controlMaturity: 0.15, riskCultureScore: 0.08, riskBudget: -2000000 }, risk: 'medium', stakeholderReactions: { ciso: 'concerned', cro: 'positive' } },
      { id: 'r22_o4', label: 'AI/ML risk analytics investment', impact: { controlMaturity: 0.18, riskCultureScore: 0.1, riskBudget: -2500000 }, risk: 'high', stakeholderReactions: { ceo: 'positive', internal_audit: 'concerned' } },
      { id: 'r22_o5', label: 'Incremental upgrade path', impact: { controlMaturity: 0.08, riskCultureScore: 0.03, riskBudget: -500000 }, risk: 'low', stakeholderReactions: { cfo: 'positive', regulator: 'neutral' } },
      { id: 'r22_o6', label: 'Defer pending strategic clarity', impact: { controlMaturity: 0, riskCultureScore: -0.05, riskBudget: 0 }, risk: 'high', stakeholderReactions: { regulator: 'negative', audit_chair: 'negative' } }
    ]
  },

  {
    round: 23,
    phase: 'evolution',
    title: 'Risk Talent Strategy',
    scenario: {
      description: 'Risk talent is aging and traditional skills may not match future needs. Data science, technology, and business acumen are increasingly required.',
      context: 'Two senior risk managers have announced retirement, and recruiting experienced replacements is challenging.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['cro', 'ceo', 'vp_risk']
    },
    options: [
      { id: 'r23_o1', label: 'Risk academy and development program', impact: { controlMaturity: 0.1, riskCultureScore: 0.2, riskBudget: -600000 }, risk: 'low', stakeholderReactions: { vp_risk: 'very_positive', ceo: 'positive' } },
      { id: 'r23_o2', label: 'Hire data scientists into risk', impact: { controlMaturity: 0.12, riskCultureScore: 0.05, riskBudget: -800000 }, risk: 'medium', stakeholderReactions: { cro: 'positive', vp_risk: 'neutral' } },
      { id: 'r23_o3', label: 'Risk rotation program with business', impact: { controlMaturity: 0.08, riskCultureScore: 0.18, riskBudget: -200000 }, risk: 'low', stakeholderReactions: { bu_head: 'positive', vp_risk: 'positive' } },
      { id: 'r23_o4', label: 'Outsource specialized risk functions', impact: { controlMaturity: 0.05, riskCultureScore: -0.05, riskBudget: -400000 }, risk: 'medium', stakeholderReactions: { cfo: 'positive', internal_audit: 'concerned' } },
      { id: 'r23_o5', label: 'Competitive compensation overhaul', impact: { controlMaturity: 0.08, riskCultureScore: 0.1, riskBudget: -1000000 }, risk: 'low', stakeholderReactions: { vp_risk: 'very_positive', cfo: 'negative' } },
      { id: 'r23_o6', label: 'Maintain current staffing model', impact: { controlMaturity: -0.05, riskCultureScore: -0.08, riskBudget: 0 }, risk: 'high', stakeholderReactions: { audit_chair: 'negative', regulator: 'concerned' } }
    ]
  },

  {
    round: 24,
    phase: 'evolution',
    title: 'Future of Risk Intelligence',
    scenario: {
      description: 'As the simulation concludes, you must define the long-term vision for risk intelligence in the organization. Your decisions will shape the next decade.',
      context: 'The organization has weathered significant challenges and the board wants a forward-looking risk strategy.',
      pressure: 'low',
      timeConstraint: 'standard',
      stakeholderFocus: ['board_chair', 'ceo', 'cro']
    },
    options: [
      { id: 'r24_o1', label: 'Risk as competitive advantage strategy', impact: { controlMaturity: 0.15, riskCultureScore: 0.2, riskBudget: -1000000 }, risk: 'medium', stakeholderReactions: { ceo: 'very_positive', board_chair: 'positive' } },
      { id: 'r24_o2', label: 'Regulatory excellence focus', impact: { controlMaturity: 0.2, riskCultureScore: 0.1, riskBudget: -800000 }, risk: 'low', stakeholderReactions: { regulator: 'very_positive', compliance_dir: 'positive' } },
      { id: 'r24_o3', label: 'Innovation-enabling risk framework', impact: { controlMaturity: 0.1, riskCultureScore: 0.15, riskBudget: -600000 }, risk: 'medium', stakeholderReactions: { bu_head: 'very_positive', cro: 'positive' } },
      { id: 'r24_o4', label: 'Stakeholder-centric risk model', impact: { controlMaturity: 0.12, riskCultureScore: 0.18, riskBudget: -500000 }, risk: 'low', stakeholderReactions: { investor_rep: 'very_positive', board_chair: 'positive' } },
      { id: 'r24_o5', label: 'Predictive and preventive risk intelligence', impact: { controlMaturity: 0.18, riskCultureScore: 0.15, riskBudget: -2000000 }, risk: 'medium', stakeholderReactions: { cro: 'very_positive', ceo: 'positive' } },
      { id: 'r24_o6', label: 'Maintain proven practices', impact: { controlMaturity: 0.05, riskCultureScore: 0.05, riskBudget: -200000 }, risk: 'low', stakeholderReactions: { cfo: 'positive', audit_chair: 'neutral' } }
    ]
  }
];

export const PHASE_DESCRIPTIONS = {
  foundation: {
    name: 'Foundation',
    description: 'Establishing core risk governance, frameworks, and culture',
    rounds: [1, 6],
    objectives: ['Define risk appetite', 'Build risk identification capability', 'Establish reporting']
  },
  operationalization: {
    name: 'Operationalization',
    description: 'Applying risk intelligence to real-world challenges and emerging threats',
    rounds: [7, 12],
    objectives: ['Respond to emerging risks', 'Test frameworks under pressure', 'Build organizational learning']
  },
  crisis: {
    name: 'Crisis Management',
    description: 'Managing major risk events and their consequences',
    rounds: [13, 18],
    objectives: ['Navigate crisis situations', 'Protect stakeholder value', 'Learn from failures']
  },
  evolution: {
    name: 'Strategic Evolution',
    description: 'Transforming risk capability for long-term success',
    rounds: [19, 24],
    objectives: ['Transform risk function', 'Integrate with strategy', 'Build future capability']
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
