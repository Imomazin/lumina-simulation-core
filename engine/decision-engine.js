// engine/decision-engine.js
//
// Decision engine for lumina-simulation-core.
// Applies role-based decisions to the simulation state.
// Each decision affects multiple state dimensions to model cross-functional interdependence.
// All effects are deterministic and documented.

/**
 * Apply a set of role-based decisions to the simulation state.
 * Decisions are grouped by role and processed in a fixed order to ensure determinism.
 *
 * @param {Object} state - Current simulation state (mutated in place)
 * @param {Object} decisions - Decisions grouped by role
 * @returns {Object} - The updated state
 */
export function applyDecisions(state, decisions) {
  // Process roles in a fixed order for determinism
  const roleOrder = ['strategy', 'marketing', 'supply', 'rnd', 'sales', 'legal', 'gm'];

  for (const role of roleOrder) {
    if (decisions[role]) {
      applyRoleDecisions(state, role, decisions[role]);
    }
  }

  // Record this decision batch in history
  state.history.push({
    time: state.time,
    decisions: structuredClone(decisions)
  });

  return state;
}

/**
 * Route decisions to the appropriate role handler.
 */
function applyRoleDecisions(state, role, roleDecisions) {
  const handlers = {
    strategy: applyStrategyDecisions,
    marketing: applyMarketingDecisions,
    supply: applySupplyDecisions,
    rnd: applyRndDecisions,
    sales: applySalesDecisions,
    legal: applyLegalDecisions,
    gm: applyGmDecisions
  };

  if (handlers[role]) {
    handlers[role](state, roleDecisions);
  }
}

// =============================================================================
// STRATEGY DECISIONS
// Sets direction, allocates strategic investment, accepts or defers major risks
// =============================================================================

function applyStrategyDecisions(state, decisions) {
  if (decisions.capitalAllocation != null) {
    applyCapitalAllocation(state, decisions.capitalAllocation);
  }
  if (decisions.riskPosture != null) {
    applyRiskPosture(state, decisions.riskPosture);
  }
}

/**
 * Allocate capital to growth initiatives.
 * @param {number} amount - Amount to invest (positive integer)
 *
 * Effects:
 * - finance.cash: decreases by investment amount
 * - operations.capacity: increases proportionally (investment buys infrastructure)
 * - risk.financial: increases if cash reserves drop below 20% of initial
 */
function applyCapitalAllocation(state, amount) {
  const investmentAmount = Math.max(0, Math.min(amount, state.finance.cash));

  // Deduct from cash reserves
  state.finance.cash -= investmentAmount;

  // Each $10M invested adds 0.05 capacity (5% infrastructure growth per $10M)
  const capacityGain = (investmentAmount / 10_000_000) * 0.05;
  state.operations.capacity += capacityGain;

  // Financial risk increases when cash drops below 20M (20% of initial 100M)
  // Risk scale: 0 at 20M+, up to 0.5 at 0 cash
  const cashThreshold = 20_000_000;
  if (state.finance.cash < cashThreshold) {
    const shortfall = cashThreshold - state.finance.cash;
    state.risk.financial = Math.min(1, shortfall / (cashThreshold * 2));
  }
}

/**
 * Set organizational risk posture: 'aggressive', 'balanced', or 'conservative'.
 *
 * Effects:
 * - risk.operational: adjusted based on posture (aggressive = higher base risk)
 * - market.demand: aggressive posture can capture more demand (faster to market)
 */
function applyRiskPosture(state, posture) {
  const postures = {
    aggressive: {
      operationalRiskDelta: 0.1,  // Accept 10% more operational risk
      demandMultiplier: 1.1       // Gain 10% demand from speed-to-market
    },
    balanced: {
      operationalRiskDelta: 0,    // No change to baseline
      demandMultiplier: 1.0
    },
    conservative: {
      operationalRiskDelta: -0.05, // Reduce operational risk by 5%
      demandMultiplier: 0.95       // Lose 5% demand from slower decisions
    }
  };

  const settings = postures[posture] || postures.balanced;

  state.risk.operational = clamp(state.risk.operational + settings.operationalRiskDelta, 0, 1);
  state.market.demand *= settings.demandMultiplier;
}

