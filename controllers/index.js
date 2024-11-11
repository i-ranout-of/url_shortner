require('dotenv').config()

//import validators
const { post_url_validation } = require("../validators");

//import error handler
const {CustomError} = require('../utils/errorHandler')

// import response handler
const ResponseHandler  = require("../utils/responseHandler");


const getUrl = async(req, res,next) => {
    try{

        return ResponseHandler.success(res, "hi from get url");
    }catch(err){
        next(err)
    }
}

const postUrl = async(req, res,next) => {
    try{
        let payload = req.body
        post_url_validation(payload);
        return ResponseHandler.created(res, "hi from post url");
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