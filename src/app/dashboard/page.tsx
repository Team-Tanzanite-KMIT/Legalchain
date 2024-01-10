import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

"use client"
import {
  Typography
} from "@material-tailwind/react"

export default async function Dashboard() {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }
  console.log(session)
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Typography >Active Cases</Typography>
      {/* { console.log() } */}
    </div>
  );
};