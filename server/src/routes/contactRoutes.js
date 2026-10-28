/**
 * contactRoutes.js — Routes for the contact API
 *
 * Route: POST /api/contact
 * Middleware chain (in order):
 *   1. contactLimiter   — blocks excessive requests from same IP
 *   2. validateContact  — checks field types, lengths, formats
 *   3. submitContact    — controller: saves to Atlas, returns response
 *
 * Why the order matters:
 *   Rate limiting runs FIRST to reject spam before wasting resources on validation.
 *   Validation runs SECOND to reject bad input before touching the database.
 *   The controller runs LAST, only with clean, rate-checked data.
 */

import express from "express";
import { contactLimiter } from "../middleware/rateLimiter.js";
import { validateContact } from "../validators/contactValidator.js";
import { submitContact } from "../controllers/contactController.js";

const router = express.Router();

// POST /api/contact
router.post("/", contactLimiter, validateContact, submitContact);

export default router;
