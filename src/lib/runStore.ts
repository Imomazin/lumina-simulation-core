/**
 * Run Persistence Store
 *
 * Storage for simulation runs (facilitator-managed sessions).
 * Extends the game state store with run management.
 */

import type { Run } from '@/domain/engine/runs';
import type { GameState } from '@/domain/engine/types';

// In-memory stores
const runStore = new Map<string, Run>();
const teamGameStates = new Map<string, GameState>();

// =============================================================================
// RUN STORAGE
// =============================================================================

/**
 * Save a run to storage
 */
export async function saveRun(run: Run): Promise<void> {
  runStore.set(run.runId, JSON.parse(JSON.stringify(run)));
}

/**
 * Load a run from storage
 */
export async function loadRun(runId: string): Promise<Run | null> {
  const run = runStore.get(runId);
  return run ? JSON.parse(JSON.stringify(run)) : null;
}

/**
 * Delete a run from storage
 */
export async function deleteRun(runId: string): Promise<void> {
  runStore.delete(runId);
  // Also delete all team game states for this run
  const keysToDelete: string[] = [];
  teamGameStates.forEach((_, key) => {
    if (key.startsWith(`${runId}:`)) {
      keysToDelete.push(key);
    }
  });
  keysToDelete.forEach(key => teamGameStates.delete(key));
}

/**
 * List all runs
 */
export async function listRuns(): Promise<Run[]> {
  return Array.from(runStore.values())
    .map(r => JSON.parse(JSON.stringify(r)))
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

/**
 * Check if a run exists
 */
export async function runExists(runId: string): Promise<boolean> {
  return runStore.has(runId);
}

// =============================================================================
// TEAM GAME STATE STORAGE (within runs)
// =============================================================================

function getTeamStateKey(runId: string, teamId: string): string {
  return `${runId}:${teamId}`;
}

/**
 * Save a team's game state
 */
export async function saveTeamGameState(
  runId: string,
  teamId: string,
  state: GameState
): Promise<void> {
  const key = getTeamStateKey(runId, teamId);
  teamGameStates.set(key, JSON.parse(JSON.stringify(state)));
}

/**
 * Load a team's game state
 */
export async function loadTeamGameState(
  runId: string,
  teamId: string
): Promise<GameState | null> {
  const key = getTeamStateKey(runId, teamId);
  const state = teamGameStates.get(key);
  return state ? JSON.parse(JSON.stringify(state)) : null;
}

/**
 * Delete a team's game state
 */
export async function deleteTeamGameState(
  runId: string,
  teamId: string
): Promise<void> {
  const key = getTeamStateKey(runId, teamId);
  teamGameStates.delete(key);
}

/**
 * Get all team game states for a run
 */
export async function getRunTeamStates(runId: string): Promise<GameState[]> {
  const states: GameState[] = [];
  teamGameStates.forEach((state, key) => {
    if (key.startsWith(`${runId}:`)) {
      states.push(JSON.parse(JSON.stringify(state)));
    }
  });
  return states;
}

/**
 * Get team state with run context
 */
export async function getTeamStateWithRun(
  runId: string,
  teamId: string
): Promise<{ run: Run | null; gameState: GameState | null }> {
  const run = await loadRun(runId);
  const gameState = await loadTeamGameState(runId, teamId);
  return { run, gameState };
}

// =============================================================================
// AGGREGATE QUERIES
// =============================================================================

/**
 * Get run statistics
 */
export async function getRunStats(runId: string): Promise<{
  teamsCount: number;
  averageScore: number;
  highestScore: number;
  lowestScore: number;
  decisionsSubmitted: number;
  currentRound: number;
} | null> {
  const run = await loadRun(runId);
  if (!run) return null;

  const scores = run.teams.map(t => t.score).filter(s => s > 0);
  const submitted = run.teams.filter(t => t.decisionsSubmitted).length;

  return {
    teamsCount: run.teams.length,
    averageScore: scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0,
    highestScore: scores.length > 0 ? Math.max(...scores) : 0,
    lowestScore: scores.length > 0 ? Math.min(...scores) : 0,
    decisionsSubmitted: submitted,
    currentRound: run.currentRound,
  };
}

/**
 * Get comparative data for all teams in a run
 */
export async function getRunComparison(runId: string): Promise<{
  teams: Array<{
    teamId: string;
    teamName: string;
    score: number;
    revenue: number;
    brandTrust: number;
    cash: number;
    rank: number;
  }>;
} | null> {
  const run = await loadRun(runId);
  if (!run) return null;

  const teamData: Array<{
    teamId: string;
    teamName: string;
    score: number;
    revenue: number;
    brandTrust: number;
    cash: number;
    rank: number;
  }> = [];

  for (const team of run.teams) {
    const state = await loadTeamGameState(runId, team.teamId);
    if (state) {
      teamData.push({
        teamId: team.teamId,
        teamName: team.name,
        score: state.scorecard.totalScore,
        revenue: state.company.revenue,
        brandTrust: state.company.brandTrust,
        cash: state.company.cash,
        rank: 0,
      });
    }
  }

  // Calculate ranks
  teamData.sort((a, b) => b.score - a.score);
  teamData.forEach((t, i) => (t.rank = i + 1));

  return { teams: teamData };
}
