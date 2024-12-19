const get_health = async(req, res,next) => {
    try{
        res.successResponse("hello world")
    }catch(err){
        next(err)
    }
}


module.exports = {
	health : get_health
};