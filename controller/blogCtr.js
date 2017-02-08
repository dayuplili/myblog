var Blog = require('../model/blog');
var blogCtr = {};

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

module.exports = blogCtr;