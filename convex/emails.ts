import { internalAction } from "./_generated/server";
import { v } from "convex/values";
import { api } from "./_generated/api";

export const sendEnrollmentConfirmation = internalAction({
  args: {
    enrollmentId: v.id("enrollments"),
  },
  handler: async (ctx, args) => {
    // Get enrollment details
    const enrollment = await ctx.runQuery(api.enrollments.get, {
      id: args.enrollmentId,
    });

    if (!enrollment) {
      throw new Error("Enrollment not found");
    }

    // TODO: Integrate with your email service provider
    // For now, we'll just log the action
    console.log("Would send enrollment confirmation email to", enrollment.email, "with course access details");
  },
});
