var vm = new Vue({
    el:'#app',
    data:{
        url:'http://127.0.0.1:3000/blog/getLists',
        lists:null
    },
    created:function(){
        this.$http.get(this.url).then(function(data){
            if(data.body.lists){
                this.lists = data.body.lists;
                console.log(this.lists);
            }
        },function(res){
            console.log(res);
        })
    },
    methods:{
        itemHref:function(e){
            var _id = e;
            window.location.href = '/src/detail/detail.html?id='+_id;
        }
    }
})
