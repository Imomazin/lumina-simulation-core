'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Target,
  Users,
  DollarSign,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Clock,
  BarChart3,
  PieChart,
  Activity,
  Zap,
  Award,
  MapPin,
  UserMinus,
  UserPlus,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Percent,
  Heart,
  AlertCircle,
  Trophy,
  Flame,
  Gift,
  Handshake,
} from 'lucide-react';

// =============================================================================
// TYPES
// =============================================================================

type Role = 'head-of-sales' | 'regional-north' | 'regional-south' | 'marketing-liaison' | 'finance-liaison';

interface Territory {
  id: string;
  name: string;
  region: 'north' | 'south';
  potential: number;
  penetration: number;
  headcount: number;
  quotaAttainment: number;
  pipeline: number;
}

interface SalesRep {
  id: string;
  name: string;
  territory: string;
  performance: number;
  motivation: number;
  attritionRisk: 'low' | 'medium' | 'high';
  isTopPerformer: boolean;
}

interface GameState {
  round: number;
  maxRounds: number;
  revenue: number;
  revenueGrowth: number;
  bookings: number;
  pipeline: number;
  pipelineCoverage: number;
  grossMargin: number;
  averageDiscount: number;
  discountTrend: 'improving' | 'stable' | 'eroding';
  newCustomers: number;
  retention: number;
  nrr: number;
  ltv: number;
  cac: number;
  ltvCacRatio: number;
  territories: Territory[];
  reps: SalesRep[];
  totalHeadcount: number;
  attrition: number;
  burnoutIndex: number;
  winRate: number;
  avgDealSize: number;
  salesCycle: number;
  channelConflict: number;
  customerTrust: number;
  sandbagging: number;
}

// =============================================================================
// MOCK DATA
// =============================================================================

const ROLES: Record<Role, { title: string; description: string; icon: typeof Target }> = {
  'head-of-sales': {
    title: 'Head of Sales',
    description: 'Owns revenue targets, sales strategy, and team leadership',
    icon: Trophy,
  },
  'regional-north': {
    title: 'Regional Manager - North',
    description: 'Drives performance in northern territories',
    icon: MapPin,
  },
  'regional-south': {
    title: 'Regional Manager - South',
    description: 'Drives performance in southern territories',
    icon: MapPin,
  },
  'marketing-liaison': {
    title: 'Marketing Liaison',
    description: 'Aligns sales and marketing, manages lead generation',
    icon: Zap,
  },
  'finance-liaison': {
    title: 'Finance Liaison',
    description: 'Manages pricing authority, deal desk, and revenue recognition',
    icon: DollarSign,
  },
};

const INITIAL_TERRITORIES: Territory[] = [
  { id: 'ter-1', name: 'Northeast', region: 'north', potential: 85, penetration: 32, headcount: 12, quotaAttainment: 94, pipeline: 4.2 },
  { id: 'ter-2', name: 'Midwest', region: 'north', potential: 72, penetration: 28, headcount: 8, quotaAttainment: 87, pipeline: 2.8 },
  { id: 'ter-3', name: 'Southwest', region: 'south', potential: 78, penetration: 24, headcount: 10, quotaAttainment: 108, pipeline: 3.5 },
  { id: 'ter-4', name: 'Southeast', region: 'south', potential: 68, penetration: 35, headcount: 9, quotaAttainment: 92, pipeline: 2.9 },
];

const INITIAL_REPS: SalesRep[] = [
  { id: 'rep-1', name: 'Alex Chen', territory: 'Northeast', performance: 142, motivation: 85, attritionRisk: 'low', isTopPerformer: true },
  { id: 'rep-2', name: 'Sarah Johnson', territory: 'Southwest', performance: 128, motivation: 78, attritionRisk: 'medium', isTopPerformer: true },
  { id: 'rep-3', name: 'Mike Williams', territory: 'Midwest', performance: 95, motivation: 62, attritionRisk: 'high', isTopPerformer: false },
  { id: 'rep-4', name: 'Emma Davis', territory: 'Southeast', performance: 88, motivation: 71, attritionRisk: 'medium', isTopPerformer: false },
];

