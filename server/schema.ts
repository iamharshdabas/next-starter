import { pgTable, serial, text } from "drizzle-orm/pg-core"

export const something = pgTable("something", {
  id: serial("id").primaryKey().notNull(),
  title: text("title").notNull(),
})
