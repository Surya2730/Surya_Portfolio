/**
 * contactController.js — Business logic for the contact endpoint
 *
 * Why controllers exist separately from routes:
 *   - Routes just say "this URL maps to this function"
 *   - Controllers contain the actual logic (validation, DB ops, response)
 *   - Keeps route files thin and readable
 *   - Controllers can be unit-tested independently
 *
 * Async/await pattern:
 *   - MongoDB operations are asynchronous (they return Promises)
 *   - async/await makes async code look synchronous and readable
 *   - try/catch handles both network and validation errors
 *   - next(error) forwards caught errors to errorHandler.js
 */

import { validationResult } from "express-validator";
import ContactMessage from "../models/ContactMessage.js";

/**
 * POST /api/contact
 * Saves a contact form submission to MongoDB Atlas.
 */
export const submitContact = async (req, res, next) => {
  try {
    // Step 1: Check for validation errors collected by express-validator middleware
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Please correct the errors in your form.",
        errors: errors.array().map((e) => ({
          field: e.path,
          message: e.msg,
        })),
      });
    }

    // Step 2: Extract validated fields from request body
    const { name, email, subject, message } = req.body;

    // Step 3: Create a new Mongoose document and save to Atlas
    // This is the critical step — only respond success AFTER this succeeds
    const contactMessage = new ContactMessage({
      name,
      email,
      subject,
      message,
      // Store IP for rate-limit auditing (not exposed in API responses due to select:false)
      ipAddress: req.ip,
    });

    // .save() sends the document to MongoDB Atlas
    // If Atlas is unreachable, this throws an error → caught by catch block
    await contactMessage.save();

    // Step 4: Only reach here if the DB write truly succeeded
    console.log(`📬 New contact from ${name} <${email}> — "${subject}"`);

    return res.status(201).json({
      success: true,
      message:
        "Your message has been received! I will get back to you shortly.",
      data: {
        // Return only safe, non-sensitive confirmation data
        id: contactMessage._id,
        submittedAt: contactMessage.createdAt,
      },
    });
  } catch (error) {
    // Forward to centralized error handler (errorHandler.js)
    // This includes Atlas connection failures, validation errors, etc.
    next(error);
  }
};
