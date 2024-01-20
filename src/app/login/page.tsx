"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 4) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/dashboard");
    } else {
      setError("");
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Welcome!!</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="w-96 rounded bg-[#212121] p-8 shadow-md">
          <h1 className="mb-8 text-center text-4xl font-semibold text-white">Login</h1>
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
            <button
              type="submit"
              className="w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
            >
              {" "}
              Sign In
            </button>
            <p className="mb-4 text-[16px] text-red-600">{error && error}</p>
          </form>

          <div className="mt-4 text-center text-gray-500">- OR -</div>
          <Link
            className="mt-2 block text-center text-blue-500 hover:underline"
            href="/register"
          >
            Register Here
          </Link>
        </div>
      </div>
    )
  );
}
