import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ekrepdnufqnaruxpcsvd.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
let supabase: SupabaseClient<any, "public", any> | undefined = undefined;

if (supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
} else {
  console.error(
    "Could not find environment variable SUPABASE_KEY. Was it added?"
  );
}

export default supabase;