// =============================================================================
// MARKETING DECISIONS
// Drives demand, pricing, positioning, and growth signals
// =============================================================================

function applyMarketingDecisions(state, decisions) {
  if (decisions.priceChange != null) {
    applyPriceChange(state, decisions.priceChange);
  }
  if (decisions.campaignSpend != null) {
    applyCampaignSpend(state, decisions.campaignSpend);
  }
}

/**
 * Adjust product pricing.
 * @param {number} percentChange - Percentage change to price index (-100 to +100)
 *
 * Effects:
 * - market.priceIndex: adjusted by the percentage
 * - market.demand: inverse relationship (price up = demand down, elastic)
 *   Using elasticity of -1.2: 10% price increase = 12% demand decrease
 */
function applyPriceChange(state, percentChange) {
  const changeFactor = percentChange / 100;

  // Update price index
  state.market.priceIndex *= (1 + changeFactor);
  state.market.priceIndex = Math.max(0.1, state.market.priceIndex); // Floor at 10% of base

  // Demand elasticity: -1.2 (moderately elastic consumer product)
  // Negative relationship: price up -> demand down
  const elasticity = -1.2;
  const demandChange = changeFactor * elasticity;
  state.market.demand *= (1 + demandChange);
  state.market.demand = Math.max(0.1, state.market.demand);
}

/**
 * Spend on marketing campaign.
 * @param {number} amount - Campaign budget
 *
 * Effects:
 * - finance.cash: decreases by spend amount
 * - market.demand: increases (diminishing returns curve)
 * - market.marketShare: slight increase from brand awareness
 */
function applyCampaignSpend(state, amount) {
  const spend = Math.max(0, Math.min(amount, state.finance.cash));

  state.finance.cash -= spend;

  // Demand boost: diminishing returns using log curve
  // $5M spend = ~8% demand boost, $20M = ~15%, $50M = ~20%
  const demandBoost = 0.05 * Math.log10(1 + spend / 1_000_000);
  state.market.demand += demandBoost;

  // Market share grows slowly from awareness (1% per $10M spent)
  const shareGain = (spend / 10_000_000) * 0.01;
  state.market.marketShare = Math.min(1, state.market.marketShare + shareGain);
}

// =============================================================================
// SUPPLY (PRODUCT & SUPPLY) DECISIONS
// Manages production capacity, suppliers, quality, and delivery risk
// =============================================================================

function applySupplyDecisions(state, decisions) {
  if (decisions.capacityInvestment != null) {
    applyCapacityInvestment(state, decisions.capacityInvestment);
  }
  if (decisions.supplierStrategy != null) {
    applySupplierStrategy(state, decisions.supplierStrategy);
  }
}

/**
 * Invest in production capacity.
 * @param {number} amount - Investment amount
 *
 * Effects:
 * - finance.cash: decreases by investment
 * - operations.capacity: increases (linear scaling)
 * - risk.operational: temporarily increases during expansion (integration risk)
 */
function applyCapacityInvestment(state, amount) {
  const investment = Math.max(0, Math.min(amount, state.finance.cash));

  state.finance.cash -= investment;

  // Each $5M adds 0.1 capacity (10% production increase per $5M)
  const capacityGain = (investment / 5_000_000) * 0.1;
  state.operations.capacity += capacityGain;

  // Integration risk: rapid expansion increases operational risk temporarily
  // Risk increases by 0.02 per 10% capacity added
  const integrationRisk = capacityGain * 0.2;
  state.risk.operational = clamp(state.risk.operational + integrationRisk, 0, 1);
}

/**
 * Set supplier strategy: 'single', 'dual', or 'multi'.
 *
 * Effects:
 * - operations.supplyStability: multi-source = more stable but complex
 * - finance.costs: more suppliers = higher coordination costs
 * - risk.operational: single source = higher disruption risk
 */
