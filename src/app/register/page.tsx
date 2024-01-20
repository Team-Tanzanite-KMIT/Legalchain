"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

export default function Register() {
  const [error, setError] = useState("");
  const router = useRouter();

  const [role, setRole] = useState<"client" | "lawyer" | "judge" | undefined>(undefined);

  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleRoleChange = (e: any) => {
    setRole(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    } else if (!password || password.length < 4) {
      setError("Password is invalid");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          // role: role,
        }),
      });
      if (res.status === 400) {
        setError("This email is already registered");
      } else if (res.status === 200) {
        setError("");
        // history.push(`/app/dashboards/${role.toLowerCase()}Dashboard`);
        router.push(`/dashboard`);
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Loading...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="w-96 rounded bg-[#070705] p-8 shadow-md">
          <h1 className="mb-8 text-center text-4xl font-semibold text-white">Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="mb-4 w-full rounded border border-gray-300 px-3 py-2 text-black focus:border-blue-400 focus:text-black focus:outline-none"
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="mb-4 w-full rounded border border-gray-300 px-3 py-2 text-black focus:border-blue-400 focus:text-black focus:outline-none"
              placeholder="Password"
              required
            />

            {/* <select
              name="loginType"
              value={role}
              onChange={handleRoleChange}
              className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
            >
              <option value="" selected disabled hidden>
                -Select-
              </option>
              <option value="client">Client</option>
              <option value="lawyer">Lawyer</option>
              <option value="judge">Judge</option>
            </select> */}

            <button
              type="submit"
              className="w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
            >
              Register
            </button>

            <p className="mb-4 text-center text-[16px] text-red-600">{error && error}</p>
            <div className="mt-4 text-center text-gray-500">- OR -</div>
            <button
              onClick={() => signIn("google")}
              className="w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
            >
              Sign in with Google
            </button>
          </form>
          <div className="mt-4 text-center text-gray-500">- OR -</div>
          <Link
            className="mt-2 block text-center text-blue-500 hover:underline"
            href="/login"
          >
            Login with an existing account
          </Link>
        </div>
      </div>
    )
  );
}
