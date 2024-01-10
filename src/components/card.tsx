'use client';

import { Card as MaterialCard, CardHeader, CardBody, Typography } from '@material-tailwind/react';
import React from 'react';
import { caseAttr } from '@/models/Case';

// export default function Card({ children }: { children: React.ReactNode }): React.ReactNode {
export default function Card({userCase }:
    {userCase: caseAttr }): React.ReactNode {
    return (
        <MaterialCard color='gray' className='w-96'>
            <CardBody>
                <Typography variant="h5" color="white" className="mb-2">
                    {userCase.caseID}
                </Typography>
                <Typography>
                    {/* {cases.map((userCase) => {
                        return (
                            <> */}
                            {JSON.stringify(userCase)}
                            {/* </>
                        )
                    })} */}
                </Typography>
            </CardBody>

        </MaterialCard>
    )
}
