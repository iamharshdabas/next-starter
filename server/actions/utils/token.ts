"use server"

import { createId } from "@paralleldrive/cuid2"

import { deleteExistingToken } from "./deleteToken"
import { getExistingToken } from "./existingToken"
import { getExistingUser } from "./existingUser"

import { db } from "@/server/db"
import { users, verificationTokens } from "@/server/schema"

export const getVerificationToken = async (email: string) => {
  const token = createId()
  const expires = new Date(new Date().getTime() + 1000 * 60 * 5) // 5 Mins

  const existingToken = await getExistingToken(email)

  if (existingToken) await deleteExistingToken(email)

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

export const verifyToken = async (token: string) => {
  const existingToken = await getExistingToken(token)

  console.log(existingToken)

  if (!existingToken) {
    return { error: "Token not found" }
  }
  if (existingToken.expires < new Date()) {
    return { error: "Token expired" }
  }

  const existingUser = await getExistingUser(existingToken.email)

  if (!existingUser) {
    return { error: "User not found" }
  }

  if (existingUser?.emailVerified) {
    return { error: "Token already verified" }
  }

  await db.update(users).set({
    email: existingUser.email,
    emailVerified: new Date(),
  })

  deleteExistingToken(token)

  return { success: "Token verified" }
}
