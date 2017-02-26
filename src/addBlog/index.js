var vm = new Vue({
    el:'#app',
    data:{
        title:null,
        content:null,
        data:{}
    },
    http: {
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
    },
    methods:{
        addBlog:function(){
            var url = 'http://127.0.1:3000/blog/addBlog';
            this.data.title = this.title;
            this.data.content = this.content;
            this.$http.post(url,this.data,{emulateJSON:true}).then(function(data){
                var tag = data.body.result;
                if(tag){
                    alert('保存成功');
                    window.location.reload();
                }
            },function(res){
                console.log(res);
            })
        }
    }
})
