// "use client"
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Card from "@/components/card";

import {
  Typography
} from "@/components/MtComponents"
import { caseAttr } from "@/models/Case";

export default async function Dashboard() {
  const session = await getServerSession()!;
  if (!session) {
    redirect("/");
  }
  console.log(session)
  // console.log(`${process.env.NEXTJS_URL}/api/cases?email=${session.user?.email}`)

  const cases: { roles: any, details: caseAttr[] } = await (await fetch(
    `${process.env.NEXTJS_URL}/api/cases?email=${session.user?.email}`
  )).json();


  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Typography >Active Cases</Typography>
      { (cases.details.length > 0) && <Card userCase={cases.details[0]} />}
    </div>
  );
};