$('.doLogin').on('click',function(){
    var username = $('#username').val();
    var password = $('#inputPassword').val();
    var param = {
        userName:username,
        passWord:password
    };
    $.ajax({
        url:'http://127.0.0.1:3000/login',
        type:'get',
        data:param,
        success:function(data){
            if(data.data && (data.data == 'success')){
                window.location.href = 'file:///D:/myblog/myblog/src/list/list.html'
            }
        }
    })
})