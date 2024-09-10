"use server"

import bcrypt from "bcrypt"
import { createSafeActionClient } from "next-safe-action"

import { db, users } from ".."

import { generateMailVerificationToken } from "./token"
import { sendMailVerificationMail } from "./utils/mail"
import { getUser } from "./utils/user"

import { authConfig, errorConfig } from "@/config"
import { signUpSchema } from "@/schema"

const action = createSafeActionClient()

export const signUpAction = action
  .schema(signUpSchema)
  .action(async ({ parsedInput: { name, email, password } }) => {
    const existingUser = await getUser(email)

    const encryptedPassword = await bcrypt.hash(password, 10)

    if (existingUser?.email === email) {
      return { error: errorConfig.auth.user.alreadyExists }
    }

    if (password.length < authConfig.signUp.passwordLength) {
      return { error: errorConfig.auth.password.short }
    }

    await db.insert(users).values({
      name,
      email,
      password: encryptedPassword,
    })

    const token = await generateMailVerificationToken(email)
    const response = await sendMailVerificationMail(email, token[0].token)

    if (response) {
      return { error: response.message }
    }

    return { success: errorConfig.auth.mail.sent.mailVerification }
  })
