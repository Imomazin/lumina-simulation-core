'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
  Users,
  Trophy,
  Zap,
  Settings,
  Download,
  Plus,
  ChevronRight,
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  Layers,
  Eye,
  Target,
  TrendingUp,
  DollarSign,
  Shield,
  Send,
  Activity,
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FacilitatorPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'teams' | 'events' | 'settings'>('overview');
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  // Mock data for demo
  const simulationState = {
    runId: 'SIM-2024-Q1-001',
    status: 'running',
    currentRound: 4,
    maxRounds: 8,
    teamsCount: 6,
    phase: 'decisions_open',
    startedAt: '2024-01-15T09:00:00Z',
  };

  const teams = [
    { id: '1', name: 'Team Alpha', score: 428, rank: 1, sharePrice: 127.50, decisionsSubmitted: 7, status: 'active' },
    { id: '2', name: 'Team Beta', score: 412, rank: 2, sharePrice: 118.25, decisionsSubmitted: 5, status: 'active' },
    { id: '3', name: 'Team Gamma', score: 395, rank: 3, sharePrice: 105.75, decisionsSubmitted: 7, status: 'active' },
    { id: '4', name: 'Team Delta', score: 378, rank: 4, sharePrice: 98.50, decisionsSubmitted: 4, status: 'active' },
    { id: '5', name: 'Team Epsilon', score: 352, rank: 5, sharePrice: 87.25, decisionsSubmitted: 6, status: 'active' },
    { id: '6', name: 'Team Zeta', score: 324, rank: 6, sharePrice: 72.00, decisionsSubmitted: 3, status: 'delayed' },
  ];

  const events = [
    { id: '1', name: 'Regulatory Inquiry', severity: 'high', round: 3, active: true },
    { id: '2', name: 'Competitor Price War', severity: 'medium', round: 4, active: true },
    { id: '3', name: 'Supply Chain Disruption', severity: 'medium', round: 2, active: false },
    { id: '4', name: 'Viral Positive Review', severity: 'low', round: 1, active: false },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <Layers className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-white">Facilitator Console</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span className="text-white font-medium">Year {simulationState.currentRound}/{simulationState.maxRounds}</span>
              </div>
              <div className={cn(
                'px-4 py-2 rounded-lg text-sm font-medium',
                simulationState.status === 'running' ? 'bg-success-500/20 text-success-400' : 'bg-warning-500/20 text-warning-400'
              )}>
                {simulationState.status === 'running' ? 'Running' : 'Paused'}
              </div>
              <div className="flex items-center gap-2">
                <button className="btn-secondary inline-flex items-center gap-2">
                  <Pause className="w-4 h-4" />
                  Pause
                </button>
                <button className="btn-primary inline-flex items-center gap-2">
                  <Play className="w-4 h-4" />
                  Advance Round
                </button>
              </div>
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
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'teams', label: 'Teams', icon: Users },
              { id: 'events', label: 'Events', icon: Zap },
              { id: 'settings', label: 'Settings', icon: Settings },
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

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left Column - Stats */}
              <div className="lg:col-span-2 space-y-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-4 gap-4">
                  <StatCard label="Active Teams" value={simulationState.teamsCount.toString()} icon={Users} color="primary" />
                  <StatCard label="Current Round" value={`${simulationState.currentRound}/${simulationState.maxRounds}`} icon={Clock} color="accent" />
                  <StatCard label="Avg Score" value="382" icon={Trophy} color="warning" />
                  <StatCard label="Active Events" value={events.filter(e => e.active).length.toString()} icon={Zap} color="danger" />
                </div>

                {/* Leaderboard */}
                <div className="card-enterprise">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Trophy className="w-5 h-5 text-warning-400" />
                      <h2 className="text-lg font-semibold text-white">Team Leaderboard</h2>
                    </div>
                    <button className="btn-secondary text-sm inline-flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Export
                    </button>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left text-sm text-slate-400 border-b border-white/10">
                          <th className="pb-3 font-medium">Rank</th>
                          <th className="pb-3 font-medium">Team</th>
                          <th className="pb-3 font-medium">Score</th>
                          <th className="pb-3 font-medium">Share Price</th>
                          <th className="pb-3 font-medium">Decisions</th>
                          <th className="pb-3 font-medium">Status</th>
                          <th className="pb-3 font-medium"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {teams.map((team) => (
                          <tr key={team.id} className="border-b border-white/5 hover:bg-white/5">
                            <td className="py-4">
                              <div className={cn(
                                'w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm',
                                team.rank === 1 ? 'bg-warning-500 text-white' :
                                team.rank === 2 ? 'bg-slate-400 text-white' :
                                team.rank === 3 ? 'bg-amber-700 text-white' :
                                'bg-white/10 text-slate-400'
                              )}>
                                {team.rank}
                              </div>
                            </td>
                            <td className="py-4">
                              <span className="font-medium text-white">{team.name}</span>
                            </td>
                            <td className="py-4">
                              <span className="font-bold text-white">{team.score}</span>
                            </td>
                            <td className="py-4">
                              <span className="font-mono text-accent-400">${team.sharePrice.toFixed(2)}</span>
                            </td>
                            <td className="py-4">
                              <span className="text-slate-400">{team.decisionsSubmitted}/7</span>
                            </td>
                            <td className="py-4">
                              <span className={cn(
                                'px-2 py-1 rounded-full text-xs font-medium',
                                team.status === 'active' ? 'bg-success-500/20 text-success-400' : 'bg-warning-500/20 text-warning-400'
                              )}>
                                {team.status}
                              </span>
                            </td>
                            <td className="py-4">
                              <button
                                onClick={() => setSelectedTeam(team.id)}
                                className="text-slate-400 hover:text-white"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="card-enterprise">
                  <div className="flex items-center gap-3 mb-6">
                    <Activity className="w-5 h-5 text-primary-400" />
                    <h2 className="text-lg font-semibold text-white">Recent Activity</h2>
                  </div>
                  <div className="space-y-3">
                    {[
                      { time: '2 min ago', action: 'Team Alpha submitted Marketing decisions', type: 'decision' },
                      { time: '5 min ago', action: 'Team Beta submitted R&D decisions', type: 'decision' },
                      { time: '8 min ago', action: 'Regulatory Inquiry event triggered', type: 'event' },
                      { time: '15 min ago', action: 'Round 4 started', type: 'system' },
                      { time: '20 min ago', action: 'Team Gamma viewed debrief', type: 'action' },
                    ].map((activity, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 rounded-lg bg-white/5">
                        <div className={cn(
                          'w-2 h-2 rounded-full',
                          activity.type === 'decision' ? 'bg-success-500' :
                          activity.type === 'event' ? 'bg-warning-500' :
                          activity.type === 'system' ? 'bg-primary-500' :
                          'bg-slate-500'
                        )} />
                        <span className="flex-1 text-sm text-slate-300">{activity.action}</span>
                        <span className="text-xs text-slate-500">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Simulation Info */}
                <div className="card-enterprise">
                  <h3 className="font-semibold text-white mb-4">Simulation Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Run ID</span>
                      <span className="font-mono text-white">{simulationState.runId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Started</span>
                      <span className="text-white">Jan 15, 2024 9:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Phase</span>
                      <span className="text-success-400">Decisions Open</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Scenario</span>
                      <span className="text-white">Lumina Assist</span>
                    </div>
                  </div>
                </div>

                {/* Active Events */}
                <div className="card-enterprise">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-warning-400" />
                      <h3 className="font-semibold text-white">Active Events</h3>
                    </div>
                    <button className="text-primary-400 text-sm hover:text-primary-300">+ Inject</button>
                  </div>
                  <div className="space-y-2">
                    {events.filter(e => e.active).map((event) => (
                      <div
                        key={event.id}
                        className={cn(
                          'p-3 rounded-lg border-l-4',
                          event.severity === 'high' ? 'bg-danger-500/10 border-danger-500' :
                          event.severity === 'medium' ? 'bg-warning-500/10 border-warning-500' :
                          'bg-primary-500/10 border-primary-500'
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-white">{event.name}</span>
                          <span className="text-xs text-slate-400">R{event.round}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="card-enterprise">
                  <h3 className="font-semibold text-white mb-4">Quick Actions</h3>
                  <div className="space-y-2">
                    <button className="w-full btn-secondary text-left justify-start">
                      <Plus className="w-4 h-4 mr-2" />
                      Inject Market Event
                    </button>
                    <button className="w-full btn-secondary text-left justify-start">
                      <Send className="w-4 h-4 mr-2" />
                      Broadcast Message
                    </button>
                    <button className="w-full btn-secondary text-left justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      Export All Data
                    </button>
                    <button className="w-full btn-secondary text-left justify-start text-danger-400 border-danger-500/30 hover:bg-danger-500/10">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Reset Simulation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Teams Tab */}
          {activeTab === 'teams' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teams.map((team) => (
                <motion.div
                  key={team.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="card-enterprise-hover"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        'w-10 h-10 rounded-lg flex items-center justify-center font-bold',
                        team.rank === 1 ? 'bg-warning-500 text-white' :
                        team.rank === 2 ? 'bg-slate-400 text-white' :
                        team.rank === 3 ? 'bg-amber-700 text-white' :
                        'bg-white/10 text-slate-400'
                      )}>
                        #{team.rank}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{team.name}</h3>
                        <p className="text-xs text-slate-400">{team.decisionsSubmitted}/7 decisions</p>
                      </div>
                    </div>
                    <span className={cn(
                      'px-2 py-1 rounded-full text-xs font-medium',
                      team.status === 'active' ? 'bg-success-500/20 text-success-400' : 'bg-warning-500/20 text-warning-400'
                    )}>
                      {team.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="stat-card">
                      <div className="text-xs text-slate-500 mb-1">Score</div>
                      <div className="text-xl font-bold text-white">{team.score}</div>
                    </div>
                    <div className="stat-card">
                      <div className="text-xs text-slate-500 mb-1">Share Price</div>
                      <div className="text-xl font-bold text-accent-400">${team.sharePrice.toFixed(2)}</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 btn-secondary text-sm">
                      <Eye className="w-3 h-3 mr-1" />
                      View
                    </button>
                    <button className="flex-1 btn-secondary text-sm">
                      <Send className="w-3 h-3 mr-1" />
                      Message
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Event Injection */}
              <div className="card-enterprise">
                <div className="flex items-center gap-3 mb-6">
                  <Plus className="w-5 h-5 text-primary-400" />
                  <h2 className="text-lg font-semibold text-white">Inject Event</h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Event Type</label>
                    <select className="input-field">
                      <option>Regulatory Inquiry</option>
                      <option>Competitor Price War</option>
                      <option>Data Incident Rumor</option>
                      <option>Supply Disruption</option>
                      <option>Viral Positive Review</option>
                      <option>Enterprise RFP Opportunity</option>
                      <option>Market Downturn</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Severity</label>
                    <div className="flex gap-2">
                      {['Low', 'Medium', 'High'].map((sev) => (
                        <button
                          key={sev}
                          className={cn(
                            'flex-1 py-2 rounded-lg text-sm font-medium transition-colors',
                            sev === 'Medium' ? 'bg-warning-500 text-white' : 'bg-white/10 text-slate-400 hover:bg-white/20'
                          )}
                        >
                          {sev}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Target Teams</label>
                    <select className="input-field">
                      <option>All Teams</option>
                      <option>Team Alpha</option>
                      <option>Team Beta</option>
                      <option>Team Gamma</option>
                    </select>
                  </div>
                  <button className="w-full btn-primary">
                    <Zap className="w-4 h-4 mr-2" />
                    Inject Event
                  </button>
                </div>
              </div>

              {/* Event History */}
              <div className="card-enterprise">
                <div className="flex items-center gap-3 mb-6">
                  <Activity className="w-5 h-5 text-accent-400" />
                  <h2 className="text-lg font-semibold text-white">Event History</h2>
                </div>
                <div className="space-y-3">
                  {events.map((event) => (
                    <div
                      key={event.id}
                      className={cn(
                        'p-4 rounded-xl flex items-center justify-between',
                        event.active ? 'bg-white/10' : 'bg-white/5'
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          'w-3 h-3 rounded-full',
                          event.severity === 'high' ? 'bg-danger-500' :
                          event.severity === 'medium' ? 'bg-warning-500' :
                          'bg-primary-500'
                        )} />
                        <div>
                          <div className="font-medium text-white">{event.name}</div>
                          <div className="text-xs text-slate-400">Round {event.round}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {event.active ? (
                          <span className="px-2 py-1 rounded-full bg-success-500/20 text-success-400 text-xs">Active</span>
                        ) : (
                          <span className="px-2 py-1 rounded-full bg-slate-500/20 text-slate-400 text-xs">Resolved</span>
                        )}
                        <button className="text-slate-400 hover:text-white">
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="max-w-2xl">
              <div className="card-enterprise">
                <h2 className="text-lg font-semibold text-white mb-6">Simulation Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Scenario</label>
                    <select className="input-field">
                      <option>Lumina Assist - AI Enterprise</option>
                      <option>Global Manufacturing</option>
                      <option>Financial Services</option>
                      <option>Healthcare Systems</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Total Rounds</label>
                    <input type="number" className="input-field" defaultValue={8} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Decision Timeout (minutes)</label>
                    <input type="number" className="input-field" defaultValue={15} />
                  </div>
                  <div>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5 rounded bg-white/10 border-white/20 text-primary-500" defaultChecked />
                      <span className="text-white">Auto-advance rounds</span>
                    </label>
                  </div>
                  <div>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-5 h-5 rounded bg-white/10 border-white/20 text-primary-500" defaultChecked />
                      <span className="text-white">Enable random events</span>
                    </label>
                  </div>
                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <button className="btn-primary">Save Settings</button>
                    <button className="btn-secondary">Reset to Defaults</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

// Stat Card Component
function StatCard({
  label,
  value,
  icon: Icon,
  color,
}: {
  label: string;
  value: string;
  icon: typeof Users;
  color: 'primary' | 'accent' | 'warning' | 'danger' | 'success';
}) {
  const colorClasses = {
    primary: 'from-primary-500/20 to-primary-600/10 text-primary-400',
    accent: 'from-accent-500/20 to-accent-600/10 text-accent-400',
    warning: 'from-warning-500/20 to-warning-600/10 text-warning-400',
    danger: 'from-danger-500/20 to-danger-600/10 text-danger-400',
    success: 'from-success-500/20 to-success-600/10 text-success-400',
  };

  return (
    <div className="card-enterprise">
      <div className={cn('w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center mb-3', colorClasses[color])}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="text-xs text-slate-500 mb-1">{label}</div>
      <div className="text-2xl font-bold text-white">{value}</div>
    </div>
  );
}
