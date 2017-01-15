var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

var userCtr = require('../controller/userCtr');
var blogCtr = require('../controller/blogCtr');

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

app.get('/getLists',function(request,response){
    blogCtr.blogLists(function(data){
        console.log(data);
        response.send({lists:data});
    });
});

app.post('/addBlog',function(request,response){
    var param = request.body;
    blogCtr.blogInsert(param,function(data){
        console.log(data.data);
    })
});

app.listen(3000);