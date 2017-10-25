<template>
    <div class="blogList">
      <topBar></topBar>
      <slideMenu></slideMenu>
      <div class="container">
      </div> 
    </div>
</template>
<script>
import topBar from "../../components/header.vue";
import slideMenu from "../../components/slideMenu.vue";

export default {
  name: "blogList",
  components: {
    topBar,
    slideMenu
  }
};
</script>
<style scoped>
.container {
  background: #fff;
  margin: 20px 20px;
  float: left;
  width: 1100px;
}
</style>
