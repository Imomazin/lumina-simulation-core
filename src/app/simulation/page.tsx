'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Play,
  RotateCcw,
  ChevronRight,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Users,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  Building2,
  Target,
  BarChart3,
  Settings,
  Lightbulb,
  Scale,
  Trophy,
  Briefcase,
  LineChart,
  Layers,
  Calendar,
  Zap,
  AlertCircle,
  Activity,
  PieChart,
} from 'lucide-react';
import { useSimulationStore } from '@/store/simulation';
import { cn, formatCurrency, formatPercent } from '@/lib/utils';
import type { Role, GameState } from '@/domain/engine/types';

const ROLE_CONFIG: Record<Role, { icon: typeof Target; label: string; color: string; bgColor: string }> = {
  strategy: { icon: Briefcase, label: 'CEO / Strategy', color: 'text-primary-400', bgColor: 'bg-primary-500/20' },
  marketing: { icon: TrendingUp, label: 'CMO / Marketing', color: 'text-accent-400', bgColor: 'bg-accent-500/20' },
  sales: { icon: BarChart3, label: 'VP Sales', color: 'text-orange-400', bgColor: 'bg-orange-500/20' },
  operations: { icon: Settings, label: 'COO / Operations', color: 'text-warning-400', bgColor: 'bg-warning-500/20' },
  rnd: { icon: Lightbulb, label: 'CTO / R&D', color: 'text-purple-400', bgColor: 'bg-purple-500/20' },
  legal: { icon: Scale, label: 'CLO / Legal', color: 'text-slate-400', bgColor: 'bg-slate-500/20' },
  gm: { icon: Users, label: 'CPO / People', color: 'text-pink-400', bgColor: 'bg-pink-500/20' },
};

