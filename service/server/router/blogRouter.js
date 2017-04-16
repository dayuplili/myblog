var express = require('express');
var router = express.Router();
var blogCtr = require('../../controller/blogCtr');

router.get('/getLists',function(request,response){
    blogCtr.blogLists(function(data){
        console.log(data);
        response.send({lists:data});
    });
});

router.post('/addBlog',function(request,response){
    var param = request.body;
    blogCtr.blogInsert(param,function(data){
        response.send(data);
    })
});

router.get('/getDetail',function(req,res){
    var fileKey = req.query.id;
    blogCtr.getBlogDetail(fileKey,function(data){
        res.send(data);
    });
});

router.get('/getType',function(req,res){
     blogCtr.getBlogType(function(data){
        res.send(data);
    });
})

module.exports = router;