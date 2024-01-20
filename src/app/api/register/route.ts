import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { User } from "@/models/User";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // console.log(request.method,request.body  ,  isRequestBody(request.body))
  if (request.method === "POST") {
    const body = await request.json();
    const { email, password } = body;
    try {
      await connect();
      // const specificUserModel = createSpecificUserModel(role);

      // Check if the user already exists
      const existingUser = await User.findOne({ email }).exec();

      if (existingUser) {
        return new NextResponse("Email is already in use", { status: 400 });
      }
      const hashedPassword = await bcrypt.hash(password, 5);

      const newUser = new User({
        email: email,
        password: hashedPassword,
        cases: [],
        docs: [],
      });
      await newUser.save();

      return new NextResponse("User registered successfully", { status: 200 });
    } catch (error) {
      console.error(error);
      return new NextResponse("Internal Server Error", { status: 500 });
    }
  }
  return new NextResponse("Method Not Allowed", { status: 405 });
}
