import Case, { caseAttr } from "@/models/Case";
import connect from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { caseID, judges, clients, lawyers } = await req.json() as caseAttr;


    if (caseID === null) {
      return NextResponse.json({ error: "caseID is required" }, { status: 400 });
    }
    if (judges === null && clients === null && lawyers === null) {
      return NextResponse.json({ error: "updated details are required" }, { status: 400 });
    }

    await connect();
    await Case.updateOne({ caseID }, {
      $set: {
        ...(judges !== undefined && { judges }),
        ...(clients !== undefined && { clients }),
        ...(lawyers !== undefined && { lawyers })
      }
    });

    return new NextResponse("success", { status: 200 });
  } catch (e) {
    return NextResponse.json({ error: `Internal Server Error ${e}` }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const caseID = req.nextUrl.searchParams.get("caseID")!;

    if (caseID === null) {
      return NextResponse.json({ error: "caseID is required" }, { status: 400 });
    }

    await connect();
    const caseDetails = await Case.findOne({ caseID }) as caseAttr;

    return NextResponse.json(
      {
        caseID: caseDetails.caseID,
        judges: caseDetails.judges,
        clients: caseDetails.clients,
        lawyers: caseDetails.lawyers
      }
    )    
  } catch (e) {
    return NextResponse.json({ error: `Internal Server Error ${e}` }, { status: 500 });
  }
}