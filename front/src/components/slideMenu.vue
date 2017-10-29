<template>
  <div class="slideMenu">
    <el-menu theme="dark" default-active="1" class="slide-menu" router>
      <el-menu-item index="/usercenter">发布文章</el-menu-item>
      <el-menu-item index="/usercenter/blogList">文章列表</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name:'slideMenu'
}
</script>
<style scoped>
.slideMenu{
    float: left;
    width: 200px;
    height: 100%;
    background-color: #fff;
}
.slide-menu{
  height: 100%;
}
</style>
