// Dependencies
const logger = require('morgan');
const express = require('express');

// Create an instance of express
var app = express();

app.use(logger('dev'));

// Point static path to src
app.use(express.static('src'));

module.exports = app;
