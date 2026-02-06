// Innovation Lab Rounds - 24 rounds across 4 phases
export const ROUNDS = [
  // Phase 1: Innovation Foundation (1-6)
  { id: 1, phase: 'FOUNDATION', title: 'Innovation Strategy', scenario: 'Define innovation lab strategy and focus areas.', stakeholderFocus: ['CEO', 'CTO', 'RD_DIRECTOR'], options: [
    { id: 'A', text: 'Pursue breakthrough moonshot innovations', impact: { innovationPipeline: 12, researchQuality: 8, resourceEfficiency: -5 }, risk: 0.40, stakeholderReactions: { CTO: 15, RD_DIRECTOR: 12, CFO: -10 } },
    { id: 'B', text: 'Focus on incremental product improvements', impact: { marketAlignment: 12, resourceEfficiency: 10, innovationPipeline: -3 }, risk: 0.15, stakeholderReactions: { PRODUCT_VP: 18, BUSINESS_UNIT: 15, LEAD_RESEARCHER: -8 } },
    { id: 'C', text: 'Build open innovation ecosystem', impact: { partnerEcosystem: 15, innovationPipeline: 8, intellectualProperty: -5 }, risk: 0.30, stakeholderReactions: { STARTUP_PARTNER: 18, INNOVATION_HEAD: 12, IP_COUNSEL: -10 } },
    { id: 'D', text: 'Balanced portfolio approach', impact: { innovationPipeline: 8, marketAlignment: 8, researchQuality: 5 }, risk: 0.20, stakeholderReactions: { CEO: 15, CFO: 10, CTO: 8 } },
    { id: 'E', text: 'Acquire innovation through M&A', impact: { innovationPipeline: 10, teamCapability: 5, resourceEfficiency: -10 }, risk: 0.45, stakeholderReactions: { CFO: -8, VENTURE_PARTNER: 15, BOARD_TECH: 8 } },
    { id: 'F', text: 'Customer-driven innovation focus', impact: { marketAlignment: 15, innovationPipeline: 5, researchQuality: -3 }, risk: 0.20, stakeholderReactions: { PRODUCT_VP: 18, BUSINESS_UNIT: 15, RD_DIRECTOR: -5 } }
  ]},
  { id: 2, phase: 'FOUNDATION', title: 'Team Structure', scenario: 'Organize innovation team for maximum effectiveness.', stakeholderFocus: ['RD_DIRECTOR', 'TALENT_HEAD', 'LEAD_RESEARCHER'], options: [
    { id: 'A', text: 'Cross-functional innovation squads', impact: { teamCapability: 12, innovationPipeline: 8, resourceEfficiency: -3 }, risk: 0.25, stakeholderReactions: { INNOVATION_HEAD: 15, LEAD_RESEARCHER: 10, BUSINESS_UNIT: -5 } },
    { id: 'B', text: 'Deep expertise research groups', impact: { researchQuality: 15, intellectualProperty: 10, marketAlignment: -5 }, risk: 0.30, stakeholderReactions: { LEAD_RESEARCHER: 18, UNIVERSITY_PARTNER: 12, PRODUCT_VP: -8 } },
    { id: 'C', text: 'Agile innovation cells', impact: { innovationPipeline: 10, teamCapability: 10, researchQuality: -3 }, risk: 0.25, stakeholderReactions: { INNOVATION_HEAD: 15, CTO: 12, LEAD_RESEARCHER: -5 } },
    { id: 'D', text: 'Hybrid structure with core and flex teams', impact: { teamCapability: 10, resourceEfficiency: 8, innovationPipeline: 5 }, risk: 0.20, stakeholderReactions: { RD_DIRECTOR: 15, TALENT_HEAD: 12, CFO: 8 } },
    { id: 'E', text: 'External talent network model', impact: { partnerEcosystem: 12, teamCapability: 5, intellectualProperty: -8 }, risk: 0.35, stakeholderReactions: { STARTUP_PARTNER: 15, IP_COUNSEL: -15, INNOVATION_HEAD: 10 } },
    { id: 'F', text: 'Traditional functional organization', impact: { resourceEfficiency: 10, researchQuality: 5, innovationPipeline: -5 }, risk: 0.15, stakeholderReactions: { CFO: 15, LEAD_RESEARCHER: 8, INNOVATION_HEAD: -10 } }
  ]},
  { id: 3, phase: 'FOUNDATION', title: 'Funding Model', scenario: 'Establish sustainable innovation funding approach.', stakeholderFocus: ['CFO', 'CEO', 'BOARD_TECH'], options: [
    { id: 'A', text: 'Dedicated innovation budget with ring-fencing', impact: { executiveSupport: 12, resourceEfficiency: 8, innovationPipeline: 5 }, risk: 0.25, stakeholderReactions: { CFO: 10, CEO: 12, BOARD_TECH: 8 } },
    { id: 'B', text: 'Stage-gate funding with milestone releases', impact: { resourceEfficiency: 15, innovationPipeline: -3, executiveSupport: 5 }, risk: 0.20, stakeholderReactions: { CFO: 18, INNOVATION_HEAD: -5, RD_DIRECTOR: 5 } },
    { id: 'C', text: 'Internal VC model with pitch competitions', impact: { innovationPipeline: 12, teamCapability: 8, resourceEfficiency: -5 }, risk: 0.30, stakeholderReactions: { VENTURE_PARTNER: 18, INNOVATION_HEAD: 15, CFO: -5 } },
    { id: 'D', text: 'Business unit co-investment model', impact: { marketAlignment: 12, executiveSupport: 8, innovationPipeline: -3 }, risk: 0.25, stakeholderReactions: { BUSINESS_UNIT: 15, PRODUCT_VP: 12, RD_DIRECTOR: -5 } },
    { id: 'E', text: 'External partnership funding', impact: { partnerEcosystem: 12, resourceEfficiency: 10, intellectualProperty: -8 }, risk: 0.35, stakeholderReactions: { STARTUP_PARTNER: 15, IP_COUNSEL: -12, CFO: 10 } },
    { id: 'F', text: 'Flexible allocation based on opportunities', impact: { innovationPipeline: 8, resourceEfficiency: 5, executiveSupport: -5 }, risk: 0.30, stakeholderReactions: { INNOVATION_HEAD: 12, CFO: -10, CEO: 5 } }
  ]},
  { id: 4, phase: 'FOUNDATION', title: 'IP Strategy', scenario: 'Define intellectual property approach for innovations.', stakeholderFocus: ['IP_COUNSEL', 'RD_DIRECTOR', 'LEAD_RESEARCHER'], options: [
    { id: 'A', text: 'Aggressive patent portfolio building', impact: { intellectualProperty: 15, researchQuality: 5, resourceEfficiency: -8 }, risk: 0.25, stakeholderReactions: { IP_COUNSEL: 18, LEAD_RESEARCHER: 10, CFO: -8 } },
    { id: 'B', text: 'Trade secret and first-mover strategy', impact: { marketAlignment: 10, intellectualProperty: 5, innovationPipeline: 8 }, risk: 0.30, stakeholderReactions: { PRODUCT_VP: 15, IP_COUNSEL: -5, CTO: 10 } },
    { id: 'C', text: 'Open source with strategic patents', impact: { partnerEcosystem: 12, innovationPipeline: 8, intellectualProperty: -5 }, risk: 0.35, stakeholderReactions: { EMERGING_TECH: 18, STARTUP_PARTNER: 15, IP_COUNSEL: -10 } },
    { id: 'D', text: 'Defensive patent strategy', impact: { intellectualProperty: 10, resourceEfficiency: 8, innovationPipeline: 3 }, risk: 0.20, stakeholderReactions: { IP_COUNSEL: 15, CFO: 10, BOARD_TECH: 8 } },
    { id: 'E', text: 'Cross-licensing partnerships', impact: { partnerEcosystem: 15, intellectualProperty: 8, marketAlignment: 5 }, risk: 0.30, stakeholderReactions: { UNIVERSITY_PARTNER: 18, STARTUP_PARTNER: 12, IP_COUNSEL: 5 } },
    { id: 'F', text: 'Minimal IP focus for speed', impact: { innovationPipeline: 10, intellectualProperty: -10, marketAlignment: 5 }, risk: 0.40, stakeholderReactions: { EMERGING_TECH: 15, IP_COUNSEL: -18, BOARD_TECH: -8 } }
  ]},
  { id: 5, phase: 'FOUNDATION', title: 'Partner Ecosystem', scenario: 'Build external innovation partnerships.', stakeholderFocus: ['INNOVATION_HEAD', 'STARTUP_PARTNER', 'UNIVERSITY_PARTNER'], options: [
    { id: 'A', text: 'University research partnerships', impact: { researchQuality: 12, partnerEcosystem: 10, marketAlignment: -3 }, risk: 0.20, stakeholderReactions: { UNIVERSITY_PARTNER: 18, LEAD_RESEARCHER: 12, PRODUCT_VP: -5 } },
    { id: 'B', text: 'Startup accelerator program', impact: { partnerEcosystem: 15, innovationPipeline: 10, resourceEfficiency: -5 }, risk: 0.35, stakeholderReactions: { STARTUP_PARTNER: 18, VENTURE_PARTNER: 15, CFO: -8 } },
    { id: 'C', text: 'Industry consortium participation', impact: { partnerEcosystem: 10, intellectualProperty: 5, marketAlignment: 8 }, risk: 0.25, stakeholderReactions: { INNOVATION_HEAD: 15, BOARD_TECH: 10, IP_COUNSEL: 5 } },
    { id: 'D', text: 'Customer co-development program', impact: { marketAlignment: 15, innovationPipeline: 8, researchQuality: -3 }, risk: 0.25, stakeholderReactions: { PRODUCT_VP: 18, BUSINESS_UNIT: 15, LEAD_RESEARCHER: -5 } },
    { id: 'E', text: 'Government research grants', impact: { resourceEfficiency: 12, researchQuality: 8, innovationPipeline: -3 }, risk: 0.20, stakeholderReactions: { CFO: 15, UNIVERSITY_PARTNER: 10, CTO: 8 } },
    { id: 'F', text: 'Self-reliant internal focus', impact: { intellectualProperty: 10, teamCapability: 8, partnerEcosystem: -10 }, risk: 0.25, stakeholderReactions: { LEAD_RESEARCHER: 12, IP_COUNSEL: 10, STARTUP_PARTNER: -15 } }
  ]},
  { id: 6, phase: 'FOUNDATION', title: 'Metrics Framework', scenario: 'Define success metrics for innovation lab.', stakeholderFocus: ['CEO', 'CFO', 'INNOVATION_HEAD'], options: [
    { id: 'A', text: 'Revenue from new products focus', impact: { marketAlignment: 12, executiveSupport: 10, researchQuality: -5 }, risk: 0.25, stakeholderReactions: { CFO: 18, PRODUCT_VP: 15, LEAD_RESEARCHER: -8 } },
    { id: 'B', text: 'Patent and IP output metrics', impact: { intellectualProperty: 15, researchQuality: 8, innovationPipeline: -3 }, risk: 0.20, stakeholderReactions: { IP_COUNSEL: 18, BOARD_TECH: 12, INNOVATION_HEAD: -5 } },
    { id: 'C', text: 'Learning and capability metrics', impact: { teamCapability: 12, innovationPipeline: 8, executiveSupport: -5 }, risk: 0.25, stakeholderReactions: { TALENT_HEAD: 18, RD_DIRECTOR: 12, CFO: -8 } },
    { id: 'D', text: 'Balanced innovation scorecard', impact: { executiveSupport: 10, innovationPipeline: 8, resourceEfficiency: 5 }, risk: 0.15, stakeholderReactions: { CEO: 15, INNOVATION_HEAD: 12, CFO: 8 } },
    { id: 'E', text: 'Pipeline velocity metrics', impact: { innovationPipeline: 12, marketAlignment: 8, researchQuality: -5 }, risk: 0.25, stakeholderReactions: { INNOVATION_HEAD: 18, PRODUCT_VP: 12, LEAD_RESEARCHER: -8 } },
    { id: 'F', text: 'Ecosystem value metrics', impact: { partnerEcosystem: 12, innovationPipeline: 5, intellectualProperty: -5 }, risk: 0.30, stakeholderReactions: { STARTUP_PARTNER: 15, VENTURE_PARTNER: 12, IP_COUNSEL: -8 } }
  ]},
  // Phase 2: Innovation Execution (7-12)
  { id: 7, phase: 'EXECUTION', title: 'Project Portfolio', scenario: 'Balance innovation project portfolio.', stakeholderFocus: ['RD_DIRECTOR', 'CTO', 'PRODUCT_VP'], options: [
    { id: 'A', text: 'Moonshot heavy portfolio', impact: { innovationPipeline: 15, researchQuality: 10, marketAlignment: -8 }, risk: 0.45, stakeholderReactions: { CTO: 18, LEAD_RESEARCHER: 15, CFO: -12 } },
    { id: 'B', text: 'Core extension focus', impact: { marketAlignment: 15, resourceEfficiency: 10, innovationPipeline: -5 }, risk: 0.20, stakeholderReactions: { PRODUCT_VP: 18, BUSINESS_UNIT: 15, INNOVATION_HEAD: -8 } },
    { id: 'C', text: 'Adjacent market innovations', impact: { innovationPipeline: 10, marketAlignment: 10, partnerEcosystem: 5 }, risk: 0.30, stakeholderReactions: { INNOVATION_HEAD: 15, VENTURE_PARTNER: 12, RD_DIRECTOR: 8 } },
    { id: 'D', text: '70-20-10 balanced portfolio', impact: { innovationPipeline: 8, marketAlignment: 8, researchQuality: 8 }, risk: 0.25, stakeholderReactions: { CEO: 15, CFO: 10, CTO: 8 } },
    { id: 'E', text: 'Platform and ecosystem plays', impact: { partnerEcosystem: 15, innovationPipeline: 8, intellectualProperty: -5 }, risk: 0.35, stakeholderReactions: { STARTUP_PARTNER: 18, EMERGING_TECH: 15, IP_COUNSEL: -8 } },
    { id: 'F', text: 'Fast-follower strategy', impact: { marketAlignment: 12, resourceEfficiency: 10, researchQuality: -8 }, risk: 0.20, stakeholderReactions: { PRODUCT_VP: 15, CFO: 12, LEAD_RESEARCHER: -12 } }
  ]},
  { id: 8, phase: 'EXECUTION', title: 'Talent Strategy', scenario: 'Attract and retain innovation talent.', stakeholderFocus: ['TALENT_HEAD', 'RD_DIRECTOR', 'LEAD_RESEARCHER'], options: [
    { id: 'A', text: 'Top researcher recruitment drive', impact: { teamCapability: 15, researchQuality: 10, resourceEfficiency: -8 }, risk: 0.30, stakeholderReactions: { TALENT_HEAD: 18, LEAD_RESEARCHER: 12, CFO: -10 } },
    { id: 'B', text: 'Internal talent development', impact: { teamCapability: 10, executiveSupport: 8, innovationPipeline: 3 }, risk: 0.15, stakeholderReactions: { TALENT_HEAD: 15, RD_DIRECTOR: 12, CFO: 8 } },
    { id: 'C', text: 'Entrepreneurial environment creation', impact: { teamCapability: 12, innovationPipeline: 10, resourceEfficiency: -5 }, risk: 0.30, stakeholderReactions: { INNOVATION_HEAD: 18, STARTUP_PARTNER: 12, CFO: -8 } },
    { id: 'D', text: 'Academic rotation programs', impact: { researchQuality: 12, partnerEcosystem: 10, teamCapability: 5 }, risk: 0.20, stakeholderReactions: { UNIVERSITY_PARTNER: 18, LEAD_RESEARCHER: 15, PRODUCT_VP: -5 } },
    { id: 'E', text: 'Acqui-hire strategy', impact: { teamCapability: 12, innovationPipeline: 8, resourceEfficiency: -10 }, risk: 0.40, stakeholderReactions: { VENTURE_PARTNER: 15, CTO: 12, CFO: -12 } },
    { id: 'F', text: 'Gig and contractor flexibility', impact: { resourceEfficiency: 12, teamCapability: 5, intellectualProperty: -8 }, risk: 0.30, stakeholderReactions: { CFO: 15, IP_COUNSEL: -10, TALENT_HEAD: -5 } }
  ]},
  { id: 9, phase: 'EXECUTION', title: 'Technology Bets', scenario: 'Choose emerging technology focus areas.', stakeholderFocus: ['CTO', 'EMERGING_TECH', 'LEAD_RESEARCHER'], options: [
    { id: 'A', text: 'AI and machine learning focus', impact: { innovationPipeline: 15, researchQuality: 10, teamCapability: -5 }, risk: 0.35, stakeholderReactions: { EMERGING_TECH: 18, CTO: 15, LEAD_RESEARCHER: 8 } },
    { id: 'B', text: 'Quantum computing investment', impact: { researchQuality: 15, innovationPipeline: 5, marketAlignment: -8 }, risk: 0.50, stakeholderReactions: { LEAD_RESEARCHER: 18, UNIVERSITY_PARTNER: 15, PRODUCT_VP: -12 } },
    { id: 'C', text: 'Sustainable technology focus', impact: { marketAlignment: 12, executiveSupport: 10, innovationPipeline: 5 }, risk: 0.25, stakeholderReactions: { CEO: 15, BOARD_TECH: 12, CFO: 5 } },
    { id: 'D', text: 'Platform and infrastructure tech', impact: { teamCapability: 10, innovationPipeline: 8, resourceEfficiency: 5 }, risk: 0.25, stakeholderReactions: { CTO: 15, BUSINESS_UNIT: 10, RD_DIRECTOR: 8 } },
    { id: 'E', text: 'Diversified technology portfolio', impact: { innovationPipeline: 10, researchQuality: 8, resourceEfficiency: -5 }, risk: 0.30, stakeholderReactions: { EMERGING_TECH: 12, CTO: 10, CFO: -5 } },
    { id: 'F', text: 'Customer-driven technology choices', impact: { marketAlignment: 15, innovationPipeline: 5, researchQuality: -5 }, risk: 0.20, stakeholderReactions: { PRODUCT_VP: 18, BUSINESS_UNIT: 15, LEAD_RESEARCHER: -8 } }
  ]},
  { id: 10, phase: 'EXECUTION', title: 'Commercialization Path', scenario: 'Define path from lab to market.', stakeholderFocus: ['PRODUCT_VP', 'BUSINESS_UNIT', 'INNOVATION_HEAD'], options: [
    { id: 'A', text: 'Spin-off venture creation', impact: { innovationPipeline: 12, partnerEcosystem: 10, resourceEfficiency: -8 }, risk: 0.40, stakeholderReactions: { VENTURE_PARTNER: 18, STARTUP_PARTNER: 15, CFO: -10 } },
    { id: 'B', text: 'Business unit adoption path', impact: { marketAlignment: 15, executiveSupport: 10, innovationPipeline: -5 }, risk: 0.25, stakeholderReactions: { BUSINESS_UNIT: 18, PRODUCT_VP: 15, INNOVATION_HEAD: -5 } },
    { id: 'C', text: 'Licensing and partnership model', impact: { partnerEcosystem: 15, intellectualProperty: 10, marketAlignment: -3 }, risk: 0.30, stakeholderReactions: { IP_COUNSEL: 15, STARTUP_PARTNER: 12, BUSINESS_UNIT: -8 } },
    { id: 'D', text: 'New business incubation', impact: { innovationPipeline: 12, marketAlignment: 8, resourceEfficiency: -5 }, risk: 0.35, stakeholderReactions: { INNOVATION_HEAD: 18, CEO: 12, CFO: -8 } },
    { id: 'E', text: 'Gradual handoff process', impact: { marketAlignment: 10, executiveSupport: 8, innovationPipeline: 3 }, risk: 0.20, stakeholderReactions: { PRODUCT_VP: 15, RD_DIRECTOR: 10, BUSINESS_UNIT: 8 } },
    { id: 'F', text: 'Strategic partnership launch', impact: { partnerEcosystem: 12, marketAlignment: 10, intellectualProperty: -5 }, risk: 0.30, stakeholderReactions: { STARTUP_PARTNER: 18, INNOVATION_HEAD: 12, IP_COUNSEL: -8 } }
  ]},
  { id: 11, phase: 'EXECUTION', title: 'Culture Building', scenario: 'Foster innovation culture across organization.', stakeholderFocus: ['INNOVATION_HEAD', 'TALENT_HEAD', 'CEO'], options: [
    { id: 'A', text: 'Fail-fast experimentation culture', impact: { innovationPipeline: 15, teamCapability: 8, resourceEfficiency: -5 }, risk: 0.30, stakeholderReactions: { INNOVATION_HEAD: 18, EMERGING_TECH: 15, CFO: -8 } },
    { id: 'B', text: 'Innovation training and hackathons', impact: { teamCapability: 12, innovationPipeline: 8, executiveSupport: 5 }, risk: 0.20, stakeholderReactions: { TALENT_HEAD: 18, INNOVATION_HEAD: 12, RD_DIRECTOR: 8 } },
    { id: 'C', text: 'Innovation recognition programs', impact: { teamCapability: 10, executiveSupport: 10, innovationPipeline: 5 }, risk: 0.15, stakeholderReactions: { CEO: 15, TALENT_HEAD: 12, LEAD_RESEARCHER: 10 } },
    { id: 'D', text: 'Cross-functional innovation time', impact: { innovationPipeline: 10, partnerEcosystem: 8, resourceEfficiency: -3 }, risk: 0.25, stakeholderReactions: { INNOVATION_HEAD: 15, BUSINESS_UNIT: 10, CFO: -5 } },
    { id: 'E', text: 'External innovation immersion', impact: { partnerEcosystem: 12, teamCapability: 8, researchQuality: 5 }, risk: 0.25, stakeholderReactions: { STARTUP_PARTNER: 15, EMERGING_TECH: 12, RD_DIRECTOR: 5 } },
    { id: 'F', text: 'Structured innovation process', impact: { resourceEfficiency: 12, innovationPipeline: 5, teamCapability: 3 }, risk: 0.15, stakeholderReactions: { CFO: 15, RD_DIRECTOR: 10, INNOVATION_HEAD: -5 } }
  ]},
  { id: 12, phase: 'EXECUTION', title: 'Executive Engagement', scenario: 'Secure ongoing executive support.', stakeholderFocus: ['CEO', 'BOARD_TECH', 'CFO'], options: [
    { id: 'A', text: 'Board innovation committee', impact: { executiveSupport: 15, resourceEfficiency: 5, innovationPipeline: 5 }, risk: 0.20, stakeholderReactions: { BOARD_TECH: 18, CEO: 15, CFO: 8 } },
    { id: 'B', text: 'CEO innovation champion role', impact: { executiveSupport: 18, innovationPipeline: 8, marketAlignment: 5 }, risk: 0.25, stakeholderReactions: { CEO: 18, CTO: 15, BOARD_TECH: 10 } },
    { id: 'C', text: 'Regular innovation showcases', impact: { executiveSupport: 12, innovationPipeline: 10, teamCapability: 5 }, risk: 0.15, stakeholderReactions: { CEO: 15, RD_DIRECTOR: 12, LEAD_RESEARCHER: 10 } },
    { id: 'D', text: 'Executive rotation in lab', impact: { executiveSupport: 10, marketAlignment: 12, innovationPipeline: 5 }, risk: 0.25, stakeholderReactions: { BUSINESS_UNIT: 15, CEO: 12, RD_DIRECTOR: 5 } },
    { id: 'E', text: 'Financial performance focus', impact: { resourceEfficiency: 12, executiveSupport: 8, innovationPipeline: -5 }, risk: 0.20, stakeholderReactions: { CFO: 18, BOARD_TECH: 10, INNOVATION_HEAD: -10 } },
    { id: 'F', text: 'External board advisors', impact: { partnerEcosystem: 10, executiveSupport: 10, innovationPipeline: 5 }, risk: 0.25, stakeholderReactions: { BOARD_TECH: 15, VENTURE_PARTNER: 12, CEO: 8 } }
  ]},
  // Phase 3: Innovation Challenges (13-18)
  { id: 13, phase: 'CHALLENGES', title: 'Budget Pressure', scenario: 'Facing significant budget cuts to innovation.', stakeholderFocus: ['CFO', 'CEO', 'RD_DIRECTOR'], options: [
    { id: 'A', text: 'Accept cuts and prioritize ruthlessly', impact: { resourceEfficiency: 12, innovationPipeline: -8, teamCapability: -5 }, risk: 0.30, stakeholderReactions: { CFO: 18, LEAD_RESEARCHER: -12, INNOVATION_HEAD: -8 } },
    { id: 'B', text: 'Seek external funding alternatives', impact: { partnerEcosystem: 12, resourceEfficiency: 8, intellectualProperty: -5 }, risk: 0.35, stakeholderReactions: { VENTURE_PARTNER: 18, STARTUP_PARTNER: 12, IP_COUNSEL: -8 } },
    { id: 'C', text: 'Present business case for protection', impact: { executiveSupport: 10, innovationPipeline: 5, resourceEfficiency: 3 }, risk: 0.25, stakeholderReactions: { CEO: 12, BOARD_TECH: 10, CFO: -5 } },
    { id: 'D', text: 'Shift to lower-cost innovation models', impact: { resourceEfficiency: 15, partnerEcosystem: 8, researchQuality: -8 }, risk: 0.30, stakeholderReactions: { CFO: 15, STARTUP_PARTNER: 12, LEAD_RESEARCHER: -12 } },
    { id: 'E', text: 'Accelerate commercialization', impact: { marketAlignment: 15, resourceEfficiency: 8, innovationPipeline: -5 }, risk: 0.30, stakeholderReactions: { PRODUCT_VP: 18, BUSINESS_UNIT: 15, RD_DIRECTOR: -8 } },
    { id: 'F', text: 'Restructure team for efficiency', impact: { resourceEfficiency: 12, teamCapability: -8, innovationPipeline: -3 }, risk: 0.35, stakeholderReactions: { CFO: 15, TALENT_HEAD: -12, LEAD_RESEARCHER: -10 } }
  ]},
  { id: 14, phase: 'CHALLENGES', title: 'Talent Exodus', scenario: 'Key innovation talent being recruited away.', stakeholderFocus: ['TALENT_HEAD', 'LEAD_RESEARCHER', 'RD_DIRECTOR'], options: [
    { id: 'A', text: 'Aggressive retention packages', impact: { teamCapability: 12, resourceEfficiency: -10, innovationPipeline: 5 }, risk: 0.25, stakeholderReactions: { LEAD_RESEARCHER: 18, TALENT_HEAD: 12, CFO: -12 } },
    { id: 'B', text: 'Career development focus', impact: { teamCapability: 10, executiveSupport: 8, innovationPipeline: 5 }, risk: 0.20, stakeholderReactions: { TALENT_HEAD: 18, RD_DIRECTOR: 12, LEAD_RESEARCHER: 10 } },
    { id: 'C', text: 'Spin-off opportunities for key talent', impact: { teamCapability: 8, partnerEcosystem: 10, innovationPipeline: 5 }, risk: 0.35, stakeholderReactions: { VENTURE_PARTNER: 15, LEAD_RESEARCHER: 12, RD_DIRECTOR: -5 } },
    { id: 'D', text: 'Knowledge capture and succession', impact: { teamCapability: 5, researchQuality: 8, innovationPipeline: -3 }, risk: 0.25, stakeholderReactions: { RD_DIRECTOR: 12, TALENT_HEAD: 10, LEAD_RESEARCHER: -8 } },
    { id: 'E', text: 'Rebuild with new talent', impact: { teamCapability: -5, innovationPipeline: -5, resourceEfficiency: 5 }, risk: 0.40, stakeholderReactions: { TALENT_HEAD: 8, CFO: 10, LEAD_RESEARCHER: -15 } },
    { id: 'F', text: 'Partner for capability access', impact: { partnerEcosystem: 15, teamCapability: 5, intellectualProperty: -8 }, risk: 0.35, stakeholderReactions: { UNIVERSITY_PARTNER: 18, STARTUP_PARTNER: 15, IP_COUNSEL: -10 } }
  ]},
  { id: 15, phase: 'CHALLENGES', title: 'Project Failure', scenario: 'Major innovation project has failed publicly.', stakeholderFocus: ['CEO', 'BOARD_TECH', 'RD_DIRECTOR'], options: [
    { id: 'A', text: 'Learn and pivot transparently', impact: { executiveSupport: 8, teamCapability: 10, innovationPipeline: -5 }, risk: 0.25, stakeholderReactions: { CEO: 15, INNOVATION_HEAD: 12, BOARD_TECH: -5 } },
    { id: 'B', text: 'Double down on project recovery', impact: { innovationPipeline: 8, resourceEfficiency: -10, executiveSupport: -5 }, risk: 0.45, stakeholderReactions: { LEAD_RESEARCHER: 12, RD_DIRECTOR: 8, CFO: -15 } },
    { id: 'C', text: 'Redirect resources to safer bets', impact: { resourceEfficiency: 12, marketAlignment: 10, innovationPipeline: -8 }, risk: 0.25, stakeholderReactions: { CFO: 15, PRODUCT_VP: 12, INNOVATION_HEAD: -10 } },
    { id: 'D', text: 'External partnership for recovery', impact: { partnerEcosystem: 12, innovationPipeline: 5, intellectualProperty: -5 }, risk: 0.35, stakeholderReactions: { STARTUP_PARTNER: 15, VENTURE_PARTNER: 12, IP_COUNSEL: -8 } },
    { id: 'E', text: 'Process and governance review', impact: { resourceEfficiency: 10, executiveSupport: 8, innovationPipeline: -3 }, risk: 0.20, stakeholderReactions: { BOARD_TECH: 15, CFO: 12, INNOVATION_HEAD: -5 } },
    { id: 'F', text: 'Leadership accountability changes', impact: { executiveSupport: 5, teamCapability: -8, innovationPipeline: -5 }, risk: 0.35, stakeholderReactions: { BOARD_TECH: 12, CEO: 8, RD_DIRECTOR: -15 } }
  ]},
  { id: 16, phase: 'CHALLENGES', title: 'Competitive Threat', scenario: 'Competitor has launched breakthrough innovation.', stakeholderFocus: ['CTO', 'PRODUCT_VP', 'EMERGING_TECH'], options: [
    { id: 'A', text: 'Accelerate competing development', impact: { innovationPipeline: 12, resourceEfficiency: -10, marketAlignment: 5 }, risk: 0.40, stakeholderReactions: { CTO: 15, PRODUCT_VP: 12, CFO: -12 } },
    { id: 'B', text: 'Leapfrog with next-generation', impact: { researchQuality: 15, innovationPipeline: 8, marketAlignment: -5 }, risk: 0.45, stakeholderReactions: { LEAD_RESEARCHER: 18, EMERGING_TECH: 15, PRODUCT_VP: -8 } },
    { id: 'C', text: 'Acquire or partner for capability', impact: { partnerEcosystem: 12, innovationPipeline: 8, resourceEfficiency: -8 }, risk: 0.35, stakeholderReactions: { VENTURE_PARTNER: 15, STARTUP_PARTNER: 12, CFO: -10 } },
    { id: 'D', text: 'Differentiate on adjacent dimensions', impact: { marketAlignment: 12, innovationPipeline: 8, researchQuality: 3 }, risk: 0.25, stakeholderReactions: { PRODUCT_VP: 18, INNOVATION_HEAD: 12, CTO: 5 } },
    { id: 'E', text: 'Focus on execution excellence', impact: { marketAlignment: 15, resourceEfficiency: 10, innovationPipeline: -5 }, risk: 0.20, stakeholderReactions: { BUSINESS_UNIT: 18, PRODUCT_VP: 15, RD_DIRECTOR: -5 } },
    { id: 'F', text: 'Strategic patience - wait and learn', impact: { researchQuality: 10, resourceEfficiency: 8, marketAlignment: -8 }, risk: 0.30, stakeholderReactions: { LEAD_RESEARCHER: 12, CFO: 10, PRODUCT_VP: -12 } }
  ]},
  { id: 17, phase: 'CHALLENGES', title: 'IP Dispute', scenario: 'Major IP dispute threatening key innovation.', stakeholderFocus: ['IP_COUNSEL', 'RD_DIRECTOR', 'CEO'], options: [
    { id: 'A', text: 'Aggressive legal defense', impact: { intellectualProperty: 10, resourceEfficiency: -12, innovationPipeline: -5 }, risk: 0.40, stakeholderReactions: { IP_COUNSEL: 18, CFO: -15, CEO: 8 } },
    { id: 'B', text: 'Settlement and cross-licensing', impact: { partnerEcosystem: 10, intellectualProperty: -5, innovationPipeline: 5 }, risk: 0.25, stakeholderReactions: { IP_COUNSEL: 10, CFO: 12, RD_DIRECTOR: 5 } },
    { id: 'C', text: 'Design around the IP', impact: { innovationPipeline: 8, researchQuality: 10, intellectualProperty: -3 }, risk: 0.35, stakeholderReactions: { LEAD_RESEARCHER: 18, RD_DIRECTOR: 12, IP_COUNSEL: 5 } },
    { id: 'D', text: 'Acquire the challenger', impact: { intellectualProperty: 12, partnerEcosystem: 8, resourceEfficiency: -15 }, risk: 0.45, stakeholderReactions: { VENTURE_PARTNER: 15, IP_COUNSEL: 12, CFO: -15 } },
    { id: 'E', text: 'Open source and neutralize', impact: { partnerEcosystem: 15, intellectualProperty: -10, innovationPipeline: 5 }, risk: 0.35, stakeholderReactions: { STARTUP_PARTNER: 18, EMERGING_TECH: 15, IP_COUNSEL: -15 } },
    { id: 'F', text: 'Pivot to alternative approach', impact: { innovationPipeline: 5, researchQuality: 8, intellectualProperty: -5 }, risk: 0.30, stakeholderReactions: { RD_DIRECTOR: 12, LEAD_RESEARCHER: 10, PRODUCT_VP: -5 } }
  ]},
  { id: 18, phase: 'CHALLENGES', title: 'Market Misalignment', scenario: 'Innovation pipeline not aligned with market needs.', stakeholderFocus: ['PRODUCT_VP', 'BUSINESS_UNIT', 'CEO'], options: [
    { id: 'A', text: 'Aggressive portfolio pivot', impact: { marketAlignment: 15, innovationPipeline: -8, researchQuality: -5 }, risk: 0.40, stakeholderReactions: { PRODUCT_VP: 18, BUSINESS_UNIT: 15, RD_DIRECTOR: -12 } },
    { id: 'B', text: 'Customer co-development program', impact: { marketAlignment: 12, innovationPipeline: 8, partnerEcosystem: 5 }, risk: 0.25, stakeholderReactions: { PRODUCT_VP: 15, BUSINESS_UNIT: 12, INNOVATION_HEAD: 8 } },
    { id: 'C', text: 'Market research investment', impact: { marketAlignment: 10, researchQuality: 8, resourceEfficiency: -5 }, risk: 0.20, stakeholderReactions: { PRODUCT_VP: 15, RD_DIRECTOR: 10, CFO: -5 } },
    { id: 'D', text: 'Longer-term vision defense', impact: { researchQuality: 12, executiveSupport: -5, innovationPipeline: 5 }, risk: 0.35, stakeholderReactions: { LEAD_RESEARCHER: 18, EMERGING_TECH: 15, PRODUCT_VP: -12 } },
    { id: 'E', text: 'Spin out non-core innovations', impact: { resourceEfficiency: 12, partnerEcosystem: 10, innovationPipeline: -5 }, risk: 0.30, stakeholderReactions: { VENTURE_PARTNER: 18, CFO: 12, RD_DIRECTOR: -8 } },
    { id: 'F', text: 'Create new market category', impact: { innovationPipeline: 10, marketAlignment: 8, executiveSupport: 5 }, risk: 0.40, stakeholderReactions: { CEO: 15, INNOVATION_HEAD: 12, CFO: -8 } }
  ]},
  // Phase 4: Innovation Excellence (19-24)
  { id: 19, phase: 'EXCELLENCE', title: 'Scale Innovation', scenario: 'Scale successful innovation capabilities.', stakeholderFocus: ['CEO', 'CTO', 'INNOVATION_HEAD'], options: [
    { id: 'A', text: 'Expand lab footprint globally', impact: { innovationPipeline: 15, partnerEcosystem: 10, resourceEfficiency: -10 }, risk: 0.35, stakeholderReactions: { CTO: 18, CEO: 15, CFO: -12 } },
    { id: 'B', text: 'Embed innovation across business', impact: { marketAlignment: 15, teamCapability: 10, innovationPipeline: 5 }, risk: 0.25, stakeholderReactions: { BUSINESS_UNIT: 18, PRODUCT_VP: 15, INNOVATION_HEAD: 8 } },
    { id: 'C', text: 'Build innovation platform', impact: { partnerEcosystem: 15, innovationPipeline: 12, intellectualProperty: -5 }, risk: 0.35, stakeholderReactions: { EMERGING_TECH: 18, STARTUP_PARTNER: 15, IP_COUNSEL: -8 } },
    { id: 'D', text: 'Franchise innovation model', impact: { partnerEcosystem: 12, resourceEfficiency: 10, innovationPipeline: 5 }, risk: 0.30, stakeholderReactions: { VENTURE_PARTNER: 15, CFO: 12, INNOVATION_HEAD: 8 } },
    { id: 'E', text: 'Digital innovation infrastructure', impact: { teamCapability: 12, innovationPipeline: 10, resourceEfficiency: -5 }, risk: 0.30, stakeholderReactions: { CTO: 18, EMERGING_TECH: 15, CFO: -8 } },
    { id: 'F', text: 'Focused excellence centers', impact: { researchQuality: 15, innovationPipeline: 8, partnerEcosystem: 5 }, risk: 0.25, stakeholderReactions: { LEAD_RESEARCHER: 18, RD_DIRECTOR: 15, UNIVERSITY_PARTNER: 12 } }
  ]},
  { id: 20, phase: 'EXCELLENCE', title: 'Innovation Leadership', scenario: 'Establish industry innovation leadership.', stakeholderFocus: ['CEO', 'BOARD_TECH', 'CTO'], options: [
    { id: 'A', text: 'Thought leadership campaign', impact: { executiveSupport: 15, partnerEcosystem: 10, marketAlignment: 8 }, risk: 0.20, stakeholderReactions: { CEO: 18, BOARD_TECH: 15, INNOVATION_HEAD: 12 } },
    { id: 'B', text: 'Industry standard setting', impact: { intellectualProperty: 12, partnerEcosystem: 15, marketAlignment: 8 }, risk: 0.30, stakeholderReactions: { IP_COUNSEL: 15, CTO: 12, BOARD_TECH: 10 } },
    { id: 'C', text: 'Open innovation leadership', impact: { partnerEcosystem: 18, innovationPipeline: 10, intellectualProperty: -8 }, risk: 0.35, stakeholderReactions: { STARTUP_PARTNER: 18, UNIVERSITY_PARTNER: 15, IP_COUNSEL: -10 } },
    { id: 'D', text: 'Research excellence recognition', impact: { researchQuality: 15, teamCapability: 10, executiveSupport: 8 }, risk: 0.20, stakeholderReactions: { LEAD_RESEARCHER: 18, UNIVERSITY_PARTNER: 15, TALENT_HEAD: 12 } },
    { id: 'E', text: 'Commercial success showcase', impact: { marketAlignment: 15, executiveSupport: 12, innovationPipeline: 5 }, risk: 0.20, stakeholderReactions: { PRODUCT_VP: 18, BUSINESS_UNIT: 15, CEO: 12 } },
    { id: 'F', text: 'Ecosystem orchestrator role', impact: { partnerEcosystem: 15, innovationPipeline: 10, marketAlignment: 5 }, risk: 0.30, stakeholderReactions: { VENTURE_PARTNER: 18, STARTUP_PARTNER: 15, INNOVATION_HEAD: 12 } }
  ]},
  { id: 21, phase: 'EXCELLENCE', title: 'Sustainable Innovation', scenario: 'Build sustainable innovation capabilities.', stakeholderFocus: ['RD_DIRECTOR', 'TALENT_HEAD', 'CFO'], options: [
    { id: 'A', text: 'Permanent innovation endowment', impact: { executiveSupport: 15, resourceEfficiency: -8, innovationPipeline: 10 }, risk: 0.30, stakeholderReactions: { CEO: 18, BOARD_TECH: 15, CFO: -10 } },
    { id: 'B', text: 'Self-funding innovation model', impact: { resourceEfficiency: 15, marketAlignment: 10, innovationPipeline: 5 }, risk: 0.25, stakeholderReactions: { CFO: 18, PRODUCT_VP: 15, INNOVATION_HEAD: 8 } },
    { id: 'C', text: 'Innovation talent pipeline', impact: { teamCapability: 15, innovationPipeline: 8, researchQuality: 8 }, risk: 0.20, stakeholderReactions: { TALENT_HEAD: 18, RD_DIRECTOR: 15, UNIVERSITY_PARTNER: 12 } },
    { id: 'D', text: 'Knowledge management system', impact: { researchQuality: 12, teamCapability: 10, intellectualProperty: 8 }, risk: 0.20, stakeholderReactions: { RD_DIRECTOR: 15, LEAD_RESEARCHER: 12, IP_COUNSEL: 10 } },
    { id: 'E', text: 'Governance and process maturity', impact: { executiveSupport: 12, resourceEfficiency: 10, innovationPipeline: 3 }, risk: 0.15, stakeholderReactions: { BOARD_TECH: 15, CFO: 12, RD_DIRECTOR: 8 } },
    { id: 'F', text: 'Culture embedding program', impact: { teamCapability: 12, innovationPipeline: 10, executiveSupport: 8 }, risk: 0.20, stakeholderReactions: { INNOVATION_HEAD: 18, TALENT_HEAD: 15, CEO: 10 } }
  ]},
  { id: 22, phase: 'EXCELLENCE', title: 'Future Bets', scenario: 'Position for next wave of innovation.', stakeholderFocus: ['EMERGING_TECH', 'CTO', 'VENTURE_PARTNER'], options: [
    { id: 'A', text: 'Emerging technology investments', impact: { innovationPipeline: 15, researchQuality: 12, resourceEfficiency: -10 }, risk: 0.45, stakeholderReactions: { EMERGING_TECH: 18, CTO: 15, CFO: -12 } },
    { id: 'B', text: 'Strategic acquisition pipeline', impact: { innovationPipeline: 12, partnerEcosystem: 10, resourceEfficiency: -8 }, risk: 0.40, stakeholderReactions: { VENTURE_PARTNER: 18, CTO: 12, CFO: -10 } },
    { id: 'C', text: 'Research frontier expansion', impact: { researchQuality: 15, innovationPipeline: 8, marketAlignment: -5 }, risk: 0.40, stakeholderReactions: { LEAD_RESEARCHER: 18, UNIVERSITY_PARTNER: 15, PRODUCT_VP: -8 } },
    { id: 'D', text: 'Platform ecosystem bets', impact: { partnerEcosystem: 15, innovationPipeline: 10, intellectualProperty: -5 }, risk: 0.35, stakeholderReactions: { STARTUP_PARTNER: 18, EMERGING_TECH: 15, IP_COUNSEL: -8 } },
    { id: 'E', text: 'Adjacent market innovations', impact: { marketAlignment: 12, innovationPipeline: 10, partnerEcosystem: 5 }, risk: 0.30, stakeholderReactions: { PRODUCT_VP: 15, BUSINESS_UNIT: 12, INNOVATION_HEAD: 10 } },
    { id: 'F', text: 'Balanced future portfolio', impact: { innovationPipeline: 10, researchQuality: 8, marketAlignment: 8 }, risk: 0.25, stakeholderReactions: { CEO: 15, CTO: 12, CFO: 8 } }
  ]},
  { id: 23, phase: 'EXCELLENCE', title: 'Value Demonstration', scenario: 'Demonstrate innovation value to stakeholders.', stakeholderFocus: ['CEO', 'CFO', 'BOARD_TECH'], options: [
    { id: 'A', text: 'Comprehensive ROI analysis', impact: { executiveSupport: 15, resourceEfficiency: 8, marketAlignment: 5 }, risk: 0.20, stakeholderReactions: { CFO: 18, BOARD_TECH: 15, CEO: 12 } },
    { id: 'B', text: 'Strategic value storytelling', impact: { executiveSupport: 12, innovationPipeline: 8, marketAlignment: 8 }, risk: 0.20, stakeholderReactions: { CEO: 18, BOARD_TECH: 12, INNOVATION_HEAD: 10 } },
    { id: 'C', text: 'External validation and recognition', impact: { executiveSupport: 10, partnerEcosystem: 12, researchQuality: 8 }, risk: 0.25, stakeholderReactions: { BOARD_TECH: 15, UNIVERSITY_PARTNER: 12, LEAD_RESEARCHER: 10 } },
    { id: 'D', text: 'Competitive advantage demonstration', impact: { marketAlignment: 15, executiveSupport: 10, innovationPipeline: 5 }, risk: 0.25, stakeholderReactions: { PRODUCT_VP: 18, CEO: 15, BUSINESS_UNIT: 12 } },
    { id: 'E', text: 'Talent and culture metrics', impact: { teamCapability: 12, executiveSupport: 10, innovationPipeline: 5 }, risk: 0.20, stakeholderReactions: { TALENT_HEAD: 18, RD_DIRECTOR: 15, CEO: 10 } },
    { id: 'F', text: 'Ecosystem value creation', impact: { partnerEcosystem: 15, executiveSupport: 10, innovationPipeline: 8 }, risk: 0.25, stakeholderReactions: { STARTUP_PARTNER: 18, VENTURE_PARTNER: 15, INNOVATION_HEAD: 12 } }
  ]},
  { id: 24, phase: 'EXCELLENCE', title: 'Innovation Legacy', scenario: 'Build lasting innovation legacy.', stakeholderFocus: ['CEO', 'CTO', 'RD_DIRECTOR'], options: [
    { id: 'A', text: 'World-class research institution', impact: { researchQuality: 18, teamCapability: 12, intellectualProperty: 10 }, risk: 0.30, stakeholderReactions: { LEAD_RESEARCHER: 18, UNIVERSITY_PARTNER: 18, RD_DIRECTOR: 15 } },
    { id: 'B', text: 'Innovation-driven company identity', impact: { executiveSupport: 15, marketAlignment: 12, innovationPipeline: 10 }, risk: 0.25, stakeholderReactions: { CEO: 18, BOARD_TECH: 15, INNOVATION_HEAD: 12 } },
    { id: 'C', text: 'Ecosystem leadership position', impact: { partnerEcosystem: 18, innovationPipeline: 12, marketAlignment: 8 }, risk: 0.30, stakeholderReactions: { STARTUP_PARTNER: 18, VENTURE_PARTNER: 18, EMERGING_TECH: 15 } },
    { id: 'D', text: 'Sustainable innovation engine', impact: { innovationPipeline: 15, resourceEfficiency: 10, teamCapability: 10 }, risk: 0.25, stakeholderReactions: { CFO: 15, CTO: 15, RD_DIRECTOR: 12 } },
    { id: 'E', text: 'Market transformation impact', impact: { marketAlignment: 18, innovationPipeline: 10, executiveSupport: 10 }, risk: 0.30, stakeholderReactions: { PRODUCT_VP: 18, BUSINESS_UNIT: 18, CEO: 15 } },
    { id: 'F', text: 'Balanced innovation excellence', impact: { innovationPipeline: 12, researchQuality: 10, marketAlignment: 10 }, risk: 0.20, stakeholderReactions: { CEO: 15, CTO: 12, CFO: 10 } }
  ]}
];
export const PHASE_DESCRIPTIONS = { FOUNDATION: { name: 'Innovation Foundation', rounds: [1,2,3,4,5,6] }, EXECUTION: { name: 'Innovation Execution', rounds: [7,8,9,10,11,12] }, CHALLENGES: { name: 'Innovation Challenges', rounds: [13,14,15,16,17,18] }, EXCELLENCE: { name: 'Innovation Excellence', rounds: [19,20,21,22,23,24] }};
export const getRoundById = (id) => ROUNDS.find(r => r.id === id);
export const getRoundsByPhase = (phase) => ROUNDS.filter(r => r.phase === phase);
export const getAllRounds = () => ROUNDS;
