import { internalMutation } from "./_generated/server";
import { v } from "convex/values";

export const updatePaymentStatus = internalMutation({
  args: {
    paypalPaymentId: v.string(),
    status: v.string(),
    amount: v.number(),
    paymentDate: v.number(),
  },
  handler: async (ctx, args) => {
    // Find enrollment by PayPal payment ID
    const enrollment = await ctx.db
      .query("enrollments")
      .withIndex("by_paypal_id", (q) => q.eq("paypalPaymentId", args.paypalPaymentId))
      .unique();

    if (!enrollment) {
      throw new Error("Enrollment not found");
    }

    // Update enrollment with payment information
    await ctx.db.patch(enrollment._id, {
      status: "active",
      paymentStatus: args.status,
      amount: args.amount,
      paymentDate: args.paymentDate,
    });
  },
});
