'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
  Download,
  Plus,
  AlertTriangle,
  Users,
  Settings,
  Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { GameState, EventType } from '@/domain/engine/types';

const EVENT_TYPES: { value: EventType; label: string }[] = [
  { value: 'regulator_inquiry', label: 'Regulatory Inquiry' },
  { value: 'competitor_price_war', label: 'Competitor Price War' },
  { value: 'data_incident_rumor', label: 'Data Incident Rumor' },
  { value: 'supply_disruption', label: 'Supply Disruption' },
  { value: 'viral_positive_review', label: 'Viral Positive Review' },
  { value: 'enterprise_rfp', label: 'Enterprise RFP' },
  { value: 'macro_downturn', label: 'Macro Downturn' },
];

export default function FacilitatorPage() {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [newRunId, setNewRunId] = useState('');
  const [newSeed, setNewSeed] = useState('');
  const [injectEvent, setInjectEvent] = useState<EventType>('regulator_inquiry');
  const [eventSeverity, setEventSeverity] = useState<'low' | 'medium' | 'high'>('medium');

  const loadGame = async (runId: string, teamId: string = 'team_default') => {
    setIsLoading(true);
    try {
      const res = await fetch(`/api/state?runId=${runId}&teamId=${teamId}`);
      const state = await res.json();
      setGameState(state);
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };

  const createNewRun = async () => {
    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      if (newRunId) params.set('runId', newRunId);
      if (newSeed) params.set('seed', newSeed);

      const res = await fetch(`/api/state?${params.toString()}`);
      const state = await res.json();
      setGameState(state);
      setNewRunId('');
      setNewSeed('');
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };

  const advanceRound = async () => {
    if (!gameState) return;
    setIsLoading(true);
    try {
      const res = await fetch('/api/advance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ runId: gameState.runId, teamId: gameState.teamId }),
      });
      const state = await res.json();
      setGameState(state);
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };

  const resetGame = async () => {
    if (!gameState) return;
    if (!confirm('Are you sure you want to reset? All progress will be lost.')) return;
    setIsLoading(true);
    try {
      const res = await fetch('/api/reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ runId: gameState.runId, teamId: gameState.teamId }),
      });
      const state = await res.json();
      setGameState(state);
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };

  const exportData = async (format: 'json' | 'csv' | 'md') => {
    if (!gameState) return;
    window.open(`/api/export?runId=${gameState.runId}&teamId=${gameState.teamId}&format=${format}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-navy-500 hover:text-navy-700">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-accent-600 to-accent-800 rounded-lg" />
                <span className="font-semibold text-navy-900">Facilitator Console</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Panel - Run Management */}
          <div className="space-y-6">
            {/* Create New Run */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-semibold text-navy-900 mb-4 flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Create New Run
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1">Run ID (optional)</label>
                  <input
                    type="text"
                    value={newRunId}
                    onChange={(e) => setNewRunId(e.target.value)}
                    placeholder="Auto-generated if empty"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-navy-700 mb-1">Seed (optional)</label>
                  <input
                    type="number"
                    value={newSeed}
                    onChange={(e) => setNewSeed(e.target.value)}
                    placeholder="Random if empty"
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent-500"
                  />
                </div>
                <button
                  onClick={createNewRun}
                  disabled={isLoading}
                  className="w-full px-4 py-2 bg-accent-600 text-white rounded-lg hover:bg-accent-700 disabled:opacity-50"
                >
                  {isLoading ? 'Creating...' : 'Create Run'}
                </button>
              </div>
            </div>

            {/* Current Run Info */}
            {gameState && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="font-semibold text-navy-900 mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Current Run
                </h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-navy-500">Run ID</span>
                    <span className="font-mono text-xs">{gameState.runId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-500">Team ID</span>
                    <span className="font-mono text-xs">{gameState.teamId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-500">Seed</span>
                    <span className="font-mono">{gameState.seed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-500">Round</span>
                    <span className="font-semibold">{gameState.round} / {gameState.maxRounds}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-500">Phase</span>
                    <span className={cn(
                      'px-2 py-0.5 rounded text-xs font-medium',
                      gameState.phase === 'decisions_open' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                    )}>
                      {gameState.phase}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Run Controls */}
            {gameState && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="font-semibold text-navy-900 mb-4">Run Controls</h2>
                <div className="space-y-3">
                  <button
                    onClick={advanceRound}
                    disabled={isLoading || gameState.round >= gameState.maxRounds}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 disabled:opacity-50"
                  >
                    <Play className="w-4 h-4" />
                    Advance Quarter
                  </button>
                  <button
                    onClick={resetGame}
                    disabled={isLoading}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset Run
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Middle Panel - State Overview */}
          <div className="space-y-6">
            {gameState ? (
              <>
                {/* Key Metrics */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h2 className="font-semibold text-navy-900 mb-4">Key Metrics</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <MetricCard label="Cash" value={`$${gameState.company.cash.toFixed(1)}M`} />
                    <MetricCard label="Revenue" value={`$${gameState.company.revenue.toFixed(1)}M`} />
                    <MetricCard label="Score" value={`${gameState.scorecard.totalScore}/500`} />
                    <MetricCard label="Trust" value={`${gameState.company.brandTrust}%`} />
                  </div>
                </div>

                {/* Decisions Status */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h2 className="font-semibold text-navy-900 mb-4">Decisions (Round {gameState.round})</h2>
                  <div className="space-y-2">
                    {['strategy', 'marketing', 'sales', 'operations', 'rnd', 'legal', 'gm'].map((role) => {
                      const hasDecision = gameState.decisions[gameState.round - 1]?.[role as keyof typeof gameState.decisions[0]];
                      return (
                        <div key={role} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                          <span className="text-sm capitalize">{role}</span>
                          <span className={cn(
                            'text-xs px-2 py-1 rounded',
                            hasDecision ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'
                          )}>
                            {hasDecision ? 'Submitted' : 'Pending'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Events */}
                <div className="bg-white rounded-xl border border-gray-200 p-6">
                  <h2 className="font-semibold text-navy-900 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Events ({gameState.events.length})
                  </h2>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {gameState.events.length === 0 ? (
                      <p className="text-sm text-navy-500">No events yet</p>
                    ) : (
                      gameState.events.map((event) => (
                        <div key={event.id} className="p-2 bg-gray-50 rounded-lg">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-navy-400">Q{event.round}</span>
                            <span className={cn(
                              'text-xs px-1.5 py-0.5 rounded',
                              event.severity === 'high' ? 'bg-red-100 text-red-700' :
                              event.severity === 'medium' ? 'bg-amber-100 text-amber-700' :
                              'bg-gray-100 text-gray-700'
                            )}>
                              {event.severity}
                            </span>
                          </div>
                          <p className="text-sm font-medium text-navy-900">{event.name}</p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                <Users className="w-12 h-12 text-navy-300 mx-auto mb-4" />
                <h3 className="font-semibold text-navy-900 mb-2">No Run Selected</h3>
                <p className="text-sm text-navy-500">Create a new run or load an existing one</p>
              </div>
            )}
          </div>

          {/* Right Panel - Actions & Export */}
          <div className="space-y-6">
            {/* Inject Event */}
            {gameState && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="font-semibold text-navy-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Inject Event
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">Event Type</label>
                    <select
                      value={injectEvent}
                      onChange={(e) => setInjectEvent(e.target.value as EventType)}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                    >
                      {EVENT_TYPES.map((type) => (
                        <option key={type.value} value={type.value}>{type.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-1">Severity</label>
                    <select
                      value={eventSeverity}
                      onChange={(e) => setEventSeverity(e.target.value as 'low' | 'medium' | 'high')}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                  <button
                    disabled={isLoading}
                    className="w-full px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 disabled:opacity-50"
                  >
                    Inject Event
                  </button>
                  <p className="text-xs text-navy-500">
                    Event will be applied on next quarter advance
                  </p>
                </div>
              </div>
            )}

            {/* Export */}
            {gameState && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="font-semibold text-navy-900 mb-4 flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Export Data
                </h2>
                <div className="space-y-2">
                  <button
                    onClick={() => exportData('json')}
                    className="w-full px-4 py-2 bg-navy-100 text-navy-700 rounded-lg hover:bg-navy-200"
                  >
                    Export JSON
                  </button>
                  <button
                    onClick={() => exportData('csv')}
                    className="w-full px-4 py-2 bg-navy-100 text-navy-700 rounded-lg hover:bg-navy-200"
                  >
                    Export CSV
                  </button>
                  <button
                    onClick={() => exportData('md')}
                    className="w-full px-4 py-2 bg-navy-100 text-navy-700 rounded-lg hover:bg-navy-200"
                  >
                    Export Board Memo
                  </button>
                </div>
              </div>
            )}

            {/* Links */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="font-semibold text-navy-900 mb-4">Quick Links</h2>
              <div className="space-y-2">
                <Link
                  href="/simulation"
                  className="block px-4 py-2 text-center bg-accent-50 text-accent-700 rounded-lg hover:bg-accent-100"
                >
                  Open Simulation View
                </Link>
                <Link
                  href="/debrief"
                  className="block px-4 py-2 text-center bg-accent-50 text-accent-700 rounded-lg hover:bg-accent-100"
                >
                  Open Debrief View
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-3 bg-gray-50 rounded-lg">
      <p className="text-xs text-navy-500">{label}</p>
      <p className="text-lg font-semibold text-navy-900">{value}</p>
    </div>
  );
}