const INITIAL_STATE: GameState = {
  round: 1,
  maxRounds: 8,
  revenue: 42.5,
  revenueGrowth: 18,
  bookings: 48.2,
  pipeline: 145,
  pipelineCoverage: 3.2,
  grossMargin: 68,
  averageDiscount: 15,
  discountTrend: 'eroding',
  newCustomers: 128,
  retention: 88,
  nrr: 112,
  ltv: 45000,
  cac: 8500,
  ltvCacRatio: 5.3,
  territories: INITIAL_TERRITORIES,
  reps: INITIAL_REPS,
  totalHeadcount: 39,
  attrition: 12,
  burnoutIndex: 42,
  winRate: 28,
  avgDealSize: 32500,
  salesCycle: 45,
  channelConflict: 35,
  customerTrust: 72,
  sandbagging: 25,
};

// =============================================================================
// COMPONENTS
// =============================================================================

function RevenueGauge({ revenue, growth, target }: { revenue: number; growth: number; target: number }) {
  const attainment = (revenue / target) * 100;

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Revenue vs Target</h3>
        <Target className="w-5 h-5 text-slate-500" />
      </div>

      <div className="relative h-8 bg-slate-800 rounded-full overflow-hidden mb-4">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(attainment, 100)}%` }}
          transition={{ duration: 1 }}
          className={`h-full rounded-full ${
            attainment >= 100 ? 'bg-gradient-to-r from-emerald-600 to-emerald-400' :
            attainment >= 80 ? 'bg-gradient-to-r from-amber-600 to-amber-400' :
            'bg-gradient-to-r from-red-600 to-red-400'
          }`}
        />
        <div className="absolute left-[100%] top-0 bottom-0 w-0.5 bg-white/50 transform -translate-x-1/2" />
      </div>

      <div className="flex items-end justify-between">
        <div>
          <span className="text-4xl font-bold text-white">${revenue}M</span>
          <span className={`ml-2 text-sm font-medium ${growth > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
            {growth > 0 ? '+' : ''}{growth}% YoY
          </span>
        </div>
        <div className="text-right">
          <span className="text-sm text-slate-500">Target</span>
          <p className="text-lg font-bold text-slate-300">${target}M</p>
        </div>
      </div>
    </div>
  );
}

