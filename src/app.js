const express = require("express");
const compression = require("compression");
const cors = require("cors");
const httpStatus = require("http-status");
const routes = require("./routes/v1");
const { errorHandler } = require("./middlewares/error");
const ApiError = require("./utils/ApiError");
const mongoose = require("mongoose");
require('dotenv').config()
const app = express();

const PORT = process.env.PORT
// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());


// Reroute all API request starting with "/v1" route
app.use("/v1", routes);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});
// handle error
app.use(errorHandler);
// mongoose.connect(process.env.MONGODB_URL).then(() => {console.log("Connected to MongoDB")});
app.listen(PORT, () => {console.log(`App is running on port ${PORT}`);});
module.exports = app;