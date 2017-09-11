<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<script>
  export default({
    name:'app'
  })
</script>
<style>
body,html{
  background:#e9ecf1;
  height: 100%;
  margin: 0;
  padding: 0;
}
.app{
  height: 100%;
}
</style>
