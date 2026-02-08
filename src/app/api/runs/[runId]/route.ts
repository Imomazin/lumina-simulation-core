/**
 * GET /api/runs/[runId] - Get run details
 * PATCH /api/runs/[runId] - Update run (start, pause, resume, advance)
 * DELETE /api/runs/[runId] - Delete run
 */

import { NextRequest, NextResponse } from 'next/server';
import {
  startRun,
  pauseRun,
  resumeRun,
  advanceRunRound,
  updateTeamScore,
} from '@/domain/engine/runs';
import { advanceRound as advanceGameRound } from '@/domain/engine';
import {
  loadRun,
  saveRun,
  deleteRun,
  getRunStats,
  getRunComparison,
  loadTeamGameState,
  saveTeamGameState,
} from '@/lib/runStore';

interface RouteParams {
  params: Promise<{ runId: string }>;
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const { runId } = await params;
    const run = await loadRun(runId);

    if (!run) {
      return NextResponse.json(
        { error: 'Run not found' },
        { status: 404 }
      );
    }

    const stats = await getRunStats(runId);
    const comparison = await getRunComparison(runId);

    return NextResponse.json({
      run,
      stats,
      comparison,
    });
  } catch (error) {
    console.error('Error getting run:', error);
    return NextResponse.json(
      { error: 'Failed to get run' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest, { params }: RouteParams) {
  try {
    const { runId } = await params;
    const body = await request.json();
    const { action } = body as { action: string };

    let run = await loadRun(runId);
    if (!run) {
      return NextResponse.json(
        { error: 'Run not found' },
        { status: 404 }
      );
    }

    switch (action) {
      case 'start':
        if (run.teams.length === 0) {
          return NextResponse.json(
            { error: 'Cannot start run without teams' },
            { status: 400 }
          );
        }
        run = startRun(run);
        break;

      case 'pause':
        run = pauseRun(run);
        break;

      case 'resume':
        run = resumeRun(run);
        break;

      case 'advance':
        // Advance all team game states
        for (const team of run.teams) {
          const gameState = await loadTeamGameState(runId, team.teamId);
          if (gameState) {
            const newState = advanceGameRound(gameState);
            await saveTeamGameState(runId, team.teamId, newState);
            run = updateTeamScore(run, team.teamId, newState.scorecard.totalScore);
          }
        }
        run = advanceRunRound(run);
        break;

      default:
        return NextResponse.json(
          { error: `Unknown action: ${action}` },
          { status: 400 }
        );
    }

    await saveRun(run);
    return NextResponse.json(run);
  } catch (error) {
    console.error('Error updating run:', error);
    return NextResponse.json(
      { error: 'Failed to update run' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const { runId } = await params;
    const run = await loadRun(runId);

    if (!run) {
      return NextResponse.json(
        { error: 'Run not found' },
        { status: 404 }
      );
    }

    await deleteRun(runId);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting run:', error);
    return NextResponse.json(
      { error: 'Failed to delete run' },
      { status: 500 }
    );
  }
}
