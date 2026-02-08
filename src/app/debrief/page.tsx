'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Download,
  TrendingUp,
  TrendingDown,
  Target,
  AlertTriangle,
  CheckCircle,
  FileText,
  BarChart3,
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts';
import { cn } from '@/lib/utils';
import type { GameState } from '@/domain/engine/types';

export default function DebriefPage() {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadState = async () => {
      try {
        const res = await fetch('/api/state');
        const state = await res.json();
        setGameState(state);
      } catch (err) {
        console.error(err);
      }
      setIsLoading(false);
    };
    loadState();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-accent-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!gameState) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="w-12 h-12 text-amber-500 mx-auto mb-4" />
          <p className="text-navy-600">No simulation data found</p>
          <Link href="/simulation" className="text-accent-600 hover:underline mt-2 inline-block">
            Start a simulation
          </Link>
        </div>
      </div>
    );
  }

  // Generate chart data from game history (simplified)
  const chartData = Array.from({ length: gameState.round }, (_, i) => ({
    quarter: `Q${i + 1}`,
    score: Math.round(gameState.scorecard.totalScore * (0.7 + (i / gameState.round) * 0.3) + (Math.random() - 0.5) * 30),
    revenue: +(gameState.company.revenue * (0.8 + (i / gameState.round) * 0.3)).toFixed(1),
    trust: Math.round(gameState.company.brandTrust * (0.9 + (i / gameState.round) * 0.15)),
  }));

  const scoreData = [
    { name: 'Financial', score: gameState.scorecard.financialHealth },
    { name: 'Growth', score: gameState.scorecard.growth },
    { name: 'Trust', score: gameState.scorecard.trust },
    { name: 'Resilience', score: gameState.scorecard.resilience },
    { name: 'Execution', score: gameState.scorecard.execution },
  ];

  const exportMemo = () => {
    window.open(`/api/export?runId=${gameState.runId}&teamId=${gameState.teamId}&format=md`, '_blank');
  };

  const exportJSON = () => {
    window.open(`/api/export?runId=${gameState.runId}&teamId=${gameState.teamId}&format=json`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-navy-500 hover:text-navy-700">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-accent-600 to-accent-800 rounded-lg" />
                <span className="font-semibold text-navy-900">Simulation Debrief</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={exportMemo}
                className="inline-flex items-center gap-2 px-4 py-2 text-navy-600 hover:text-navy-800"
              >
                <FileText className="w-4 h-4" />
                Export Memo
              </button>
              <button
                onClick={exportJSON}
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent-600 text-white rounded-lg hover:bg-accent-700"
              >
                <Download className="w-4 h-4" />
                Export Data
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Header */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-navy-900 mb-2">
                Praxis Assist - Q{gameState.round} Summary
              </h1>
              <p className="text-navy-500">
                Run ID: {gameState.runId} | Seed: {gameState.seed}
              </p>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold text-navy-900">{gameState.scorecard.totalScore}</div>
              <div className="text-navy-500">/ 500 points</div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-5 gap-6">
            {scoreData.map((item) => (
              <div key={item.name} className="text-center">
                <div className={cn(
                  'text-3xl font-bold',
                  item.score >= 70 ? 'text-emerald-600' :
                  item.score >= 40 ? 'text-amber-600' : 'text-red-600'
                )}>
                  {item.score}
                </div>
                <div className="text-sm text-navy-500 mt-1">{item.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Performance Over Time */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="font-semibold text-navy-900 mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Performance Over Time
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="quarter" tick={{ fontSize: 12 }} stroke="#64748b" />
                <YAxis tick={{ fontSize: 12 }} stroke="#64748b" />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#3b82f6" strokeWidth={2} name="Score" />
                <Line type="monotone" dataKey="trust" stroke="#10b981" strokeWidth={2} name="Trust" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Scorecard Breakdown */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="font-semibold text-navy-900 mb-6 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Scorecard Breakdown
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={scoreData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} stroke="#64748b" />
                <YAxis dataKey="name" type="category" tick={{ fontSize: 12 }} stroke="#64748b" width={80} />
                <Tooltip />
                <Bar dataKey="score" fill="#3b82f6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Board Confidence */}
        <div className="bg-gradient-to-r from-navy-800 to-navy-900 rounded-xl p-8 mb-8 text-white">
          <h2 className="text-xl font-semibold mb-4">Board Confidence Assessment</h2>
          <p className="text-lg text-navy-100">{gameState.scorecard.boardConfidence}</p>
          <div className="mt-6 pt-6 border-t border-navy-700">
            <h3 className="font-medium mb-2">Regulatory Status</h3>
            <p className="text-navy-200">{gameState.scorecard.regulatoryHeat}</p>
          </div>
        </div>

        {/* Final State */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <FinalMetric
            label="Final Cash"
            value={`$${gameState.company.cash.toFixed(1)}M`}
            trend={gameState.company.cash > 30 ? 'up' : 'down'}
          />
          <FinalMetric
            label="Revenue/Quarter"
            value={`$${gameState.company.revenue.toFixed(1)}M`}
            trend={gameState.company.revenue > 8 ? 'up' : 'down'}
          />
          <FinalMetric
            label="Brand Trust"
            value={`${gameState.company.brandTrust}%`}
            trend={gameState.company.brandTrust > 60 ? 'up' : 'down'}
          />
          <FinalMetric
            label="Team Morale"
            value={`${gameState.company.morale}%`}
            trend={gameState.company.morale > 60 ? 'up' : 'down'}
          />
        </div>

        {/* Events Summary */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="font-semibold text-navy-900 mb-6 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Events Summary ({gameState.events.length} events)
          </h2>
          {gameState.events.length === 0 ? (
            <p className="text-navy-500">No events occurred during this simulation.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {gameState.events.map((event) => (
                <div
                  key={event.id}
                  className={cn(
                    'p-4 rounded-lg border-l-4',
                    event.type.includes('positive') || event.type.includes('rfp')
                      ? 'bg-emerald-50 border-emerald-500'
                      : 'bg-red-50 border-red-500'
                  )}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-medium text-navy-500">Q{event.round}</span>
                    <span className={cn(
                      'text-xs px-2 py-0.5 rounded',
                      event.severity === 'high' ? 'bg-red-100 text-red-700' :
                      event.severity === 'medium' ? 'bg-amber-100 text-amber-700' :
                      'bg-gray-100 text-gray-700'
                    )}>
                      {event.severity}
                    </span>
                  </div>
                  <h4 className="font-medium text-navy-900">{event.name}</h4>
                  <p className="text-sm text-navy-600 mt-1">{event.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Lessons Learned */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
          <h2 className="font-semibold text-navy-900 mb-6 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Key Takeaways
          </h2>
          <div className="space-y-4">
            {generateLessons(gameState).map((lesson, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className={cn(
                  'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0',
                  lesson.type === 'success' ? 'bg-emerald-100 text-emerald-600' :
                  lesson.type === 'warning' ? 'bg-amber-100 text-amber-600' :
                  'bg-blue-100 text-blue-600'
                )}>
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-medium text-navy-900">{lesson.title}</h4>
                  <p className="text-sm text-navy-600 mt-1">{lesson.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Discussion Prompts */}
        <div className="bg-accent-50 rounded-xl p-6">
          <h2 className="font-semibold text-navy-900 mb-4">Discussion Prompts for Faculty</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-accent-600">•</span>
              <span className="text-navy-700">How did the team balance short-term growth against long-term trust building?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-600">•</span>
              <span className="text-navy-700">What trade-offs emerged between different functional priorities?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-600">•</span>
              <span className="text-navy-700">How did the team respond to unexpected events? Was their crisis response effective?</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent-600">•</span>
              <span className="text-navy-700">What would they do differently if they could replay the simulation?</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function FinalMetric({
  label,
  value,
  trend,
}: {
  label: string;
  value: string;
  trend: 'up' | 'down';
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-navy-500">{label}</span>
        {trend === 'up' ? (
          <TrendingUp className="w-5 h-5 text-emerald-500" />
        ) : (
          <TrendingDown className="w-5 h-5 text-red-500" />
        )}
      </div>
      <div className="text-2xl font-bold text-navy-900">{value}</div>
    </div>
  );
}

function generateLessons(state: GameState): { title: string; description: string; type: 'success' | 'warning' | 'info' }[] {
  const lessons: { title: string; description: string; type: 'success' | 'warning' | 'info' }[] = [];

  if (state.company.brandTrust > 70) {
    lessons.push({
      title: 'Trust as a Competitive Advantage',
      description: 'High brand trust demonstrates that responsible practices can coexist with growth. This positions the company well for long-term success.',
      type: 'success',
    });
  } else if (state.company.brandTrust < 50) {
    lessons.push({
      title: 'Trust Deficit',
      description: 'Low brand trust creates headwinds for sales and increases vulnerability to negative events. Consider prioritizing trust-building initiatives.',
      type: 'warning',
    });
  }

  if (state.company.techDebt > 50) {
    lessons.push({
      title: 'Technical Debt Accumulation',
      description: 'High technical debt slows innovation and increases operational risk. Regular investment in reliability and architecture pays dividends.',
      type: 'warning',
    });
  }

  if (state.risk.regulatory > 50) {
    lessons.push({
      title: 'Regulatory Exposure',
      description: 'Elevated regulatory risk requires attention. Proactive compliance investment is typically cheaper than reactive enforcement response.',
      type: 'warning',
    });
  }

  if (state.company.profit > 0 && state.company.cash > 30) {
    lessons.push({
      title: 'Financial Sustainability',
      description: 'Profitability with healthy cash reserves provides strategic flexibility and resilience against market shocks.',
      type: 'success',
    });
  }

  lessons.push({
    title: 'Cross-Functional Alignment',
    description: 'Success in complex organizations requires coordination across functions. Misalignment creates friction and suboptimal outcomes.',
    type: 'info',
  });

  return lessons;
}
