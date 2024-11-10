class CustomError extends Error {
	constructor(message, status) {
		super(message);
		this.status = status || 500; // Default to 500 if no status is provided
	}
}

/**
 * A global error handler for Express that logs the error stack
 * and sends a JSON error response with the status and a message.
 *
 * @param {Error} err - The error object
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 */
const errorHandler = (err, req, res, next) => {
	// Log the error stack for debugging (in development)
	console.error(err.stack);

	// Check if error is an instance of CustomError
	const status = err.status || 500;
	const message = err.message || "An unexpected error occurred";

	res.status(status).json({
		error: {
			message,
			status,
			// Include the stack trace in development mode for debugging --- can log this to elk and sentry
			// stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
			stack: [err.stack],
		},
	});
};

module.exports = { CustomError, errorHandler };
