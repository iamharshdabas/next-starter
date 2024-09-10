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

      mailVerification: "Email verified successfully! You can now SignIn.",
      forgotPassword: "Password changed successfully! You can now SignIn.",
    },

    user: {
      notFound: "User not found",
      alreadyExists: "User already exists",
      alreadyVerified: "User already verified",
      notVerified: "User not verified",
      verified: "User verified",
    },

    mail: {
      sent: {
        mailVerification: "Verification email sent",
        forgotPassword: "Password reset email sent",
        twoFactorAuthentication: "Two factor authentication code sent",
      },
    },
  },
}
