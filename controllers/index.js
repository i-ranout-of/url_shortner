require('dotenv').config()

//import validators
const { post_url_validation, get_url_validation } = require("../validators");

// import response handler
const ResponseHandler  = require("../utils/responseHandler");

//import utils
const { create_in_db, get_from_db } = require("../utils");


const getUrl = async(req, res,next) => {
    try{
        let queries = req.query && req.query?.filters  && Object.keys(req.query.filters).length > 0 ? JSON.parse(req.query.filters) : undefined
        if(queries) get_url_validation(queries);
        return ResponseHandler.success(res, await get_from_db(queries = queries), "Resource Fetched Successfully");
    }catch(err){
        next(err)
    }
}

const postUrl = async(req, res,next) => {
    try{
        let payload = req.body
        post_url_validation(payload);
        return ResponseHandler.created(res, await create_in_db(payload), "Resource Created Successfully");
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