var express = require('express');
var path = require('path');
var app=express();
var electronicRouter=require('./app_folder/router/electronicRouter');

app.use('/public',express.static(path.join(__dirname,'public')));

app.use('/electronic',electronicRouter);

app.listen(8000);