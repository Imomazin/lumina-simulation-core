// Strategic Leadership Simulation - Rounds & Scenarios
// 24 rounds with progressive leadership challenges, each with 6 decision options

export const ROUNDS = [
  // PHASE 1: ESTABLISHING LEADERSHIP (Rounds 1-6)
  {
    round: 1,
    phase: 'establishing',
    title: 'First 100 Days Vision',
    scenario: {
      description: 'You have just assumed the CEO role. The organization awaits your vision and initial priorities. Your first major address to the company is tomorrow.',
      context: 'The previous CEO left after mixed results. Some stakeholders want continuity, others demand change.',
      pressure: 'high',
      timeConstraint: 'immediate',
      stakeholderFocus: ['board_chair', 'cfo', 'veteran_exec']
    },
    options: [
      { id: 'r1_o1', label: 'Bold transformation agenda', impact: { strategicClarity: 0.15, organizationalMomentum: 0.1, stakeholderTrust: -0.05, changeReadiness: 0.1 }, risk: 'medium', stakeholderReactions: { board_chair: 'positive', activist_investor: 'very_positive', veteran_exec: 'negative' } },
      { id: 'r1_o2', label: 'Listening tour before commitments', impact: { strategicClarity: 0.05, organizationalMomentum: -0.05, stakeholderTrust: 0.1, leadershipCredibility: 0.05 }, risk: 'low', stakeholderReactions: { chro: 'positive', veteran_exec: 'positive', activist_investor: 'negative' } },
      { id: 'r1_o3', label: 'Build on predecessor\'s foundation', impact: { strategicClarity: 0.08, organizationalMomentum: 0.05, stakeholderTrust: 0.08, changeReadiness: -0.05 }, risk: 'low', stakeholderReactions: { veteran_exec: 'very_positive', coo: 'positive', cto: 'negative' } },
      { id: 'r1_o4', label: 'Quick wins to build credibility', impact: { strategicClarity: 0.05, executionCapability: 0.1, leadershipCredibility: 0.1, stakeholderTrust: 0.05 }, risk: 'medium', stakeholderReactions: { cfo: 'positive', division_president: 'positive', lead_director: 'neutral' } },
      { id: 'r1_o5', label: 'External benchmark and best practices', impact: { strategicClarity: 0.1, executionCapability: 0.05, stakeholderTrust: 0.02, changeReadiness: 0.05 }, risk: 'low', stakeholderReactions: { cto: 'positive', media_analyst: 'positive', veteran_exec: 'concerned' } },
      { id: 'r1_o6', label: 'Cost reduction and efficiency focus', impact: { strategicClarity: 0.08, executionCapability: 0.08, stakeholderTrust: -0.1, organizationalMomentum: -0.05 }, risk: 'medium', stakeholderReactions: { activist_investor: 'very_positive', cfo: 'positive', union_leader: 'very_negative' } }
    ]
  },

  {
    round: 2,
    phase: 'establishing',
    title: 'Executive Team Assessment',
    scenario: {
      description: 'After initial observations, you must decide how to shape your executive team. Some members are strong performers, others may not fit the new direction.',
      context: 'The CFO and COO are highly regarded. The CTO was hired by your predecessor. One division president has underperformed.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['cfo', 'coo', 'division_president']
    },
    options: [
      { id: 'r2_o1', label: 'Clean sweep - build your own team', impact: { strategicClarity: 0.1, executionCapability: -0.15, stakeholderTrust: -0.1, leadershipCredibility: 0.05 }, risk: 'high', stakeholderReactions: { board_chair: 'concerned', activist_investor: 'positive', chro: 'very_negative' } },
      { id: 'r2_o2', label: 'Selective changes in underperforming areas', impact: { strategicClarity: 0.08, executionCapability: 0.05, stakeholderTrust: 0.02, leadershipCredibility: 0.08 }, risk: 'medium', stakeholderReactions: { cfo: 'positive', lead_director: 'positive', division_president: 'concerned' } },
      { id: 'r2_o3', label: 'Retain all and give second chances', impact: { strategicClarity: 0.02, executionCapability: 0.02, stakeholderTrust: 0.1, leadershipCredibility: -0.05 }, risk: 'medium', stakeholderReactions: { veteran_exec: 'very_positive', activist_investor: 'very_negative', coo: 'positive' } },
      { id: 'r2_o4', label: 'Add new roles without removing anyone', impact: { strategicClarity: 0.05, executionCapability: 0.08, stakeholderTrust: 0.05, changeReadiness: 0.05 }, risk: 'medium', stakeholderReactions: { cfo: 'concerned', chro: 'positive', rising_star: 'positive' } },
      { id: 'r2_o5', label: 'Performance-based evaluation period', impact: { strategicClarity: 0.05, executionCapability: 0.05, stakeholderTrust: 0.05, leadershipCredibility: 0.05 }, risk: 'low', stakeholderReactions: { lead_director: 'positive', cfo: 'positive', division_president: 'concerned' } },
      { id: 'r2_o6', label: 'External search for key transformation roles', impact: { strategicClarity: 0.1, executionCapability: 0.05, stakeholderTrust: -0.05, changeReadiness: 0.1 }, risk: 'medium', stakeholderReactions: { cto: 'concerned', rising_star: 'concerned', board_chair: 'positive' } }
    ]
  },

  {
    round: 3,
    phase: 'establishing',
    title: 'Board Relationship',
    scenario: {
      description: 'The board chair requests a private dinner to discuss expectations. She hints at differing views among board members about strategic direction.',
      context: 'The lead independent director has been vocal about cost discipline. An activist investor recently increased their stake.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['board_chair', 'lead_director', 'activist_investor']
    },
    options: [
      { id: 'r3_o1', label: 'Align closely with chair\'s vision', impact: { strategicClarity: 0.08, stakeholderTrust: 0.1, leadershipCredibility: 0.05, organizationalMomentum: 0.05 }, risk: 'low', stakeholderReactions: { board_chair: 'very_positive', lead_director: 'concerned', activist_investor: 'neutral' } },
      { id: 'r3_o2', label: 'Build independent board relationships', impact: { strategicClarity: 0.05, stakeholderTrust: 0.08, leadershipCredibility: 0.1, changeReadiness: 0.02 }, risk: 'medium', stakeholderReactions: { lead_director: 'positive', board_chair: 'neutral', activist_investor: 'positive' } },
      { id: 'r3_o3', label: 'Proactively engage the activist', impact: { strategicClarity: 0.05, stakeholderTrust: 0.05, leadershipCredibility: 0.08, organizationalMomentum: 0.05 }, risk: 'medium', stakeholderReactions: { activist_investor: 'positive', board_chair: 'concerned', cfo: 'neutral' } },
      { id: 'r3_o4', label: 'Present unified executive team view', impact: { strategicClarity: 0.1, executionCapability: 0.05, stakeholderTrust: 0.05, leadershipCredibility: 0.05 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', coo: 'positive', cfo: 'positive' } },
      { id: 'r3_o5', label: 'Request expanded board authority', impact: { strategicClarity: 0.12, stakeholderTrust: -0.05, leadershipCredibility: 0.1, changeReadiness: 0.08 }, risk: 'high', stakeholderReactions: { board_chair: 'concerned', lead_director: 'negative', activist_investor: 'neutral' } },
      { id: 'r3_o6', label: 'Establish formal governance rhythm', impact: { strategicClarity: 0.05, stakeholderTrust: 0.1, leadershipCredibility: 0.05, executionCapability: 0.02 }, risk: 'low', stakeholderReactions: { lead_director: 'very_positive', board_chair: 'positive', cfo: 'positive' } }
    ]
  },

  {
    round: 4,
    phase: 'establishing',
    title: 'Cultural Assessment',
    scenario: {
      description: 'Employee engagement surveys reveal pockets of disengagement and concerns about the company\'s direction. Town halls generate both enthusiasm and skepticism.',
      context: 'The company culture is described as "siloed" and "risk-averse." Innovation has stalled in recent years.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['chro', 'veteran_exec', 'rising_star']
    },
    options: [
      { id: 'r4_o1', label: 'Launch culture transformation initiative', impact: { strategicClarity: 0.05, changeReadiness: 0.15, stakeholderTrust: 0.05, organizationalMomentum: 0.08 }, risk: 'medium', stakeholderReactions: { chro: 'very_positive', rising_star: 'positive', veteran_exec: 'negative' } },
      { id: 'r4_o2', label: 'Focus on behavior change, not culture programs', impact: { strategicClarity: 0.08, executionCapability: 0.1, changeReadiness: 0.08, leadershipCredibility: 0.05 }, risk: 'low', stakeholderReactions: { coo: 'positive', cfo: 'positive', chro: 'neutral' } },
      { id: 'r4_o3', label: 'Empower middle management as change agents', impact: { strategicClarity: 0.05, executionCapability: 0.08, stakeholderTrust: 0.1, changeReadiness: 0.1 }, risk: 'medium', stakeholderReactions: { rising_star: 'very_positive', division_president: 'positive', board_chair: 'neutral' } },
      { id: 'r4_o4', label: 'Address structural barriers to collaboration', impact: { strategicClarity: 0.08, executionCapability: 0.1, changeReadiness: 0.05, organizationalMomentum: 0.05 }, risk: 'medium', stakeholderReactions: { coo: 'positive', cto: 'positive', division_president: 'negative' } },
      { id: 'r4_o5', label: 'CEO-led culture communication campaign', impact: { strategicClarity: 0.1, stakeholderTrust: 0.08, leadershipCredibility: 0.1, changeReadiness: 0.05 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', media_analyst: 'positive', veteran_exec: 'neutral' } },
      { id: 'r4_o6', label: 'Wait for strategic clarity before culture work', impact: { strategicClarity: 0.02, changeReadiness: -0.05, stakeholderTrust: -0.03, leadershipCredibility: -0.02 }, risk: 'medium', stakeholderReactions: { cfo: 'positive', chro: 'negative', rising_star: 'negative' } }
    ]
  },

  {
    round: 5,
    phase: 'establishing',
    title: 'External Stakeholder Introduction',
    scenario: {
      description: 'Your first major investor day is approaching. Analysts are curious about your strategy, and the activist investor has submitted questions in advance.',
      context: 'The stock has been flat since your appointment. Market expectations are building.',
      pressure: 'high',
      timeConstraint: 'urgent',
      stakeholderFocus: ['activist_investor', 'media_analyst', 'cfo']
    },
    options: [
      { id: 'r5_o1', label: 'Bold three-year transformation plan', impact: { strategicClarity: 0.15, stakeholderTrust: 0.05, organizationalMomentum: 0.1, leadershipCredibility: 0.08 }, risk: 'high', stakeholderReactions: { activist_investor: 'very_positive', media_analyst: 'positive', cfo: 'concerned' } },
      { id: 'r5_o2', label: 'Conservative guidance with upside potential', impact: { strategicClarity: 0.08, stakeholderTrust: 0.1, executionCapability: 0.05, leadershipCredibility: 0.05 }, risk: 'low', stakeholderReactions: { cfo: 'very_positive', board_chair: 'positive', activist_investor: 'negative' } },
      { id: 'r5_o3', label: 'Focus on operational excellence story', impact: { strategicClarity: 0.1, executionCapability: 0.1, stakeholderTrust: 0.05, organizationalMomentum: 0.05 }, risk: 'low', stakeholderReactions: { coo: 'very_positive', cfo: 'positive', cto: 'neutral' } },
      { id: 'r5_o4', label: 'Customer and innovation narrative', impact: { strategicClarity: 0.1, changeReadiness: 0.08, stakeholderTrust: 0.05, organizationalMomentum: 0.08 }, risk: 'medium', stakeholderReactions: { cto: 'positive', cmo: 'very_positive', activist_investor: 'neutral' } },
      { id: 'r5_o5', label: 'Direct engagement with activist concerns', impact: { strategicClarity: 0.08, stakeholderTrust: 0.08, leadershipCredibility: 0.1, executionCapability: 0.02 }, risk: 'medium', stakeholderReactions: { activist_investor: 'positive', board_chair: 'neutral', lead_director: 'positive' } },
      { id: 'r5_o6', label: 'Delay investor day for more preparation', impact: { strategicClarity: 0.05, stakeholderTrust: -0.1, leadershipCredibility: -0.08, organizationalMomentum: -0.05 }, risk: 'high', stakeholderReactions: { activist_investor: 'very_negative', media_analyst: 'negative', board_chair: 'concerned' } }
    ]
  },

  {
    round: 6,
    phase: 'establishing',
    title: 'First Major Decision',
    scenario: {
      description: 'A significant acquisition opportunity has emerged. The target would accelerate your strategy but requires substantial investment and integration effort.',
      context: 'The deal has board support but the price is contested. Your team is divided on timing and strategic fit.',
      pressure: 'high',
      timeConstraint: 'urgent',
      stakeholderFocus: ['board_chair', 'cfo', 'coo']
    },
    options: [
      { id: 'r6_o1', label: 'Pursue aggressively at premium', impact: { strategicClarity: 0.12, executionCapability: -0.1, stakeholderTrust: 0.05, organizationalMomentum: 0.1 }, risk: 'high', stakeholderReactions: { board_chair: 'positive', cfo: 'concerned', activist_investor: 'positive' } },
      { id: 'r6_o2', label: 'Negotiate hard on price and terms', impact: { strategicClarity: 0.08, executionCapability: 0.02, stakeholderTrust: 0.05, leadershipCredibility: 0.08 }, risk: 'medium', stakeholderReactions: { cfo: 'very_positive', board_chair: 'positive', coo: 'positive' } },
      { id: 'r6_o3', label: 'Walk away - not the right time', impact: { strategicClarity: 0.05, executionCapability: 0.08, stakeholderTrust: 0.05, changeReadiness: -0.05 }, risk: 'low', stakeholderReactions: { cfo: 'positive', activist_investor: 'negative', cto: 'negative' } },
      { id: 'r6_o4', label: 'Propose partnership instead of acquisition', impact: { strategicClarity: 0.05, executionCapability: 0.05, stakeholderTrust: 0.08, changeReadiness: 0.05 }, risk: 'low', stakeholderReactions: { coo: 'positive', cfo: 'positive', activist_investor: 'neutral' } },
      { id: 'r6_o5', label: 'Conditional deal with performance milestones', impact: { strategicClarity: 0.1, executionCapability: 0.05, stakeholderTrust: 0.08, leadershipCredibility: 0.05 }, risk: 'medium', stakeholderReactions: { cfo: 'positive', board_chair: 'positive', lead_director: 'positive' } },
      { id: 'r6_o6', label: 'Let the team make the recommendation', impact: { strategicClarity: 0.02, executionCapability: 0.05, stakeholderTrust: 0.08, leadershipCredibility: -0.05 }, risk: 'medium', stakeholderReactions: { coo: 'positive', cfo: 'neutral', board_chair: 'concerned' } }
    ]
  },

  // PHASE 2: BUILDING MOMENTUM (Rounds 7-12)
  {
    round: 7,
    phase: 'momentum',
    title: 'Strategic Pivot Decision',
    scenario: {
      description: 'Market data suggests your core business is facing structural decline. You must decide whether to double down, diversify, or transform.',
      context: 'Competitors are moving aggressively into adjacent markets. Your legacy business still generates 70% of profits.',
      pressure: 'high',
      timeConstraint: 'standard',
      stakeholderFocus: ['cto', 'division_president', 'activist_investor']
    },
    options: [
      { id: 'r7_o1', label: 'Accelerate into growth adjacencies', impact: { strategicClarity: 0.12, executionCapability: -0.05, changeReadiness: 0.1, organizationalMomentum: 0.1 }, risk: 'high', stakeholderReactions: { cto: 'very_positive', activist_investor: 'positive', veteran_exec: 'very_negative' } },
      { id: 'r7_o2', label: 'Defend and optimize core business', impact: { strategicClarity: 0.08, executionCapability: 0.1, stakeholderTrust: 0.05, changeReadiness: -0.08 }, risk: 'medium', stakeholderReactions: { division_president: 'very_positive', cfo: 'positive', cto: 'negative' } },
      { id: 'r7_o3', label: 'Dual-track: protect core while building new', impact: { strategicClarity: 0.05, executionCapability: 0.02, stakeholderTrust: 0.08, organizationalMomentum: 0.05 }, risk: 'medium', stakeholderReactions: { board_chair: 'positive', coo: 'concerned', cfo: 'concerned' } },
      { id: 'r7_o4', label: 'Divest declining segments', impact: { strategicClarity: 0.15, executionCapability: 0.05, stakeholderTrust: -0.1, organizationalMomentum: 0.08 }, risk: 'high', stakeholderReactions: { activist_investor: 'very_positive', union_leader: 'very_negative', veteran_exec: 'very_negative' } },
      { id: 'r7_o5', label: 'Innovation-led transformation', impact: { strategicClarity: 0.1, changeReadiness: 0.12, executionCapability: 0.02, leadershipCredibility: 0.05 }, risk: 'medium', stakeholderReactions: { cto: 'very_positive', rising_star: 'positive', cfo: 'concerned' } },
      { id: 'r7_o6', label: 'Wait for clearer market signals', impact: { strategicClarity: -0.05, stakeholderTrust: -0.05, leadershipCredibility: -0.08, organizationalMomentum: -0.1 }, risk: 'high', stakeholderReactions: { activist_investor: 'very_negative', board_chair: 'negative', media_analyst: 'negative' } }
    ]
  },

  {
    round: 8,
    phase: 'momentum',
    title: 'Talent War',
    scenario: {
      description: 'Your top technical talent is being aggressively recruited by competitors. Three key leaders have resigned in the past month.',
      context: 'Compensation is competitive but culture and growth opportunities are cited as concerns by departing employees.',
      pressure: 'high',
      timeConstraint: 'urgent',
      stakeholderFocus: ['chro', 'cto', 'rising_star']
    },
    options: [
      { id: 'r8_o1', label: 'Aggressive retention packages for top talent', impact: { executionCapability: 0.1, stakeholderTrust: 0.05, organizationalMomentum: 0.05, leadershipCredibility: 0.02 }, risk: 'low', stakeholderReactions: { chro: 'positive', cfo: 'negative', rising_star: 'positive' } },
      { id: 'r8_o2', label: 'Restructure to create growth opportunities', impact: { executionCapability: 0.08, changeReadiness: 0.1, stakeholderTrust: 0.08, organizationalMomentum: 0.08 }, risk: 'medium', stakeholderReactions: { rising_star: 'very_positive', chro: 'positive', veteran_exec: 'concerned' } },
      { id: 'r8_o3', label: 'CEO personal engagement with key talent', impact: { executionCapability: 0.05, stakeholderTrust: 0.1, leadershipCredibility: 0.1, organizationalMomentum: 0.05 }, risk: 'low', stakeholderReactions: { chro: 'positive', rising_star: 'very_positive', board_chair: 'positive' } },
      { id: 'r8_o4', label: 'Accept attrition and accelerate hiring', impact: { executionCapability: -0.05, changeReadiness: 0.05, stakeholderTrust: -0.05, organizationalMomentum: 0.02 }, risk: 'medium', stakeholderReactions: { cto: 'concerned', chro: 'concerned', cfo: 'positive' } },
      { id: 'r8_o5', label: 'Culture and purpose reinvention', impact: { executionCapability: 0.05, changeReadiness: 0.15, stakeholderTrust: 0.1, leadershipCredibility: 0.08 }, risk: 'medium', stakeholderReactions: { chro: 'very_positive', cmo: 'positive', veteran_exec: 'neutral' } },
      { id: 'r8_o6', label: 'Compete on mission and impact', impact: { executionCapability: 0.05, stakeholderTrust: 0.08, leadershipCredibility: 0.05, changeReadiness: 0.08 }, risk: 'low', stakeholderReactions: { community_leader: 'positive', chro: 'positive', cto: 'positive' } }
    ]
  },

  {
    round: 9,
    phase: 'momentum',
    title: 'Stakeholder Conflict',
    scenario: {
      description: 'The activist investor has gone public with demands for board seats and strategic changes. Media coverage is intensifying.',
      context: 'The board is divided on how to respond. Some directors are sympathetic to the activist\'s concerns.',
      pressure: 'critical',
      timeConstraint: 'urgent',
      stakeholderFocus: ['activist_investor', 'board_chair', 'lead_director']
    },
    options: [
      { id: 'r9_o1', label: 'Negotiate settlement with board seats', impact: { strategicClarity: 0.05, stakeholderTrust: 0.05, leadershipCredibility: -0.05, organizationalMomentum: 0.02 }, risk: 'medium', stakeholderReactions: { activist_investor: 'positive', board_chair: 'concerned', lead_director: 'neutral' } },
      { id: 'r9_o2', label: 'Fight the activist publicly', impact: { strategicClarity: 0.08, stakeholderTrust: -0.1, leadershipCredibility: 0.05, organizationalMomentum: -0.05 }, risk: 'high', stakeholderReactions: { activist_investor: 'very_negative', media_analyst: 'concerned', board_chair: 'concerned' } },
      { id: 'r9_o3', label: 'Accelerate value creation plan', impact: { strategicClarity: 0.12, executionCapability: 0.08, stakeholderTrust: 0.05, organizationalMomentum: 0.1 }, risk: 'medium', stakeholderReactions: { activist_investor: 'neutral', board_chair: 'positive', cfo: 'positive' } },
      { id: 'r9_o4', label: 'Direct CEO-activist dialogue', impact: { strategicClarity: 0.05, stakeholderTrust: 0.1, leadershipCredibility: 0.1, organizationalMomentum: 0.02 }, risk: 'medium', stakeholderReactions: { activist_investor: 'positive', board_chair: 'neutral', lead_director: 'positive' } },
      { id: 'r9_o5', label: 'Broaden shareholder engagement', impact: { strategicClarity: 0.05, stakeholderTrust: 0.12, leadershipCredibility: 0.08, executionCapability: 0.02 }, risk: 'low', stakeholderReactions: { lead_director: 'positive', media_analyst: 'positive', activist_investor: 'neutral' } },
      { id: 'r9_o6', label: 'Focus internally, ignore external noise', impact: { strategicClarity: 0.05, executionCapability: 0.1, stakeholderTrust: -0.15, leadershipCredibility: -0.1 }, risk: 'very_high', stakeholderReactions: { activist_investor: 'very_negative', media_analyst: 'very_negative', board_chair: 'negative' } }
    ]
  },

  {
    round: 10,
    phase: 'momentum',
    title: 'Execution Challenge',
    scenario: {
      description: 'A major strategic initiative is behind schedule and over budget. The team is stretched and morale is suffering.',
      context: 'This initiative is central to your promised transformation. Failure would damage credibility.',
      pressure: 'high',
      timeConstraint: 'urgent',
      stakeholderFocus: ['coo', 'cfo', 'division_president']
    },
    options: [
      { id: 'r10_o1', label: 'Double down with more resources', impact: { strategicClarity: 0.05, executionCapability: 0.05, stakeholderTrust: 0.02, organizationalMomentum: 0.05 }, risk: 'high', stakeholderReactions: { coo: 'positive', cfo: 'very_negative', board_chair: 'concerned' } },
      { id: 'r10_o2', label: 'Reset scope and timeline', impact: { strategicClarity: 0.08, executionCapability: 0.1, stakeholderTrust: 0.05, leadershipCredibility: 0.05 }, risk: 'low', stakeholderReactions: { cfo: 'positive', coo: 'positive', activist_investor: 'negative' } },
      { id: 'r10_o3', label: 'Bring in external execution support', impact: { strategicClarity: 0.02, executionCapability: 0.12, stakeholderTrust: -0.05, leadershipCredibility: 0.02 }, risk: 'medium', stakeholderReactions: { coo: 'concerned', cfo: 'neutral', division_president: 'negative' } },
      { id: 'r10_o4', label: 'CEO takes direct oversight', impact: { strategicClarity: 0.08, executionCapability: 0.08, leadershipCredibility: 0.1, stakeholderTrust: 0.05 }, risk: 'medium', stakeholderReactions: { board_chair: 'positive', coo: 'concerned', division_president: 'negative' } },
      { id: 'r10_o5', label: 'Pivot to different approach', impact: { strategicClarity: 0.1, executionCapability: 0.02, changeReadiness: 0.08, organizationalMomentum: -0.05 }, risk: 'high', stakeholderReactions: { cto: 'positive', coo: 'negative', veteran_exec: 'negative' } },
      { id: 'r10_o6', label: 'Accept partial success and learn', impact: { strategicClarity: 0.05, executionCapability: 0.08, stakeholderTrust: 0.08, leadershipCredibility: 0.05 }, risk: 'low', stakeholderReactions: { chro: 'positive', lead_director: 'positive', activist_investor: 'concerned' } }
    ]
  },

  {
    round: 11,
    phase: 'momentum',
    title: 'Innovation Bet',
    scenario: {
      description: 'The CTO proposes a significant investment in emerging technology that could leapfrog competitors but carries substantial risk.',
      context: 'The technology is unproven at scale. Success would transform market position; failure would waste significant resources.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['cto', 'cfo', 'board_chair']
    },
    options: [
      { id: 'r11_o1', label: 'Full commitment to the bet', impact: { strategicClarity: 0.1, executionCapability: -0.05, changeReadiness: 0.15, organizationalMomentum: 0.1 }, risk: 'very_high', stakeholderReactions: { cto: 'very_positive', cfo: 'very_negative', activist_investor: 'concerned' } },
      { id: 'r11_o2', label: 'Staged investment with milestones', impact: { strategicClarity: 0.08, executionCapability: 0.05, changeReadiness: 0.08, leadershipCredibility: 0.05 }, risk: 'medium', stakeholderReactions: { cfo: 'positive', cto: 'neutral', board_chair: 'positive' } },
      { id: 'r11_o3', label: 'Partner or acquire capability', impact: { strategicClarity: 0.05, executionCapability: 0.08, changeReadiness: 0.05, stakeholderTrust: 0.05 }, risk: 'medium', stakeholderReactions: { cfo: 'positive', cto: 'concerned', coo: 'positive' } },
      { id: 'r11_o4', label: 'Create separate innovation unit', impact: { strategicClarity: 0.05, executionCapability: 0.05, changeReadiness: 0.1, organizationalMomentum: 0.05 }, risk: 'medium', stakeholderReactions: { cto: 'positive', rising_star: 'positive', division_president: 'negative' } },
      { id: 'r11_o5', label: 'Focus resources on proven opportunities', impact: { strategicClarity: 0.05, executionCapability: 0.1, changeReadiness: -0.05, stakeholderTrust: 0.05 }, risk: 'low', stakeholderReactions: { cfo: 'very_positive', cto: 'very_negative', activist_investor: 'positive' } },
      { id: 'r11_o6', label: 'Watch and wait for market validation', impact: { strategicClarity: 0.02, executionCapability: 0.02, changeReadiness: -0.08, leadershipCredibility: -0.05 }, risk: 'medium', stakeholderReactions: { cto: 'negative', rising_star: 'negative', veteran_exec: 'positive' } }
    ]
  },

  {
    round: 12,
    phase: 'momentum',
    title: 'Crisis Prevention',
    scenario: {
      description: 'Internal audit has identified significant control weaknesses that could become material issues. Addressing them would require substantial investment.',
      context: 'No incident has occurred yet, but risk exposure is real. The board audit committee is aware.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['cfo', 'lead_director', 'coo']
    },
    options: [
      { id: 'r12_o1', label: 'Comprehensive remediation program', impact: { strategicClarity: 0.05, executionCapability: 0.1, stakeholderTrust: 0.1, leadershipCredibility: 0.08 }, risk: 'low', stakeholderReactions: { lead_director: 'very_positive', cfo: 'positive', activist_investor: 'neutral' } },
      { id: 'r12_o2', label: 'Prioritize highest-risk areas only', impact: { strategicClarity: 0.05, executionCapability: 0.05, stakeholderTrust: 0.05, leadershipCredibility: 0.05 }, risk: 'medium', stakeholderReactions: { cfo: 'positive', lead_director: 'neutral', coo: 'positive' } },
      { id: 'r12_o3', label: 'Accept risk with enhanced monitoring', impact: { strategicClarity: 0.02, executionCapability: 0.02, stakeholderTrust: -0.05, leadershipCredibility: -0.05 }, risk: 'high', stakeholderReactions: { lead_director: 'negative', cfo: 'concerned', activist_investor: 'concerned' } },
      { id: 'r12_o4', label: 'Outsource control functions', impact: { strategicClarity: 0.02, executionCapability: 0.08, stakeholderTrust: 0.02, changeReadiness: 0.02 }, risk: 'medium', stakeholderReactions: { cfo: 'positive', coo: 'neutral', union_leader: 'concerned' } },
      { id: 'r12_o5', label: 'Proactive disclosure and plan', impact: { strategicClarity: 0.08, stakeholderTrust: 0.12, leadershipCredibility: 0.1, executionCapability: 0.02 }, risk: 'medium', stakeholderReactions: { board_chair: 'positive', lead_director: 'very_positive', media_analyst: 'positive' } },
      { id: 'r12_o6', label: 'Defer to next budget cycle', impact: { strategicClarity: 0.02, executionCapability: 0.02, stakeholderTrust: -0.1, leadershipCredibility: -0.08 }, risk: 'high', stakeholderReactions: { lead_director: 'very_negative', board_chair: 'negative', cfo: 'concerned' } }
    ]
  },

  // PHASE 3: NAVIGATING CHALLENGES (Rounds 13-18)
  {
    round: 13,
    phase: 'challenges',
    title: 'Public Crisis',
    scenario: {
      description: 'A product safety issue has emerged that could affect customer trust and regulatory standing. Media coverage is building.',
      context: 'The issue appears isolated but investigations are ongoing. Some board members want immediate public response.',
      pressure: 'critical',
      timeConstraint: 'immediate',
      stakeholderFocus: ['cmo', 'board_chair', 'media_analyst']
    },
    options: [
      { id: 'r13_o1', label: 'Immediate transparent disclosure', impact: { strategicClarity: 0.05, stakeholderTrust: 0.15, leadershipCredibility: 0.1, organizationalMomentum: -0.05 }, risk: 'medium', stakeholderReactions: { media_analyst: 'positive', board_chair: 'positive', cmo: 'positive' } },
      { id: 'r13_o2', label: 'Complete investigation before statement', impact: { strategicClarity: 0.08, stakeholderTrust: -0.1, leadershipCredibility: 0.02, executionCapability: 0.05 }, risk: 'high', stakeholderReactions: { cfo: 'positive', media_analyst: 'negative', board_chair: 'concerned' } },
      { id: 'r13_o3', label: 'CEO personal leadership of response', impact: { strategicClarity: 0.08, stakeholderTrust: 0.12, leadershipCredibility: 0.15, organizationalMomentum: 0.02 }, risk: 'medium', stakeholderReactions: { board_chair: 'very_positive', media_analyst: 'positive', cmo: 'positive' } },
      { id: 'r13_o4', label: 'Delegate to crisis management team', impact: { strategicClarity: 0.02, executionCapability: 0.08, stakeholderTrust: 0.02, leadershipCredibility: -0.05 }, risk: 'medium', stakeholderReactions: { coo: 'positive', board_chair: 'concerned', media_analyst: 'neutral' } },
      { id: 'r13_o5', label: 'Proactive customer outreach', impact: { strategicClarity: 0.05, stakeholderTrust: 0.1, leadershipCredibility: 0.08, changeReadiness: 0.02 }, risk: 'low', stakeholderReactions: { cmo: 'very_positive', key_customer: 'positive', community_leader: 'positive' } },
      { id: 'r13_o6', label: 'Legal-led defensive response', impact: { strategicClarity: 0.02, stakeholderTrust: -0.15, leadershipCredibility: -0.1, executionCapability: 0.02 }, risk: 'high', stakeholderReactions: { media_analyst: 'very_negative', board_chair: 'negative', community_leader: 'negative' } }
    ]
  },

  {
    round: 14,
    phase: 'challenges',
    title: 'Leadership Defection',
    scenario: {
      description: 'Your CFO has been recruited by a competitor and is leaving in 30 days. The timing is terrible given upcoming earnings.',
      context: 'The CFO was your closest ally and trusted advisor. Markets will react to the news.',
      pressure: 'critical',
      timeConstraint: 'urgent',
      stakeholderFocus: ['cfo', 'board_chair', 'activist_investor']
    },
    options: [
      { id: 'r14_o1', label: 'Counter-offer to retain CFO', impact: { executionCapability: 0.05, stakeholderTrust: 0.05, leadershipCredibility: 0.02, organizationalMomentum: 0.02 }, risk: 'medium', stakeholderReactions: { cfo: 'neutral', board_chair: 'neutral', activist_investor: 'neutral' } },
      { id: 'r14_o2', label: 'Immediate external search', impact: { executionCapability: -0.05, stakeholderTrust: 0.05, leadershipCredibility: 0.05, changeReadiness: 0.02 }, risk: 'medium', stakeholderReactions: { board_chair: 'positive', activist_investor: 'neutral', rising_star: 'concerned' } },
      { id: 'r14_o3', label: 'Promote internal candidate', impact: { executionCapability: 0.02, stakeholderTrust: 0.08, leadershipCredibility: 0.05, organizationalMomentum: 0.05 }, risk: 'medium', stakeholderReactions: { rising_star: 'positive', chro: 'positive', activist_investor: 'concerned' } },
      { id: 'r14_o4', label: 'CEO takes interim CFO duties', impact: { executionCapability: 0.05, leadershipCredibility: 0.1, stakeholderTrust: 0.05, strategicClarity: -0.05 }, risk: 'high', stakeholderReactions: { board_chair: 'concerned', media_analyst: 'concerned', coo: 'positive' } },
      { id: 'r14_o5', label: 'Structured transition plan', impact: { executionCapability: 0.08, stakeholderTrust: 0.1, leadershipCredibility: 0.08, organizationalMomentum: 0.02 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', activist_investor: 'positive', lead_director: 'positive' } },
      { id: 'r14_o6', label: 'Use as catalyst for finance transformation', impact: { executionCapability: 0.05, changeReadiness: 0.1, stakeholderTrust: 0.02, strategicClarity: 0.08 }, risk: 'medium', stakeholderReactions: { cto: 'positive', activist_investor: 'positive', coo: 'neutral' } }
    ]
  },

  {
    round: 15,
    phase: 'challenges',
    title: 'Market Disruption',
    scenario: {
      description: 'A technology disruptor has entered your core market with a radically different business model. Initial traction is significant.',
      context: 'Your team is divided between dismissing the threat and panic. Customers are asking questions.',
      pressure: 'high',
      timeConstraint: 'standard',
      stakeholderFocus: ['cto', 'cmo', 'key_customer']
    },
    options: [
      { id: 'r15_o1', label: 'Acquire or partner with the disruptor', impact: { strategicClarity: 0.1, executionCapability: -0.05, changeReadiness: 0.1, organizationalMomentum: 0.05 }, risk: 'high', stakeholderReactions: { cto: 'positive', cfo: 'concerned', activist_investor: 'positive' } },
      { id: 'r15_o2', label: 'Launch competing offering', impact: { strategicClarity: 0.08, executionCapability: 0.05, changeReadiness: 0.08, organizationalMomentum: 0.08 }, risk: 'high', stakeholderReactions: { cto: 'positive', cmo: 'positive', cfo: 'concerned' } },
      { id: 'r15_o3', label: 'Double down on differentiation', impact: { strategicClarity: 0.12, executionCapability: 0.08, stakeholderTrust: 0.05, leadershipCredibility: 0.05 }, risk: 'medium', stakeholderReactions: { key_customer: 'positive', veteran_exec: 'positive', cto: 'negative' } },
      { id: 'r15_o4', label: 'Wait and learn from market response', impact: { strategicClarity: 0.02, executionCapability: 0.02, changeReadiness: -0.05, leadershipCredibility: -0.05 }, risk: 'high', stakeholderReactions: { activist_investor: 'negative', cto: 'negative', key_customer: 'concerned' } },
      { id: 'r15_o5', label: 'Customer intimacy and lock-in strategy', impact: { strategicClarity: 0.08, stakeholderTrust: 0.1, executionCapability: 0.05, leadershipCredibility: 0.05 }, risk: 'medium', stakeholderReactions: { key_customer: 'very_positive', cmo: 'positive', cfo: 'positive' } },
      { id: 'r15_o6', label: 'Lobby for regulatory protection', impact: { strategicClarity: 0.02, stakeholderTrust: -0.05, leadershipCredibility: -0.08, executionCapability: 0.02 }, risk: 'high', stakeholderReactions: { community_leader: 'negative', media_analyst: 'very_negative', activist_investor: 'negative' } }
    ]
  },

  {
    round: 16,
    phase: 'challenges',
    title: 'Ethical Dilemma',
    scenario: {
      description: 'An internal investigation reveals potential misconduct by a high-performing executive. The evidence is concerning but not conclusive.',
      context: 'The executive is critical to a major initiative. Going public could damage the company; covering up could be worse.',
      pressure: 'critical',
      timeConstraint: 'urgent',
      stakeholderFocus: ['chro', 'lead_director', 'board_chair']
    },
    options: [
      { id: 'r16_o1', label: 'Immediate termination and disclosure', impact: { strategicClarity: 0.05, executionCapability: -0.1, stakeholderTrust: 0.15, leadershipCredibility: 0.15 }, risk: 'medium', stakeholderReactions: { lead_director: 'very_positive', chro: 'positive', media_analyst: 'positive' } },
      { id: 'r16_o2', label: 'Complete investigation before action', impact: { strategicClarity: 0.05, stakeholderTrust: 0.05, leadershipCredibility: 0.05, executionCapability: 0.02 }, risk: 'medium', stakeholderReactions: { chro: 'positive', board_chair: 'positive', lead_director: 'neutral' } },
      { id: 'r16_o3', label: 'Quiet separation with non-disclosure', impact: { strategicClarity: 0.02, stakeholderTrust: -0.15, leadershipCredibility: -0.15, executionCapability: 0.05 }, risk: 'very_high', stakeholderReactions: { lead_director: 'very_negative', media_analyst: 'concerned', chro: 'negative' } },
      { id: 'r16_o4', label: 'Administrative leave during investigation', impact: { strategicClarity: 0.05, stakeholderTrust: 0.1, leadershipCredibility: 0.1, executionCapability: -0.05 }, risk: 'low', stakeholderReactions: { chro: 'positive', lead_director: 'positive', board_chair: 'positive' } },
      { id: 'r16_o5', label: 'Board-led independent review', impact: { strategicClarity: 0.08, stakeholderTrust: 0.12, leadershipCredibility: 0.08, executionCapability: -0.02 }, risk: 'low', stakeholderReactions: { lead_director: 'very_positive', board_chair: 'positive', media_analyst: 'positive' } },
      { id: 'r16_o6', label: 'Give executive chance to resign', impact: { strategicClarity: 0.02, stakeholderTrust: -0.05, leadershipCredibility: -0.05, executionCapability: 0.02 }, risk: 'high', stakeholderReactions: { chro: 'concerned', lead_director: 'negative', media_analyst: 'concerned' } }
    ]
  },

  {
    round: 17,
    phase: 'challenges',
    title: 'Stakeholder Revolt',
    scenario: {
      description: 'Employee engagement has plummeted following recent changes. A petition demanding leadership accountability is circulating.',
      context: 'Union activity is increasing. Social media criticism from employees is growing.',
      pressure: 'high',
      timeConstraint: 'urgent',
      stakeholderFocus: ['union_leader', 'chro', 'community_leader']
    },
    options: [
      { id: 'r17_o1', label: 'Town hall and listening sessions', impact: { strategicClarity: 0.02, stakeholderTrust: 0.12, leadershipCredibility: 0.1, changeReadiness: 0.05 }, risk: 'medium', stakeholderReactions: { chro: 'very_positive', union_leader: 'positive', rising_star: 'positive' } },
      { id: 'r17_o2', label: 'Acknowledge mistakes and adjust course', impact: { strategicClarity: 0.08, stakeholderTrust: 0.15, leadershipCredibility: 0.12, organizationalMomentum: 0.05 }, risk: 'medium', stakeholderReactions: { chro: 'positive', union_leader: 'positive', activist_investor: 'concerned' } },
      { id: 'r17_o3', label: 'Stay the course with better communication', impact: { strategicClarity: 0.1, stakeholderTrust: 0.02, leadershipCredibility: 0.05, executionCapability: 0.05 }, risk: 'high', stakeholderReactions: { board_chair: 'positive', union_leader: 'negative', veteran_exec: 'neutral' } },
      { id: 'r17_o4', label: 'Employee representation on change committees', impact: { strategicClarity: 0.02, stakeholderTrust: 0.15, changeReadiness: 0.1, leadershipCredibility: 0.08 }, risk: 'medium', stakeholderReactions: { union_leader: 'very_positive', chro: 'positive', division_president: 'negative' } },
      { id: 'r17_o5', label: 'Compensation and benefit improvements', impact: { executionCapability: 0.05, stakeholderTrust: 0.08, leadershipCredibility: 0.02, organizationalMomentum: 0.05 }, risk: 'low', stakeholderReactions: { union_leader: 'positive', cfo: 'negative', chro: 'positive' } },
      { id: 'r17_o6', label: 'Identify and address agitators', impact: { strategicClarity: 0.02, stakeholderTrust: -0.2, leadershipCredibility: -0.15, changeReadiness: -0.1 }, risk: 'very_high', stakeholderReactions: { union_leader: 'very_negative', chro: 'very_negative', media_analyst: 'very_negative' } }
    ]
  },

  {
    round: 18,
    phase: 'challenges',
    title: 'Board Confidence Vote',
    scenario: {
      description: 'Cumulative challenges have led some board members to question leadership. An informal vote of confidence is being discussed.',
      context: 'The chair remains supportive but the lead director has concerns. The activist has been vocal.',
      pressure: 'critical',
      timeConstraint: 'urgent',
      stakeholderFocus: ['board_chair', 'lead_director', 'activist_investor']
    },
    options: [
      { id: 'r18_o1', label: 'Request formal performance review', impact: { strategicClarity: 0.08, stakeholderTrust: 0.1, leadershipCredibility: 0.1, organizationalMomentum: 0.02 }, risk: 'medium', stakeholderReactions: { board_chair: 'positive', lead_director: 'positive', activist_investor: 'neutral' } },
      { id: 'r18_o2', label: 'Present comprehensive turnaround plan', impact: { strategicClarity: 0.15, executionCapability: 0.05, leadershipCredibility: 0.12, organizationalMomentum: 0.08 }, risk: 'medium', stakeholderReactions: { board_chair: 'positive', activist_investor: 'positive', lead_director: 'positive' } },
      { id: 'r18_o3', label: 'One-on-one director engagement', impact: { strategicClarity: 0.05, stakeholderTrust: 0.12, leadershipCredibility: 0.1, executionCapability: 0.02 }, risk: 'low', stakeholderReactions: { lead_director: 'positive', board_chair: 'positive', activist_investor: 'neutral' } },
      { id: 'r18_o4', label: 'Propose governance changes', impact: { strategicClarity: 0.08, stakeholderTrust: 0.05, leadershipCredibility: 0.05, changeReadiness: 0.08 }, risk: 'medium', stakeholderReactions: { lead_director: 'positive', activist_investor: 'positive', board_chair: 'neutral' } },
      { id: 'r18_o5', label: 'Offer to resign if objectives not met', impact: { strategicClarity: 0.1, stakeholderTrust: 0.08, leadershipCredibility: 0.15, organizationalMomentum: 0.05 }, risk: 'high', stakeholderReactions: { lead_director: 'very_positive', board_chair: 'concerned', coo: 'concerned' } },
      { id: 'r18_o6', label: 'Rally executive team support', impact: { strategicClarity: 0.05, executionCapability: 0.08, stakeholderTrust: 0.02, leadershipCredibility: 0.05 }, risk: 'medium', stakeholderReactions: { coo: 'positive', cfo: 'positive', board_chair: 'neutral' } }
    ]
  },

  // PHASE 4: SECURING LEGACY (Rounds 19-24)
  {
    round: 19,
    phase: 'legacy',
    title: 'Succession Planning',
    scenario: {
      description: 'The board has asked for a robust succession plan. Several internal candidates show promise but none is ready today.',
      context: 'The activist investor wants external candidates considered. Your top internal candidate is being recruited externally.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['board_chair', 'chro', 'rising_star']
    },
    options: [
      { id: 'r19_o1', label: 'Accelerate internal candidate development', impact: { strategicClarity: 0.05, executionCapability: 0.05, stakeholderTrust: 0.1, leadershipCredibility: 0.08 }, risk: 'medium', stakeholderReactions: { chro: 'very_positive', rising_star: 'very_positive', activist_investor: 'neutral' } },
      { id: 'r19_o2', label: 'External search in parallel', impact: { strategicClarity: 0.08, stakeholderTrust: 0.02, leadershipCredibility: 0.05, changeReadiness: 0.05 }, risk: 'medium', stakeholderReactions: { activist_investor: 'positive', board_chair: 'positive', rising_star: 'negative' } },
      { id: 'r19_o3', label: 'Comprehensive talent review', impact: { strategicClarity: 0.05, executionCapability: 0.08, stakeholderTrust: 0.08, changeReadiness: 0.05 }, risk: 'low', stakeholderReactions: { chro: 'positive', lead_director: 'positive', board_chair: 'positive' } },
      { id: 'r19_o4', label: 'Create COO role for succession', impact: { strategicClarity: 0.08, executionCapability: 0.1, stakeholderTrust: 0.05, organizationalMomentum: 0.05 }, risk: 'medium', stakeholderReactions: { coo: 'concerned', rising_star: 'positive', board_chair: 'positive' } },
      { id: 'r19_o5', label: 'Retention packages for key candidates', impact: { executionCapability: 0.08, stakeholderTrust: 0.08, leadershipCredibility: 0.02, organizationalMomentum: 0.02 }, risk: 'low', stakeholderReactions: { rising_star: 'positive', chro: 'positive', cfo: 'concerned' } },
      { id: 'r19_o6', label: 'Focus on current performance not succession', impact: { strategicClarity: 0.05, executionCapability: 0.05, stakeholderTrust: -0.1, leadershipCredibility: -0.08 }, risk: 'high', stakeholderReactions: { board_chair: 'negative', lead_director: 'negative', activist_investor: 'negative' } }
    ]
  },

  {
    round: 20,
    phase: 'legacy',
    title: 'Sustainable Advantage',
    scenario: {
      description: 'Your transformation is showing results. Now you must decide how to sustain and extend the advantage you\'ve built.',
      context: 'Competitors are responding. The organization is tired from change. Stakeholders want stability.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['cto', 'cfo', 'division_president']
    },
    options: [
      { id: 'r20_o1', label: 'Continuous innovation culture', impact: { strategicClarity: 0.1, changeReadiness: 0.15, executionCapability: 0.02, organizationalMomentum: 0.08 }, risk: 'medium', stakeholderReactions: { cto: 'very_positive', rising_star: 'positive', veteran_exec: 'negative' } },
      { id: 'r20_o2', label: 'Operational excellence focus', impact: { strategicClarity: 0.08, executionCapability: 0.15, stakeholderTrust: 0.08, organizationalMomentum: 0.05 }, risk: 'low', stakeholderReactions: { coo: 'very_positive', cfo: 'positive', division_president: 'positive' } },
      { id: 'r20_o3', label: 'Customer intimacy strategy', impact: { strategicClarity: 0.1, stakeholderTrust: 0.1, leadershipCredibility: 0.05, executionCapability: 0.05 }, risk: 'low', stakeholderReactions: { cmo: 'very_positive', key_customer: 'very_positive', cfo: 'positive' } },
      { id: 'r20_o4', label: 'Platform and ecosystem play', impact: { strategicClarity: 0.12, changeReadiness: 0.1, executionCapability: -0.05, organizationalMomentum: 0.1 }, risk: 'high', stakeholderReactions: { cto: 'very_positive', activist_investor: 'positive', coo: 'concerned' } },
      { id: 'r20_o5', label: 'Talent as competitive moat', impact: { strategicClarity: 0.08, executionCapability: 0.1, stakeholderTrust: 0.1, changeReadiness: 0.08 }, risk: 'low', stakeholderReactions: { chro: 'very_positive', rising_star: 'positive', board_chair: 'positive' } },
      { id: 'r20_o6', label: 'Consolidation and stability', impact: { strategicClarity: 0.05, executionCapability: 0.1, stakeholderTrust: 0.08, changeReadiness: -0.1 }, risk: 'low', stakeholderReactions: { veteran_exec: 'very_positive', cfo: 'positive', cto: 'negative' } }
    ]
  },

  {
    round: 21,
    phase: 'legacy',
    title: 'Stakeholder Value Balance',
    scenario: {
      description: 'Competing stakeholder demands require difficult trade-offs. Shareholders want returns, employees want investment, communities want commitment.',
      context: 'ESG pressures are increasing. Your decisions will define the company\'s stakeholder philosophy.',
      pressure: 'high',
      timeConstraint: 'standard',
      stakeholderFocus: ['activist_investor', 'union_leader', 'community_leader']
    },
    options: [
      { id: 'r21_o1', label: 'Shareholder primacy approach', impact: { strategicClarity: 0.1, stakeholderTrust: -0.1, leadershipCredibility: 0.02, executionCapability: 0.08 }, risk: 'medium', stakeholderReactions: { activist_investor: 'very_positive', union_leader: 'very_negative', community_leader: 'negative' } },
      { id: 'r21_o2', label: 'Balanced stakeholder model', impact: { strategicClarity: 0.05, stakeholderTrust: 0.1, leadershipCredibility: 0.1, changeReadiness: 0.05 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', community_leader: 'positive', activist_investor: 'neutral' } },
      { id: 'r21_o3', label: 'Employee-first philosophy', impact: { strategicClarity: 0.05, stakeholderTrust: 0.12, executionCapability: 0.08, leadershipCredibility: 0.08 }, risk: 'medium', stakeholderReactions: { union_leader: 'very_positive', chro: 'very_positive', activist_investor: 'negative' } },
      { id: 'r21_o4', label: 'Purpose-driven strategy', impact: { strategicClarity: 0.12, stakeholderTrust: 0.1, leadershipCredibility: 0.1, changeReadiness: 0.08 }, risk: 'medium', stakeholderReactions: { community_leader: 'very_positive', rising_star: 'positive', cfo: 'concerned' } },
      { id: 'r21_o5', label: 'Long-term value creation focus', impact: { strategicClarity: 0.1, stakeholderTrust: 0.08, leadershipCredibility: 0.08, organizationalMomentum: 0.05 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', lead_director: 'positive', activist_investor: 'neutral' } },
      { id: 'r21_o6', label: 'Situational stakeholder priority', impact: { strategicClarity: -0.05, stakeholderTrust: -0.05, leadershipCredibility: -0.05, executionCapability: 0.05 }, risk: 'high', stakeholderReactions: { lead_director: 'negative', union_leader: 'concerned', activist_investor: 'concerned' } }
    ]
  },

  {
    round: 22,
    phase: 'legacy',
    title: 'Leadership Philosophy',
    scenario: {
      description: 'A leadership development program asks you to articulate your leadership philosophy. Your answer will influence the next generation of leaders.',
      context: 'The company is increasingly seen as a leadership academy. Your approach is being studied and emulated.',
      pressure: 'low',
      timeConstraint: 'standard',
      stakeholderFocus: ['chro', 'rising_star', 'board_chair']
    },
    options: [
      { id: 'r22_o1', label: 'Results-oriented leadership', impact: { strategicClarity: 0.1, executionCapability: 0.12, stakeholderTrust: 0.02, leadershipCredibility: 0.08 }, risk: 'low', stakeholderReactions: { activist_investor: 'positive', cfo: 'positive', chro: 'neutral' } },
      { id: 'r22_o2', label: 'Servant leadership model', impact: { strategicClarity: 0.05, stakeholderTrust: 0.15, leadershipCredibility: 0.1, changeReadiness: 0.08 }, risk: 'low', stakeholderReactions: { chro: 'very_positive', rising_star: 'positive', union_leader: 'positive' } },
      { id: 'r22_o3', label: 'Adaptive leadership approach', impact: { strategicClarity: 0.08, changeReadiness: 0.12, leadershipCredibility: 0.08, executionCapability: 0.05 }, risk: 'low', stakeholderReactions: { cto: 'positive', rising_star: 'positive', board_chair: 'positive' } },
      { id: 'r22_o4', label: 'Authentic leadership focus', impact: { strategicClarity: 0.05, stakeholderTrust: 0.12, leadershipCredibility: 0.12, organizationalMomentum: 0.05 }, risk: 'low', stakeholderReactions: { chro: 'positive', media_analyst: 'positive', board_chair: 'positive' } },
      { id: 'r22_o5', label: 'Transformational leadership style', impact: { strategicClarity: 0.1, changeReadiness: 0.1, leadershipCredibility: 0.1, stakeholderTrust: 0.05 }, risk: 'medium', stakeholderReactions: { rising_star: 'very_positive', cto: 'positive', veteran_exec: 'neutral' } },
      { id: 'r22_o6', label: 'Pragmatic situational leadership', impact: { strategicClarity: 0.08, executionCapability: 0.1, leadershipCredibility: 0.05, changeReadiness: 0.05 }, risk: 'low', stakeholderReactions: { coo: 'positive', cfo: 'positive', lead_director: 'positive' } }
    ]
  },

  {
    round: 23,
    phase: 'legacy',
    title: 'Institutional Knowledge',
    scenario: {
      description: 'Key institutional knowledge is at risk as long-tenured leaders approach retirement. Critical capabilities could be lost.',
      context: 'The veteran executive population holds deep expertise but has been resistant to documentation and knowledge transfer.',
      pressure: 'medium',
      timeConstraint: 'standard',
      stakeholderFocus: ['veteran_exec', 'chro', 'cto']
    },
    options: [
      { id: 'r23_o1', label: 'Formal knowledge management program', impact: { strategicClarity: 0.05, executionCapability: 0.1, stakeholderTrust: 0.08, organizationalMomentum: 0.02 }, risk: 'low', stakeholderReactions: { chro: 'positive', cto: 'positive', veteran_exec: 'neutral' } },
      { id: 'r23_o2', label: 'Mentorship and shadowing programs', impact: { strategicClarity: 0.02, executionCapability: 0.08, stakeholderTrust: 0.12, changeReadiness: 0.05 }, risk: 'low', stakeholderReactions: { veteran_exec: 'positive', rising_star: 'very_positive', chro: 'positive' } },
      { id: 'r23_o3', label: 'Retain veterans as advisors', impact: { strategicClarity: 0.02, executionCapability: 0.05, stakeholderTrust: 0.1, leadershipCredibility: 0.05 }, risk: 'low', stakeholderReactions: { veteran_exec: 'very_positive', cfo: 'concerned', activist_investor: 'neutral' } },
      { id: 'r23_o4', label: 'Technology-enabled knowledge capture', impact: { strategicClarity: 0.05, executionCapability: 0.1, changeReadiness: 0.08, organizationalMomentum: 0.02 }, risk: 'medium', stakeholderReactions: { cto: 'very_positive', veteran_exec: 'concerned', chro: 'positive' } },
      { id: 'r23_o5', label: 'Accept knowledge loss as renewal', impact: { strategicClarity: 0.05, changeReadiness: 0.1, stakeholderTrust: -0.05, executionCapability: -0.05 }, risk: 'high', stakeholderReactions: { cto: 'positive', veteran_exec: 'very_negative', board_chair: 'concerned' } },
      { id: 'r23_o6', label: 'External expertise to fill gaps', impact: { strategicClarity: 0.05, executionCapability: 0.05, stakeholderTrust: 0.02, changeReadiness: 0.05 }, risk: 'medium', stakeholderReactions: { cfo: 'neutral', veteran_exec: 'negative', rising_star: 'neutral' } }
    ]
  },

  {
    round: 24,
    phase: 'legacy',
    title: 'Leadership Legacy',
    scenario: {
      description: 'As you reflect on your tenure, you must decide how to position the organization for continued success beyond your leadership.',
      context: 'The transformation is largely complete. Stakeholders are looking to the future. Your legacy will be defined by what happens next.',
      pressure: 'low',
      timeConstraint: 'standard',
      stakeholderFocus: ['board_chair', 'rising_star', 'activist_investor']
    },
    options: [
      { id: 'r24_o1', label: 'Institutionalize the transformation', impact: { strategicClarity: 0.12, executionCapability: 0.1, stakeholderTrust: 0.1, organizationalMomentum: 0.08 }, risk: 'low', stakeholderReactions: { board_chair: 'very_positive', lead_director: 'positive', veteran_exec: 'positive' } },
      { id: 'r24_o2', label: 'Set up successor for success', impact: { strategicClarity: 0.08, stakeholderTrust: 0.15, leadershipCredibility: 0.12, changeReadiness: 0.05 }, risk: 'low', stakeholderReactions: { rising_star: 'very_positive', chro: 'very_positive', board_chair: 'positive' } },
      { id: 'r24_o3', label: 'Bold vision for next chapter', impact: { strategicClarity: 0.15, changeReadiness: 0.12, organizationalMomentum: 0.1, leadershipCredibility: 0.08 }, risk: 'medium', stakeholderReactions: { activist_investor: 'positive', cto: 'positive', board_chair: 'positive' } },
      { id: 'r24_o4', label: 'Culture as enduring legacy', impact: { strategicClarity: 0.05, stakeholderTrust: 0.12, leadershipCredibility: 0.1, changeReadiness: 0.1 }, risk: 'low', stakeholderReactions: { chro: 'very_positive', community_leader: 'positive', rising_star: 'positive' } },
      { id: 'r24_o5', label: 'Stakeholder relationships as foundation', impact: { strategicClarity: 0.08, stakeholderTrust: 0.15, leadershipCredibility: 0.1, executionCapability: 0.05 }, risk: 'low', stakeholderReactions: { board_chair: 'positive', key_customer: 'positive', union_leader: 'positive' } },
      { id: 'r24_o6', label: 'Let successor define their own path', impact: { strategicClarity: 0.02, stakeholderTrust: 0.08, leadershipCredibility: 0.05, changeReadiness: 0.1 }, risk: 'medium', stakeholderReactions: { rising_star: 'positive', board_chair: 'neutral', activist_investor: 'neutral' } }
    ]
  }
];

export const PHASE_DESCRIPTIONS = {
  establishing: {
    name: 'Establishing Leadership',
    description: 'Build credibility, assess the organization, and set initial direction',
    rounds: [1, 6],
    objectives: ['Establish vision and priorities', 'Build key relationships', 'Assess and shape the team']
  },
  momentum: {
    name: 'Building Momentum',
    description: 'Drive strategic initiatives and build organizational capability',
    rounds: [7, 12],
    objectives: ['Execute strategic priorities', 'Build organizational momentum', 'Navigate stakeholder dynamics']
  },
  challenges: {
    name: 'Navigating Challenges',
    description: 'Lead through crisis, conflict, and adversity',
    rounds: [13, 18],
    objectives: ['Manage crisis situations', 'Maintain stakeholder confidence', 'Demonstrate resilience']
  },
  legacy: {
    name: 'Securing Legacy',
    description: 'Ensure sustainable success and prepare for transition',
    rounds: [19, 24],
    objectives: ['Build sustainable advantage', 'Develop succession', 'Define leadership legacy']
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
