var express = require('express');
var router = express.Router();
var userCtr = require('../../controller/userCtr');
var cookie = require('../../config/cookie');

router.post('/login', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    userCtr.userFind(username,password,function(data){
        if(data && data.flag){
            res.send({data:'success'});
        }else{
            res.send({data:'false'});
        }
    });
});

router.post('/register',function(req,res) {
    var username = req.body.username;
    var password = req.body.password;
    userCtr.userInsert(username,password,function(data){
        if(data.code === 201){
            res.send(data);
        }
        
    })
});

module.exports = router;