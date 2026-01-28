export function createInitialState() {
  return {
    time: 0,
    round: 1,

    finance: {
      cash: 100000,
      burnRate: 5000,
      revenue: 0
    },

    operations: {
      capacity: 1.0,
      supplyStability: 1.0,
      qualityLevel: 1.0
    },

    market: {
      demand: 1.0,
      priceIndex: 1.0,
      marketShare: 0.1
    },

    regulation: {
      scrutinyLevel: 0.2,
      compliancePosture: 1.0
    },

    history: []
  };
}

export function advanceTime(state) {
  state.time += 1;
  state.round += 1;

  state.history.push({
    round: state.round,
    time: state.time,
    snapshot: {
      finance: { ...state.finance },
      market: { ...state.market },
      operations: { ...state.operations }
    }
  });

  return state;
}
