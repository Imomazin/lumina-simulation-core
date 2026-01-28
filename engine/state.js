// engine/state.js
// Core simulation state + time advancement logic

export function createInitialState() {
  return {
    round: 0,
    time: 0,

    finance: {
      cash: 1000000,
      revenue: 0,
      costs: 0,
      profit: 0,
    },

    operations: {
      capacity: 1.0,
      supplyStability: 1.0,
      qualityLevel: 1.0,
    },

    market: {
      demand: 1.0,
      priceIndex: 1.0,
      marketShare: 0.1,
    },

    regulation: {
      scrutinyLevel: 0.2,
      compliancePosture: 1.0,
    },

    history: [],
  };
}

export function advanceTime(state) {
  state.round += 1;
  state.time += 1;

  // Simple dynamics (placeholder but deterministic)
  state.market.demand *= 0.98 + Math.random() * 0.04;
  state.market.marketShare = Math.min(
    1,
    state.market.marketShare + 0.01 * state.operations.qualityLevel
  );

  state.finance.revenue =
    50000 * state.market.marketShare * state.market.demand;

  state.finance.costs =
    30000 * state.operations.capacity * state.regulation.scrutinyLevel;

  state.finance.profit =
    state.finance.revenue - state.finance.costs;

  state.finance.cash += state.finance.profit;

  state.history.push({
    round: state.round,
    revenue: state.finance.revenue,
    profit: state.finance.profit,
  });

  return state;
}
