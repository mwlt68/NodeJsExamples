var express=require('express');
var router= express.Router();
var controller=require('../controller/gamerController');


router.get('/gamers',controller.gamers);

module.exports=router;