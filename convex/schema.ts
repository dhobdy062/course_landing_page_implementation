import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  enrollments: defineTable({
    userId: v.id("users"),
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    dateOfBirth: v.string(),
    plan: v.optional(v.string()),
    amount: v.optional(v.number()),
    status: v.string(),
    paypalPaymentId: v.optional(v.string()),
    paymentStatus: v.optional(v.string()),
    paymentDate: v.optional(v.number()),
  }).index("by_user", ["userId"])
    .index("by_paypal_id", ["paypalPaymentId"]),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
