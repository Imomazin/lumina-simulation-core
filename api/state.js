import { createInitialState } from "../engine/state.js";

let simState = global.simState || createInitialState();
global.simState = simState;

export default function handler(req, res) {
  res.status(200).json(simState);
}
