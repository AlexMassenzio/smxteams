"use client";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [supabase] = useState(() => createBrowserSupabaseClient());
  const router = useRouter();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      router.refresh();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, router]);

  const signUp = () => {
    supabase.auth.signUp({
      email: "dev@alexmassenzio.com",
      password: "passw0rd",
    });
  };

  const signIn = () => {
    supabase.auth.signInWithPassword({
      email: "dev@alexmassenzio.com",
      password: "passw0rd",
    });
  };

  const signOut = () => {
    supabase.auth.signOut();
  };

  return (
    <html lang="en">
      <body>
        <button onClick={signUp}>Sign Up</button>
        <button onClick={signIn}>Sign In</button>
        <button onClick={signOut}>Sign Out</button>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
