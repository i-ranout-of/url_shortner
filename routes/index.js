const express = require("express");
const router = express.Router();

// import all routes
const healthRouter = require("./health");

router.use("/health", healthRouter);

module.exports = router;
