var express=require('express');
var router= express.Router();
var controller=require('../controller//electronicController');

router.use(function(req,res,next){
    console.log('Router next function called.');
    next();
});

router.get('',controller.index);
router.get('/computer',controller.computer);

module.exports=router;