function applySupplierStrategy(state, strategy) {
  const strategies = {
    single: {
      stabilityDelta: -0.1,    // Fragile: single point of failure
      costIncrease: 0,         // Lowest cost (volume discount)
      operationalRisk: 0.15    // High disruption risk
    },
    dual: {
      stabilityDelta: 0.05,    // Moderate redundancy
      costIncrease: 2_000_000, // Some coordination overhead
      operationalRisk: 0.05    // Moderate risk
    },
    multi: {
      stabilityDelta: 0.15,    // High redundancy
      costIncrease: 5_000_000, // Significant coordination cost
      operationalRisk: -0.05   // Risk reduction from diversification
    }
  };

  const settings = strategies[strategy] || strategies.dual;

  state.operations.supplyStability = clamp(
    state.operations.supplyStability + settings.stabilityDelta,
    0.1,
    1
  );
  state.finance.costs += settings.costIncrease;
  state.risk.operational = clamp(
    state.risk.operational + settings.operationalRisk,
    0,
    1
  );
}

// =============================================================================
// R&D DECISIONS
// Controls innovation pace, product maturity, and technical debt
// =============================================================================

function applyRndDecisions(state, decisions) {
  if (decisions.innovationSpend != null) {
    applyInnovationSpend(state, decisions.innovationSpend);
  }
  if (decisions.technicalDebtReduction != null) {
    applyTechnicalDebtReduction(state, decisions.technicalDebtReduction);
  }
}

/**
 * Invest in product innovation.
 * @param {number} amount - R&D budget allocation
 *
 * Effects:
 * - finance.cash: decreases by investment
 * - operations.qualityLevel: increases (better product)
 * - market.demand: increases from product improvements (delayed effect modeled as immediate)
 */
function applyInnovationSpend(state, amount) {
  const investment = Math.max(0, Math.min(amount, state.finance.cash));

  state.finance.cash -= investment;

  // Quality improvement: $10M = 0.05 quality gain (diminishing returns implicit in cap)
  const qualityGain = (investment / 10_000_000) * 0.05;
  state.operations.qualityLevel = Math.min(1.5, state.operations.qualityLevel + qualityGain);

  // Demand boost from innovation: half the rate of quality gain
  // Better products attract customers
  const demandBoost = qualityGain * 0.5;
  state.market.demand += demandBoost;
}

/**
 * Invest in reducing technical debt.
 * @param {number} amount - Budget for debt reduction
 *
 * Effects:
 * - finance.cash: decreases by investment
 * - risk.operational: decreases (more stable systems)
 * - operations.qualityLevel: slight increase (cleaner architecture)
 */
function applyTechnicalDebtReduction(state, amount) {
  const investment = Math.max(0, Math.min(amount, state.finance.cash));

  state.finance.cash -= investment;

  // Risk reduction: $5M = 0.05 operational risk reduction
  const riskReduction = (investment / 5_000_000) * 0.05;
  state.risk.operational = clamp(state.risk.operational - riskReduction, 0, 1);

  // Quality uplift from cleaner systems: 1/3 the rate of risk reduction
  const qualityBoost = riskReduction / 3;
  state.operations.qualityLevel = Math.min(1.5, state.operations.qualityLevel + qualityBoost);
}

// =============================================================================
// SALES DECISIONS
// Converts demand into revenue under incentives and constraints
// =============================================================================

function applySalesDecisions(state, decisions) {
  if (decisions.revenueTarget != null) {
    applyRevenueTarget(state, decisions.revenueTarget);
  }
  if (decisions.incentiveStructure != null) {
    applyIncentiveStructure(state, decisions.incentiveStructure);
  }
}

/**
 * Set aggressive or conservative revenue targets.
 * @param {string} level - 'aggressive', 'standard', or 'conservative'
 *
 * Effects:
 * - market.marketShare: aggressive targets push for share gain
 * - risk.reputational: aggressive targets may lead to overselling/overpromising
 */
