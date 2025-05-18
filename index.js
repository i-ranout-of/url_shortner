// Set up the server
const express = require("express");
const app = express();

// Set up the database
require("./utils/db");

// Set up custom response handlers
const { bindResponse } = require("./utils/response");
app.use(bindResponse);

// Set up routes
const routes = require("./routes");
app.use("/", routes);

// Set up error handling
const { errorHandler } = require("./utils/error");
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
