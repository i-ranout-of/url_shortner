const Joi = require("joi");



// Define the schema for URL validation
const postUrlSchema = Joi.object({
	original_url: Joi.string().uri().required(),
});

const getUrlSchema = Joi.object({
    id: Joi.string(),
});

module.exports = {
	postUrlSchema,
};
