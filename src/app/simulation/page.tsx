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
} from 'lucide-react';
import { useSimulationStore } from '@/store/simulation';
import { cn, formatCurrency, formatPercent, getValueColor, getValueBgColor } from '@/lib/utils';
import type { Role, GameState } from '@/domain/engine/types';

const ROLE_ICONS: Record<Role, typeof Target> = {
  strategy: Target,
  marketing: TrendingUp,
  sales: BarChart3,
  operations: Settings,
  rnd: Lightbulb,
  legal: Scale,
  gm: Building2,
};

const ROLE_LABELS: Record<Role, string> = {
  strategy: 'Strategy',
  marketing: 'Marketing',
  sales: 'Sales',
  operations: 'Operations',
  rnd: 'R&D',
  legal: 'Legal',
  gm: 'General Management',
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

  const [showDecisionPanel, setShowDecisionPanel] = useState(false);

  useEffect(() => {
    if (!gameState) {
      initializeGame();
    }
  }, [gameState, initializeGame]);

  if (isLoading && !gameState) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-accent-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-navy-600">Initializing simulation...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl p-8 shadow-lg max-w-md text-center">
          <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-navy-900 mb-2">Error</h2>
          <p className="text-navy-600 mb-6">{error}</p>
          <button
            onClick={() => initializeGame()}
            className="px-6 py-3 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!gameState) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-navy-500 hover:text-navy-700">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-accent-600 to-accent-800 rounded-lg" />
                <span className="font-semibold text-navy-900">Lumina</span>
              </div>
            </div>

            {/* Round & Phase */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-navy-400" />
                <span className="font-medium text-navy-900">
                  Q{gameState.round} of {gameState.maxRounds}
                </span>
              </div>
              <div className={cn(
                'px-3 py-1 rounded-full text-xs font-medium',
                gameState.phase === 'decisions_open' ? 'bg-emerald-100 text-emerald-700' :
                gameState.phase === 'decisions_locked' ? 'bg-amber-100 text-amber-700' :
                'bg-blue-100 text-blue-700'
              )}>
                {gameState.phase.replace('_', ' ').toUpperCase()}
              </div>
              <div className="text-sm text-navy-600">
                Score: <span className="font-semibold">{gameState.scorecard.totalScore}/500</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {demoMode && (
                <button
                  onClick={() => advanceRound()}
                  disabled={isLoading || gameState.round >= gameState.maxRounds}
                  className={cn(
                    'inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    isLoading || gameState.round >= gameState.maxRounds
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-accent-600 text-white hover:bg-accent-700'
                  )}
                >
                  <Play className="w-4 h-4" />
                  Advance Quarter
                </button>
              )}
              <button
                onClick={() => resetGame()}
                disabled={isLoading}
                className="inline-flex items-center gap-2 px-4 py-2 text-navy-600 hover:text-navy-800 text-sm font-medium"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Dashboard */}
          <div className="lg:col-span-3 space-y-6">
            {/* KPI Cards Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <KPICard
                label="Cash"
                value={formatCurrency(gameState.company.cash)}
                delta={gameState.company.profit}
                icon={DollarSign}
                color="emerald"
              />
              <KPICard
                label="Revenue"
                value={formatCurrency(gameState.company.revenue)}
                sublabel="per quarter"
                icon={TrendingUp}
                color="blue"
              />
              <KPICard
                label="Brand Trust"
                value={formatPercent(gameState.company.brandTrust)}
                icon={Shield}
                color={gameState.company.brandTrust > 60 ? 'emerald' : gameState.company.brandTrust > 40 ? 'amber' : 'red'}
              />
              <KPICard
                label="Total Score"
                value={`${gameState.scorecard.totalScore}`}
                sublabel="/ 500"
                icon={Target}
                color="purple"
              />
            </div>

            {/* Dashboard Sections */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Financial Performance */}
              <DashboardCard title="Financial Performance" icon={DollarSign}>
                <MetricRow label="Cash" value={formatCurrency(gameState.company.cash)} />
                <MetricRow label="Revenue" value={`${formatCurrency(gameState.company.revenue)}/qtr`} />
                <MetricRow label="Costs" value={`${formatCurrency(gameState.company.costs)}/qtr`} />
                <MetricRow
                  label="Profit"
                  value={`${formatCurrency(gameState.company.profit)}/qtr`}
                  valueClass={gameState.company.profit >= 0 ? 'text-emerald-600' : 'text-red-600'}
                />
                <MetricRow label="Runway" value={`${gameState.company.runwayMonths} months`} />
              </DashboardCard>

              {/* Market & Customers */}
              <DashboardCard title="Market & Customers" icon={TrendingUp}>
                <MetricBar label="Demand Index" value={gameState.market.demandIndex} max={200} />
                <MetricBar label="Price Index" value={gameState.market.priceIndex} max={200} />
                <MetricBar label="Competition" value={gameState.market.competitionIntensity} inverse />
                <MetricRow label="Pipeline" value={formatCurrency(gameState.company.salesPipeline)} />
                <MetricRow label="Churn" value={formatPercent(gameState.company.churn)} valueClass={getValueColor(gameState.company.churn, 10, 5, true)} />
              </DashboardCard>

              {/* Operations */}
              <DashboardCard title="Operations & Quality" icon={Settings}>
                <MetricBar label="Product Quality" value={gameState.company.productQuality} />
                <MetricBar label="Tech Debt" value={gameState.company.techDebt} inverse />
                <MetricBar label="Supply Stability" value={100 - gameState.market.supplyShockRisk} />
                <MetricRow label="Headcount" value={gameState.company.headcount.toString()} />
                <MetricBar label="Team Morale" value={gameState.company.morale} />
              </DashboardCard>

              {/* Risk & Compliance */}
              <DashboardCard title="Risk & Compliance" icon={Shield}>
                <MetricBar label="Operational Risk" value={gameState.risk.operational} inverse />
                <MetricBar label="Regulatory Risk" value={gameState.risk.regulatory} inverse />
                <MetricBar label="Reputational Risk" value={gameState.risk.reputational} inverse />
                <MetricBar label="Financial Risk" value={gameState.risk.financial} inverse />
                <MetricBar label="Compliance Posture" value={gameState.company.compliancePosture} />
              </DashboardCard>
            </div>

            {/* Scorecard */}
            <DashboardCard title="Scorecard" icon={Target}>
              <div className="grid grid-cols-5 gap-4">
                {[
                  { label: 'Financial', value: gameState.scorecard.financialHealth },
                  { label: 'Growth', value: gameState.scorecard.growth },
                  { label: 'Trust', value: gameState.scorecard.trust },
                  { label: 'Resilience', value: gameState.scorecard.resilience },
                  { label: 'Execution', value: gameState.scorecard.execution },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="text-2xl font-bold text-navy-900">{item.value}</div>
                    <div className="text-xs text-navy-500">{item.label}</div>
                    <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={cn('h-full rounded-full', getValueBgColor(item.value))}
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-navy-700">{gameState.scorecard.boardConfidence}</p>
              </div>
            </DashboardCard>

            {/* Narrative Feed */}
            <DashboardCard title="Narrative Feed" icon={AlertTriangle}>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {gameState.narrative.slice(-5).reverse().map((entry) => (
                  <div
                    key={entry.id}
                    className={cn(
                      'p-3 rounded-lg border-l-4',
                      entry.impact === 'positive' ? 'bg-emerald-50 border-emerald-500' :
                      entry.impact === 'negative' ? 'bg-red-50 border-red-500' :
                      'bg-gray-50 border-gray-300'
                    )}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-medium text-navy-500">Q{entry.round}</span>
                      <span className={cn(
                        'text-xs px-2 py-0.5 rounded-full',
                        entry.category === 'achievement' ? 'bg-emerald-100 text-emerald-700' :
                        entry.category === 'warning' ? 'bg-red-100 text-red-700' :
                        entry.category === 'event' ? 'bg-amber-100 text-amber-700' :
                        'bg-gray-100 text-gray-700'
                      )}>
                        {entry.category}
                      </span>
                    </div>
                    <h4 className="font-medium text-navy-900 text-sm">{entry.title}</h4>
                    <p className="text-xs text-navy-600 mt-1">{entry.description}</p>
                  </div>
                ))}
              </div>
            </DashboardCard>
          </div>

          {/* Role Selection & Decisions Sidebar */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="font-semibold text-navy-900 mb-4">Select Role</h3>
              <div className="space-y-2">
                {(Object.keys(ROLE_LABELS) as Role[]).map((role) => {
                  const Icon = ROLE_ICONS[role];
                  const hasDecision = gameState.decisions[gameState.round - 1]?.[role];
                  return (
                    <button
                      key={role}
                      onClick={() => {
                        setSelectedRole(role);
                        setShowDecisionPanel(true);
                      }}
                      className={cn(
                        'w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all',
                        selectedRole === role
                          ? 'bg-accent-50 border-2 border-accent-500'
                          : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                      )}
                    >
                      <Icon className={cn('w-5 h-5', selectedRole === role ? 'text-accent-600' : 'text-navy-400')} />
                      <span className={cn('flex-1 font-medium text-sm', selectedRole === role ? 'text-accent-700' : 'text-navy-700')}>
                        {ROLE_LABELS[role]}
                      </span>
                      {hasDecision && (
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      )}
                      <ChevronRight className="w-4 h-4 text-navy-300" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="font-semibold text-navy-900 mb-4">Quick Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-navy-500">Run ID</span>
                  <span className="font-mono text-xs text-navy-700">{gameState.runId.slice(0, 12)}...</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-500">Seed</span>
                  <span className="font-mono text-xs text-navy-700">{gameState.seed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-500">Events</span>
                  <span className="text-navy-700">{gameState.events.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Panel Modal */}
      <AnimatePresence>
        {showDecisionPanel && (
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

// KPI Card Component
function KPICard({
  label,
  value,
  delta,
  sublabel,
  icon: Icon,
  color,
}: {
  label: string;
  value: string;
  delta?: number;
  sublabel?: string;
  icon: typeof DollarSign;
  color: 'emerald' | 'blue' | 'amber' | 'red' | 'purple';
}) {
  const colorClasses = {
    emerald: 'bg-emerald-50 text-emerald-600',
    blue: 'bg-blue-50 text-blue-600',
    amber: 'bg-amber-50 text-amber-600',
    red: 'bg-red-50 text-red-600',
    purple: 'bg-purple-50 text-purple-600',
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-3">
        <div className={cn('w-8 h-8 rounded-lg flex items-center justify-center', colorClasses[color])}>
          <Icon className="w-4 h-4" />
        </div>
        <span className="text-sm text-navy-500">{label}</span>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-bold text-navy-900">{value}</span>
        {sublabel && <span className="text-sm text-navy-400">{sublabel}</span>}
      </div>
      {delta !== undefined && (
        <div className={cn('text-xs mt-1', delta >= 0 ? 'text-emerald-600' : 'text-red-600')}>
          {delta >= 0 ? '+' : ''}{formatCurrency(delta)}/qtr
        </div>
      )}
    </div>
  );
}

// Dashboard Card Component
function DashboardCard({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: typeof DollarSign;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-5 h-5 text-navy-400" />
        <h3 className="font-semibold text-navy-900">{title}</h3>
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

// Metric Row Component
function MetricRow({
  label,
  value,
  valueClass,
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-navy-500">{label}</span>
      <span className={cn('font-medium text-navy-900', valueClass)}>{value}</span>
    </div>
  );
}

// Metric Bar Component
function MetricBar({
  label,
  value,
  max = 100,
  inverse = false,
}: {
  label: string;
  value: number;
  max?: number;
  inverse?: boolean;
}) {
  const percentage = Math.min((value / max) * 100, 100);

  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-navy-500">{label}</span>
        <span className={cn('text-sm font-medium', getValueColor(value, 70, 30, inverse))}>
          {value.toFixed(0)}{max === 100 ? '%' : `/${max}`}
        </span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className={cn('h-full rounded-full transition-all', getValueBgColor(value, 70, 30, inverse))}
          style={{ width: `${percentage}%` }}
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

  const handleSubmit = () => {
    onSubmit(decision);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-navy-900">{ROLE_LABELS[role]} Decisions</h2>
          <p className="text-sm text-navy-500 mt-1">Quarter {gameState.round}</p>
        </div>

        <div className="p-6 space-y-6">
          {role === 'strategy' && (
            <StrategyDecisionForm decision={decision} setDecision={setDecision} />
          )}
          {role === 'marketing' && (
            <MarketingDecisionForm decision={decision} setDecision={setDecision} />
          )}
          {role === 'sales' && (
            <SalesDecisionForm decision={decision} setDecision={setDecision} />
          )}
          {role === 'operations' && (
            <OperationsDecisionForm decision={decision} setDecision={setDecision} />
          )}
          {role === 'rnd' && (
            <RnDDecisionForm decision={decision} setDecision={setDecision} />
          )}
          {role === 'legal' && (
            <LegalDecisionForm decision={decision} setDecision={setDecision} />
          )}
          {role === 'gm' && (
            <GMDecisionForm decision={decision} setDecision={setDecision} />
          )}
        </div>

        <div className="p-6 border-t border-gray-100 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-navy-600 hover:text-navy-800"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isLoading}
            className="px-6 py-2 bg-accent-600 text-white rounded-lg hover:bg-accent-700 disabled:opacity-50"
          >
            {isLoading ? 'Submitting...' : 'Submit Decision'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Decision Forms
function StrategyDecisionForm({ decision, setDecision }: { decision: Record<string, unknown>; setDecision: (d: Record<string, unknown>) => void }) {
  return (
    <div className="space-y-6">
      <SelectField
        label="Risk Posture"
        value={decision.riskPosture as string || 'balanced'}
        onChange={(v) => setDecision({ ...decision, riskPosture: v })}
        options={[
          { value: 'conservative', label: 'Conservative' },
          { value: 'balanced', label: 'Balanced' },
          { value: 'aggressive', label: 'Aggressive' },
        ]}
      />
      <SelectField
        label="Market Entry"
        value={decision.marketEntry as string || 'regionA'}
        onChange={(v) => setDecision({ ...decision, marketEntry: v })}
        options={[
          { value: 'regionA', label: 'North America' },
          { value: 'regionB', label: 'Europe' },
          { value: 'regionC', label: 'Asia Pacific' },
        ]}
      />
      <div>
        <label className="block text-sm font-medium text-navy-700 mb-3">Capital Allocation (%)</label>
        <div className="grid grid-cols-2 gap-4">
          {['rnd', 'marketing', 'operations', 'compliance'].map((key) => (
            <SliderField
              key={key}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              value={(decision.capitalAllocation as Record<string, number>)?.[key] || 25}
              onChange={(v) => setDecision({
                ...decision,
                capitalAllocation: { ...(decision.capitalAllocation as Record<string, number> || {}), [key]: v },
              })}
              min={0}
              max={100}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MarketingDecisionForm({ decision, setDecision }: { decision: Record<string, unknown>; setDecision: (d: Record<string, unknown>) => void }) {
  return (
    <div className="space-y-6">
      <SliderField
        label="Campaign Spend ($M)"
        value={decision.campaignSpend as number || 2}
        onChange={(v) => setDecision({ ...decision, campaignSpend: v })}
        min={0}
        max={20}
      />
      <SliderField
        label="Pricing Change (%)"
        value={decision.pricingChangePct as number || 0}
        onChange={(v) => setDecision({ ...decision, pricingChangePct: v })}
        min={-50}
        max={50}
      />
      <SelectField
        label="Positioning"
        value={decision.positioning as string || 'value-first'}
        onChange={(v) => setDecision({ ...decision, positioning: v })}
        options={[
          { value: 'trust-first', label: 'Trust First' },
          { value: 'value-first', label: 'Value First' },
          { value: 'innovation-first', label: 'Innovation First' },
        ]}
      />
      <SelectField
        label="Channel Mix"
        value={decision.channelMix as string || 'paid'}
        onChange={(v) => setDecision({ ...decision, channelMix: v })}
        options={[
          { value: 'paid', label: 'Paid Media' },
          { value: 'partner', label: 'Partners' },
          { value: 'community', label: 'Community' },
        ]}
      />
    </div>
  );
}

function SalesDecisionForm({ decision, setDecision }: { decision: Record<string, unknown>; setDecision: (d: Record<string, unknown>) => void }) {
  return (
    <div className="space-y-6">
      <SliderField
        label="Enterprise Focus (%)"
        value={decision.enterpriseFocus as number || 50}
        onChange={(v) => setDecision({ ...decision, enterpriseFocus: v })}
        min={0}
        max={100}
      />
      <SliderField
        label="Max Discount (%)"
        value={decision.discountingPolicy as number || 10}
        onChange={(v) => setDecision({ ...decision, discountingPolicy: v })}
        min={0}
        max={30}
      />
      <SliderField
        label="Partner Program ($M)"
        value={decision.partnerProgramInvestment as number || 1}
        onChange={(v) => setDecision({ ...decision, partnerProgramInvestment: v })}
        min={0}
        max={5}
      />
      <SliderField
        label="Pipeline Hygiene Effort"
        value={decision.pipelineHygiene as number || 50}
        onChange={(v) => setDecision({ ...decision, pipelineHygiene: v })}
        min={0}
        max={100}
      />
    </div>
  );
}

function OperationsDecisionForm({ decision, setDecision }: { decision: Record<string, unknown>; setDecision: (d: Record<string, unknown>) => void }) {
  return (
    <div className="space-y-6">
      <SliderField
        label="Capacity Investment ($M)"
        value={decision.capacityInvestment as number || 2}
        onChange={(v) => setDecision({ ...decision, capacityInvestment: v })}
        min={0}
        max={15}
      />
      <SelectField
        label="Supplier Strategy"
        value={decision.supplierStrategy as string || 'dual-source'}
        onChange={(v) => setDecision({ ...decision, supplierStrategy: v })}
        options={[
          { value: 'single-source', label: 'Single Source (Low Cost, High Risk)' },
          { value: 'dual-source', label: 'Dual Source (Balanced)' },
          { value: 'diversified', label: 'Diversified (High Cost, Low Risk)' },
        ]}
      />
      <SliderField
        label="QA Investment ($M)"
        value={decision.qaInvestment as number || 1}
        onChange={(v) => setDecision({ ...decision, qaInvestment: v })}
        min={0}
        max={5}
      />
      <SelectField
        label="Delivery Speed"
        value={decision.deliverySpeed as string || 'balanced'}
        onChange={(v) => setDecision({ ...decision, deliverySpeed: v })}
        options={[
          { value: 'fast', label: 'Fast (Higher Risk)' },
          { value: 'balanced', label: 'Balanced' },
          { value: 'stable', label: 'Stable (Higher Quality)' },
        ]}
      />
    </div>
  );
}

function RnDDecisionForm({ decision, setDecision }: { decision: Record<string, unknown>; setDecision: (d: Record<string, unknown>) => void }) {
  return (
    <div className="space-y-6">
      <SelectField
        label="Roadmap Focus"
        value={decision.roadmapFocus as string || 'features'}
        onChange={(v) => setDecision({ ...decision, roadmapFocus: v })}
        options={[
          { value: 'features', label: 'New Features' },
          { value: 'reliability', label: 'Reliability & Tech Debt' },
          { value: 'privacy-security', label: 'Privacy & Security' },
        ]}
      />
      <SelectField
        label="Release Cadence"
        value={decision.releaseCadence as string || 'balanced'}
        onChange={(v) => setDecision({ ...decision, releaseCadence: v })}
        options={[
          { value: 'fast', label: 'Fast (More Risk)' },
          { value: 'balanced', label: 'Balanced' },
          { value: 'cautious', label: 'Cautious (More Stable)' },
        ]}
      />
      <SliderField
        label="Model Quality Investment ($M)"
        value={decision.modelQualityInvestment as number || 2}
        onChange={(v) => setDecision({ ...decision, modelQualityInvestment: v })}
        min={0}
        max={10}
      />
      <SliderField
        label="Experimentation Budget ($M)"
        value={decision.experimentationBudget as number || 1}
        onChange={(v) => setDecision({ ...decision, experimentationBudget: v })}
        min={0}
        max={5}
      />
    </div>
  );
}

function LegalDecisionForm({ decision, setDecision }: { decision: Record<string, unknown>; setDecision: (d: Record<string, unknown>) => void }) {
  return (
    <div className="space-y-6">
      <SliderField
        label="Compliance Spend ($M)"
        value={decision.complianceSpend as number || 1}
        onChange={(v) => setDecision({ ...decision, complianceSpend: v })}
        min={0}
        max={5}
      />
      <SelectField
        label="Policy Strictness"
        value={decision.policyStrictness as string || 'balanced'}
        onChange={(v) => setDecision({ ...decision, policyStrictness: v })}
        options={[
          { value: 'tight', label: 'Tight (Slower, Safer)' },
          { value: 'balanced', label: 'Balanced' },
          { value: 'loose', label: 'Loose (Faster, Riskier)' },
        ]}
      />
      <SliderField
        label="Audit Readiness"
        value={decision.auditReadiness as number || 50}
        onChange={(v) => setDecision({ ...decision, auditReadiness: v })}
        min={0}
        max={100}
      />
      <SelectField
        label="Data Handling"
        value={decision.dataHandling as string || 'standard'}
        onChange={(v) => setDecision({ ...decision, dataHandling: v })}
        options={[
          { value: 'minimal', label: 'Minimal (Privacy First)' },
          { value: 'standard', label: 'Standard' },
          { value: 'expansive', label: 'Expansive (More Data, More Risk)' },
        ]}
      />
    </div>
  );
}

function GMDecisionForm({ decision, setDecision }: { decision: Record<string, unknown>; setDecision: (d: Record<string, unknown>) => void }) {
  return (
    <div className="space-y-6">
      <SelectField
        label="Hiring Plan"
        value={decision.hiringPlan as string || 'maintain'}
        onChange={(v) => setDecision({ ...decision, hiringPlan: v })}
        options={[
          { value: 'grow', label: 'Grow (+10% headcount)' },
          { value: 'maintain', label: 'Maintain' },
          { value: 'cut', label: 'Cut (-10% headcount)' },
        ]}
      />
      <SelectField
        label="Organization Design"
        value={decision.orgDesign as string || 'hybrid'}
        onChange={(v) => setDecision({ ...decision, orgDesign: v })}
        options={[
          { value: 'centralized', label: 'Centralized' },
          { value: 'hybrid', label: 'Hybrid' },
          { value: 'decentralized', label: 'Decentralized' },
        ]}
      />
      <SliderField
        label="Culture Investment ($M)"
        value={decision.cultureInvestment as number || 0.5}
        onChange={(v) => setDecision({ ...decision, cultureInvestment: v })}
        min={0}
        max={3}
        step={0.5}
      />
      <SelectField
        label="Crisis Response Stance"
        value={decision.crisisResponse as string || 'transparent'}
        onChange={(v) => setDecision({ ...decision, crisisResponse: v })}
        options={[
          { value: 'transparent', label: 'Transparent' },
          { value: 'defensive', label: 'Defensive' },
          { value: 'aggressive', label: 'Aggressive' },
        ]}
      />
    </div>
  );
}

// Form Field Components
function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy-700 mb-2">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
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
  value,
  onChange,
  min,
  max,
  step = 1,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <label className="text-sm font-medium text-navy-700">{label}</label>
        <span className="text-sm font-semibold text-accent-600">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent-600"
      />
      <div className="flex justify-between text-xs text-navy-400 mt-1">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
