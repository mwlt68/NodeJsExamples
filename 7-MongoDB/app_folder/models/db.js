var mongoose=require('mongoose');
mongoose.Promise=require('bluebird');
var mongoDB='mongodb://localhost/NodeProje';
mongoose.connect(mongoDB,function(err,err){
    if(err)
        console.log("Mongoose connection error !");
    else
        console.log('Mongoose connection success.');
})