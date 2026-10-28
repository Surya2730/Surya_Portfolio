/**
 * rateLimiter.js — Prevents API abuse using express-rate-limit
 *
 * Why this matters:
 *   - Without rate limiting, anyone can spam your contact form thousands of times
 *   - This middleware tracks requests per IP address over a time window
 *   - Exceeding the limit returns a 429 Too Many Requests error
 *
 * Interview question: "How do you prevent contact form spam?"
 *   Answer: Server-side rate limiting by IP + client-side submit prevention
 */

import rateLimit from "express-rate-limit";

// General API limiter — applies to all /api/* routes
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15-minute window
  max: 100, // Max 100 requests per window per IP
  standardHeaders: true, // Return RateLimit headers in response
  legacyHeaders: false, // Disable X-RateLimit headers (deprecated)
  message: {
    success: false,
    message: "Too many requests from this IP. Please try again in 15 minutes.",
  },
});

// Stricter limiter specifically for the contact form endpoint
export const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1-hour window
  max: 5, // Max 5 contact submissions per hour per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message:
      "You have sent too many messages. Please wait an hour before trying again.",
  },
  // Skip counting successful requests (only rate-limit on failures or first hit)
  // skipSuccessfulRequests: false — default, count all requests
});