function applyRevenueTarget(state, level) {
  const targets = {
    aggressive: {
      shareGain: 0.02,       // Push for 2% market share gain
      reputationalRisk: 0.1  // Risk of overpromising to customers
    },
    standard: {
      shareGain: 0.005,      // Modest 0.5% share gain
      reputationalRisk: 0
    },
    conservative: {
      shareGain: 0,          // Maintain current position
      reputationalRisk: -0.02 // Slightly improved reputation (underpromise)
    }
  };

  const settings = targets[level] || targets.standard;

  state.market.marketShare = clamp(state.market.marketShare + settings.shareGain, 0, 1);
  state.risk.reputational = clamp(state.risk.reputational + settings.reputationalRisk, 0, 1);
}

/**
 * Adjust sales team incentive structure.
 * @param {string} type - 'volume', 'margin', or 'balanced'
 *
 * Effects:
 * - finance.costs: volume incentives cost more in commissions
 * - market.marketShare: volume focus drives share, margin focus sacrifices share
 */
function applyIncentiveStructure(state, type) {
  const structures = {
    volume: {
      costIncrease: 3_000_000, // Higher commission payouts
      shareDelta: 0.015       // 1.5% share gain from volume push
    },
    margin: {
      costIncrease: 1_000_000, // Lower commissions
      shareDelta: -0.005      // 0.5% share loss from selectivity
    },
    balanced: {
      costIncrease: 2_000_000, // Moderate commissions
      shareDelta: 0.005       // 0.5% share gain
    }
  };

  const settings = structures[type] || structures.balanced;

  state.finance.costs += settings.costIncrease;
  state.market.marketShare = clamp(state.market.marketShare + settings.shareDelta, 0, 1);
}

// =============================================================================
// LEGAL & REGULATORY DECISIONS
// Manages compliance, exposure, and license to operate
// =============================================================================

function applyLegalDecisions(state, decisions) {
  if (decisions.complianceInvestment != null) {
    applyComplianceInvestment(state, decisions.complianceInvestment);
  }
  if (decisions.regulatoryStrategy != null) {
    applyRegulatoryStrategy(state, decisions.regulatoryStrategy);
  }
}

/**
 * Invest in compliance programs and controls.
 * @param {number} amount - Compliance budget
 *
 * Effects:
 * - finance.cash: decreases by investment
 * - regulation.compliancePosture: improves
 * - risk.regulatory: decreases with better compliance
 */
function applyComplianceInvestment(state, amount) {
  const investment = Math.max(0, Math.min(amount, state.finance.cash));

  state.finance.cash -= investment;

  // Compliance improvement: $2M = 0.05 posture improvement
  const postureGain = (investment / 2_000_000) * 0.05;
  state.regulation.compliancePosture = Math.min(1.5, state.regulation.compliancePosture + postureGain);

  // Regulatory risk reduction: proportional to compliance improvement
  const riskReduction = postureGain * 0.8; // 80% of compliance gain translates to risk reduction
  state.risk.regulatory = clamp(state.risk.regulatory - riskReduction, 0, 1);
}

/**
 * Set regulatory engagement strategy.
 * @param {string} strategy - 'proactive', 'reactive', or 'minimal'
 *
 * Effects:
 * - regulation.scrutinyLevel: proactive engagement reduces scrutiny over time
 * - risk.reputational: minimal compliance creates reputational exposure
 */
function applyRegulatoryStrategy(state, strategy) {
  const strategies = {
    proactive: {
      scrutinyDelta: -0.05,     // Reduced scrutiny from good relationship
      reputationalRisk: -0.02  // Reputation boost from being a good actor
    },
    reactive: {
      scrutinyDelta: 0,        // No change
      reputationalRisk: 0
    },
    minimal: {
      scrutinyDelta: 0.1,      // Increased scrutiny from avoidance
      reputationalRisk: 0.05   // Reputational risk from perceived corner-cutting
    }
  };

  const settings = strategies[strategy] || strategies.reactive;

  state.regulation.scrutinyLevel = clamp(state.regulation.scrutinyLevel + settings.scrutinyDelta, 0, 1);
  state.risk.reputational = clamp(state.risk.reputational + settings.reputationalRisk, 0, 1);
}

