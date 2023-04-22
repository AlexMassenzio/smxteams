create table "public"."scores" (
    "id" uuid not null default uuid_generate_v4(),
    "created_at" timestamp with time zone not null default now(),
    "player_1" text,
    "player_2" text,
    "song_id" text not null default ''::text,
    "score" bigint,
    "white_perfect" smallint not null default '0'::smallint,
    "yellow_perfect" smallint not null default '0'::smallint,
    "early" smallint not null default '0'::smallint,
    "late" smallint not null default '0'::smallint,
    "miss" smallint not null default '0'::smallint,
    "author" uuid,
    "approved" boolean not null default true
);


alter table "public"."scores" enable row level security;

CREATE UNIQUE INDEX scores_pkey ON public.scores USING btree (id);

alter table "public"."scores" add constraint "scores_pkey" PRIMARY KEY using index "scores_pkey";

alter table "public"."scores" add constraint "scores_author_fkey" FOREIGN KEY (author) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."scores" validate constraint "scores_author_fkey";

create policy "anyone can view scores"
on "public"."scores"
as permissive
for select
to public
using (true);



