
$.ajax({
    type:'get',
    url:'http://127.0.0.1:3000/getLists',
    success:function(data){
        data.lists && renderHtml(data.lists);
        console.log(123);
    }
});

function renderHtml(data){
    var str = '';
    data.map(function(item,index){
        str +=  '<div class="list-group-item">'+
                '<p>'+item.title+'</p>'+
                '</div>';
    });
    $('.list-group').append(str);
}
