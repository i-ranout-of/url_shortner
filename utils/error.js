// errorHandler.js
class AppError extends Error {
	constructor(message, statusCode) {
		super(message);
		this.statusCode = statusCode;
		this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
		this.isOperational = true; // to differentiate between expected and unexpected errors
		// the JS call stacks are this only..
		Error.captureStackTrace(this, this.constructor);
	}
}

// Middleware for handling errors
const errorHandler = (err, req, res, next) => {
	// Log the error stack trace for debugging
	console.error(err.stack);

	// Handle specific AppError instances
	if (err.isOperational) {
		return res.status(err.statusCode).json({
			success: false,
			status: err.status,
			message: err.message,
		});
	}

	// Handle unexpected errors
	res.status(500).json({
		success: false,
		status: "error",
		message: "Something went wrong on the server",
	});
};

module.exports = { errorHandler, AppError };
