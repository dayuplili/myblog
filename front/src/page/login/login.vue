<template lang="html">
  <div class='ui-login'>
    <div class='ui-left'></div>
    <div class='ui-right'>
      <div class='login-container'> 
        <h1>欢迎</h1> 
        <el-input class="login-input" :disabled="isLoading" placeholder="用户名" v-model='userName'></el-input>
        <el-input class="login-input" :disabled="isLoading" placeholder="密码" v-model='passWord' type='password'></el-input>
        <el-button class="login-btn signIn" :loading="isLoading" @click='submit(1)'>登录</el-button>
        <el-button class="login-btn signUp" :loading="isLoading" @click='submit(2)'>注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import urlList from '../../config/url.js'
export default {
  name: 'login',
  data() {
    return {
      userName: '',
      passWord: '',
      isLoading: false,
      loginUrl: urlList.login
    }
  },
  methods: {
    submit(type) {
      if (this.userName == '' || this.passWord == '') {
        this.$message({
          message: '信息不能为空',
          type: 'warning'
        });
      } else {
        this.bindAjax(type);
        this.isLoading = true;
      }
    },
    bindAjax(type) {
      this.$http.get(this.loginUrl, { 'params': { 'userName': this.userName, 'passWord': this.passWord, 'type': type } })
        .then((res) => {
          if (res.status === 200) {
            if (res.body.code === 201 && res.body.type === 2) {
              this.$message({
                message: '注册成功,即将自动跳转',
                type: 'success',
                onClose: () => {
                  this.$router.push({path:'/usercenter'});
                }
              });
            } else if (res.body.code === 200 && res.body.type === 1) {
              this.$router.push({path:'/usercenter'});
            }
            this.$store.commit('bindUserName',{'userName':this.userName});
          }
        }, (err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="css" scoped>
html {
  overflow: hidden;
}

.ui-login {
  height: 100%;
  display: flex;
  flex-direction: row;
}

.ui-left {
  flex: 1;
  background: url('../../assets/img/pic-1.jpg') no-repeat;
  background-size: 100% 100%;
}

.ui-right {
  flex: 1;
  background: white;
  display: flex;
  justify-content: center;
}

.login-container {
  flex: .6;
  align-self: center;
  height: 400px;
}

.login-input {
  margin-bottom: 20px;
}

.login-btn {
  width: 40%;
}

.login-btn.signIn {
  float: left;
}

.login-btn.signUp {
  float: right;
}
</style>
