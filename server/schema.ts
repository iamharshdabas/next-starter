import type { AdapterAccountType } from "next-auth/adapters"

import { createId } from "@paralleldrive/cuid2"
import {
  integer,
  pgTable,
  primaryKey,
  text,
  timestamp,
} from "drizzle-orm/pg-core"

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => createId()),
  name: text("name"),
  email: text("email").unique(),
  password: text("password"),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
})

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
)

export const createTokenTable = (tableName: string) => {
  return pgTable(
    tableName,
    {
      id: text("id")
        .notNull()
        .$defaultFn(() => createId()),
      token: text("token").notNull(),
      email: text("email").notNull(),
      expires: timestamp("expires", { mode: "date" }).notNull(),
    },
    (tableName) => ({
      compositePk: primaryKey({
        columns: [tableName.id, tableName.token],
      }),
    })
  )
}

// NOTE: refer to @/config/auth/authConfig.token for table names
// i didn't want to expose the table names for security reasons

export const mailVerificationTokens = createTokenTable("mailVerificationToken")
