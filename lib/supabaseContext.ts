import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { createContext } from "react";
import { Database } from "./types/database.types";

export const SupabaseContext = createContext(
  createBrowserSupabaseClient<Database>()
);
