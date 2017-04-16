<template>
    <div class="login">
        <h1>欢迎登陆</h1>
        <el-row>
            <el-col :span="24">
                <el-form :label-position="labelPosition" label-width="80px">
                    <el-form-item label="用户名">
                        <el-input v-model='formData.name'></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model='formData.password'></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click='submitForm'>提交</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    export default({
        name:'login',
        data(){
            return{
                labelPosition:'top',
                formData:{
                    name:'',
                    password:''
                },
                url:'http://127.0.0.1:3000/user/login'
            }
        },
        http: {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        },
        methods:{
            submitForm(){
                this.$http.post(this.url,{username:this.formData.name,password:this.formData.password},{emulateJSON:true})
                .then(function(data){
                  if(data.body.data == 'success'){
                    this.$router.push({path:'/AddBlog'});
                  }else{
                    this.$message.error('用户名或密码错误');
                  }
                })

            }
        }
    })
</script>
 <style>
     .login{
         width: 400px;
         margin: 0 auto;
     }
     .login h1{
         text-align: center;
         margin-top: 100px;
     }
 </style>
