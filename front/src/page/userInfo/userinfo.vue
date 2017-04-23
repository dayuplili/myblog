<template>
  <div class="">
    <tophead></tophead>
    <div class='userinfo clearfix'>
      <leftmenu :tab-status='activeIndex' ref="leftmenu"></leftmenu>
      <div class="userinfo-main">
        <el-form :label-position='labelPosition' class="userinfo-form">
          <el-form-item label="姓名：">
            <el-input style="width:400px" v-model="formDate.name"></el-input>
          </el-form-item>
          <el-form-item label="昵称：">
            <el-input style="width:400px" v-model="formDate.nickname"></el-input>
          </el-form-item>
          <el-form-item label="邮箱：">
            <el-input style="width:400px" v-model="formDate.email"></el-input>
          </el-form-item>
          <el-form-item label="电话：">
            <el-input style="width:400px" v-model="formDate.phone"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click='bindSubmit'>保存信息</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import leftmenu from '../../components/leftMenu'
import tophead from '../../components/header'
export default{
  name:'userinfo',
  components:{
    leftmenu,
    tophead
  },
  data(){
    return {
      labelPosition:'left',
      formDate:{
        name:'',
        nickname:'',
        email:'',
        phone:''
      },
      activeIndex:'userinfo'
    }
  },
  methods:{
    bindSubmit(){
      console.log(this.formDate);
      console.log(this.$refs);
    }
  }
}
</script>
<style>
.userinfo{
  width: 1000px;
  margin: 80px auto;
  background-color: #fff;
  z-index: 2;
}
.userinfo-main{
  width: 800px;
  float: right;
  padding-top: 30px;
  padding-bottom: 20px;
}
.clearfix{
  clear: both;
  overflow: hidden;
}
.userinfo-form{
  padding-left: 20px;
}
</style>
