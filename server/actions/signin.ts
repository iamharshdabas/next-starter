"use server"

import { createSafeActionClient } from "next-safe-action"

import { getExistingUser } from "./utils"

import { signInSchema } from "@/schema"

const action = createSafeActionClient()

export const signInAction = action
  .schema(signInSchema)
  .action(async ({ parsedInput: { email } }) => {
    const existingUser = await getExistingUser(email)

    if (existingUser?.email !== email) {
      return { error: "User not found" }
    }

    return { success: "Welcome" }
  })
