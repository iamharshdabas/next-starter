"use server"

import { eq } from "drizzle-orm"

import { db } from "@/server/db"
import { verificationTokens } from "@/server/schema"

/**
 * @param reference can be email or token
 * @returns existing token
 */
export const getExistingToken = async (reference: string) => {
  const existingToken = await db.query.verificationTokens.findFirst({
    where: eq(verificationTokens.token, reference),
  })

  return existingToken
}
