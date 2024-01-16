// import User from "@/models/User";
// import connect from "@/utils/db";
// import bcrypt from "bcryptjs";
// import { NextResponse ,NextRequest} from "next/server";

// export const POST = async (request: NextRequest) => {
//   const req = await request.json();
//   const{email,password,role}=req
//   console.log(role,"⬅️");

//   await connect();

//   const existingUser = await User.findOne({ email }).wtimeout(20000);

//   if (existingUser) {
//     return new NextResponse("Email is already in use", { status: 400 });
//   }

//   const hashedPassword = await bcrypt.hash(password, 5);
//   const newUser = new User({
//     email:email,
//     password: hashedPassword,
//     role:role,
//   });

//   try {
//     await newUser.save();
//     return new NextResponse("user is registered", { status: 200 });
//   } catch (err: any) {
//     return new NextResponse(err, {
//       status: 500,
//     });
//   }
// };

// import connect from "@/utils/db";
// import bcrypt from "bcryptjs";
// import User from "@/models/User";
// import { NextResponse, NextRequest } from "next/server";

// export default async function handler(req:any, res:any) {
//   if (req.method === "POST") {
//     const { email, password, role } = req.body;

//     // Validate email, password, and role as needed

//     try {
//       // Connect to MongoDB using Mongoose
//       await connect();

//       // Check if the user already existsw
//       const existingUser = await User.findOne({ email }).wtimeout(20000);

//       if (existingUser) {
//         return new NextResponse("Email is already in use", { status: 400 });
//       }

//       // Hash the password
//       const hashedPassword = await bcrypt.hash(password, 5);

//       // Create a new user with Mongoose model
//       const newUser = new User({
//         email: email,
//         password: hashedPassword,
//         role: role,
//       });

//       // Save the user data to MongoDB
//       await newUser.save();

//       return res.status(200).json({ message: "User registered successfully" });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ error: "Internal Server Error" });
//     }
//   }

//   // Handle other HTTP methods if needed
//   return res.status(405).json({ error: "Method Not Allowed" });
// }

import connect from '@/utils/db';
import bcrypt from 'bcryptjs';
import { User } from '@/models/User';
import { NextResponse, NextRequest } from 'next/server';


export async function POST(request: NextRequest) {
  // console.log(request.method,request.body  ,  isRequestBody(request.body))
  if (request.method === 'POST') {
    const body = await request.json();
    const { email, password } = body;
    try {
      await connect();
      // const specificUserModel = createSpecificUserModel(role);

      // Check if the user already exists
      const existingUser = await User.findOne({ email }).exec();

      if (existingUser) {
        return new NextResponse('Email is already in use', { status: 400 });
      }
      const hashedPassword = await bcrypt.hash(password, 5);

      const newUser = new User({
        email: email,
        password: hashedPassword,
        cases: [],
        docs: [],
      });
      await newUser.save();

      return new NextResponse('User registered successfully', { status: 200 });
    } catch (error) {
      console.error(error);
      return new NextResponse('Internal Server Error', { status: 500 });
    }
  }
  return new NextResponse('Method Not Allowed', { status: 405 });
}
