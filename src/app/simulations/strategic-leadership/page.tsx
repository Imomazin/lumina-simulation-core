'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Crown,
  Users,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Shield,
  DollarSign,
  Building2,
  ChevronRight,
  ChevronLeft,
  BarChart3,
  PieChart,
  Activity,
  Clock,
  Target,
  Briefcase,
  Scale,
  Heart,
  Zap,
  Globe,
  MessageSquare,
  FileText,
  CheckCircle,
  XCircle,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Play,
  Pause,
  RotateCcw,
  Send,
  ThumbsUp,
  ThumbsDown,
  Gavel,
  Newspaper,
  UserCheck,
  Settings,
  Eye,
  Lock,
} from 'lucide-react';

// =============================================================================
// TYPES
// =============================================================================

type Role = 'ceo' | 'cfo' | 'coo' | 'chief-legal' | 'chief-people';
type Phase = 'briefing' | 'decisions' | 'board-review' | 'resolution' | 'debrief';
type CrisisSeverity = 'minor' | 'moderate' | 'severe' | 'existential';

interface BoardMember {
  id: string;
  name: string;
  title: string;
  avatar: string;
  archetype: 'activist' | 'conservative' | 'growth-focused' | 'governance-hawk';
  patience: number;
  currentMood: 'supportive' | 'neutral' | 'concerned' | 'hostile';
  concerns: string[];
  votingPower: number;
}

interface Crisis {
  id: string;
  name: string;
  description: string;
  severity: CrisisSeverity;
  mediaAttention: number;
  roundsActive: number;
  stakeholderImpact: Record<string, number>;
}

interface GameState {
  round: number;
  phase: Phase;
  boardConfidence: number;
  internalAlignment: number;
  reputationScore: number;
  shareholderValue: number;
  marketCap: number;
  revenue: number;
  operatingMargin: number;
  cashReserves: number;
  employeeMorale: number;
  investorSentiment: number;
  regulatorScrutiny: number;
  mediaPerception: number;
  activeCrisis: Crisis | null;
  board: BoardMember[];
  pendingBoardMotions: string[];
  narrativeEvents: Array<{
    id: string;
    round: number;
    title: string;
    description: string;
    impact: 'positive' | 'negative' | 'neutral';
  }>;
}

// =============================================================================
// MOCK DATA
// =============================================================================

const ROLES: Record<Role, { title: string; description: string; icon: typeof Crown }> = {
  ceo: {
    title: 'CEO / Strategy Lead',
    description: 'Sets corporate direction, manages board relations, owns the narrative',
    icon: Crown,
  },
  cfo: {
    title: 'Chief Financial Officer',
    description: 'Controls capital allocation, investor relations, financial sustainability',
    icon: DollarSign,
  },
  coo: {
    title: 'Chief Operating Officer',
    description: 'Oversees execution, operational efficiency, cross-functional alignment',
    icon: Settings,
  },
  'chief-legal': {
    title: 'Chief Legal & Compliance',
    description: 'Manages regulatory risk, governance posture, ethical boundaries',
    icon: Scale,
  },
  'chief-people': {
    title: 'Chief People Officer',
    description: 'Owns talent strategy, culture, organizational health',
    icon: Heart,
  },
};

const INITIAL_BOARD: BoardMember[] = [
  {
    id: 'board-1',
    name: 'Victoria Sterling',
    title: 'Chair',
    avatar: 'VS',
    archetype: 'conservative',
    patience: 70,
    currentMood: 'neutral',
    concerns: ['Long-term sustainability', 'Risk management'],
    votingPower: 25,
  },
  {
    id: 'board-2',
    name: 'Marcus Chen',
    title: 'Independent Director',
    avatar: 'MC',
    archetype: 'growth-focused',
    patience: 50,
    currentMood: 'supportive',
    concerns: ['Growth trajectory', 'Market expansion'],
    votingPower: 20,
  },
  {
    id: 'board-3',
    name: 'Sarah Williams',
    title: 'Activist Representative',
    avatar: 'SW',
    archetype: 'activist',
    patience: 30,
    currentMood: 'concerned',
    concerns: ['Shareholder returns', 'Cost efficiency'],
    votingPower: 25,
  },
  {
    id: 'board-4',
    name: 'Dr. James Morrison',
    title: 'Governance Expert',
    avatar: 'JM',
    archetype: 'governance-hawk',
    patience: 60,
    currentMood: 'neutral',
    concerns: ['Compliance posture', 'ESG metrics'],
    votingPower: 15,
  },
  {
    id: 'board-5',
    name: 'Elena Rodriguez',
    title: 'Industry Veteran',
    avatar: 'ER',
    archetype: 'conservative',
    patience: 65,
    currentMood: 'supportive',
    concerns: ['Operational excellence', 'Talent retention'],
    votingPower: 15,
  },
];

