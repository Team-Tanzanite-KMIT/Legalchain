import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  const req: {
    email: string,
    password: string,
    role: string
  } = await request.json();
  
  const { email, password, role } = req

  console.log(role, "⬅️");

  await connect();

  const existingUser = await User.findOne({ email }).wtimeout(20000);

  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    email: email,
    password: hashedPassword,
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
