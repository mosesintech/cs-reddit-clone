// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  integer,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  type AnyPgColumn
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `cs-reddit-clone_${name}`);

export const users = createTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username").notNull(),
  fullName: varchar("full_name").notNull(),
  avatarUrl: varchar("avatar_url").default('/images/person.png'),
});

export const posts = createTable(
  "post",
  {
    id: serial("id").primaryKey(),
    title: varchar("name", { length: 256 }).notNull(),
    body: varchar("name", { length: 256 }).notNull(),
    authorId: integer("author_id").references(() => users.id).notNull(),
    voteCount: integer("vote_count").default(0).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
);

export const comments = createTable("comments", {
  id: serial("id").primaryKey(),
  body: varchar("body").notNull(),
  authorId: integer("author_id").references(() => users.id).notNull(),
  postId: integer("post_id").references(() => posts.id).notNull(),
  parentId: integer("parent_id").references((): AnyPgColumn => comments.id).notNull(),
});
