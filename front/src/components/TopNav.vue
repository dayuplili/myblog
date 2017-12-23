<template lang="html">
  <div class="header">
    <p>博客后台系统</p>
    <em @click='login' v-show='isLogin'>当前用户：{{ username }}</em>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name:'topNav',
  data(){
    return {
      username:'',
      isLogin:false
    }
  },
  created(){
    this.username = this.userName;
    this.isLogin = true;
  },
  computed:{
    ...mapState([
      'userName'
    ])
  },
  methods:{
    login(){
      this.$router.push({path:'/'})
    }
  }
}
</script>

<style lang="css">
.header{
  width: 100%;
  height: 50px;
  background: #fff;
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
}
.header p{
  color: #20A0FF;
  font-size: 24px;
  line-height: 50px;
  padding-left: 70px;
  margin: 0 0;
  display: inline-block;
}
.header em{
  font-style: normal;
  float: right;
  line-height: 50px;
  padding-right: 40px;
}
</style>
