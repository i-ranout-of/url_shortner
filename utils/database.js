require("dotenv").config();
const mongoose = require("mongoose");

// Automatically connect to the database when this module is imported
mongoose.set("strictQuery", true);
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("MongoDB Connected");
	})
	.catch((err) => {
		console.error(err.message);
		process.exit(1);
	});

// Graceful shutdown
process.on("SIGINT", async () => {
	await mongoose.connection.close();
	console.log("MongoDB disconnected on app termination");
	process.exit(0);
});
