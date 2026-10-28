/**
 * healthRoutes.js — GET /api/health
 *
 * Purpose:
 *   - Lets you verify the Express server is running
 *   - Shows database connectivity status (without exposing credentials)
 *   - Used by Render's health check to know if the service is alive
 *   - Useful during development to quickly verify the backend is up
 */

import express from "express";
import mongoose from "mongoose";

const router = express.Router();

router.get("/", (req, res) => {
  // mongoose.connection.readyState values:
  //   0 = disconnected | 1 = connected | 2 = connecting | 3 = disconnecting
  const dbState = mongoose.connection.readyState;
  const dbStatusMap = {
    0: "disconnected",
    1: "connected",
    2: "connecting",
    3: "disconnecting",
  };

  const isDbConnected = dbState === 1;

  return res.status(isDbConnected ? 200 : 503).json({
    success: isDbConnected,
    status: "ok",
    server: "running",
    database: {
      status: dbStatusMap[dbState] || "unknown",
      // Safe to expose: connection state only, never the URI or credentials
      connected: isDbConnected,
    },
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
  });
});

export default router;
