import { z } from "zod"

import { signInPasswordLength } from "@/config"

export const signInSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(signInPasswordLength, {
      message: `Password must be at least ${signInPasswordLength} characters long`,
    })
    .min(1, { message: "Password is required" }),
  code: z.string().optional(),
})