function TerritoryMap({ territories }: { territories: Territory[] }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white">Territory Performance</h3>
        <MapPin className="w-5 h-5 text-slate-500" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        {territories.map((territory) => {
          const isOnTrack = territory.quotaAttainment >= 100;
          return (
            <motion.div
              key={territory.id}
              whileHover={{ scale: 1.02 }}
              className={`p-4 rounded-xl border ${
                isOnTrack ? 'border-emerald-500/50 bg-emerald-500/10' : 'border-slate-700 bg-slate-800/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-white">{territory.name}</h4>
                {isOnTrack && <Trophy className="w-4 h-4 text-emerald-400" />}
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Quota Attainment</span>
                  <span className={`font-bold ${territory.quotaAttainment >= 100 ? 'text-emerald-400' : territory.quotaAttainment >= 80 ? 'text-amber-400' : 'text-red-400'}`}>
                    {territory.quotaAttainment}%
                  </span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${territory.quotaAttainment >= 100 ? 'bg-emerald-500' : territory.quotaAttainment >= 80 ? 'bg-amber-500' : 'bg-red-500'}`}
                    style={{ width: `${Math.min(territory.quotaAttainment, 120)}%` }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2 text-xs">
                  <div>
                    <span className="text-slate-500">Pipeline</span>
                    <p className="font-semibold text-white">${territory.pipeline}M</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Headcount</span>
                    <p className="font-semibold text-white">{territory.headcount}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function HealthIndicators({ state }: { state: GameState }) {
  const indicators = [
    {
      label: 'Customer Trust',
      value: state.customerTrust,
      threshold: 70,
      icon: Heart,
      warning: 'Trust erosion from aggressive sales tactics',
    },
    {
      label: 'Team Burnout',
      value: state.burnoutIndex,
      threshold: 50,
      icon: Flame,
      warning: 'Team burnout risk increasing',
      inverse: true,
    },
    {
      label: 'Sandbagging',
      value: state.sandbagging,
      threshold: 30,
      icon: AlertTriangle,
      warning: 'Gaming behavior detected in pipeline',
      inverse: true,
    },
  ];

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Sustainability Metrics</h3>
        <Activity className="w-5 h-5 text-slate-500" />
      </div>

      <div className="space-y-4">
        {indicators.map((ind) => {
          const isHealthy = ind.inverse ? ind.value < ind.threshold : ind.value >= ind.threshold;
          return (
            <div key={ind.label}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <ind.icon className={`w-4 h-4 ${isHealthy ? 'text-emerald-400' : 'text-red-400'}`} />
                  <span className="text-sm text-slate-300">{ind.label}</span>
                </div>
                <span className={`font-bold ${isHealthy ? 'text-emerald-400' : 'text-red-400'}`}>
                  {ind.value}%
                </span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${ind.value}%` }}
                  transition={{ duration: 1 }}
                  className={`h-full rounded-full ${isHealthy ? 'bg-emerald-500' : 'bg-red-500'}`}
                />
              </div>
              {!isHealthy && (
                <p className="text-xs text-red-400 mt-1">{ind.warning}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TopPerformersCard({ reps }: { reps: SalesRep[] }) {
  const topPerformers = reps.filter(r => r.isTopPerformer);
  const atRisk = reps.filter(r => r.attritionRisk === 'high');

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">Team Health</h3>
        <Users className="w-5 h-5 text-slate-500" />
      </div>

      {topPerformers.length > 0 && (
        <div className="mb-4">
          <p className="text-xs text-slate-500 mb-2">Top Performers</p>
          <div className="space-y-2">
            {topPerformers.map((rep) => (
              <div key={rep.id} className="flex items-center justify-between p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/30">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-white">{rep.name}</span>
                </div>
                <span className="text-sm font-bold text-emerald-400">{rep.performance}%</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {atRisk.length > 0 && (
        <div>
          <p className="text-xs text-slate-500 mb-2">Attrition Risk</p>
          <div className="space-y-2">
            {atRisk.map((rep) => (
              <div key={rep.id} className="flex items-center justify-between p-2 bg-red-500/10 rounded-lg border border-red-500/30">
                <div className="flex items-center gap-2">
                  <UserMinus className="w-4 h-4 text-red-400" />
                  <span className="text-sm text-white">{rep.name}</span>
                </div>
                <span className="text-xs px-2 py-0.5 bg-red-500/20 text-red-400 rounded">High Risk</span>
              </div>
            ))}
          </div>
        </div>
      )}
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
    'head-of-sales': [
      {
        id: 'quotaChange',
        label: 'Quota Adjustment',
        type: 'slider',
        min: -20,
        max: 30,
        description: 'Change to team quotas (%)',
      },
      {
        id: 'incentiveModel',
        label: 'Incentive Model',
        type: 'select',
        options: [
          { value: 'accelerators', label: 'Aggressive Accelerators' },
          { value: 'balanced', label: 'Balanced Comp' },
          { value: 'base-heavy', label: 'Base-Heavy (Retention)' },
        ],
        description: 'Compensation structure approach',
      },
    ],
    'regional-north': [
      {
        id: 'territoryFocus',
        label: 'Territory Focus',
        type: 'select',
        options: [
          { value: 'expansion', label: 'New Territory Expansion' },
          { value: 'penetration', label: 'Deeper Penetration' },
          { value: 'retention', label: 'Customer Retention' },
        ],
        description: 'Primary regional strategy',
      },
      {
        id: 'headcountRequest',
        label: 'Headcount Request',
        type: 'slider',
        min: -5,
        max: 10,
        description: 'Net headcount change',
      },
    ],
    'regional-south': [
      {
        id: 'territoryFocus',
        label: 'Territory Focus',
        type: 'select',
        options: [
          { value: 'expansion', label: 'New Territory Expansion' },
          { value: 'penetration', label: 'Deeper Penetration' },
          { value: 'retention', label: 'Customer Retention' },
        ],
        description: 'Primary regional strategy',
      },
      {
        id: 'headcountRequest',
        label: 'Headcount Request',
        type: 'slider',
        min: -5,
        max: 10,
        description: 'Net headcount change',
      },
    ],
    'marketing-liaison': [
      {
        id: 'leadQuality',
        label: 'Lead Quality vs Quantity',
        type: 'slider',
        min: 0,
        max: 100,
        description: '0 = Volume, 100 = Quality',
      },
      {
        id: 'salesAlignment',
        label: 'Sales Alignment',
        type: 'select',
        options: [
          { value: 'enterprise', label: 'Enterprise Focus' },
          { value: 'mid-market', label: 'Mid-Market Focus' },
          { value: 'smb', label: 'SMB Volume' },
        ],
        description: 'Marketing-Sales alignment priority',
      },
    ],
    'finance-liaison': [
      {
        id: 'discountAuthority',
        label: 'Discount Authority',
        type: 'slider',
        min: 5,
        max: 40,
        description: 'Maximum discount without approval (%)',
      },
      {
        id: 'dealApproval',
        label: 'Deal Approval Threshold',
        type: 'select',
        options: [
          { value: 'strict', label: 'Strict (Margin Protection)' },
          { value: 'standard', label: 'Standard Process' },
          { value: 'flexible', label: 'Flexible (Volume Focus)' },
        ],
        description: 'Deal desk approval criteria',
      },
    ],
  };

  const currentDecisions = roleDecisions[role] || [];

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-rose-600/20 rounded-xl flex items-center justify-center">
          {(() => {
            const RoleIcon = ROLES[role].icon;
            return <RoleIcon className="w-6 h-6 text-rose-400" />;
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
              <div className="space-y-2">
                {decision.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setDecisions({ ...decisions, [decision.id]: opt.value })}
                    className={`w-full p-3 rounded-lg border text-sm font-medium transition-all text-left ${
                      decisions[decision.id] === opt.value
                        ? 'border-rose-500 bg-rose-500/20 text-rose-300'
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
                  value={decisions[decision.id] as number || 0}
                  onChange={(e) => setDecisions({ ...decisions, [decision.id]: parseInt(e.target.value) })}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-rose-500"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>{decision.min}</span>
                  <span className="font-medium text-rose-400">{decisions[decision.id] || 0}</span>
                  <span>{decision.max}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => onSubmit(decisions)}
        className="mt-6 w-full py-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold rounded-xl hover:from-rose-500 hover:to-pink-500 transition-all flex items-center justify-center gap-2"
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

export default function SalesMasteryPage() {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const [selectedRole, setSelectedRole] = useState<Role>('head-of-sales');
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
                <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-white">Sales Mastery</h1>
                  <p className="text-xs text-slate-400">Growth Without Erosion</p>
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

              {gameState.discountTrend === 'eroding' && (
                <div className="px-3 py-1.5 bg-amber-500/20 border border-amber-500/30 rounded-lg flex items-center gap-2">
                  <TrendingDown className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-medium text-amber-300">Margin Erosion</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* KPI Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {[
            { label: 'Revenue', value: `$${gameState.revenue}M`, icon: DollarSign, trend: 'up' },
            { label: 'Bookings', value: `$${gameState.bookings}M`, icon: BarChart3, trend: 'up' },
            { label: 'Win Rate', value: `${gameState.winRate}%`, icon: Trophy, trend: 'neutral' },
            { label: 'Avg Deal', value: `$${(gameState.avgDealSize / 1000).toFixed(1)}K`, icon: Target, trend: 'up' },
            { label: 'Retention', value: `${gameState.retention}%`, icon: Heart, trend: 'down' },
            { label: 'LTV:CAC', value: `${gameState.ltvCacRatio}x`, icon: Activity, trend: 'up' },
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
            {/* Revenue Gauge */}
            <RevenueGauge revenue={gameState.revenue} growth={gameState.revenueGrowth} target={50} />

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
                        ? 'bg-rose-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    <RoleIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">{ROLES[role].title.split(' - ')[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Decision Panel */}
            <DecisionPanel role={selectedRole} onSubmit={handleDecisionSubmit} />

            {/* Territory Map */}
            <TerritoryMap territories={gameState.territories} />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Health Indicators */}
            <HealthIndicators state={gameState} />

            {/* Top Performers */}
            <TopPerformersCard reps={gameState.reps} />
          </div>
        </div>
      </main>
    </div>
  );
}
