var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'www')));

module.exports = app;
