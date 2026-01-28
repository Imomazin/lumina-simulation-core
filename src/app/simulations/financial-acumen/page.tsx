'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Shield,
  Building2,
  ChevronLeft,
  ChevronRight,
  Clock,
  BarChart3,
  PieChart,
  Activity,
  Zap,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Wallet,
  CreditCard,
  Landmark,
  Scale,
  Calculator,
  FileText,
  AlertCircle,
  CheckCircle,
  XCircle,
  Gauge,
} from 'lucide-react';

// =============================================================================
// TYPES
// =============================================================================

type Role = 'cfo' | 'finance-director' | 'strategy-lead' | 'risk-officer';
type CreditRating = 'AAA' | 'AA' | 'A' | 'BBB' | 'BB' | 'B' | 'CCC' | 'D';

interface InvestmentProject {
  id: string;
  name: string;
  type: 'expansion' | 'maintenance' | 'innovation' | 'acquisition';
  requiredCapital: number;
  expectedNPV: number;
  irr: number;
  paybackYears: number;
  riskLevel: 'low' | 'medium' | 'high' | 'very-high';
  probability: number;
}

interface GameState {
  round: number;
  maxRounds: number;
  cashBalance: number;
  cashBurnRate: number;
  cashRunway: number;
  revenue: number;
  operatingIncome: number;
  netIncome: number;
  ebitda: number;
  debtToEquity: number;
  interestCoverage: number;
  creditRating: CreditRating;
  costOfDebt: number;
  costOfEquity: number;
  wacc: number;
  earningsPerShare: number;
  priceToEarnings: number;
  dividendYield: number;
  marketCap: number;
  valueAtRisk: number;
  bankruptcyRisk: number;
  liquidityStress: boolean;
  covenantBreach: boolean;
  economicCycle: 'expansion' | 'peak' | 'contraction' | 'trough';
  inflationRate: number;
  interestRateEnv: number;
  investmentPipeline: InvestmentProject[];
}

// =============================================================================
// MOCK DATA
// =============================================================================

const ROLES: Record<Role, { title: string; description: string; icon: typeof DollarSign }> = {
  cfo: {
    title: 'Chief Financial Officer',
    description: 'Owns financial strategy, capital structure, and investor relations',
    icon: DollarSign,
  },
  'finance-director': {
    title: 'Finance Director',
    description: 'Manages working capital, treasury, and financial operations',
    icon: Wallet,
  },
  'strategy-lead': {
    title: 'Strategy Lead',
    description: 'Drives investment decisions, M&A, and portfolio strategy',
    icon: Target,
  },
  'risk-officer': {
    title: 'Chief Risk Officer',
    description: 'Manages financial risk, hedging, and stress testing',
    icon: Shield,
  },
};

const INITIAL_PROJECTS: InvestmentProject[] = [
  { id: 'proj-1', name: 'North American Expansion', type: 'expansion', requiredCapital: 45, expectedNPV: 28, irr: 18.5, paybackYears: 3.2, riskLevel: 'medium', probability: 0.75 },
  { id: 'proj-2', name: 'AI Platform Upgrade', type: 'innovation', requiredCapital: 25, expectedNPV: 42, irr: 32, paybackYears: 2.1, riskLevel: 'high', probability: 0.55 },
  { id: 'proj-3', name: 'Manufacturing Modernization', type: 'maintenance', requiredCapital: 18, expectedNPV: 12, irr: 14, paybackYears: 4.5, riskLevel: 'low', probability: 0.9 },
  { id: 'proj-4', name: 'Competitor Acquisition', type: 'acquisition', requiredCapital: 120, expectedNPV: 85, irr: 22, paybackYears: 4.8, riskLevel: 'very-high', probability: 0.45 },
];

const INITIAL_STATE: GameState = {
  round: 1,
  maxRounds: 12,
  cashBalance: 145,
  cashBurnRate: 8.5,
  cashRunway: 17,
  revenue: 485,
  operatingIncome: 72,
  netIncome: 48,
  ebitda: 95,
  debtToEquity: 0.65,
  interestCoverage: 4.2,
  creditRating: 'BBB',
  costOfDebt: 5.8,
  costOfEquity: 11.2,
  wacc: 8.5,
  earningsPerShare: 3.45,
  priceToEarnings: 18.5,
  dividendYield: 2.1,
  marketCap: 2.8,
  valueAtRisk: 45,
  bankruptcyRisk: 8,
  liquidityStress: false,
  covenantBreach: false,
  economicCycle: 'expansion',
  inflationRate: 3.2,
  interestRateEnv: 5.25,
  investmentPipeline: INITIAL_PROJECTS,
};

