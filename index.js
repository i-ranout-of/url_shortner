require('dotenv').config();

const express = require('express');
const app = express();

// middlewares to parse JSON requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// database connection
require('./utils/database');

// import routes
const routes = require('./routes/index');
app.use(routes);

//error handler
const {errorHandler} = require('./utils/errorHandler');
app.use(errorHandler);

const APP_PORT = process.env.APP_PORT || 6969;
const APP_NAME = process.env.APP_NAME || 'url_shortner';
app.listen(APP_PORT, () => {
    console.log(`The application ${APP_NAME} is running on port ${APP_PORT}`);
});


