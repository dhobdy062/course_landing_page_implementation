import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { getAuthUserId } from "@convex-dev/auth/server";

export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    dateOfBirth: v.string(),
    plan: v.optional(v.string()),
    amount: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new Error("Not authenticated");
    }

    return await ctx.db.insert("enrollments", {
      userId,
      name: args.name,
      email: args.email,
      phone: args.phone,
      dateOfBirth: args.dateOfBirth,
      plan: args.plan,
      amount: args.amount,
      status: "pending",
    });
  },
});

export const getByPaypalId = query({
  args: {
    paypalPaymentId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("enrollments")
      .withIndex("by_paypal_id", (q) => q.eq("paypalPaymentId", args.paypalPaymentId))
      .unique();
  },
});
