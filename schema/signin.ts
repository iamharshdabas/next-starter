import { z } from "zod"

export const signInSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters long" })
    .min(1, { message: "Password is required" }),
  code: z.string().optional(),
})
