<template>
  <div class="slideMenu">
    <el-menu theme="dark" default-active="1" class="slide-menu">
      <el-menu-item index='1'>发布文章</el-menu-item>
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
