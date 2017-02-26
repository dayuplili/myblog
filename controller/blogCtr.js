var Blog = require('../model/blog');
var blogCtr = {};
var ObjectId = require('mongodb').ObjectID;

blogCtr.blogInsert = function(param,callback){
    var blog = new Blog({
        title:param.title,
        content:param.content
    });

    blog.save(function(err,res){
        if (err) {
            console.log("Error:" + err);
            callback({data:'fail'});
        }
        else {
            console.log("Res:" + res);
            callback({result:true});
        }
    });
};

blogCtr.blogLists = function(callback){
    Blog.find({},function(err,res){
        callback(res);
    });
};

blogCtr.getBlogDetail = function(fileKey,callback){
    Blog.findById(fileKey,function(res){
        callback(res);
    });
};

module.exports = blogCtr;