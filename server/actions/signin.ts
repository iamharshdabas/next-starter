"use server"

import { createSafeActionClient } from "next-safe-action"
import { eq } from "drizzle-orm"

import { db } from "../db"
import { users } from "../schema"

import { signInSchema } from "@/schema"

const action = createSafeActionClient()

export const signInAction = action
  .schema(signInSchema)
  .action(async ({ parsedInput: { email } }) => {
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    })

    if (!existingUser) {
      return { error: "User not found" }
    }

    return { success: true }
  })
