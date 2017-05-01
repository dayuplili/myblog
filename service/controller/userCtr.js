"use strict";
let User = require('../model/user');
let reqCode = require('../config/rescode');
let userCtr = {};

userCtr.userInsert = function(username,password,callback){
    var user = new User({
        username: username,
        password: password
    });

    user.save(function(err,res){
        if (err) {
           callback(res);
        }
        else {
            callback(reqCode.CREATED);
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