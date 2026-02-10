// Talent & Culture Simulation - Rounds & Scenarios
// 24 rounds with progressive talent and culture challenges, each with 6 decision options

export const ROUNDS = [
  // PHASE 1: ASSESSMENT & STRATEGY (Rounds 1-6)
  {
    round: 1,
    phase: 'assessment',
    title: 'Talent Strategy Development',
    scenario: {
      description: 'As the new CHRO, you must develop a talent strategy aligned with business objectives. The CEO expects a comprehensive plan within 90 days.',
      context: 'Previous HR leadership was tactical. The business is growing but talent capabilities lag behind needs.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['ceo', 'cfo', 'bu_head']
    },
    options: [
      { id: 'r1_o1', label: 'Comprehensive multi-year talent strategy', impact: { talentPipeline: 0.08, culturalAlignment: 0.1, leadershipBench: 0.05 }, risk: 'low', stakeholderReactions: { ceo: 'very_positive', cfo: 'concerned', bu_head: 'neutral' } },
      { id: 'r1_o2', label: 'Quick wins with strategic foundation', impact: { talentPipeline: 0.1, employeeEngagement: 0.05, employerBrand: 0.05 }, risk: 'low', stakeholderReactions: { ceo: 'positive', bu_head: 'positive', cfo: 'positive' } },
      { id: 'r1_o3', label: 'Business-unit specific talent plans', impact: { talentPipeline: 0.08, culturalAlignment: 0.02, leadershipBench: 0.05 }, risk: 'medium', stakeholderReactions: { bu_head: 'very_positive', coo: 'positive', chro: 'neutral' } },
      { id: 'r1_o4', label: 'External benchmarking first', impact: { talentPipeline: 0.05, employerBrand: 0.08, learningCapability: 0.05 }, risk: 'low', stakeholderReactions: { cfo: 'positive', comp_chair: 'positive', ceo: 'neutral' } },
      { id: 'r1_o5', label: 'Employee listening and co-creation', impact: { employeeEngagement: 0.12, culturalAlignment: 0.08, talentPipeline: 0.02 }, risk: 'medium', stakeholderReactions: { high_potential: 'very_positive', union_rep: 'positive', bu_head: 'concerned' } },
      { id: 'r1_o6', label: 'Focus on immediate hiring needs only', impact: { talentPipeline: 0.05, employeeEngagement: -0.05, leadershipBench: -0.02 }, risk: 'high', stakeholderReactions: { bu_head: 'positive', ceo: 'negative', comp_chair: 'negative' } }
    ]
  },

  {
    round: 2,
    phase: 'assessment',
    title: 'Culture Assessment',
    scenario: {
      description: 'Employee engagement scores have declined for three consecutive years. You need to diagnose the root causes and propose solutions.',
      context: 'Exit interviews cite culture and management as top reasons for leaving. The business dismisses it as generational differences.',
      pressure: 'high',
      timeConstraint: 'standard',
      stakeholderFocus: ['ceo', 'high_potential', 'frontline_mgr']
    },
    options: [
      { id: 'r2_o1', label: 'Comprehensive culture diagnostic', impact: { culturalAlignment: 0.1, employeeEngagement: 0.08, learningCapability: 0.02 }, risk: 'low', stakeholderReactions: { ceo: 'positive', high_potential: 'positive', bu_head: 'neutral' } },
      { id: 'r2_o2', label: 'Focus groups and listening sessions', impact: { employeeEngagement: 0.1, culturalAlignment: 0.08, employerBrand: 0.02 }, risk: 'low', stakeholderReactions: { high_potential: 'very_positive', union_rep: 'positive', frontline_mgr: 'positive' } },
      { id: 'r2_o3', label: 'Manager effectiveness initiative', impact: { employeeEngagement: 0.08, leadershipBench: 0.1, learningCapability: 0.05 }, risk: 'medium', stakeholderReactions: { frontline_mgr: 'concerned', vp_learning: 'positive', coo: 'positive' } },
      { id: 'r2_o4', label: 'Quick pulse surveys and action', impact: { employeeEngagement: 0.05, culturalAlignment: 0.05, talentPipeline: 0.02 }, risk: 'low', stakeholderReactions: { bu_head: 'positive', cfo: 'positive', high_potential: 'neutral' } },
      { id: 'r2_o5', label: 'External culture consultant', impact: { culturalAlignment: 0.1, learningCapability: 0.05, employeeEngagement: 0.05 }, risk: 'low', stakeholderReactions: { ceo: 'positive', cfo: 'concerned', frontline_mgr: 'neutral' } },
      { id: 'r2_o6', label: 'Dismiss as survey fatigue', impact: { employeeEngagement: -0.1, culturalAlignment: -0.05, employerBrand: -0.08 }, risk: 'very_high', stakeholderReactions: { high_potential: 'very_negative', brand_analyst: 'negative', ceo: 'concerned' } }
    ]
  },

  {
    round: 3,
    phase: 'assessment',
    title: 'Talent Pipeline Review',
    scenario: {
      description: 'Critical roles have significant vacancy rates and time-to-fill is increasing. The talent pipeline needs strengthening.',
      context: 'Competitors are aggressively recruiting your talent. Internal mobility is limited.',
      pressure: 'high',
      timeConstraint: 'urgent',
      stakeholderFocus: ['vp_ta', 'cto', 'bu_head']
    },
    options: [
      { id: 'r3_o1', label: 'Employer brand investment campaign', impact: { employerBrand: 0.15, talentPipeline: 0.1, culturalAlignment: 0.02 }, risk: 'medium', stakeholderReactions: { vp_ta: 'very_positive', cfo: 'concerned', brand_analyst: 'positive' } },
      { id: 'r3_o2', label: 'Employee referral program enhancement', impact: { talentPipeline: 0.12, employeeEngagement: 0.05, culturalAlignment: 0.05 }, risk: 'low', stakeholderReactions: { vp_ta: 'positive', high_potential: 'positive', cfo: 'positive' } },
      { id: 'r3_o3', label: 'University and early career pipeline', impact: { talentPipeline: 0.1, learningCapability: 0.08, leadershipBench: 0.05 }, risk: 'medium', stakeholderReactions: { vp_learning: 'positive', cto: 'positive', bu_head: 'neutral' } },
      { id: 'r3_o4', label: 'Contingent workforce strategy', impact: { talentPipeline: 0.08, learningCapability: -0.02, culturalAlignment: -0.05 }, risk: 'medium', stakeholderReactions: { cfo: 'positive', bu_head: 'positive', union_rep: 'negative' } },
      { id: 'r3_o5', label: 'Internal mobility marketplace', impact: { talentPipeline: 0.08, employeeEngagement: 0.1, leadershipBench: 0.08 }, risk: 'low', stakeholderReactions: { high_potential: 'very_positive', vp_learning: 'positive', bu_head: 'concerned' } },
      { id: 'r3_o6', label: 'Recruiter headcount increase only', impact: { talentPipeline: 0.05, employerBrand: 0, culturalAlignment: 0 }, risk: 'medium', stakeholderReactions: { vp_ta: 'positive', cfo: 'negative', ceo: 'neutral' } }
    ]
  },

  {
    round: 4,
    phase: 'assessment',
    title: 'Leadership Pipeline',
    scenario: {
      description: 'Succession planning reveals dangerous gaps in leadership bench strength. Several key roles have no ready successors.',
      context: 'The CEO is concerned about leadership continuity. High-potential talent is leaving for competitor opportunities.',
      pressure: 'high',
      timeConstraint: 'standard',
      stakeholderFocus: ['ceo', 'comp_chair', 'vp_learning']
    },
    options: [
      { id: 'r4_o1', label: 'Executive development academy', impact: { leadershipBench: 0.15, learningCapability: 0.1, talentPipeline: 0.05 }, risk: 'medium', stakeholderReactions: { comp_chair: 'very_positive', vp_learning: 'very_positive', cfo: 'concerned' } },
      { id: 'r4_o2', label: 'High-potential acceleration program', impact: { leadershipBench: 0.12, employeeEngagement: 0.08, talentPipeline: 0.05 }, risk: 'low', stakeholderReactions: { high_potential: 'very_positive', ceo: 'positive', bu_head: 'positive' } },
      { id: 'r4_o3', label: 'Executive coaching investment', impact: { leadershipBench: 0.1, learningCapability: 0.05, culturalAlignment: 0.05 }, risk: 'low', stakeholderReactions: { ceo: 'positive', comp_chair: 'positive', cfo: 'neutral' } },
      { id: 'r4_o4', label: 'External leadership hiring', impact: { leadershipBench: 0.08, culturalAlignment: -0.05, employeeEngagement: -0.05 }, risk: 'medium', stakeholderReactions: { cfo: 'positive', high_potential: 'negative', ceo: 'neutral' } },
      { id: 'r4_o5', label: 'Mentorship and sponsorship program', impact: { leadershipBench: 0.1, culturalAlignment: 0.08, employeeEngagement: 0.08 }, risk: 'low', stakeholderReactions: { high_potential: 'positive', frontline_mgr: 'positive', ceo: 'positive' } },
      { id: 'r4_o6', label: 'Delay succession planning', impact: { leadershipBench: -0.05, talentPipeline: -0.03, employeeEngagement: -0.05 }, risk: 'high', stakeholderReactions: { comp_chair: 'very_negative', ceo: 'negative', high_potential: 'negative' } }
    ]
  },

  {
    round: 5,
    phase: 'assessment',
    title: 'Compensation Competitiveness',
    scenario: {
      description: 'Market data shows compensation has fallen behind competitors. Employees are receiving significantly higher external offers.',
      context: 'Budget constraints are real but attrition costs are mounting. Pay equity concerns are also emerging.',
      pressure: 'high',
      timeConstraint: 'urgent',
      stakeholderFocus: ['vp_rewards', 'cfo', 'high_potential']
    },
    options: [
      { id: 'r5_o1', label: 'Comprehensive market adjustment', impact: { talentPipeline: 0.1, employeeEngagement: 0.12, employerBrand: 0.08 }, risk: 'medium', stakeholderReactions: { high_potential: 'very_positive', vp_rewards: 'positive', cfo: 'very_negative' } },
      { id: 'r5_o2', label: 'Targeted critical role adjustments', impact: { talentPipeline: 0.08, employeeEngagement: 0.05, leadershipBench: 0.05 }, risk: 'low', stakeholderReactions: { cfo: 'positive', vp_rewards: 'positive', union_rep: 'concerned' } },
      { id: 'r5_o3', label: 'Enhanced variable pay programs', impact: { employeeEngagement: 0.05, talentPipeline: 0.05, culturalAlignment: 0.02 }, risk: 'medium', stakeholderReactions: { cfo: 'positive', high_potential: 'neutral', union_rep: 'negative' } },
      { id: 'r5_o4', label: 'Total rewards optimization', impact: { employerBrand: 0.08, employeeEngagement: 0.08, culturalAlignment: 0.05 }, risk: 'low', stakeholderReactions: { vp_rewards: 'positive', high_potential: 'neutral', cfo: 'positive' } },
      { id: 'r5_o5', label: 'Pay equity audit and remediation', impact: { culturalAlignment: 0.1, employerBrand: 0.08, employeeEngagement: 0.08 }, risk: 'medium', stakeholderReactions: { union_rep: 'very_positive', brand_analyst: 'positive', cfo: 'concerned' } },
      { id: 'r5_o6', label: 'Maintain current compensation', impact: { talentPipeline: -0.1, employeeEngagement: -0.08, employerBrand: -0.1 }, risk: 'very_high', stakeholderReactions: { high_potential: 'very_negative', vp_ta: 'negative', brand_analyst: 'negative' } }
    ]
  },

  {
    round: 6,
    phase: 'assessment',
    title: 'HR Operating Model',
    scenario: {
      description: 'The HR function is seen as administrative and reactive. Business leaders want strategic partnership; employees want better service.',
      context: 'HR technology is outdated. HRBPs are stretched thin. Shared services are inefficient.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['ceo', 'hrbp_lead', 'frontline_mgr']
    },
    options: [
      { id: 'r6_o1', label: 'Full HR transformation program', impact: { learningCapability: 0.1, culturalAlignment: 0.08, talentPipeline: 0.05 }, risk: 'high', stakeholderReactions: { ceo: 'positive', cfo: 'concerned', hrbp_lead: 'concerned' } },
      { id: 'r6_o2', label: 'HR technology modernization', impact: { learningCapability: 0.12, talentPipeline: 0.08, employeeEngagement: 0.05 }, risk: 'medium', stakeholderReactions: { frontline_mgr: 'positive', cfo: 'neutral', hrbp_lead: 'positive' } },
      { id: 'r6_o3', label: 'HRBP capability building', impact: { leadershipBench: 0.08, culturalAlignment: 0.08, learningCapability: 0.08 }, risk: 'low', stakeholderReactions: { hrbp_lead: 'very_positive', bu_head: 'positive', ceo: 'positive' } },
      { id: 'r6_o4', label: 'Manager self-service expansion', impact: { learningCapability: 0.08, employeeEngagement: 0.02, culturalAlignment: 0.02 }, risk: 'medium', stakeholderReactions: { cfo: 'positive', frontline_mgr: 'concerned', hrbp_lead: 'positive' } },
      { id: 'r6_o5', label: 'Employee experience platform', impact: { employeeEngagement: 0.1, employerBrand: 0.08, learningCapability: 0.05 }, risk: 'medium', stakeholderReactions: { high_potential: 'positive', brand_analyst: 'positive', cfo: 'concerned' } },
      { id: 'r6_o6', label: 'Incremental improvements only', impact: { learningCapability: 0.02, culturalAlignment: 0, employeeEngagement: 0 }, risk: 'medium', stakeholderReactions: { ceo: 'negative', frontline_mgr: 'negative', hrbp_lead: 'neutral' } }
    ]
  },

  // PHASE 2: BUILDING CAPABILITY (Rounds 7-12)
  {
    round: 7,
    phase: 'capability',
    title: 'Critical Talent Retention',
    scenario: {
      description: 'Your top technical architect has received an offer from a competitor for 40% more compensation. Others may follow.',
      context: 'This individual is critical to a major project. Losing them would significantly impact delivery and morale.',
      pressure: 'critical',
      timeConstraint: 'immediate',
      stakeholderFocus: ['cto', 'vp_rewards', 'high_potential']
    },
    options: [
      { id: 'r7_o1', label: 'Match the competing offer', impact: { talentPipeline: 0.05, employeeEngagement: 0.02, culturalAlignment: -0.05 }, risk: 'medium', stakeholderReactions: { cto: 'positive', cfo: 'negative', union_rep: 'negative' } },
      { id: 'r7_o2', label: 'Counter with expanded role and equity', impact: { talentPipeline: 0.08, leadershipBench: 0.05, employeeEngagement: 0.05 }, risk: 'low', stakeholderReactions: { cto: 'positive', high_potential: 'positive', cfo: 'neutral' } },
      { id: 'r7_o3', label: 'Accept departure and develop successor', impact: { leadershipBench: 0.08, learningCapability: 0.05, talentPipeline: -0.05 }, risk: 'high', stakeholderReactions: { cfo: 'positive', cto: 'negative', vp_learning: 'positive' } },
      { id: 'r7_o4', label: 'CEO personal retention conversation', impact: { employeeEngagement: 0.1, culturalAlignment: 0.08, talentPipeline: 0.05 }, risk: 'low', stakeholderReactions: { ceo: 'positive', high_potential: 'very_positive', cto: 'positive' } },
      { id: 'r7_o5', label: 'Retention program for all critical talent', impact: { talentPipeline: 0.1, employeeEngagement: 0.08, culturalAlignment: 0.02 }, risk: 'medium', stakeholderReactions: { vp_rewards: 'positive', cfo: 'concerned', comp_chair: 'positive' } },
      { id: 'r7_o6', label: 'Do nothing - no one is irreplaceable', impact: { talentPipeline: -0.1, employeeEngagement: -0.08, employerBrand: -0.1 }, risk: 'very_high', stakeholderReactions: { cto: 'very_negative', high_potential: 'very_negative', brand_analyst: 'negative' } }
    ]
  },

  {
    round: 8,
    phase: 'capability',
    title: 'Learning & Development Investment',
    scenario: {
      description: 'Skills gaps are widening as technology evolves. The L&D budget is being questioned while capability needs increase.',
      context: 'Employees cite lack of development as a top engagement driver. Competitors are investing heavily in learning.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['vp_learning', 'cfo', 'cto']
    },
    options: [
      { id: 'r8_o1', label: 'Enterprise learning platform investment', impact: { learningCapability: 0.15, employeeEngagement: 0.08, leadershipBench: 0.05 }, risk: 'medium', stakeholderReactions: { vp_learning: 'very_positive', cfo: 'negative', cto: 'positive' } },
      { id: 'r8_o2', label: 'Skills-based learning architecture', impact: { learningCapability: 0.12, talentPipeline: 0.08, leadershipBench: 0.05 }, risk: 'medium', stakeholderReactions: { cto: 'positive', vp_learning: 'positive', bu_head: 'neutral' } },
      { id: 'r8_o3', label: 'Manager as coach program', impact: { leadershipBench: 0.12, learningCapability: 0.08, culturalAlignment: 0.08 }, risk: 'low', stakeholderReactions: { frontline_mgr: 'positive', vp_learning: 'positive', ceo: 'positive' } },
      { id: 'r8_o4', label: 'Tuition reimbursement expansion', impact: { employeeEngagement: 0.08, learningCapability: 0.05, employerBrand: 0.08 }, risk: 'low', stakeholderReactions: { high_potential: 'positive', cfo: 'neutral', brand_analyst: 'positive' } },
      { id: 'r8_o5', label: 'Learning time policy (10% time)', impact: { learningCapability: 0.1, employeeEngagement: 0.1, culturalAlignment: 0.08 }, risk: 'medium', stakeholderReactions: { high_potential: 'very_positive', bu_head: 'concerned', cto: 'positive' } },
      { id: 'r8_o6', label: 'Cut L&D budget to essentials', impact: { learningCapability: -0.1, employeeEngagement: -0.08, leadershipBench: -0.05 }, risk: 'high', stakeholderReactions: { cfo: 'positive', vp_learning: 'very_negative', high_potential: 'negative' } }
    ]
  },

  {
    round: 9,
    phase: 'capability',
    title: 'Performance Management Redesign',
    scenario: {
      description: 'Annual performance reviews are seen as bureaucratic and demotivating. Ratings create conflict and don\'t improve performance.',
      context: 'Industry is moving toward continuous feedback. Managers spend excessive time on paperwork rather than coaching.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['frontline_mgr', 'high_potential', 'coo']
    },
    options: [
      { id: 'r9_o1', label: 'Eliminate ratings, continuous feedback', impact: { employeeEngagement: 0.12, culturalAlignment: 0.1, leadershipBench: 0.02 }, risk: 'high', stakeholderReactions: { high_potential: 'very_positive', frontline_mgr: 'concerned', cfo: 'concerned' } },
      { id: 'r9_o2', label: 'Simplified quarterly check-ins', impact: { employeeEngagement: 0.08, leadershipBench: 0.08, learningCapability: 0.05 }, risk: 'low', stakeholderReactions: { frontline_mgr: 'positive', high_potential: 'positive', coo: 'positive' } },
      { id: 'r9_o3', label: 'Technology-enabled real-time feedback', impact: { employeeEngagement: 0.1, learningCapability: 0.08, culturalAlignment: 0.05 }, risk: 'medium', stakeholderReactions: { cto: 'positive', high_potential: 'positive', frontline_mgr: 'neutral' } },
      { id: 'r9_o4', label: 'Manager effectiveness training', impact: { leadershipBench: 0.12, employeeEngagement: 0.08, culturalAlignment: 0.05 }, risk: 'low', stakeholderReactions: { vp_learning: 'positive', frontline_mgr: 'positive', ceo: 'positive' } },
      { id: 'r9_o5', label: 'Calibration and fairness focus', impact: { culturalAlignment: 0.1, employeeEngagement: 0.05, leadershipBench: 0.05 }, risk: 'low', stakeholderReactions: { union_rep: 'positive', high_potential: 'positive', coo: 'positive' } },
      { id: 'r9_o6', label: 'Maintain current system', impact: { employeeEngagement: -0.05, culturalAlignment: -0.02, leadershipBench: 0 }, risk: 'medium', stakeholderReactions: { frontline_mgr: 'neutral', high_potential: 'negative', ceo: 'neutral' } }
    ]
  },

  {
    round: 10,
    phase: 'capability',
    title: 'Diversity & Inclusion Initiative',
    scenario: {
      description: 'Diversity metrics show underrepresentation at senior levels. Employee resource groups are demanding action.',
      context: 'Competitors are publicizing D&I commitments. Regulatory and stakeholder pressure is increasing.',
      pressure: 'high',
      timeConstraint: 'standard',
      stakeholderFocus: ['ceo', 'comp_chair', 'brand_analyst']
    },
    options: [
      { id: 'r10_o1', label: 'Comprehensive D&I strategy with goals', impact: { culturalAlignment: 0.12, employerBrand: 0.1, talentPipeline: 0.08 }, risk: 'medium', stakeholderReactions: { ceo: 'positive', brand_analyst: 'very_positive', bu_head: 'concerned' } },
      { id: 'r10_o2', label: 'Inclusive leadership development', impact: { leadershipBench: 0.1, culturalAlignment: 0.1, learningCapability: 0.05 }, risk: 'low', stakeholderReactions: { vp_learning: 'positive', comp_chair: 'positive', frontline_mgr: 'positive' } },
      { id: 'r10_o3', label: 'Diverse hiring pipeline investment', impact: { talentPipeline: 0.12, employerBrand: 0.08, culturalAlignment: 0.05 }, risk: 'medium', stakeholderReactions: { vp_ta: 'positive', brand_analyst: 'positive', bu_head: 'neutral' } },
      { id: 'r10_o4', label: 'ERG empowerment and executive sponsors', impact: { employeeEngagement: 0.1, culturalAlignment: 0.1, leadershipBench: 0.05 }, risk: 'low', stakeholderReactions: { high_potential: 'very_positive', ceo: 'positive', bu_head: 'neutral' } },
      { id: 'r10_o5', label: 'Pay equity and promotion analysis', impact: { culturalAlignment: 0.1, employerBrand: 0.08, employeeEngagement: 0.08 }, risk: 'medium', stakeholderReactions: { union_rep: 'positive', brand_analyst: 'positive', cfo: 'concerned' } },
      { id: 'r10_o6', label: 'Minimal compliance approach', impact: { culturalAlignment: -0.05, employerBrand: -0.1, employeeEngagement: -0.05 }, risk: 'high', stakeholderReactions: { brand_analyst: 'very_negative', high_potential: 'negative', ceo: 'concerned' } }
    ]
  },

  {
    round: 11,
    phase: 'capability',
    title: 'Remote Work Policy',
    scenario: {
      description: 'Post-pandemic, employees expect flexibility but leadership wants more office presence. Policies vary by business unit.',
      context: 'Top talent has options and values flexibility. Collaboration and culture concerns are real.',
      pressure: 'high',
      timeConstraint: 'urgent',
      stakeholderFocus: ['ceo', 'high_potential', 'bu_head']
    },
    options: [
      { id: 'r11_o1', label: 'Fully flexible work policy', impact: { employeeEngagement: 0.12, employerBrand: 0.12, culturalAlignment: -0.05 }, risk: 'medium', stakeholderReactions: { high_potential: 'very_positive', brand_analyst: 'positive', bu_head: 'negative' } },
      { id: 'r11_o2', label: 'Hybrid model with anchor days', impact: { employeeEngagement: 0.08, culturalAlignment: 0.05, employerBrand: 0.05 }, risk: 'low', stakeholderReactions: { ceo: 'positive', high_potential: 'positive', bu_head: 'neutral' } },
      { id: 'r11_o3', label: 'Role-based flexibility framework', impact: { employeeEngagement: 0.05, culturalAlignment: 0.08, talentPipeline: 0.05 }, risk: 'low', stakeholderReactions: { coo: 'positive', bu_head: 'positive', high_potential: 'neutral' } },
      { id: 'r11_o4', label: 'Manager discretion model', impact: { leadershipBench: 0.05, culturalAlignment: 0.02, employeeEngagement: -0.02 }, risk: 'medium', stakeholderReactions: { frontline_mgr: 'positive', high_potential: 'concerned', union_rep: 'concerned' } },
      { id: 'r11_o5', label: 'Full return to office mandate', impact: { culturalAlignment: 0.05, employeeEngagement: -0.15, talentPipeline: -0.1 }, risk: 'very_high', stakeholderReactions: { bu_head: 'positive', high_potential: 'very_negative', brand_analyst: 'negative' } },
      { id: 'r11_o6', label: 'Delay decision pending more data', impact: { employeeEngagement: -0.05, culturalAlignment: -0.05, employerBrand: -0.05 }, risk: 'high', stakeholderReactions: { high_potential: 'negative', ceo: 'negative', frontline_mgr: 'negative' } }
    ]
  },

  {
    round: 12,
    phase: 'capability',
    title: 'Workforce Planning',
    scenario: {
      description: 'Automation and AI will significantly impact workforce needs. Some roles will be eliminated while new skills are required.',
      context: 'Unions are concerned about job security. Upskilling at scale is challenging.',
      pressure: 'high',
      timeConstraint: 'standard',
      stakeholderFocus: ['coo', 'union_rep', 'vp_learning']
    },
    options: [
      { id: 'r12_o1', label: 'Proactive reskilling program', impact: { learningCapability: 0.15, employeeEngagement: 0.1, culturalAlignment: 0.08 }, risk: 'medium', stakeholderReactions: { union_rep: 'positive', vp_learning: 'very_positive', cfo: 'concerned' } },
      { id: 'r12_o2', label: 'Managed workforce transition', impact: { talentPipeline: 0.08, learningCapability: 0.08, culturalAlignment: 0.05 }, risk: 'medium', stakeholderReactions: { coo: 'positive', union_rep: 'neutral', cfo: 'positive' } },
      { id: 'r12_o3', label: 'Internal talent marketplace', impact: { talentPipeline: 0.1, employeeEngagement: 0.1, leadershipBench: 0.05 }, risk: 'low', stakeholderReactions: { high_potential: 'very_positive', vp_learning: 'positive', bu_head: 'neutral' } },
      { id: 'r12_o4', label: 'Voluntary separation packages', impact: { talentPipeline: 0.02, culturalAlignment: -0.08, employeeEngagement: -0.1 }, risk: 'high', stakeholderReactions: { cfo: 'positive', union_rep: 'negative', high_potential: 'concerned' } },
      { id: 'r12_o5', label: 'Partnership with unions on transition', impact: { culturalAlignment: 0.1, employeeEngagement: 0.08, learningCapability: 0.05 }, risk: 'low', stakeholderReactions: { union_rep: 'very_positive', ceo: 'positive', coo: 'positive' } },
      { id: 'r12_o6', label: 'Reactive approach as needs emerge', impact: { learningCapability: -0.05, culturalAlignment: -0.05, employeeEngagement: -0.08 }, risk: 'high', stakeholderReactions: { union_rep: 'negative', vp_learning: 'negative', ceo: 'concerned' } }
    ]
  },

  // PHASE 3: CULTURE CHALLENGES (Rounds 13-18)
  {
    round: 13,
    phase: 'culture',
    title: 'Toxic Leadership Discovery',
    scenario: {
      description: 'Multiple complaints have been filed against a high-performing senior leader for bullying and creating a hostile environment.',
      context: 'The leader delivers exceptional results. Their departure would hurt short-term performance.',
      pressure: 'critical',
      timeConstraint: 'urgent',
      stakeholderFocus: ['ceo', 'hrbp_lead', 'comp_chair']
    },
    options: [
      { id: 'r13_o1', label: 'Immediate termination', impact: { culturalAlignment: 0.15, employeeEngagement: 0.12, talentPipeline: -0.05 }, risk: 'medium', stakeholderReactions: { high_potential: 'very_positive', ceo: 'concerned', comp_chair: 'positive' } },
      { id: 'r13_o2', label: 'Final warning with coaching', impact: { culturalAlignment: 0.02, employeeEngagement: -0.05, leadershipBench: 0.02 }, risk: 'high', stakeholderReactions: { high_potential: 'negative', hrbp_lead: 'concerned', ceo: 'neutral' } },
      { id: 'r13_o3', label: 'Independent investigation', impact: { culturalAlignment: 0.08, employeeEngagement: 0.05, leadershipBench: 0.02 }, risk: 'low', stakeholderReactions: { comp_chair: 'positive', hrbp_lead: 'positive', ceo: 'positive' } },
      { id: 'r13_o4', label: 'Role change and demotion', impact: { culturalAlignment: 0.05, leadershipBench: -0.02, employeeEngagement: 0.02 }, risk: 'medium', stakeholderReactions: { ceo: 'neutral', bu_head: 'concerned', high_potential: 'neutral' } },
      { id: 'r13_o5', label: 'Team restructuring and support', impact: { culturalAlignment: 0.08, employeeEngagement: 0.08, learningCapability: 0.02 }, risk: 'medium', stakeholderReactions: { hrbp_lead: 'positive', high_potential: 'neutral', frontline_mgr: 'positive' } },
      { id: 'r13_o6', label: 'Protect high performer', impact: { culturalAlignment: -0.2, employeeEngagement: -0.15, employerBrand: -0.15 }, risk: 'very_high', stakeholderReactions: { high_potential: 'very_negative', brand_analyst: 'very_negative', comp_chair: 'very_negative' } }
    ]
  },

  {
    round: 14,
    phase: 'culture',
    title: 'Union Organizing Campaign',
    scenario: {
      description: 'Union organizing activity has been detected in previously non-union facilities. Employees cite workplace concerns.',
      context: 'Employee relations have been neglected. Working conditions and management practices are being questioned.',
      pressure: 'high',
      timeConstraint: 'urgent',
      stakeholderFocus: ['union_rep', 'frontline_mgr', 'coo']
    },
    options: [
      { id: 'r14_o1', label: 'Address underlying concerns proactively', impact: { employeeEngagement: 0.12, culturalAlignment: 0.1, leadershipBench: 0.05 }, risk: 'medium', stakeholderReactions: { union_rep: 'neutral', frontline_mgr: 'positive', ceo: 'positive' } },
      { id: 'r14_o2', label: 'Manager communication training', impact: { leadershipBench: 0.1, employeeEngagement: 0.08, culturalAlignment: 0.05 }, risk: 'low', stakeholderReactions: { frontline_mgr: 'positive', vp_learning: 'positive', coo: 'positive' } },
      { id: 'r14_o3', label: 'Employee voice mechanisms', impact: { employeeEngagement: 0.1, culturalAlignment: 0.1, employerBrand: 0.05 }, risk: 'low', stakeholderReactions: { high_potential: 'positive', union_rep: 'positive', ceo: 'positive' } },
      { id: 'r14_o4', label: 'Compensation and benefits review', impact: { employeeEngagement: 0.08, talentPipeline: 0.05, culturalAlignment: 0.02 }, risk: 'medium', stakeholderReactions: { cfo: 'concerned', vp_rewards: 'positive', union_rep: 'positive' } },
      { id: 'r14_o5', label: 'Legal anti-union campaign', impact: { culturalAlignment: -0.15, employeeEngagement: -0.1, employerBrand: -0.15 }, risk: 'very_high', stakeholderReactions: { union_rep: 'very_negative', brand_analyst: 'very_negative', high_potential: 'negative' } },
      { id: 'r14_o6', label: 'Ignore and monitor', impact: { culturalAlignment: -0.08, employeeEngagement: -0.1, leadershipBench: -0.02 }, risk: 'high', stakeholderReactions: { union_rep: 'negative', frontline_mgr: 'negative', ceo: 'concerned' } }
    ]
  },

  {
    round: 15,
    phase: 'culture',
    title: 'Layoff Decision',
    scenario: {
      description: 'Economic conditions require cost reduction. A significant reduction in force is being considered.',
      context: 'This would be the first major layoff in company history. Culture has emphasized job security.',
      pressure: 'critical',
      timeConstraint: 'urgent',
      stakeholderFocus: ['ceo', 'cfo', 'union_rep']
    },
    options: [
      { id: 'r15_o1', label: 'Transparent, respectful reduction', impact: { talentPipeline: -0.05, culturalAlignment: 0.05, employeeEngagement: -0.1 }, risk: 'medium', stakeholderReactions: { cfo: 'positive', union_rep: 'neutral', high_potential: 'concerned' } },
      { id: 'r15_o2', label: 'Voluntary separation program first', impact: { culturalAlignment: 0.05, employeeEngagement: -0.05, talentPipeline: -0.08 }, risk: 'medium', stakeholderReactions: { union_rep: 'positive', cfo: 'neutral', ceo: 'positive' } },
      { id: 'r15_o3', label: 'Alternative cost reduction strategies', impact: { employeeEngagement: 0.05, culturalAlignment: 0.08, talentPipeline: 0.02 }, risk: 'medium', stakeholderReactions: { union_rep: 'positive', ceo: 'neutral', cfo: 'concerned' } },
      { id: 'r15_o4', label: 'Performance-based selection only', impact: { culturalAlignment: 0.02, leadershipBench: 0.05, employeeEngagement: -0.08 }, risk: 'medium', stakeholderReactions: { coo: 'positive', high_potential: 'neutral', union_rep: 'concerned' } },
      { id: 'r15_o5', label: 'Comprehensive transition support', impact: { employerBrand: 0.05, culturalAlignment: 0.08, employeeEngagement: -0.05 }, risk: 'low', stakeholderReactions: { brand_analyst: 'positive', union_rep: 'positive', cfo: 'concerned' } },
      { id: 'r15_o6', label: 'Quick, silent execution', impact: { culturalAlignment: -0.2, employeeEngagement: -0.2, employerBrand: -0.15 }, risk: 'very_high', stakeholderReactions: { union_rep: 'very_negative', brand_analyst: 'very_negative', high_potential: 'very_negative' } }
    ]
  },

  {
    round: 16,
    phase: 'culture',
    title: 'Merger Culture Integration',
    scenario: {
      description: 'The acquired company has a fundamentally different culture. Integration is stalling and talent is leaving.',
      context: 'Key acquisition talent was promised preservation of their culture. Reality is forcing difficult choices.',
      pressure: 'high',
      timeConstraint: 'urgent',
      stakeholderFocus: ['ceo', 'hrbp_lead', 'high_potential']
    },
    options: [
      { id: 'r16_o1', label: 'Best of both cultures approach', impact: { culturalAlignment: 0.1, employeeEngagement: 0.1, talentPipeline: 0.05 }, risk: 'medium', stakeholderReactions: { ceo: 'positive', high_potential: 'positive', bu_head: 'neutral' } },
      { id: 'r16_o2', label: 'Dominant culture assimilation', impact: { culturalAlignment: 0.05, employeeEngagement: -0.1, talentPipeline: -0.1 }, risk: 'high', stakeholderReactions: { bu_head: 'positive', high_potential: 'negative', hrbp_lead: 'concerned' } },
      { id: 'r16_o3', label: 'Culture working groups and co-creation', impact: { culturalAlignment: 0.12, employeeEngagement: 0.1, leadershipBench: 0.05 }, risk: 'low', stakeholderReactions: { high_potential: 'very_positive', hrbp_lead: 'positive', ceo: 'positive' } },
      { id: 'r16_o4', label: 'Separate brand preservation', impact: { talentPipeline: 0.05, employeeEngagement: 0.02, culturalAlignment: -0.05 }, risk: 'high', stakeholderReactions: { cfo: 'negative', coo: 'concerned', ceo: 'concerned' } },
      { id: 'r16_o5', label: 'Integration acceleration with retention', impact: { talentPipeline: 0.08, culturalAlignment: 0.05, employeeEngagement: 0.02 }, risk: 'medium', stakeholderReactions: { cfo: 'positive', hrbp_lead: 'positive', high_potential: 'neutral' } },
      { id: 'r16_o6', label: 'Let natural attrition resolve', impact: { culturalAlignment: -0.1, talentPipeline: -0.15, employeeEngagement: -0.1 }, risk: 'very_high', stakeholderReactions: { high_potential: 'very_negative', ceo: 'negative', comp_chair: 'negative' } }
    ]
  },

  {
    round: 17,
    phase: 'culture',
    title: 'Employee Activism',
    scenario: {
      description: 'Employees are publicly advocating on social and political issues, requesting company positions and action.',
      context: 'Social media amplifies employee voices. Silence is criticized; engagement risks alienating stakeholders.',
      pressure: 'high',
      timeConstraint: 'urgent',
      stakeholderFocus: ['ceo', 'high_potential', 'brand_analyst']
    },
    options: [
      { id: 'r17_o1', label: 'Authentic values-based response', impact: { culturalAlignment: 0.1, employeeEngagement: 0.1, employerBrand: 0.08 }, risk: 'medium', stakeholderReactions: { high_potential: 'positive', brand_analyst: 'positive', bu_head: 'concerned' } },
      { id: 'r17_o2', label: 'Internal dialogue forums', impact: { employeeEngagement: 0.1, culturalAlignment: 0.1, learningCapability: 0.02 }, risk: 'low', stakeholderReactions: { high_potential: 'very_positive', hrbp_lead: 'positive', ceo: 'positive' } },
      { id: 'r17_o3', label: 'Focus on shared mission and values', impact: { culturalAlignment: 0.08, employeeEngagement: 0.05, employerBrand: 0.05 }, risk: 'low', stakeholderReactions: { ceo: 'positive', high_potential: 'neutral', brand_analyst: 'neutral' } },
      { id: 'r17_o4', label: 'Social media policy enforcement', impact: { culturalAlignment: -0.1, employeeEngagement: -0.1, employerBrand: -0.1 }, risk: 'high', stakeholderReactions: { high_potential: 'very_negative', brand_analyst: 'negative', union_rep: 'negative' } },
      { id: 'r17_o5', label: 'Employee volunteering expansion', impact: { employeeEngagement: 0.08, culturalAlignment: 0.05, employerBrand: 0.08 }, risk: 'low', stakeholderReactions: { high_potential: 'positive', brand_analyst: 'positive', cfo: 'neutral' } },
      { id: 'r17_o6', label: 'Strict neutrality policy', impact: { culturalAlignment: -0.05, employeeEngagement: -0.08, employerBrand: -0.05 }, risk: 'medium', stakeholderReactions: { high_potential: 'negative', brand_analyst: 'concerned', ceo: 'neutral' } }
    ]
  },

  {
    round: 18,
    phase: 'culture',
    title: 'HR Credibility Crisis',
    scenario: {
      description: 'A mishandled situation has damaged HR\'s credibility. Business leaders are questioning HR partnership value.',
      context: 'A discrimination complaint was poorly handled. The employee went public, and media covered the story.',
      pressure: 'critical',
      timeConstraint: 'urgent',
      stakeholderFocus: ['ceo', 'bu_head', 'brand_analyst']
    },
    options: [
      { id: 'r18_o1', label: 'Public acknowledgment and remediation', impact: { culturalAlignment: 0.1, employerBrand: 0.08, employeeEngagement: 0.08 }, risk: 'medium', stakeholderReactions: { brand_analyst: 'positive', ceo: 'positive', high_potential: 'positive' } },
      { id: 'r18_o2', label: 'HR process and capability review', impact: { learningCapability: 0.1, culturalAlignment: 0.08, leadershipBench: 0.05 }, risk: 'low', stakeholderReactions: { hrbp_lead: 'positive', ceo: 'positive', comp_chair: 'positive' } },
      { id: 'r18_o3', label: 'External investigation and report', impact: { culturalAlignment: 0.12, employerBrand: 0.1, employeeEngagement: 0.05 }, risk: 'low', stakeholderReactions: { brand_analyst: 'positive', comp_chair: 'very_positive', ceo: 'positive' } },
      { id: 'r18_o4', label: 'HR leadership accountability', impact: { culturalAlignment: 0.08, learningCapability: -0.05, leadershipBench: 0.02 }, risk: 'medium', stakeholderReactions: { bu_head: 'positive', hrbp_lead: 'concerned', ceo: 'neutral' } },
      { id: 'r18_o5', label: 'Employee experience transformation', impact: { employeeEngagement: 0.12, culturalAlignment: 0.1, employerBrand: 0.08 }, risk: 'medium', stakeholderReactions: { high_potential: 'very_positive', brand_analyst: 'positive', cfo: 'concerned' } },
      { id: 'r18_o6', label: 'Defend and minimize', impact: { culturalAlignment: -0.15, employerBrand: -0.15, employeeEngagement: -0.1 }, risk: 'very_high', stakeholderReactions: { brand_analyst: 'very_negative', high_potential: 'very_negative', ceo: 'negative' } }
    ]
  },

  // PHASE 4: SUSTAINABLE CULTURE (Rounds 19-24)
  {
    round: 19,
    phase: 'sustainable',
    title: 'Culture Codification',
    scenario: {
      description: 'The organization has evolved but culture remains implicit. Leaders want to codify culture while maintaining authenticity.',
      context: 'New hires don\'t understand the culture. Inconsistent behaviors create confusion.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['ceo', 'high_potential', 'frontline_mgr']
    },
    options: [
      { id: 'r19_o1', label: 'Values refresh with employee input', impact: { culturalAlignment: 0.12, employeeEngagement: 0.1, leadershipBench: 0.05 }, risk: 'low', stakeholderReactions: { high_potential: 'very_positive', ceo: 'positive', frontline_mgr: 'positive' } },
      { id: 'r19_o2', label: 'Behavioral anchors and norms', impact: { culturalAlignment: 0.1, leadershipBench: 0.1, learningCapability: 0.05 }, risk: 'low', stakeholderReactions: { vp_learning: 'positive', frontline_mgr: 'positive', ceo: 'positive' } },
      { id: 'r19_o3', label: 'Culture integration in all processes', impact: { culturalAlignment: 0.1, talentPipeline: 0.08, employeeEngagement: 0.05 }, risk: 'medium', stakeholderReactions: { hrbp_lead: 'positive', vp_ta: 'positive', bu_head: 'neutral' } },
      { id: 'r19_o4', label: 'Culture storytelling initiative', impact: { culturalAlignment: 0.08, employerBrand: 0.1, employeeEngagement: 0.08 }, risk: 'low', stakeholderReactions: { brand_analyst: 'positive', high_potential: 'positive', ceo: 'positive' } },
      { id: 'r19_o5', label: 'Culture ambassador program', impact: { culturalAlignment: 0.1, employeeEngagement: 0.1, leadershipBench: 0.05 }, risk: 'low', stakeholderReactions: { high_potential: 'very_positive', frontline_mgr: 'positive', vp_learning: 'positive' } },
      { id: 'r19_o6', label: 'Let culture remain organic', impact: { culturalAlignment: -0.05, learningCapability: -0.02, employeeEngagement: -0.02 }, risk: 'medium', stakeholderReactions: { ceo: 'concerned', frontline_mgr: 'neutral', high_potential: 'neutral' } }
    ]
  },

  {
    round: 20,
    phase: 'sustainable',
    title: 'Leadership Pipeline',
    scenario: {
      description: 'Succession planning shows progress but external hires still dominate senior appointments. Internal mobility stalls careers.',
      context: 'High-potentials are frustrated with pace of advancement. Some have left for leadership roles elsewhere.',
      pressure: 'high',
      timeConstraint: 'standard',
      stakeholderFocus: ['comp_chair', 'high_potential', 'vp_learning']
    },
    options: [
      { id: 'r20_o1', label: 'Accelerated leadership development', impact: { leadershipBench: 0.15, employeeEngagement: 0.1, talentPipeline: 0.08 }, risk: 'medium', stakeholderReactions: { high_potential: 'very_positive', comp_chair: 'positive', vp_learning: 'very_positive' } },
      { id: 'r20_o2', label: 'Internal-first hiring policy', impact: { leadershipBench: 0.1, employeeEngagement: 0.1, culturalAlignment: 0.08 }, risk: 'medium', stakeholderReactions: { high_potential: 'positive', vp_ta: 'concerned', bu_head: 'neutral' } },
      { id: 'r20_o3', label: 'Transparent career pathways', impact: { employeeEngagement: 0.12, leadershipBench: 0.08, talentPipeline: 0.05 }, risk: 'low', stakeholderReactions: { high_potential: 'very_positive', frontline_mgr: 'positive', hrbp_lead: 'positive' } },
      { id: 'r20_o4', label: 'Executive sponsorship program', impact: { leadershipBench: 0.12, culturalAlignment: 0.08, employeeEngagement: 0.08 }, risk: 'low', stakeholderReactions: { ceo: 'positive', high_potential: 'very_positive', comp_chair: 'positive' } },
      { id: 'r20_o5', label: 'Cross-functional rotation program', impact: { leadershipBench: 0.1, learningCapability: 0.1, talentPipeline: 0.05 }, risk: 'medium', stakeholderReactions: { vp_learning: 'positive', bu_head: 'concerned', high_potential: 'positive' } },
      { id: 'r20_o6', label: 'Continue external focus for talent', impact: { leadershipBench: 0.02, employeeEngagement: -0.1, culturalAlignment: -0.05 }, risk: 'high', stakeholderReactions: { high_potential: 'very_negative', comp_chair: 'negative', ceo: 'concerned' } }
    ]
  },

  {
    round: 21,
    phase: 'sustainable',
    title: 'Employee Experience',
    scenario: {
      description: 'The concept of employee experience is gaining traction. You must decide how to invest in creating a distinctive employee journey.',
      context: 'Top employers are known for employee experience. Candidates compare experiences when choosing employers.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['brand_analyst', 'high_potential', 'cfo']
    },
    options: [
      { id: 'r21_o1', label: 'Comprehensive EX transformation', impact: { employeeEngagement: 0.15, employerBrand: 0.12, culturalAlignment: 0.08 }, risk: 'medium', stakeholderReactions: { high_potential: 'very_positive', brand_analyst: 'very_positive', cfo: 'concerned' } },
      { id: 'r21_o2', label: 'Journey mapping and moments that matter', impact: { employeeEngagement: 0.1, employerBrand: 0.1, culturalAlignment: 0.08 }, risk: 'low', stakeholderReactions: { hrbp_lead: 'positive', high_potential: 'positive', ceo: 'positive' } },
      { id: 'r21_o3', label: 'Technology-enabled experience', impact: { employeeEngagement: 0.1, learningCapability: 0.1, employerBrand: 0.05 }, risk: 'medium', stakeholderReactions: { cto: 'positive', high_potential: 'positive', cfo: 'neutral' } },
      { id: 'r21_o4', label: 'Manager experience ownership', impact: { leadershipBench: 0.1, employeeEngagement: 0.1, culturalAlignment: 0.05 }, risk: 'low', stakeholderReactions: { frontline_mgr: 'positive', vp_learning: 'positive', ceo: 'positive' } },
      { id: 'r21_o5', label: 'Wellbeing and work-life focus', impact: { employeeEngagement: 0.12, employerBrand: 0.1, culturalAlignment: 0.05 }, risk: 'low', stakeholderReactions: { high_potential: 'very_positive', brand_analyst: 'positive', union_rep: 'positive' } },
      { id: 'r21_o6', label: 'Minimal investment approach', impact: { employeeEngagement: -0.05, employerBrand: -0.08, talentPipeline: -0.05 }, risk: 'medium', stakeholderReactions: { high_potential: 'negative', brand_analyst: 'negative', ceo: 'concerned' } }
    ]
  },

  {
    round: 22,
    phase: 'sustainable',
    title: 'HR Analytics Maturity',
    scenario: {
      description: 'People analytics capability is basic. Business leaders want data-driven talent decisions but HR lacks capability.',
      context: 'Competitors are using predictive analytics for talent management. HR decisions are still largely intuition-based.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['cfo', 'cto', 'bu_head']
    },
    options: [
      { id: 'r22_o1', label: 'People analytics center of excellence', impact: { learningCapability: 0.15, talentPipeline: 0.1, leadershipBench: 0.08 }, risk: 'medium', stakeholderReactions: { cfo: 'positive', cto: 'positive', bu_head: 'positive' } },
      { id: 'r22_o2', label: 'Predictive talent analytics', impact: { talentPipeline: 0.12, leadershipBench: 0.1, learningCapability: 0.08 }, risk: 'high', stakeholderReactions: { cto: 'positive', bu_head: 'positive', union_rep: 'concerned' } },
      { id: 'r22_o3', label: 'Manager dashboards and insights', impact: { leadershipBench: 0.1, learningCapability: 0.1, employeeEngagement: 0.05 }, risk: 'low', stakeholderReactions: { frontline_mgr: 'positive', bu_head: 'positive', ceo: 'positive' } },
      { id: 'r22_o4', label: 'Skills and competency mapping', impact: { talentPipeline: 0.1, learningCapability: 0.12, leadershipBench: 0.05 }, risk: 'medium', stakeholderReactions: { vp_learning: 'positive', cto: 'positive', hrbp_lead: 'positive' } },
      { id: 'r22_o5', label: 'HR data governance first', impact: { learningCapability: 0.08, talentPipeline: 0.05, culturalAlignment: 0.02 }, risk: 'low', stakeholderReactions: { cfo: 'positive', cto: 'positive', union_rep: 'positive' } },
      { id: 'r22_o6', label: 'Continue intuition-based decisions', impact: { learningCapability: -0.05, talentPipeline: -0.05, leadershipBench: -0.02 }, risk: 'medium', stakeholderReactions: { cfo: 'negative', bu_head: 'negative', ceo: 'concerned' } }
    ]
  },

  {
    round: 23,
    phase: 'sustainable',
    title: 'Talent Brand Legacy',
    scenario: {
      description: 'Your employer brand has strengthened significantly. You must decide how to sustain and evolve it for the future.',
      context: 'Recognition as a top employer attracts talent but creates expectations. Maintaining the brand requires ongoing investment.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['brand_analyst', 'vp_ta', 'ceo']
    },
    options: [
      { id: 'r23_o1', label: 'Employer brand institutionalization', impact: { employerBrand: 0.12, talentPipeline: 0.1, culturalAlignment: 0.08 }, risk: 'low', stakeholderReactions: { brand_analyst: 'very_positive', vp_ta: 'positive', ceo: 'positive' } },
      { id: 'r23_o2', label: 'Employee advocacy program', impact: { employerBrand: 0.1, employeeEngagement: 0.1, culturalAlignment: 0.08 }, risk: 'low', stakeholderReactions: { high_potential: 'positive', brand_analyst: 'positive', vp_ta: 'positive' } },
      { id: 'r23_o3', label: 'Alumni network cultivation', impact: { employerBrand: 0.08, talentPipeline: 0.08, learningCapability: 0.02 }, risk: 'low', stakeholderReactions: { vp_ta: 'positive', brand_analyst: 'positive', cfo: 'positive' } },
      { id: 'r23_o4', label: 'Industry thought leadership', impact: { employerBrand: 0.1, leadershipBench: 0.05, learningCapability: 0.08 }, risk: 'medium', stakeholderReactions: { ceo: 'positive', brand_analyst: 'positive', vp_learning: 'positive' } },
      { id: 'r23_o5', label: 'Continuous brand measurement', impact: { employerBrand: 0.08, talentPipeline: 0.08, learningCapability: 0.05 }, risk: 'low', stakeholderReactions: { brand_analyst: 'positive', vp_ta: 'positive', cfo: 'positive' } },
      { id: 'r23_o6', label: 'Reduce brand investment', impact: { employerBrand: -0.1, talentPipeline: -0.08, culturalAlignment: -0.02 }, risk: 'high', stakeholderReactions: { brand_analyst: 'negative', vp_ta: 'negative', ceo: 'concerned' } }
    ]
  },

  {
    round: 24,
    phase: 'sustainable',
    title: 'Talent & Culture Legacy',
    scenario: {
      description: 'As you reflect on your tenure, you must position the talent and culture function for sustained success beyond your leadership.',
      context: 'The organization has transformed significantly. Your decisions will shape people practices for years to come.',
      pressure: 'low',
      timeConstraint: 'standard',
      stakeholderFocus: ['ceo', 'comp_chair', 'high_potential']
    },
    options: [
      { id: 'r24_o1', label: 'Culture as strategic differentiator', impact: { culturalAlignment: 0.12, employerBrand: 0.12, employeeEngagement: 0.1 }, risk: 'low', stakeholderReactions: { ceo: 'very_positive', comp_chair: 'positive', brand_analyst: 'positive' } },
      { id: 'r24_o2', label: 'People-first business philosophy', impact: { employeeEngagement: 0.15, culturalAlignment: 0.1, leadershipBench: 0.08 }, risk: 'medium', stakeholderReactions: { high_potential: 'very_positive', union_rep: 'positive', cfo: 'neutral' } },
      { id: 'r24_o3', label: 'Leadership pipeline excellence', impact: { leadershipBench: 0.15, talentPipeline: 0.1, culturalAlignment: 0.08 }, risk: 'low', stakeholderReactions: { comp_chair: 'very_positive', ceo: 'positive', high_potential: 'positive' } },
      { id: 'r24_o4', label: 'Learning organization', impact: { learningCapability: 0.15, talentPipeline: 0.1, leadershipBench: 0.1 }, risk: 'low', stakeholderReactions: { vp_learning: 'very_positive', ceo: 'positive', cto: 'positive' } },
      { id: 'r24_o5', label: 'Successor development focus', impact: { leadershipBench: 0.1, learningCapability: 0.08, culturalAlignment: 0.1 }, risk: 'low', stakeholderReactions: { comp_chair: 'positive', ceo: 'positive', hrbp_lead: 'positive' } },
      { id: 'r24_o6', label: 'Maintain current achievements', impact: { culturalAlignment: 0.05, employeeEngagement: 0.05, leadershipBench: 0.05 }, risk: 'low', stakeholderReactions: { cfo: 'positive', ceo: 'neutral', comp_chair: 'neutral' } }
    ]
  }
];

export const PHASE_DESCRIPTIONS = {
  assessment: {
    name: 'Assessment & Strategy',
    description: 'Understand the current state and develop talent strategy',
    rounds: [1, 6],
    objectives: ['Assess talent capabilities', 'Develop strategy', 'Establish priorities']
  },
  capability: {
    name: 'Building Capability',
    description: 'Build talent programs and HR capabilities',
    rounds: [7, 12],
    objectives: ['Develop talent programs', 'Build HR capability', 'Address capability gaps']
  },
  culture: {
    name: 'Culture Challenges',
    description: 'Navigate complex culture and people challenges',
    rounds: [13, 18],
    objectives: ['Address culture issues', 'Manage difficult situations', 'Maintain trust']
  },
  sustainable: {
    name: 'Sustainable Culture',
    description: 'Build sustainable talent and culture practices',
    rounds: [19, 24],
    objectives: ['Institutionalize culture', 'Build sustainability', 'Create legacy']
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
