import { z } from "zod"

import { signUpPasswordLength } from "@/config"

export const signUpSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(signUpPasswordLength, {
      message: `Password must be at least ${signUpPasswordLength} characters long`,
    })
    .min(1, { message: "Password is required" }),
})
