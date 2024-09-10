import { siteConfig } from "./site"

export const authConfig = {
  // dont increase this value becaue if user created password when
  // signUp password length was 4 then user will not be able to signin.
  signIn: {
    header: "Welcome",
    footer: "Don't have an account?",
    passwordLength: 4,
  },
  signUp: {
    header: "Create an Account",
    footer: "Already have an account?",
    passwordLength: 8,
  },

  token: {
    mailVerification: {
      url: "mailVerificationToken",
      success: "Email verified successfully! You can now SignIn.",
    },

    forgotPassword: {
      url: "forgotPasswordToken",
      success: "Password changed successfully! You can now SignIn.",
    },

    twoFactorAuthentication: {
      url: "twoFactorAuthenticationToken",
    },

    expires: 1000 * 60 * 5, // 5 Mins
  },

  mail: {
    from: `${siteConfig.name} <onboarding@resend.dev>`,
    to: "iamharshdabas@gmail.com", // This is only for testing purpose. use your mail registered with resend account

    subject: {
      mailVerification: "Verify your email",
      forgotPassword: "Reset your password",
      twoFactorAuthentication: "Two Factor Authentication",
    },

    sent: {
      mailVerification: "Verification email sent",
      forgotPassword: "Password reset email sent",
      twoFactorAuthentication: "Two factor authentication code sent",
    },

    body: {
      mailVerification: (token: string) =>
        `Click <a href=${token}>here</a> to verify your email`,
      forgotPassword: (token: string) =>
        `Click <a href=${token}>here</a> to reset your password`,
      twoFactorAuthentication: (token: string) =>
        `Your two factor authentication code is ${token}`,
    },
  },
}
