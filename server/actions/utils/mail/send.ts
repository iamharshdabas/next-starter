"use server"

import { Resend } from "resend"

import { authConfig } from "@/config"
import { getBaseUrl } from "@/utils"

const resend = new Resend(process.env.RESEND)
const domain = getBaseUrl()

export const sendMailVerificationMail = async (
  email: string,
  token: string
) => {
  const link = `${domain}/auth/mail-verification?${authConfig.token.mailVerification}=${token}`

  const { error } = await resend.emails.send({
    from: authConfig.mail.from,
    to: authConfig.mail.to, // NOTE: You can only send testing emails to your own email address
    subject: authConfig.mail.subject.mailVerification,
    html: authConfig.mail.body.mailVerification(link),
  })

  if (error) {
    return error
  }
}
