(function(){
    $('.addBlog').on('click',function(){
        var param = {
            title:'123',
            content:'321'
        }
        $.ajax({
            type:'post',
             url:'http://127.0.0.1:3000/addBlog',
             data:param,
             success:function(data){
                 alert(data);
             }
        })
    });
})(jQuery)
