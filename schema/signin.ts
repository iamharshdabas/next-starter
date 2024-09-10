import { z } from "zod"

import { authConfig, errorConfig } from "@/config"

export const signInSchema = z.object({
  email: z
    .string()
    .email({
      message: errorConfig.auth.email.invalid,
    })
    .min(1, {
      message: errorConfig.auth.email.required,
    }),

  password: z
    .string()
    .min(authConfig.signIn.passwordLength, {
      message: errorConfig.auth.password.short,
    })
    .min(1, {
      message: errorConfig.auth.password.required,
    }),

  code: z.string().optional(),
})
