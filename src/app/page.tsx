'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Crown,
  TrendingUp,
  DollarSign,
  Cog,
  Target,
  Lightbulb,
  ChevronRight,
  Users,
  Clock,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Award,
  BookOpen,
  Play,
  Briefcase,
  Building2,
  GraduationCap,
  Star,
  AlertTriangle,
  Activity,
  X,
} from 'lucide-react';

// =============================================================================
// SIMULATION CATALOG DATA
// =============================================================================

const SIMULATIONS = [
  {
    id: 'strategic-leadership',
    title: 'Strategic Leadership',
    subtitle: 'Governing Under Uncertainty',
    icon: Crown,
    color: 'from-violet-600 to-purple-700',
    accentColor: 'violet',
    difficulty: 'Expert',
    duration: '3-4 hours',
    players: '3-5 players',
    rounds: 8,
    coreFantasy: 'You are the executive leadership team of a complex enterprise operating under extreme uncertainty, conflicting stakeholder demands, and incomplete information.',
    narrativeWorld: [
      'Publicly listed multinational corporation',
      'Board pressure and investor activism',
      'Media scrutiny and public perception',
      'Internal politics and talent dynamics',
    ],
    roles: [
      { name: 'CEO / Strategy Lead', desc: 'Sets corporate direction, manages board relations' },
      { name: 'Chief Financial Officer', desc: 'Controls capital allocation and investor relations' },
      { name: 'Chief Operating Officer', desc: 'Oversees execution and cross-functional alignment' },
      { name: 'Chief Legal & Compliance', desc: 'Manages regulatory risk and governance' },
      { name: 'Chief People Officer', desc: 'Owns talent strategy and organizational health' },
    ],
    dilemmas: [
      'The board demands 20% cost cuts, but your top talent is already at flight risk',
      'A competitor\'s PR crisis presents an opportunity, but aggressive moves may backfire',
      'Activist investors push for a strategic pivot that contradicts your 5-year plan',
    ],
    learningOutcomes: [
      'Strategic coherence under ambiguity',
      'Leadership and governance tradeoffs',
      'Stakeholder management at executive level',
      'Crisis decision-making',
    ],
    uniqueMechanics: [
      'Board confidence score (can fire the CEO)',
      'Internal alignment index (political friction)',
      'Reputation memory (early mistakes haunt later)',
      'Long-term vs short-term tension scoring',
    ],
    targetAudience: ['Senior executives', 'MBA capstone', 'Board development', 'High-potential programs'],
    tags: ['Leadership', 'Strategy', 'Governance', 'Crisis'],
  },
  {
    id: 'market-dynamics',
    title: 'Market Dynamics',
    subtitle: 'Competing in Motion',
    icon: TrendingUp,
    color: 'from-blue-600 to-cyan-600',
    accentColor: 'blue',
    difficulty: 'Advanced',
    duration: '2-3 hours',
    players: '2-6 teams',
    rounds: 10,
    coreFantasy: 'You are competing firms in a volatile market where customer behavior, pricing, brand perception, and competitor moves constantly shift.',
    narrativeWorld: [
      'Fast-moving competitive market',
      'Aggressive competitors with varying strategies',
      'Shifting consumer preferences',
      'Platform and ecosystem effects',
    ],
    roles: [
      { name: 'Marketing Lead', desc: 'Owns brand positioning and campaigns' },
      { name: 'Sales Lead', desc: 'Drives revenue and manages channels' },
      { name: 'Strategy Lead', desc: 'Sets competitive direction and market entry' },
      { name: 'Product Lead', desc: 'Manages roadmap and market fit' },
    ],
    dilemmas: [
      'A competitor slashes prices 30% — match them and destroy margins or hold and lose share?',
      'Your brand equity is eroding but marketing wants to cut spend to hit profit targets',
      'A new segment is emerging but entering cannibalizes your core business',
    ],
    learningOutcomes: [
      'Competitive strategy formulation',
      'Market sensing and response',
      'Pricing discipline and dynamics',
      'Cross-functional go-to-market coordination',
    ],
    uniqueMechanics: [
      'Live competitor dashboards (multi-team)',
      'Demand elasticity that evolves over time',
      'Brand equity as slow-moving stock',
      'Price war dynamics with destructive spirals',
    ],
    targetAudience: ['Marketing executives', 'Strategy professionals', 'MBA students', 'Competitive intelligence'],
    tags: ['Competition', 'Marketing', 'Pricing', 'Strategy'],
  },
  {
    id: 'financial-acumen',
    title: 'Financial Acumen',
    subtitle: 'Capital, Risk, and Survival',
    icon: DollarSign,
    color: 'from-emerald-600 to-teal-600',
    accentColor: 'emerald',
    difficulty: 'Expert',
    duration: '3-4 hours',
    players: '3-4 players',
    rounds: 12,
    coreFantasy: 'You are running the financial backbone of a company where liquidity, investment timing, and risk decisions determine survival.',
    narrativeWorld: [
      'Capital-intensive business environment',
      'External financing pressures',
      'Economic shocks and market volatility',
      'Investor scrutiny and rating pressure',
    ],
    roles: [
      { name: 'Chief Financial Officer', desc: 'Owns financial strategy and capital structure' },
      { name: 'Finance Director', desc: 'Manages working capital and treasury' },
      { name: 'Strategy Lead', desc: 'Drives investment decisions and M&A' },
      { name: 'Chief Risk Officer', desc: 'Manages financial risk and hedging' },
    ],
    dilemmas: [
      'Cash runway is 6 months, but raising equity dilutes 40% — when do you pull the trigger?',
      'Two projects compete for limited capital: high-risk/high-return vs safe/incremental',
      'Credit rating is slipping — aggressive cost cuts hurt growth, inaction risks downgrade',
    ],
    learningOutcomes: [
      'Financial decision-making under uncertainty',
      'Capital structure optimization',
      'Risk-return tradeoff management',
      'Cash flow management and timing',
    ],
    uniqueMechanics: [
      'Cash flow timing (not just totals)',
      'Probability-weighted scenario trees',
      'Credit rating dynamics with real consequences',
      'Bankruptcy risk if mismanaged',
    ],
    targetAudience: ['Finance professionals', 'CFO development', 'Investment analysts', 'MBA finance'],
    tags: ['Finance', 'Risk', 'Capital Markets', 'Treasury'],
  },
  {
    id: 'operations-excellence',
    title: 'Operations Excellence',
    subtitle: 'Flow, Capacity, and Fragility',
    icon: Cog,
    color: 'from-orange-500 to-amber-600',
    accentColor: 'orange',
    difficulty: 'Advanced',
    duration: '2-3 hours',
    players: '3-4 players',
    rounds: 8,
    coreFantasy: 'You are running an operational system where small inefficiencies cascade into major failures.',
    narrativeWorld: [
      'Multi-node supply chain network',
      'Capacity constraints and bottlenecks',
      'Quality risk and defect propagation',
      'Supplier dependency and concentration',
    ],
    roles: [
      { name: 'Operations Lead', desc: 'Owns production capacity and efficiency' },
      { name: 'Supply Chain Manager', desc: 'Manages suppliers, logistics, inventory' },
      { name: 'Quality Director', desc: 'Ensures product quality and compliance' },
      { name: 'Finance Liaison', desc: 'Manages operational budgets and costs' },
    ],
    dilemmas: [
      'A key supplier is financially distressed — sole-source risk vs switching costs',
      'Quality defects are rising but fixing them slows delivery by 2 weeks',
      'Demand surge incoming — invest in capacity now or risk bottlenecks?',
    ],
    learningOutcomes: [
      'Systems thinking in operations',
      'Bottleneck identification and management',
      'Quality-cost-speed tradeoffs',
      'Supply chain resilience building',
    ],
    uniqueMechanics: [
      'Bottleneck dynamics with cascade effects',
      'Bullwhip effect amplification',
      'Quality incidents with delayed detection',
      'Failure propagation visualization',
    ],
    targetAudience: ['Operations executives', 'Supply chain pros', 'Manufacturing leaders', 'MBA operations'],
    tags: ['Operations', 'Supply Chain', 'Quality', 'Systems'],
  },
  {
    id: 'sales-mastery',
    title: 'Sales Mastery',
    subtitle: 'Growth Without Erosion',
    icon: Target,
    color: 'from-rose-500 to-pink-600',
    accentColor: 'rose',
    difficulty: 'Advanced',
    duration: '2-3 hours',
    players: '3-5 players',
    rounds: 8,
    coreFantasy: 'You are scaling revenue while trying not to destroy margin, culture, or customer trust.',
    narrativeWorld: [
      'High-growth sales organization',
      'Territory battles and competition',
      'Channel conflict dynamics',
      'Customer churn and retention pressure',
    ],
    roles: [
      { name: 'Head of Sales', desc: 'Owns revenue targets and sales strategy' },
      { name: 'Regional Manager - North', desc: 'Drives performance in northern territories' },
      { name: 'Regional Manager - South', desc: 'Drives performance in southern territories' },
      { name: 'Marketing Liaison', desc: 'Aligns sales and marketing, manages leads' },
      { name: 'Finance Liaison', desc: 'Manages pricing authority and deal desk' },
    ],
    dilemmas: [
      'Hit quarterly number with aggressive discounts or miss and preserve margin?',
      'Top performer is toxic to the team — fire them and risk the pipeline?',
      'Channel partners complain about direct competition — who do you favor?',
    ],
    learningOutcomes: [
      'Sustainable revenue growth strategy',
      'Incentive design and unintended consequences',
      'Territory and channel optimization',
      'Customer lifetime value management',
    ],
    uniqueMechanics: [
      'Incentive gaming detection',
      'Customer LTV decay from bad practices',
      'Sales burnout and attrition risk',
      'Short-term wins vs long-term erosion',
    ],
    targetAudience: ['Sales leaders', 'Revenue operations', 'Go-to-market executives', 'MBA sales'],
    tags: ['Sales', 'Revenue', 'Incentives', 'Customer Success'],
  },
  {
    id: 'innovation-lab',
    title: 'Innovation Lab',
    subtitle: 'Betting on the Future',
    icon: Lightbulb,
    color: 'from-yellow-500 to-orange-500',
    accentColor: 'yellow',
    difficulty: 'Advanced',
    duration: '2-3 hours',
    players: '3-4 players',
    rounds: 10,
    coreFantasy: 'You are managing innovation under uncertainty, balancing exploration and exploitation.',
    narrativeWorld: [
      'Technology uncertainty and disruption',
      'Market adoption and timing risk',
      'Internal resistance and politics',
      'Portfolio allocation tradeoffs',
    ],
    roles: [
      { name: 'Head of R&D', desc: 'Owns innovation portfolio and technology roadmap' },
      { name: 'Product Strategy Lead', desc: 'Bridges innovation and market fit' },
      { name: 'Finance Liaison', desc: 'Manages R&D budget and ROI tracking' },
      { name: 'Operations Liaison', desc: 'Ensures manufacturability and readiness' },
    ],
    dilemmas: [
      'Promising project is 2 years from market — kill it for cash or double down?',
      'Breakthrough tech cannibalizes your cash cow — accelerate or delay?',
      'Technical debt is crushing velocity but cleaning it delays all launches',
    ],
    learningOutcomes: [
      'Innovation portfolio management',
      'Stage-gate and kill decisions',
      'Option value thinking',
      'Exploration vs exploitation balance',
    ],
    uniqueMechanics: [
      'Innovation option value calculations',
      'Failure learning curves',
      'Cannibalization effects',
      'Technical debt accumulation',
    ],
    targetAudience: ['R&D executives', 'Innovation leaders', 'Product strategy', 'MBA innovation'],
    tags: ['Innovation', 'R&D', 'Product', 'Portfolio'],
  },
];

