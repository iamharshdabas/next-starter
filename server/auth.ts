import { DrizzleAdapter } from "@auth/drizzle-adapter"
import NextAuth from "next-auth"

import { db } from "./db"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  secret: process.env.AUTH_SECRET,
  providers: [],
})
