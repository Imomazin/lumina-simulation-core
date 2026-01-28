'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Shield,
  Users,
  Zap,
  Target,
  TrendingUp,
  Building2,
  Scale,
  Lightbulb,
  Settings,
  FileText,
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-accent-600 to-accent-800 rounded-lg" />
              <span className="font-semibold text-navy-900 text-lg">Lumina</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-navy-600 hover:text-navy-900 text-sm font-medium transition-colors">
                Features
              </Link>
              <Link href="#how-it-works" className="text-navy-600 hover:text-navy-900 text-sm font-medium transition-colors">
                How It Works
              </Link>
              <Link href="#roles" className="text-navy-600 hover:text-navy-900 text-sm font-medium transition-colors">
                Roles
              </Link>
              <Link href="/facilitator" className="text-navy-600 hover:text-navy-900 text-sm font-medium transition-colors">
                Facilitators
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/simulation"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-900 text-white text-sm font-semibold rounded-lg hover:bg-navy-800 transition-colors"
              >
                Start Simulation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        <div className="absolute inset-0">
          <svg className="absolute right-0 top-0 h-full w-1/2 opacity-5" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-navy-900 leading-tight tracking-tight">
                The Most Advanced Business Simulation for Strategy, Leadership, and Decision-Making
              </h1>
              <p className="mt-6 text-xl text-navy-600 leading-relaxed">
                A live, cross-functional enterprise simulation where strategy, finance, risk, and execution collide under uncertainty. Built for MBA capstones and corporate strategy labs.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/simulation"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-600 text-white text-lg font-semibold rounded-xl hover:bg-accent-700 transition-all shadow-lg shadow-accent-600/20"
                >
                  Start a Simulation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/debrief"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-navy-900 text-lg font-semibold rounded-xl border-2 border-navy-200 hover:border-navy-300 transition-all"
                >
                  View Sample Debrief
                </Link>
              </div>
            </motion.div>

            {/* Hero Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <HeroVisualization />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-navy-500 mb-6 font-medium">
            BUILT FOR CROSS-FUNCTIONAL LEADERSHIP
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Strategy', 'Marketing', 'Sales', 'Operations', 'R&D', 'Legal', 'General Management'].map((role) => (
              <span
                key={role}
                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-navy-700 border border-gray-200 shadow-sm"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900">Why Lumina Is Different</h2>
            <p className="mt-4 text-xl text-navy-600 max-w-2xl mx-auto">
              No dominant strategy equilibrium. Real trade-offs. Consequences that compound.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">{feature.title}</h3>
                <p className="text-navy-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900">How the Simulation Works</h2>
            <p className="mt-4 text-xl text-navy-600 max-w-2xl mx-auto">
              Four stages, each quarter. Decisions compound over time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full">
                  <div className="w-10 h-10 bg-navy-900 text-white rounded-full flex items-center justify-center font-bold mb-6">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-3">{step.title}</h3>
                  <p className="text-navy-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy-900">Roles in the Simulation</h2>
            <p className="mt-4 text-xl text-navy-600 max-w-2xl mx-auto">
              Each role sees different information, makes different decisions, and owns different risks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {roles.map((role, index) => (
              <motion.div
                key={role.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center mb-4">
                  <role.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-navy-900 mb-2">{role.name}</h3>
                <p className="text-sm text-navy-600 mb-4">{role.focus}</p>
                <div className="space-y-2">
                  <p className="text-xs font-medium text-navy-500 uppercase tracking-wide">Key Decisions</p>
                  <ul className="text-xs text-navy-600 space-y-1">
                    {role.decisions.map((d) => (
                      <li key={d} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-accent-500" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Run the Company?
          </h2>
          <p className="text-xl text-navy-300 mb-10 max-w-2xl mx-auto">
            Experience the most advanced business simulation platform. Make decisions that matter.
          </p>
          <Link
            href="/simulation"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-navy-900 text-lg font-semibold rounded-xl hover:bg-gray-100 transition-colors shadow-xl"
          >
            Launch Demo Simulation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-accent-600 to-accent-800 rounded-md" />
              <span className="font-semibold text-navy-900">Lumina Simulation</span>
            </div>
            <p className="text-sm text-navy-500">
              Powered by Ambidexters Inc. &copy; {new Date().getFullYear()}
            </p>
            <div className="flex gap-6">
              <Link href="/simulation" className="text-sm text-navy-600 hover:text-navy-900">
                Simulation
              </Link>
              <Link href="/facilitator" className="text-sm text-navy-600 hover:text-navy-900">
                Facilitator
              </Link>
              <Link href="/debrief" className="text-sm text-navy-600 hover:text-navy-900">
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
  const nodes = [
    { id: 'strategy', label: 'Strategy', x: 50, y: 20 },
    { id: 'finance', label: 'Finance', x: 85, y: 40 },
    { id: 'market', label: 'Market', x: 75, y: 70 },
    { id: 'operations', label: 'Operations', x: 25, y: 70 },
    { id: 'risk', label: 'Risk', x: 15, y: 40 },
    { id: 'regulation', label: 'Regulation', x: 50, y: 85 },
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 p-8 shadow-xl">
      <svg viewBox="0 0 100 100" className="w-full h-80">
        {/* Connections */}
        <g stroke="#e2e8f0" strokeWidth="0.5" fill="none">
          <motion.path
            d="M50,20 L85,40 L75,70 L25,70 L15,40 Z"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
          <motion.line
            x1="50" y1="20" x2="50" y2="85"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <motion.line
            x1="15" y1="40" x2="85" y2="40"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          />
          <motion.line
            x1="25" y1="70" x2="75" y2="70"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.9 }}
          />
        </g>

        {/* Nodes */}
        {nodes.map((node, index) => (
          <motion.g
            key={node.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <circle
              cx={node.x}
              cy={node.y}
              r="8"
              fill="white"
              stroke="#3b82f6"
              strokeWidth="2"
            />
            <circle
              cx={node.x}
              cy={node.y}
              r="4"
              fill="#3b82f6"
            />
            <text
              x={node.x}
              y={node.y + 14}
              textAnchor="middle"
              className="fill-navy-700 text-[4px] font-medium"
            >
              {node.label}
            </text>
          </motion.g>
        ))}

        {/* Animated pulse */}
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="0.5"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0, 0.3, 0], scale: [0.8, 1.2, 1.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </svg>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-4 text-xs text-navy-500">
        <span className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-accent-500" />
          Systems
        </span>
        <span className="flex items-center gap-1">
          <div className="w-2 h-0.5 bg-gray-300" />
          Dependencies
        </span>
      </div>
    </div>
  );
}

