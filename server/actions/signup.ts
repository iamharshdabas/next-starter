"use server"

import { eq } from "drizzle-orm"
import { createSafeActionClient } from "next-safe-action"

import { db } from "../db"
import { users } from "../schema"

import { signUpPasswordLength } from "@/config"
import { signUpSchema } from "@/schema"

const action = createSafeActionClient()

export const signUpAction = action
  .schema(signUpSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    })

    if (existingUser) {
      return { error: "User already exists" }
    }

    if (password.length < signUpPasswordLength) {
      return {
        error: `Password must be at least ${signUpPasswordLength} characters long`,
      }
    }

    return { success: true }
  })
