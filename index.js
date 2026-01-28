import express from "express";
import { createInitialState, advanceTime } from "./engine/state.js";

const app = express();
const PORT = process.env.PORT || 3000;

let simState = structuredClone(createInitialState());

app.use(express.json());

app.get("/state", (req, res) => {
  res.json(simState);
});

app.post("/advance", (req, res) => {
  advanceTime(simState);
  res.json(simState);
});

app.get("/summary", (req, res) => {
  res.json({
    round: simState.round,
    time: simState.time,
    finance: simState.finance,
    market: simState.market,
    operations: simState.operations
  });
});

app.listen(PORT, () => {
  console.log(`Simulation server running on port ${PORT}`);
});

export default app;
