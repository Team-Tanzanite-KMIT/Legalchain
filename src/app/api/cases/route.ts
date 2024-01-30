import { NextRequest, NextResponse } from "next/server";
import { randomBytes } from "crypto";
import Case, { caseAttr } from "@/models/Case";
import { User } from "@/models/User";
import connect from "@/utils/db";

export async function POST(req: NextRequest) {
  // return NextResponse.json({hello: 1}, {status: 200})
  try {
    const {
      judges,
      lawyers,
      clients,
    }: { judges: string[]; lawyers: string[]; clients: string[] } = await req.json();
    const caseID = randomBytes(10).toString("hex");
    await connect();

    const newCase = new Case({
      caseID: caseID,
      judges: judges,
      lawyers: lawyers,
      clients: clients,
    });
    // console.log(newCase);
    await newCase.save();
    let usertypes = ["judge", "lawyer", "client"];
    for (let [index, users] of [judges, lawyers, clients].entries()) {
      for (let user of users) {
        await User.updateOne(
          { email: user },
          { $push: { cases: { caseID, role: usertypes[index] } } }
        );
      }
    }
    return new NextResponse("Case created successfully.");
  } catch (e) {
    return new NextResponse(`Internal Server Error ${e} `, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const email: string = req.nextUrl.searchParams.get("email")!;

    if (email === null) {
      return NextResponse.json({ error: "email is required" }, { status: 400 });
    }

    await connect();
    const user = await User.findOne({ email });
    const allCases = user?.cases!;
    const allCaseDetails: caseAttr[] = [];
    for (let i of allCases) {
      let caseFound = await Case.findOne({ caseID: i.caseID });
      allCaseDetails.push(caseFound as caseAttr);
    }
    return NextResponse.json(
      { roles: allCases, details: allCaseDetails },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ error: `Internal Server Error ${e}` }, { status: 500 });
  }
}
