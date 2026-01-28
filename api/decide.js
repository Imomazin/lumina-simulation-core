import { applyDecisions } from "../engine/decision-engine.js";
import { advanceTime } from "../engine/state.js";

export default function handler(req, res) {
  const decisions = req.body;

  if (!decisions || Object.keys(decisions).length === 0) {
    return res.status(400).json({ error: "No decisions provided" });
  }

  applyDecisions(global.simState, decisions);
  advanceTime(global.simState);

  res.status(200).json(global.simState);
}
