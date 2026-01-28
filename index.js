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

// GET / - Visual Dashboard
app.get('/', (req, res) => {
  res.send(getDashboardHTML(simState));
});

// GET /api - API documentation
app.get('/api', (req, res) => {
  res.json({
    name: 'lumina-simulation-core',
    version: '1.0.0',
    endpoints: {
      'GET /': 'Visual Dashboard',
      'GET /api': 'API documentation',
      'GET /state': 'Full simulation state',
      'GET /summary': 'Key metrics snapshot',
      'GET /history': 'Decision history',
      'POST /advance': 'Advance time by 1 tick',
      'POST /decide': 'Apply role decisions and advance',
      'POST /reset': 'Reset simulation'
    },
    roles: ['strategy', 'marketing', 'supply', 'rnd', 'sales', 'legal', 'gm']
  });
});

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

// Dashboard HTML Generator
function getDashboardHTML(state) {
  const riskScore = ((state.risk.operational + state.risk.regulatory + state.risk.reputational + state.risk.financial) / 4 * 100).toFixed(1);
  const cashInMillions = (state.finance.cash / 1_000_000).toFixed(1);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lumina Simulation</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      min-height: 100vh;
      color: #fff;
      padding: 20px;
    }
    .container { max-width: 1200px; margin: 0 auto; }
    header {
      text-align: center;
      margin-bottom: 30px;
      padding: 20px;
      background: rgba(255,255,255,0.05);
      border-radius: 16px;
      border: 1px solid rgba(255,255,255,0.1);
    }
    h1 { font-size: 2.5rem; margin-bottom: 10px; }
    .subtitle { color: #888; font-size: 1.1rem; }
    .round-badge {
      display: inline-block;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 8px 24px;
      border-radius: 50px;
      font-size: 1.2rem;
      font-weight: bold;
      margin-top: 15px;
    }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-bottom: 30px; }
    .card {
      background: rgba(255,255,255,0.05);
      border-radius: 16px;
      padding: 24px;
      border: 1px solid rgba(255,255,255,0.1);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.3); }
    .card-title { font-size: 0.9rem; color: #888; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; }
    .metric { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.05); }
    .metric:last-child { border-bottom: none; }
    .metric-label { color: #aaa; }
    .metric-value { font-weight: bold; font-size: 1.1rem; }
    .metric-value.cash { color: #4ade80; }
    .metric-value.risk-low { color: #4ade80; }
    .metric-value.risk-med { color: #fbbf24; }
    .metric-value.risk-high { color: #f87171; }
    .progress-bar { width: 100%; height: 8px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden; margin-top: 5px; }
    .progress-fill { height: 100%; border-radius: 4px; transition: width 0.3s; }
    .progress-fill.green { background: linear-gradient(90deg, #4ade80, #22c55e); }
    .progress-fill.blue { background: linear-gradient(90deg, #60a5fa, #3b82f6); }
    .progress-fill.purple { background: linear-gradient(90deg, #a78bfa, #8b5cf6); }
    .progress-fill.orange { background: linear-gradient(90deg, #fb923c, #f97316); }
    .progress-fill.red { background: linear-gradient(90deg, #f87171, #ef4444); }
    .actions {
      display: flex;
      gap: 15px;
      flex-wrap: wrap;
      justify-content: center;
      margin-bottom: 30px;
    }
    button {
      padding: 14px 28px;
      border: none;
      border-radius: 12px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
    }
    button:hover { transform: scale(1.05); }
    button:active { transform: scale(0.98); }
    .btn-primary { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; }
    .btn-success { background: linear-gradient(135deg, #4ade80 0%, #22c55e 100%); color: #000; }
    .btn-warning { background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%); color: #000; }
    .btn-danger { background: linear-gradient(135deg, #f87171 0%, #ef4444 100%); color: #fff; }
    .decision-panel {
      background: rgba(255,255,255,0.05);
      border-radius: 16px;
      padding: 24px;
      border: 1px solid rgba(255,255,255,0.1);
      margin-bottom: 30px;
    }
    .decision-panel h3 { margin-bottom: 20px; }
    .decision-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
    .decision-item label { display: block; color: #888; font-size: 0.85rem; margin-bottom: 5px; }
    select, input {
      width: 100%;
      padding: 10px;
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 8px;
      background: rgba(255,255,255,0.05);
      color: #fff;
      font-size: 1rem;
    }
    select option { background: #1a1a2e; }
    .status { text-align: center; padding: 15px; color: #888; font-style: italic; }
    #notification {
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 15px 25px;
      border-radius: 12px;
      font-weight: 600;
      display: none;
      z-index: 1000;
    }
    #notification.success { background: #4ade80; color: #000; display: block; }
    #notification.error { background: #f87171; color: #fff; display: block; }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>Lumina Simulation</h1>
      <p class="subtitle">Cross-functional Business Decision Simulator</p>
      <div class="round-badge">Round ${state.round} | Time ${state.time}</div>
    </header>

    <div class="actions">
      <button class="btn-primary" onclick="advanceTime()">⏱️ Advance Time</button>
      <button class="btn-success" onclick="submitDecisions()">✓ Submit Decisions</button>
      <button class="btn-danger" onclick="resetSim()">↺ Reset Simulation</button>
    </div>

    <div class="grid">
      <div class="card">
        <div class="card-title">💰 Finance</div>
        <div class="metric">
          <span class="metric-label">Cash</span>
          <span class="metric-value cash">$${cashInMillions}M</span>
        </div>
        <div class="metric">
          <span class="metric-label">Revenue</span>
          <span class="metric-value">$${(state.finance.revenue / 1_000_000).toFixed(1)}M</span>
        </div>
        <div class="metric">
          <span class="metric-label">Costs</span>
          <span class="metric-value">$${(state.finance.costs / 1_000_000).toFixed(1)}M</span>
        </div>
        <div class="metric">
          <span class="metric-label">Profit</span>
          <span class="metric-value">$${(state.finance.profit / 1_000_000).toFixed(1)}M</span>
        </div>
      </div>

      <div class="card">
        <div class="card-title">📊 Market</div>
        <div class="metric">
          <span class="metric-label">Demand</span>
          <span class="metric-value">${(state.market.demand * 100).toFixed(0)}%</span>
        </div>
        <div class="progress-bar"><div class="progress-fill blue" style="width: ${state.market.demand * 100}%"></div></div>
        <div class="metric">
          <span class="metric-label">Price Index</span>
          <span class="metric-value">${state.market.priceIndex.toFixed(2)}</span>
        </div>
        <div class="metric">
          <span class="metric-label">Market Share</span>
          <span class="metric-value">${(state.market.marketShare * 100).toFixed(1)}%</span>
        </div>
        <div class="progress-bar"><div class="progress-fill purple" style="width: ${state.market.marketShare * 100}%"></div></div>
      </div>

      <div class="card">
        <div class="card-title">⚙️ Operations</div>
        <div class="metric">
          <span class="metric-label">Capacity</span>
          <span class="metric-value">${(state.operations.capacity * 100).toFixed(0)}%</span>
        </div>
        <div class="progress-bar"><div class="progress-fill green" style="width: ${Math.min(state.operations.capacity * 100, 100)}%"></div></div>
        <div class="metric">
          <span class="metric-label">Supply Stability</span>
          <span class="metric-value">${(state.operations.supplyStability * 100).toFixed(0)}%</span>
        </div>
        <div class="progress-bar"><div class="progress-fill green" style="width: ${state.operations.supplyStability * 100}%"></div></div>
        <div class="metric">
          <span class="metric-label">Quality Level</span>
          <span class="metric-value">${(state.operations.qualityLevel * 100).toFixed(0)}%</span>
        </div>
        <div class="progress-bar"><div class="progress-fill green" style="width: ${Math.min(state.operations.qualityLevel * 100, 100)}%"></div></div>
      </div>

      <div class="card">
        <div class="card-title">⚠️ Risk Profile</div>
        <div class="metric">
          <span class="metric-label">Operational</span>
          <span class="metric-value ${getRiskClass(state.risk.operational)}">${(state.risk.operational * 100).toFixed(0)}%</span>
        </div>
        <div class="progress-bar"><div class="progress-fill ${state.risk.operational > 0.5 ? 'red' : 'orange'}" style="width: ${state.risk.operational * 100}%"></div></div>
        <div class="metric">
          <span class="metric-label">Regulatory</span>
          <span class="metric-value ${getRiskClass(state.risk.regulatory)}">${(state.risk.regulatory * 100).toFixed(0)}%</span>
        </div>
        <div class="progress-bar"><div class="progress-fill ${state.risk.regulatory > 0.5 ? 'red' : 'orange'}" style="width: ${state.risk.regulatory * 100}%"></div></div>
        <div class="metric">
          <span class="metric-label">Reputational</span>
          <span class="metric-value ${getRiskClass(state.risk.reputational)}">${(state.risk.reputational * 100).toFixed(0)}%</span>
        </div>
        <div class="progress-bar"><div class="progress-fill ${state.risk.reputational > 0.5 ? 'red' : 'orange'}" style="width: ${state.risk.reputational * 100}%"></div></div>
        <div class="metric">
          <span class="metric-label">Financial</span>
          <span class="metric-value ${getRiskClass(state.risk.financial)}">${(state.risk.financial * 100).toFixed(0)}%</span>
        </div>
        <div class="progress-bar"><div class="progress-fill ${state.risk.financial > 0.5 ? 'red' : 'orange'}" style="width: ${state.risk.financial * 100}%"></div></div>
      </div>

      <div class="card">
        <div class="card-title">📋 Regulation</div>
        <div class="metric">
          <span class="metric-label">Scrutiny Level</span>
          <span class="metric-value">${(state.regulation.scrutinyLevel * 100).toFixed(0)}%</span>
        </div>
        <div class="progress-bar"><div class="progress-fill orange" style="width: ${state.regulation.scrutinyLevel * 100}%"></div></div>
        <div class="metric">
          <span class="metric-label">Compliance Posture</span>
          <span class="metric-value">${(state.regulation.compliancePosture * 100).toFixed(0)}%</span>
        </div>
        <div class="progress-bar"><div class="progress-fill green" style="width: ${Math.min(state.regulation.compliancePosture * 100, 100)}%"></div></div>
      </div>

      <div class="card">
        <div class="card-title">📜 History</div>
        <div class="metric">
          <span class="metric-label">Decisions Made</span>
          <span class="metric-value">${state.history.length}</span>
        </div>
        <div class="status">${state.history.length === 0 ? 'No decisions yet' : 'Last: Round ' + (state.history[state.history.length - 1]?.time || 0)}</div>
      </div>
    </div>

    <div class="decision-panel">
      <h3>📝 Make Decisions</h3>
      <div class="decision-grid">
        <div class="decision-item">
          <label>Strategy - Risk Posture</label>
          <select id="riskPosture">
            <option value="">-- Select --</option>
            <option value="aggressive">Aggressive</option>
            <option value="balanced">Balanced</option>
            <option value="conservative">Conservative</option>
          </select>
        </div>
        <div class="decision-item">
          <label>Strategy - Capital ($M)</label>
          <input type="number" id="capitalAllocation" placeholder="e.g. 10" min="0" max="100">
        </div>
        <div class="decision-item">
          <label>Marketing - Price Change (%)</label>
          <input type="number" id="priceChange" placeholder="e.g. 5 or -5" min="-50" max="50">
        </div>
        <div class="decision-item">
          <label>Marketing - Campaign ($M)</label>
          <input type="number" id="campaignSpend" placeholder="e.g. 5" min="0" max="50">
        </div>
        <div class="decision-item">
          <label>Supply - Supplier Strategy</label>
          <select id="supplierStrategy">
            <option value="">-- Select --</option>
            <option value="single">Single Source</option>
            <option value="dual">Dual Source</option>
            <option value="multi">Multi Source</option>
          </select>
        </div>
        <div class="decision-item">
          <label>Sales - Revenue Target</label>
          <select id="revenueTarget">
            <option value="">-- Select --</option>
            <option value="aggressive">Aggressive</option>
            <option value="standard">Standard</option>
            <option value="conservative">Conservative</option>
          </select>
        </div>
        <div class="decision-item">
          <label>Legal - Regulatory Strategy</label>
          <select id="regulatoryStrategy">
            <option value="">-- Select --</option>
            <option value="proactive">Proactive</option>
            <option value="reactive">Reactive</option>
            <option value="minimal">Minimal</option>
          </select>
        </div>
        <div class="decision-item">
          <label>R&D - Innovation ($M)</label>
          <input type="number" id="innovationSpend" placeholder="e.g. 10" min="0" max="50">
        </div>
      </div>
    </div>
  </div>

  <div id="notification"></div>

  <script>
    function showNotification(message, type) {
      const notif = document.getElementById('notification');
      notif.textContent = message;
      notif.className = type;
      setTimeout(() => notif.className = '', 3000);
    }

    async function advanceTime() {
      const res = await fetch('/advance', { method: 'POST' });
      if (res.ok) {
        showNotification('Time advanced!', 'success');
        setTimeout(() => location.reload(), 500);
      }
    }

    async function resetSim() {
      if (confirm('Reset simulation to initial state?')) {
        const res = await fetch('/reset', { method: 'POST' });
        if (res.ok) {
          showNotification('Simulation reset!', 'success');
          setTimeout(() => location.reload(), 500);
        }
      }
    }

    async function submitDecisions() {
      const decisions = {};

      const riskPosture = document.getElementById('riskPosture').value;
      const capitalAllocation = document.getElementById('capitalAllocation').value;
      if (riskPosture || capitalAllocation) {
        decisions.strategy = {};
        if (riskPosture) decisions.strategy.riskPosture = riskPosture;
        if (capitalAllocation) decisions.strategy.capitalAllocation = parseFloat(capitalAllocation) * 1_000_000;
      }

      const priceChange = document.getElementById('priceChange').value;
      const campaignSpend = document.getElementById('campaignSpend').value;
      if (priceChange || campaignSpend) {
        decisions.marketing = {};
        if (priceChange) decisions.marketing.priceChange = parseFloat(priceChange);
        if (campaignSpend) decisions.marketing.campaignSpend = parseFloat(campaignSpend) * 1_000_000;
      }

      const supplierStrategy = document.getElementById('supplierStrategy').value;
      if (supplierStrategy) {
        decisions.supply = { supplierStrategy };
      }

      const revenueTarget = document.getElementById('revenueTarget').value;
      if (revenueTarget) {
        decisions.sales = { revenueTarget };
      }

      const regulatoryStrategy = document.getElementById('regulatoryStrategy').value;
      if (regulatoryStrategy) {
        decisions.legal = { regulatoryStrategy };
      }

      const innovationSpend = document.getElementById('innovationSpend').value;
      if (innovationSpend) {
        decisions.rnd = { innovationSpend: parseFloat(innovationSpend) * 1_000_000 };
      }

      if (Object.keys(decisions).length === 0) {
        showNotification('Please make at least one decision', 'error');
        return;
      }

      const res = await fetch('/decide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(decisions)
      });

      if (res.ok) {
        showNotification('Decisions applied!', 'success');
        setTimeout(() => location.reload(), 500);
      } else {
        showNotification('Error applying decisions', 'error');
      }
    }
  </script>
</body>
</html>`;
}

function getRiskClass(value) {
  if (value < 0.3) return 'risk-low';
  if (value < 0.6) return 'risk-med';
  return 'risk-high';
}

// Start server
app.listen(PORT, () => {
  console.log(`Simulation server running on port ${PORT}`);
});

export default app;
