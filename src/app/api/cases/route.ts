import { NextRequest, NextResponse } from 'next/server';
import { randomBytes } from 'crypto';
import Case from '@/models/Case';
import { User } from '@/models/User';
import connect from '@/utils/db';

export async function POST(req: NextRequest) {
  // return NextResponse.json({hello: 1}, {status: 200})
  try {
    const {
      judges,
      lawyers,
      clients,
    }: { judges: string[]; lawyers: string[]; clients: string[] } = await req.json();
    const caseID = randomBytes(10).toString('hex');
    await connect();

    const newCase = new Case({
      caseID: caseID,
      judges: judges,
      lawyers: lawyers,
      clients: clients,
    });
    // console.log(newCase);
    await newCase.save()
    let usertypes = ['judge', 'lawyer', 'client'];
    for (let [index, users] of [judges, lawyers, clients].entries()) {
      for (let user of users) {
        await User.updateOne(
          { email: user },
          { $push: { cases: { caseID, role: usertypes[index] } } }
        );
      }
    }
    return new NextResponse('Case created successfully.');
  } catch (e) {
    return new NextResponse(`Internal Server Error ${e} `, { status: 500 });
  }
}
