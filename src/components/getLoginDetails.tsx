"use server";

import { Session } from "inspector";
import { getServerSession } from "next-auth";


export default async function getLoginDetails(): Promise<Session | null> {
  return (await getServerSession());
};
