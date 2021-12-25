-- create table
create table public.signups (
    id uuid references auth.users not null,
    position_number serial,
    email text not null,
    created_at timestamp with time zone default now(),

    primary key (id)
);

alter table public.signups enable row level security;

create policy "Signups are viewable by the users who created them."
on signups for select
using ( auth.uid() = id );


-- inserts a row into public.users
create function public.handle_new_verified_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.signups (id, email)
  values (new.id, new.email);
  return new;
end;
$$;


-- trigger the function every time a user's email is confirmed
create trigger on_auth_user_email_confirmed
after update of email_confirmed_at on auth.users
for each row
when (old.email_confirmed_at is null and new.email_confirmed_at is not null)
  execute procedure public.handle_new_verified_user();
