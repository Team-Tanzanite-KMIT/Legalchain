"use client";

import React from "react";
import Link from "next/link";
import { useCookies } from "react-cookie";

export default function Navbar() {
  const [cookie, , deleteCookie] = useCookies(["token"]);

  return (
    <div>
      <ul className="flex justify-between m-10 items-center">
        <div>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
        </div>
        <div className="flex gap-10 items-center">
          {!cookie.token ? (
            <>
              <Link href="/login">
                <li>Login</li>
              </Link>
              <Link href="/register">
                <li>Register</li>
              </Link>
            </>
          ) : (
            <>
              {"Logged In"}
              <li>
                <button
                  onClick={() => {
                    deleteCookie("token")
                  }}
                  className="p-2 px-5 -mt-1 bg-blue-800 rounded-full text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};


