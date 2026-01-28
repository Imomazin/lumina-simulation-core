'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUp,
  TrendingDown,
  Users,
  DollarSign,
  Target,
  PieChart,
  BarChart3,
  Activity,
  Zap,
  Globe,
  ShoppingCart,
  Megaphone,
  Award,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Clock,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Eye,
  Shield,
  Flame,
  Trophy,
  Swords,
  MapPin,
  Percent,
  Heart,
} from 'lucide-react';

// =============================================================================
// TYPES
// =============================================================================

type Role = 'marketing-lead' | 'sales-lead' | 'strategy-lead' | 'product-lead';

interface Competitor {
  id: string;
  name: string;
  color: string;
  marketShare: number;
  brandStrength: number;
  priceIndex: number;
  strategy: 'aggressive' | 'defensive' | 'balanced';
  lastMove: string;
}

interface MarketSegment {
  id: string;
  name: string;
  size: number;
  growth: number;
  yourShare: number;
  priceElasticity: number;
  brandSensitivity: number;
}

interface GameState {
  round: number;
  maxRounds: number;
  teamName: string;
  marketShare: number;
  brandEquity: number;
  revenue: number;
  grossMargin: number;
  unitsSold: number;
  priceIndex: number;
  nps: number;
  customerAcquisitionCost: number;
  churnRate: number;
  priceWarActive: boolean;
  priceWarIntensity: number;
  competitors: Competitor[];
  segments: MarketSegment[];
  totalMarketSize: number;
  marketGrowth: number;
}

// =============================================================================
// MOCK DATA
// =============================================================================

const ROLES: Record<Role, { title: string; description: string; icon: typeof TrendingUp }> = {
  'marketing-lead': {
    title: 'Marketing Lead',
    description: 'Owns brand positioning, campaigns, and market perception',
    icon: Megaphone,
  },
  'sales-lead': {
    title: 'Sales Lead',
    description: 'Drives revenue, manages channels, owns customer relationships',
    icon: ShoppingCart,
  },
  'strategy-lead': {
    title: 'Strategy Lead',
    description: 'Sets competitive direction, market entry, portfolio decisions',
    icon: Target,
  },
  'product-lead': {
    title: 'Product Lead',
    description: 'Manages product roadmap, features, and market fit',
    icon: Zap,
  },
};

const INITIAL_COMPETITORS: Competitor[] = [
  {
    id: 'comp-1',
    name: 'TechGiant Corp',
    color: 'bg-red-500',
    marketShare: 32,
    brandStrength: 85,
    priceIndex: 110,
    strategy: 'defensive',
    lastMove: 'Increased brand spend by 15%',
  },
  {
    id: 'comp-2',
    name: 'ValueMax Inc',
    color: 'bg-amber-500',
    marketShare: 18,
    brandStrength: 55,
    priceIndex: 75,
    strategy: 'aggressive',
    lastMove: 'Cut prices by 12%',
  },
  {
    id: 'comp-3',
    name: 'InnovateTech',
    color: 'bg-emerald-500',
    marketShare: 12,
    brandStrength: 72,
    priceIndex: 105,
    strategy: 'balanced',
    lastMove: 'Launched new product line',
  },
];

const INITIAL_SEGMENTS: MarketSegment[] = [
  { id: 'seg-1', name: 'Enterprise', size: 2400, growth: 8, yourShare: 28, priceElasticity: 0.3, brandSensitivity: 0.8 },
  { id: 'seg-2', name: 'Mid-Market', size: 1800, growth: 12, yourShare: 22, priceElasticity: 0.6, brandSensitivity: 0.5 },
  { id: 'seg-3', name: 'SMB', size: 3200, growth: 15, yourShare: 18, priceElasticity: 0.9, brandSensitivity: 0.3 },
  { id: 'seg-4', name: 'Consumer', size: 5600, growth: 5, yourShare: 12, priceElasticity: 1.2, brandSensitivity: 0.4 },
];

const INITIAL_STATE: GameState = {
  round: 1,
  maxRounds: 10,
  teamName: 'Lumina Corp',
  marketShare: 24,
  brandEquity: 68,
  revenue: 385,
  grossMargin: 42,
  unitsSold: 12500,
  priceIndex: 100,
  nps: 32,
  customerAcquisitionCost: 245,
  churnRate: 8.5,
  priceWarActive: false,
  priceWarIntensity: 0,
  competitors: INITIAL_COMPETITORS,
  segments: INITIAL_SEGMENTS,
  totalMarketSize: 13000,
  marketGrowth: 9.2,
};

// =============================================================================
// COMPONENTS
// =============================================================================

