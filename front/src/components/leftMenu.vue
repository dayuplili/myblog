<template lang="html">
  <div class="leftmenu">
    <el-menu :default-active='tabStatus' :router='true'>
      <el-menu-item-group>
        <el-menu-item index="userinfo">个人信息</el-menu-item>
        <el-menu-item index="addblog">编辑博客</el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </div>
</template>

<script>
export default {
  name:'leftmenu',
  data(){
    return {
      activeIndex:'userinfo'
    }
  },
  props:['tabStatus']
}
</script>

<style lang="css">
.leftmenu{
  width: 200px;
  float: left;
}
.leftmenu .el-menu{
  background-color: #fff;
}
</style>
