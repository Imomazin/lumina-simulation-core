// index.js
// Express server for lumina-simulation-core

import express from 'express';
import { createInitialState, advanceTime } from './engine/state.js';

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

// POST /advance - Advances time and returns updated state
app.post('/advance', (req, res) => {
  advanceTime(simState);
  res.json(simState);
});

// Start server
app.listen(PORT, () => {
  console.log(`Simulation server running on port ${PORT}`);
});

export default app;
