/**
 * State Persistence Store
 *
 * Provides storage for game state. Uses in-memory storage by default,
 * can be extended to use Supabase or other backends.
 */

import type { GameState } from '@/domain/engine/types';

// In-memory store for demo/development
const memoryStore = new Map<string, GameState>();

/**
 * Generate a store key from runId and teamId
 */
function getKey(runId: string, teamId: string): string {
  return `${runId}:${teamId}`;
}

/**
 * Save game state to storage
 */
export async function saveGameState(state: GameState): Promise<void> {
  const key = getKey(state.runId, state.teamId);
  memoryStore.set(key, JSON.parse(JSON.stringify(state)));
}

/**
 * Load game state from storage
 */
export async function loadGameState(
  runId: string,
  teamId: string
): Promise<GameState | null> {
  const key = getKey(runId, teamId);
  const state = memoryStore.get(key);
  return state ? JSON.parse(JSON.stringify(state)) : null;
}

/**
 * Delete game state from storage
 */
export async function deleteGameState(
  runId: string,
  teamId: string
): Promise<void> {
  const key = getKey(runId, teamId);
  memoryStore.delete(key);
}

/**
 * List all game states (for facilitator view)
 */
export async function listGameStates(): Promise<GameState[]> {
  return Array.from(memoryStore.values()).map(s => JSON.parse(JSON.stringify(s)));
}

/**
 * Check if a game state exists
 */
export async function gameStateExists(
  runId: string,
  teamId: string
): Promise<boolean> {
  const key = getKey(runId, teamId);
  return memoryStore.has(key);
}

/**
 * Get or create game state
 */
export async function getOrCreateGameState(
  runId: string,
  teamId: string,
  createFn: () => GameState
): Promise<GameState> {
  const existing = await loadGameState(runId, teamId);
  if (existing) {
    return existing;
  }

  const newState = createFn();
  await saveGameState(newState);
  return newState;
}
