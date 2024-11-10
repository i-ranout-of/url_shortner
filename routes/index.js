const express = require('express');
const router = express.Router();

const {getUrl, postUrl, healthApi} = require('../controllers');

// Basic route
router.get('/health', healthApi)
router.get('/', getUrl);
router.post('/create', postUrl);


module.exports = router;
