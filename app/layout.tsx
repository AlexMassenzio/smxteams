"use client";
import Navbar from "@/lib/components/navbar";
import "./globals.css";
import SupabaseProvider from "./supabaseProvider";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" data-theme="smxteams">
      <body>
        <SupabaseProvider>
          <Navbar />
          {children}
        </SupabaseProvider>
      </body>
    </html>
  );
};

export default RootLayout;
