"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSupabase } from "../supabaseProvider";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const { supabase } = useSupabase();
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
