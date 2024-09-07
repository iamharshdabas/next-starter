"use server"

import { createSafeActionClient } from "next-safe-action"

import { signInSchema } from "@/schema"

const action = createSafeActionClient()

export const signInAction = action
  .schema(signInSchema)
  .action(async ({ parsedInput: { email, password, code } }) => {
    console.log(email, password, code)
  })
