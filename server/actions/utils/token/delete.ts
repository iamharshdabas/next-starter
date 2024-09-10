"use server"

import { eq } from "drizzle-orm"

import { db, mailVerificationTokens } from "@/server"

export const deleteMailVerificationTokenByEmail = async (email: string) => {
  return await db
    .delete(mailVerificationTokens)
    .where(eq(mailVerificationTokens.email, email))
}

export const deleteMailVerificationTokenByToken = async (token: string) => {
  return await db
    .delete(mailVerificationTokens)
    .where(eq(mailVerificationTokens.token, token))
}
