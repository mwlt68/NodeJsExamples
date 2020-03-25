var http= require('http');
var fs=require('fs');

var router=new Object();

var homeController= function(req,res){
        fs.readFile('home.html',function(err,data){
                res.write(data);
                res.end('homeEnd');
        });
}
var loginController = function(req,res){
        fs.readFile('login.html',function(err,data){
                res.write(data);
                res.end();
        })
}
router['/home']=homeController;
router['/login']=loginController;
var server =http.createServer(function(req,res){

        if(req.url in router)
                router[req.url](req,res);

})
server.listen(8000);