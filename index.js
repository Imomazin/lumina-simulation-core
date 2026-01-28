// index.js
// Express server for lumina-simulation-core (Vercel-ready)

import express from "express";
import { createInitialState, advanceTime } from "./engine/state.js";

const app = express();

// IMPORTANT: Vercel injects PORT, but Express must still listen
const PORT = process.env.PORT || 3000;

// In-memory simulation state (per deployment instance)
let simState = structuredClone(createInitialState());

app.use(express.json());

// Root sanity check
app.get("/", (req, res) => {
  res.json({
    status: "Lumina Simulation Engine running",
    time: new Date().toISOString(),
  });
});

// Return full simulation state
app.get("/api/state", (req, res) => {
  res.json(simState);
});

// Snapshot for dashboards
app.get("/api/summary", (req, res) => {
  res.json({
    round: simState.round,
    time: simState.time,
    finance: simState.finance,
    market: simState.market,
    operations: simState.operations,
  });
});

// Advance one simulation step
app.post("/api/advance", (req, res) => {
  advanceTime(simState);
  res.json(simState);
});

// Required for Vercel
app.listen(PORT, () => {
  console.log(`Simulation server running on port ${PORT}`);
});

export default app;
