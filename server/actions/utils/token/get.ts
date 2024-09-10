"use server"

import { eq } from "drizzle-orm"

import { db, mailVerificationTokens } from "@/server"

export const getMailVerificationTokenByEmail = async (email: string) => {
  return await db.query.mailVerificationTokens.findFirst({
    where: eq(mailVerificationTokens.email, email),
  })
}

export const getMailVerificationTokenByToken = async (token: string) => {
  return await db.query.mailVerificationTokens.findFirst({
    where: eq(mailVerificationTokens.token, token),
  })
}
