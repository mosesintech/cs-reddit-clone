// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql, relations } from "drizzle-orm";
import { 
  int, 
  varchar, 
  timestamp, 
  mysqlTableCreator, 
  type AnyMySqlColumn 
} from "drizzle-orm/mysql-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = mysqlTableCreator((name) => `cs-reddit-clone_${name}`);

export const users = createTable("users", {
  id: int("id").primaryKey().autoincrement(),
  username: varchar("username", { length: 256 }).notNull(),
  fullName: varchar("full_name", { length: 256 }).notNull(),
  avatarUrl: varchar("avatar_url", { length: 256 }).default('/images/person.png'),
});

export const posts = createTable(
  "post",
  {
    id: int("id").primaryKey().autoincrement(),
    title: varchar("name", { length: 256 }).notNull(),
    body: varchar("name", { length: 256 }).notNull(),
    authorId: int("author_id").notNull(),
    voteCount: int("vote_count").default(0).notNull(),
    createdAt: timestamp("created_at")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt"),
  },
);

export const comments = createTable("comments", {
  id: int("id").primaryKey().autoincrement(),
  body: varchar("body", { length: 256 }).notNull(),
  authorId: int("author_id").notNull(),
  postId: int("post_id").notNull(),
  parentId: int("parent_id"),
  createdAt: timestamp("created_at")
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  updatedAt: timestamp("updatedAt"),
});

// use relations() for planetscale instead of .references().
export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts), // users have many posts
  comments: many(comments) // users have many comments
}))

export const postsRelations = relations(posts, ({ one }) => ({
  // posts belong to one user
  user: one(users, {
    fields: [posts.authorId],
    references: [users.id]
  })
}))

export const commentsRelations = relations(comments, ({ one }) => ({
  // comments belong to one user
  user: one(users, {
    fields: [comments.authorId],
    references: [users.id]
  }),
  // comments belong to one post
  post: one(posts, {
    fields: [comments.postId],
    references: [posts.id]
  }),
  // comments have 1 parent
  comment: one(comments, {
    fields: [comments.parentId],
    references: [comments.id]
  }),
}))