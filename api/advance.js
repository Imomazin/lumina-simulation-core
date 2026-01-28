import { advanceTime } from "../engine/state.js";

export default function handler(req, res) {
  advanceTime(global.simState);
  res.status(200).json(global.simState);
}
