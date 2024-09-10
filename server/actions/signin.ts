"use server"

import { createSafeActionClient } from "next-safe-action"

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

    return { success: errorConfig.auth.signIn.success }
  })
