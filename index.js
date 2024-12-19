require("dotenv").config();
// Connect to the database
require("./utils/database");
const express = require("express");
const app = express();

// Import custom response handlers
const { bindResponse } = require("./utils/response");



// Use middleware to bind custom response methods to `res`
app.use(bindResponse); // Bind the response methods globally

// Define routes
const routes = require("./routes");
app.use("/", routes);

// Custom error handlers
const { errorHandler } = require("./utils/error");
app.use(errorHandler);

app.listen(process.env.APP_PORT, () => {
	console.log(`Server is running on port ${process.env.APP_PORT}`);
});
