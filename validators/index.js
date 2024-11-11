const Joi = require("joi");
const { CustomError } = require("../utils/errorHandler");



// Define the schema for URL validation
const postUrlSchema = Joi.object({
	original_url: Joi.string().uri().required(),
	sample_url : Joi.string().uri().required(),
});

const getUrlSchema = Joi.object({
    id: Joi.string(),
});


const post_url_validation = (data) => {
	try{
		const {error} = postUrlSchema.validate(data, {abortEarly : false});
		if (error) {
			throw new CustomError(error.message, 400);
		}
		return true
	}catch(err){
		throw new CustomError(err, 400);
	}
};


module.exports = {
	postUrlSchema, post_url_validation
};
