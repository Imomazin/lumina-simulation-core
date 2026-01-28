// index.js
// Express server for lumina-simulation-core

import express from 'express';
import { createInitialState, advanceTime } from './engine/state.js';
import { applyDecisions } from './engine/decision-engine.js';

const app = express();
const PORT = process.env.PORT || 3000;

// In-memory simulation state
let simState = structuredClone(createInitialState());

// Middleware
app.use(express.json());

// GET /state - Returns the full simulation state
app.get('/state', (req, res) => {
  res.json(simState);
});

// GET /summary - Returns a snapshot of key metrics
app.get('/summary', (req, res) => {
  res.json({
    round: simState.round,
    time: simState.time,
    finance: simState.finance,
    market: simState.market,
    operations: simState.operations
  });
});

// GET /history - Returns decision history
app.get('/history', (req, res) => {
  res.json({
    round: simState.round,
    totalDecisions: simState.history.length,
    history: simState.history
  });
});

// POST /advance - Advances time and returns updated state
app.post('/advance', (req, res) => {
  advanceTime(simState);
  res.json(simState);
});

// POST /decide - Apply role-based decisions
// Example body: { "marketing": { "campaignSpend": 5000000 }, "strategy": { "riskPosture": "aggressive" } }
app.post('/decide', (req, res) => {
  const decisions = req.body;

  if (!decisions || Object.keys(decisions).length === 0) {
    return res.status(400).json({ error: 'No decisions provided' });
  }

  applyDecisions(simState, decisions);
  advanceTime(simState);

  res.json({
    round: simState.round,
    time: simState.time,
    state: simState
  });
});

// POST /reset - Reset simulation to initial state
app.post('/reset', (req, res) => {
  simState = structuredClone(createInitialState());
  res.json({
    message: 'Simulation reset',
    state: simState
  });
});

// GET / - API documentation
app.get('/', (req, res) => {
  res.json({
    name: 'lumina-simulation-core',
    version: '1.0.0',
    endpoints: {
      'GET /': 'API documentation',
      'GET /state': 'Full simulation state',
      'GET /summary': 'Key metrics snapshot',
      'GET /history': 'Decision history',
      'POST /advance': 'Advance time by 1 tick',
      'POST /decide': 'Apply role decisions and advance',
      'POST /reset': 'Reset simulation'
    },
    roles: ['strategy', 'marketing', 'supply', 'rnd', 'sales', 'legal', 'gm'],
    exampleDecision: {
      strategy: { capitalAllocation: 10000000, riskPosture: 'balanced' },
      marketing: { priceChange: 5, campaignSpend: 5000000 },
      sales: { revenueTarget: 'standard', incentiveStructure: 'balanced' }
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Simulation server running on port ${PORT}`);
});

export default app;
