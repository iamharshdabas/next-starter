"use server"

import { createId } from "@paralleldrive/cuid2"
import { eq } from "drizzle-orm"

import { db } from "../db"
import { verificationTokens } from "../schema"

export const getVerificationToken = async (email: string) => {
  const token = createId()
  const expires = new Date(new Date().getTime() + 1000 * 60 * 5) // 5 Mins

  const existingToken = await db.query.verificationTokens.findFirst({
    where: eq(verificationTokens.email, email),
  })

  if (existingToken?.email === email) {
    await db
      .delete(verificationTokens)
      .where(eq(verificationTokens.email, email))
  }

  const generatedToken = await db
    .insert(verificationTokens)
    .values({
      token,
      expires,
      email,
    })
    .returning()

  return generatedToken
}
