"use client";
import React from "react";
import { getSession } from "next-auth/react";

export default async function Dashboard() {
  const session = await getSession();
  // if (!session) {
  //   redirect("/");
  // }
  console.log(session)
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      Dashboard
      
    </div>
  );
};