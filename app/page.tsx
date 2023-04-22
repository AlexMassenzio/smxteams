import { Database } from "@/lib/database.types";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";

export default async function Posts() {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });
  const { data: scores } = await supabase.from("scores").select();
  return <pre>{JSON.stringify(scores, null, 2)}</pre>;
}
