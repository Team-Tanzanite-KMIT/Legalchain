import { NextRequest, NextResponse } from "next/server";
import * as chaincode from "@/chaincode/endpoints";
import { User } from "@/models/User";
import connect from "@/utils/db";

interface FileParams {
  filename: string;
  owner: string;
}

interface AccessControlParams extends FileParams {
  AccessList: string[];
}

export async function POST(req: NextRequest) {
  try {
    const fileParams: AccessControlParams = await req.json();
    console.log(fileParams);

    await connect();
    await User.findOne({ email: fileParams.owner });
    let { contract, gateway, client } = await chaincode.getContract();
    const fileAsset = await chaincode.readFileByID(contract, fileParams.filename);
    fileAsset.AccessList = fileParams.AccessList;

    return new NextResponse("AccessList updated", { status: 200 });
  } catch (e) {
    return new NextResponse(`Internal Server Error ${e}`, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const fileParams: FileParams = req.nextUrl.searchParams as any;
    console.log(fileParams);

    await connect();
    let { contract, gateway, client } = await chaincode.getContract();
    const fileAsset = await chaincode.readFileByID(contract, fileParams.filename);

    NextResponse.json(
      JSON.stringify({
        filename: fileParams.filename,
        owner: fileParams.owner,
        AccessList: fileAsset.AccessList,
      }),
      { status: 200 }
    );
  } catch (e) {
    return new NextResponse(`Internal Server Error ${e}`, { status: 500 });
  }
}
