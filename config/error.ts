import { authConfig } from "./auth"

export const errorConfig = {
  auth: {
    signIn: { success: "Welcome" },
    name: { required: "Name is required" },

    email: {
      required: "Email is required",
      invalid: "Invalid email address",
    },

    password: {
      required: "Password is required",
      short: `Password must be at least ${authConfig.signIn.passwordLength} characters long`,
    },

    token: {
      notFound: "Token not found",
      expired: "Token expired",
      verified: "Token verified",
      notFoundUrl: "Token not found in url",
    },

    user: {
      notFound: "User not found",
      alreadyExists: "User already exists",
      alreadyVerified: "User already verified",
      notVerified: "User not verified",
      verified: "User verified",
    },
  },
}
