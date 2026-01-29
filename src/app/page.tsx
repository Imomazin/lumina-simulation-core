'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Crown,
  TrendingUp,
  DollarSign,
  Cog,
  Target,
  Lightbulb,
  ChevronRight,
  ChevronDown,
  Users,
  Clock,
  Play,
  AlertTriangle,
  Zap,
  Shield,
  BarChart3,
  ArrowRight,
  Quote,
  Building2,
  Briefcase,
  Award,
  Globe,
  Brain,
  Flame,
  Eye,
  Heart,
} from 'lucide-react';

// =============================================================================
// CINEMATIC HERO DATA
// =============================================================================

const HERO_SCENARIOS = [
  {
    title: "The board wants blood.",
    subtitle: "Your stock is down 40%. Activist investors circle. The CFO says cut costs. The CPO says you'll lose your best people. You have 72 hours.",
    gradient: "from-red-900 via-slate-900 to-slate-950",
  },
  {
    title: "Your competitor just blinked.",
    subtitle: "They've slashed prices 30%. Your sales team is panicking. Marketing wants to match. Finance says you'll destroy two years of margin. The clock is ticking.",
    gradient: "from-blue-900 via-slate-900 to-slate-950",
  },
  {
    title: "Cash runs out in 6 months.",
    subtitle: "The Series C fell through. Your burn rate is $2.3M/month. The team doesn't know. Do you tell them now, or wait until you have a plan?",
    gradient: "from-emerald-900 via-slate-900 to-slate-950",
  },
  {
    title: "The factory just went dark.",
    subtitle: "Your sole supplier in Taiwan stopped shipping. Three weeks of inventory. Q4 commitments to 50 enterprise clients. The COO is calling.",
    gradient: "from-orange-900 via-slate-900 to-slate-950",
  },
];

