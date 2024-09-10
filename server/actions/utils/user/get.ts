"use server"

import { eq } from "drizzle-orm"

import { db, users } from "@/server"

export const getUser = async (email: string) => {
  return await db.query.users.findFirst({
    where: eq(users.email, email),
  })
}
