/**
 * contactValidator.js — Input validation rules using express-validator
 *
 * Why this file exists separately:
 *   - Keeps validation logic out of the controller (single responsibility)
 *   - The same validators can be reused across multiple routes
 *   - Easy to update validation rules without touching controller logic
 *
 * How it works:
 *   - Each item in the array is a validation chain
 *   - When Express processes the route, it runs each validator in sequence
 *   - Results are collected and checked in the controller via validationResult()
 */

import { body } from "express-validator";

export const validateContact = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters")
    .matches(/^[a-zA-Z\s'-]+$/)
    .withMessage("Name can only contain letters, spaces, hyphens, and apostrophes"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please provide a valid email address")
    .isLength({ max: 254 })
    .withMessage("Email is too long")
    .normalizeEmail(), // Normalize casing and formatting

  body("subject")
    .trim()
    .notEmpty()
    .withMessage("Subject is required")
    .isLength({ min: 3, max: 200 })
    .withMessage("Subject must be between 3 and 200 characters"),

  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required")
    .isLength({ min: 10, max: 5000 })
    .withMessage("Message must be between 10 and 5000 characters"),
];
