/**
 * errorHandler.js — Centralized error handling middleware
 *
 * Why centralized error handling matters:
 *   - Without it, every route would need its own try/catch with repeated logic
 *   - One place to decide what error info is safe to expose to clients
 *   - In production: never expose stack traces or database internals
 *   - In development: show full details to help debugging
 *
 * How Express error middleware works:
 *   - It MUST have exactly 4 parameters: (err, req, res, next)
 *   - Express recognizes the 4-parameter signature as error middleware
 *   - It's registered LAST in app.js, after all routes
 *   - Routes call next(error) to forward errors here
 */

const errorHandler = (err, req, res, next) => {
  // Log the full error server-side (never send this to the client)
  console.error("❌ Error:", {
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : "[hidden]",
    path: req.path,
    method: req.method,
  });

  // Mongoose validation errors (e.g., required field missing)
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: messages,
    });
  }

  // Mongoose duplicate key error (e.g., unique field conflict)
  if (err.code === 11000) {
    return res.status(409).json({
      success: false,
      message: "A record with this information already exists.",
    });
  }

  // Mongoose CastError (e.g., invalid ObjectId in URL param)
  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "Invalid data format in request.",
    });
  }

  // Default: Internal Server Error
  // In production, never reveal internal error details
  const statusCode = err.statusCode || 500;
  const message =
    process.env.NODE_ENV === "production"
      ? "Something went wrong on our end. Please try again later."
      : err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    message,
  });
};

export default errorHandler;
