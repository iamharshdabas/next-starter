"use server"

import { eq } from "drizzle-orm"
import { createSafeActionClient } from "next-safe-action"
import bcrypt from "bcrypt"

import { db } from "../db"
import { users } from "../schema"

import { getVerificationToken } from "./token"
import { sendVerificationEmail } from "./mail/verification"

import { signUpPasswordLength } from "@/config"
import { signUpSchema } from "@/schema"

const action = createSafeActionClient()

export const signUpAction = action
  .schema(signUpSchema)
  .action(async ({ parsedInput: { name, email, password } }) => {
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    })

    const encryptedPassword = await bcrypt.hash(password, 10)

    if (existingUser?.email === email) {
      return { error: true, message: "User already exists" }
    }

    if (password.length < signUpPasswordLength) {
      return {
        error: true,
        message: `Password must be at least ${signUpPasswordLength} characters long`,
      }
    }

    await db.insert(users).values({
      name,
      email,
      password: encryptedPassword,
    })

    const token = await getVerificationToken(email)
    const response = await sendVerificationEmail(email, token[0].token)

    if (response) {
      throw new Error(response.message || "An unknown error occurred")
    }

    return { success: true, message: "Verification email sent" }
  })
