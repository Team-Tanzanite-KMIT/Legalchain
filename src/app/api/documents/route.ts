import { NextRequest, NextResponse } from 'next/server';
import { Asset, FileParams } from '@/chaincode/types';
import * as chaincode from '@/chaincode/endpoints';
import { User } from '@/models/User';
import connect from '@/utils/db';
// import {readFileByID} from "chaincode/endpoints"

export async function POST(req: NextRequest) {
  try {
    const fileParams: FileParams = await req.json();
    console.log(fileParams)
    let { contract, gateway, client } = await chaincode.getContract();
    await chaincode.createFile(contract, fileParams);
    await connect()
    User.updateOne({ email: fileParams.owner }, { $push: { docs: fileParams.filename } });

    return new NextResponse('Document Uploaded', { status: 200 });
  } catch (e) {
    return new NextResponse(`Internal Server Error ${e} `, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const email: string = req.nextUrl.searchParams.get('email')!;
    const requestedOwnerName: string = req.nextUrl.searchParams.get('requestedowner')!;

    connect();
    let { contract, gateway, client } = await chaincode.getContract();

    const requestedOwner = await User.findOne({ email });
    const allDocIds = requestedOwner?.docs!;

    var allDocs: Asset[] = [];
    for (let id of allDocIds) {
      let doc = await chaincode.readFileByID(contract, id);
      allDocs.push(doc);
    }

    return NextResponse.json(allDocs, { status: 200 });
  } catch (e) {
    return new NextResponse(`Internal Server Error ${e} `, { status: 500 });
  }
}
