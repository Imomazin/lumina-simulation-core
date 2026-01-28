export default function handler(req, res) {
  const s = global.simState;

  res.status(200).json({
    round: s.round,
    time: s.time,
    finance: s.finance,
    market: s.market,
    operations: s.operations
  });
}
