var express = require('express');
var path = require('path');
var electronicCtrl=require('./electronic');


var app=express();
app.use('/public',express.static(path.join(__dirname,'public')));


app.get('/electronic',electronicCtrl.index);
app.get('/electronic/computer',electronicCtrl.computer);


app.listen(8000);