// =============================================================================
// GENERAL MANAGEMENT DECISIONS
// Arbitrates conflicts and resolves deadlocks
// =============================================================================

function applyGmDecisions(state, decisions) {
  if (decisions.resourceReallocation != null) {
    applyResourceReallocation(state, decisions.resourceReallocation);
  }
  if (decisions.crisisResponse != null) {
    applyCrisisResponse(state, decisions.crisisResponse);
  }
}

/**
 * Reallocate resources between functions.
 * @param {Object} reallocation - { from: string, to: string, intensity: number (0-1) }
 *
 * Effects:
 * - Varies based on source and target functions
 * - Affects operations and risk metrics based on where resources flow
 */
function applyResourceReallocation(state, reallocation) {
  const { from, to, intensity = 0.5 } = reallocation;
  const effectMagnitude = intensity * 0.1; // Max 10% effect at full intensity

  // Source function loses capability
  const sourceEffects = {
    operations: () => {
      state.operations.capacity -= effectMagnitude;
      state.operations.capacity = Math.max(0.1, state.operations.capacity);
    },
    marketing: () => {
      state.market.demand -= effectMagnitude * 0.5;
      state.market.demand = Math.max(0.1, state.market.demand);
    },
    compliance: () => {
      state.regulation.compliancePosture -= effectMagnitude;
      state.regulation.compliancePosture = Math.max(0.1, state.regulation.compliancePosture);
    }
  };

  // Target function gains capability
  const targetEffects = {
    operations: () => {
      state.operations.capacity += effectMagnitude * 0.8; // 80% efficiency in transfer
      state.risk.operational -= effectMagnitude * 0.5;
      state.risk.operational = clamp(state.risk.operational, 0, 1);
    },
    marketing: () => {
      state.market.demand += effectMagnitude * 0.4;
      state.market.marketShare += effectMagnitude * 0.02;
      state.market.marketShare = Math.min(1, state.market.marketShare);
    },
    compliance: () => {
      state.regulation.compliancePosture += effectMagnitude * 0.8;
      state.risk.regulatory -= effectMagnitude * 0.5;
      state.risk.regulatory = clamp(state.risk.regulatory, 0, 1);
    }
  };

  if (sourceEffects[from]) sourceEffects[from]();
  if (targetEffects[to]) targetEffects[to]();
}

/**
 * Execute crisis response actions.
 * @param {string} response - 'transparent', 'defensive', or 'aggressive'
 *
 * Effects:
 * - risk.reputational: response style affects public perception
 * - regulation.scrutinyLevel: transparency reduces regulatory heat
 */
function applyCrisisResponse(state, response) {
  const responses = {
    transparent: {
      reputationalDelta: -0.1,  // Honesty reduces reputational damage
      scrutinyDelta: -0.05     // Regulators appreciate transparency
    },
    defensive: {
      reputationalDelta: 0.05,  // Defensiveness looks evasive
      scrutinyDelta: 0.05      // Regulators dig deeper
    },
    aggressive: {
      reputationalDelta: 0.15,  // Aggression backfires publicly
      scrutinyDelta: 0.1       // Regulators respond in kind
    }
  };

  const settings = responses[response] || responses.defensive;

  state.risk.reputational = clamp(state.risk.reputational + settings.reputationalDelta, 0, 1);
  state.regulation.scrutinyLevel = clamp(state.regulation.scrutinyLevel + settings.scrutinyDelta, 0, 1);
}

// =============================================================================
// UTILITIES
// =============================================================================

/**
 * Clamp a value between min and max bounds.
 */
function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
