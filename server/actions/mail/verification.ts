"use server"

import { Resend } from "resend"

import { getBaseUrl } from "@/utils"
import { resendApiKeyEmail, siteConfig } from "@/config"

const resend = new Resend(process.env.RESEND)
const domain = getBaseUrl()

export const sendVerificationEmail = async (email: string, token: string) => {
  const link = `${domain}/auth/verification?token=${token}`

  const { error, data } = await resend.emails.send({
    from: `${siteConfig.name} <onboarding@resend.dev>`,
    to: resendApiKeyEmail, // NOTE: passing resend api key email for dev purposes only. in future get this from user via signup action
    subject: "verification email",
    html: `<p>Click to <a href='${link}'>confirm your email.</a></p>`,
  })

  // NOTE: check for error and data content
  if (error) {
    return { error: true, message: error }
  }

  if (data) {
    return { success: true, message: data }
  }
}