const SIMULATIONS = [
  {
    id: 'strategic-leadership',
    title: 'Strategic Leadership',
    subtitle: 'Governing Under Uncertainty',
    tagline: 'The boardroom simulation where your job is on the line',
    icon: Crown,
    color: 'violet',
    gradient: 'from-violet-600 to-purple-700',
    duration: '3-4 hours',
    players: '3-5 players',
    rounds: 8,
    hook: "You are the CEO of a publicly traded company. Board confidence is slipping. An activist investor owns 8% of your shares. Your CFO and COO haven't spoken in weeks. And today, the SEC wants to talk.",
    stakes: [
      "Board can fire you mid-simulation",
      "Every stakeholder has memory",
      "Early compromises haunt late game",
      "No reset. No undo. Consequences stick.",
    ],
    preview: "Experience the isolation of command. Feel the weight of every choice. Learn why good leaders still fail.",
  },
  {
    id: 'market-dynamics',
    title: 'Market Dynamics',
    subtitle: 'Competing in Motion',
    tagline: 'Multiplayer market warfare where survival is optional',
    icon: TrendingUp,
    color: 'blue',
    gradient: 'from-blue-600 to-cyan-600',
    duration: '2-3 hours',
    players: '2-6 teams',
    rounds: 10,
    hook: "You are competing against 3-5 other firms. Same market. Same customers. Different strategies. One wrong move and you're bleeding share while your competitor counts their wins.",
    stakes: [
      "Real competitor dashboards",
      "Price wars destroy everyone",
      "Brand equity takes years to build",
      "One quarter can undo five.",
    ],
    preview: "Learn that markets are not spreadsheets. They're battlefields where perception beats reality.",
  },
  {
    id: 'financial-acumen',
    title: 'Financial Acumen',
    subtitle: 'Capital, Risk, and Survival',
    tagline: 'Where CFOs are made—and unmade',
    icon: DollarSign,
    color: 'emerald',
    gradient: 'from-emerald-600 to-teal-600',
    duration: '3-4 hours',
    players: '3-4 players',
    rounds: 12,
    hook: "You have $890M in cash. 18 months of runway if you stop everything. But stopping everything means dying slowly. The question isn't how much to spend. It's what you're willing to lose.",
    stakes: [
      "Cash timing is everything",
      "Credit rating affects your options",
      "Bankruptcy is always an option",
      "Investors don't forget.",
    ],
    preview: "Discover that finance isn't about numbers. It's about survival, timing, and the bets you're willing to make.",
  },
  {
    id: 'operations-excellence',
    title: 'Operations Excellence',
    subtitle: 'Flow, Capacity, and Fragility',
    tagline: 'The supply chain simulation that breaks before you do',
    icon: Cog,
    color: 'orange',
    gradient: 'from-orange-500 to-amber-600',
    duration: '2-3 hours',
    players: '3-4 players',
    rounds: 8,
    hook: "Your operation looks smooth. 98% on-time delivery. Then a single supplier in Malaysia goes dark. Suddenly you see the fragility hiding inside your efficiency.",
    stakes: [
      "Small delays cascade",
      "Quality issues compound",
      "The bullwhip effect is real",
      "Resilience costs money upfront.",
    ],
    preview: "Understand why supply chains that look perfect break catastrophically, and why the fix isn't obvious.",
  },
  {
    id: 'sales-mastery',
    title: 'Sales Mastery',
    subtitle: 'Growth Without Erosion',
    tagline: 'Hit the number—without destroying the future',
    icon: Target,
    color: 'rose',
    gradient: 'from-rose-500 to-pink-600',
    duration: '2-3 hours',
    players: '3-5 players',
    rounds: 8,
    hook: "You're 87% to target with 6 weeks left in Q4. The board expects 100%. Your top rep has a $2M deal that needs 40% discount. Your competitors are whispering to your biggest account.",
    stakes: [
      "Discounting destroys LTV",
      "Sandbagging is detectable",
      "Top performers can be toxic",
      "Short-term wins poison long-term.",
    ],
    preview: "Experience the impossible tradeoffs of sales leadership. Learn why easy wins create hard futures.",
  },
  {
    id: 'innovation-lab',
    title: 'Innovation Lab',
    subtitle: 'Betting on the Future',
    tagline: 'Where R&D leaders learn to kill their darlings',
    icon: Lightbulb,
    color: 'yellow',
    gradient: 'from-yellow-500 to-orange-500',
    duration: '2-3 hours',
    players: '3-4 players',
    rounds: 10,
    hook: "You have 12 projects in your portfolio. 3 are hopeless. 4 are promising. 2 might change the industry. Your budget covers 8. The board wants you to pick 5. Your team created all of them.",
    stakes: [
      "Sunk costs are seductive",
      "Cannibalization is inevitable",
      "Technical debt is invisible",
      "Breakthroughs look like failures early.",
    ],
    preview: "Learn the hardest lesson in innovation: knowing when to kill something you believe in.",
  },
];

const TESTIMONIALS = [
  {
    quote: "I've done Capsim. I've done Harvard cases. Nothing prepared me for the feeling of watching board confidence tick down while my team argued about priorities. That feeling of dread? That's what leadership actually feels like.",
    author: "Elena Vasquez",
    role: "VP Strategy, Fortune 500 Technology",
    simulation: "Strategic Leadership",
    avatar: "EV",
  },
  {
    quote: "We thought we understood our market. Then we watched three teams destroy each other in a price war while the fourth quietly took share. Same data, same tools. Totally different outcomes.",
    author: "Marcus Chen",
    role: "CMO, Consumer Goods",
    simulation: "Market Dynamics",
    avatar: "MC",
  },
  {
    quote: "Fourteen years in finance. First time I've actually felt the terror of watching cash runway shrink while waiting for a deal to close. The simulation taught me more about capital structure than my MBA.",
    author: "Robert Okonkwo",
    role: "CFO, Healthcare Services",
    simulation: "Financial Acumen",
    avatar: "RO",
  },
];

// =============================================================================
// COMPONENTS
// =============================================================================

function TypewriterText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const [displayText, setDisplayText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [text, started]);

  return (
    <span className={className}>
      {displayText}
      {started && displayText.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-0.5 h-[1em] bg-current ml-0.5 align-middle"
        />
      )}
    </span>
  );
}

