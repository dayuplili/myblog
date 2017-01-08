var express = require('express');
var app = express();

var userCtr = require('../controller/userCtr');

app.all('*',function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/login', function (request, response) {
    var username = request.query.userName;
    var password = request.query.passWord;
    userCtr.userFind(username,password,function(res){
        if(res && res.flag){
           response.send({data:'success'});
        }
    });
});

app.listen(3000);