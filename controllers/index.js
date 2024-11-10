require('dotenv').config()

//import validators
const { postUrlSchema } = require("../validators");

//import error handler
const {CustomError} = require('../utils/errorHandler')

// import response handler
const {responseHandler} = require('../utils/responseHandler')


const getUrl = async(req, res,next) => {
    try{
        res.send('hello from get url')
    }catch(err){
        next(err)
    }
}

const postUrl = async(req, res,next) => {
    try{
        const { error } = await postUrlSchema.validate(req.body);
        if (error) {
            throw new CustomError(error.details[0].message, 400);
        }
        return responseHandler(res, 'hi from post url')
    }catch(err){
        next(err)
    }
}

const healthApi = async(req, res,next) => {
    try{
        res.send(`Application ${process.env.APP_NAME} is running on port ${process.env.APP_PORT}.`)
    }catch(err){
        next(err)
    }
}

module.exports = {getUrl, postUrl, healthApi}