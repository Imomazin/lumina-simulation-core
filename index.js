import express from "express";
import { createInitialState, advanceTime } from "../engine/state.js";

const app = express();
app.use(express.json());

let simState = structuredClone(createInitialState());

app.get("/", (req, res) => {
  res.json({ status: "Lumina Simulation API live" });
});

app.get("/state", (req, res) => {
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

app.post("/advance", (req, res) => {
  advanceTime(simState);
  res.json(simState);
});

export default app;
