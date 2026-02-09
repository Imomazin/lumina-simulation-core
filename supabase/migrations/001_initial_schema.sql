-- Praxis Core Initial Schema

create extension if not exists "pgcrypto";

create table if not exists simulations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  created_at timestamp with time zone default now()
);

create table if not exists simulation_runs (
  id uuid primary key default gen_random_uuid(),
  simulation_id uuid references simulations(id) on delete cascade,
  state jsonb not null,
  created_at timestamp with time zone default now()
);

create index if not exists idx_simulation_runs_simulation_id
  on simulation_runs(simulation_id);
