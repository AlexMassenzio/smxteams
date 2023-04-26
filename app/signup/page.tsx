"use client";
import { useContext, useState } from "react";
import { SupabaseContext } from "@/lib/supabaseContext";
import { useRouter } from "next/navigation";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const supabase = useContext(SupabaseContext);
  const signUp = () => {
    supabase.auth.signUp({
      email: email,
      password: password,
    });
    router.push("/login");
  };

  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="text-black"
      />
      <label htmlFor="password">Password:</label>
      <input
        type="text"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="text-black"
      />
      <button type="button" onClick={signUp}>
        Sign Up
      </button>
    </form>
  );
};

export default Page;
