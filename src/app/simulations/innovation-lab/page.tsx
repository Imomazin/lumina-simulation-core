'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Lightbulb,
  Rocket,
  Beaker,
  GitBranch,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Clock,
  BarChart3,
  Activity,
  Zap,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Layers,
  FlaskConical,
  Sparkles,
  XCircle,
  CheckCircle,
  PauseCircle,
  PlayCircle,
  TrendingUp,
  Shield,
  DollarSign,
  Code,
  Cog,
} from 'lucide-react';

// =============================================================================
// TYPES
// =============================================================================

type Role = 'head-of-rnd' | 'product-strategy' | 'finance-liaison' | 'operations-liaison';
type ProjectStage = 'ideation' | 'research' | 'development' | 'testing' | 'launch' | 'scale' | 'killed';
type Horizon = 'H1' | 'H2' | 'H3';
type ProjectType = 'incremental' | 'adjacent' | 'breakthrough';

interface InnovationProject {
  id: string;
  name: string;
  type: ProjectType;
  stage: ProjectStage;
  horizon: Horizon;
  technicalReadiness: number;
  technicalRisk: number;
  marketPotential: number;
  completion: number;
  investment: number;
  burnRate: number;
  teamSize: number;
  morale: number;
  surpriseFactor: number;
  cannibalizationRisk: number;
}

interface GameState {
  round: number;
  maxRounds: number;
  totalBudget: number;
  totalSpend: number;
  projects: InnovationProject[];
  incrementalShare: number;
  adjacentShare: number;
  breakthroughShare: number;
  h1Share: number;
  h2Share: number;
  h3Share: number;
  pipelineValue: number;
  patentsGranted: number;
  patentsPending: number;
  timeToMarket: number;
  successRate: number;
  technicalDebt: number;
  platformHealth: number;
  revenueFromNew: number;
  creativityIndex: number;
  riskTolerance: number;
  technologyGap: number;
}

// =============================================================================
// MOCK DATA
// =============================================================================

const ROLES: Record<Role, { title: string; description: string; icon: typeof Lightbulb }> = {
  'head-of-rnd': {
    title: 'Head of R&D',
    description: 'Owns innovation portfolio, technology roadmap, and research direction',
    icon: Beaker,
  },
  'product-strategy': {
    title: 'Product Strategy Lead',
    description: 'Bridges innovation and market, manages product-market fit',
    icon: Target,
  },
  'finance-liaison': {
    title: 'Finance Liaison',
    description: 'Manages R&D budget allocation and ROI tracking',
    icon: DollarSign,
  },
  'operations-liaison': {
    title: 'Operations Liaison',
    description: 'Ensures manufacturability and operational readiness',
    icon: Cog,
  },
};

const INITIAL_PROJECTS: InnovationProject[] = [
  { id: 'proj-1', name: 'Performance Optimization 2.0', type: 'incremental', stage: 'development', horizon: 'H1', technicalReadiness: 7, technicalRisk: 15, marketPotential: 45, completion: 68, investment: 8.5, burnRate: 1.2, teamSize: 12, morale: 78, surpriseFactor: 0, cannibalizationRisk: 5 },
  { id: 'proj-2', name: 'AI-Powered Analytics', type: 'adjacent', stage: 'research', horizon: 'H2', technicalReadiness: 4, technicalRisk: 45, marketPotential: 85, completion: 32, investment: 12, burnRate: 2.1, teamSize: 8, morale: 82, surpriseFactor: -5, cannibalizationRisk: 20 },
  { id: 'proj-3', name: 'Quantum Computing Integration', type: 'breakthrough', stage: 'ideation', horizon: 'H3', technicalReadiness: 2, technicalRisk: 85, marketPotential: 200, completion: 12, investment: 5, burnRate: 0.8, teamSize: 4, morale: 95, surpriseFactor: 10, cannibalizationRisk: 0 },
  { id: 'proj-4', name: 'Mobile Platform Expansion', type: 'adjacent', stage: 'testing', horizon: 'H1', technicalReadiness: 8, technicalRisk: 25, marketPotential: 65, completion: 85, investment: 6.5, burnRate: 0.9, teamSize: 10, morale: 72, surpriseFactor: -3, cannibalizationRisk: 35 },
];

