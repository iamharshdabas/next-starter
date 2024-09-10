"use server"

import { createSafeActionClient } from "next-safe-action"

import { generateMailVerificationToken } from "./token"
import { sendMailVerificationMail } from "./utils/mail"
import { getUser } from "./utils/user"

import { errorConfig } from "@/config"
import { signInSchema } from "@/schema"

const action = createSafeActionClient()

export const signInAction = action
  .schema(signInSchema)
  .action(async ({ parsedInput: { email } }) => {
    const existingUser = await getUser(email)

    if (existingUser?.email !== email) {
      return { error: errorConfig.auth.user.notFound }
    }

    if (!existingUser?.emailVerified) {
      const token = await generateMailVerificationToken(email)
      const response = await sendMailVerificationMail(email, token[0].token)

      if (response) {
        return { error: response.message }
      }

      return { success: errorConfig.auth.mail.sent.mailVerification }
    }

    return { success: errorConfig.auth.signIn.success }
  })
