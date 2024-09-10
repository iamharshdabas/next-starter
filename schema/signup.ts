import { z } from "zod"

import { authConfig, errorConfig } from "@/config"

export const signUpSchema = z.object({
  name: z.string().min(1, {
    message: errorConfig.auth.name.required,
  }),

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
    .min(authConfig.signUp.passwordLength, {
      message: errorConfig.auth.password.short,
    })
    .min(1, {
      message: errorConfig.auth.password.required,
    }),
})