const TESTIMONIALS = [
  {
    quote: "The most realistic strategic simulation I've experienced in 20 years of executive education.",
    author: "VP Strategy, Fortune 500 Tech Company",
    context: "Strategic Leadership simulation",
  },
  {
    quote: "Our entire leadership team finally understood the consequences of short-term thinking.",
    author: "CEO, Healthcare Services",
    context: "Financial Acumen simulation",
  },
  {
    quote: "Better than any case study. The pressure felt real.",
    author: "MBA Student, Top-10 Business School",
    context: "Market Dynamics simulation",
  },
];

// =============================================================================
// COMPONENTS
// =============================================================================

function SimulationCard({ sim, index, onSelect }: { sim: typeof SIMULATIONS[0]; index: number; onSelect: () => void }) {
  const Icon = sim.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative"
    >
      {/* Card */}
      <div className="relative bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden transition-all duration-500 group-hover:shadow-2xl group-hover:border-slate-300">
        {/* Gradient header */}
        <div className={`h-32 bg-gradient-to-br ${sim.color} relative overflow-hidden`}>
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-black/10 rounded-full blur-2xl transform translate-x-1/2 translate-y-1/2" />
          </div>

          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="absolute top-6 left-6 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30"
          >
            <Icon className="w-7 h-7 text-white" />
          </motion.div>

          {/* Difficulty badge */}
          <div className="absolute top-6 right-6">
            <span className={`px-3 py-1 text-xs font-bold rounded-full ${
              sim.difficulty === 'Expert'
                ? 'bg-red-500/90 text-white'
                : 'bg-amber-500/90 text-white'
            }`}>
              {sim.difficulty}
            </span>
          </div>

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
            <h3 className="text-xl font-bold text-white">{sim.title}</h3>
            <p className="text-sm text-white/80">{sim.subtitle}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Meta info */}
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {sim.duration}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {sim.players}
            </span>
            <span className="flex items-center gap-1">
              <BarChart3 className="w-4 h-4" />
              {sim.rounds} rounds
            </span>
          </div>

          {/* Description */}
          <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {sim.coreFantasy}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {sim.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-lg">
                {tag}
              </span>
            ))}
          </div>

          {/* Action */}
          <button
            onClick={onSelect}
            className={`w-full py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r ${sim.color} flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}
          >
            View Simulation
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function SimulationModal({ sim, onClose }: { sim: typeof SIMULATIONS[0]; onClose: () => void }) {
  const Icon = sim.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', damping: 25 }}
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`relative h-48 bg-gradient-to-br ${sim.color} overflow-hidden`}>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-black/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">{sim.title}</h2>
                <p className="text-lg text-white/80">{sim.subtitle}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-12rem)]">
          {/* Meta badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`px-3 py-1.5 text-sm font-bold rounded-full ${
              sim.difficulty === 'Expert'
                ? 'bg-red-100 text-red-700'
                : 'bg-amber-100 text-amber-700'
            }`}>
              {sim.difficulty} Level
            </span>
            <span className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-full flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {sim.duration}
            </span>
            <span className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-full flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              {sim.players}
            </span>
            <span className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-full flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4" />
              {sim.rounds} Rounds
            </span>
          </div>

          {/* Core Fantasy */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3">The Challenge</h3>
            <p className="text-slate-600 leading-relaxed text-lg">{sim.coreFantasy}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Narrative World */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-slate-400" />
                Narrative World
              </h3>
              <ul className="space-y-2">
                {sim.narrativeWorld.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Roles */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-slate-400" />
                Player Roles
              </h3>
              <ul className="space-y-2">
                {sim.roles.map((role, i) => (
                  <li key={i} className="text-sm">
                    <span className="font-semibold text-slate-800">{role.name}</span>
                    <span className="text-slate-500"> — {role.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Dilemmas */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              Example Dilemmas
            </h3>
            <div className="space-y-3">
              {sim.dilemmas.map((dilemma, i) => (
                <div key={i} className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-sm">
                  &ldquo;{dilemma}&rdquo;
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Learning Outcomes */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-slate-400" />
                Learning Outcomes
              </h3>
              <ul className="space-y-2">
                {sim.learningOutcomes.map((outcome, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-600">
                    <Star className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            {/* Unique Mechanics */}
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-slate-400" />
                Unique Mechanics
              </h3>
              <ul className="space-y-2">
                {sim.uniqueMechanics.map((mechanic, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-600">
                    <Activity className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    {mechanic}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Target Audience */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-slate-400" />
              Designed For
            </h3>
            <div className="flex flex-wrap gap-2">
              {sim.targetAudience.map((audience, i) => (
                <span key={i} className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                  {audience}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-4">
            <Link
              href="/simulation"
              className={`flex-1 py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r ${sim.color} flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}
            >
              <Play className="w-5 h-5" />
              Launch Simulation
            </Link>
            <button
              onClick={onClose}
              className="px-6 py-4 rounded-xl font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// =============================================================================