function CinematicHero() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentScenario((prev) => (prev + 1) % HERO_SCENARIOS.length);
        setIsTransitioning(false);
      }, 500);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const scenario = HERO_SCENARIOS[currentScenario];

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br ${scenario.gradient} transition-all duration-1000`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.1, 0.15] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-slate-300">
            <Flame className="w-4 h-4 text-orange-400" />
            This is not training. This is rehearsal.
          </span>
        </motion.div>

        {/* Main title - typewriter effect */}
        <div className="mb-6 min-h-[120px] md:min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentScenario}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isTransitioning ? 0 : 1, y: isTransitioning ? -30 : 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              {scenario.title}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Subtitle */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`subtitle-${currentScenario}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isTransitioning ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            {scenario.subtitle}
          </motion.p>
        </AnimatePresence>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link
            href="#simulations"
            className="group px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-white/10"
          >
            <Play className="w-5 h-5" />
            Enter the Simulations
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#philosophy"
            className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Eye className="w-5 h-5" />
            Our Philosophy
          </Link>
        </motion.div>

        {/* Scenario indicators */}
        <div className="flex justify-center gap-2">
          {HERO_SCENARIOS.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentScenario(i);
                  setIsTransitioning(false);
                }, 500);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentScenario ? 'bg-white w-8' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section id="philosophy" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-[800px] h-[800px] bg-violet-900/10 rounded-full blur-[150px] transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Most simulations are games.
            <span className="block text-slate-500 mt-2">This is practice.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: What we're not */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              What we reject
            </h3>
            <ul className="space-y-4">
              {[
                "Simplified models that ignore real complexity",
                "Gamification that rewards clicking over thinking",
                "Safe scenarios where everyone wins",
                "Immediate feedback that removes uncertainty",
                "Solitary experiences without conflict",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-400">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: What we are */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              What we build
            </h3>
            <ul className="space-y-4">
              {[
                "Systems with hidden interdependencies that reveal themselves over time",
                "Decisions that feel impossible because they are",
                "Consequences that compound across rounds",
                "Team dynamics that mirror real organizational friction",
                "Moments of genuine uncertainty and pressure",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-slate-700"
        >
          <Quote className="w-10 h-10 text-violet-500 mb-4" />
          <blockquote className="text-2xl md:text-3xl text-white font-medium mb-6 leading-relaxed">
            "The goal isn't to teach you what to decide. It's to make you feel the weight of deciding—so when it's real, you've been here before."
          </blockquote>
          <div className="text-slate-400">
            <span className="font-semibold text-slate-300">Lumina Simulation</span>
            <span className="mx-2">·</span>
            Design Philosophy
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SimulationCard({ sim, index }: { sim: typeof SIMULATIONS[0]; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = sim.icon;

  const colorStyles = {
    violet: {
      bg: 'bg-violet-500/10',
      border: 'border-violet-500/30',
      text: 'text-violet-400',
      gradient: 'from-violet-600 to-purple-700',
    },
    blue: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      text: 'text-blue-400',
      gradient: 'from-blue-600 to-cyan-600',
    },
    emerald: {
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/30',
      text: 'text-emerald-400',
      gradient: 'from-emerald-600 to-teal-600',
    },
    orange: {
      bg: 'bg-orange-500/10',
      border: 'border-orange-500/30',
      text: 'text-orange-400',
      gradient: 'from-orange-500 to-amber-600',
    },
    rose: {
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/30',
      text: 'text-rose-400',
      gradient: 'from-rose-500 to-pink-600',
    },
    yellow: {
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/30',
      text: 'text-yellow-400',
      gradient: 'from-yellow-500 to-orange-500',
    },
  };

  const style = colorStyles[sim.color as keyof typeof colorStyles];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div
        className={`relative bg-slate-900/80 backdrop-blur-sm rounded-2xl border ${style.border} overflow-hidden transition-all duration-500 ${
          isExpanded ? 'shadow-2xl shadow-violet-500/10' : ''
        }`}
      >
        {/* Header */}
        <div
          className="p-6 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-start gap-4">
            <div className={`w-14 h-14 ${style.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
              <Icon className={`w-7 h-7 ${style.text}`} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xl font-bold text-white">{sim.title}</h3>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className={`w-5 h-5 ${style.text}`} />
                </motion.div>
              </div>
              <p className={`text-sm ${style.text} font-medium mb-2`}>{sim.subtitle}</p>
              <p className="text-sm text-slate-400 italic">{sim.tagline}</p>
            </div>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 mt-4 text-sm text-slate-500">
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
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 space-y-6">
                {/* Divider */}
                <div className="h-px bg-slate-800" />

                {/* The Hook */}
                <div>
                  <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-3">The Scenario</h4>
                  <p className="text-slate-300 leading-relaxed">{sim.hook}</p>
                </div>

                {/* The Stakes */}
                <div>
                  <h4 className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-3">The Stakes</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {sim.stakes.map((stake, i) => (
                      <div
                        key={i}
                        className={`p-3 ${style.bg} rounded-lg border ${style.border}`}
                      >
                        <span className="text-sm text-slate-300">{stake}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preview */}
                <div className={`p-4 rounded-lg bg-gradient-to-r ${style.gradient}/10 border-l-4 border-l-current ${style.text}`}>
                  <p className="text-slate-300 text-sm leading-relaxed">{sim.preview}</p>
                </div>

                {/* CTA */}
                <Link
                  href={`/simulations/${sim.id}`}
                  className={`w-full py-4 bg-gradient-to-r ${style.gradient} text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}
                >
                  <Play className="w-5 h-5" />
                  Enter Simulation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function SimulationsSection() {
  return (
    <section id="simulations" className="py-32 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Six Simulations.
            <span className="block text-slate-500">Infinite Lessons.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Each simulation is a complete experience—story-driven, consequence-heavy, and designed to reveal how you think under pressure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {SIMULATIONS.map((sim, index) => (
            <SimulationCard key={sim.id} sim={sim} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-32 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            From the Trenches
          </h2>
          <p className="text-xl text-slate-400">
            What executives say after they've been through it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700"
            >
              <Quote className="w-8 h-8 text-violet-500/50 mb-4" />
              <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-purple-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                  <div className="text-xs text-violet-400 mt-0.5">{testimonial.simulation}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceSection() {
  const audiences = [
    {
      icon: Award,
      title: "MBA Capstone",
      description: "The culminating experience that integrates strategy, finance, operations, and leadership into a single high-stakes simulation.",
    },
    {
      icon: Briefcase,
      title: "Executive Education",
      description: "For senior leaders who need safe space to practice dangerous decisions before they become real.",
    },
    {
      icon: Building2,
      title: "Corporate Programs",
      description: "Custom simulations aligned to your organization's context, challenges, and strategic priorities.",
    },
    {
      icon: Globe,
      title: "Leadership Academies",
      description: "Pipeline development for high-potential leaders who need to practice cross-functional thinking.",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built for Serious Learning
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Designed in partnership with business schools, executive education programs, and Fortune 500 learning organizations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors"
            >
              <div className="w-12 h-12 bg-violet-500/10 rounded-xl flex items-center justify-center mb-4">
                <audience.icon className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{audience.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-32 bg-gradient-to-br from-violet-900 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to lead?
          </h2>
          <p className="text-xl text-slate-300 mb-4 max-w-2xl mx-auto">
            The decisions you make here will feel real because they're designed to.
          </p>
          <p className="text-lg text-slate-400 mb-10">
            No do-overs. No hints. Just the weight of command.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#simulations"
              className="group px-10 py-5 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
            >
              <Play className="w-6 h-6" />
              Choose Your Simulation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/facilitator"
              className="px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 text-lg"
            >
              <Users className="w-6 h-6" />
              Facilitator Access
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 py-16 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-white mb-2">Lumina Simulation</div>
            <div className="text-slate-500">Run the company. Feel the consequences.</div>
          </div>

          <div className="flex gap-8 text-slate-400">
            <Link href="#simulations" className="hover:text-white transition-colors">Simulations</Link>
            <Link href="/facilitator" className="hover:text-white transition-colors">Facilitator</Link>
            <Link href="/debrief" className="hover:text-white transition-colors">Debrief</Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
          <p>Designed for executive education, MBA programs, and leadership development.</p>
          <p className="mt-2">© {new Date().getFullYear()} Lumina Simulation Suite</p>
        </div>
      </div>
    </footer>
  );
}

// =============================================================================
// MAIN PAGE
// =============================================================================

export default function HomePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-950">
      <CinematicHero />
      <PhilosophySection />
      <SimulationsSection />
      <TestimonialsSection />
      <AudienceSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}
