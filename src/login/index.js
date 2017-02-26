var vm = new Vue({
    el:'#app',
    data:{
        username:null,
        password:null
    },
    methods:{
        doLogin:function(){
            var url = 'http://127.0.0.1:3000/user/login?username='+this.username+'&password='+this.password;
            this.$http.get(url).then(function(data){
                console.log(data.body.data);
            },function(res){
                console.log(res);
            });
        }
    }
})
