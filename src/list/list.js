
$.ajax({
    type:'get',
    url:'http://127.0.0.1:3000/getLists',
    success:function(data){
        data.lists && renderHtml(data.lists)
    }
});

function renderHtml(data){
    var str = '';
    data.map(function(item,index){
        str +=  '<a href="#" class="list-group-item">'+
                '<p>'+item.title+'</p>'+
                '</a>';
    });
    $('.list-group').append(str);
}