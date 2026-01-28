'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
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
  Sparkles,
  Rocket,
  Brain,
  PieChart,
  DollarSign,
  Factory,
  ShoppingCart,
  Megaphone,
  Cpu,
  Heart,
  CheckCircle,
  ArrowUpRight,
  Circle,
} from 'lucide-react';

// Floating Particle Component
function FloatingParticle({ delay, duration, x, y, size, color }: {
  delay: number;
  duration: number;
  x: number;
  y: number;
  size: number;
  color: string;
}) {
  return (
    <motion.div
      className={`absolute rounded-full ${color}`}
      style={{ width: size, height: size, left: `${x}%`, top: `${y}%` }}
      animate={{
        y: [0, -30, 0],
        x: [0, 15, 0],
        opacity: [0.3, 0.7, 0.3],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Animated Orb Component
function AnimatedOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Sparkle Component
function Sparkle({ className }: { className: string }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Star className="w-3 h-3 text-gold-400 fill-gold-400" />
    </motion.div>
  );
}

// Animated Counter
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {value.toLocaleString()}{suffix}
      </motion.span>
    </motion.span>
  );
}

export default function LandingPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 mesh-gradient pointer-events-none" />
      <div className="fixed inset-0 grid-pattern pointer-events-none opacity-50" />

      {/* Floating Orbs */}
      <AnimatedOrb className="w-96 h-96 bg-primary-200 -top-48 -right-48" />
      <AnimatedOrb className="w-80 h-80 bg-accent-200 top-1/3 -left-40" delay={2} />
      <AnimatedOrb className="w-64 h-64 bg-gold-200 bottom-20 right-20" delay={4} />
      <AnimatedOrb className="w-72 h-72 bg-success-200 bottom-1/4 left-1/4" delay={3} />

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <FloatingParticle delay={0} duration={6} x={10} y={20} size={8} color="bg-primary-300" />
        <FloatingParticle delay={1} duration={8} x={80} y={10} size={6} color="bg-accent-300" />
        <FloatingParticle delay={2} duration={7} x={30} y={70} size={10} color="bg-gold-300" />
        <FloatingParticle delay={3} duration={9} x={70} y={60} size={8} color="bg-success-300" />
        <FloatingParticle delay={4} duration={6} x={50} y={30} size={6} color="bg-primary-400" />
        <FloatingParticle delay={5} duration={8} x={20} y={80} size={12} color="bg-accent-200" />
        <FloatingParticle delay={1.5} duration={7} x={90} y={40} size={8} color="bg-gold-400" />
        <FloatingParticle delay={2.5} duration={9} x={40} y={50} size={6} color="bg-info-300" />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 glass"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-glow-purple"
              >
                <Layers className="w-6 h-6 text-white" />
              </motion.div>
              <div>
                <span className="font-bold text-silver-800 text-xl tracking-tight">Lumina</span>
                <span className="gradient-text text-xl font-bold">Sim</span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {['Features', 'Simulations', 'How It Works', 'Pricing'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-silver-600 hover:text-primary-600 text-sm font-medium transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Link href="/facilitator" className="text-silver-600 hover:text-primary-600 text-sm font-medium transition-colors hidden md:block">
                Facilitators
              </Link>
              <Link href="/simulation" className="btn-primary gap-2 group">
                <span>Launch Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-24 px-4 min-h-screen flex items-center">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Award Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-8 group cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="flex -space-x-1">
                  {[1, 2, 3].map((i) => (
                    <motion.div
                      key={i}
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ delay: i * 0.2, duration: 2, repeat: Infinity }}
                    >
                      <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-sm font-medium text-silver-700">Award-Winning Business Simulation Platform</span>
                <ArrowUpRight className="w-4 h-4 text-primary-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.div>

              <h1 className="text-5xl lg:text-7xl font-bold text-silver-900 leading-[1.1] tracking-tight mb-8">
                Transform Your
                <br />
                <span className="gradient-text-multi">Business Acumen</span>
              </h1>

              <p className="text-xl text-silver-600 leading-relaxed mb-10 max-w-xl">
                Immersive business simulations where teams compete in dynamic markets.
                Make real decisions, face real consequences, and develop <span className="text-primary-600 font-semibold">real skills</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link href="/simulation" className="btn-primary text-lg px-8 py-4 gap-3 group">
                  <Play className="w-5 h-5" />
                  <span>Start Free Demo</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </motion.span>
                </Link>
                <Link href="/facilitator" className="btn-secondary text-lg px-8 py-4 gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Facilitator Console
                </Link>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-8">
                {[
                  { value: 15000, suffix: '+', label: 'Students Trained' },
                  { value: 120, suffix: '+', label: 'Universities' },
                  { value: 98, suffix: '%', label: 'Satisfaction' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl font-bold gradient-text mb-1">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-silver-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Hero Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <HeroVisualization />
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-silver-400"
        >
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-silver-300 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary-500"
            />
          </div>
        </motion.div>
      </section>

      {/* Trusted By Strip */}
      <section className="py-16 border-y border-silver-200 bg-white/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs text-silver-400 mb-10 uppercase tracking-[0.2em] font-medium"
          >
            Trusted by Leading Institutions Worldwide
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8">
            {['Harvard Business School', 'Stanford GSB', 'MIT Sloan', 'Wharton', 'INSEAD', 'London Business School'].map((name, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-silver-400 font-semibold text-lg hover:text-primary-500 transition-colors cursor-pointer"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simulation Catalog */}
      <section id="simulations" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              6 Complete Simulations
            </div>
            <h2 className="text-5xl font-bold text-silver-900 mb-6">Business Simulation Catalog</h2>
            <p className="text-xl text-silver-600 max-w-2xl mx-auto">
              Each simulation is a complete, immersive experience with unique scenarios,
              decisions, and learning outcomes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {simulations.map((sim, index) => (
              <motion.div
                key={sim.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href="/simulation">
                  <div className="card-luxury-hover group h-full">
                    {/* Icon with animated background */}
                    <div className="relative mb-6">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${sim.gradient} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <sim.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${sim.gradient} opacity-20 blur-xl`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-silver-900 group-hover:text-primary-600 transition-colors">
                        {sim.name}
                      </h3>
                      {sim.featured && (
                        <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-gold-400 to-gold-500 text-white text-xs font-bold shadow-glow-gold">
                          FEATURED
                        </span>
                      )}
                    </div>

                    <p className="text-silver-600 mb-6 leading-relaxed">{sim.description}</p>

                    {/* Stats */}
                    <div className="flex items-center gap-4 mb-6 text-sm text-silver-500">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4" />
                        <span>{sim.teamSize} players</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Target className="w-4 h-4" />
                        <span>{sim.rounds} rounds</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{sim.duration}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {sim.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 rounded-full bg-silver-100 text-silver-600 text-xs font-medium hover:bg-primary-50 hover:text-primary-600 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Hover Arrow */}
                    <motion.div
                      className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <ArrowRight className="w-5 h-5 text-primary-500" />
                    </motion.div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 px-4 bg-gradient-to-b from-white to-silver-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 text-accent-600 text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Powerful Features
            </div>
            <h2 className="text-5xl font-bold text-silver-900 mb-6">Enterprise-Grade Platform</h2>
            <p className="text-xl text-silver-600 max-w-2xl mx-auto">
              Built for serious business education with sophisticated algorithms and real-world dynamics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="card-silver group hover:shadow-luxury transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-silver-900 mb-2">{feature.title}</h3>
                <p className="text-silver-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Roles Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success-50 text-success-600 text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Team-Based Learning
            </div>
            <h2 className="text-5xl font-bold text-silver-900 mb-6">Executive Team Roles</h2>
            <p className="text-xl text-silver-600 max-w-2xl mx-auto">
              Each team member assumes a C-suite role with distinct responsibilities and decision authority
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="stat-card group hover:shadow-luxury-lg transition-all duration-300"
              >
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center mb-4 shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <role.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="font-bold text-silver-900 mb-1">{role.title}</h3>
                <p className="text-xs text-silver-400 mb-4 uppercase tracking-wider">{role.subtitle}</p>
                <ul className="space-y-2">
                  {role.decisions.map((d) => (
                    <li key={d} className="text-xs text-silver-600 flex items-center gap-2">
                      <Circle className="w-1.5 h-1.5 fill-primary-500 text-primary-500" />
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
      <section id="how-it-works" className="py-32 px-4 bg-gradient-to-b from-silver-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-50 text-gold-600 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              Simple Process
            </div>
            <h2 className="text-5xl font-bold text-silver-900 mb-6">How The Simulation Works</h2>
            <p className="text-xl text-silver-600 max-w-2xl mx-auto">
              Each round represents one year of business operations. Compete over 8 rounds.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-20 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-200 via-accent-200 to-gold-200" />

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="card-luxury text-center">
                  <motion.div
                    className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center font-bold text-white text-2xl mb-6 shadow-lg relative z-10`}
                    whileHover={{ scale: 1.1 }}
                    whileInView={{
                      boxShadow: ["0 0 0 0 rgba(139, 92, 246, 0)", "0 0 0 20px rgba(139, 92, 246, 0)"]
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    {index + 1}
                  </motion.div>
                  <h3 className="text-lg font-bold text-silver-900 mb-3">{step.title}</h3>
                  <p className="text-sm text-silver-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Balanced Scorecard Preview */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-6">
                <PieChart className="w-4 h-4" />
                Multi-Dimensional Scoring
              </div>
              <h2 className="text-5xl font-bold text-silver-900 mb-6">Balanced Scorecard Ranking</h2>
              <p className="text-xl text-silver-600 mb-10">
                Teams are ranked on a comprehensive Balanced Scorecard that measures performance across five key dimensions:
              </p>
              <div className="space-y-5">
                {scorecard.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${item.gradient} shadow-lg`} />
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-silver-800">{item.name}</span>
                        <span className="text-silver-500 font-medium">{item.weight}%</span>
                      </div>
                      <div className="h-2.5 bg-silver-100 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${item.gradient}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.weight}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-luxury">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-silver-900">Live Leaderboard</h3>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Trophy className="w-6 h-6 text-gold-500" />
                  </motion.div>
                </div>
                <div className="space-y-4">
                  {leaderboard.map((team, index) => (
                    <motion.div
                      key={team.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                        index === 0
                          ? 'bg-gradient-to-r from-gold-50 to-gold-100 border-2 border-gold-200 shadow-glow-gold'
                          : 'bg-silver-50 hover:bg-silver-100'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-lg ${
                        index === 0 ? 'bg-gradient-to-br from-gold-400 to-gold-500 text-white' :
                        index === 1 ? 'bg-gradient-to-br from-silver-300 to-silver-400 text-white' :
                        index === 2 ? 'bg-gradient-to-br from-amber-600 to-amber-700 text-white' :
                        'bg-silver-200 text-silver-600'
                      }`}>
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="font-bold text-silver-900">{team.name}</div>
                        <div className="text-xs text-silver-500">Share Price: ${team.sharePrice}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-xl text-silver-900">{team.score}</div>
                        <div className={`text-xs font-semibold ${team.change >= 0 ? 'text-success-500' : 'text-danger-500'}`}>
                          {team.change >= 0 ? '+' : ''}{team.change} pts
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-luxury relative overflow-hidden"
          >
            {/* Animated background */}
            <div className="absolute inset-0 mesh-gradient opacity-50" />
            <motion.div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary-200 blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-accent-200 blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            />

            <div className="relative z-10 text-center py-12">
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Trophy className="w-20 h-20 text-gold-500 mx-auto mb-8" />
              </motion.div>
              <h2 className="text-5xl font-bold text-silver-900 mb-6">
                Ready to Lead Your Company?
              </h2>
              <p className="text-xl text-silver-600 mb-10 max-w-2xl mx-auto">
                Experience the most sophisticated business simulation platform.
                Make decisions that matter. Compete to win.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/simulation" className="btn-primary text-lg px-10 py-5 gap-3">
                  <Play className="w-6 h-6" />
                  <span>Launch Free Demo</span>
                </Link>
                <Link href="/facilitator" className="btn-secondary text-lg px-10 py-5 gap-3">
                  <GraduationCap className="w-6 h-6" />
                  <span>Facilitator Access</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-silver-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-silver-800 text-lg">LuminaSim</span>
            </div>
            <p className="text-sm text-silver-500">
              Powered by Ambidexters Inc. &copy; {new Date().getFullYear()}. All rights reserved.
            </p>
            <div className="flex gap-8">
              {['Simulation', 'Facilitator', 'Debrief', 'Support'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="text-sm text-silver-500 hover:text-primary-600 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Hero Visualization Component with Animations
function HeroVisualization() {
  return (
    <div className="relative">
      {/* Glow Effects */}
      <motion.div
        className="absolute -inset-8 bg-gradient-to-r from-primary-200 via-accent-200 to-gold-200 rounded-3xl blur-3xl opacity-40"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute -top-8 -left-8 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-500 shadow-glow-purple flex items-center justify-center"
      >
        <TrendingUp className="w-10 h-10 text-white" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute -top-4 -right-12 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-500 shadow-glow-rose flex items-center justify-center"
      >
        <BarChart3 className="w-8 h-8 text-white" />
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        className="absolute -bottom-8 -right-8 w-14 h-14 rounded-xl bg-gradient-to-br from-gold-400 to-gold-500 shadow-glow-gold flex items-center justify-center"
      >
        <DollarSign className="w-7 h-7 text-white" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-20 -left-12 w-12 h-12 rounded-xl bg-gradient-to-br from-success-400 to-success-500 shadow-glow-emerald flex items-center justify-center"
      >
        <CheckCircle className="w-6 h-6 text-white" />
      </motion.div>

      {/* Main Card */}
      <div className="relative card-luxury overflow-hidden shadow-luxury-xl">
        {/* Shimmer effect */}
        <div className="absolute inset-0 shimmer opacity-30" />

        {/* Header */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-danger-400" />
            <div className="w-3 h-3 rounded-full bg-warning-400" />
            <div className="w-3 h-3 rounded-full bg-success-400" />
          </div>
          <div className="flex items-center gap-2 text-xs text-silver-400">
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-success-400"
            />
            Live Demo
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="space-y-5 relative z-10">
          {/* KPI Row */}
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: 'Revenue', value: '$24.5M', change: '+12%', color: 'text-success-500', gradient: 'from-success-400 to-success-500' },
              { label: 'Market Share', value: '34%', change: '+5%', color: 'text-success-500', gradient: 'from-primary-400 to-primary-500' },
              { label: 'Stock Price', value: '$127.50', change: '+8.3%', color: 'text-success-500', gradient: 'from-gold-400 to-gold-500' },
              { label: 'Score', value: '428', change: 'Rank #2', color: 'text-gold-500', gradient: 'from-accent-400 to-accent-500' },
            ].map((kpi, i) => (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="stat-card p-3"
              >
                <div className="text-xs text-silver-500 mb-1">{kpi.label}</div>
                <div className="text-lg font-bold text-silver-900">{kpi.value}</div>
                <div className={`text-xs font-semibold ${kpi.color}`}>{kpi.change}</div>
              </motion.div>
            ))}
          </div>

          {/* Chart Placeholder */}
          <div className="h-36 bg-gradient-to-b from-silver-50 to-white rounded-xl flex items-end justify-center gap-2 p-4 border border-silver-100">
            {[40, 55, 45, 60, 52, 68, 75, 70, 85, 82, 90, 95].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ delay: i * 0.05, duration: 0.8, ease: "easeOut" }}
                className="w-6 bg-gradient-to-t from-primary-500 to-primary-400 rounded-t shadow-sm"
              />
            ))}
          </div>

          {/* Team Status */}
          <div className="grid grid-cols-2 gap-3">
            <div className="stat-card p-3">
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-primary-500" />
                <span className="text-sm font-medium text-silver-800">Team Alpha</span>
              </div>
              <div className="flex gap-2">
                {['CEO', 'CFO', 'CMO', 'COO'].map((role) => (
                  <motion.div
                    key={role}
                    whileHover={{ scale: 1.05 }}
                    className="px-2 py-1 bg-success-50 text-success-600 text-xs rounded-lg font-medium border border-success-100"
                  >
                    {role}
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="stat-card p-3">
              <div className="flex items-center gap-2 mb-3">
                <Target className="w-4 h-4 text-accent-500" />
                <span className="text-sm font-medium text-silver-800">Round 5 of 8</span>
              </div>
              <div className="h-3 bg-silver-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '62.5%' }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Clock icon component (since it's not in lucide)
function Clock({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

// Data
const simulations = [
  {
    id: 'strategic-leadership',
    name: 'Strategic Leadership',
    description: 'Lead a Fortune 500 company through digital transformation, market disruption, and competitive pressures. Master CEO-level decision making.',
    icon: Briefcase,
    gradient: 'from-primary-500 to-primary-600',
    featured: true,
    teamSize: '4-6',
    rounds: 8,
    duration: '4-6 hrs',
    tags: ['Strategy', 'Leadership', 'Digital Transformation'],
  },
  {
    id: 'market-dynamics',
    name: 'Market Dynamics',
    description: 'Navigate complex market forces, competitive positioning, and consumer behavior in a dynamic multi-player marketplace simulation.',
    icon: TrendingUp,
    gradient: 'from-accent-500 to-accent-600',
    featured: false,
    teamSize: '3-5',
    rounds: 10,
    duration: '3-4 hrs',
    tags: ['Marketing', 'Competition', 'Market Analysis'],
  },
  {
    id: 'financial-acumen',
    name: 'Financial Acumen',
    description: 'Master corporate finance, investment decisions, and risk management. Build financial models and optimize capital allocation.',
    icon: DollarSign,
    gradient: 'from-success-500 to-success-600',
    featured: false,
    teamSize: '3-5',
    rounds: 8,
    duration: '4-5 hrs',
    tags: ['Finance', 'Investment', 'Risk Management'],
  },
  {
    id: 'operations-excellence',
    name: 'Operations Excellence',
    description: 'Optimize supply chains, manage production capacity, and implement lean operations. Balance quality, cost, and delivery.',
    icon: Factory,
    gradient: 'from-warning-500 to-warning-600',
    featured: false,
    teamSize: '4-6',
    rounds: 8,
    duration: '4-5 hrs',
    tags: ['Operations', 'Supply Chain', 'Quality'],
  },
  {
    id: 'sales-mastery',
    name: 'Sales Mastery',
    description: 'Build and lead a high-performing sales organization. Manage territories, compensation, and customer relationships.',
    icon: Megaphone,
    gradient: 'from-info-500 to-info-600',
    featured: false,
    teamSize: '3-5',
    rounds: 6,
    duration: '3-4 hrs',
    tags: ['Sales', 'CRM', 'Team Management'],
  },
  {
    id: 'innovation-lab',
    name: 'Innovation Lab',
    description: 'Drive R&D strategy, manage product portfolios, and bring innovations to market. Balance exploration and exploitation.',
    icon: Lightbulb,
    gradient: 'from-purple-500 to-purple-600',
    featured: false,
    teamSize: '4-6',
    rounds: 8,
    duration: '4-5 hrs',
    tags: ['Innovation', 'R&D', 'Product Development'],
  },
];

const features = [
  {
    icon: Zap,
    title: 'Real-Time Competition',
    description: 'Teams compete simultaneously in the same market. Your decisions impact others and vice versa.',
    gradient: 'from-primary-400 to-primary-500',
  },
  {
    icon: LineChart,
    title: 'Dynamic Market Events',
    description: 'Respond to market shocks, regulatory changes, competitor moves, and economic shifts.',
    gradient: 'from-accent-400 to-accent-500',
  },
  {
    icon: Trophy,
    title: 'Balanced Scorecard',
    description: 'Multi-dimensional scoring on financial performance, growth, trust, resilience, and execution.',
    gradient: 'from-gold-400 to-gold-500',
  },
  {
    icon: Users,
    title: 'C-Suite Role Assignment',
    description: 'Each team member takes a specific executive role with unique decision authority.',
    gradient: 'from-success-400 to-success-500',
  },
  {
    icon: Settings,
    title: 'Facilitator Control Panel',
    description: 'Instructors can inject events, pause rounds, compare teams, and export analytics.',
    gradient: 'from-warning-400 to-warning-500',
  },
  {
    icon: Brain,
    title: 'AI-Powered Analytics',
    description: 'Machine learning insights on decision patterns, team dynamics, and learning outcomes.',
    gradient: 'from-info-400 to-info-500',
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
    icon: Cpu,
    color: 'from-purple-500 to-purple-600',
    decisions: ['R&D Roadmap', 'Tech Stack', 'Innovation Budget', 'Security & Privacy'],
  },
  {
    title: 'Chief People Officer',
    subtitle: 'CPO',
    icon: Heart,
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
    description: 'Review market conditions, financial position, competitive landscape, and team performance.',
    gradient: 'from-primary-400 to-primary-500',
  },
  {
    title: 'Strategic Planning',
    description: 'Coordinate with your team. Each role makes decisions within their domain.',
    gradient: 'from-accent-400 to-accent-500',
  },
  {
    title: 'Submit Decisions',
    description: 'Lock in your choices before the deadline. Decisions are final once submitted.',
    gradient: 'from-gold-400 to-gold-500',
  },
  {
    title: 'Review Outcomes',
    description: 'Watch the simulation resolve. See how your decisions played out against competitors.',
    gradient: 'from-success-400 to-success-500',
  },
];

const scorecard = [
  { name: 'Financial Health', weight: 25, gradient: 'from-success-400 to-success-500' },
  { name: 'Market Growth', weight: 25, gradient: 'from-primary-400 to-primary-500' },
  { name: 'Brand Trust', weight: 20, gradient: 'from-accent-400 to-accent-500' },
  { name: 'Operational Resilience', weight: 15, gradient: 'from-warning-400 to-warning-500' },
  { name: 'Execution Quality', weight: 15, gradient: 'from-purple-400 to-purple-500' },
];

const leaderboard = [
  { name: 'Team Alpha', score: 428, sharePrice: 127.50, change: 15 },
  { name: 'Team Omega', score: 412, sharePrice: 118.25, change: 8 },
  { name: 'Team Delta', score: 395, sharePrice: 105.75, change: -3 },
  { name: 'Team Sigma', score: 378, sharePrice: 98.50, change: 12 },
];
