var Blog = require('../model/blog');
var blogCtr = {};
var mongoose = require('mongoose'); 
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
    var id = mongoose.Types.ObjectId('587b169e576b4213b8f6f26d'); 
    Blog.find({_id:id},function(res){
        callback(res);
    });
};

module.exports = blogCtr;