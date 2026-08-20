-- 饭搭子：打卡、评分与照片存储初始化
-- 可重复运行；在 Supabase Dashboard > SQL Editor > New query 中执行。

create extension if not exists pgcrypto;

create table if not exists public.checkins (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  food_name text not null,
  cuisine text not null,
  restaurant text,
  cafeteria text,
  rating smallint not null check (rating between 1 and 5),
  comment text check (char_length(comment) <= 500),
  price numeric(8,2) check (price is null or price >= 0),
  eaten_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.checkin_photos (
  id uuid primary key default gen_random_uuid(),
  checkin_id uuid not null references public.checkins(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  image_path text not null,
  created_at timestamptz not null default now()
);

create index if not exists checkins_user_created_idx
  on public.checkins (user_id, created_at desc);

create index if not exists checkin_photos_checkin_idx
  on public.checkin_photos (checkin_id);

alter table public.checkins enable row level security;
alter table public.checkin_photos enable row level security;

drop policy if exists "Users can read own checkins" on public.checkins;
create policy "Users can read own checkins"
  on public.checkins for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Users can create own checkins" on public.checkins;
create policy "Users can create own checkins"
  on public.checkins for insert to authenticated
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can update own checkins" on public.checkins;
create policy "Users can update own checkins"
  on public.checkins for update to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

drop policy if exists "Users can delete own checkins" on public.checkins;
create policy "Users can delete own checkins"
  on public.checkins for delete to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Users can read own photo rows" on public.checkin_photos;
create policy "Users can read own photo rows"
  on public.checkin_photos for select to authenticated
  using ((select auth.uid()) = user_id);

drop policy if exists "Users can create own photo rows" on public.checkin_photos;
create policy "Users can create own photo rows"
  on public.checkin_photos for insert to authenticated
  with check (
    (select auth.uid()) = user_id
    and exists (
      select 1 from public.checkins
      where checkins.id = checkin_id
        and checkins.user_id = (select auth.uid())
    )
  );

drop policy if exists "Users can delete own photo rows" on public.checkin_photos;
create policy "Users can delete own photo rows"
  on public.checkin_photos for delete to authenticated
  using ((select auth.uid()) = user_id);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'checkin-photos',
  'checkin-photos',
  false,
  5242880,
  array['image/jpeg','image/png','image/webp']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Users can read own checkin photos" on storage.objects;
create policy "Users can read own checkin photos"
  on storage.objects for select to authenticated
  using (
    bucket_id = 'checkin-photos'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

drop policy if exists "Users can upload own checkin photos" on storage.objects;
create policy "Users can upload own checkin photos"
  on storage.objects for insert to authenticated
  with check (
    bucket_id = 'checkin-photos'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

drop policy if exists "Users can delete own checkin photos" on storage.objects;
create policy "Users can delete own checkin photos"
  on storage.objects for delete to authenticated
  using (
    bucket_id = 'checkin-photos'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

grant select, insert, update, delete on public.checkins to authenticated;
grant select, insert, delete on public.checkin_photos to authenticated;