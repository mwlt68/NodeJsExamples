var path= require('path');

module.exports.index= function(req,res){
    res.sendFile(path.join(__dirname,'electronic.html'));
}
module.exports.computer= function(req,res){
    res.sendFile(path.join(__dirname,'electronic_computer.html'));
}