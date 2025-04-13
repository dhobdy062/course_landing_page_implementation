import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    dateOfBirth: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await ctx.auth.getUserIdentity();
    
    return await ctx.db.insert("enrollments", {
      userId: userId?.subject ?? "anonymous",
      name: args.name,
      email: args.email,
      phone: args.phone,
      dateOfBirth: args.dateOfBirth,
      status: "pending",
      paymentStatus: "pending",
    });
  },
});

export const getByPaypalId = query({
  args: { paypalPaymentId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("enrollments")
      .withIndex("by_paypal_id")
      .filter((q) => q.eq(q.field("paypalPaymentId"), args.paypalPaymentId))
      .first();
  },
});

export const getByUser = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("enrollments")
      .withIndex("by_user")
      .filter((q) => q.eq(q.field("userId"), args.userId))
      .collect();
  },
});
