drop index if exists "auth"."refresh_tokens_token_idx";


drop policy "authenticated users can view scores" on "public"."scores";

create policy "authenticated users can view scores"
on "public"."scores"
as permissive
for select
to public
using (true);



