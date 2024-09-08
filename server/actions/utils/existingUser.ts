"use server"

import { eq } from "drizzle-orm"

import { db } from "@/server/db"
import { users } from "@/server/schema"

export const getExistingUser = async (email: string) => {
  const existingUser = await db.query.users.findFirst({
    where: eq(users.email, email),
  })

  return existingUser
}
