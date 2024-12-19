const responseHandler = (res, options = {}) => {
	const {
		data = {},
		message = "Success",
		statusCode = 200,
		success = true,
		meta = null,
		pagination = null,
	} = options;

	const response = {
		success,
		message,
		data,
	};

	// Add metadata if provided
	if (meta) {
		response.meta = meta;
	}

	// Add pagination info if provided
	if (pagination) {
		response.pagination = pagination;
	}

	// Ensure status code is set correctly
	res.status(statusCode).json(response);
};

const successResponse = function (data = {}, message = "Success") {
	return responseHandler(this, {
		data,
		message,
		statusCode: 200,
		success: true,
	});
};

const failureResponse = function (
	message = "Something went wrong",
	statusCode = 500,
	data = {}
) {
	return responseHandler(this, {
		data,
		message,
		statusCode,
		success: false,
	});
};

const badRequestResponse = function (message = "Bad Request", data = {}) {
	return responseHandler(this, {
		data,
		message,
		statusCode: 400,
		success: false,
	});
};

// Bind methods to `res`
const bindResponse = (req, res, next) => {
	res.successResponse = successResponse.bind(res);
	res.failureResponse = failureResponse.bind(res);
	res.badRequestResponse = badRequestResponse.bind(res);
	next();
};

module.exports = {
	bindResponse,
	responseHandler,
};
