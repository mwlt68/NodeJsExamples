var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
    console.log('Server Start !')

    if(req.url =='/home'){
        console.log("Home Page");
        fs.readFile('home.html',function(err,data){
            res.write(data);
            res.end("homeEnd");
        })
    }
    if(req.url=='/login'){
        console.log("Login Page");
        fs.readFile('login.html',function(err,data){
            res.write(data);
            res.end('loginEnd');
        })
    }
})

server.listen(8000);