const INITIAL_STATE: GameState = {
  round: 1,
  phase: 'briefing',
  boardConfidence: 72,
  internalAlignment: 68,
  reputationScore: 75,
  shareholderValue: 100,
  marketCap: 4.2,
  revenue: 385,
  operatingMargin: 18.5,
  cashReserves: 890,
  employeeMorale: 71,
  investorSentiment: 15,
  regulatorScrutiny: 35,
  mediaPerception: 22,
  activeCrisis: null,
  board: INITIAL_BOARD,
  pendingBoardMotions: [],
  narrativeEvents: [],
};

const SAMPLE_CRISIS: Crisis = {
  id: 'crisis-1',
  name: 'Data Breach Allegations',
  description: 'A prominent security researcher has claimed to have evidence of a significant data breach affecting customer records. Media inquiries are flooding in.',
  severity: 'severe',
  mediaAttention: 85,
  roundsActive: 0,
  stakeholderImpact: {
    customers: -25,
    investors: -15,
    regulators: -30,
    employees: -10,
  },
};

// =============================================================================
// COMPONENTS
// =============================================================================

function BoardConfidenceGauge({ value }: { value: number }) {
  const getColor = () => {
    if (value >= 70) return 'text-emerald-500';
    if (value >= 50) return 'text-amber-500';
    if (value >= 30) return 'text-orange-500';
    return 'text-red-500';
  };

  const getStatus = () => {
    if (value >= 70) return 'Strong Support';
    if (value >= 50) return 'Cautious Support';
    if (value >= 30) return 'Growing Concerns';
    return 'CRITICAL - Termination Risk';
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Board Confidence</h3>
        <Gavel className="w-5 h-5 text-slate-500" />
      </div>

      <div className="relative">
        {/* Gauge background */}
        <div className="h-4 bg-slate-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${value}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className={`h-full rounded-full ${
              value >= 70 ? 'bg-gradient-to-r from-emerald-600 to-emerald-400' :
              value >= 50 ? 'bg-gradient-to-r from-amber-600 to-amber-400' :
              value >= 30 ? 'bg-gradient-to-r from-orange-600 to-orange-400' :
              'bg-gradient-to-r from-red-600 to-red-400'
            }`}
          />
        </div>

        {/* Threshold markers */}
        <div className="absolute top-0 left-0 right-0 h-4 flex">
          <div className="w-[30%] border-r border-slate-600" />
          <div className="w-[20%] border-r border-slate-600" />
          <div className="w-[20%] border-r border-slate-600" />
        </div>
      </div>

      <div className="flex items-center justify-between mt-3">
        <span className={`text-3xl font-bold ${getColor()}`}>{value}%</span>
        <span className={`text-sm font-medium ${getColor()}`}>{getStatus()}</span>
      </div>

      {value < 30 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 p-3 bg-red-900/30 border border-red-700 rounded-lg flex items-center gap-2"
        >
          <AlertTriangle className="w-5 h-5 text-red-400" />
          <span className="text-sm text-red-300">The board is considering a leadership change</span>
        </motion.div>
      )}
    </div>
  );
}

function BoardMemberCard({ member, showDetails = false }: { member: BoardMember; showDetails?: boolean }) {
  const moodColors = {
    supportive: 'border-emerald-500 bg-emerald-500/10',
    neutral: 'border-slate-500 bg-slate-500/10',
    concerned: 'border-amber-500 bg-amber-500/10',
    hostile: 'border-red-500 bg-red-500/10',
  };

  const moodIcons = {
    supportive: <ThumbsUp className="w-4 h-4 text-emerald-400" />,
    neutral: <Minus className="w-4 h-4 text-slate-400" />,
    concerned: <AlertCircle className="w-4 h-4 text-amber-400" />,
    hostile: <ThumbsDown className="w-4 h-4 text-red-400" />,
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`p-4 rounded-xl border-2 ${moodColors[member.currentMood]} transition-all`}
    >
      <div className="flex items-start gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center text-white font-bold text-sm">
          {member.avatar}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-white">{member.name}</h4>
            {moodIcons[member.currentMood]}
          </div>
          <p className="text-sm text-slate-400">{member.title}</p>
          {showDetails && (
            <div className="mt-2 space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Voting Power</span>
                <span className="text-slate-300">{member.votingPower}%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Patience</span>
                <div className="w-16 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-violet-500 rounded-full"
                    style={{ width: `${member.patience}%` }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {showDetails && member.concerns.length > 0 && (
        <div className="mt-3 pt-3 border-t border-slate-700">
          <p className="text-xs text-slate-500 mb-1">Key Concerns:</p>
          <div className="flex flex-wrap gap-1">
            {member.concerns.map((concern, i) => (
              <span key={i} className="px-2 py-0.5 bg-slate-800 text-slate-300 text-xs rounded">
                {concern}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

function CrisisPanel({ crisis }: { crisis: Crisis }) {
  const severityColors = {
    minor: 'from-amber-600 to-amber-700',
    moderate: 'from-orange-600 to-orange-700',
    severe: 'from-red-600 to-red-700',
    existential: 'from-red-800 to-red-900',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-gradient-to-br ${severityColors[crisis.severity]} rounded-2xl p-6 border border-red-500/50`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <div>
            <span className="text-xs font-medium text-red-200 uppercase tracking-wider">Active Crisis</span>
            <h3 className="text-xl font-bold text-white">{crisis.name}</h3>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
          crisis.severity === 'existential' ? 'bg-red-900 text-red-100' :
          crisis.severity === 'severe' ? 'bg-red-800 text-red-100' :
          'bg-orange-800 text-orange-100'
        }`}>
          {crisis.severity}
        </span>
      </div>

      <p className="text-red-100 mb-4">{crisis.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-black/20 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Newspaper className="w-4 h-4 text-red-200" />
            <span className="text-xs text-red-200">Media Attention</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-2 bg-black/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-red-400 rounded-full"
                style={{ width: `${crisis.mediaAttention}%` }}
              />
            </div>
            <span className="text-sm font-bold text-white">{crisis.mediaAttention}%</span>
          </div>
        </div>
        <div className="bg-black/20 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Clock className="w-4 h-4 text-red-200" />
            <span className="text-xs text-red-200">Rounds Active</span>
          </div>
          <span className="text-2xl font-bold text-white">{crisis.roundsActive}</span>
        </div>
      </div>

      <div className="bg-black/20 rounded-lg p-3">
        <p className="text-xs text-red-200 mb-2">Stakeholder Impact</p>
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(crisis.stakeholderImpact).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between text-sm">
              <span className="text-red-100 capitalize">{key}</span>
              <span className={`font-bold ${value < 0 ? 'text-red-300' : 'text-emerald-300'}`}>
                {value > 0 ? '+' : ''}{value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ExecutiveBriefing({ gameState }: { gameState: GameState }) {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center">
            <FileText className="w-6 h-6 text-violet-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Executive Briefing</h2>
            <p className="text-sm text-slate-400">Quarter {gameState.round} Strategic Update</p>
          </div>
        </div>

        <div className="prose prose-invert prose-sm max-w-none">
          <p className="text-slate-300 leading-relaxed">
            The executive team faces a pivotal quarter as market conditions evolve and stakeholder
            expectations intensify. Board confidence stands at <span className="font-bold text-violet-400">
            {gameState.boardConfidence}%</span>, with the activist investor coalition growing more vocal
            about returns.
          </p>

          <div className="my-4 p-4 bg-slate-800/50 rounded-lg border-l-4 border-amber-500">
            <p className="text-amber-200 font-medium mb-1">Key Concern</p>
            <p className="text-slate-300">
              Internal alignment has dropped to {gameState.internalAlignment}%, suggesting friction
              between functional areas. The CFO and COO have divergent views on capital allocation
              priorities.
            </p>
          </div>

          <p className="text-slate-300 leading-relaxed">
            Media perception remains {gameState.mediaPerception > 0 ? 'favorable' : 'challenging'},
            though regulatory scrutiny has {gameState.regulatorScrutiny > 40 ? 'increased' : 'stabilized'}.
            Employee morale indicators suggest {gameState.employeeMorale > 60 ? 'healthy engagement' :
            'growing concerns about direction'}.
          </p>
        </div>
      </div>

      {/* KPI Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Market Cap', value: `$${gameState.marketCap}B`, icon: Building2, trend: 'up' },
          { label: 'Revenue (Q)', value: `$${gameState.revenue}M`, icon: DollarSign, trend: 'up' },
          { label: 'Op. Margin', value: `${gameState.operatingMargin}%`, icon: PieChart, trend: 'down' },
          { label: 'Cash', value: `$${gameState.cashReserves}M`, icon: Shield, trend: 'neutral' },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-slate-900 rounded-xl p-4 border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <kpi.icon className="w-5 h-5 text-slate-500" />
              {kpi.trend === 'up' && <ArrowUpRight className="w-4 h-4 text-emerald-400" />}
              {kpi.trend === 'down' && <ArrowDownRight className="w-4 h-4 text-red-400" />}
              {kpi.trend === 'neutral' && <Minus className="w-4 h-4 text-slate-400" />}
            </div>
            <p className="text-xs text-slate-500 mb-1">{kpi.label}</p>
            <p className="text-xl font-bold text-white">{kpi.value}</p>
          </div>
        ))}
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
    ceo: [
      {
        id: 'strategicDirection',
        label: 'Strategic Direction',
        type: 'select',
        options: [
          { value: 'growth', label: 'Aggressive Growth' },
          { value: 'consolidation', label: 'Consolidate & Optimize' },
          { value: 'transformation', label: 'Strategic Transformation' },
          { value: 'harvest', label: 'Harvest & Return Capital' },
        ],
        description: 'Set the overall strategic posture for the organization',
      },
      {
        id: 'riskAppetite',
        label: 'Risk Appetite',
        type: 'select',
        options: [
          { value: 'conservative', label: 'Conservative' },
          { value: 'moderate', label: 'Moderate' },
          { value: 'aggressive', label: 'Aggressive' },
        ],
        description: 'Define the organization\'s tolerance for strategic risk',
      },
      {
        id: 'boardEngagement',
        label: 'Board Engagement Level',
        type: 'slider',
        min: 0,
        max: 100,
        description: 'Time and attention devoted to board management',
      },
    ],
    cfo: [
      {
        id: 'capitalAllocation',
        label: 'R&D Allocation',
        type: 'slider',
        min: 0,
        max: 100,
        description: 'Percentage of discretionary capital to R&D',
      },
      {
        id: 'dividendPolicy',
        label: 'Dividend Policy',
        type: 'select',
        options: [
          { value: 'increase', label: 'Increase Dividend' },
          { value: 'maintain', label: 'Maintain Current' },
          { value: 'reduce', label: 'Reduce Dividend' },
          { value: 'suspend', label: 'Suspend Dividend' },
        ],
        description: 'Shareholder return policy decision',
      },
      {
        id: 'costReduction',
        label: 'Cost Reduction Target',
        type: 'slider',
        min: 0,
        max: 30,
        description: 'Percentage cost reduction target',
      },
    ],
    coo: [
      {
        id: 'operationalFocus',
        label: 'Operational Focus',
        type: 'select',
        options: [
          { value: 'efficiency', label: 'Efficiency & Cost' },
          { value: 'quality', label: 'Quality & Excellence' },
          { value: 'speed', label: 'Speed & Agility' },
          { value: 'flexibility', label: 'Flexibility & Resilience' },
        ],
        description: 'Primary operational priority',
      },
      {
        id: 'restructuring',
        label: 'Restructuring Scope',
        type: 'select',
        options: [
          { value: 'none', label: 'No Restructuring' },
          { value: 'minor', label: 'Minor Adjustments' },
          { value: 'major', label: 'Major Restructuring' },
          { value: 'transformation', label: 'Full Transformation' },
        ],
        description: 'Organizational change scope',
      },
    ],
    'chief-legal': [
      {
        id: 'compliancePosture',
        label: 'Compliance Posture',
        type: 'select',
        options: [
          { value: 'minimum', label: 'Minimum Required' },
          { value: 'standard', label: 'Industry Standard' },
          { value: 'proactive', label: 'Proactive Compliance' },
          { value: 'industry-leading', label: 'Industry Leading' },
        ],
        description: 'Regulatory compliance approach',
      },
      {
        id: 'regulatoryEngagement',
        label: 'Regulatory Engagement',
        type: 'select',
        options: [
          { value: 'reactive', label: 'Reactive' },
          { value: 'cooperative', label: 'Cooperative' },
          { value: 'proactive', label: 'Proactive Shaping' },
        ],
        description: 'Approach to regulatory relationships',
      },
    ],
    'chief-people': [
      {
        id: 'talentStrategy',
        label: 'Talent Strategy',
        type: 'select',
        options: [
          { value: 'acquire', label: 'Aggressive Acquisition' },
          { value: 'develop', label: 'Develop Internal' },
          { value: 'retain', label: 'Retention Focus' },
          { value: 'restructure', label: 'Restructure & Refresh' },
        ],
        description: 'Primary talent management approach',
      },
      {
        id: 'compensationPhilosophy',
        label: 'Compensation Philosophy',
        type: 'select',
        options: [
          { value: 'below-market', label: 'Below Market (-10%)' },
          { value: 'market', label: 'Market Rate' },
          { value: 'above-market', label: 'Above Market (+15%)' },
        ],
        description: 'Compensation positioning vs market',
      },
      {
        id: 'cultureInvestment',
        label: 'Culture Investment',
        type: 'slider',
        min: 0,
        max: 100,
        description: 'Investment in culture and engagement programs',
      },
    ],
  };

  const currentDecisions = roleDecisions[role] || [];

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center">
          {(() => {
            const RoleIcon = ROLES[role].icon;
            return <RoleIcon className="w-6 h-6 text-violet-400" />;
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
                    className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                      decisions[decision.id] === opt.value
                        ? 'border-violet-500 bg-violet-500/20 text-violet-300'
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
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-violet-500"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>{decision.min}%</span>
                  <span className="font-medium text-violet-400">{decisions[decision.id] || decision.min}%</span>
                  <span>{decision.max}%</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => onSubmit(decisions)}
        className="mt-6 w-full py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-500 hover:to-purple-500 transition-all flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        Submit Decisions
      </button>
    </div>
  );
}

function StakeholderDashboard({ gameState }: { gameState: GameState }) {
  const stakeholders = [
    {
      name: 'Investors',
      sentiment: gameState.investorSentiment,
      icon: TrendingUp,
      concerns: ['Returns', 'Guidance'],
    },
    {
      name: 'Employees',
      sentiment: gameState.employeeMorale - 50,
      icon: Users,
      concerns: ['Stability', 'Growth'],
    },
    {
      name: 'Regulators',
      sentiment: -(gameState.regulatorScrutiny - 30),
      icon: Shield,
      concerns: ['Compliance', 'Transparency'],
    },
    {
      name: 'Media',
      sentiment: gameState.mediaPerception,
      icon: Newspaper,
      concerns: ['Story', 'Access'],
    },
  ];

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <h3 className="text-lg font-bold text-white mb-4">Stakeholder Sentiment</h3>
      <div className="space-y-4">
        {stakeholders.map((s) => (
          <div key={s.name} className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center">
              <s.icon className="w-5 h-5 text-slate-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-slate-300">{s.name}</span>
                <span className={`text-sm font-bold ${
                  s.sentiment > 10 ? 'text-emerald-400' :
                  s.sentiment < -10 ? 'text-red-400' :
                  'text-slate-400'
                }`}>
                  {s.sentiment > 0 ? '+' : ''}{s.sentiment}
                </span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    s.sentiment > 10 ? 'bg-emerald-500' :
                    s.sentiment < -10 ? 'bg-red-500' :
                    'bg-slate-500'
                  }`}
                  style={{ width: `${Math.min(100, Math.max(0, (s.sentiment + 50)))}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// MAIN PAGE
// =============================================================================

export default function StrategicLeadershipPage() {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const [selectedRole, setSelectedRole] = useState<Role>('ceo');
  const [showBoardDetails, setShowBoardDetails] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Simulate a crisis appearing in round 1
    setTimeout(() => {
      setGameState((prev) => ({
        ...prev,
        activeCrisis: SAMPLE_CRISIS,
        phase: 'decisions',
      }));
    }, 3000);
  }, []);

  if (!mounted) return null;

  const handleDecisionSubmit = (decisions: Record<string, string | number>) => {
    console.log('Submitted decisions:', decisions);
    // In a real implementation, this would send to the backend
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-700 rounded-xl flex items-center justify-center">
                  <Crown className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-white">Strategic Leadership</h1>
                  <p className="text-xs text-slate-400">Governing Under Uncertainty</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              {/* Round indicator */}
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-500" />
                <span className="text-sm text-slate-400">Round</span>
                <span className="text-lg font-bold text-white">{gameState.round}</span>
                <span className="text-sm text-slate-500">/ 8</span>
              </div>

              {/* Phase indicator */}
              <div className="px-3 py-1.5 bg-violet-500/20 border border-violet-500/30 rounded-lg">
                <span className="text-sm font-medium text-violet-300 capitalize">{gameState.phase.replace('-', ' ')}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Crisis Panel (if active) */}
            {gameState.activeCrisis && (
              <CrisisPanel crisis={gameState.activeCrisis} />
            )}

            {/* Phase-dependent content */}
            {gameState.phase === 'briefing' && (
              <ExecutiveBriefing gameState={gameState} />
            )}

            {gameState.phase === 'decisions' && (
              <>
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
                            ? 'bg-violet-600 text-white'
                            : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                        }`}
                      >
                        <RoleIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">{ROLES[role].title.split('/')[0].trim()}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Decision Panel */}
                <DecisionPanel role={selectedRole} onSubmit={handleDecisionSubmit} />
              </>
            )}

            {/* Executive Briefing (always visible but collapsible) */}
            {gameState.phase !== 'briefing' && (
              <details className="group">
                <summary className="flex items-center gap-2 text-slate-400 hover:text-white cursor-pointer">
                  <FileText className="w-4 h-4" />
                  <span className="text-sm">View Executive Briefing</span>
                  <ChevronRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="mt-4">
                  <ExecutiveBriefing gameState={gameState} />
                </div>
              </details>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Board Confidence */}
            <BoardConfidenceGauge value={gameState.boardConfidence} />

            {/* Internal Alignment */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Internal Alignment</h3>
                <Users className="w-5 h-5 text-slate-500" />
              </div>
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${gameState.internalAlignment}%` }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-white">{gameState.internalAlignment}%</span>
                <span className="text-sm text-slate-400">
                  {gameState.internalAlignment > 70 ? 'Well Aligned' :
                   gameState.internalAlignment > 50 ? 'Some Friction' :
                   'Significant Tension'}
                </span>
              </div>
            </div>

            {/* Stakeholder Dashboard */}
            <StakeholderDashboard gameState={gameState} />

            {/* Board Members */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Board of Directors</h3>
                <button
                  onClick={() => setShowBoardDetails(!showBoardDetails)}
                  className="text-xs text-violet-400 hover:text-violet-300"
                >
                  {showBoardDetails ? 'Hide Details' : 'Show Details'}
                </button>
              </div>
              <div className="space-y-3">
                {gameState.board.map((member) => (
                  <BoardMemberCard key={member.id} member={member} showDetails={showBoardDetails} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
