// Market Dynamics Simulation Rounds
// 24 rounds across 4 phases with 6 options each

export const ROUNDS = [
  // Phase 1: Market Assessment (Rounds 1-6)
  {
    id: 1,
    phase: 'MARKET_ASSESSMENT',
    title: 'Competitive Landscape Analysis',
    scenario: 'New competitive intelligence reveals a major competitor preparing aggressive market moves. Your team needs to decide how to respond to the evolving competitive landscape.',
    stakeholderFocus: ['STRATEGY_DIRECTOR', 'COMPETITOR_ANALYST', 'CMO'],
    options: [
      { id: 'A', text: 'Launch comprehensive competitive war room with real-time monitoring', impact: { competitiveIntelligence: 12, marketSentiment: 3, innovationPipeline: -2 }, risk: 0.15, stakeholderReactions: { STRATEGY_DIRECTOR: 15, COMPETITOR_ANALYST: 18, BOARD_MEMBER: -5 } },
      { id: 'B', text: 'Accelerate planned product launches to preempt competitor moves', impact: { innovationPipeline: 10, marketShare: 5, brandEquity: 3 }, risk: 0.35, stakeholderReactions: { PRODUCT_HEAD: 15, CMO: 10, SALES_VP: 12 } },
      { id: 'C', text: 'Engage key customers with loyalty incentives and long-term contracts', impact: { customerLoyalty: 12, marketShare: 3, pricingPower: -3 }, risk: 0.20, stakeholderReactions: { CUSTOMER_SUCCESS: 15, KEY_CUSTOMER: 12, PRICING_MANAGER: -8 } },
      { id: 'D', text: 'Strengthen channel partnerships with exclusive agreements', impact: { channelStrength: 10, marketShare: 4, pricingPower: -2 }, risk: 0.25, stakeholderReactions: { CHANNEL_PARTNER: 18, SALES_VP: 10, DIGITAL_LEAD: -5 } },
      { id: 'E', text: 'Maintain current course while gathering more intelligence', impact: { competitiveIntelligence: 5, marketSentiment: -3, marketShare: -2 }, risk: 0.10, stakeholderReactions: { BOARD_MEMBER: -8, CMO: -5, STRATEGY_DIRECTOR: 5 } },
      { id: 'F', text: 'Signal market leadership through bold brand campaign', impact: { brandEquity: 10, marketSentiment: 8, pricingPower: 3 }, risk: 0.30, stakeholderReactions: { CMO: 18, INVESTOR_RELATIONS: 10, BOARD_MEMBER: -3 } }
    ]
  },
  {
    id: 2,
    phase: 'MARKET_ASSESSMENT',
    title: 'Customer Segmentation Review',
    scenario: 'Market research reveals shifting customer preferences and emerging segments. Resources must be allocated across different customer segments and go-to-market approaches.',
    stakeholderFocus: ['CMO', 'PRODUCT_HEAD', 'KEY_CUSTOMER'],
    options: [
      { id: 'A', text: 'Double down on core enterprise segment with premium offerings', impact: { customerLoyalty: 8, pricingPower: 10, marketShare: -3 }, risk: 0.20, stakeholderReactions: { KEY_CUSTOMER: 15, PRICING_MANAGER: 12, SALES_VP: -5 } },
      { id: 'B', text: 'Expand into mid-market with tailored solutions', impact: { marketShare: 10, channelStrength: 5, pricingPower: -5 }, risk: 0.30, stakeholderReactions: { SALES_VP: 15, REGIONAL_GM: 12, CMO: 5 } },
      { id: 'C', text: 'Launch digital-first offerings for emerging segments', impact: { innovationPipeline: 8, marketShare: 6, channelStrength: -3 }, risk: 0.35, stakeholderReactions: { DIGITAL_LEAD: 18, PRODUCT_HEAD: 10, CHANNEL_PARTNER: -10 } },
      { id: 'D', text: 'Build customer success programs across all segments', impact: { customerLoyalty: 12, brandEquity: 5, marketSentiment: 3 }, risk: 0.15, stakeholderReactions: { CUSTOMER_SUCCESS: 18, KEY_CUSTOMER: 10, BOARD_MEMBER: -3 } },
      { id: 'E', text: 'Create segment-specific brands to avoid cannibalization', impact: { brandEquity: 5, marketShare: 8, customerLoyalty: -3 }, risk: 0.40, stakeholderReactions: { CMO: 12, STRATEGY_DIRECTOR: 8, INVESTOR_RELATIONS: -5 } },
      { id: 'F', text: 'Pursue geographic expansion with localized offerings', impact: { marketShare: 7, channelStrength: 8, competitiveIntelligence: -2 }, risk: 0.35, stakeholderReactions: { REGIONAL_GM: 18, CHANNEL_PARTNER: 10, STRATEGY_DIRECTOR: -3 } }
    ]
  },
  {
    id: 3,
    phase: 'MARKET_ASSESSMENT',
    title: 'Pricing Architecture Decision',
    scenario: 'Margin pressure and competitive pricing require a fundamental review of pricing strategy. The team must decide between defending premium pricing or pursuing market share.',
    stakeholderFocus: ['PRICING_MANAGER', 'CMO', 'SALES_VP'],
    options: [
      { id: 'A', text: 'Implement value-based pricing with tiered packaging', impact: { pricingPower: 12, brandEquity: 5, marketShare: -4 }, risk: 0.25, stakeholderReactions: { PRICING_MANAGER: 18, CMO: 10, SALES_VP: -8 } },
      { id: 'B', text: 'Launch fighter brand to compete on price without hurting core', impact: { marketShare: 8, pricingPower: 3, brandEquity: -5 }, risk: 0.35, stakeholderReactions: { STRATEGY_DIRECTOR: 12, SALES_VP: 15, CMO: -10 } },
      { id: 'C', text: 'Aggressive promotional pricing to gain market share', impact: { marketShare: 12, pricingPower: -8, customerLoyalty: 3 }, risk: 0.30, stakeholderReactions: { SALES_VP: 18, REGIONAL_GM: 10, PRICING_MANAGER: -15 } },
      { id: 'D', text: 'Bundle products to increase customer value and stickiness', impact: { customerLoyalty: 10, pricingPower: 5, channelStrength: 3 }, risk: 0.20, stakeholderReactions: { PRODUCT_HEAD: 12, CUSTOMER_SUCCESS: 10, CHANNEL_PARTNER: 5 } },
      { id: 'E', text: 'Dynamic pricing based on demand and competitive signals', impact: { pricingPower: 8, competitiveIntelligence: 5, customerLoyalty: -5 }, risk: 0.40, stakeholderReactions: { PRICING_MANAGER: 15, DIGITAL_LEAD: 12, KEY_CUSTOMER: -12 } },
      { id: 'F', text: 'Hold pricing and invest in product differentiation', impact: { innovationPipeline: 10, brandEquity: 8, marketShare: -3 }, risk: 0.25, stakeholderReactions: { PRODUCT_HEAD: 15, CMO: 12, SALES_VP: -5 } }
    ]
  },
  {
    id: 4,
    phase: 'MARKET_ASSESSMENT',
    title: 'Channel Strategy Evaluation',
    scenario: 'Digital disruption is reshaping distribution channels. Traditional partners are concerned while digital channels show rapid growth potential.',
    stakeholderFocus: ['CHANNEL_PARTNER', 'DIGITAL_LEAD', 'SALES_VP'],
    options: [
      { id: 'A', text: 'Accelerate direct digital channels with partner compensation', impact: { channelStrength: 8, innovationPipeline: 5, pricingPower: 5 }, risk: 0.35, stakeholderReactions: { DIGITAL_LEAD: 18, CHANNEL_PARTNER: -5, CMO: 10 } },
      { id: 'B', text: 'Invest heavily in traditional partner enablement', impact: { channelStrength: 12, customerLoyalty: 5, innovationPipeline: -5 }, risk: 0.20, stakeholderReactions: { CHANNEL_PARTNER: 18, SALES_VP: 10, DIGITAL_LEAD: -12 } },
      { id: 'C', text: 'Create hybrid model with clear channel rules of engagement', impact: { channelStrength: 6, marketShare: 5, competitiveIntelligence: 3 }, risk: 0.25, stakeholderReactions: { STRATEGY_DIRECTOR: 12, REGIONAL_GM: 10, CHANNEL_PARTNER: 5 } },
      { id: 'D', text: 'Acquire digital distribution capability through M&A', impact: { channelStrength: 10, innovationPipeline: 8, pricingPower: -3 }, risk: 0.45, stakeholderReactions: { BOARD_MEMBER: 5, DIGITAL_LEAD: 15, INVESTOR_RELATIONS: -5 } },
      { id: 'E', text: 'Let channels compete with market-driven selection', impact: { marketShare: 5, pricingPower: 3, channelStrength: -5 }, risk: 0.40, stakeholderReactions: { SALES_VP: 8, CHANNEL_PARTNER: -15, DIGITAL_LEAD: 10 } },
      { id: 'F', text: 'Strategic partnership with digital marketplace leader', impact: { channelStrength: 7, marketSentiment: 8, pricingPower: -5 }, risk: 0.30, stakeholderReactions: { INVESTOR_RELATIONS: 12, DIGITAL_LEAD: 10, CHANNEL_PARTNER: -8 } }
    ]
  },
  {
    id: 5,
    phase: 'MARKET_ASSESSMENT',
    title: 'Brand Positioning Review',
    scenario: 'Market research shows brand perception lagging behind actual product capabilities. Investment is needed to close the perception gap.',
    stakeholderFocus: ['CMO', 'INVESTOR_RELATIONS', 'INDUSTRY_ANALYST'],
    options: [
      { id: 'A', text: 'Major brand refresh with repositioning campaign', impact: { brandEquity: 15, marketSentiment: 10, marketShare: -2 }, risk: 0.35, stakeholderReactions: { CMO: 18, INVESTOR_RELATIONS: 8, BOARD_MEMBER: -5 } },
      { id: 'B', text: 'Thought leadership and analyst relations push', impact: { marketSentiment: 12, brandEquity: 8, competitiveIntelligence: 3 }, risk: 0.20, stakeholderReactions: { INDUSTRY_ANALYST: 15, INVESTOR_RELATIONS: 12, CMO: 8 } },
      { id: 'C', text: 'Customer advocacy program with case studies and references', impact: { customerLoyalty: 10, brandEquity: 8, marketSentiment: 5 }, risk: 0.15, stakeholderReactions: { CUSTOMER_SUCCESS: 15, KEY_CUSTOMER: 10, CMO: 8 } },
      { id: 'D', text: 'Product-led growth to let quality speak for itself', impact: { innovationPipeline: 10, customerLoyalty: 8, brandEquity: 3 }, risk: 0.25, stakeholderReactions: { PRODUCT_HEAD: 18, DIGITAL_LEAD: 10, CMO: -5 } },
      { id: 'E', text: 'Influencer and community marketing approach', impact: { marketSentiment: 10, brandEquity: 5, customerLoyalty: 5 }, risk: 0.30, stakeholderReactions: { DIGITAL_LEAD: 15, CMO: 10, BOARD_MEMBER: -8 } },
      { id: 'F', text: 'Corporate brand campaign focused on company values', impact: { brandEquity: 10, marketSentiment: 8, customerLoyalty: 2 }, risk: 0.20, stakeholderReactions: { INVESTOR_RELATIONS: 15, TRADE_ASSOCIATION: 10, CMO: 8 } }
    ]
  },
  {
    id: 6,
    phase: 'MARKET_ASSESSMENT',
    title: 'Innovation Pipeline Assessment',
    scenario: 'Product roadmap review reveals potential gaps against competitor innovation. Decisions on R&D priorities and product strategy are required.',
    stakeholderFocus: ['PRODUCT_HEAD', 'STRATEGY_DIRECTOR', 'KEY_CUSTOMER'],
    options: [
      { id: 'A', text: 'Accelerate core product evolution with major feature releases', impact: { innovationPipeline: 12, customerLoyalty: 8, brandEquity: 5 }, risk: 0.25, stakeholderReactions: { PRODUCT_HEAD: 18, KEY_CUSTOMER: 12, CMO: 8 } },
      { id: 'B', text: 'Invest in breakthrough innovation through skunkworks project', impact: { innovationPipeline: 15, marketSentiment: 5, marketShare: -3 }, risk: 0.45, stakeholderReactions: { PRODUCT_HEAD: 15, BOARD_MEMBER: -8, DIGITAL_LEAD: 12 } },
      { id: 'C', text: 'Acquire innovation through strategic technology acquisition', impact: { innovationPipeline: 10, competitiveIntelligence: 5, pricingPower: -5 }, risk: 0.40, stakeholderReactions: { STRATEGY_DIRECTOR: 12, BOARD_MEMBER: 5, INVESTOR_RELATIONS: -5 } },
      { id: 'D', text: 'Open innovation through partnerships and ecosystem', impact: { innovationPipeline: 8, channelStrength: 5, competitiveIntelligence: -3 }, risk: 0.30, stakeholderReactions: { CHANNEL_PARTNER: 12, TRADE_ASSOCIATION: 10, COMPETITOR_ANALYST: -5 } },
      { id: 'E', text: 'Customer co-creation program for product development', impact: { customerLoyalty: 12, innovationPipeline: 8, brandEquity: 5 }, risk: 0.20, stakeholderReactions: { KEY_CUSTOMER: 18, CUSTOMER_SUCCESS: 12, PRODUCT_HEAD: 8 } },
      { id: 'F', text: 'Focus on platform and API strategy for ecosystem lock-in', impact: { channelStrength: 8, innovationPipeline: 6, customerLoyalty: 8 }, risk: 0.35, stakeholderReactions: { DIGITAL_LEAD: 15, PRODUCT_HEAD: 10, CHANNEL_PARTNER: 5 } }
    ]
  },

  // Phase 2: Competitive Positioning (Rounds 7-12)
  {
    id: 7,
    phase: 'COMPETITIVE_POSITIONING',
    title: 'Competitor Price War Response',
    scenario: 'A major competitor has launched aggressive pricing, undercutting your prices by 20%. Market share is shifting and sales team is demanding response.',
    stakeholderFocus: ['SALES_VP', 'PRICING_MANAGER', 'BOARD_MEMBER'],
    options: [
      { id: 'A', text: 'Match competitor pricing to defend market share', impact: { marketShare: 5, pricingPower: -12, customerLoyalty: 3 }, risk: 0.35, stakeholderReactions: { SALES_VP: 15, BOARD_MEMBER: -10, PRICING_MANAGER: -15 } },
      { id: 'B', text: 'Selective price matching only for at-risk accounts', impact: { customerLoyalty: 8, marketShare: -2, pricingPower: -5 }, risk: 0.25, stakeholderReactions: { CUSTOMER_SUCCESS: 12, SALES_VP: 5, PRICING_MANAGER: -5 } },
      { id: 'C', text: 'Increase value through bundling and services', impact: { customerLoyalty: 10, brandEquity: 5, marketShare: -5 }, risk: 0.30, stakeholderReactions: { PRODUCT_HEAD: 12, CMO: 10, SALES_VP: -5 } },
      { id: 'D', text: 'Launch counter-offensive in competitor\'s stronghold', impact: { competitiveIntelligence: 5, marketShare: 3, pricingPower: -8 }, risk: 0.45, stakeholderReactions: { STRATEGY_DIRECTOR: 10, REGIONAL_GM: 15, BOARD_MEMBER: -5 } },
      { id: 'E', text: 'Focus on premium segments while conceding price-sensitive', impact: { pricingPower: 8, brandEquity: 10, marketShare: -8 }, risk: 0.35, stakeholderReactions: { CMO: 15, PRICING_MANAGER: 12, SALES_VP: -12 } },
      { id: 'F', text: 'Expose competitor quality issues through comparison campaign', impact: { marketSentiment: 8, brandEquity: 5, competitiveIntelligence: -5 }, risk: 0.40, stakeholderReactions: { CMO: 10, TRADE_ASSOCIATION: -10, INDUSTRY_ANALYST: 5 } }
    ]
  },
  {
    id: 8,
    phase: 'COMPETITIVE_POSITIONING',
    title: 'New Market Entrant Threat',
    scenario: 'A well-funded new entrant with disruptive technology is entering your core market. Early adopters are showing interest in their offering.',
    stakeholderFocus: ['STRATEGY_DIRECTOR', 'PRODUCT_HEAD', 'DIGITAL_LEAD'],
    options: [
      { id: 'A', text: 'Accelerate digital transformation to match disruptor capabilities', impact: { innovationPipeline: 12, channelStrength: 5, marketShare: -3 }, risk: 0.35, stakeholderReactions: { DIGITAL_LEAD: 18, PRODUCT_HEAD: 10, CHANNEL_PARTNER: -5 } },
      { id: 'B', text: 'Acquire or invest in the disruptor before they scale', impact: { competitiveIntelligence: 10, innovationPipeline: 8, pricingPower: -8 }, risk: 0.50, stakeholderReactions: { STRATEGY_DIRECTOR: 15, BOARD_MEMBER: -5, INVESTOR_RELATIONS: 5 } },
      { id: 'C', text: 'Lock in customers with long-term contracts and incentives', impact: { customerLoyalty: 12, marketShare: 5, pricingPower: -5 }, risk: 0.25, stakeholderReactions: { CUSTOMER_SUCCESS: 15, KEY_CUSTOMER: 8, SALES_VP: 12 } },
      { id: 'D', text: 'Partner with complementary players to strengthen ecosystem', impact: { channelStrength: 10, competitiveIntelligence: 5, innovationPipeline: 3 }, risk: 0.30, stakeholderReactions: { CHANNEL_PARTNER: 15, TRADE_ASSOCIATION: 10, STRATEGY_DIRECTOR: 8 } },
      { id: 'E', text: 'Highlight enterprise requirements disruptor cannot meet', impact: { brandEquity: 8, customerLoyalty: 5, marketSentiment: -3 }, risk: 0.25, stakeholderReactions: { CMO: 12, KEY_CUSTOMER: 10, INDUSTRY_ANALYST: -5 } },
      { id: 'F', text: 'Launch own disruptive offering targeting same segment', impact: { innovationPipeline: 10, marketShare: 5, brandEquity: -5 }, risk: 0.45, stakeholderReactions: { PRODUCT_HEAD: 15, DIGITAL_LEAD: 12, CMO: -8 } }
    ]
  },
  {
    id: 9,
    phase: 'COMPETITIVE_POSITIONING',
    title: 'Market Consolidation Opportunity',
    scenario: 'Industry consolidation is accelerating. A mid-sized competitor is rumored to be for sale, and others are also evaluating M&A options.',
    stakeholderFocus: ['BOARD_MEMBER', 'STRATEGY_DIRECTOR', 'INVESTOR_RELATIONS'],
    options: [
      { id: 'A', text: 'Pursue aggressive acquisition to gain market share', impact: { marketShare: 15, channelStrength: 8, pricingPower: -5 }, risk: 0.45, stakeholderReactions: { STRATEGY_DIRECTOR: 15, BOARD_MEMBER: 10, INVESTOR_RELATIONS: -8 } },
      { id: 'B', text: 'Form strategic alliance instead of acquisition', impact: { competitiveIntelligence: 8, channelStrength: 10, marketShare: 5 }, risk: 0.25, stakeholderReactions: { CHANNEL_PARTNER: 12, TRADE_ASSOCIATION: 10, BOARD_MEMBER: -5 } },
      { id: 'C', text: 'Focus on organic growth while competitors distracted', impact: { innovationPipeline: 10, customerLoyalty: 8, marketShare: 5 }, risk: 0.20, stakeholderReactions: { PRODUCT_HEAD: 15, CUSTOMER_SUCCESS: 10, STRATEGY_DIRECTOR: -5 } },
      { id: 'D', text: 'Acquire technology assets rather than whole company', impact: { innovationPipeline: 12, competitiveIntelligence: 5, channelStrength: -3 }, risk: 0.35, stakeholderReactions: { PRODUCT_HEAD: 15, DIGITAL_LEAD: 10, INVESTOR_RELATIONS: 5 } },
      { id: 'E', text: 'Position as acquirer to drive competitor behavior', impact: { competitiveIntelligence: 10, marketSentiment: 5, marketShare: 3 }, risk: 0.30, stakeholderReactions: { STRATEGY_DIRECTOR: 12, INVESTOR_RELATIONS: 10, COMPETITOR_ANALYST: 8 } },
      { id: 'F', text: 'Prepare defensive measures against hostile takeover', impact: { competitiveIntelligence: 5, marketSentiment: -5, brandEquity: 3 }, risk: 0.25, stakeholderReactions: { BOARD_MEMBER: 15, INVESTOR_RELATIONS: 8, STRATEGY_DIRECTOR: 5 } }
    ]
  },
  {
    id: 10,
    phase: 'COMPETITIVE_POSITIONING',
    title: 'Geographic Expansion Decision',
    scenario: 'International markets present growth opportunities but require significant investment. Competitors are also eyeing the same markets.',
    stakeholderFocus: ['REGIONAL_GM', 'STRATEGY_DIRECTOR', 'CHANNEL_PARTNER'],
    options: [
      { id: 'A', text: 'Major investment in high-growth emerging market', impact: { marketShare: 10, channelStrength: 8, pricingPower: -5 }, risk: 0.45, stakeholderReactions: { REGIONAL_GM: 18, STRATEGY_DIRECTOR: 10, BOARD_MEMBER: -8 } },
      { id: 'B', text: 'Partner with local leaders for market entry', impact: { channelStrength: 12, marketShare: 5, competitiveIntelligence: 3 }, risk: 0.30, stakeholderReactions: { CHANNEL_PARTNER: 15, REGIONAL_GM: 10, DIGITAL_LEAD: -5 } },
      { id: 'C', text: 'Acquire established player in target market', impact: { marketShare: 12, channelStrength: 10, pricingPower: -8 }, risk: 0.50, stakeholderReactions: { STRATEGY_DIRECTOR: 12, BOARD_MEMBER: 5, INVESTOR_RELATIONS: -10 } },
      { id: 'D', text: 'Digital-first expansion with minimal physical presence', impact: { innovationPipeline: 8, marketShare: 5, channelStrength: 3 }, risk: 0.35, stakeholderReactions: { DIGITAL_LEAD: 18, REGIONAL_GM: -5, CMO: 10 } },
      { id: 'E', text: 'Focus on deepening existing market positions', impact: { customerLoyalty: 10, marketShare: 3, brandEquity: 5 }, risk: 0.15, stakeholderReactions: { CUSTOMER_SUCCESS: 12, KEY_CUSTOMER: 10, REGIONAL_GM: -8 } },
      { id: 'F', text: 'Test market with limited pilot program', impact: { competitiveIntelligence: 8, marketShare: 2, channelStrength: 3 }, risk: 0.20, stakeholderReactions: { STRATEGY_DIRECTOR: 10, BOARD_MEMBER: 8, REGIONAL_GM: -3 } }
    ]
  },
  {
    id: 11,
    phase: 'COMPETITIVE_POSITIONING',
    title: 'Product Line Rationalization',
    scenario: 'Portfolio complexity is affecting margins and market clarity. Some products overlap while others drain resources without clear strategic value.',
    stakeholderFocus: ['PRODUCT_HEAD', 'CMO', 'PRICING_MANAGER'],
    options: [
      { id: 'A', text: 'Aggressive SKU reduction to simplify portfolio', impact: { pricingPower: 10, brandEquity: 5, customerLoyalty: -8 }, risk: 0.35, stakeholderReactions: { PRICING_MANAGER: 15, CMO: 10, KEY_CUSTOMER: -12 } },
      { id: 'B', text: 'Create good-better-best tiering across product lines', impact: { pricingPower: 8, brandEquity: 8, marketShare: 3 }, risk: 0.25, stakeholderReactions: { CMO: 15, PRICING_MANAGER: 12, SALES_VP: 8 } },
      { id: 'C', text: 'Divest underperforming product lines to competitors', impact: { pricingPower: 5, marketShare: -5, competitiveIntelligence: -5 }, risk: 0.40, stakeholderReactions: { BOARD_MEMBER: 12, STRATEGY_DIRECTOR: 8, PRODUCT_HEAD: -10 } },
      { id: 'D', text: 'Invest in flagship products while maintaining breadth', impact: { innovationPipeline: 10, brandEquity: 8, pricingPower: 3 }, risk: 0.30, stakeholderReactions: { PRODUCT_HEAD: 15, CMO: 12, PRICING_MANAGER: 5 } },
      { id: 'E', text: 'Platform approach to reduce complexity while maintaining options', impact: { innovationPipeline: 8, pricingPower: 5, channelStrength: 5 }, risk: 0.30, stakeholderReactions: { DIGITAL_LEAD: 15, PRODUCT_HEAD: 12, CHANNEL_PARTNER: 8 } },
      { id: 'F', text: 'Let market decide through controlled product sunset', impact: { customerLoyalty: -5, marketShare: -3, pricingPower: 5 }, risk: 0.25, stakeholderReactions: { SALES_VP: -5, CUSTOMER_SUCCESS: -8, PRICING_MANAGER: 10 } }
    ]
  },
  {
    id: 12,
    phase: 'COMPETITIVE_POSITIONING',
    title: 'Customer Win-Back Program',
    scenario: 'Customer churn analysis reveals significant losses to specific competitors. The team must decide how to approach customer retention and win-back.',
    stakeholderFocus: ['CUSTOMER_SUCCESS', 'SALES_VP', 'KEY_CUSTOMER'],
    options: [
      { id: 'A', text: 'Aggressive win-back program with enhanced offers', impact: { customerLoyalty: 10, marketShare: 5, pricingPower: -8 }, risk: 0.30, stakeholderReactions: { SALES_VP: 15, CUSTOMER_SUCCESS: 12, PRICING_MANAGER: -12 } },
      { id: 'B', text: 'Root cause analysis and systematic improvement program', impact: { customerLoyalty: 12, innovationPipeline: 5, marketSentiment: 3 }, risk: 0.20, stakeholderReactions: { CUSTOMER_SUCCESS: 18, PRODUCT_HEAD: 10, KEY_CUSTOMER: 12 } },
      { id: 'C', text: 'Focus resources on protecting highest-value customers', impact: { customerLoyalty: 8, pricingPower: 5, marketShare: -5 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 15, PRICING_MANAGER: 10, SALES_VP: -5 } },
      { id: 'D', text: 'Executive engagement program for at-risk accounts', impact: { customerLoyalty: 10, brandEquity: 5, marketSentiment: 5 }, risk: 0.15, stakeholderReactions: { BOARD_MEMBER: 10, KEY_CUSTOMER: 15, CUSTOMER_SUCCESS: 10 } },
      { id: 'E', text: 'Competitive replacement program targeting competitor users', impact: { marketShare: 8, competitiveIntelligence: 5, pricingPower: -5 }, risk: 0.35, stakeholderReactions: { SALES_VP: 18, COMPETITOR_ANALYST: 10, CMO: 5 } },
      { id: 'F', text: 'Accept strategic churn and focus on acquisition', impact: { marketShare: 5, channelStrength: 5, customerLoyalty: -8 }, risk: 0.30, stakeholderReactions: { SALES_VP: 10, CUSTOMER_SUCCESS: -15, STRATEGY_DIRECTOR: 5 } }
    ]
  },

  // Phase 3: Market Challenges (Rounds 13-18)
  {
    id: 13,
    phase: 'MARKET_CHALLENGES',
    title: 'Economic Downturn Response',
    scenario: 'Economic indicators suggest a recession is imminent. Customer spending is tightening and competitors are cutting prices aggressively.',
    stakeholderFocus: ['BOARD_MEMBER', 'SALES_VP', 'PRICING_MANAGER'],
    options: [
      { id: 'A', text: 'Maintain prices and weather the storm with reserves', impact: { pricingPower: 8, brandEquity: 5, marketShare: -8 }, risk: 0.35, stakeholderReactions: { CMO: 10, PRICING_MANAGER: 12, SALES_VP: -15 } },
      { id: 'B', text: 'Flexible payment terms and financing options', impact: { customerLoyalty: 10, marketShare: 5, pricingPower: -3 }, risk: 0.25, stakeholderReactions: { CUSTOMER_SUCCESS: 15, KEY_CUSTOMER: 12, BOARD_MEMBER: -5 } },
      { id: 'C', text: 'Aggressive market share grab while competitors retreat', impact: { marketShare: 12, pricingPower: -10, channelStrength: 5 }, risk: 0.45, stakeholderReactions: { SALES_VP: 18, REGIONAL_GM: 12, BOARD_MEMBER: -10 } },
      { id: 'D', text: 'Cost reduction program to maintain margins', impact: { pricingPower: 5, innovationPipeline: -8, marketShare: -3 }, risk: 0.30, stakeholderReactions: { BOARD_MEMBER: 15, PRICING_MANAGER: 10, PRODUCT_HEAD: -12 } },
      { id: 'E', text: 'Pivot to recession-proof segments and use cases', impact: { marketShare: 5, customerLoyalty: 8, innovationPipeline: 3 }, risk: 0.30, stakeholderReactions: { STRATEGY_DIRECTOR: 15, PRODUCT_HEAD: 10, SALES_VP: -5 } },
      { id: 'F', text: 'Strategic acquisitions of distressed competitors', impact: { marketShare: 10, competitiveIntelligence: 8, pricingPower: -5 }, risk: 0.50, stakeholderReactions: { STRATEGY_DIRECTOR: 12, BOARD_MEMBER: 5, INVESTOR_RELATIONS: -8 } }
    ]
  },
  {
    id: 14,
    phase: 'MARKET_CHALLENGES',
    title: 'Regulatory Market Impact',
    scenario: 'New regulations are reshaping the competitive landscape. Some requirements favor larger players while others create barriers.',
    stakeholderFocus: ['STRATEGY_DIRECTOR', 'TRADE_ASSOCIATION', 'BOARD_MEMBER'],
    options: [
      { id: 'A', text: 'Lead industry compliance initiative as thought leader', impact: { brandEquity: 10, marketSentiment: 8, competitiveIntelligence: 5 }, risk: 0.20, stakeholderReactions: { TRADE_ASSOCIATION: 18, INVESTOR_RELATIONS: 12, CMO: 10 } },
      { id: 'B', text: 'Use compliance as competitive differentiation', impact: { customerLoyalty: 10, brandEquity: 8, pricingPower: 5 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 15, CMO: 12, STRATEGY_DIRECTOR: 8 } },
      { id: 'C', text: 'Advocate for regulatory changes through industry groups', impact: { competitiveIntelligence: 8, marketSentiment: 5, channelStrength: 3 }, risk: 0.30, stakeholderReactions: { TRADE_ASSOCIATION: 15, STRATEGY_DIRECTOR: 10, INVESTOR_RELATIONS: 5 } },
      { id: 'D', text: 'Minimal compliance with maximum competitive aggression', impact: { marketShare: 8, pricingPower: 5, brandEquity: -8 }, risk: 0.45, stakeholderReactions: { SALES_VP: 15, BOARD_MEMBER: -10, TRADE_ASSOCIATION: -15 } },
      { id: 'E', text: 'Restructure offerings to optimize regulatory position', impact: { innovationPipeline: 8, pricingPower: 5, customerLoyalty: -3 }, risk: 0.30, stakeholderReactions: { PRODUCT_HEAD: 12, STRATEGY_DIRECTOR: 10, CUSTOMER_SUCCESS: -5 } },
      { id: 'F', text: 'Exit heavily regulated segments for lighter markets', impact: { pricingPower: 8, marketShare: -10, competitiveIntelligence: 5 }, risk: 0.40, stakeholderReactions: { BOARD_MEMBER: 10, REGIONAL_GM: -15, SALES_VP: -10 } }
    ]
  },
  {
    id: 15,
    phase: 'MARKET_CHALLENGES',
    title: 'Technology Disruption Crisis',
    scenario: 'A breakthrough technology is making current solutions potentially obsolete. Customers are asking about your technology roadmap and competitors are claiming advantage.',
    stakeholderFocus: ['PRODUCT_HEAD', 'DIGITAL_LEAD', 'INDUSTRY_ANALYST'],
    options: [
      { id: 'A', text: 'Massive R&D pivot to new technology', impact: { innovationPipeline: 15, marketSentiment: 8, pricingPower: -8 }, risk: 0.50, stakeholderReactions: { PRODUCT_HEAD: 18, DIGITAL_LEAD: 15, BOARD_MEMBER: -10 } },
      { id: 'B', text: 'Partner with technology leader for rapid capability', impact: { innovationPipeline: 10, channelStrength: 5, competitiveIntelligence: -5 }, risk: 0.35, stakeholderReactions: { STRATEGY_DIRECTOR: 12, DIGITAL_LEAD: 10, PRODUCT_HEAD: -5 } },
      { id: 'C', text: 'Position current technology as proven and reliable', impact: { customerLoyalty: 8, brandEquity: 5, marketSentiment: -5 }, risk: 0.30, stakeholderReactions: { CMO: 10, KEY_CUSTOMER: 12, INDUSTRY_ANALYST: -10 } },
      { id: 'D', text: 'Acquire technology capabilities through startup acquisition', impact: { innovationPipeline: 12, competitiveIntelligence: 5, pricingPower: -5 }, risk: 0.45, stakeholderReactions: { STRATEGY_DIRECTOR: 15, DIGITAL_LEAD: 12, INVESTOR_RELATIONS: -5 } },
      { id: 'E', text: 'Hybrid approach bridging current and new technology', impact: { innovationPipeline: 8, customerLoyalty: 10, channelStrength: 3 }, risk: 0.30, stakeholderReactions: { PRODUCT_HEAD: 12, CUSTOMER_SUCCESS: 10, CHANNEL_PARTNER: 8 } },
      { id: 'F', text: 'Wait for market clarity before major investment', impact: { competitiveIntelligence: 10, marketShare: -5, marketSentiment: -8 }, risk: 0.35, stakeholderReactions: { STRATEGY_DIRECTOR: 10, COMPETITOR_ANALYST: 12, CMO: -10 } }
    ]
  },
  {
    id: 16,
    phase: 'MARKET_CHALLENGES',
    title: 'Supply Chain Disruption',
    scenario: 'Global supply chain issues are affecting product availability and costs. Competitors with different supply chains have temporary advantages.',
    stakeholderFocus: ['REGIONAL_GM', 'CHANNEL_PARTNER', 'KEY_CUSTOMER'],
    options: [
      { id: 'A', text: 'Premium pricing for guaranteed availability', impact: { pricingPower: 10, customerLoyalty: 5, marketShare: -8 }, risk: 0.30, stakeholderReactions: { PRICING_MANAGER: 15, KEY_CUSTOMER: -10, BOARD_MEMBER: 10 } },
      { id: 'B', text: 'Prioritize strategic accounts with allocation', impact: { customerLoyalty: 8, marketShare: -5, pricingPower: 5 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 15, CUSTOMER_SUCCESS: 10, CHANNEL_PARTNER: -12 } },
      { id: 'C', text: 'Diversify supply chain for long-term resilience', impact: { channelStrength: 10, competitiveIntelligence: 5, pricingPower: -5 }, risk: 0.35, stakeholderReactions: { REGIONAL_GM: 15, STRATEGY_DIRECTOR: 12, BOARD_MEMBER: 8 } },
      { id: 'D', text: 'Offer alternatives and substitutes to maintain share', impact: { marketShare: 5, customerLoyalty: -5, innovationPipeline: 5 }, risk: 0.30, stakeholderReactions: { PRODUCT_HEAD: 10, SALES_VP: 12, KEY_CUSTOMER: -8 } },
      { id: 'E', text: 'Partner with logistics providers for priority access', impact: { channelStrength: 8, marketShare: 3, pricingPower: -3 }, risk: 0.25, stakeholderReactions: { CHANNEL_PARTNER: 15, REGIONAL_GM: 10, PRICING_MANAGER: -5 } },
      { id: 'F', text: 'Transparent communication with extended timelines', impact: { brandEquity: 8, customerLoyalty: 5, marketShare: -5 }, risk: 0.20, stakeholderReactions: { CUSTOMER_SUCCESS: 15, KEY_CUSTOMER: 10, CMO: 8 } }
    ]
  },
  {
    id: 17,
    phase: 'MARKET_CHALLENGES',
    title: 'Competitive Intelligence Breach',
    scenario: 'Evidence suggests competitors have gained access to your strategic plans. Recent moves indicate they may know your roadmap and pricing strategies.',
    stakeholderFocus: ['STRATEGY_DIRECTOR', 'COMPETITOR_ANALYST', 'BOARD_MEMBER'],
    options: [
      { id: 'A', text: 'Rapid strategy pivot with new competitive moves', impact: { competitiveIntelligence: 8, innovationPipeline: 5, marketSentiment: -5 }, risk: 0.40, stakeholderReactions: { STRATEGY_DIRECTOR: 15, PRODUCT_HEAD: -8, CMO: -5 } },
      { id: 'B', text: 'Launch decoy initiatives to confuse competitors', impact: { competitiveIntelligence: 10, marketSentiment: 3, pricingPower: -3 }, risk: 0.35, stakeholderReactions: { COMPETITOR_ANALYST: 15, STRATEGY_DIRECTOR: 12, BOARD_MEMBER: -5 } },
      { id: 'C', text: 'Accelerate planned launches to preempt response', impact: { innovationPipeline: 8, marketShare: 5, brandEquity: 3 }, risk: 0.45, stakeholderReactions: { PRODUCT_HEAD: 15, CMO: 10, SALES_VP: 12 } },
      { id: 'D', text: 'Internal security review and information compartmentalization', impact: { competitiveIntelligence: 5, marketSentiment: -3, innovationPipeline: -3 }, risk: 0.20, stakeholderReactions: { BOARD_MEMBER: 15, STRATEGY_DIRECTOR: 8, PRODUCT_HEAD: -8 } },
      { id: 'E', text: 'Public stance of market leadership regardless of leaks', impact: { brandEquity: 8, marketSentiment: 5, competitiveIntelligence: -5 }, risk: 0.30, stakeholderReactions: { CMO: 15, INVESTOR_RELATIONS: 10, STRATEGY_DIRECTOR: -8 } },
      { id: 'F', text: 'Counter-intelligence to understand competitor knowledge', impact: { competitiveIntelligence: 12, marketSentiment: -3, brandEquity: -5 }, risk: 0.40, stakeholderReactions: { COMPETITOR_ANALYST: 18, STRATEGY_DIRECTOR: 12, TRADE_ASSOCIATION: -10 } }
    ]
  },
  {
    id: 18,
    phase: 'MARKET_CHALLENGES',
    title: 'Channel Conflict Escalation',
    scenario: 'Tension between direct sales, digital channels, and partners has reached a crisis point. Partners are threatening to promote competitors.',
    stakeholderFocus: ['CHANNEL_PARTNER', 'DIGITAL_LEAD', 'SALES_VP'],
    options: [
      { id: 'A', text: 'Clear channel separation with segment-based rules', impact: { channelStrength: 8, marketShare: 3, customerLoyalty: -3 }, risk: 0.25, stakeholderReactions: { CHANNEL_PARTNER: 12, SALES_VP: 10, DIGITAL_LEAD: -5 } },
      { id: 'B', text: 'Prioritize digital with partner transition support', impact: { innovationPipeline: 8, channelStrength: -5, pricingPower: 5 }, risk: 0.40, stakeholderReactions: { DIGITAL_LEAD: 18, CHANNEL_PARTNER: -18, CMO: 10 } },
      { id: 'C', text: 'Partner-first strategy with digital complement', impact: { channelStrength: 12, customerLoyalty: 5, innovationPipeline: -5 }, risk: 0.30, stakeholderReactions: { CHANNEL_PARTNER: 18, DIGITAL_LEAD: -12, REGIONAL_GM: 10 } },
      { id: 'D', text: 'Unified omnichannel with shared incentives', impact: { channelStrength: 5, customerLoyalty: 8, marketSentiment: 5 }, risk: 0.35, stakeholderReactions: { CUSTOMER_SUCCESS: 15, CMO: 10, CHANNEL_PARTNER: 5 } },
      { id: 'E', text: 'Let best channel win with market-driven allocation', impact: { marketShare: 5, channelStrength: -3, pricingPower: 3 }, risk: 0.35, stakeholderReactions: { SALES_VP: 10, CHANNEL_PARTNER: -12, DIGITAL_LEAD: 8 } },
      { id: 'F', text: 'Strategic partner acquisition to eliminate conflict', impact: { channelStrength: 10, marketShare: 5, pricingPower: -8 }, risk: 0.50, stakeholderReactions: { STRATEGY_DIRECTOR: 12, BOARD_MEMBER: -5, CHANNEL_PARTNER: 15 } }
    ]
  },

  // Phase 4: Market Leadership (Rounds 19-24)
  {
    id: 19,
    phase: 'MARKET_LEADERSHIP',
    title: 'Market Position Consolidation',
    scenario: 'After navigating challenges, you have an opportunity to solidify market position. Strategic choices will define long-term competitive advantage.',
    stakeholderFocus: ['BOARD_MEMBER', 'STRATEGY_DIRECTOR', 'CMO'],
    options: [
      { id: 'A', text: 'Aggressive expansion to capture remaining market share', impact: { marketShare: 12, channelStrength: 5, pricingPower: -8 }, risk: 0.40, stakeholderReactions: { SALES_VP: 18, REGIONAL_GM: 12, BOARD_MEMBER: -5 } },
      { id: 'B', text: 'Premium positioning with selective growth', impact: { pricingPower: 12, brandEquity: 10, marketShare: -3 }, risk: 0.25, stakeholderReactions: { CMO: 18, PRICING_MANAGER: 15, SALES_VP: -8 } },
      { id: 'C', text: 'Platform strategy for ecosystem lock-in', impact: { customerLoyalty: 12, channelStrength: 8, innovationPipeline: 5 }, risk: 0.35, stakeholderReactions: { DIGITAL_LEAD: 15, PRODUCT_HEAD: 12, CHANNEL_PARTNER: 8 } },
      { id: 'D', text: 'International expansion for new growth vectors', impact: { marketShare: 8, competitiveIntelligence: 5, channelStrength: 5 }, risk: 0.40, stakeholderReactions: { REGIONAL_GM: 18, STRATEGY_DIRECTOR: 10, BOARD_MEMBER: 5 } },
      { id: 'E', text: 'Vertical integration for competitive advantage', impact: { pricingPower: 8, innovationPipeline: 8, channelStrength: -5 }, risk: 0.45, stakeholderReactions: { STRATEGY_DIRECTOR: 15, PRODUCT_HEAD: 10, CHANNEL_PARTNER: -15 } },
      { id: 'F', text: 'Customer intimacy strategy for long-term relationships', impact: { customerLoyalty: 15, brandEquity: 8, marketShare: 3 }, risk: 0.20, stakeholderReactions: { CUSTOMER_SUCCESS: 18, KEY_CUSTOMER: 15, CMO: 10 } }
    ]
  },
  {
    id: 20,
    phase: 'MARKET_LEADERSHIP',
    title: 'Brand Evolution Strategy',
    scenario: 'Market position is stable, but brand needs evolution to maintain relevance. Balance heritage with future positioning.',
    stakeholderFocus: ['CMO', 'INVESTOR_RELATIONS', 'KEY_CUSTOMER'],
    options: [
      { id: 'A', text: 'Bold brand transformation for next generation', impact: { brandEquity: 12, marketSentiment: 10, customerLoyalty: -5 }, risk: 0.40, stakeholderReactions: { CMO: 18, DIGITAL_LEAD: 12, KEY_CUSTOMER: -8 } },
      { id: 'B', text: 'Evolutionary refresh maintaining brand equity', impact: { brandEquity: 8, customerLoyalty: 5, marketSentiment: 5 }, risk: 0.20, stakeholderReactions: { CMO: 12, INVESTOR_RELATIONS: 10, KEY_CUSTOMER: 8 } },
      { id: 'C', text: 'Sub-brand strategy for different segments', impact: { marketShare: 8, brandEquity: 5, pricingPower: 3 }, risk: 0.30, stakeholderReactions: { STRATEGY_DIRECTOR: 12, CMO: 10, PRICING_MANAGER: 8 } },
      { id: 'D', text: 'Purpose-driven brand evolution around values', impact: { brandEquity: 10, marketSentiment: 8, customerLoyalty: 5 }, risk: 0.25, stakeholderReactions: { INVESTOR_RELATIONS: 15, CMO: 12, TRADE_ASSOCIATION: 10 } },
      { id: 'E', text: 'Technology-forward brand positioning', impact: { innovationPipeline: 8, brandEquity: 8, marketSentiment: 5 }, risk: 0.30, stakeholderReactions: { DIGITAL_LEAD: 15, PRODUCT_HEAD: 12, INDUSTRY_ANALYST: 10 } },
      { id: 'F', text: 'Customer co-creation of brand evolution', impact: { customerLoyalty: 12, brandEquity: 5, marketSentiment: 8 }, risk: 0.25, stakeholderReactions: { CUSTOMER_SUCCESS: 15, KEY_CUSTOMER: 18, CMO: 8 } }
    ]
  },
  {
    id: 21,
    phase: 'MARKET_LEADERSHIP',
    title: 'Innovation Leadership',
    scenario: 'Market leadership requires continuous innovation. Decide how to maintain innovation advantage while managing resource allocation.',
    stakeholderFocus: ['PRODUCT_HEAD', 'DIGITAL_LEAD', 'BOARD_MEMBER'],
    options: [
      { id: 'A', text: 'Major bet on next-generation platform', impact: { innovationPipeline: 15, marketSentiment: 8, pricingPower: -5 }, risk: 0.50, stakeholderReactions: { PRODUCT_HEAD: 18, DIGITAL_LEAD: 15, BOARD_MEMBER: -8 } },
      { id: 'B', text: 'Portfolio of innovation bets with staged gates', impact: { innovationPipeline: 10, competitiveIntelligence: 5, brandEquity: 5 }, risk: 0.30, stakeholderReactions: { STRATEGY_DIRECTOR: 15, PRODUCT_HEAD: 12, BOARD_MEMBER: 8 } },
      { id: 'C', text: 'Open innovation with startup ecosystem', impact: { innovationPipeline: 8, channelStrength: 5, competitiveIntelligence: -3 }, risk: 0.35, stakeholderReactions: { DIGITAL_LEAD: 12, TRADE_ASSOCIATION: 10, COMPETITOR_ANALYST: -5 } },
      { id: 'D', text: 'Customer-driven innovation priorities', impact: { customerLoyalty: 12, innovationPipeline: 8, marketShare: 5 }, risk: 0.25, stakeholderReactions: { KEY_CUSTOMER: 18, CUSTOMER_SUCCESS: 15, PRODUCT_HEAD: 8 } },
      { id: 'E', text: 'Acquisition-led innovation strategy', impact: { innovationPipeline: 12, marketShare: 5, pricingPower: -8 }, risk: 0.45, stakeholderReactions: { STRATEGY_DIRECTOR: 15, BOARD_MEMBER: 5, INVESTOR_RELATIONS: -5 } },
      { id: 'F', text: 'Fast follower strategy with execution excellence', impact: { competitiveIntelligence: 10, innovationPipeline: 5, marketShare: 5 }, risk: 0.25, stakeholderReactions: { COMPETITOR_ANALYST: 15, STRATEGY_DIRECTOR: 10, PRODUCT_HEAD: -5 } }
    ]
  },
  {
    id: 22,
    phase: 'MARKET_LEADERSHIP',
    title: 'Ecosystem Development',
    scenario: 'Long-term market leadership requires ecosystem development. Balance control versus openness in building sustainable advantage.',
    stakeholderFocus: ['STRATEGY_DIRECTOR', 'CHANNEL_PARTNER', 'DIGITAL_LEAD'],
    options: [
      { id: 'A', text: 'Open ecosystem with developer community', impact: { channelStrength: 12, innovationPipeline: 8, pricingPower: -3 }, risk: 0.35, stakeholderReactions: { DIGITAL_LEAD: 18, PRODUCT_HEAD: 12, PRICING_MANAGER: -5 } },
      { id: 'B', text: 'Controlled ecosystem with certified partners', impact: { channelStrength: 10, pricingPower: 5, customerLoyalty: 5 }, risk: 0.25, stakeholderReactions: { CHANNEL_PARTNER: 15, STRATEGY_DIRECTOR: 12, DIGITAL_LEAD: -5 } },
      { id: 'C', text: 'Strategic alliances with complementary leaders', impact: { competitiveIntelligence: 8, channelStrength: 10, marketSentiment: 5 }, risk: 0.30, stakeholderReactions: { STRATEGY_DIRECTOR: 15, TRADE_ASSOCIATION: 12, INVESTOR_RELATIONS: 8 } },
      { id: 'D', text: 'Vertical ecosystem through acquisitions', impact: { marketShare: 8, pricingPower: 8, channelStrength: -5 }, risk: 0.45, stakeholderReactions: { BOARD_MEMBER: 10, STRATEGY_DIRECTOR: 12, CHANNEL_PARTNER: -15 } },
      { id: 'E', text: 'Platform-as-a-service for ecosystem participants', impact: { innovationPipeline: 10, channelStrength: 8, customerLoyalty: 5 }, risk: 0.35, stakeholderReactions: { DIGITAL_LEAD: 15, PRODUCT_HEAD: 12, CHANNEL_PARTNER: 10 } },
      { id: 'F', text: 'Industry standard leadership for ecosystem influence', impact: { marketSentiment: 10, brandEquity: 8, competitiveIntelligence: 5 }, risk: 0.25, stakeholderReactions: { TRADE_ASSOCIATION: 18, INDUSTRY_ANALYST: 15, CMO: 10 } }
    ]
  },
  {
    id: 23,
    phase: 'MARKET_LEADERSHIP',
    title: 'Sustainable Competitive Advantage',
    scenario: 'To maintain long-term leadership, structural advantages must be built. Choose where to invest for sustainable differentiation.',
    stakeholderFocus: ['BOARD_MEMBER', 'STRATEGY_DIRECTOR', 'PRODUCT_HEAD'],
    options: [
      { id: 'A', text: 'Data and AI capabilities as competitive moat', impact: { innovationPipeline: 12, competitiveIntelligence: 10, customerLoyalty: 5 }, risk: 0.40, stakeholderReactions: { DIGITAL_LEAD: 18, PRODUCT_HEAD: 15, BOARD_MEMBER: 8 } },
      { id: 'B', text: 'Customer relationship depth as differentiation', impact: { customerLoyalty: 15, brandEquity: 8, marketShare: 3 }, risk: 0.20, stakeholderReactions: { CUSTOMER_SUCCESS: 18, KEY_CUSTOMER: 15, CMO: 12 } },
      { id: 'C', text: 'Supply chain and operational excellence', impact: { pricingPower: 10, channelStrength: 8, marketShare: 5 }, risk: 0.30, stakeholderReactions: { REGIONAL_GM: 15, CHANNEL_PARTNER: 12, BOARD_MEMBER: 10 } },
      { id: 'D', text: 'Brand and intellectual property fortress', impact: { brandEquity: 12, pricingPower: 8, competitiveIntelligence: 5 }, risk: 0.25, stakeholderReactions: { CMO: 18, STRATEGY_DIRECTOR: 12, INVESTOR_RELATIONS: 10 } },
      { id: 'E', text: 'Talent and culture as competitive advantage', impact: { innovationPipeline: 10, customerLoyalty: 8, brandEquity: 5 }, risk: 0.25, stakeholderReactions: { PRODUCT_HEAD: 15, CUSTOMER_SUCCESS: 12, CMO: 8 } },
      { id: 'F', text: 'Network effects through platform scale', impact: { marketShare: 10, channelStrength: 10, pricingPower: 5 }, risk: 0.40, stakeholderReactions: { DIGITAL_LEAD: 15, STRATEGY_DIRECTOR: 12, BOARD_MEMBER: 5 } }
    ]
  },
  {
    id: 24,
    phase: 'MARKET_LEADERSHIP',
    title: 'Legacy and Future Vision',
    scenario: 'Final strategic decisions will define your market legacy. Balance current market position with future-proofing the organization.',
    stakeholderFocus: ['BOARD_MEMBER', 'CMO', 'STRATEGY_DIRECTOR'],
    options: [
      { id: 'A', text: 'Aggressive market expansion to maximize position', impact: { marketShare: 15, channelStrength: 8, pricingPower: -5 }, risk: 0.45, stakeholderReactions: { SALES_VP: 18, REGIONAL_GM: 15, BOARD_MEMBER: 5 } },
      { id: 'B', text: 'Profitability optimization for shareholder returns', impact: { pricingPower: 12, marketShare: -3, brandEquity: 5 }, risk: 0.25, stakeholderReactions: { BOARD_MEMBER: 18, INVESTOR_RELATIONS: 15, SALES_VP: -10 } },
      { id: 'C', text: 'Innovation investment for next market cycle', impact: { innovationPipeline: 15, marketSentiment: 10, marketShare: -5 }, risk: 0.40, stakeholderReactions: { PRODUCT_HEAD: 18, DIGITAL_LEAD: 15, BOARD_MEMBER: -5 } },
      { id: 'D', text: 'Customer excellence for enduring relationships', impact: { customerLoyalty: 15, brandEquity: 10, marketShare: 5 }, risk: 0.20, stakeholderReactions: { CUSTOMER_SUCCESS: 18, KEY_CUSTOMER: 15, CMO: 12 } },
      { id: 'E', text: 'Balanced stakeholder value creation', impact: { brandEquity: 10, marketSentiment: 10, customerLoyalty: 8 }, risk: 0.25, stakeholderReactions: { INVESTOR_RELATIONS: 15, TRADE_ASSOCIATION: 12, CMO: 10 } },
      { id: 'F', text: 'Strategic flexibility for market evolution', impact: { competitiveIntelligence: 10, innovationPipeline: 8, channelStrength: 5 }, risk: 0.30, stakeholderReactions: { STRATEGY_DIRECTOR: 18, BOARD_MEMBER: 10, COMPETITOR_ANALYST: 12 } }
    ]
  }
];

export const PHASE_DESCRIPTIONS = {
  MARKET_ASSESSMENT: {
    name: 'Market Assessment',
    description: 'Evaluate competitive landscape, customer segments, and market positioning',
    rounds: [1, 2, 3, 4, 5, 6]
  },
  COMPETITIVE_POSITIONING: {
    name: 'Competitive Positioning',
    description: 'Define and execute competitive strategy in response to market dynamics',
    rounds: [7, 8, 9, 10, 11, 12]
  },
  MARKET_CHALLENGES: {
    name: 'Market Challenges',
    description: 'Navigate external disruptions and competitive threats',
    rounds: [13, 14, 15, 16, 17, 18]
  },
  MARKET_LEADERSHIP: {
    name: 'Market Leadership',
    description: 'Consolidate position and build sustainable competitive advantage',
    rounds: [19, 20, 21, 22, 23, 24]
  }
};

export const getRoundById = (id) => ROUNDS.find(r => r.id === id);
export const getRoundsByPhase = (phase) => ROUNDS.filter(r => r.phase === phase);
export const getAllRounds = () => ROUNDS;