const INITIAL_STATE: GameState = {
  round: 1,
  maxRounds: 10,
  totalBudget: 50,
  totalSpend: 32,
  projects: INITIAL_PROJECTS,
  incrementalShare: 35,
  adjacentShare: 45,
  breakthroughShare: 20,
  h1Share: 40,
  h2Share: 35,
  h3Share: 25,
  pipelineValue: 285,
  patentsGranted: 12,
  patentsPending: 8,
  timeToMarket: 14,
  successRate: 42,
  technicalDebt: 35,
  platformHealth: 72,
  revenueFromNew: 18,
  creativityIndex: 68,
  riskTolerance: 55,
  technologyGap: 12,
};

// =============================================================================
// COMPONENTS
// =============================================================================

function PortfolioBalance({ state }: { state: GameState }) {
  const typeData = [
    { label: 'Incremental', value: state.incrementalShare, color: 'bg-blue-500', ideal: 70 },
    { label: 'Adjacent', value: state.adjacentShare, color: 'bg-violet-500', ideal: 20 },
    { label: 'Breakthrough', value: state.breakthroughShare, color: 'bg-amber-500', ideal: 10 },
  ];

  const horizonData = [
    { label: 'H1 (Now)', value: state.h1Share, color: 'bg-emerald-500' },
    { label: 'H2 (Near)', value: state.h2Share, color: 'bg-cyan-500' },
    { label: 'H3 (Future)', value: state.h3Share, color: 'bg-purple-500' },
  ];

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white">Portfolio Balance</h3>
        <Layers className="w-5 h-5 text-slate-500" />
      </div>

      <div className="space-y-6">
        {/* By Type */}
        <div>
          <p className="text-xs text-slate-500 mb-3">By Innovation Type (70-20-10 Rule)</p>
          <div className="h-6 rounded-full overflow-hidden flex">
            {typeData.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`${item.color} relative group`}
              >
                {item.value > 15 && (
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                    {item.value}%
                  </span>
                )}
              </motion.div>
            ))}
          </div>
          <div className="flex gap-4 mt-2">
            {typeData.map((item) => (
              <div key={item.label} className="flex items-center gap-1.5 text-xs">
                <div className={`w-2 h-2 rounded-full ${item.color}`} />
                <span className="text-slate-400">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* By Horizon */}
        <div>
          <p className="text-xs text-slate-500 mb-3">By Time Horizon</p>
          <div className="h-6 rounded-full overflow-hidden flex">
            {horizonData.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`${item.color} relative`}
              >
                {item.value > 15 && (
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                    {item.value}%
                  </span>
                )}
              </motion.div>
            ))}
          </div>
          <div className="flex gap-4 mt-2">
            {horizonData.map((item) => (
              <div key={item.label} className="flex items-center gap-1.5 text-xs">
                <div className={`w-2 h-2 rounded-full ${item.color}`} />
                <span className="text-slate-400">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectPipeline({ projects }: { projects: InnovationProject[] }) {
  const stageOrder: ProjectStage[] = ['ideation', 'research', 'development', 'testing', 'launch', 'scale'];

  const typeColors = {
    incremental: 'border-blue-500 bg-blue-500/10',
    adjacent: 'border-violet-500 bg-violet-500/10',
    breakthrough: 'border-amber-500 bg-amber-500/10',
  };

  const stageIcons: Record<ProjectStage, typeof Lightbulb> = {
    ideation: Lightbulb,
    research: Beaker,
    development: Code,
    testing: FlaskConical,
    launch: Rocket,
    scale: TrendingUp,
    killed: XCircle,
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white">Innovation Pipeline</h3>
        <GitBranch className="w-5 h-5 text-slate-500" />
      </div>

      <div className="space-y-4">
        {projects.map((project) => {
          const StageIcon = stageIcons[project.stage];
          return (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.01 }}
              className={`p-4 rounded-xl border-2 ${typeColors[project.type]}`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
                    <StageIcon className="w-5 h-5 text-slate-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{project.name}</h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-xs text-slate-500 capitalize">{project.type}</span>
                      <span className="text-xs text-slate-600">•</span>
                      <span className="text-xs text-slate-500">{project.horizon}</span>
                      <span className="text-xs text-slate-600">•</span>
                      <span className="text-xs text-slate-500 capitalize">{project.stage}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-white">{project.completion}%</span>
                  <p className="text-xs text-slate-500">Complete</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${project.completion}%` }}
                  transition={{ duration: 1 }}
                  className={`h-full rounded-full ${
                    project.type === 'breakthrough' ? 'bg-amber-500' :
                    project.type === 'adjacent' ? 'bg-violet-500' :
                    'bg-blue-500'
                  }`}
                />
              </div>

              <div className="grid grid-cols-4 gap-3 text-xs">
                <div>
                  <span className="text-slate-500">TRL</span>
                  <p className="font-semibold text-white">{project.technicalReadiness}/9</p>
                </div>
                <div>
                  <span className="text-slate-500">Risk</span>
                  <p className={`font-semibold ${project.technicalRisk > 50 ? 'text-red-400' : project.technicalRisk > 25 ? 'text-amber-400' : 'text-emerald-400'}`}>
                    {project.technicalRisk}%
                  </p>
                </div>
                <div>
                  <span className="text-slate-500">Market</span>
                  <p className="font-semibold text-emerald-400">${project.marketPotential}M</p>
                </div>
                <div>
                  <span className="text-slate-500">Burn</span>
                  <p className="font-semibold text-white">${project.burnRate}M/mo</p>
                </div>
              </div>

              {project.cannibalizationRisk > 25 && (
                <div className="mt-3 p-2 bg-amber-900/30 border border-amber-700 rounded-lg flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span className="text-xs text-amber-300">Cannibalization risk: {project.cannibalizationRisk}%</span>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

function TechnicalHealthCard({ debt, platformHealth }: { debt: number; platformHealth: number }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Technical Health</h3>
        <Code className="w-5 h-5 text-slate-500" />
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-slate-400">Technical Debt</span>
            <span className={`font-bold ${debt < 30 ? 'text-emerald-400' : debt < 50 ? 'text-amber-400' : 'text-red-400'}`}>
              {debt}%
            </span>
          </div>
          <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${debt}%` }}
              transition={{ duration: 1 }}
              className={`h-full rounded-full ${debt < 30 ? 'bg-emerald-500' : debt < 50 ? 'bg-amber-500' : 'bg-red-500'}`}
            />
          </div>
          {debt > 50 && (
            <p className="text-xs text-red-400 mt-1">High debt slowing velocity</p>
          )}
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-slate-400">Platform Health</span>
            <span className={`font-bold ${platformHealth >= 70 ? 'text-emerald-400' : platformHealth >= 50 ? 'text-amber-400' : 'text-red-400'}`}>
              {platformHealth}%
            </span>
          </div>
          <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${platformHealth}%` }}
              transition={{ duration: 1 }}
              className={`h-full rounded-full ${platformHealth >= 70 ? 'bg-emerald-500' : platformHealth >= 50 ? 'bg-amber-500' : 'bg-red-500'}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function InnovationMetrics({ state }: { state: GameState }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Innovation Metrics</h3>
        <Sparkles className="w-5 h-5 text-slate-500" />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-slate-400">Pipeline Value</span>
          <span className="text-xl font-bold text-emerald-400">${state.pipelineValue}M</span>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
          <div>
            <span className="text-xs text-slate-500">Patents Granted</span>
            <p className="text-lg font-bold text-white">{state.patentsGranted}</p>
          </div>
          <div>
            <span className="text-xs text-slate-500">Pending</span>
            <p className="text-lg font-bold text-amber-400">{state.patentsPending}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
          <div>
            <span className="text-xs text-slate-500">Time to Market</span>
            <p className="text-lg font-bold text-white">{state.timeToMarket} mo</p>
          </div>
          <div>
            <span className="text-xs text-slate-500">Success Rate</span>
            <p className={`text-lg font-bold ${state.successRate >= 50 ? 'text-emerald-400' : 'text-amber-400'}`}>
              {state.successRate}%
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800">
          <span className="text-xs text-slate-500">Revenue from New Products</span>
          <p className="text-2xl font-bold text-white">{state.revenueFromNew}%</p>
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
    'head-of-rnd': [
      {
        id: 'portfolioMix',
        label: 'Portfolio Mix Focus',
        type: 'select',
        options: [
          { value: 'incremental', label: 'Incremental (Safe Bets)' },
          { value: 'balanced', label: 'Balanced 70-20-10' },
          { value: 'breakthrough', label: 'Breakthrough Heavy' },
        ],
        description: 'Innovation type allocation strategy',
      },
      {
        id: 'stageGate',
        label: 'Stage Gate Criteria',
        type: 'select',
        options: [
          { value: 'strict', label: 'Strict (Kill Fast)' },
          { value: 'moderate', label: 'Moderate' },
          { value: 'flexible', label: 'Flexible (Learn More)' },
        ],
        description: 'Project advancement criteria',
      },
    ],
    'product-strategy': [
      {
        id: 'marketTiming',
        label: 'Market Timing',
        type: 'select',
        options: [
          { value: 'first-mover', label: 'First Mover' },
          { value: 'fast-follower', label: 'Fast Follower' },
          { value: 'wait-and-see', label: 'Wait and See' },
        ],
        description: 'Market entry timing strategy',
      },
      {
        id: 'cannibalization',
        label: 'Cannibalization Tolerance',
        type: 'slider',
        min: 0,
        max: 50,
        description: 'Acceptable cannibalization of existing products (%)',
      },
    ],
    'finance-liaison': [
      {
        id: 'budgetAllocation',
        label: 'Budget Increase/Decrease',
        type: 'slider',
        min: -30,
        max: 30,
        description: 'Change to R&D budget (%)',
      },
      {
        id: 'roiThreshold',
        label: 'ROI Threshold',
        type: 'select',
        options: [
          { value: 'high', label: 'High (>30% IRR)' },
          { value: 'standard', label: 'Standard (>20% IRR)' },
          { value: 'strategic', label: 'Strategic (Option Value)' },
        ],
        description: 'Project approval criteria',
      },
    ],
    'operations-liaison': [
      {
        id: 'manufacturability',
        label: 'Manufacturability Weight',
        type: 'slider',
        min: 0,
        max: 100,
        description: 'Emphasis on production feasibility',
      },
      {
        id: 'scaleReadiness',
        label: 'Scale Readiness',
        type: 'select',
        options: [
          { value: 'early', label: 'Early Involvement' },
          { value: 'standard', label: 'Standard Handoff' },
          { value: 'late', label: 'Late Optimization' },
        ],
        description: 'When to involve operations',
      },
    ],
  };

  const currentDecisions = roleDecisions[role] || [];

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-amber-600/20 rounded-xl flex items-center justify-center">
          {(() => {
            const RoleIcon = ROLES[role].icon;
            return <RoleIcon className="w-6 h-6 text-amber-400" />;
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
                        ? 'border-amber-500 bg-amber-500/20 text-amber-300'
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
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>{decision.min}%</span>
                  <span className="font-medium text-amber-400">{decisions[decision.id] || 0}%</span>
                  <span>{decision.max}%</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => onSubmit(decisions)}
        className="mt-6 w-full py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white font-semibold rounded-xl hover:from-amber-500 hover:to-orange-500 transition-all flex items-center justify-center gap-2"
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

export default function InnovationLabPage() {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const [selectedRole, setSelectedRole] = useState<Role>('head-of-rnd');
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
                <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-white">Innovation Lab</h1>
                  <p className="text-xs text-slate-400">Betting on the Future</p>
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

              <div className="px-4 py-2 bg-slate-800 rounded-lg">
                <span className="text-xs text-slate-500">R&D Budget</span>
                <p className="text-sm font-bold text-white">${gameState.totalBudget}M</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* KPI Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {[
            { label: 'Pipeline Value', value: `$${gameState.pipelineValue}M`, icon: Layers, trend: 'up' },
            { label: 'Success Rate', value: `${gameState.successRate}%`, icon: Target, trend: 'neutral' },
            { label: 'Time to Market', value: `${gameState.timeToMarket}mo`, icon: Clock, trend: 'down' },
            { label: 'Patents', value: gameState.patentsGranted.toString(), icon: Shield, trend: 'up' },
            { label: 'Tech Gap', value: `+${gameState.technologyGap}`, icon: Zap, trend: 'up' },
            { label: 'New Rev %', value: `${gameState.revenueFromNew}%`, icon: TrendingUp, trend: 'up' },
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
            {/* Portfolio Balance */}
            <PortfolioBalance state={gameState} />

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
                        ? 'bg-amber-600 text-white'
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

            {/* Project Pipeline */}
            <ProjectPipeline projects={gameState.projects} />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Innovation Metrics */}
            <InnovationMetrics state={gameState} />

            {/* Technical Health */}
            <TechnicalHealthCard debt={gameState.technicalDebt} platformHealth={gameState.platformHealth} />
          </div>
        </div>
      </main>
    </div>
  );
}
