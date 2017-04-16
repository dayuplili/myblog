var express = require('express');
var router = express.Router();
var userCtr = require('../../controller/userCtr');

router.post('/login', function (request, response) {
    var username = request.body.username;
    var password = request.body.password;
    userCtr.userFind(username,password,function(res){
        if(res && res.flag){
            response.send({data:'success'});
        }else{
            response.send({data:'false'});
        }
    });
});

module.exports = router;