// Data
const features = [
  {
    icon: Zap,
    title: 'Multi-Round Decisions',
    description: 'Navigate 8 quarters of strategic choices. Each decision compounds, creating path dependency and long-term consequences.',
  },
  {
    icon: TrendingUp,
    title: 'Competitive Market + Shocks',
    description: 'Face dynamic market conditions, competitor moves, regulatory changes, and stochastic events that test resilience.',
  },
  {
    icon: Users,
    title: 'Role-Based Dashboards',
    description: 'Each role sees different information and controls different levers. Coordination is essential but not automatic.',
  },
  {
    icon: Settings,
    title: 'Facilitator Console',
    description: 'Instructors control scenarios, inject events, compare teams, and export results for grading and discussion.',
  },
  {
    icon: FileText,
    title: 'Debrief Pack Exports',
    description: 'Generate board memos, decision timelines, and lessons learned. Perfect for post-simulation reflection.',
  },
  {
    icon: Target,
    title: 'Seeded Replay',
    description: 'Deterministic simulation with seeded RNG. Compare team performance under identical conditions.',
  },
];

const steps = [
  {
    title: 'Interpret Environment',
    description: 'Review market conditions, financial position, risk indicators, and stakeholder sentiment.',
  },
  {
    title: 'Make Decisions',
    description: 'Each role submits decisions within constraints. Trade-offs are explicit. Overcommitment has costs.',
  },
  {
    title: 'Simulate Consequences',
    description: 'The engine resolves all decisions, triggers events, and calculates outcomes.',
  },
  {
    title: 'Debrief & Reflect',
    description: 'Review what happened and why. Understand cause-effect chains. Prepare for the next quarter.',
  },
];

const roles = [
  {
    name: 'Strategy Lead',
    icon: Target,
    focus: 'Direction & Capital Allocation',
    decisions: ['Risk posture', 'Investment priorities', 'Market entry'],
  },
  {
    name: 'Marketing Lead',
    icon: TrendingUp,
    focus: 'Demand & Positioning',
    decisions: ['Campaign spend', 'Pricing', 'Brand positioning'],
  },
  {
    name: 'Sales Lead',
    icon: BarChart3,
    focus: 'Revenue & Channels',
    decisions: ['Enterprise vs SMB', 'Discounting', 'Partner programs'],
  },
  {
    name: 'Operations Lead',
    icon: Settings,
    focus: 'Capacity & Quality',
    decisions: ['Capacity investment', 'Supplier strategy', 'Delivery speed'],
  },
  {
    name: 'R&D Lead',
    icon: Lightbulb,
    focus: 'Product & Innovation',
    decisions: ['Roadmap focus', 'Release cadence', 'Model quality'],
  },
  {
    name: 'Legal Lead',
    icon: Scale,
    focus: 'Compliance & Risk',
    decisions: ['Compliance spend', 'Policy strictness', 'Data handling'],
  },
  {
    name: 'General Manager',
    icon: Building2,
    focus: 'People & Culture',
    decisions: ['Hiring plan', 'Org design', 'Crisis response'],
  },
];
