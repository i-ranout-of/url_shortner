// import database operations
const { create_one, get_one, get_all } = require("../repo");

//import custom error handler
const {CustomError} = require("../utils/errorHandler");

const get_from_db = async(queries= undefined)=>{
    try{
        if(queries)return await get_one(queries);
        return await get_all();
    }catch(err){
        throw new CustomError(err, 400);
    }
}


const create_in_db = async(original_url)=>{
    try{
        if(get_one({"original_url":original_url.original_url}))throw new CustomError("Url already exists", 400);    
        return await create_one(original_url.original_url);
    }catch(err){
        throw new CustomError(err, 400);
    }
} 




module.exports = {
    create_in_db, get_from_db
}