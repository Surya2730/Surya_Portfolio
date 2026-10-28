/**
 * ContactMessage.js — Mongoose Schema and Model
 *
 * Why this file exists separately:
 *   - One file = one collection = easy to find and modify
 *   - Mongoose schema defines the shape and rules for stored data
 *   - The model provides methods to create, read, update, delete documents
 *
 * Key Mongoose concepts for interviews:
 *   - Schema: blueprint describing fields, types, and constraints
 *   - Model: class built from a schema; talks to a specific collection
 *   - timestamps: true automatically adds createdAt and updatedAt fields
 *   - trim: removes leading/trailing whitespace before saving
 *   - match: validates the field against a regular expression
 */

import mongoose from "mongoose";

const contactMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [100, "Name must not exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true, // Normalize email to lowercase before storing
      maxlength: [254, "Email must not exceed 254 characters"],
      match: [
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please provide a valid email address",
      ],
    },
    subject: {
      type: String,
      required: [true, "Subject is required"],
      trim: true,
      minlength: [3, "Subject must be at least 3 characters"],
      maxlength: [200, "Subject must not exceed 200 characters"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: [10, "Message must be at least 10 characters"],
      maxlength: [5000, "Message must not exceed 5000 characters"],
    },
    // IP address for rate-limiting awareness — not exposed in API responses
    ipAddress: {
      type: String,
      select: false, // Never returned in queries by default
    },
  },
  {
    // Automatically adds createdAt and updatedAt timestamps
    timestamps: true,
    // Collection name in MongoDB Atlas — will appear as "contactmessages"
    collection: "contactmessages",
  }
);

// Index for faster queries by email (useful if you add an admin view later)
contactMessageSchema.index({ email: 1, createdAt: -1 });

const ContactMessage = mongoose.model("ContactMessage", contactMessageSchema);

export default ContactMessage;