export default function SimulationPage() {
  const {
    gameState,
    isLoading,
    error,
    selectedRole,
    demoMode,
    initializeGame,
    setSelectedRole,
    advanceRound,
    resetGame,
    submitDecision,
  } = useSimulationStore();

  const [activeTab, setActiveTab] = useState<'dashboard' | 'decisions' | 'reports'>('dashboard');
  const [showDecisionPanel, setShowDecisionPanel] = useState(false);

  useEffect(() => {
    if (!gameState) {
      initializeGame();
    }
  }, [gameState, initializeGame]);

  if (isLoading && !gameState) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-slate-400">Initializing simulation...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="card-enterprise max-w-md text-center">
          <AlertTriangle className="w-12 h-12 text-danger-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">Error</h2>
          <p className="text-slate-400 mb-6">{error}</p>
          <button onClick={() => initializeGame()} className="btn-primary">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!gameState) return null;

  const sharePrice = calculateSharePrice(gameState);
  const yearLabel = `Year ${gameState.round}`;

  return (
    <div className="min-h-screen">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo & Back */}
            <div className="flex items-center gap-4">
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <Layers className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-white">LuminaSim</span>
              </div>
            </div>

            {/* Center: Round & Year Info */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5">
                <Calendar className="w-4 h-4 text-primary-400" />
                <span className="text-white font-semibold">{yearLabel}</span>
                <span className="text-slate-400">of {gameState.maxRounds}</span>
              </div>
              <div className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium',
                gameState.phase === 'decisions_open' ? 'bg-success-500/20 text-success-400' :
                gameState.phase === 'decisions_locked' ? 'bg-warning-500/20 text-warning-400' :
                'bg-primary-500/20 text-primary-400'
              )}>
                {gameState.phase === 'decisions_open' ? 'Decisions Open' :
                 gameState.phase === 'decisions_locked' ? 'Locked' : 'Processing'}
              </div>
              <StockTicker price={sharePrice} change={sharePrice - 100} />
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
              {demoMode && (
                <button
                  onClick={() => advanceRound()}
                  disabled={isLoading || gameState.round >= gameState.maxRounds}
                  className={cn(
                    'btn-primary inline-flex items-center gap-2',
                    (isLoading || gameState.round >= gameState.maxRounds) && 'opacity-50 cursor-not-allowed'
                  )}
                >
                  <Play className="w-4 h-4" />
                  Advance Year
                </button>
              )}
              <button
                onClick={() => resetGame()}
                disabled={isLoading}
                className="btn-secondary inline-flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-8 px-4">
        <div className="max-w-[1600px] mx-auto">
          {/* Tab Navigation */}
          <div className="flex gap-2 mb-6">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: PieChart },
              { id: 'decisions', label: 'Decisions', icon: Target },
              { id: 'reports', label: 'Reports & Events', icon: Activity },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={cn(
                  'flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all',
                  activeTab === tab.id
                    ? 'bg-primary-500 text-white shadow-glow'
                    : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                )}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dashboard View */}
          {activeTab === 'dashboard' && (
            <DashboardView gameState={gameState} sharePrice={sharePrice} />
          )}

          {/* Decisions View */}
          {activeTab === 'decisions' && (
            <DecisionsView
              gameState={gameState}
              selectedRole={selectedRole}
              onSelectRole={(role) => {
                setSelectedRole(role);
                setShowDecisionPanel(true);
              }}
            />
          )}

          {/* Reports View */}
          {activeTab === 'reports' && (
            <ReportsView gameState={gameState} />
          )}
        </div>
      </main>

      {/* Decision Panel Modal */}
      <AnimatePresence>
        {showDecisionPanel && selectedRole && (
          <DecisionPanel
            role={selectedRole}
            gameState={gameState}
            onClose={() => setShowDecisionPanel(false)}
            onSubmit={async (decision) => {
              await submitDecision(selectedRole, decision);
              setShowDecisionPanel(false);
            }}
            isLoading={isLoading}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// Stock Ticker Component
function StockTicker({ price, change }: { price: number; change: number }) {
  const isPositive = change >= 0;
  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/5">
      <div className="flex items-center gap-1">
        <LineChart className="w-4 h-4 text-slate-400" />
        <span className="text-xs text-slate-400">LMNA</span>
      </div>
      <span className="font-mono font-bold text-white">${price.toFixed(2)}</span>
      <span className={cn(
        'flex items-center gap-1 text-sm font-medium',
        isPositive ? 'text-success-400' : 'text-danger-400'
      )}>
        {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
        {isPositive ? '+' : ''}{change.toFixed(1)}%
      </span>
    </div>
  );
}

// Dashboard View Component
function DashboardView({ gameState, sharePrice }: { gameState: GameState; sharePrice: number }) {
  return (
    <div className="grid lg:grid-cols-4 gap-6">
      {/* Main Dashboard - 3 columns */}
      <div className="lg:col-span-3 space-y-6">
        {/* Top KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <KPICard
            label="Revenue"
            value={formatCurrency(gameState.company.revenue)}
            sublabel="/year"
            icon={DollarSign}
            trend={gameState.company.profit >= 0 ? 'up' : 'down'}
            trendValue={`${gameState.company.profit >= 0 ? '+' : ''}${formatCurrency(gameState.company.profit)}`}
            color="success"
          />
          <KPICard
            label="Cash Position"
            value={formatCurrency(gameState.company.cash)}
            sublabel={`${gameState.company.runwayMonths}mo runway`}
            icon={Building2}
            color="primary"
          />
          <KPICard
            label="Stock Price"
            value={`$${sharePrice.toFixed(2)}`}
            sublabel="LMNA"
            icon={LineChart}
            trend={sharePrice >= 100 ? 'up' : 'down'}
            trendValue={`${sharePrice >= 100 ? '+' : ''}${(sharePrice - 100).toFixed(1)}%`}
            color="accent"
          />
          <KPICard
            label="Total Score"
            value={gameState.scorecard.totalScore.toString()}
            sublabel="/500 pts"
            icon={Trophy}
            color="warning"
          />
        </div>

        {/* Main Metrics Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Financial Performance */}
          <MetricCard title="Financial Performance" icon={DollarSign}>
            <MetricBar label="Revenue Growth" value={Math.min(gameState.company.revenue / 2, 100)} color="success" />
            <MetricBar label="Profit Margin" value={Math.max(0, (gameState.company.profit / gameState.company.revenue) * 100 + 50)} color="primary" />
            <MetricBar label="Cash Efficiency" value={Math.min(gameState.company.cash / 2, 100)} color="accent" />
            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/10">
              <div>
                <div className="text-xs text-slate-500 mb-1">Costs</div>
                <div className="text-lg font-semibold text-white">{formatCurrency(gameState.company.costs)}/yr</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">Pipeline</div>
                <div className="text-lg font-semibold text-white">{formatCurrency(gameState.company.salesPipeline)}</div>
              </div>
            </div>
          </MetricCard>

          {/* Market Position */}
          <MetricCard title="Market Position" icon={TrendingUp}>
            <MetricBar label="Market Demand" value={gameState.market.demandIndex / 2} color="accent" showValue={gameState.market.demandIndex} />
            <MetricBar label="Price Index" value={gameState.market.priceIndex / 2} color="success" showValue={gameState.market.priceIndex} />
            <MetricBar label="Competition Intensity" value={gameState.market.competitionIntensity} color="danger" inverse />
            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/10">
              <div>
                <div className="text-xs text-slate-500 mb-1">Customer Churn</div>
                <div className={cn('text-lg font-semibold', gameState.company.churn > 15 ? 'text-danger-400' : 'text-white')}>
                  {gameState.company.churn.toFixed(1)}%
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">Sentiment</div>
                <div className={cn('text-lg font-semibold', gameState.market.sentiment >= 0 ? 'text-success-400' : 'text-danger-400')}>
                  {gameState.market.sentiment >= 0 ? '+' : ''}{gameState.market.sentiment}
                </div>
              </div>
            </div>
          </MetricCard>

          {/* Operations & Quality */}
          <MetricCard title="Operations & Quality" icon={Settings}>
            <MetricBar label="Product Quality" value={gameState.company.productQuality} color="primary" />
            <MetricBar label="Team Morale" value={gameState.company.morale} color="success" />
            <MetricBar label="Technical Debt" value={gameState.company.techDebt} color="danger" inverse />
            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/10">
              <div>
                <div className="text-xs text-slate-500 mb-1">Headcount</div>
                <div className="text-lg font-semibold text-white">{gameState.company.headcount}</div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">Supply Stability</div>
                <div className="text-lg font-semibold text-white">{(100 - gameState.market.supplyShockRisk).toFixed(0)}%</div>
              </div>
            </div>
          </MetricCard>

          {/* Risk & Compliance */}
          <MetricCard title="Risk & Compliance" icon={Shield}>
            <MetricBar label="Operational Risk" value={gameState.risk.operational} color="warning" inverse />
            <MetricBar label="Regulatory Risk" value={gameState.risk.regulatory} color="danger" inverse />
            <MetricBar label="Reputational Risk" value={gameState.risk.reputational} color="purple" inverse />
            <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-white/10">
              <div>
                <div className="text-xs text-slate-500 mb-1">Brand Trust</div>
                <div className={cn('text-lg font-semibold', gameState.company.brandTrust > 60 ? 'text-success-400' : 'text-warning-400')}>
                  {gameState.company.brandTrust.toFixed(0)}%
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-1">Compliance</div>
                <div className="text-lg font-semibold text-white">{gameState.company.compliancePosture.toFixed(0)}%</div>
              </div>
            </div>
          </MetricCard>
        </div>

        {/* Balanced Scorecard */}
        <div className="card-enterprise">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Target className="w-5 h-5 text-primary-400" />
              <h3 className="text-lg font-semibold text-white">Balanced Scorecard</h3>
            </div>
            <div className="text-2xl font-bold gradient-text">{gameState.scorecard.totalScore}/500</div>
          </div>
          <div className="grid grid-cols-5 gap-6">
            {[
              { label: 'Financial', value: gameState.scorecard.financialHealth, color: 'bg-success-500' },
              { label: 'Growth', value: gameState.scorecard.growth, color: 'bg-accent-500' },
              { label: 'Trust', value: gameState.scorecard.trust, color: 'bg-primary-500' },
              { label: 'Resilience', value: gameState.scorecard.resilience, color: 'bg-warning-500' },
              { label: 'Execution', value: gameState.scorecard.execution, color: 'bg-purple-500' },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-3">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      className="text-white/10"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="35"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray={`${(item.value / 100) * 220} 220`}
                      className={item.color.replace('bg-', 'text-')}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">{item.value}</span>
                  </div>
                </div>
                <div className="text-sm text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-xl bg-white/5">
            <p className="text-sm text-slate-300">{gameState.scorecard.boardConfidence}</p>
          </div>
        </div>
      </div>

      {/* Sidebar - 1 column */}
      <div className="space-y-6">
        {/* Leaderboard Preview */}
        <div className="card-enterprise">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="w-5 h-5 text-warning-400" />
            <h3 className="font-semibold text-white">Leaderboard</h3>
          </div>
          <div className="space-y-2">
            {[
              { rank: 1, name: 'Your Team', score: gameState.scorecard.totalScore, isYou: true },
              { rank: 2, name: 'Team Beta', score: 385, isYou: false },
              { rank: 3, name: 'Team Gamma', score: 342, isYou: false },
            ].map((team) => (
              <div
                key={team.name}
                className={cn(
                  'flex items-center gap-3 p-3 rounded-lg',
                  team.isYou ? 'bg-primary-500/20 border border-primary-500/30' : 'bg-white/5'
                )}
              >
                <div className={cn(
                  'w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold',
                  team.rank === 1 ? 'bg-warning-500 text-white' :
                  team.rank === 2 ? 'bg-slate-400 text-white' :
                  'bg-white/10 text-slate-400'
                )}>
                  {team.rank}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white">{team.name}</div>
                </div>
                <div className="text-sm font-bold text-white">{team.score}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Active Events */}
        <div className="card-enterprise">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-5 h-5 text-accent-400" />
            <h3 className="font-semibold text-white">Active Events</h3>
          </div>
          <div className="space-y-2">
            {gameState.events.filter(e => !e.resolved).length === 0 ? (
              <p className="text-sm text-slate-500 text-center py-4">No active events</p>
            ) : (
              gameState.events.filter(e => !e.resolved).slice(0, 3).map((event) => (
                <div
                  key={event.id}
                  className={cn(
                    'p-3 rounded-lg border-l-4',
                    event.severity === 'high' ? 'bg-danger-500/10 border-danger-500' :
                    event.severity === 'medium' ? 'bg-warning-500/10 border-warning-500' :
                    'bg-primary-500/10 border-primary-500'
                  )}
                >
                  <div className="text-sm font-medium text-white">{event.name}</div>
                  <div className="text-xs text-slate-400 mt-1">{event.description}</div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="card-enterprise">
          <h3 className="font-semibold text-white mb-4">Quick Stats</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-400">Run ID</span>
              <span className="font-mono text-xs text-white">{gameState.runId.slice(0, 12)}...</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Seed</span>
              <span className="font-mono text-white">{gameState.seed}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Total Events</span>
              <span className="text-white">{gameState.events.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Decisions Made</span>
              <span className="text-white">{gameState.decisions.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Decisions View Component
function DecisionsView({
  gameState,
  selectedRole,
  onSelectRole,
}: {
  gameState: GameState;
  selectedRole: Role;
  onSelectRole: (role: Role) => void;
}) {
  const currentRoundDecisions = gameState.decisions[gameState.round - 1] || {};

  return (
    <div className="max-w-4xl mx-auto">
      <div className="card-enterprise mb-6">
        <div className="flex items-center gap-3 mb-2">
          <Target className="w-5 h-5 text-primary-400" />
          <h2 className="text-xl font-semibold text-white">Year {gameState.round} Decisions</h2>
        </div>
        <p className="text-slate-400">
          Select a role to make decisions. Each role controls specific aspects of the company.
          All decisions must be submitted before advancing to the next year.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {(Object.keys(ROLE_CONFIG) as Role[]).map((role) => {
          const config = ROLE_CONFIG[role];
          const hasDecision = !!currentRoundDecisions[role];
          const Icon = config.icon;

          return (
            <button
              key={role}
              onClick={() => onSelectRole(role)}
              className={cn(
                'card-enterprise-hover text-left relative overflow-hidden',
                hasDecision && 'ring-2 ring-success-500/50'
              )}
            >
              {hasDecision && (
                <div className="absolute top-4 right-4">
                  <CheckCircle className="w-5 h-5 text-success-400" />
                </div>
              )}
              <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center mb-4', config.bgColor)}>
                <Icon className={cn('w-6 h-6', config.color)} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{config.label}</h3>
              <p className="text-sm text-slate-400 mb-4">
                {getRoleDescription(role)}
              </p>
              <div className="flex items-center gap-2 text-sm">
                {hasDecision ? (
                  <span className="text-success-400">Decision submitted</span>
                ) : (
                  <span className="text-slate-500">Pending decision</span>
                )}
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Reports View Component
function ReportsView({ gameState }: { gameState: GameState }) {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {/* Narrative Feed */}
      <div className="card-enterprise">
        <div className="flex items-center gap-3 mb-6">
          <Activity className="w-5 h-5 text-primary-400" />
          <h3 className="text-lg font-semibold text-white">Narrative Feed</h3>
        </div>
        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
          {gameState.narrative.slice().reverse().map((entry) => (
            <div
              key={entry.id}
              className={cn(
                'p-4 rounded-xl border-l-4',
                entry.impact === 'positive' ? 'bg-success-500/10 border-success-500' :
                entry.impact === 'negative' ? 'bg-danger-500/10 border-danger-500' :
                'bg-white/5 border-slate-500'
              )}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-medium text-slate-400">Year {entry.round}</span>
                <span className={cn(
                  'text-xs px-2 py-0.5 rounded-full',
                  entry.category === 'achievement' ? 'bg-success-500/20 text-success-400' :
                  entry.category === 'warning' ? 'bg-danger-500/20 text-danger-400' :
                  entry.category === 'event' ? 'bg-warning-500/20 text-warning-400' :
                  'bg-white/10 text-slate-400'
                )}>
                  {entry.category}
                </span>
              </div>
              <h4 className="font-medium text-white">{entry.title}</h4>
              <p className="text-sm text-slate-400 mt-1">{entry.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Events History */}
      <div className="card-enterprise">
        <div className="flex items-center gap-3 mb-6">
          <AlertCircle className="w-5 h-5 text-warning-400" />
          <h3 className="text-lg font-semibold text-white">Market Events</h3>
        </div>
        <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
          {gameState.events.length === 0 ? (
            <p className="text-center text-slate-500 py-8">No events have occurred yet</p>
          ) : (
            gameState.events.slice().reverse().map((event) => (
              <div
                key={event.id}
                className={cn(
                  'p-4 rounded-xl',
                  event.resolved ? 'bg-white/5' : 'bg-warning-500/10'
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={cn(
                    'text-xs font-medium px-2 py-0.5 rounded-full',
                    event.severity === 'high' ? 'bg-danger-500/20 text-danger-400' :
                    event.severity === 'medium' ? 'bg-warning-500/20 text-warning-400' :
                    'bg-primary-500/20 text-primary-400'
                  )}>
                    {event.severity.toUpperCase()}
                  </span>
                  <span className="text-xs text-slate-500">Year {event.round}</span>
                </div>
                <h4 className="font-medium text-white">{event.name}</h4>
                <p className="text-sm text-slate-400 mt-1">{event.description}</p>
                {event.resolved && (
                  <div className="mt-2 text-xs text-success-400">Resolved</div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// KPI Card Component
function KPICard({
  label,
  value,
  sublabel,
  icon: Icon,
  trend,
  trendValue,
  color,
}: {
  label: string;
  value: string;
  sublabel?: string;
  icon: typeof DollarSign;
  trend?: 'up' | 'down';
  trendValue?: string;
  color: 'success' | 'primary' | 'accent' | 'warning' | 'danger';
}) {
  const colorClasses = {
    success: 'from-success-500/20 to-success-600/10 text-success-400',
    primary: 'from-primary-500/20 to-primary-600/10 text-primary-400',
    accent: 'from-accent-500/20 to-accent-600/10 text-accent-400',
    warning: 'from-warning-500/20 to-warning-600/10 text-warning-400',
    danger: 'from-danger-500/20 to-danger-600/10 text-danger-400',
  };

  return (
    <div className="card-enterprise">
      <div className="flex items-start justify-between mb-3">
        <div className={cn('w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center', colorClasses[color])}>
          <Icon className="w-5 h-5" />
        </div>
        {trend && trendValue && (
          <div className={cn(
            'flex items-center gap-1 text-sm font-medium',
            trend === 'up' ? 'text-success-400' : 'text-danger-400'
          )}>
            {trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {trendValue}
          </div>
        )}
      </div>
      <div className="text-xs text-slate-500 mb-1">{label}</div>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-white">{value}</span>
        {sublabel && <span className="text-sm text-slate-500">{sublabel}</span>}
      </div>
    </div>
  );
}

// Metric Card Component
function MetricCard({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: typeof DollarSign;
  children: React.ReactNode;
}) {
  return (
    <div className="card-enterprise">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-5 h-5 text-slate-400" />
        <h3 className="font-semibold text-white">{title}</h3>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

// Metric Bar Component
function MetricBar({
  label,
  value,
  color,
  inverse = false,
  showValue,
}: {
  label: string;
  value: number;
  color: 'success' | 'primary' | 'accent' | 'warning' | 'danger' | 'purple';
  inverse?: boolean;
  showValue?: number;
}) {
  const displayValue = showValue ?? value;
  const barValue = Math.min(Math.max(value, 0), 100);

  const colorClasses = {
    success: 'bg-success-500',
    primary: 'bg-primary-500',
    accent: 'bg-accent-500',
    warning: 'bg-warning-500',
    danger: 'bg-danger-500',
    purple: 'bg-purple-500',
  };

  const textColorClasses = {
    success: 'text-success-400',
    primary: 'text-primary-400',
    accent: 'text-accent-400',
    warning: 'text-warning-400',
    danger: 'text-danger-400',
    purple: 'text-purple-400',
  };

  // For inverse metrics (where lower is better), invert the color logic
  const effectiveColor = inverse
    ? (barValue > 60 ? 'danger' : barValue > 30 ? 'warning' : 'success')
    : color;

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-slate-400">{label}</span>
        <span className={cn('text-sm font-medium', textColorClasses[effectiveColor])}>
          {displayValue.toFixed(0)}
        </span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className={cn('h-full rounded-full transition-all duration-500', colorClasses[effectiveColor])}
          style={{ width: `${barValue}%` }}
        />
      </div>
    </div>
  );
}

// Decision Panel Component
function DecisionPanel({
  role,
  gameState,
  onClose,
  onSubmit,
  isLoading,
}: {
  role: Role;
  gameState: GameState;
  onClose: () => void;
  onSubmit: (decision: unknown) => Promise<void>;
  isLoading: boolean;
}) {
  const [decision, setDecision] = useState<Record<string, unknown>>({});
  const config = ROLE_CONFIG[role];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="relative card-enterprise max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-4">
            <div className={cn('w-12 h-12 rounded-xl flex items-center justify-center', config.bgColor)}>
              <Icon className={cn('w-6 h-6', config.color)} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">{config.label}</h2>
              <p className="text-sm text-slate-400">Year {gameState.round} Decisions</p>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <DecisionForm role={role} decision={decision} setDecision={setDecision} />
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 flex justify-end gap-3">
          <button onClick={onClose} className="btn-secondary">
            Cancel
          </button>
          <button
            onClick={() => onSubmit(decision)}
            disabled={isLoading}
            className="btn-primary"
          >
            {isLoading ? 'Submitting...' : 'Submit Decision'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Decision Form Component
function DecisionForm({
  role,
  decision,
  setDecision,
}: {
  role: Role;
  decision: Record<string, unknown>;
  setDecision: (d: Record<string, unknown>) => void;
}) {
  switch (role) {
    case 'strategy':
      return (
        <div className="space-y-6">
          <SelectField
            label="Risk Appetite"
            description="Set the company's overall risk tolerance for this year"
            value={decision.riskPosture as string || 'balanced'}
            onChange={(v) => setDecision({ ...decision, riskPosture: v })}
            options={[
              { value: 'conservative', label: 'Conservative - Minimize risk, steady growth' },
              { value: 'balanced', label: 'Balanced - Moderate risk for moderate growth' },
              { value: 'aggressive', label: 'Aggressive - High risk for high potential' },
            ]}
          />
          <SelectField
            label="Market Focus"
            description="Choose which market region to prioritize"
            value={decision.marketEntry as string || 'regionA'}
            onChange={(v) => setDecision({ ...decision, marketEntry: v })}
            options={[
              { value: 'regionA', label: 'North America - Mature market, high competition' },
              { value: 'regionB', label: 'Europe - Regulated market, stable demand' },
              { value: 'regionC', label: 'Asia Pacific - Growing market, entry costs' },
            ]}
          />
          <div>
            <label className="block text-sm font-medium text-white mb-3">Capital Allocation</label>
            <p className="text-xs text-slate-400 mb-4">Distribute the annual budget across departments</p>
            <div className="grid grid-cols-2 gap-4">
              {['rnd', 'marketing', 'operations', 'compliance'].map((key) => (
                <SliderField
                  key={key}
                  label={key === 'rnd' ? 'R&D' : key.charAt(0).toUpperCase() + key.slice(1)}
                  value={(decision.capitalAllocation as Record<string, number>)?.[key] || 25}
                  onChange={(v) => setDecision({
                    ...decision,
                    capitalAllocation: { ...(decision.capitalAllocation as Record<string, number> || {}), [key]: v },
                  })}
                  min={0}
                  max={100}
                  unit="%"
                />
              ))}
            </div>
          </div>
        </div>
      );

    case 'marketing':
      return (
        <div className="space-y-6">
          <SliderField
            label="Campaign Spend"
            description="Annual marketing campaign budget"
            value={decision.campaignSpend as number || 2}
            onChange={(v) => setDecision({ ...decision, campaignSpend: v })}
            min={0}
            max={20}
            unit="M"
          />
          <SliderField
            label="Pricing Change"
            description="Adjust product pricing relative to current"
            value={decision.pricingChangePct as number || 0}
            onChange={(v) => setDecision({ ...decision, pricingChangePct: v })}
            min={-50}
            max={50}
            unit="%"
          />
          <SelectField
            label="Brand Positioning"
            description="How should we position in the market?"
            value={decision.positioning as string || 'value-first'}
            onChange={(v) => setDecision({ ...decision, positioning: v })}
            options={[
              { value: 'trust-first', label: 'Trust First - Reliability and security focused' },
              { value: 'value-first', label: 'Value First - Price-performance leader' },
              { value: 'innovation-first', label: 'Innovation First - Cutting-edge features' },
            ]}
          />
          <SelectField
            label="Channel Mix"
            description="Primary marketing channel"
            value={decision.channelMix as string || 'paid'}
            onChange={(v) => setDecision({ ...decision, channelMix: v })}
            options={[
              { value: 'paid', label: 'Paid Media - Direct advertising spend' },
              { value: 'partner', label: 'Partners - Channel partnerships' },
              { value: 'community', label: 'Community - Organic growth' },
            ]}
          />
        </div>
      );

    case 'sales':
      return (
        <div className="space-y-6">
          <SliderField
            label="Enterprise Focus"
            description="Balance between enterprise vs SMB customers"
            value={decision.enterpriseFocus as number || 50}
            onChange={(v) => setDecision({ ...decision, enterpriseFocus: v })}
            min={0}
            max={100}
            unit="%"
          />
          <SliderField
            label="Maximum Discount"
            description="Maximum discount allowed for sales team"
            value={decision.discountingPolicy as number || 10}
            onChange={(v) => setDecision({ ...decision, discountingPolicy: v })}
            min={0}
            max={30}
            unit="%"
          />
          <SliderField
            label="Partner Program Investment"
            description="Investment in channel partner program"
            value={decision.partnerProgramInvestment as number || 1}
            onChange={(v) => setDecision({ ...decision, partnerProgramInvestment: v })}
            min={0}
            max={5}
            unit="M"
          />
          <SliderField
            label="Pipeline Hygiene"
            description="Effort spent on pipeline quality"
            value={decision.pipelineHygiene as number || 50}
            onChange={(v) => setDecision({ ...decision, pipelineHygiene: v })}
            min={0}
            max={100}
            unit="%"
          />
        </div>
      );

    case 'operations':
      return (
        <div className="space-y-6">
          <SliderField
            label="Capacity Investment"
            description="Investment in infrastructure capacity"
            value={decision.capacityInvestment as number || 2}
            onChange={(v) => setDecision({ ...decision, capacityInvestment: v })}
            min={0}
            max={15}
            unit="M"
          />
          <SelectField
            label="Supplier Strategy"
            description="How to manage supplier relationships"
            value={decision.supplierStrategy as string || 'dual-source'}
            onChange={(v) => setDecision({ ...decision, supplierStrategy: v })}
            options={[
              { value: 'single-source', label: 'Single Source - Low cost, high risk' },
              { value: 'dual-source', label: 'Dual Source - Balanced approach' },
              { value: 'diversified', label: 'Diversified - High cost, low risk' },
            ]}
          />
          <SliderField
            label="QA Investment"
            description="Investment in quality assurance"
            value={decision.qaInvestment as number || 1}
            onChange={(v) => setDecision({ ...decision, qaInvestment: v })}
            min={0}
            max={5}
            unit="M"
          />
          <SelectField
            label="Delivery Speed"
            description="Speed vs quality trade-off"
            value={decision.deliverySpeed as string || 'balanced'}
            onChange={(v) => setDecision({ ...decision, deliverySpeed: v })}
            options={[
              { value: 'fast', label: 'Fast - Higher risk of issues' },
              { value: 'balanced', label: 'Balanced - Standard pace' },
              { value: 'stable', label: 'Stable - Higher quality, slower' },
            ]}
          />
        </div>
      );

    case 'rnd':
      return (
        <div className="space-y-6">
          <SelectField
            label="Roadmap Focus"
            description="What should R&D prioritize?"
            value={decision.roadmapFocus as string || 'features'}
            onChange={(v) => setDecision({ ...decision, roadmapFocus: v })}
            options={[
              { value: 'features', label: 'New Features - Market competitiveness' },
              { value: 'reliability', label: 'Reliability - Tech debt reduction' },
              { value: 'privacy-security', label: 'Privacy & Security - Compliance' },
            ]}
          />
          <SelectField
            label="Release Cadence"
            description="How frequently to ship updates"
            value={decision.releaseCadence as string || 'balanced'}
            onChange={(v) => setDecision({ ...decision, releaseCadence: v })}
            options={[
              { value: 'fast', label: 'Fast - Weekly releases, more risk' },
              { value: 'balanced', label: 'Balanced - Bi-weekly releases' },
              { value: 'cautious', label: 'Cautious - Monthly releases, stable' },
            ]}
          />
          <SliderField
            label="Model Quality Investment"
            description="Investment in AI model improvements"
            value={decision.modelQualityInvestment as number || 2}
            onChange={(v) => setDecision({ ...decision, modelQualityInvestment: v })}
            min={0}
            max={10}
            unit="M"
          />
          <SliderField
            label="Experimentation Budget"
            description="Budget for experimental projects"
            value={decision.experimentationBudget as number || 1}
            onChange={(v) => setDecision({ ...decision, experimentationBudget: v })}
            min={0}
            max={5}
            unit="M"
          />
        </div>
      );

    case 'legal':
      return (
        <div className="space-y-6">
          <SliderField
            label="Compliance Spend"
            description="Investment in compliance programs"
            value={decision.complianceSpend as number || 1}
            onChange={(v) => setDecision({ ...decision, complianceSpend: v })}
            min={0}
            max={5}
            unit="M"
          />
          <SelectField
            label="Policy Strictness"
            description="Internal policy enforcement level"
            value={decision.policyStrictness as string || 'balanced'}
            onChange={(v) => setDecision({ ...decision, policyStrictness: v })}
            options={[
              { value: 'tight', label: 'Tight - Maximum compliance, slower' },
              { value: 'balanced', label: 'Balanced - Standard policies' },
              { value: 'loose', label: 'Loose - Faster, higher risk' },
            ]}
          />
          <SliderField
            label="Audit Readiness"
            description="Preparation level for audits"
            value={decision.auditReadiness as number || 50}
            onChange={(v) => setDecision({ ...decision, auditReadiness: v })}
            min={0}
            max={100}
            unit="%"
          />
          <SelectField
            label="Data Handling"
            description="Data collection and usage policy"
            value={decision.dataHandling as string || 'standard'}
            onChange={(v) => setDecision({ ...decision, dataHandling: v })}
            options={[
              { value: 'minimal', label: 'Minimal - Privacy-first approach' },
              { value: 'standard', label: 'Standard - Industry norms' },
              { value: 'expansive', label: 'Expansive - More data, more risk' },
            ]}
          />
        </div>
      );

    case 'gm':
      return (
        <div className="space-y-6">
          <SelectField
            label="Hiring Strategy"
            description="Workforce planning for the year"
            value={decision.hiringPlan as string || 'maintain'}
            onChange={(v) => setDecision({ ...decision, hiringPlan: v })}
            options={[
              { value: 'grow', label: 'Grow - Increase headcount 10%' },
              { value: 'maintain', label: 'Maintain - Keep current levels' },
              { value: 'cut', label: 'Cut - Reduce headcount 10%' },
            ]}
          />
          <SelectField
            label="Organization Design"
            description="Company structure approach"
            value={decision.orgDesign as string || 'hybrid'}
            onChange={(v) => setDecision({ ...decision, orgDesign: v })}
            options={[
              { value: 'centralized', label: 'Centralized - Unified control' },
              { value: 'hybrid', label: 'Hybrid - Balanced approach' },
              { value: 'decentralized', label: 'Decentralized - Autonomous teams' },
            ]}
          />
          <SliderField
            label="Culture Investment"
            description="Investment in employee programs"
            value={decision.cultureInvestment as number || 0.5}
            onChange={(v) => setDecision({ ...decision, cultureInvestment: v })}
            min={0}
            max={3}
            step={0.5}
            unit="M"
          />
          <SelectField
            label="Crisis Response Stance"
            description="How to handle potential crises"
            value={decision.crisisResponse as string || 'transparent'}
            onChange={(v) => setDecision({ ...decision, crisisResponse: v })}
            options={[
              { value: 'transparent', label: 'Transparent - Open communication' },
              { value: 'defensive', label: 'Defensive - Measured responses' },
              { value: 'aggressive', label: 'Aggressive - Counter-narrative' },
            ]}
          />
        </div>
      );

    default:
      return null;
  }
}

// Form Field Components
function SelectField({
  label,
  description,
  value,
  onChange,
  options,
}: {
  label: string;
  description?: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-white mb-1">{label}</label>
      {description && <p className="text-xs text-slate-400 mb-3">{description}</p>}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="input-field"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function SliderField({
  label,
  description,
  value,
  onChange,
  min,
  max,
  step = 1,
  unit = '',
}: {
  label: string;
  description?: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
  unit?: string;
}) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <label className="text-sm font-medium text-white">{label}</label>
        <span className="text-sm font-bold text-primary-400">
          {unit === 'M' ? `$${value}M` : `${value}${unit}`}
        </span>
      </div>
      {description && <p className="text-xs text-slate-400 mb-3">{description}</p>}
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
      <div className="flex justify-between text-xs text-slate-500 mt-1">
        <span>{unit === 'M' ? `$${min}M` : `${min}${unit}`}</span>
        <span>{unit === 'M' ? `$${max}M` : `${max}${unit}`}</span>
      </div>
    </div>
  );
}

// Helper Functions
function calculateSharePrice(gameState: GameState): number {
  const basePrice = 100;
  const scoreMultiplier = gameState.scorecard.totalScore / 500;
  const profitMultiplier = 1 + (gameState.company.profit / 100);
  const trustMultiplier = gameState.company.brandTrust / 100;

  return Math.max(10, basePrice * scoreMultiplier * profitMultiplier * trustMultiplier);
}

function getRoleDescription(role: Role): string {
  const descriptions: Record<Role, string> = {
    strategy: 'Set company direction, risk appetite, and capital allocation across departments.',
    marketing: 'Manage campaigns, pricing strategy, brand positioning, and market channels.',
    sales: 'Define sales targets, customer segmentation, discounting, and partner programs.',
    operations: 'Control capacity, supply chain, quality assurance, and delivery speed.',
    rnd: 'Direct R&D roadmap, release cadence, and technology investments.',
    legal: 'Oversee compliance, policy framework, audit preparation, and data governance.',
    gm: 'Manage hiring, organization design, culture investments, and crisis response.',
  };
  return descriptions[role];
}
