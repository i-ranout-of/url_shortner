const Joi = require("joi");
const { CustomError } = require("../utils/errorHandler");



// Define the schema for URL validation
const postUrlSchema = Joi.object({
	original_url: Joi.string().uri().required(),
});

const getUrlSchema = Joi.object({
	id: Joi.string(),
	original_url: Joi.string().uri(),
	short_url : Joi.string(),
});


const post_url_validation = (data) => {
	try{
		const {error} = postUrlSchema.validate(data, {abortEarly : false});
		if(error) throw new CustomError(error.message, 400);
		return true
	}catch(err){
		throw new CustomError(err, 400);
	}
};

const get_url_validation = (data)=>{
	try{
		const {error} = getUrlSchema.validate(data, {abortEarly : false});
		if(error) throw new CustomError(error.message, 400);
		return true
	}catch(err){
		throw new CustomError(err, 400)
	}
}


module.exports = {
	post_url_validation, get_url_validation
};
