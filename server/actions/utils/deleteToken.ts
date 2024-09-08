"use server"

import { eq } from "drizzle-orm"

import { db } from "@/server/db"
import { verificationTokens } from "@/server/schema"

/**
 * @param reference can be email or token
 * @returns delete existing token
 */
export const deleteExistingToken = async (reference: string) =>
  await db
    .delete(verificationTokens)
    .where(eq(verificationTokens.token, reference))