// =============================================================================
// COMPONENTS
// =============================================================================

function CashRunwayGauge({ months, burnRate, balance }: { months: number; burnRate: number; balance: number }) {
  const getStatus = () => {
    if (months >= 18) return { color: 'emerald', text: 'Healthy Runway' };
    if (months >= 12) return { color: 'amber', text: 'Monitor Closely' };
    if (months >= 6) return { color: 'orange', text: 'Action Required' };
    return { color: 'red', text: 'CRITICAL' };
  };

  const status = getStatus();

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Cash Runway</h3>
        <Clock className="w-5 h-5 text-slate-500" />
      </div>

      <div className="relative h-48 flex items-end justify-center">
        {/* Runway visualization */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="relative h-full flex items-end">
            {Array.from({ length: 24 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: i < months ? '100%' : '20%' }}
                transition={{ duration: 0.5, delay: i * 0.02 }}
                className={`flex-1 mx-0.5 rounded-t ${
                  i < 6 ? 'bg-red-500' :
                  i < 12 ? 'bg-orange-500' :
                  i < 18 ? 'bg-amber-500' :
                  'bg-emerald-500'
                } ${i >= months ? 'opacity-20' : ''}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <span className={`text-4xl font-bold text-${status.color}-400`}>{months}</span>
          <span className="text-slate-500 ml-2">months</span>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium bg-${status.color}-500/20 text-${status.color}-400`}>
          {status.text}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
        <div>
          <span className="text-xs text-slate-500">Cash Balance</span>
          <p className="text-lg font-bold text-white">${balance}M</p>
        </div>
        <div>
          <span className="text-xs text-slate-500">Monthly Burn</span>
          <p className="text-lg font-bold text-red-400">-${burnRate}M</p>
        </div>
      </div>
    </div>
  );
}

function CreditRatingCard({ rating, costOfDebt }: { rating: CreditRating; costOfDebt: number }) {
  const ratingColors: Record<CreditRating, string> = {
    AAA: 'from-emerald-600 to-emerald-400',
    AA: 'from-emerald-600 to-green-400',
    A: 'from-green-600 to-lime-400',
    BBB: 'from-amber-600 to-yellow-400',
    BB: 'from-orange-600 to-amber-400',
    B: 'from-orange-600 to-red-400',
    CCC: 'from-red-600 to-red-400',
    D: 'from-red-800 to-red-600',
  };

  const ratingDescriptions: Record<CreditRating, string> = {
    AAA: 'Prime - Highest Quality',
    AA: 'High Grade',
    A: 'Upper Medium Grade',
    BBB: 'Lower Medium Grade',
    BB: 'Non-Investment Grade',
    B: 'Highly Speculative',
    CCC: 'Substantial Risks',
    D: 'Default',
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Credit Rating</h3>
        <CreditCard className="w-5 h-5 text-slate-500" />
      </div>

      <div className="flex items-center gap-4 mb-4">
        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${ratingColors[rating]} flex items-center justify-center`}>
          <span className="text-2xl font-black text-white">{rating}</span>
        </div>
        <div>
          <p className="text-slate-300 font-medium">{ratingDescriptions[rating]}</p>
          <p className="text-sm text-slate-500 mt-1">Cost of Debt: {costOfDebt}%</p>
        </div>
      </div>

      {['BB', 'B', 'CCC', 'D'].includes(rating) && (
        <div className="p-3 bg-red-900/30 border border-red-700 rounded-lg flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-red-400" />
          <span className="text-sm text-red-300">Below investment grade - Limited financing options</span>
        </div>
      )}
    </div>
  );
}

function BankruptcyRiskMeter({ risk }: { risk: number }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Bankruptcy Risk</h3>
        <AlertCircle className="w-5 h-5 text-slate-500" />
      </div>

      <div className="relative">
        <div className="h-4 bg-gradient-to-r from-emerald-600 via-amber-500 to-red-600 rounded-full" />
        <motion.div
          initial={{ left: 0 }}
          animate={{ left: `${risk}%` }}
          transition={{ duration: 1 }}
          className="absolute top-0 w-1 h-4 bg-white rounded-full transform -translate-x-1/2"
          style={{ left: `${risk}%` }}
        />
      </div>

      <div className="flex justify-between mt-2 text-xs text-slate-500">
        <span>Safe</span>
        <span>Caution</span>
        <span>Danger</span>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className={`text-3xl font-bold ${
          risk < 20 ? 'text-emerald-400' :
          risk < 50 ? 'text-amber-400' :
          'text-red-400'
        }`}>
          {risk}%
        </span>
        <span className="text-sm text-slate-400">
          {risk < 20 ? 'Low Risk' : risk < 50 ? 'Elevated Risk' : 'High Risk'}
        </span>
      </div>
    </div>
  );
}

function InvestmentPipelineCard({ projects }: { projects: InvestmentProject[] }) {
  const typeColors = {
    expansion: 'bg-blue-500',
    maintenance: 'bg-slate-500',
    innovation: 'bg-violet-500',
    acquisition: 'bg-amber-500',
  };

  const riskBadges = {
    low: 'bg-emerald-500/20 text-emerald-400',
    medium: 'bg-amber-500/20 text-amber-400',
    high: 'bg-orange-500/20 text-orange-400',
    'very-high': 'bg-red-500/20 text-red-400',
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white">Investment Pipeline</h3>
        <Calculator className="w-5 h-5 text-slate-500" />
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.01 }}
            className="p-4 bg-slate-800/50 rounded-xl border border-slate-700"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${typeColors[project.type]}`} />
                <div>
                  <h4 className="font-semibold text-white">{project.name}</h4>
                  <span className="text-xs text-slate-500 capitalize">{project.type}</span>
                </div>
              </div>
              <span className={`px-2 py-0.5 rounded text-xs font-medium ${riskBadges[project.riskLevel]}`}>
                {project.riskLevel.replace('-', ' ')}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-3 text-sm">
              <div>
                <span className="text-slate-500 text-xs">Capital</span>
                <p className="font-semibold text-white">${project.requiredCapital}M</p>
              </div>
              <div>
                <span className="text-slate-500 text-xs">NPV</span>
                <p className="font-semibold text-emerald-400">${project.expectedNPV}M</p>
              </div>
              <div>
                <span className="text-slate-500 text-xs">IRR</span>
                <p className="font-semibold text-white">{project.irr}%</p>
              </div>
              <div>
                <span className="text-slate-500 text-xs">Success</span>
                <p className="font-semibold text-amber-400">{(project.probability * 100).toFixed(0)}%</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function EconomicIndicators({ state }: { state: GameState }) {
  const cycleColors = {
    expansion: 'text-emerald-400 bg-emerald-500/10',
    peak: 'text-amber-400 bg-amber-500/10',
    contraction: 'text-red-400 bg-red-500/10',
    trough: 'text-blue-400 bg-blue-500/10',
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Economic Environment</h3>
        <Activity className="w-5 h-5 text-slate-500" />
      </div>

      <div className="mb-4">
        <span className={`px-3 py-1.5 rounded-lg text-sm font-semibold ${cycleColors[state.economicCycle]} capitalize`}>
          {state.economicCycle} Phase
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-400">Inflation Rate</span>
          <span className="text-sm font-semibold text-white">{state.inflationRate}%</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-400">Interest Rate</span>
          <span className="text-sm font-semibold text-white">{state.interestRateEnv}%</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-400">WACC</span>
          <span className="text-sm font-semibold text-white">{state.wacc}%</span>
        </div>
      </div>
    </div>
  );
}

function DecisionPanel({ role, onSubmit }: { role: Role; onSubmit: (decisions: Record<string, string | number>) => void }) {
  const [decisions, setDecisions] = useState<Record<string, string | number>>({});

  const roleDecisions: Record<Role, Array<{
    id: string;
    label: string;
    type: 'select' | 'slider';
    options?: Array<{ value: string; label: string }>;
    min?: number;
    max?: number;
    description: string;
  }>> = {
    cfo: [
      {
        id: 'financing',
        label: 'Financing Strategy',
        type: 'select',
        options: [
          { value: 'equity', label: 'Equity Issuance' },
          { value: 'debt', label: 'Debt Financing' },
          { value: 'hybrid', label: 'Hybrid Approach' },
          { value: 'organic', label: 'Organic Only' },
        ],
        description: 'How to fund operations and growth',
      },
      {
        id: 'dividendPolicy',
        label: 'Dividend Policy',
        type: 'select',
        options: [
          { value: 'increase', label: 'Increase (Signal Confidence)' },
          { value: 'maintain', label: 'Maintain Current' },
          { value: 'reduce', label: 'Reduce (Preserve Cash)' },
          { value: 'suspend', label: 'Suspend (Emergency)' },
        ],
        description: 'Shareholder return decision',
      },
    ],
    'finance-director': [
      {
        id: 'cashReserve',
        label: 'Cash Reserve Target',
        type: 'slider',
        min: 5,
        max: 50,
        description: 'Months of operating expenses to hold',
      },
      {
        id: 'workingCapital',
        label: 'Working Capital Focus',
        type: 'select',
        options: [
          { value: 'aggressive', label: 'Minimize (Higher Risk)' },
          { value: 'balanced', label: 'Balanced' },
          { value: 'conservative', label: 'Conservative (Higher Cost)' },
        ],
        description: 'Working capital management approach',
      },
    ],
    'strategy-lead': [
      {
        id: 'capexLimit',
        label: 'CapEx Limit',
        type: 'slider',
        min: 0,
        max: 100,
        description: 'Maximum capital expenditure (% of cash)',
      },
      {
        id: 'projectSelection',
        label: 'Project Selection Criteria',
        type: 'select',
        options: [
          { value: 'npv', label: 'Maximize NPV' },
          { value: 'irr', label: 'Highest IRR' },
          { value: 'payback', label: 'Fastest Payback' },
          { value: 'risk-adjusted', label: 'Risk-Adjusted Returns' },
        ],
        description: 'How to prioritize investments',
      },
    ],
    'risk-officer': [
      {
        id: 'hedgeRatio',
        label: 'Currency Hedge Ratio',
        type: 'slider',
        min: 0,
        max: 100,
        description: 'Percentage of exposure to hedge',
      },
      {
        id: 'riskTolerance',
        label: 'Risk Tolerance',
        type: 'select',
        options: [
          { value: 'conservative', label: 'Conservative (Lower Returns)' },
          { value: 'moderate', label: 'Moderate' },
          { value: 'aggressive', label: 'Aggressive (Higher Volatility)' },
        ],
        description: 'Overall risk appetite',
      },
    ],
  };

  const currentDecisions = roleDecisions[role] || [];

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-emerald-600/20 rounded-xl flex items-center justify-center">
          {(() => {
            const RoleIcon = ROLES[role].icon;
            return <RoleIcon className="w-6 h-6 text-emerald-400" />;
          })()}
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">{ROLES[role].title} Decisions</h2>
          <p className="text-sm text-slate-400">{ROLES[role].description}</p>
        </div>
      </div>

      <div className="space-y-6">
        {currentDecisions.map((decision) => (
          <div key={decision.id} className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">{decision.label}</label>
            <p className="text-xs text-slate-500 mb-2">{decision.description}</p>

            {decision.type === 'select' && decision.options && (
              <div className="grid grid-cols-2 gap-2">
                {decision.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setDecisions({ ...decisions, [decision.id]: opt.value })}
                    className={`p-3 rounded-lg border text-sm font-medium transition-all text-left ${
                      decisions[decision.id] === opt.value
                        ? 'border-emerald-500 bg-emerald-500/20 text-emerald-300'
                        : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-600'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {decision.type === 'slider' && (
              <div className="space-y-2">
                <input
                  type="range"
                  min={decision.min}
                  max={decision.max}
                  value={decisions[decision.id] as number || decision.min}
                  onChange={(e) => setDecisions({ ...decisions, [decision.id]: parseInt(e.target.value) })}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>{decision.min}</span>
                  <span className="font-medium text-emerald-400">{decisions[decision.id] || decision.min}</span>
                  <span>{decision.max}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => onSubmit(decisions)}
        className="mt-6 w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-semibold rounded-xl hover:from-emerald-500 hover:to-teal-500 transition-all flex items-center justify-center gap-2"
      >
        Submit Decisions
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

// =============================================================================
// MAIN PAGE
// =============================================================================

export default function FinancialAcumenPage() {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const [selectedRole, setSelectedRole] = useState<Role>('cfo');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleDecisionSubmit = (decisions: Record<string, string | number>) => {
    console.log('Submitted decisions:', decisions);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-white">Financial Acumen</h1>
                  <p className="text-xs text-slate-400">Capital, Risk, and Survival</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-500" />
                <span className="text-sm text-slate-400">Round</span>
                <span className="text-lg font-bold text-white">{gameState.round}</span>
                <span className="text-sm text-slate-500">/ {gameState.maxRounds}</span>
              </div>

              {gameState.liquidityStress && (
                <div className="px-3 py-1.5 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-400" />
                  <span className="text-sm font-medium text-red-300">Liquidity Stress</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Warning Banners */}
        {gameState.covenantBreach && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-900/50 border border-red-500 rounded-xl flex items-center gap-3"
          >
            <AlertTriangle className="w-6 h-6 text-red-400" />
            <div>
              <p className="font-semibold text-red-300">Covenant Breach Warning</p>
              <p className="text-sm text-red-200/80">Debt covenants have been breached. Lenders may accelerate repayment.</p>
            </div>
          </motion.div>
        )}

        {/* KPI Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {[
            { label: 'Revenue', value: `$${gameState.revenue}M`, icon: DollarSign, trend: 'up' },
            { label: 'EBITDA', value: `$${gameState.ebitda}M`, icon: BarChart3, trend: 'up' },
            { label: 'Net Income', value: `$${gameState.netIncome}M`, icon: TrendingUp, trend: 'neutral' },
            { label: 'Market Cap', value: `$${gameState.marketCap}B`, icon: Building2, trend: 'up' },
            { label: 'D/E Ratio', value: gameState.debtToEquity.toFixed(2), icon: Scale, trend: 'neutral' },
            { label: 'EPS', value: `$${gameState.earningsPerShare}`, icon: PieChart, trend: 'up' },
          ].map((kpi) => (
            <div key={kpi.label} className="bg-slate-900 rounded-xl p-4 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <kpi.icon className="w-4 h-4 text-slate-500" />
                {kpi.trend === 'up' && <ArrowUpRight className="w-4 h-4 text-emerald-400" />}
                {kpi.trend === 'down' && <ArrowDownRight className="w-4 h-4 text-red-400" />}
                {kpi.trend === 'neutral' && <Minus className="w-4 h-4 text-slate-400" />}
              </div>
              <p className="text-xs text-slate-500 mb-1">{kpi.label}</p>
              <p className="text-xl font-bold text-white">{kpi.value}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Role Selector */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {(Object.keys(ROLES) as Role[]).map((role) => {
                const RoleIcon = ROLES[role].icon;
                return (
                  <button
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                      selectedRole === role
                        ? 'bg-emerald-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    <RoleIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">{ROLES[role].title}</span>
                  </button>
                );
              })}
            </div>

            {/* Decision Panel */}
            <DecisionPanel role={selectedRole} onSubmit={handleDecisionSubmit} />

            {/* Investment Pipeline */}
            <InvestmentPipelineCard projects={gameState.investmentPipeline} />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Cash Runway */}
            <CashRunwayGauge
              months={gameState.cashRunway}
              burnRate={gameState.cashBurnRate}
              balance={gameState.cashBalance}
            />

            {/* Credit Rating */}
            <CreditRatingCard rating={gameState.creditRating} costOfDebt={gameState.costOfDebt} />

            {/* Bankruptcy Risk */}
            <BankruptcyRiskMeter risk={gameState.bankruptcyRisk} />

            {/* Economic Indicators */}
            <EconomicIndicators state={gameState} />
          </div>
        </div>
      </main>
    </div>
  );
}
