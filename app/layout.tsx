"use client";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./globals.css";
import { Database } from "@/lib/types/database.types";
import { SupabaseContext } from "@/lib/supabaseContext";
import Link from "next/link";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const supabase = useContext(SupabaseContext);
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

  const signOut = () => {
    supabase.auth.signOut();
  };

  return (
    <html lang="en">
      <body>
        <Link href="/signup">Sign Up</Link>
        <Link href="/login">Sign In</Link>
        <button onClick={signOut}>Sign Out</button>
        <br />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
