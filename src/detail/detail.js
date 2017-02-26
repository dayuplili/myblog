function init(){
    var data = window.location.search.split('=')[1];
    $.ajax({
        url:'http://127.0.0.1:3000/blog/getDetail?id='+data,
        success:function(data){
            console.log(data);
        }
    })
}

$(document).ready(function(){
    init();
});