function MarketShareChart({ state }: { state: GameState }) {
  const allPlayers = [
    { name: state.teamName, share: state.marketShare, color: 'bg-blue-500', isYou: true },
    ...state.competitors.map((c) => ({ name: c.name, share: c.marketShare, color: c.color, isYou: false })),
  ];

  const otherShare = 100 - allPlayers.reduce((sum, p) => sum + p.share, 0);
  if (otherShare > 0) {
    allPlayers.push({ name: 'Others', share: otherShare, color: 'bg-slate-600', isYou: false });
  }

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white">Market Share</h3>
        <span className="text-sm text-slate-400">Total: ${(state.totalMarketSize / 1000).toFixed(1)}B</span>
      </div>

      {/* Stacked bar */}
      <div className="h-8 rounded-full overflow-hidden flex mb-6">
        {allPlayers.map((player, i) => (
          <motion.div
            key={player.name}
            initial={{ width: 0 }}
            animate={{ width: `${player.share}%` }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className={`${player.color} ${player.isYou ? 'ring-2 ring-white/50' : ''} relative group`}
          >
            {player.share > 8 && (
              <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                {player.share}%
              </span>
            )}
          </motion.div>
        ))}
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-2">
        {allPlayers.map((player) => (
          <div
            key={player.name}
            className={`flex items-center gap-2 p-2 rounded-lg ${player.isYou ? 'bg-blue-500/10 border border-blue-500/30' : ''}`}
          >
            <div className={`w-3 h-3 rounded-full ${player.color}`} />
            <span className={`text-sm ${player.isYou ? 'text-blue-300 font-semibold' : 'text-slate-400'}`}>
              {player.name}
            </span>
            <span className="text-sm text-slate-500 ml-auto">{player.share}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CompetitorCard({ competitor, isLeader }: { competitor: Competitor; isLeader: boolean }) {
  const strategyColors = {
    aggressive: 'text-red-400 bg-red-500/10',
    defensive: 'text-blue-400 bg-blue-500/10',
    balanced: 'text-emerald-400 bg-emerald-500/10',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`bg-slate-800/50 rounded-xl p-4 border ${isLeader ? 'border-amber-500/50' : 'border-slate-700'}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 ${competitor.color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
            {competitor.name.charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-semibold text-white">{competitor.name}</h4>
              {isLeader && <Trophy className="w-4 h-4 text-amber-400" />}
            </div>
            <span className={`text-xs px-2 py-0.5 rounded ${strategyColors[competitor.strategy]}`}>
              {competitor.strategy}
            </span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold text-white">{competitor.marketShare}%</div>
          <div className="text-xs text-slate-500">market share</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <div className="text-xs text-slate-500 mb-1">Brand Strength</div>
          <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-violet-500 rounded-full"
              style={{ width: `${competitor.brandStrength}%` }}
            />
          </div>
        </div>
        <div>
          <div className="text-xs text-slate-500 mb-1">Price Index</div>
          <div className="text-sm font-medium text-white">{competitor.priceIndex}</div>
        </div>
      </div>

      <div className="text-xs text-slate-400 bg-slate-900/50 rounded-lg p-2">
        <span className="text-slate-500">Last move:</span> {competitor.lastMove}
      </div>
    </motion.div>
  );
}

function PriceWarIndicator({ active, intensity }: { active: boolean; intensity: number }) {
  if (!active) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gradient-to-r from-red-900 to-orange-900 rounded-2xl p-6 border border-red-500/50"
    >
      <div className="flex items-center gap-4">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center"
        >
          <Swords className="w-8 h-8 text-red-400" />
        </motion.div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-red-300">Price War Active!</h3>
          <p className="text-red-200/80 text-sm">Competitors are engaged in aggressive price cutting</p>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-red-400">{intensity}%</div>
          <div className="text-xs text-red-300">Intensity</div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-black/20 rounded-lg">
        <div className="flex items-center gap-2 text-amber-300 text-sm">
          <AlertTriangle className="w-4 h-4" />
          <span>Matching prices will protect share but erode margins significantly</span>
        </div>
      </div>
    </motion.div>
  );
}

function SegmentHeatmap({ segments }: { segments: MarketSegment[] }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white">Segment Analysis</h3>
        <MapPin className="w-5 h-5 text-slate-500" />
      </div>

      <div className="space-y-4">
        {segments.map((segment) => {
          const attractiveness = (segment.growth * 0.4 + segment.yourShare * 0.3 + (100 - segment.priceElasticity * 50) * 0.3);
          const heatColor =
            attractiveness > 60 ? 'from-emerald-600 to-emerald-500' :
            attractiveness > 40 ? 'from-amber-600 to-amber-500' :
            'from-slate-600 to-slate-500';

          return (
            <div key={segment.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium text-white">{segment.name}</span>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-slate-400">${(segment.size / 1000).toFixed(1)}B</span>
                  <span className={`flex items-center gap-1 ${segment.growth > 10 ? 'text-emerald-400' : 'text-slate-400'}`}>
                    <TrendingUp className="w-3 h-3" />
                    {segment.growth}%
                  </span>
                </div>
              </div>
              <div className="relative h-10 bg-slate-800 rounded-lg overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${segment.yourShare}%` }}
                  transition={{ duration: 0.8 }}
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r ${heatColor} rounded-lg flex items-center justify-end pr-2`}
                >
                  <span className="text-white text-sm font-bold">{segment.yourShare}%</span>
                </motion.div>
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>Price Elasticity: {segment.priceElasticity.toFixed(1)}</span>
                <span>Brand Sensitivity: {(segment.brandSensitivity * 100).toFixed(0)}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function BrandEquityMeter({ value }: { value: number }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Brand Equity</h3>
        <Heart className="w-5 h-5 text-slate-500" />
      </div>

      <div className="relative mb-4">
        {/* Circular gauge */}
        <svg className="w-32 h-32 mx-auto" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#1e293b"
            strokeWidth="10"
          />
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#brandGradient)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={`${value * 2.83} 283`}
            transform="rotate(-90 50 50)"
            initial={{ strokeDasharray: '0 283' }}
            animate={{ strokeDasharray: `${value * 2.83} 283` }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
          <defs>
            <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#d946ef" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-white">{value}</span>
          <span className="text-xs text-slate-500">/ 100</span>
        </div>
      </div>

      <div className="text-center">
        <span className={`text-sm font-medium ${
          value >= 70 ? 'text-emerald-400' :
          value >= 50 ? 'text-amber-400' :
          'text-red-400'
        }`}>
          {value >= 70 ? 'Strong Brand Position' :
           value >= 50 ? 'Moderate Brand Health' :
           'Brand at Risk'}
        </span>
      </div>

      <p className="text-xs text-slate-500 text-center mt-2">
        Brand equity changes slowly — protect it carefully
      </p>
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
    'marketing-lead': [
      {
        id: 'marketingBudget',
        label: 'Marketing Budget',
        type: 'slider',
        min: 0,
        max: 100,
        description: 'Percentage of revenue allocated to marketing',
      },
      {
        id: 'positioning',
        label: 'Brand Positioning',
        type: 'select',
        options: [
          { value: 'premium', label: 'Premium / Trust-First' },
          { value: 'value', label: 'Value / Price-First' },
          { value: 'innovation', label: 'Innovation / Tech-First' },
          { value: 'service', label: 'Service / Experience-First' },
        ],
        description: 'Core brand positioning strategy',
      },
      {
        id: 'campaignFocus',
        label: 'Campaign Focus',
        type: 'select',
        options: [
          { value: 'awareness', label: 'Brand Awareness' },
          { value: 'consideration', label: 'Consideration / Education' },
          { value: 'conversion', label: 'Direct Conversion' },
          { value: 'retention', label: 'Customer Retention' },
        ],
        description: 'Primary marketing objective',
      },
    ],
    'sales-lead': [
      {
        id: 'discountAuthority',
        label: 'Discount Authority',
        type: 'slider',
        min: 0,
        max: 40,
        description: 'Maximum discount reps can offer (%)',
      },
      {
        id: 'channelPriority',
        label: 'Channel Priority',
        type: 'select',
        options: [
          { value: 'direct', label: 'Direct Sales' },
          { value: 'partner', label: 'Partner / Reseller' },
          { value: 'online', label: 'Online / Self-Serve' },
          { value: 'hybrid', label: 'Hybrid Approach' },
        ],
        description: 'Primary sales channel strategy',
      },
      {
        id: 'accountFocus',
        label: 'Account Focus',
        type: 'select',
        options: [
          { value: 'enterprise', label: 'Enterprise (Big Deals)' },
          { value: 'mid-market', label: 'Mid-Market' },
          { value: 'smb', label: 'SMB / Volume' },
          { value: 'balanced', label: 'Balanced Portfolio' },
        ],
        description: 'Target customer segment',
      },
    ],
    'strategy-lead': [
      {
        id: 'competitiveResponse',
        label: 'Competitive Response',
        type: 'select',
        options: [
          { value: 'ignore', label: 'Ignore / Stay Course' },
          { value: 'match', label: 'Match Competitor Moves' },
          { value: 'undercut', label: 'Undercut / Aggressive' },
          { value: 'differentiate', label: 'Differentiate / Pivot' },
        ],
        description: 'How to respond to competitor actions',
      },
      {
        id: 'priceChange',
        label: 'Price Adjustment',
        type: 'slider',
        min: -30,
        max: 30,
        description: 'Price change vs current (%)',
      },
      {
        id: 'segmentFocus',
        label: 'Segment Priority',
        type: 'select',
        options: [
          { value: 'enterprise', label: 'Double Down on Enterprise' },
          { value: 'mid-market', label: 'Expand Mid-Market' },
          { value: 'smb', label: 'Capture SMB Volume' },
          { value: 'consumer', label: 'Consumer Push' },
        ],
        description: 'Which segment to prioritize',
      },
    ],
    'product-lead': [
      {
        id: 'featureInvestment',
        label: 'Feature Investment',
        type: 'slider',
        min: 0,
        max: 100,
        description: 'R&D budget for new features (%)',
      },
      {
        id: 'qualityFocus',
        label: 'Quality vs Speed',
        type: 'slider',
        min: 0,
        max: 100,
        description: '0 = Fast releases, 100 = Quality focus',
      },
      {
        id: 'productStrategy',
        label: 'Product Strategy',
        type: 'select',
        options: [
          { value: 'leader', label: 'Innovation Leader' },
          { value: 'fast-follower', label: 'Fast Follower' },
          { value: 'platform', label: 'Platform Play' },
          { value: 'niche', label: 'Niche Specialist' },
        ],
        description: 'Overall product market approach',
      },
    ],
  };

  const currentDecisions = roleDecisions[role] || [];

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center">
          {(() => {
            const RoleIcon = ROLES[role].icon;
            return <RoleIcon className="w-6 h-6 text-blue-400" />;
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
                        ? 'border-blue-500 bg-blue-500/20 text-blue-300'
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
                  value={decisions[decision.id] as number || (decision.min !== undefined ? Math.max(0, decision.min) : 0)}
                  onChange={(e) => setDecisions({ ...decisions, [decision.id]: parseInt(e.target.value) })}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>{decision.min}{decision.min !== undefined && decision.min < 0 ? '' : '%'}</span>
                  <span className="font-medium text-blue-400">
                    {decisions[decision.id] !== undefined ? decisions[decision.id] : (decision.min !== undefined ? Math.max(0, decision.min) : 0)}%
                  </span>
                  <span>{decision.max}%</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => onSubmit(decisions)}
        className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-cyan-500 transition-all flex items-center justify-center gap-2"
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

export default function MarketDynamicsPage() {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const [selectedRole, setSelectedRole] = useState<Role>('strategy-lead');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Simulate price war starting
    setTimeout(() => {
      setGameState((prev) => ({
        ...prev,
        priceWarActive: true,
        priceWarIntensity: 65,
      }));
    }, 2000);
  }, []);

  if (!mounted) return null;

  const handleDecisionSubmit = (decisions: Record<string, string | number>) => {
    console.log('Submitted decisions:', decisions);
  };

  const leaderCompetitor = [...gameState.competitors].sort((a, b) => b.marketShare - a.marketShare)[0];

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
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-white">Market Dynamics</h1>
                  <p className="text-xs text-slate-400">Competing in Motion</p>
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

              <div className="px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  <span className="text-sm font-medium text-blue-300">{gameState.teamName}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Price War Alert */}
        {gameState.priceWarActive && (
          <div className="mb-8">
            <PriceWarIndicator active={gameState.priceWarActive} intensity={gameState.priceWarIntensity} />
          </div>
        )}

        {/* KPI Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {[
            { label: 'Market Share', value: `${gameState.marketShare}%`, icon: PieChart, trend: 'up' },
            { label: 'Revenue', value: `$${gameState.revenue}M`, icon: DollarSign, trend: 'up' },
            { label: 'Gross Margin', value: `${gameState.grossMargin}%`, icon: Percent, trend: 'down' },
            { label: 'Units Sold', value: `${(gameState.unitsSold / 1000).toFixed(1)}K`, icon: ShoppingCart, trend: 'up' },
            { label: 'NPS', value: gameState.nps.toString(), icon: Heart, trend: 'neutral' },
            { label: 'Churn', value: `${gameState.churnRate}%`, icon: TrendingDown, trend: 'down' },
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
                        ? 'bg-blue-600 text-white'
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

            {/* Segment Analysis */}
            <SegmentHeatmap segments={gameState.segments} />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Market Share */}
            <MarketShareChart state={gameState} />

            {/* Brand Equity */}
            <BrandEquityMeter value={gameState.brandEquity} />

            {/* Competitors */}
            <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">Competitors</h3>
                <Eye className="w-5 h-5 text-slate-500" />
              </div>
              <div className="space-y-4">
                {gameState.competitors.map((comp) => (
                  <CompetitorCard
                    key={comp.id}
                    competitor={comp}
                    isLeader={comp.id === leaderCompetitor.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
