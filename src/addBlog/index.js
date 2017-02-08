(function(){
    $('.addBlog').on('click',function(){
        var title = $('#blog-title').val();
        var content = $('#blog-content').val();
        var param = {
            title:title,
            content:content
        }
        $.ajax({
            type:'post',
             url:'http://127.0.0.1:3000/addBlog',
             data:param,
             success:function(data){
                 if(data && data.result){
                     alert('保存成功');
                     window.location.reload();
                 }
             }
        })
    });
})(jQuery)
