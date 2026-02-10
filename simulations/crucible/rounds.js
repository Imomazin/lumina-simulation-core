// Crucible Simulation Rounds
// 24 rounds across 4 phases with 6 options each

export const ROUNDS = [
  // Phase 1: Shock (Rounds 1-6)
  {
    id: 1,
    phase: 'SHOCK',
    title: 'Crisis Erupts',
    scenario: 'A sudden crisis has struck. Multiple stakeholders are demanding immediate answers. Your first response will set the tone for everything that follows.',
    stakeholderFocus: ['CEO', 'BOARD_CHAIR', 'CRISIS_LEAD'],
    options: [
      { id: 'A', text: 'Activate crisis command center with full leadership team', impact: { crisisControl: 15, stakeholderConfidence: 8, communicationEffectiveness: 10 }, risk: 0.20, stakeholderReactions: { CEO: 18, CRISIS_LEAD: 20, COO: 12 } },
      { id: 'B', text: 'Issue immediate stakeholder communication to control narrative', impact: { communicationEffectiveness: 15, reputationHealth: 10, stakeholderConfidence: 5 }, risk: 0.25, stakeholderReactions: { COMMS_VP: 20, MEDIA_CONTACT: 15, BOARD_CHAIR: 8 } },
      { id: 'C', text: 'Focus on operational containment before communication', impact: { operationalContinuity: 15, crisisControl: 10, reputationHealth: -5 }, risk: 0.30, stakeholderReactions: { COO: 18, SECURITY_CHIEF: 15, MEDIA_CONTACT: -12 } },
      { id: 'D', text: 'Engage legal counsel to assess liability exposure', impact: { crisisControl: 8, resourceReserves: 5, communicationEffectiveness: -5 }, risk: 0.25, stakeholderReactions: { LEGAL_COUNSEL: 20, CFO: 12, COMMS_VP: -10 } },
      { id: 'E', text: 'Transparent disclosure approach with all stakeholders', impact: { reputationHealth: 12, stakeholderConfidence: 10, crisisControl: -3 }, risk: 0.35, stakeholderReactions: { MEDIA_CONTACT: 18, KEY_INVESTOR: 12, LEGAL_COUNSEL: -15 } },
      { id: 'F', text: 'Minimal initial response while gathering more information', impact: { strategicClarity: 10, resourceReserves: 8, stakeholderConfidence: -8 }, risk: 0.30, stakeholderReactions: { STRATEGY_HEAD: 15, CFO: 10, BOARD_CHAIR: -12 } }
    ]
  },
  {
    id: 2,
    phase: 'SHOCK',
    title: 'Information Chaos',
    scenario: 'Conflicting reports are flooding in. Media is speculating wildly. You need to establish facts while managing perception.',
    stakeholderFocus: ['COMMS_VP', 'MEDIA_CONTACT', 'CRISIS_LEAD'],
    options: [
      { id: 'A', text: 'Establish single source of truth with verified facts only', impact: { communicationEffectiveness: 15, crisisControl: 10, stakeholderConfidence: 8 }, risk: 0.20, stakeholderReactions: { CRISIS_LEAD: 18, COMMS_VP: 15, CEO: 10 } },
      { id: 'B', text: 'Proactive media engagement with preliminary assessment', impact: { reputationHealth: 12, communicationEffectiveness: 8, crisisControl: -3 }, risk: 0.35, stakeholderReactions: { MEDIA_CONTACT: 18, COMMS_VP: 12, LEGAL_COUNSEL: -10 } },
      { id: 'C', text: 'Information lockdown until situation is fully understood', impact: { crisisControl: 12, strategicClarity: 8, communicationEffectiveness: -8 }, risk: 0.30, stakeholderReactions: { LEGAL_COUNSEL: 15, SECURITY_CHIEF: 12, MEDIA_CONTACT: -18 } },
      { id: 'D', text: 'Deploy rapid fact-finding teams across all affected areas', impact: { strategicClarity: 15, crisisControl: 8, resourceReserves: -5 }, risk: 0.25, stakeholderReactions: { CRISIS_LEAD: 18, COO: 12, CFO: -5 } },
      { id: 'E', text: 'Engage external crisis communications firm', impact: { communicationEffectiveness: 12, reputationHealth: 10, resourceReserves: -8 }, risk: 0.25, stakeholderReactions: { COMMS_VP: 10, BOARD_CHAIR: 12, CFO: -8 } },
      { id: 'F', text: 'Internal communication priority to prevent leaks', impact: { teamResilience: 12, communicationEffectiveness: 8, reputationHealth: -3 }, risk: 0.25, stakeholderReactions: { HR_HEAD: 18, UNION_REP: 12, MEDIA_CONTACT: -8 } }
    ]
  },
  {
    id: 3,
    phase: 'SHOCK',
    title: 'Leadership Under Fire',
    scenario: 'Board members are questioning leadership decisions. Key executives are showing stress. Maintain composure while making critical decisions.',
    stakeholderFocus: ['BOARD_CHAIR', 'CEO', 'KEY_INVESTOR'],
    options: [
      { id: 'A', text: 'Convene emergency board session with full transparency', impact: { stakeholderConfidence: 15, strategicClarity: 10, communicationEffectiveness: 5 }, risk: 0.25, stakeholderReactions: { BOARD_CHAIR: 18, KEY_INVESTOR: 15, CEO: 10 } },
      { id: 'B', text: 'Executive team alignment meeting before board engagement', impact: { teamResilience: 12, crisisControl: 10, stakeholderConfidence: -3 }, risk: 0.20, stakeholderReactions: { CEO: 15, COO: 12, BOARD_CHAIR: -8 } },
      { id: 'C', text: 'Demonstrate decisive action with immediate structural changes', impact: { crisisControl: 12, stakeholderConfidence: 8, teamResilience: -8 }, risk: 0.40, stakeholderReactions: { KEY_INVESTOR: 18, BOARD_CHAIR: 12, HR_HEAD: -15 } },
      { id: 'D', text: 'Bring in crisis leadership expert to advise', impact: { strategicClarity: 12, crisisControl: 8, resourceReserves: -5 }, risk: 0.25, stakeholderReactions: { STRATEGY_HEAD: 15, CRISIS_LEAD: 10, CEO: -5 } },
      { id: 'E', text: 'Individual outreach to key board members and investors', impact: { stakeholderConfidence: 12, communicationEffectiveness: 8, crisisControl: -3 }, risk: 0.30, stakeholderReactions: { BOARD_CHAIR: 15, KEY_INVESTOR: 18, CRISIS_LEAD: -5 } },
      { id: 'F', text: 'Focus on operational execution, let results speak', impact: { operationalContinuity: 12, crisisControl: 8, stakeholderConfidence: -5 }, risk: 0.25, stakeholderReactions: { COO: 18, SECURITY_CHIEF: 12, BOARD_CHAIR: -10 } }
    ]
  },
  {
    id: 4,
    phase: 'SHOCK',
    title: 'Resource Crunch',
    scenario: 'Crisis response is straining resources. Normal operations are suffering. You must balance crisis management with business continuity.',
    stakeholderFocus: ['CFO', 'COO', 'HR_HEAD'],
    options: [
      { id: 'A', text: 'Emergency budget reallocation to crisis response', impact: { crisisControl: 12, resourceReserves: -10, operationalContinuity: 5 }, risk: 0.30, stakeholderReactions: { CRISIS_LEAD: 18, CFO: -5, COO: 10 } },
      { id: 'B', text: 'Prioritize critical operations only, pause non-essential', impact: { operationalContinuity: 10, resourceReserves: 8, teamResilience: -5 }, risk: 0.25, stakeholderReactions: { COO: 15, CFO: 18, HR_HEAD: -8 } },
      { id: 'C', text: 'Mobilize cross-functional crisis team from existing resources', impact: { crisisControl: 10, teamResilience: 8, operationalContinuity: -3 }, risk: 0.20, stakeholderReactions: { HR_HEAD: 15, CRISIS_LEAD: 12, COO: -5 } },
      { id: 'D', text: 'Engage external crisis support contractors', impact: { crisisControl: 12, operationalContinuity: 8, resourceReserves: -12 }, risk: 0.30, stakeholderReactions: { CRISIS_LEAD: 15, CFO: -12, BOARD_CHAIR: 5 } },
      { id: 'E', text: 'Secure emergency credit facility for crisis funding', impact: { resourceReserves: 15, stakeholderConfidence: 5, crisisControl: 3 }, risk: 0.35, stakeholderReactions: { CFO: 15, KEY_INVESTOR: 10, BOARD_CHAIR: 8 } },
      { id: 'F', text: 'Rally employees around crisis response with clear ask', impact: { teamResilience: 15, crisisControl: 8, resourceReserves: 3 }, risk: 0.20, stakeholderReactions: { HR_HEAD: 18, UNION_REP: 12, CEO: 10 } }
    ]
  },
  {
    id: 5,
    phase: 'SHOCK',
    title: 'External Pressure',
    scenario: 'Regulators are asking questions. Customers are concerned. The external pressure is intensifying. How you engage will shape the crisis trajectory.',
    stakeholderFocus: ['REGULATOR', 'MAJOR_CUSTOMER', 'LEGAL_COUNSEL'],
    options: [
      { id: 'A', text: 'Proactive regulatory engagement with full cooperation', impact: { stakeholderConfidence: 12, reputationHealth: 10, crisisControl: 5 }, risk: 0.25, stakeholderReactions: { REGULATOR: 20, LEGAL_COUNSEL: 10, BOARD_CHAIR: 8 } },
      { id: 'B', text: 'Customer-first response with dedicated support team', impact: { reputationHealth: 15, stakeholderConfidence: 8, resourceReserves: -5 }, risk: 0.25, stakeholderReactions: { MAJOR_CUSTOMER: 20, COMMS_VP: 12, CFO: -5 } },
      { id: 'C', text: 'Legal-led response with careful documentation', impact: { crisisControl: 10, resourceReserves: 5, reputationHealth: -5 }, risk: 0.30, stakeholderReactions: { LEGAL_COUNSEL: 18, REGULATOR: -8, MAJOR_CUSTOMER: -5 } },
      { id: 'D', text: 'Multi-channel external stakeholder engagement plan', impact: { communicationEffectiveness: 12, stakeholderConfidence: 10, crisisControl: 3 }, risk: 0.25, stakeholderReactions: { COMMS_VP: 18, REGULATOR: 10, MAJOR_CUSTOMER: 12 } },
      { id: 'E', text: 'Third-party validation and independent assessment', impact: { reputationHealth: 12, stakeholderConfidence: 8, resourceReserves: -8 }, risk: 0.30, stakeholderReactions: { REGULATOR: 15, KEY_INVESTOR: 12, CFO: -10 } },
      { id: 'F', text: 'Defensive posture with minimal disclosure', impact: { resourceReserves: 8, crisisControl: 5, reputationHealth: -10 }, risk: 0.40, stakeholderReactions: { LEGAL_COUNSEL: 12, REGULATOR: -15, MEDIA_CONTACT: -12 } }
    ]
  },
  {
    id: 6,
    phase: 'SHOCK',
    title: 'Team Strain',
    scenario: 'Your team is exhausted. Morale is dropping. Some are questioning whether the organization can survive. You must sustain the human engine.',
    stakeholderFocus: ['HR_HEAD', 'UNION_REP', 'CRISIS_LEAD'],
    options: [
      { id: 'A', text: 'Transparent town hall addressing concerns directly', impact: { teamResilience: 15, communicationEffectiveness: 10, stakeholderConfidence: 5 }, risk: 0.20, stakeholderReactions: { HR_HEAD: 18, UNION_REP: 15, CEO: 10 } },
      { id: 'B', text: 'Implement rotation system to prevent burnout', impact: { teamResilience: 12, operationalContinuity: 8, crisisControl: -3 }, risk: 0.25, stakeholderReactions: { HR_HEAD: 15, CRISIS_LEAD: -5, UNION_REP: 18 } },
      { id: 'C', text: 'Crisis bonus and recognition program', impact: { teamResilience: 12, resourceReserves: -8, stakeholderConfidence: 5 }, risk: 0.25, stakeholderReactions: { UNION_REP: 18, CFO: -10, HR_HEAD: 12 } },
      { id: 'D', text: 'Bring in additional temporary support staff', impact: { operationalContinuity: 10, teamResilience: 5, resourceReserves: -10 }, risk: 0.30, stakeholderReactions: { COO: 15, CFO: -8, CRISIS_LEAD: 10 } },
      { id: 'E', text: 'Personal leadership engagement with frontline teams', impact: { teamResilience: 15, stakeholderConfidence: 8, crisisControl: 3 }, risk: 0.15, stakeholderReactions: { HR_HEAD: 15, UNION_REP: 12, CEO: 15 } },
      { id: 'F', text: 'Mental health and counseling support deployment', impact: { teamResilience: 12, communicationEffectiveness: 5, resourceReserves: -5 }, risk: 0.20, stakeholderReactions: { HR_HEAD: 20, UNION_REP: 15, LEGAL_COUNSEL: 8 } }
    ]
  },

  // Phase 2: Response (Rounds 7-12)
  {
    id: 7,
    phase: 'RESPONSE',
    title: 'Containment Strategy',
    scenario: 'Initial shock has passed. Now you must contain the crisis and prevent further damage. Your response strategy will determine the outcome.',
    stakeholderFocus: ['CRISIS_LEAD', 'COO', 'SECURITY_CHIEF'],
    options: [
      { id: 'A', text: 'Comprehensive containment plan with clear milestones', impact: { crisisControl: 15, strategicClarity: 12, operationalContinuity: 5 }, risk: 0.25, stakeholderReactions: { CRISIS_LEAD: 18, COO: 15, BOARD_CHAIR: 10 } },
      { id: 'B', text: 'Aggressive action to eliminate root cause immediately', impact: { crisisControl: 18, operationalContinuity: -8, resourceReserves: -5 }, risk: 0.40, stakeholderReactions: { CEO: 15, SECURITY_CHIEF: 18, COO: -10 } },
      { id: 'C', text: 'Phased containment to balance operations and crisis', impact: { operationalContinuity: 12, crisisControl: 10, teamResilience: 5 }, risk: 0.25, stakeholderReactions: { COO: 18, CFO: 12, CRISIS_LEAD: 5 } },
      { id: 'D', text: 'External expert-led containment with internal support', impact: { crisisControl: 12, strategicClarity: 10, resourceReserves: -10 }, risk: 0.30, stakeholderReactions: { BOARD_CHAIR: 15, CFO: -8, CRISIS_LEAD: 8 } },
      { id: 'E', text: 'Technology-enabled monitoring and response system', impact: { crisisControl: 10, communicationEffectiveness: 12, resourceReserves: -8 }, risk: 0.30, stakeholderReactions: { SECURITY_CHIEF: 18, CRISIS_LEAD: 12, CFO: -5 } },
      { id: 'F', text: 'Decentralized response empowering local teams', impact: { operationalContinuity: 12, teamResilience: 10, crisisControl: -5 }, risk: 0.35, stakeholderReactions: { COO: 15, HR_HEAD: 12, CRISIS_LEAD: -8 } }
    ]
  },
  {
    id: 8,
    phase: 'RESPONSE',
    title: 'Stakeholder Triage',
    scenario: 'Multiple stakeholders demand attention. Resources are limited. You must prioritize who gets your time and what messages they receive.',
    stakeholderFocus: ['COMMS_VP', 'KEY_INVESTOR', 'MAJOR_CUSTOMER'],
    options: [
      { id: 'A', text: 'Investor-first strategy to maintain market confidence', impact: { stakeholderConfidence: 15, resourceReserves: 8, reputationHealth: -3 }, risk: 0.25, stakeholderReactions: { KEY_INVESTOR: 20, BOARD_CHAIR: 15, MAJOR_CUSTOMER: -8 } },
      { id: 'B', text: 'Customer protection as primary focus', impact: { reputationHealth: 15, stakeholderConfidence: 8, operationalContinuity: 5 }, risk: 0.25, stakeholderReactions: { MAJOR_CUSTOMER: 20, COMMS_VP: 12, KEY_INVESTOR: -5 } },
      { id: 'C', text: 'Employee-centric approach to maintain operations', impact: { teamResilience: 15, operationalContinuity: 10, stakeholderConfidence: -3 }, risk: 0.20, stakeholderReactions: { HR_HEAD: 18, UNION_REP: 15, KEY_INVESTOR: -10 } },
      { id: 'D', text: 'Balanced engagement across all stakeholder groups', impact: { communicationEffectiveness: 12, stakeholderConfidence: 8, crisisControl: 5 }, risk: 0.25, stakeholderReactions: { COMMS_VP: 15, CEO: 12, CRISIS_LEAD: 8 } },
      { id: 'E', text: 'Regulator-first to prevent escalation', impact: { crisisControl: 12, reputationHealth: 8, stakeholderConfidence: 5 }, risk: 0.30, stakeholderReactions: { REGULATOR: 20, LEGAL_COUNSEL: 15, KEY_INVESTOR: -5 } },
      { id: 'F', text: 'Media management to control public narrative', impact: { reputationHealth: 12, communicationEffectiveness: 10, crisisControl: -3 }, risk: 0.30, stakeholderReactions: { MEDIA_CONTACT: 18, COMMS_VP: 15, LEGAL_COUNSEL: -8 } }
    ]
  },
  {
    id: 9,
    phase: 'RESPONSE',
    title: 'Operational Adaptation',
    scenario: 'Normal operations cannot continue as before. You must adapt the organization to function effectively during crisis while preparing for recovery.',
    stakeholderFocus: ['COO', 'CFO', 'STRATEGY_HEAD'],
    options: [
      { id: 'A', text: 'Implement crisis operating model with streamlined decisions', impact: { operationalContinuity: 15, crisisControl: 10, teamResilience: 5 }, risk: 0.25, stakeholderReactions: { COO: 18, CEO: 12, HR_HEAD: 8 } },
      { id: 'B', text: 'Cost reduction program to preserve resources', impact: { resourceReserves: 15, operationalContinuity: 5, teamResilience: -8 }, risk: 0.35, stakeholderReactions: { CFO: 18, BOARD_CHAIR: 12, UNION_REP: -15 } },
      { id: 'C', text: 'Flexible work arrangements to maintain productivity', impact: { teamResilience: 12, operationalContinuity: 10, communicationEffectiveness: 5 }, risk: 0.20, stakeholderReactions: { HR_HEAD: 18, UNION_REP: 12, COO: 8 } },
      { id: 'D', text: 'Strategic pause on non-critical initiatives', impact: { resourceReserves: 12, crisisControl: 8, strategicClarity: -5 }, risk: 0.25, stakeholderReactions: { CFO: 15, COO: 12, STRATEGY_HEAD: -10 } },
      { id: 'E', text: 'Accelerate digital capabilities for resilience', impact: { operationalContinuity: 12, strategicClarity: 8, resourceReserves: -8 }, risk: 0.30, stakeholderReactions: { STRATEGY_HEAD: 18, SECURITY_CHIEF: 12, CFO: -5 } },
      { id: 'F', text: 'Partner ecosystem activation for operational support', impact: { operationalContinuity: 12, resourceReserves: 5, crisisControl: -3 }, risk: 0.30, stakeholderReactions: { COO: 15, MAJOR_CUSTOMER: 10, LEGAL_COUNSEL: -5 } }
    ]
  },
  {
    id: 10,
    phase: 'RESPONSE',
    title: 'Truth and Accountability',
    scenario: 'Questions arise about what went wrong and who is responsible. How you handle accountability will shape trust and future prevention.',
    stakeholderFocus: ['LEGAL_COUNSEL', 'BOARD_CHAIR', 'CEO'],
    options: [
      { id: 'A', text: 'Independent investigation with full transparency pledge', impact: { reputationHealth: 15, stakeholderConfidence: 10, crisisControl: -3 }, risk: 0.30, stakeholderReactions: { BOARD_CHAIR: 18, REGULATOR: 15, LEGAL_COUNSEL: -8 } },
      { id: 'B', text: 'Internal review with lessons learned focus', impact: { strategicClarity: 12, crisisControl: 10, reputationHealth: -3 }, risk: 0.25, stakeholderReactions: { CRISIS_LEAD: 15, COO: 12, MEDIA_CONTACT: -8 } },
      { id: 'C', text: 'Immediate accountability actions for identified failures', impact: { stakeholderConfidence: 12, crisisControl: 8, teamResilience: -10 }, risk: 0.40, stakeholderReactions: { KEY_INVESTOR: 18, BOARD_CHAIR: 12, HR_HEAD: -15 } },
      { id: 'D', text: 'System and process focus rather than individual blame', impact: { teamResilience: 12, strategicClarity: 10, stakeholderConfidence: -3 }, risk: 0.25, stakeholderReactions: { HR_HEAD: 18, UNION_REP: 15, KEY_INVESTOR: -8 } },
      { id: 'E', text: 'Legal protection strategy with controlled disclosure', impact: { resourceReserves: 10, crisisControl: 8, reputationHealth: -8 }, risk: 0.35, stakeholderReactions: { LEGAL_COUNSEL: 20, CFO: 12, MEDIA_CONTACT: -12 } },
      { id: 'F', text: 'Forward-looking narrative emphasizing improvements', impact: { reputationHealth: 10, communicationEffectiveness: 12, strategicClarity: 5 }, risk: 0.25, stakeholderReactions: { COMMS_VP: 18, CEO: 12, REGULATOR: -5 } }
    ]
  },
  {
    id: 11,
    phase: 'RESPONSE',
    title: 'Financial Stabilization',
    scenario: 'The crisis is impacting financial performance. Markets are reacting. You need to stabilize finances while funding the crisis response.',
    stakeholderFocus: ['CFO', 'KEY_INVESTOR', 'BOARD_CHAIR'],
    options: [
      { id: 'A', text: 'Comprehensive financial communication to markets', impact: { stakeholderConfidence: 15, resourceReserves: 8, communicationEffectiveness: 5 }, risk: 0.25, stakeholderReactions: { KEY_INVESTOR: 18, CFO: 15, BOARD_CHAIR: 10 } },
      { id: 'B', text: 'Emergency cost management program', impact: { resourceReserves: 15, operationalContinuity: -5, teamResilience: -5 }, risk: 0.30, stakeholderReactions: { CFO: 18, KEY_INVESTOR: 12, UNION_REP: -12 } },
      { id: 'C', text: 'Strategic asset review for potential monetization', impact: { resourceReserves: 12, strategicClarity: 5, stakeholderConfidence: -3 }, risk: 0.35, stakeholderReactions: { CFO: 15, STRATEGY_HEAD: 10, KEY_INVESTOR: -5 } },
      { id: 'D', text: 'Stakeholder value protection commitment', impact: { stakeholderConfidence: 12, reputationHealth: 10, resourceReserves: -5 }, risk: 0.25, stakeholderReactions: { KEY_INVESTOR: 18, BOARD_CHAIR: 15, CFO: 5 } },
      { id: 'E', text: 'Banking relationship reinforcement for liquidity', impact: { resourceReserves: 15, crisisControl: 8, stakeholderConfidence: 5 }, risk: 0.30, stakeholderReactions: { CFO: 18, CEO: 12, BOARD_CHAIR: 10 } },
      { id: 'F', text: 'Revenue protection initiatives for key accounts', impact: { operationalContinuity: 12, stakeholderConfidence: 8, resourceReserves: 5 }, risk: 0.25, stakeholderReactions: { MAJOR_CUSTOMER: 18, CFO: 12, COO: 10 } }
    ]
  },
  {
    id: 12,
    phase: 'RESPONSE',
    title: 'Response Assessment',
    scenario: 'Time to assess response effectiveness. What is working and what needs adjustment? Your adaptation will determine recovery success.',
    stakeholderFocus: ['CRISIS_LEAD', 'STRATEGY_HEAD', 'CEO'],
    options: [
      { id: 'A', text: 'Formal response review with stakeholder feedback', impact: { strategicClarity: 15, crisisControl: 10, communicationEffectiveness: 5 }, risk: 0.20, stakeholderReactions: { CRISIS_LEAD: 18, STRATEGY_HEAD: 15, CEO: 10 } },
      { id: 'B', text: 'Rapid iteration based on real-time metrics', impact: { crisisControl: 12, operationalContinuity: 10, strategicClarity: 5 }, risk: 0.25, stakeholderReactions: { COO: 15, CRISIS_LEAD: 12, SECURITY_CHIEF: 10 } },
      { id: 'C', text: 'External benchmarking against crisis best practices', impact: { strategicClarity: 12, reputationHealth: 8, resourceReserves: -5 }, risk: 0.25, stakeholderReactions: { STRATEGY_HEAD: 18, BOARD_CHAIR: 12, CFO: -5 } },
      { id: 'D', text: 'Team retrospective for frontline insights', impact: { teamResilience: 12, crisisControl: 10, strategicClarity: 8 }, risk: 0.20, stakeholderReactions: { HR_HEAD: 15, CRISIS_LEAD: 12, UNION_REP: 10 } },
      { id: 'E', text: 'Scenario planning for potential escalation paths', impact: { strategicClarity: 15, crisisControl: 8, resourceReserves: -3 }, risk: 0.25, stakeholderReactions: { STRATEGY_HEAD: 18, CEO: 12, CRISIS_LEAD: 10 } },
      { id: 'F', text: 'Quick wins identification to build momentum', impact: { stakeholderConfidence: 12, teamResilience: 10, reputationHealth: 5 }, risk: 0.20, stakeholderReactions: { CEO: 15, COMMS_VP: 12, HR_HEAD: 10 } }
    ]
  },

  // Phase 3: Recovery (Rounds 13-18)
  {
    id: 13,
    phase: 'RECOVERY',
    title: 'Recovery Launch',
    scenario: 'The acute crisis is stabilizing. Now begins the recovery journey. Your recovery strategy must rebuild while preventing recurrence.',
    stakeholderFocus: ['CEO', 'STRATEGY_HEAD', 'BOARD_CHAIR'],
    options: [
      { id: 'A', text: 'Comprehensive recovery program with transformation elements', impact: { strategicClarity: 15, stakeholderConfidence: 10, crisisControl: 8 }, risk: 0.30, stakeholderReactions: { CEO: 18, STRATEGY_HEAD: 18, BOARD_CHAIR: 12 } },
      { id: 'B', text: 'Phased recovery focusing on quick stability', impact: { operationalContinuity: 15, crisisControl: 10, teamResilience: 5 }, risk: 0.20, stakeholderReactions: { COO: 18, CFO: 12, CRISIS_LEAD: 10 } },
      { id: 'C', text: 'Stakeholder-centric recovery prioritizing trust', impact: { stakeholderConfidence: 15, reputationHealth: 12, operationalContinuity: 3 }, risk: 0.25, stakeholderReactions: { MAJOR_CUSTOMER: 18, KEY_INVESTOR: 15, COMMS_VP: 12 } },
      { id: 'D', text: 'Resource-efficient recovery with minimal investment', impact: { resourceReserves: 12, operationalContinuity: 8, strategicClarity: -5 }, risk: 0.30, stakeholderReactions: { CFO: 18, BOARD_CHAIR: 10, STRATEGY_HEAD: -10 } },
      { id: 'E', text: 'Innovation-driven recovery to emerge stronger', impact: { strategicClarity: 12, reputationHealth: 10, resourceReserves: -8 }, risk: 0.35, stakeholderReactions: { STRATEGY_HEAD: 18, CEO: 15, CFO: -8 } },
      { id: 'F', text: 'Culture and capability recovery focus', impact: { teamResilience: 15, operationalContinuity: 10, stakeholderConfidence: 3 }, risk: 0.25, stakeholderReactions: { HR_HEAD: 18, UNION_REP: 15, CEO: 10 } }
    ]
  },
  {
    id: 14,
    phase: 'RECOVERY',
    title: 'Reputation Rebuild',
    scenario: 'The crisis has damaged your reputation. Rebuilding trust with customers, markets, and the public requires careful, authentic effort.',
    stakeholderFocus: ['COMMS_VP', 'MEDIA_CONTACT', 'MAJOR_CUSTOMER'],
    options: [
      { id: 'A', text: 'Proactive transparency campaign with regular updates', impact: { reputationHealth: 15, communicationEffectiveness: 12, stakeholderConfidence: 8 }, risk: 0.25, stakeholderReactions: { COMMS_VP: 18, MEDIA_CONTACT: 15, MAJOR_CUSTOMER: 10 } },
      { id: 'B', text: 'Customer remediation and loyalty program', impact: { reputationHealth: 12, stakeholderConfidence: 15, resourceReserves: -8 }, risk: 0.25, stakeholderReactions: { MAJOR_CUSTOMER: 20, COMMS_VP: 12, CFO: -8 } },
      { id: 'C', text: 'Third-party validation and certification', impact: { reputationHealth: 12, stakeholderConfidence: 10, resourceReserves: -5 }, risk: 0.25, stakeholderReactions: { REGULATOR: 15, KEY_INVESTOR: 12, MAJOR_CUSTOMER: 10 } },
      { id: 'D', text: 'Executive visibility and accountability demonstration', impact: { stakeholderConfidence: 12, reputationHealth: 10, communicationEffectiveness: 8 }, risk: 0.30, stakeholderReactions: { CEO: 15, BOARD_CHAIR: 12, MEDIA_CONTACT: 15 } },
      { id: 'E', text: 'Community investment and social responsibility push', impact: { reputationHealth: 12, stakeholderConfidence: 8, resourceReserves: -8 }, risk: 0.25, stakeholderReactions: { COMMS_VP: 15, UNION_REP: 12, CFO: -10 } },
      { id: 'F', text: 'Actions speak louder - focus on delivery not messaging', impact: { operationalContinuity: 12, reputationHealth: 8, communicationEffectiveness: -3 }, risk: 0.25, stakeholderReactions: { COO: 18, MAJOR_CUSTOMER: 12, COMMS_VP: -8 } }
    ]
  },
  {
    id: 15,
    phase: 'RECOVERY',
    title: 'Team Recovery',
    scenario: 'Your people are exhausted from the crisis. Some may leave. Rebuilding team strength and morale is critical for sustained recovery.',
    stakeholderFocus: ['HR_HEAD', 'UNION_REP', 'COO'],
    options: [
      { id: 'A', text: 'Comprehensive wellbeing and recovery program', impact: { teamResilience: 15, operationalContinuity: 8, resourceReserves: -8 }, risk: 0.25, stakeholderReactions: { HR_HEAD: 20, UNION_REP: 18, CEO: 10 } },
      { id: 'B', text: 'Recognition and reward for crisis response heroes', impact: { teamResilience: 12, stakeholderConfidence: 8, resourceReserves: -5 }, risk: 0.20, stakeholderReactions: { HR_HEAD: 18, UNION_REP: 12, CFO: -3 } },
      { id: 'C', text: 'Career development and growth opportunities', impact: { teamResilience: 12, operationalContinuity: 10, strategicClarity: 5 }, risk: 0.20, stakeholderReactions: { HR_HEAD: 15, CEO: 12, STRATEGY_HEAD: 10 } },
      { id: 'D', text: 'Strategic hiring to fill gaps and bring fresh energy', impact: { operationalContinuity: 12, teamResilience: 5, resourceReserves: -8 }, risk: 0.30, stakeholderReactions: { COO: 15, HR_HEAD: 10, CFO: -8 } },
      { id: 'E', text: 'Team restructuring for post-crisis efficiency', impact: { operationalContinuity: 15, resourceReserves: 8, teamResilience: -10 }, risk: 0.40, stakeholderReactions: { CFO: 18, COO: 12, UNION_REP: -18 } },
      { id: 'F', text: 'Leadership development for crisis-tested managers', impact: { teamResilience: 12, strategicClarity: 10, operationalContinuity: 5 }, risk: 0.20, stakeholderReactions: { HR_HEAD: 18, CEO: 15, CRISIS_LEAD: 10 } }
    ]
  },
  {
    id: 16,
    phase: 'RECOVERY',
    title: 'Operational Restoration',
    scenario: 'Operations need to return to normal - or better. Restoring full capability while implementing improvements requires careful orchestration.',
    stakeholderFocus: ['COO', 'SECURITY_CHIEF', 'CRISIS_LEAD'],
    options: [
      { id: 'A', text: 'Phased return to normal operations with checkpoints', impact: { operationalContinuity: 15, crisisControl: 10, teamResilience: 5 }, risk: 0.20, stakeholderReactions: { COO: 18, CRISIS_LEAD: 15, CEO: 10 } },
      { id: 'B', text: 'Accelerated restoration with parallel improvement initiatives', impact: { operationalContinuity: 12, strategicClarity: 10, resourceReserves: -8 }, risk: 0.35, stakeholderReactions: { STRATEGY_HEAD: 15, COO: 12, CFO: -8 } },
      { id: 'C', text: 'Resilience-first restoration with redundancy', impact: { crisisControl: 15, operationalContinuity: 10, resourceReserves: -10 }, risk: 0.30, stakeholderReactions: { SECURITY_CHIEF: 18, CRISIS_LEAD: 15, CFO: -10 } },
      { id: 'D', text: 'Customer-demand driven restoration prioritization', impact: { operationalContinuity: 12, stakeholderConfidence: 10, reputationHealth: 8 }, risk: 0.25, stakeholderReactions: { MAJOR_CUSTOMER: 18, COO: 15, COMMS_VP: 10 } },
      { id: 'E', text: 'Technology modernization during restoration', impact: { operationalContinuity: 10, strategicClarity: 12, resourceReserves: -12 }, risk: 0.35, stakeholderReactions: { STRATEGY_HEAD: 18, SECURITY_CHIEF: 12, CFO: -12 } },
      { id: 'F', text: 'Minimal viable operations with lean approach', impact: { resourceReserves: 12, operationalContinuity: 8, teamResilience: -3 }, risk: 0.25, stakeholderReactions: { CFO: 18, COO: 10, UNION_REP: -8 } }
    ]
  },
  {
    id: 17,
    phase: 'RECOVERY',
    title: 'Financial Recovery',
    scenario: 'The financial impact of the crisis must be addressed. Recovery requires rebuilding financial strength while investing in improvements.',
    stakeholderFocus: ['CFO', 'KEY_INVESTOR', 'BOARD_CHAIR'],
    options: [
      { id: 'A', text: 'Balanced financial recovery with strategic investments', impact: { resourceReserves: 12, strategicClarity: 10, stakeholderConfidence: 8 }, risk: 0.25, stakeholderReactions: { CFO: 15, STRATEGY_HEAD: 12, KEY_INVESTOR: 10 } },
      { id: 'B', text: 'Aggressive cost optimization for rapid recovery', impact: { resourceReserves: 18, operationalContinuity: -5, teamResilience: -8 }, risk: 0.35, stakeholderReactions: { CFO: 18, KEY_INVESTOR: 15, UNION_REP: -15 } },
      { id: 'C', text: 'Revenue acceleration initiatives', impact: { resourceReserves: 10, operationalContinuity: 12, stakeholderConfidence: 8 }, risk: 0.30, stakeholderReactions: { COO: 15, MAJOR_CUSTOMER: 12, CFO: 10 } },
      { id: 'D', text: 'Capital structure optimization', impact: { resourceReserves: 15, stakeholderConfidence: 8, crisisControl: 5 }, risk: 0.35, stakeholderReactions: { CFO: 18, KEY_INVESTOR: 12, BOARD_CHAIR: 10 } },
      { id: 'E', text: 'Investor relations recovery campaign', impact: { stakeholderConfidence: 15, reputationHealth: 10, resourceReserves: 5 }, risk: 0.25, stakeholderReactions: { KEY_INVESTOR: 18, BOARD_CHAIR: 15, CFO: 10 } },
      { id: 'F', text: 'Conservative financial management with reserves build', impact: { resourceReserves: 15, crisisControl: 8, strategicClarity: -5 }, risk: 0.20, stakeholderReactions: { CFO: 18, LEGAL_COUNSEL: 12, STRATEGY_HEAD: -8 } }
    ]
  },
  {
    id: 18,
    phase: 'RECOVERY',
    title: 'Recovery Momentum',
    scenario: 'Recovery is progressing but momentum can be lost. Sustaining progress while addressing remaining challenges requires leadership focus.',
    stakeholderFocus: ['CEO', 'CRISIS_LEAD', 'STRATEGY_HEAD'],
    options: [
      { id: 'A', text: 'Recovery metrics dashboard with public accountability', impact: { stakeholderConfidence: 15, communicationEffectiveness: 10, crisisControl: 8 }, risk: 0.25, stakeholderReactions: { CEO: 15, COMMS_VP: 18, KEY_INVESTOR: 12 } },
      { id: 'B', text: 'Quick win celebration to build confidence', impact: { teamResilience: 12, stakeholderConfidence: 10, reputationHealth: 8 }, risk: 0.20, stakeholderReactions: { HR_HEAD: 15, CEO: 12, UNION_REP: 10 } },
      { id: 'C', text: 'Future vision communication to inspire progress', impact: { strategicClarity: 15, stakeholderConfidence: 10, teamResilience: 8 }, risk: 0.25, stakeholderReactions: { CEO: 18, STRATEGY_HEAD: 15, BOARD_CHAIR: 10 } },
      { id: 'D', text: 'Remaining risk mitigation priority', impact: { crisisControl: 15, strategicClarity: 10, operationalContinuity: 5 }, risk: 0.25, stakeholderReactions: { CRISIS_LEAD: 18, SECURITY_CHIEF: 15, LEGAL_COUNSEL: 10 } },
      { id: 'E', text: 'Stakeholder re-engagement campaign', impact: { stakeholderConfidence: 12, reputationHealth: 12, communicationEffectiveness: 8 }, risk: 0.25, stakeholderReactions: { COMMS_VP: 18, MAJOR_CUSTOMER: 15, KEY_INVESTOR: 12 } },
      { id: 'F', text: 'Operational excellence push for sustainable performance', impact: { operationalContinuity: 15, resourceReserves: 8, teamResilience: 5 }, risk: 0.25, stakeholderReactions: { COO: 18, CFO: 12, CEO: 10 } }
    ]
  },

  // Phase 4: Renewal (Rounds 19-24)
  {
    id: 19,
    phase: 'RENEWAL',
    title: 'Transformation Vision',
    scenario: 'The crisis revealed organizational weaknesses. Now is the opportunity to transform. Define the vision for a stronger future.',
    stakeholderFocus: ['CEO', 'BOARD_CHAIR', 'STRATEGY_HEAD'],
    options: [
      { id: 'A', text: 'Bold transformation agenda emerging from crisis lessons', impact: { strategicClarity: 18, stakeholderConfidence: 10, resourceReserves: -8 }, risk: 0.35, stakeholderReactions: { CEO: 18, STRATEGY_HEAD: 18, BOARD_CHAIR: 12 } },
      { id: 'B', text: 'Incremental improvement building on crisis response', impact: { operationalContinuity: 15, crisisControl: 10, strategicClarity: 5 }, risk: 0.20, stakeholderReactions: { COO: 18, CFO: 15, CRISIS_LEAD: 10 } },
      { id: 'C', text: 'Stakeholder-informed vision co-creation', impact: { stakeholderConfidence: 15, strategicClarity: 12, communicationEffectiveness: 8 }, risk: 0.25, stakeholderReactions: { MAJOR_CUSTOMER: 15, KEY_INVESTOR: 12, HR_HEAD: 15 } },
      { id: 'D', text: 'Technology and capability-led renewal', impact: { strategicClarity: 15, operationalContinuity: 10, resourceReserves: -10 }, risk: 0.30, stakeholderReactions: { STRATEGY_HEAD: 18, SECURITY_CHIEF: 12, CFO: -8 } },
      { id: 'E', text: 'Culture transformation as foundation for renewal', impact: { teamResilience: 15, strategicClarity: 10, stakeholderConfidence: 8 }, risk: 0.30, stakeholderReactions: { HR_HEAD: 18, CEO: 15, UNION_REP: 12 } },
      { id: 'F', text: 'Market repositioning for competitive advantage', impact: { strategicClarity: 12, reputationHealth: 10, stakeholderConfidence: 8 }, risk: 0.30, stakeholderReactions: { STRATEGY_HEAD: 15, MAJOR_CUSTOMER: 12, KEY_INVESTOR: 10 } }
    ]
  },
  {
    id: 20,
    phase: 'RENEWAL',
    title: 'Resilience Building',
    scenario: 'Never again. Building organizational resilience to prevent future crises and respond better if they occur is essential.',
    stakeholderFocus: ['CRISIS_LEAD', 'SECURITY_CHIEF', 'COO'],
    options: [
      { id: 'A', text: 'Enterprise risk management transformation', impact: { crisisControl: 18, strategicClarity: 10, resourceReserves: -8 }, risk: 0.30, stakeholderReactions: { CRISIS_LEAD: 18, SECURITY_CHIEF: 15, BOARD_CHAIR: 12 } },
      { id: 'B', text: 'Crisis response capability institutionalization', impact: { crisisControl: 15, teamResilience: 10, operationalContinuity: 8 }, risk: 0.25, stakeholderReactions: { CRISIS_LEAD: 18, COO: 12, HR_HEAD: 10 } },
      { id: 'C', text: 'Scenario planning and simulation program', impact: { crisisControl: 12, strategicClarity: 12, teamResilience: 8 }, risk: 0.25, stakeholderReactions: { STRATEGY_HEAD: 15, CRISIS_LEAD: 15, CEO: 10 } },
      { id: 'D', text: 'Technology investment for early warning systems', impact: { crisisControl: 15, operationalContinuity: 8, resourceReserves: -10 }, risk: 0.30, stakeholderReactions: { SECURITY_CHIEF: 18, CRISIS_LEAD: 12, CFO: -8 } },
      { id: 'E', text: 'Supply chain and operational redundancy', impact: { operationalContinuity: 15, crisisControl: 10, resourceReserves: -8 }, risk: 0.30, stakeholderReactions: { COO: 18, MAJOR_CUSTOMER: 12, CFO: -5 } },
      { id: 'F', text: 'Stakeholder relationship deepening for crisis support', impact: { stakeholderConfidence: 15, crisisControl: 8, communicationEffectiveness: 10 }, risk: 0.20, stakeholderReactions: { KEY_INVESTOR: 15, MAJOR_CUSTOMER: 15, COMMS_VP: 12 } }
    ]
  },
  {
    id: 21,
    phase: 'RENEWAL',
    title: 'Culture Evolution',
    scenario: 'Crisis revealed cultural strengths and weaknesses. Evolving culture to embed lessons learned ensures lasting improvement.',
    stakeholderFocus: ['HR_HEAD', 'CEO', 'UNION_REP'],
    options: [
      { id: 'A', text: 'Values refresh incorporating crisis lessons', impact: { teamResilience: 15, stakeholderConfidence: 10, culturalShift: 12 }, risk: 0.25, stakeholderReactions: { HR_HEAD: 18, CEO: 15, COMMS_VP: 10 } },
      { id: 'B', text: 'Leadership development program enhancement', impact: { teamResilience: 12, strategicClarity: 10, operationalContinuity: 8 }, risk: 0.20, stakeholderReactions: { HR_HEAD: 15, CEO: 12, CRISIS_LEAD: 10 } },
      { id: 'C', text: 'Recognition system for crisis-valued behaviors', impact: { teamResilience: 12, stakeholderConfidence: 8, communicationEffectiveness: 5 }, risk: 0.20, stakeholderReactions: { HR_HEAD: 18, UNION_REP: 15, CEO: 10 } },
      { id: 'D', text: 'Psychological safety and speaking up culture', impact: { teamResilience: 15, crisisControl: 10, communicationEffectiveness: 8 }, risk: 0.25, stakeholderReactions: { HR_HEAD: 18, UNION_REP: 18, LEGAL_COUNSEL: 5 } },
      { id: 'E', text: 'Cross-functional collaboration enhancement', impact: { operationalContinuity: 12, teamResilience: 10, crisisControl: 8 }, risk: 0.20, stakeholderReactions: { COO: 15, HR_HEAD: 12, CRISIS_LEAD: 10 } },
      { id: 'F', text: 'Performance management evolution for resilience', impact: { teamResilience: 10, operationalContinuity: 10, strategicClarity: 8 }, risk: 0.25, stakeholderReactions: { HR_HEAD: 15, CFO: 10, CEO: 10 } }
    ]
  },
  {
    id: 22,
    phase: 'RENEWAL',
    title: 'Stakeholder Relationships',
    scenario: 'Rebuilding and strengthening stakeholder relationships for the long term. Trust, once damaged, requires sustained effort to restore.',
    stakeholderFocus: ['COMMS_VP', 'KEY_INVESTOR', 'MAJOR_CUSTOMER'],
    options: [
      { id: 'A', text: 'Strategic partnership deepening with key stakeholders', impact: { stakeholderConfidence: 15, reputationHealth: 12, strategicClarity: 8 }, risk: 0.25, stakeholderReactions: { KEY_INVESTOR: 18, MAJOR_CUSTOMER: 18, CEO: 12 } },
      { id: 'B', text: 'Transparent ongoing communication commitment', impact: { communicationEffectiveness: 15, stakeholderConfidence: 10, reputationHealth: 8 }, risk: 0.20, stakeholderReactions: { COMMS_VP: 18, MEDIA_CONTACT: 15, KEY_INVESTOR: 10 } },
      { id: 'C', text: 'Stakeholder advisory and feedback mechanisms', impact: { stakeholderConfidence: 12, strategicClarity: 10, reputationHealth: 8 }, risk: 0.25, stakeholderReactions: { MAJOR_CUSTOMER: 15, KEY_INVESTOR: 12, STRATEGY_HEAD: 10 } },
      { id: 'D', text: 'Joint value creation initiatives with partners', impact: { stakeholderConfidence: 12, operationalContinuity: 10, reputationHealth: 8 }, risk: 0.30, stakeholderReactions: { MAJOR_CUSTOMER: 18, COO: 12, STRATEGY_HEAD: 10 } },
      { id: 'E', text: 'Community and social impact investment', impact: { reputationHealth: 15, stakeholderConfidence: 8, resourceReserves: -8 }, risk: 0.25, stakeholderReactions: { COMMS_VP: 18, UNION_REP: 15, CFO: -8 } },
      { id: 'F', text: 'Regulatory relationship strengthening', impact: { crisisControl: 12, reputationHealth: 10, stakeholderConfidence: 8 }, risk: 0.25, stakeholderReactions: { REGULATOR: 18, LEGAL_COUNSEL: 15, BOARD_CHAIR: 10 } }
    ]
  },
  {
    id: 23,
    phase: 'RENEWAL',
    title: 'Sustainable Performance',
    scenario: 'Establishing sustainable performance requires balancing short-term recovery with long-term health. Build lasting organizational strength.',
    stakeholderFocus: ['CFO', 'STRATEGY_HEAD', 'BOARD_CHAIR'],
    options: [
      { id: 'A', text: 'Balanced scorecard with resilience metrics', impact: { strategicClarity: 15, crisisControl: 10, stakeholderConfidence: 8 }, risk: 0.25, stakeholderReactions: { STRATEGY_HEAD: 18, CEO: 12, BOARD_CHAIR: 10 } },
      { id: 'B', text: 'Investment in growth opportunities', impact: { strategicClarity: 12, stakeholderConfidence: 10, resourceReserves: -10 }, risk: 0.35, stakeholderReactions: { STRATEGY_HEAD: 18, KEY_INVESTOR: 12, CFO: -8 } },
      { id: 'C', text: 'Operational excellence program institutionalization', impact: { operationalContinuity: 15, resourceReserves: 10, crisisControl: 8 }, risk: 0.20, stakeholderReactions: { COO: 18, CFO: 15, CEO: 10 } },
      { id: 'D', text: 'Talent and capability investment for future', impact: { teamResilience: 15, strategicClarity: 10, resourceReserves: -8 }, risk: 0.25, stakeholderReactions: { HR_HEAD: 18, CEO: 12, CFO: -5 } },
      { id: 'E', text: 'Innovation and adaptation culture embedding', impact: { strategicClarity: 12, teamResilience: 10, operationalContinuity: 8 }, risk: 0.25, stakeholderReactions: { STRATEGY_HEAD: 15, HR_HEAD: 12, CEO: 12 } },
      { id: 'F', text: 'Financial discipline and reserves building', impact: { resourceReserves: 18, crisisControl: 10, strategicClarity: 5 }, risk: 0.20, stakeholderReactions: { CFO: 18, BOARD_CHAIR: 15, KEY_INVESTOR: 12 } }
    ]
  },
  {
    id: 24,
    phase: 'RENEWAL',
    title: 'Legacy and Future',
    scenario: 'Final decisions to cement the organization\'s emergence from crisis. Your choices will define the legacy of this experience.',
    stakeholderFocus: ['CEO', 'BOARD_CHAIR', 'KEY_INVESTOR'],
    options: [
      { id: 'A', text: 'Transformation story as competitive advantage', impact: { reputationHealth: 15, stakeholderConfidence: 12, strategicClarity: 10 }, risk: 0.25, stakeholderReactions: { CEO: 18, COMMS_VP: 18, KEY_INVESTOR: 12 } },
      { id: 'B', text: 'Industry leadership in crisis preparedness', impact: { crisisControl: 15, reputationHealth: 12, stakeholderConfidence: 8 }, risk: 0.25, stakeholderReactions: { CRISIS_LEAD: 18, BOARD_CHAIR: 15, REGULATOR: 12 } },
      { id: 'C', text: 'Sustained operational excellence commitment', impact: { operationalContinuity: 15, resourceReserves: 10, teamResilience: 8 }, risk: 0.20, stakeholderReactions: { COO: 18, CFO: 15, CEO: 10 } },
      { id: 'D', text: 'People-first organizational promise', impact: { teamResilience: 15, stakeholderConfidence: 12, reputationHealth: 8 }, risk: 0.25, stakeholderReactions: { HR_HEAD: 18, UNION_REP: 18, CEO: 12 } },
      { id: 'E', text: 'Stakeholder value creation commitment', impact: { stakeholderConfidence: 15, reputationHealth: 10, resourceReserves: 8 }, risk: 0.25, stakeholderReactions: { KEY_INVESTOR: 18, MAJOR_CUSTOMER: 15, BOARD_CHAIR: 12 } },
      { id: 'F', text: 'Balanced excellence across all dimensions', impact: { strategicClarity: 12, operationalContinuity: 10, stakeholderConfidence: 10 }, risk: 0.20, stakeholderReactions: { CEO: 15, BOARD_CHAIR: 15, STRATEGY_HEAD: 12 } }
    ]
  }
];

export const PHASE_DESCRIPTIONS = {
  SHOCK: {
    name: 'Shock',
    description: 'Navigate the immediate crisis impact and initial response',
    rounds: [1, 2, 3, 4, 5, 6]
  },
  RESPONSE: {
    name: 'Response',
    description: 'Execute containment strategies and stabilize operations',
    rounds: [7, 8, 9, 10, 11, 12]
  },
  RECOVERY: {
    name: 'Recovery',
    description: 'Rebuild capabilities and restore stakeholder confidence',
    rounds: [13, 14, 15, 16, 17, 18]
  },
  RENEWAL: {
    name: 'Renewal',
    description: 'Transform and emerge stronger from the crisis',
    rounds: [19, 20, 21, 22, 23, 24]
  }
};

export const getRoundById = (id) => ROUNDS.find(r => r.id === id);
export const getRoundsByPhase = (phase) => ROUNDS.filter(r => r.phase === phase);
export const getAllRounds = () => ROUNDS;
