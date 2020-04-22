var User =require('../models/user');
module.exports.signupGet=function(req,res){
    console.log("signupGet");
    res.render('signup');
}
module.exports.signupPost=function(req,res){
    console.log("signupPost");
    var user =new User({
        name:req.body.name,
        surname:req.body.surname,
        username:req.body.username,
        password:req.body.password
    });
    user.save(function(err){
        if(err)
            console.log('User save error !');
        else{
            console.log('User save success.');
        }
    });
    res.render('home',{
        name:user.name,
        surname:user.surname
    });

}
  