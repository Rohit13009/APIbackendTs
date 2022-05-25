"use strict";
require('dotenv').config();
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var baseURL = process.env.baseURL;
var user = require('./routes');
app.use(user);
app.listen(2000, function () {
    console.log("Server is running on port 2000");
});
