-- Waitlist email capture for pipeworks.io coming-soon page

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamptz default now() not null
);

-- RLS: insert-only for anonymous users, no read/update/delete from client
alter table public.waitlist enable row level security;

create policy "Anyone can insert into waitlist"
  on public.waitlist
  for insert
  to anon
  with check (true);

-- No select/update/delete policies = denied by default
