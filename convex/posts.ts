// convex/posts.ts
import { query } from "./_generated/server";
import { v } from "convex/values";

export const listPosts = query({
  args: {
    cursor: v.optional(v.string()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { cursor, limit = 10 } = args;

    const posts = await ctx.db
      .query("posts")
      .order("desc")
      //   .filter((q) => (cursor ? q.gt(cursor) : q))
      //   .filter((q) => (cursor ? q.gt(cursor) : true))
      //   .filter((q) =>
      //     cursor ? q.field("_id").gt(cursor) : q.filter(() => true),
      //   )
      .take(limit + 1);

    const hasMore = posts.length > limit;
    const nextCursor = hasMore ? posts[posts.length - 2]._id : null;

    return {
      posts: posts.slice(0, limit),
      nextCursor,
    };
  },
});
