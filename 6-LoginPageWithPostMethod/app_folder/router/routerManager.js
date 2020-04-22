var routerLogin=require('./loginRouter');
var routerHome= require('./homeRouter');

module.exports=function(app){
    app.use('/login',routerLogin);
    app.use('/',routerHome);
}