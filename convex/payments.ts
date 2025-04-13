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
    // Find the enrollment by PayPal payment ID
    const enrollment = await ctx.db
      .query("enrollments")
      .withIndex("by_paypal_id")
      .filter((q) => q.eq(q.field("paypalPaymentId"), args.paypalPaymentId))
      .first();

    if (!enrollment) {
      throw new Error(`No enrollment found for PayPal payment ID: ${args.paypalPaymentId}`);
    }

    // Update the enrollment with payment information
    await ctx.db.patch(enrollment._id, {
      paymentStatus: args.status,
      amount: args.amount,
      paymentDate: args.paymentDate,
    });

    return enrollment._id;
  },
});
