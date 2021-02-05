const express = require('express');

/**
 * The 'hello' Router
 */
const router = express.Router();

router.get("/endpoint1", require('./endpoint1.js'));
router.use("/endpoint2", require('./endpoint2.js'))

module.exports = router;