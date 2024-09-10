"use server"

import { createId } from "@paralleldrive/cuid2"

import {
  deleteMailVerificationToken,
  getMailVerificationToken,
} from "../utils/token"
import { getUser } from "../utils/user"

import { authConfig, errorConfig } from "@/config"
import { db, mailVerificationTokens, users } from "@/server"

export const generateMailVerificationToken = async (email: string) => {
  const token = createId()
  const expires = new Date(new Date().getTime() + authConfig.token.expires)

  const existingToken = await getMailVerificationToken(email)

  if (existingToken) await deleteMailVerificationToken(email)

  return await db
    .insert(mailVerificationTokens)
    .values({
      token,
      expires,
      email,
    })
    .returning()
}

export const verifyMailVerificationToken = async (token: string) => {
  const existingToken = await getMailVerificationToken(token)

  if (!existingToken) {
    return { error: errorConfig.auth.token.notFound }
  }

  if (existingToken.expires < new Date()) {
    return { error: errorConfig.auth.token.expired }
  }

  const existingUser = await getUser(existingToken.email)

  if (!existingUser) {
    return { error: errorConfig.auth.user.notFound }
  }

  if (existingUser?.emailVerified) {
    return { error: errorConfig.auth.user.alreadyVerified }
  }

  await db.update(users).set({
    email: existingUser.email,
    emailVerified: new Date(),
  })

  deleteMailVerificationToken(token)

  return { success: errorConfig.auth.token.verified }
}
