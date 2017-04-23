var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

var userRouter = require('./router/userRouter');
var blogRouter = require('./router/blogRouter');
var userInfo = require('./router/userinfo');

app.all('*',function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use('/user',userRouter);
app.use('/blog',blogRouter);
app.use('/api/userinfos',userInfo);

app.listen(3000);