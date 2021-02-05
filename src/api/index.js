const express = require("express");

/**
 * API Root Router instance
 */

const router = express.Router();

/**
 * Logging middleware
 */
router.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

/**
 * Register sub routes
 */
router.use("/hello", require("./hello"));


/**
 * Endpoint for unmatched routes
 */
router.use((req, res) => {
  res.sendStatus(404);
});


module.exports = router;