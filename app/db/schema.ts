import { mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { v4 as uuid } from "uuid";
/**
 * This is a sample schema.
 * Replace this with your own schema and then run migrations.
 */

export const profiles_table = mysqlTable("profiles", {
  id: varchar("id", { length: 256 }).primaryKey().$defaultFn(uuid),
  email: varchar("email", { length: 256 }).notNull(),
  password: varchar("password", { length: 256 }).notNull(),
});

export const notes_table = mysqlTable("notes", {
  id: varchar("id", { length: 256 }).primaryKey().$defaultFn(uuid),
  title: varchar("title", { length: 256 }).notNull(),
  body: varchar("body", { length: 256 }).notNull(),
  profileId: varchar("profile_id", { length: 256 }).notNull(),
});
