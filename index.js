import express from "express";
import { createInitialState, advanceTime } from "./engine/state.js";

const app = express();
app.use(express.json());

let simState = structuredClone(createInitialState());

app.get("/", (req, res) => {
  res.json({
    status: "Lumina Simulation Engine running",
    time: new Date().toISOString()
  });
});

app.get("/state", (req, res) => {
  res.json(simState);
});

app.post("/advance", (req, res) => {
  advanceTime(simState);
  res.json(simState);
});

// IMPORTANT: export the app, DO NOT listen()
export default app;
