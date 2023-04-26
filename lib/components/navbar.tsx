"use client";
import Link from "next/link";
import { useSupabase } from "@/app/supabaseProvider";
import { User, useUser } from "@supabase/auth-helpers-react";
import { useState } from "react";

const Navbar = () => {
  const { supabase } = useSupabase();
  const [user, setUser] = useState<User | null>(null);

  supabase.auth.getUser().then(({ data }) => {
    setUser(data.user);
    console.log(data);
  });

  const signOut = () => {
    supabase.auth.signOut().then(() => setUser(null));
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/submit">Submit a Score</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost normal-case text-xl">
          SMXTeams
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/submit">Submit a Score</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <Link href={"/login"} className="btn">
            Sign In
          </Link>
        ) : (
          <button className="btn" onClick={signOut}>
            Sign Out
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
