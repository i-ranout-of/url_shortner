class ResponseHandler {
	static success(
		res,
		data = {},
		message = "Operation Successful",
		statusCode = 200
	) {
		return res.status(statusCode).json({
			success: true,
			error: false,
			message,
			data,
		});
	}

	static created(res, data = {}, message = "Resource Created Successfully") {
		return res.status(201).json({
			success: true,

			error: false,
			message,
			data,
		});
	}

	static badRequest(res, message = "Bad Request", data = {}) {
		return res.status(400).json({
			success: false,
			error: true,
			message,
			data,
		});
	}

	static notFound(res, message = "Resource Not Found") {
		return res.status(404).json({
			success: false,
			error: true,
			message,
			data: null,
		});
	}

	static unauthorized(res, message = "Unauthorized") {
		return res.status(401).json({
			success: false,
			error: true,
			message,
			data: null,
		});
	}

	static internalError(res, message = "Internal Server Error") {
		return res.status(500).json({
			success: false,
			error: true,
			message,
			data: null,
		});
	}
}

module.exports = ResponseHandler;
