
const express = require('express');
const router = express.Router();

// import all routes
const healthRouter = require('./health');
const unknownRouter = require('./unknown');

// const userRouter = require('./users');
// const urlRouter = require('./urls');


router.use('/', healthRouter);
// router.use('/users', userRouter)
// router.use('/urls', urlRouter)

// router.use("*", unknownRouter)


module.exports = router;