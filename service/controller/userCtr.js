var User = require('../model/user');
var userCtr = {};

userCtr.userInsert = function(){
    var user = new User({
        username:'lin',
        password:'123456'
    });

    user.save(function(err,res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    });
};

userCtr.userFind = function(name,password,callback){
    User.find({username:name,password:password},function(err,res){
        if(err){
            console.log("Error:" + err);
        }else{
            if(res.length != 0){
                callback({flag:true});
            }else{
                callback({flag:false})
            }
        }
    });
};

module.exports = userCtr;