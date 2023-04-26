drop policy "anyone can view scores" on "public"."scores";

create policy "authenticated users can post scores"
on "public"."scores"
as permissive
for insert
to authenticated
with check (true);


create policy "authenticated users can view scores"
on "public"."scores"
as permissive
for select
to authenticated
using (true);



