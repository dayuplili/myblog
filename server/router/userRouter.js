var express = require('express');
var router = express.Router();
var userCtr = require('../../controller/userCtr');

router.get('/login', function (request, response) {
    var username = request.query.username;
    var password = request.query.password;
    userCtr.userFind(username,password,function(res){
        if(res && res.flag){
            response.send({data:'success'});
        }
    });
});

module.exports = router;