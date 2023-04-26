import { Database } from "@/lib/types/database.types";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { headers, cookies } from "next/headers";
import Score from "./score";

export default async function Posts() {
  const supabase = createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });
  const { data: scores } = await supabase.from("scores").select();
  let rowNumber = 0;
  const scoreItems = scores?.map((scoreData) => {
    return (
      <Score key={scoreData.id} scoreData={scoreData} rowNumber={++rowNumber} />
    );
  });

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th></th>
              <th>Song</th>
              <th>Player 1</th>
              <th>Player 2</th>
              <th>Score</th>
              <th>Submitted On</th>
            </tr>
          </thead>
          <tbody>{scoreItems}</tbody>
        </table>
      </div>
    </div>
  );
}
