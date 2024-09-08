"use server"

import { Resend } from "resend"

import { resendApiKeyEmail, siteConfig, urlTokenSearchParam } from "@/config"
import { getBaseUrl } from "@/utils"

const resend = new Resend(process.env.RESEND)
const domain = getBaseUrl()

export const sendVerificationEmail = async (email: string, token: string) => {
  const link = `${domain}/auth/verification?${urlTokenSearchParam}=${token}`

  const { error } = await resend.emails.send({
    from: `${siteConfig.name} <onboarding@resend.dev>`,
    to: resendApiKeyEmail, // NOTE: You can only send testing emails to your own email address
    subject: "verification email",
    html: `<p>Click to <a href='${link}'>confirm your email.</a></p>`,
  })

  if (error) {
    return error
  }
}
