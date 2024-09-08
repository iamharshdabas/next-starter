"use server"

import bcrypt from "bcrypt"
import { createSafeActionClient } from "next-safe-action"

import { db } from "../db"
import { users } from "../schema"

import { sendVerificationEmail } from "./mail/verification"
import { getExistingUser, getVerificationToken } from "./utils"

import { signUpPasswordLength } from "@/config"
import { signUpSchema } from "@/schema"

const action = createSafeActionClient()

export const signUpAction = action
  .schema(signUpSchema)
  .action(async ({ parsedInput: { name, email, password } }) => {
    const existingUser = await getExistingUser(email)

    const encryptedPassword = await bcrypt.hash(password, 10)

    if (existingUser?.email === email) {
      return { error: "User already exists" }
    }

    if (password.length < signUpPasswordLength) {
      return {
        error: `Password must be at least ${signUpPasswordLength} characters long`,
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
      return {
        error: response.message || "An unknown error occurred",
      }
    }

    return { success: "Verification email sent" }
  })
