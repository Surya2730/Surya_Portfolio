/**
 * app.js — Express application setup
 *
 * Why app.js and server.js are SEPARATE files:
 *   - app.js creates and configures the Express app (middleware, routes)
 *   - server.js starts the HTTP server by calling app.listen()
 *   - This separation allows testing: you can import app.js in test files
 *     without starting a real HTTP server (just call app directly)
 *
 * Middleware registration order matters:
 *   1. Security/utility middleware first (cors, json parsing, trust proxy)
 *   2. General rate limiter
 *   3. Routes
 *   4. 404 handler (after routes — only reached if no route matched)
 *   5. Error handler LAST (must be last to catch errors from routes)
 */

import express from "express";
import cors from "cors";
import { apiLimiter } from "./middleware/rateLimiter.js";
import errorHandler from "./middleware/errorHandler.js";
import healthRoutes from "./routes/healthRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

// ─── Trust Proxy ──────────────────────────────────────────────────────────────
// Required when deployed behind a reverse proxy (Render, Vercel, etc.)
// Allows express-rate-limit to read the real client IP from X-Forwarded-For header
app.set("trust proxy", 1);

// ─── CORS ─────────────────────────────────────────────────────────────────────
// Cross-Origin Resource Sharing: allows your React frontend to call this API
// In production, only allow requests from your actual frontend domain
const clientUrl = process.env.CLIENT_URL;
const allowedOrigins = [
  "http://localhost:5173",
  ...(clientUrl ? clientUrl.split(",").map((url) => url.trim().replace(/\/$/, "")) : []),
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g., Postman, health checks, server-to-server)
      if (!origin) return callback(null, true);
      const normalizedOrigin = origin.replace(/\/$/, "");
      if (allowedOrigins.includes(normalizedOrigin)) {
        return callback(null, true);
      }
      return callback(new Error(`CORS: Origin ${origin} not allowed`));
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ─── Body Parsing ─────────────────────────────────────────────────────────────
// Parse JSON request bodies — required for reading req.body in controllers
app.use(express.json({ limit: "10kb" })); // Limit body size to prevent abuse
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// ─── General Rate Limiter ────────────────────────────────────────────────────
// Applied to all /api/* routes
app.use("/api", apiLimiter);

// ─── Routes ───────────────────────────────────────────────────────────────────
app.use("/api/health", healthRoutes);
app.use("/api/contact", contactRoutes);

// Root route — simple confirmation the server is reachable
app.get("/", (req, res) => {
  res.json({
    message: "Surya Kumar T Portfolio API",
    version: "1.0.0",
    docs: "/api/health",
  });
});

// ─── 404 Handler ─────────────────────────────────────────────────────────────
// Catches any request that didn't match a defined route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.path} not found`,
  });
});

// ─── Centralized Error Handler ────────────────────────────────────────────────
// MUST be last — Express identifies error middleware by the 4-parameter signature
app.use(errorHandler);

export default app;
