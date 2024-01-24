// "use client"
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import CardGrid from "@/components/caseComponents/caseCardGrid";

import { Typography } from "@/components/MtComponents";
import { caseAttr } from "@/models/Case";

export default async function Dashboard() {
  const session = await getServerSession()!;
  if (!session) {
    redirect("/");
  }
  console.log(session);
  // console.log(`${process.env.NEXTJS_URL}/api/cases?email=${session.user?.email}`)

  const cases: { roles: any; details: caseAttr[] } = await (
    await fetch(`${process.env.NEXTJS_URL}/api/cases?email=${session.user?.email}`)
  ).json();

  for (let i = 0; i < 5; i++) {
    cases.details.push(cases.details[0]);
  }

  var headColor = "#c9d7e3";
  return (
    <div className="flex min-h-screen w-max flex-col items-center justify-between gap-5 px-24 py-8">
      <Typography variant="h2" className={`text-[${headColor}]`}>
        Active Cases
      </Typography>

      {/* { (cases.details.length > 0) && <Card userCase={cases.details[0]} />} */}

      <CardGrid allCases={cases.details} />
    </div>
  );
}
