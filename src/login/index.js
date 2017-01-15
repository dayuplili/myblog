$('.doLogin').on('click',function(){
    var username = $('#username').val();
    var password = $('#inputPassword').val();
    var param = {
        userName:username,
        passWord:password
    };
    $.ajax({
        url:'http://172.30.150.43:3000/login',
        type:'get',
        data:param,
        success:function(data){
            if(data.data && (data.data == 'success')){
                window.location.href = '/src/list/list.html';
            }
        }
    })
})