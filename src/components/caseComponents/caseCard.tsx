"use client";

import {
  Card as MaterialCard,
  CardBody,
  Typography,
} from "@/components/MtComponents";
import React from "react";
import { caseAttr } from "@/models/Case";
import { useRouter } from "next/navigation";

export default function Card({ userCase }: { userCase: caseAttr }): React.ReactNode {
  const router = useRouter();

  return (
    <MaterialCard
      className="w-96 border-[1.5px] border-[#363636] bg-[#18212f] duration-150 hover:-translate-y-2 cursor-pointer"
      onClick={() => router.push(`/casedashboard/${userCase.caseID}`)}
    >
      <CardBody>
        <Typography variant="h6" color="white">
          Case:
        </Typography>
        <Typography variant="h4" color="white" className="mb-2 text-[#c9d7e3]">
          {userCase?.caseID}
        </Typography>
        <div className="flex flex-col gap-2">
          <div className="block rounded-md bg-[#212a39] p-2">
            <Typography variant="h6" color="white" className="text-sm">
              Judges
            </Typography>
            <ul className="p-3">
              {userCase.judges.map((judge, index) => (
                <li key={index} className="text-white">
                  {judge}
                </li>
              ))}
            </ul>
          </div>
          <div className="block rounded-md bg-[#212a39] p-2">
            <Typography variant="h6" color="white" className="text-sm">
              Lawyers
            </Typography>
            <ul className="p-3">
              {userCase.lawyers.map((lawyer, index) => (
                <li key={index} className="text-white">
                  {lawyer}
                </li>
              ))}
            </ul>
          </div>
          <div className="block rounded-md bg-[#212a39] p-2">
            <Typography variant="h6" color="white" className="text-sm">
              Clients
            </Typography>
            <ul className="p-3">
              {userCase.clients.map((client, index) => (
                <li key={index} className="text-white">
                  {client}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardBody>
    </MaterialCard>
  );
}
