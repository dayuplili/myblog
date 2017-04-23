var express = require('express');
var router = express.Router();
var userInfoCtr = require('../../controller/userinfoCtr');

router.post('/putInfo',function(req,res){
    var param = req.body;
    userInfoCtr.postInfo(param,function(data){
        res.send(data);
    })
});

module.exports = router;