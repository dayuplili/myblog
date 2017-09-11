<template lang="html">
  <div class='ui-login'>
    <div class='ui-left'></div>
    <div class='ui-right'>
      <div class='login-container'> 
        <h1>登录</h1>
        <el-input class="login-input" placeholder="用户名"></el-input>
        <el-input class="login-input" placeholder="密码"></el-input>
        <el-button class="login-btn">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'login',
  data(){
    return {
    }
  }
}
</script>

<style lang="css">
html{
  overflow: hidden;
}
.ui-login{
  height: 100%;
  display: flex;
  flex-direction: row;
}
.ui-left{
  flex: 1;
  background: url('../../assets/img/pic-1.jpg') no-repeat;
  background-size: 100% 100%;
}
.ui-right{
  flex:1;
  background: white;
  display: flex;
  justify-content: center;
}
.login-container{
  flex: .6;
  align-self: center;
  height: 400px;
}
.login-input{
  margin-bottom: 20px;
}
.login-btn{
  width: 100%;
}
</style>
