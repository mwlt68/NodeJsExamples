var express=require('express');
var router=express.Router();
var ctrlSignup=require('../controller/signupController');
router.get('/',ctrlSignup.signupGet);
router.post('/',ctrlSignup.signupPost);
module.exports=router;