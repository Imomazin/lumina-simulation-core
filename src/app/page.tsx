'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Users,
  Zap,
  Target,
  TrendingUp,
  Building2,
  Scale,
  Lightbulb,
  Settings,
  Trophy,
  Globe,
  LineChart,
  Shield,
  Briefcase,
  GraduationCap,
  Play,
  ChevronRight,
  Star,
  Award,
  Layers,
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 grid-pattern pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-glow pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-glow">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-lg tracking-tight">Lumina</span>
                <span className="text-primary-400 text-lg">Sim</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
                Features
              </Link>
              <Link href="#simulations" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
                Simulations
              </Link>
              <Link href="#how-it-works" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
                How It Works
              </Link>
              <Link href="/facilitator" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
                Facilitators
              </Link>
            </div>

            <div className="flex items-center gap-3">
              <Link href="/simulation" className="btn-primary inline-flex items-center gap-2">
                Launch Simulation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light mb-6">
                <Award className="w-4 h-4 text-primary-400" />
                <span className="text-sm text-slate-300">Award-Winning Business Simulation Platform</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
                Master Business Strategy Through{' '}
                <span className="gradient-text">Experiential Learning</span>
              </h1>

              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                Enterprise-grade business simulations where teams compete in realistic market environments.
                Make strategic decisions, respond to market events, and see the consequences unfold in real-time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="/simulation" className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-8 py-4">
                  <Play className="w-5 h-5" />
                  Start Demo Simulation
                </Link>
                <Link href="/facilitator" className="btn-secondary inline-flex items-center justify-center gap-2 text-lg px-8 py-4">
                  Facilitator Console
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '10K+', label: 'Students Trained' },
                  { value: '50+', label: 'Universities' },
                  { value: '8', label: 'Rounds Per Sim' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hero Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <HeroVisualization />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted By Strip */}
      <section className="py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-sm text-slate-500 mb-8 uppercase tracking-wider">
            Trusted by Leading Business Schools and Corporations
          </p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50">
            {['Harvard', 'Stanford', 'MIT', 'Wharton', 'INSEAD', 'London Business School'].map((name) => (
              <div key={name} className="text-slate-400 font-semibold text-lg">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simulation Catalog */}
      <section id="simulations" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Business Simulation Catalog</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Choose from our library of enterprise simulations, each designed for specific learning outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {simulations.map((sim, index) => (
              <motion.div
                key={sim.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-enterprise-hover group cursor-pointer"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sim.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <sim.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-white">{sim.name}</h3>
                  {sim.featured && (
                    <span className="px-2 py-0.5 rounded-full bg-primary-500/20 text-primary-400 text-xs font-medium">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-slate-400 mb-4">{sim.description}</p>
                <div className="flex flex-wrap gap-2">
                  {sim.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Enterprise-Grade Features</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Built for serious business education with sophisticated algorithms and real-world dynamics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-enterprise group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Roles Section */}
      <section className="py-24 px-4 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Executive Team Roles</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Each team member takes on a C-suite role with unique responsibilities and decision authority
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="stat-card group"
              >
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${role.color} flex items-center justify-center mb-4`}>
                  <role.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-1">{role.title}</h3>
                <p className="text-xs text-slate-500 mb-3">{role.subtitle}</p>
                <ul className="space-y-1">
                  {role.decisions.map((d) => (
                    <li key={d} className="text-xs text-slate-400 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary-500" />
                      {d}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How The Simulation Works</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Each round represents one year of operations. Compete over 8 rounds.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="card-enterprise h-full">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center font-bold text-white text-xl mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary-500/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Balanced Scorecard Preview */}
      <section className="py-24 px-4 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Balanced Scorecard Ranking</h2>
              <p className="text-xl text-slate-400 mb-8">
                Teams are ranked on a multi-dimensional Balanced Scorecard that measures:
              </p>
              <div className="space-y-4">
                {scorecard.map((item) => (
                  <div key={item.name} className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${item.color}`} />
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <span className="text-white font-medium">{item.name}</span>
                        <span className="text-slate-400">{item.weight}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${item.color}`}
                          style={{ width: `${item.weight}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-enterprise">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Live Leaderboard</h3>
                <Trophy className="w-5 h-5 text-warning-400" />
              </div>
              <div className="space-y-3">
                {leaderboard.map((team, index) => (
                  <div
                    key={team.name}
                    className={`flex items-center gap-4 p-3 rounded-xl ${
                      index === 0 ? 'bg-warning-500/10 border border-warning-500/20' : 'bg-white/5'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                      index === 0 ? 'bg-warning-500 text-white' :
                      index === 1 ? 'bg-slate-400 text-white' :
                      index === 2 ? 'bg-amber-700 text-white' :
                      'bg-white/10 text-slate-400'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">{team.name}</div>
                      <div className="text-xs text-slate-400">Share Price: ${team.sharePrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-white">{team.score}</div>
                      <div className={`text-xs ${team.change >= 0 ? 'text-success-400' : 'text-danger-400'}`}>
                        {team.change >= 0 ? '+' : ''}{team.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-enterprise relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-glow opacity-50" />
            <div className="relative z-10">
              <Trophy className="w-16 h-16 text-warning-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Lead Your Company?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Experience the most sophisticated business simulation platform.
                Make decisions that matter. Compete to win.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/simulation" className="btn-primary inline-flex items-center justify-center gap-2 text-lg px-10 py-4">
                  <Play className="w-5 h-5" />
                  Launch Demo
                </Link>
                <Link href="/facilitator" className="btn-secondary inline-flex items-center justify-center gap-2 text-lg px-10 py-4">
                  <GraduationCap className="w-5 h-5" />
                  Facilitator Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <Layers className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white">LuminaSim</span>
            </div>
            <p className="text-sm text-slate-500">
              Powered by Ambidexters Inc. &copy; {new Date().getFullYear()}
            </p>
            <div className="flex gap-6">
              <Link href="/simulation" className="text-sm text-slate-400 hover:text-white transition-colors">
                Simulation
              </Link>
              <Link href="/facilitator" className="text-sm text-slate-400 hover:text-white transition-colors">
                Facilitator
              </Link>
              <Link href="/debrief" className="text-sm text-slate-400 hover:text-white transition-colors">
                Debrief
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Hero Visualization Component
function HeroVisualization() {
  return (
    <div className="relative">
      {/* Glow Effects */}
      <div className="absolute -inset-4 bg-gradient-glow opacity-50 blur-3xl" />

      {/* Main Card */}
      <div className="relative card-enterprise overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-danger-500" />
            <div className="w-3 h-3 rounded-full bg-warning-500" />
            <div className="w-3 h-3 rounded-full bg-success-500" />
          </div>
          <div className="text-xs text-slate-500">LuminaSim v2.0</div>
        </div>

        {/* Dashboard Preview */}
        <div className="space-y-4">
          {/* KPI Row */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: 'Revenue', value: '$24.5M', change: '+12%', color: 'text-success-400' },
              { label: 'Market Share', value: '34%', change: '+5%', color: 'text-success-400' },
              { label: 'Stock Price', value: '$127.50', change: '+8.3%', color: 'text-success-400' },
              { label: 'Score', value: '428', change: '#2', color: 'text-warning-400' },
            ].map((kpi) => (
              <div key={kpi.label} className="stat-card">
                <div className="text-xs text-slate-500 mb-1">{kpi.label}</div>
                <div className="text-lg font-bold text-white">{kpi.value}</div>
                <div className={`text-xs ${kpi.color}`}>{kpi.change}</div>
              </div>
            ))}
          </div>

          {/* Chart Placeholder */}
          <div className="h-32 bg-white/5 rounded-xl flex items-end justify-center gap-2 p-4">
            {[40, 55, 45, 60, 52, 68, 75, 70, 85, 82, 90, 95].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="w-6 bg-gradient-to-t from-primary-500 to-accent-500 rounded-t"
              />
            ))}
          </div>

          {/* Team Status */}
          <div className="grid grid-cols-2 gap-3">
            <div className="stat-card">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-primary-400" />
                <span className="text-sm text-white">Team Alpha</span>
              </div>
              <div className="flex gap-2">
                {['CEO', 'CFO', 'CMO', 'COO'].map((role) => (
                  <div key={role} className="px-2 py-1 bg-success-500/20 text-success-400 text-xs rounded">
                    {role}
                  </div>
                ))}
              </div>
            </div>
            <div className="stat-card">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-accent-400" />
                <span className="text-sm text-white">Round 5 of 8</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[62.5%] bg-gradient-to-r from-primary-500 to-accent-500 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 opacity-20 blur-xl"
        />
      </div>
    </div>
  );
}

// Data
const simulations = [
  {
    name: 'Lumina Assist',
    description: 'Lead an AI-powered enterprise assistant company through market expansion, regulatory challenges, and competitive pressures.',
    icon: Lightbulb,
    gradient: 'from-primary-500 to-accent-500',
    featured: true,
    tags: ['AI/Tech', 'Strategy', 'Regulation'],
  },
  {
    name: 'Global Manufacturing',
    description: 'Manage a multinational manufacturing company with complex supply chains and global market dynamics.',
    icon: Building2,
    gradient: 'from-success-500 to-emerald-600',
    featured: false,
    tags: ['Manufacturing', 'Supply Chain', 'Operations'],
  },
  {
    name: 'Financial Services',
    description: 'Navigate the banking and financial services industry with risk management and regulatory compliance.',
    icon: LineChart,
    gradient: 'from-warning-500 to-amber-600',
    featured: false,
    tags: ['Finance', 'Risk', 'Compliance'],
  },
  {
    name: 'Healthcare Systems',
    description: 'Lead a healthcare organization balancing patient care, operational efficiency, and financial sustainability.',
    icon: Shield,
    gradient: 'from-danger-500 to-rose-600',
    featured: false,
    tags: ['Healthcare', 'Operations', 'Ethics'],
  },
  {
    name: 'Retail & E-Commerce',
    description: 'Compete in the omnichannel retail space with digital transformation and customer experience focus.',
    icon: Globe,
    gradient: 'from-purple-500 to-indigo-600',
    featured: false,
    tags: ['Retail', 'Digital', 'Marketing'],
  },
  {
    name: 'Startup Accelerator',
    description: 'Build and scale a startup from seed to Series C with funding rounds, pivots, and growth challenges.',
    icon: Zap,
    gradient: 'from-cyan-500 to-blue-600',
    featured: false,
    tags: ['Startup', 'Fundraising', 'Growth'],
  },
];

const features = [
  {
    icon: Zap,
    title: 'Real-Time Competition',
    description: 'Teams compete simultaneously in the same market. Your decisions affect others and vice versa.',
  },
  {
    icon: LineChart,
    title: 'Dynamic Market Events',
    description: 'Respond to market shocks, regulatory changes, competitor moves, and economic shifts.',
  },
  {
    icon: Trophy,
    title: 'Balanced Scorecard Ranking',
    description: 'Multi-dimensional scoring on financial performance, growth, trust, resilience, and execution.',
  },
  {
    icon: Users,
    title: 'C-Suite Role Assignment',
    description: 'Each team member takes a specific executive role with unique decision authority.',
  },
  {
    icon: Settings,
    title: 'Facilitator Control Panel',
    description: 'Instructors can inject events, pause rounds, compare teams, and export analytics.',
  },
  {
    icon: Target,
    title: 'Deterministic Replay',
    description: 'Seeded RNG enables identical conditions for fair competition and instructor replay.',
  },
];

const roles = [
  {
    title: 'Chief Executive Officer',
    subtitle: 'CEO',
    icon: Briefcase,
    color: 'from-primary-500 to-primary-600',
    decisions: ['Strategic Direction', 'Risk Appetite', 'Capital Allocation', 'Crisis Response'],
  },
  {
    title: 'Chief Financial Officer',
    subtitle: 'CFO',
    icon: LineChart,
    color: 'from-success-500 to-success-600',
    decisions: ['Budget Planning', 'Investment Strategy', 'Cost Management', 'Financial Reporting'],
  },
  {
    title: 'Chief Marketing Officer',
    subtitle: 'CMO',
    icon: TrendingUp,
    color: 'from-accent-500 to-accent-600',
    decisions: ['Campaign Spend', 'Pricing Strategy', 'Brand Positioning', 'Channel Mix'],
  },
  {
    title: 'Chief Operating Officer',
    subtitle: 'COO',
    icon: Settings,
    color: 'from-warning-500 to-warning-600',
    decisions: ['Capacity Planning', 'Supply Chain', 'Quality Control', 'Process Optimization'],
  },
  {
    title: 'Chief Technology Officer',
    subtitle: 'CTO',
    icon: Lightbulb,
    color: 'from-purple-500 to-purple-600',
    decisions: ['R&D Roadmap', 'Tech Stack', 'Innovation Budget', 'Security & Privacy'],
  },
  {
    title: 'Chief People Officer',
    subtitle: 'CPO',
    icon: Users,
    color: 'from-pink-500 to-pink-600',
    decisions: ['Hiring Strategy', 'Compensation', 'Culture Investment', 'Talent Development'],
  },
  {
    title: 'Chief Legal Officer',
    subtitle: 'CLO',
    icon: Scale,
    color: 'from-slate-500 to-slate-600',
    decisions: ['Compliance Spend', 'Policy Framework', 'Audit Readiness', 'Data Governance'],
  },
  {
    title: 'VP of Sales',
    subtitle: 'VP Sales',
    icon: BarChart3,
    color: 'from-orange-500 to-orange-600',
    decisions: ['Sales Targets', 'Territory Strategy', 'Discount Policy', 'Partner Programs'],
  },
];

const steps = [
  {
    title: 'Analyze Situation',
    description: 'Review market conditions, financial position, competitive landscape, and team performance from the previous round.',
  },
  {
    title: 'Strategic Planning',
    description: 'Coordinate with your team. Each role makes decisions within their domain while aligning on overall strategy.',
  },
  {
    title: 'Submit Decisions',
    description: 'Lock in your choices before the deadline. Decisions are final once submitted. Trade-offs are real.',
  },
  {
    title: 'Review Outcomes',
    description: 'Watch the simulation resolve. See how your decisions played out against competitors and market events.',
  },
];

const scorecard = [
  { name: 'Financial Health', weight: 25, color: 'bg-success-500' },
  { name: 'Market Growth', weight: 25, color: 'bg-accent-500' },
  { name: 'Brand Trust', weight: 20, color: 'bg-primary-500' },
  { name: 'Operational Resilience', weight: 15, color: 'bg-warning-500' },
  { name: 'Execution Quality', weight: 15, color: 'bg-purple-500' },
];

const leaderboard = [
  { name: 'Team Alpha', score: 428, sharePrice: 127.50, change: 15 },
  { name: 'Team Omega', score: 412, sharePrice: 118.25, change: 8 },
  { name: 'Team Delta', score: 395, sharePrice: 105.75, change: -3 },
  { name: 'Team Sigma', score: 378, sharePrice: 98.50, change: 12 },
];
