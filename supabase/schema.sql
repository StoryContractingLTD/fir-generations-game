-- =====================================================================
-- The Generation Game: Supabase tables
-- Paste into the Supabase SQL Editor and press Run. Safe to run again.
-- Adds gg_ tables only. The Decision Game's tables are not touched.
-- =====================================================================

-- 1. The live game state: one row the director updates and phones read.
create table if not exists public.gg_state (
  id          int primary key default 1 check (id = 1),
  session_id  text not null,
  step        int  not null default 0,
  phase       text not null default 'join',
  q_index     int  not null default 0,
  updated_at  timestamptz not null default now()
);
insert into public.gg_state (id, session_id) values (1, 'first-session')
on conflict (id) do nothing;

-- 2. Pairs (teams). Filed under a session, so each cohort starts clean.
create table if not exists public.gg_teams (
  id          uuid primary key default gen_random_uuid(),
  session_id  text not null,
  name        text not null check (char_length(name) between 1 and 40),
  joined_at   timestamptz not null default now(),
  unique (session_id, name)
);

-- 3. Votes. One per pair per question, enforced by the database.
create table if not exists public.gg_votes (
  id          bigint generated always as identity primary key,
  session_id  text not null,
  team_id     uuid not null references public.gg_teams(id) on delete cascade,
  q           int  not null,
  choice      text not null check (choice in ('A','B','C','D')),
  created_at  timestamptz not null default now(),
  unique (team_id, q)
);
create index if not exists gg_teams_session on public.gg_teams (session_id);
create index if not exists gg_votes_session on public.gg_votes (session_id);

-- 4. Access for the public key used by the pages.
grant select, insert, update, delete on public.gg_state, public.gg_teams, public.gg_votes to anon, authenticated;

alter table public.gg_state enable row level security;
alter table public.gg_teams enable row level security;
alter table public.gg_votes enable row level security;

drop policy if exists gg_state_read   on public.gg_state;
drop policy if exists gg_state_write  on public.gg_state;
drop policy if exists gg_teams_read   on public.gg_teams;
drop policy if exists gg_teams_join   on public.gg_teams;
drop policy if exists gg_teams_clear  on public.gg_teams;
drop policy if exists gg_votes_read   on public.gg_votes;
drop policy if exists gg_votes_cast   on public.gg_votes;
drop policy if exists gg_votes_clear  on public.gg_votes;

-- Anyone can read the state; the director page updates it.
create policy gg_state_read  on public.gg_state for select to anon, authenticated using (true);
create policy gg_state_write on public.gg_state for update to anon, authenticated using (true) with check (id = 1);

-- Pairs can only join the live session.
create policy gg_teams_read on public.gg_teams for select to anon, authenticated using (true);
create policy gg_teams_join on public.gg_teams for insert to anon, authenticated
  with check (session_id = (select s.session_id from public.gg_state s where s.id = 1));

-- A vote is only accepted while voting is open, for the question on screen,
-- in the live session, from a pair in that session. Late votes are rejected.
create policy gg_votes_read on public.gg_votes for select to anon, authenticated using (true);
create policy gg_votes_cast on public.gg_votes for insert to anon, authenticated
  with check (
    exists (select 1 from public.gg_state s
            where s.id = 1 and s.phase = 'voting'
              and s.q_index = gg_votes.q
              and s.session_id = gg_votes.session_id)
    and exists (select 1 from public.gg_teams t
                where t.id = gg_votes.team_id
                  and t.session_id = gg_votes.session_id)
  );

-- "Clear old sessions" can only delete past sessions, never the live one.
create policy gg_teams_clear on public.gg_teams for delete to anon, authenticated
  using (session_id <> (select s.session_id from public.gg_state s where s.id = 1));
create policy gg_votes_clear on public.gg_votes for delete to anon, authenticated
  using (session_id <> (select s.session_id from public.gg_state s where s.id = 1));
