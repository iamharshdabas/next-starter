"use server"

import { eq } from "drizzle-orm"

import { db, mailVerificationTokens } from "@/server"

/**
 * @param token can be email or token because of composite key
 */
export const getMailVerificationToken = async (token: string) => {
  return await db.query.mailVerificationTokens.findFirst({
    where: eq(mailVerificationTokens.token, token),
  })
}
