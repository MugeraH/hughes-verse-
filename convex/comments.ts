import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createComment = mutation({
  args: {
    name: v.string(),
    avatarUrl: v.string(),
    message: v.string(),
    date: v.string(),
  },
  async handler(ctx, args) {
    await ctx.db.insert("comments", {
      name: args.name,
      avatarUrl: args.avatarUrl,
      message: args.message,
      date: args.date,
    });
  },
});

export const getComments = query({
  args: {},
  async handler(ctx, args) {
    return ctx.db.query("comments").order("desc").collect();
  },
});
