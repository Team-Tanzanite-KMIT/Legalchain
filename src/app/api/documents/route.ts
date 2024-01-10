import { NextRequest, NextResponse } from 'next/server';
import { FileParams } from 'chaincode/types';
import * as chaincode from 'chaincode/endpoints';
import { User } from '@/models/User';

export async function POST(req: NextRequest) {
  const fileParams: FileParams = await req.json();
  let { contract, gateway, client } = await chaincode.getContract();
  chaincode.createFile(contract, fileParams);
  User.updateOne({ email: fileParams.owner }, { $push: { docs: fileParams.filename } });

  return new NextResponse('Document Uploaded', { status: 200 });
}


