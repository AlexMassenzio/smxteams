import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";

export default async function Posts() {
  const supabase = createServerComponentSupabaseClient({
    headers,
    cookies,
  });
  const { data: scores } = await supabase.from("scores").select();
  return <pre>{JSON.stringify(scores, null, 2)}</pre>;
}
