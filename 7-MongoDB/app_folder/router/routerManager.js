var routerLogin=require('./loginRouter');
var routerHome= require('./homeRouter');
var routerSignup=require('./signupRouter')

module.exports=function(app){
    app.use('/login',routerLogin);
    app.use('/signup',routerSignup);
    app.use('/',routerHome);
}