// MAIN PAGE
// =============================================================================

export default function CatalogPage() {
  const [selectedSim, setSelectedSim] = useState<typeof SIMULATIONS[0] | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full text-sm font-medium text-slate-600 shadow-sm">
              <Building2 className="w-4 h-4" />
              Enterprise Simulation Suite
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-slate-900 mb-6"
          >
            Business Simulation
            <span className="block bg-gradient-to-r from-violet-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Catalog
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 text-center max-w-3xl mx-auto mb-8"
          >
            Six flagship simulations for executive education, MBA programs, and leadership development.
            <span className="block mt-2 text-lg font-medium text-slate-500">
              This is not training. This is rehearsal for real leadership.
            </span>
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {[
              { label: 'Simulations', value: '6' },
              { label: 'Unique Roles', value: '27' },
              { label: 'Decision Points', value: '500+' },
              { label: 'Learning Hours', value: '20+' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Benchmark logos placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-sm text-slate-400 mb-4"
          >
            Benchmarked against industry standards
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-6 text-slate-300 text-xs"
          >
            {['Capsim', 'Harvard Business Publishing', 'Marketplace', 'McKinsey War-Gaming'].map((name) => (
              <span key={name} className="px-3 py-1.5 bg-slate-100 rounded-lg text-slate-500 font-medium">
                {name}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {SIMULATIONS.map((sim, index) => (
            <SimulationCard
              key={sim.id}
              sim={sim}
              index={index}
              onSelect={() => setSelectedSim(sim)}
            />
          ))}
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Built for serious learning, not gamification theater
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Consequence Realism',
                desc: 'Every decision has cascading effects. Early mistakes haunt later rounds.',
              },
              {
                icon: Users,
                title: 'Role-Based Tension',
                desc: 'Players face conflicting objectives. Coordination is earned, not given.',
              },
              {
                icon: BarChart3,
                title: 'Financial Rigor',
                desc: 'Real numbers, real models. No simplified math or fake metrics.',
              },
              {
                icon: BookOpen,
                title: 'Narrative Depth',
                desc: 'Story-led scenarios that mirror real corporate challenges.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700"
              >
                <feature.icon className="w-10 h-10 text-violet-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              From the Field
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-slate-200 shadow-lg"
              >
                <div className="text-violet-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 inline-block fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-lg mb-6 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.context}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-violet-600 via-blue-600 to-emerald-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Run the Company?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Experience decision-making at the highest level. Feel the weight of leadership.
              Learn what it takes to govern under uncertainty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/facilitator"
                className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
              >
                <Award className="w-5 h-5" />
                Facilitator Console
              </Link>
              <Link
                href="/simulation"
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/30 hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Try Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold text-white mb-1">Lumina Simulation</div>
              <div className="text-slate-400 text-sm">Run the company. Feel the consequences.</div>
            </div>
            <div className="flex gap-6 text-sm text-slate-400">
              <Link href="/simulation" className="hover:text-white transition-colors">Simulations</Link>
              <Link href="/facilitator" className="hover:text-white transition-colors">Facilitator</Link>
              <Link href="/debrief" className="hover:text-white transition-colors">Debrief</Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Lumina Simulation Suite. Enterprise Learning Platform.
          </div>
        </div>
      </footer>

      {/* Modal */}
      <AnimatePresence>
        {selectedSim && (
          <SimulationModal sim={selectedSim} onClose={() => setSelectedSim(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
