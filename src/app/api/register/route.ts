import connect from '@/utils/db'
import bcrypt from 'bcryptjs';
import { User } from '@/models/User';

export async function POST(req: Request) {
  const { email, password }: { [key: string]: string } = await req.json();
  
  let existingUser;
  try {
    await connect();
    existingUser = await User.findOne({ email }).wtimeout(20000);
  } catch (err) {
    console.log(err)
    return new Response(JSON.stringify({error: true, message: "Internal Server Error"}), { status: 500 });
  }

  if (existingUser) new Response("User Already Exists", { status: 403 })
    const hashedPassword = await bcrypt.hash(password, 5);
    const result = new User({ email, password: hashedPassword });
    await result.save();
    return new Response("User Successfully created",{ status: 200 });
}
