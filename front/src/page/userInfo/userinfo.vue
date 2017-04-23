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
      <slot name="item"></slot>
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
      this.$http.post('http://127.0.0.1:3000/api/userinfos/putInfo',this.formDate,{emulateJSON:true}).
        then((res) => {
          let code = res.body.code;
          if(code === 201){
            this.$message('保存成功');
          }
        } , (resErr) => {
            this.$message('系统异常');
        })
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
