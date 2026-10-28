/**
 * db.js — MongoDB Atlas connection via Mongoose
 *
 * Why this file exists separately:
 *   - Centralizes all database logic in one place
 *   - Imported once by server.js before the Express app starts
 *   - Makes it easy to test DB connection in isolation
 *   - Keeps database credentials away from route/controller files
 *
 * Key concepts:
 *   - mongoose.connect() is asynchronous — it returns a Promise
 *   - We use async/await to handle the connection cleanly
 *   - process.exit(1) stops the server if DB connection fails at startup
 *     (better to crash loudly than to serve a broken app silently)
 */

import mongoose from "mongoose";

// Track whether we ever successfully connected
// Prevents the disconnect event from firing confusingly during a failed startup
let hasConnectedOnce = false;

const connectDB = async () => {
  try {
    // MONGODB_URI comes exclusively from the .env file — never hardcoded
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      throw new Error(
        "MONGODB_URI is not defined in environment variables. " +
          "Create a server/.env file with your MongoDB Atlas connection string."
      );
    }

    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 10000, // Timeout after 10s if Atlas is unreachable
      socketTimeoutMS: 45000,
    });

    hasConnectedOnce = true;
    console.log(`✅ MongoDB Atlas connected: ${conn.connection.host}`);
    console.log(`   Database: ${conn.connection.name}`);
  } catch (error) {
    console.error("❌ MongoDB Atlas connection failed:");
    console.error(`   ${error.message}`);
    process.exit(1);
  }
};

// Only warn about disconnects AFTER we've had at least one successful connection
mongoose.connection.on("disconnected", () => {
  if (hasConnectedOnce) {
    console.warn("⚠️  MongoDB Atlas disconnected. Attempting to reconnect...");
  }
});

mongoose.connection.on("reconnected", () => {
  console.log("✅ MongoDB Atlas reconnected.");
});

export default connectDB;
