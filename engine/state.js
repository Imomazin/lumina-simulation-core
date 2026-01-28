// engine/state.js

export function createInitialState() {
    return {
      time: 0,
      round: 1,

      finance: {
        cash: 100_000_000,
        revenue: 0,
        costs: 0,
        profit: 0
      },
  
      risk: {
        operational: 0,
        regulatory: 0,
        reputational: 0,
        financial: 0
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
    return state;
  }
  