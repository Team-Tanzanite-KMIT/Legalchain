import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import * as crypto from "crypto";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { email, password, role } = await request.json();

  await connect();

  const existingUser = await User.findOne({ email }).wtimeout(20000);

  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  var ledger_name = crypto.randomBytes(20).toString("hex");

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    email,
    password: hashedPassword,
    ledger_name,
    role
  });

  try {
    await newUser.save();
    return new NextResponse("user is registered", { status: 200 }); 
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
