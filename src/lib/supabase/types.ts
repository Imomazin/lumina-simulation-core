/**
 * Supabase Database Types
 *
 * TypeScript types for the Supabase database schema.
 * These types are used by the Supabase client for type-safe queries.
 */

import type { GameState } from '@/domain/engine/types';
import type { Run } from '@/domain/engine/runs';

// =============================================================================
// JSON TYPE FOR SUPABASE
// =============================================================================

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

// =============================================================================
// DATABASE SCHEMA TYPES
// =============================================================================

export interface Database {
  public: {
    Tables: {
      game_states: {
        Row: {
          id: string;
          run_id: string;
          team_id: string;
          state: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          run_id: string;
          team_id: string;
          state: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          run_id?: string;
          team_id?: string;
          state?: Json;
          created_at?: string;
          updated_at?: string;
        };
      };
      runs: {
        Row: {
          id: string;
          run_id: string;
          data: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          run_id: string;
          data: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          run_id?: string;
          data?: Json;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}

// =============================================================================
// HELPER TYPES
// =============================================================================

export type GameStateRow = Database['public']['Tables']['game_states']['Row'];
export type GameStateInsert = Database['public']['Tables']['game_states']['Insert'];
export type GameStateUpdate = Database['public']['Tables']['game_states']['Update'];

export type RunRow = Database['public']['Tables']['runs']['Row'];
export type RunInsert = Database['public']['Tables']['runs']['Insert'];
export type RunUpdate = Database['public']['Tables']['runs']['Update'];

// =============================================================================
// TYPE CASTING HELPERS
// =============================================================================

/**
 * Cast a GameState to Json for storage
 */
export function gameStateToJson(state: GameState): Json {
  return state as unknown as Json;
}

/**
 * Cast Json to GameState for retrieval
 */
export function jsonToGameState(json: Json): GameState {
  return json as unknown as GameState;
}

/**
 * Cast a Run to Json for storage
 */
export function runToJson(run: Run): Json {
  return run as unknown as Json;
}

/**
 * Cast Json to Run for retrieval
 */
export function jsonToRun(json: Json): Run {
  return json as unknown as Run;
}
