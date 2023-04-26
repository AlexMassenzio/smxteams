import { Database } from "@/lib/types/database.types";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";
import Score from "./score";
import NewScoreForm from "@/lib/components/newScoreForm";

export default async function Posts() {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });
  const { data: scores } = await supabase.from("scores").select();
  const scoreItems = scores?.map((scoreData) => {
    return <Score scoreData={scoreData} />;
  });
  return (
    <div>
      <NewScoreForm />
      {scoreItems}
    </div>
  );
}
