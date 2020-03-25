var http = require('http');

var server = http.createServer(function(req,res){
    res.write("Result");
    res.end("End");
})
server.listen(8001)
