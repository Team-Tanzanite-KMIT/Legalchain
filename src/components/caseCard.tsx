'use client';

import {
  Card as MaterialCard,
  // CardHeader,
  CardBody,
  Typography,
} from '@/components/MtComponents';
import React from 'react';
import { caseAttr } from '@/models/Case';
import Link from 'next/link';

export default function Card({ userCase }: { userCase: caseAttr }): React.ReactNode {
  return (
    <Link href={`/casedashboard/${userCase.caseID}`}>
    <MaterialCard color="gray" className="w-96 border-[#363636] border-[1.5px] hover:-mt-2 duration-150">
      <CardBody>
        <Typography variant='h6'>
          Case:
        </Typography>
        <Typography variant="h4" color="white" className="mb-2">
          {userCase?.caseID}
        </Typography>
        <div className="flex flex-col gap-2">
          <div className="block bg-gray-800 rounded-md p-2">
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
          <div className="block bg-gray-800 rounded-md p-2">
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
          <div className="block bg-gray-800 rounded-md p-2">
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
    </Link>
  );
}
