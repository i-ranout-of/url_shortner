const Url = require("../models");

//import error handler
const { CustomError } = require("../utils/errorHandler");

const get_one = async (data) => {
    try{
        return Url.findOne(data);
    }catch(err){
        throw new CustomError(err, 400);
    }

}

const get_all = async () => {
    try{
        return Url.find();
    }catch(err){
        throw new CustomError(err, 400);
    }
}

const create_one = async (data) => {
    try{
        return Url.create(data);
    }catch(err){
        throw new CustomError(err, 400);
    }
}   



module.exports = {
    create_one, get_one, get_all
}