/**
 * server.js — HTTP server entry point
 *
 * Responsibilities:
 *   1. Load environment variables from .env
 *   2. Connect to MongoDB Atlas (must succeed before serving requests)
 *   3. Start the Express HTTP server
 *   4. Handle graceful shutdown
 *
 * Why connect to DB BEFORE starting the server:
 *   If we start the HTTP server first, incoming requests could hit the contact
 *   endpoint before Mongoose is connected — causing crashes. By connecting first,
 *   we guarantee the DB is ready when the first request arrives.
 */

import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../.env") });
dotenv.config(); // Fallback to current working directory if needed
import app from "./app.js";
import connectDB from "./config/db.js";

const PORT = process.env.PORT || 5000;

// ─── Start Server ─────────────────────────────────────────────────────────────
const startServer = async () => {
  try {
    // Step 1: Connect to MongoDB Atlas — fail fast if unavailable
    await connectDB();

    // Step 2: Start Express HTTP server only after successful DB connection
    const server = app.listen(PORT, () => {
      console.log(`\n🚀 Server running on port ${PORT}`);
      console.log(`   Environment: ${process.env.NODE_ENV || "development"}`);
      console.log(`   Health check: http://localhost:${PORT}/api/health`);
      console.log(`   Contact API:  http://localhost:${PORT}/api/contact\n`);
    });

    // ─── Graceful Shutdown ────────────────────────────────────────────────────
    // When the process receives SIGTERM (e.g., Render shutting down the container),
    // close active connections cleanly before exiting
    const gracefulShutdown = (signal) => {
      console.log(`\n⚠️  Received ${signal}. Shutting down gracefully...`);
      server.close(() => {
        console.log("✅ HTTP server closed.");
        process.exit(0);
      });
    };

    process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
    process.on("SIGINT", () => gracefulShutdown("SIGINT")); // Ctrl+C in terminal
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
