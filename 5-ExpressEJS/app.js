var express = require('express');
var path = require('path');
var app=express();
var ejsLayout=require('express-ejs-layouts');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/app_folder/views'));
var gameRouter=require('./app_folder/router/gamerRouter');

app.use(ejsLayout);
app.use('/public',express.static(path.join(__dirname,'public')));
app.use('/gamex',gameRouter);

app.listen(8000);