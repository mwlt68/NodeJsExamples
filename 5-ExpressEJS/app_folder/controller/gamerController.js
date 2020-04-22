module.exports.gamers= function(req,res){
    var names =['ali','veli','kemal','mahmut'];
    res.render('gamer',{
        names:names
    });
}