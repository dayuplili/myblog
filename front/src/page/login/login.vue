<template lang="html">
  <div>
    <tophead></tophead>
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
                        <el-button type="primary" @click='submitForm'>登录</el-button>
                        <el-button type="primary" @click='signup'>注册</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
  </div>
</template>

<script>
import tophead from '../../components/header'
export default {
  name:'login',
  data(){
    return {
      labelPosition:'top',
      formData:{
          name:'',
          password:''
      },
      url:'http://127.0.0.1:3000/user/login'
    }
  },
  components:{
    tophead
  },
  http: {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  },
  methods:{
      submitForm(){
          this.$http.post(this.url,{username:this.formData.name,password:this.formData.password},{emulateJSON:true})
          .then(function(data){
            if(data.body.data == 'success'){
              this.$router.push({path:'/backstage/userinfo',query:{username:this.formData.name}});
            }else{
              this.$message.error('用户名或密码错误');
            }
          })
      },
      signup(){
        this.$http.post('http://127.0.0.1:3000/user/register',{username:this.formData.name,password:this.formData.password},{emulateJSON:true})
        .then(function(data){
          if(data.body.code === 201){
            this.$router.push({path:'/backstage/userinfo',query:{username:this.formData.name}});
          }else{
            this.$message.error('用户注册失败，请重新注册');
          }
        })
      }
  }
}
</script>

<style lang="css">
.login{
    width: 400px;
    margin: 20px auto;
    padding: 0 20px;
    border-radius: 4px;
}
.login h1{
    text-align: center;
    margin-top: 100px;
}
</style>
