"use strict";

let UserInfo = require('../model/userinfo');
let reqCode = require('../config/rescode');
let userInfo = {};

userInfo.postInfo = function(param,callback){
    let userinfo = new UserInfo({
        name:param.name,
        nickname:param.nickname,
        email:param.email,
        tel:param.phone
    });

    userinfo.save(function(err,res){
        if (err) {
            callback({result:false});
        }
        else {
            callback(reqCode.CREATED);
        }
    });
};

module.exports = userInfo;