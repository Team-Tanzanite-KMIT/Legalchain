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
    let { contract } = await chaincode.getContract();
    const fileAsset = await chaincode.readFileByID(contract, fileParams.filename);
    fileAsset.AccessList = fileParams.AccessList;
    await chaincode.Update(contract, fileParams.filename, fileAsset);

    return new NextResponse("AccessList updated", { status: 200 });
  } catch (e) {
    return new NextResponse(`Internal Server Error ${e}`, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const fileParams: FileParams = {
      filename: req.nextUrl.searchParams.get("filename")!,
      owner: req.nextUrl.searchParams.get("owner")!,
    };

    await connect();
    let { contract } = await chaincode.getContract();

    return new NextResponse(
      JSON.stringify({
        filename: fileParams.filename,
        owner: fileParams.owner,
        AccessList: (await chaincode.readFileByID(contract, fileParams.filename))
          .AccessList,
      }),
      { status: 200 }
    );
  } catch (e) {
    return new NextResponse(`Internal Server Error ${e}`, { status: 500 });
  }
}
