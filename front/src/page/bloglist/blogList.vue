<template>
    <div class="blogList">
      <topBar></topBar>
      <slideMenu></slideMenu>
      <div class="container">
        <el-table border :data='tableData'>
          <el-table-column label="时间" prop='pageDate'>
          </el-table-column>
          <el-table-column label="文章名称" prop='pageTitle'>
          </el-table-column>
          <el-table-column label="标签" prop='pageTag'>
          </el-table-column>
          <el-table-column label="操作">
          </el-table-column>    
        </el-table>
      </div> 
    </div>
</template>
<script>
import topBar from "../../components/header.vue";
import slideMenu from "../../components/slideMenu.vue";
import urlList from '../../config/url.js'
export default {
  created(){
    this.$http.get(urlList.getBlogs,{'params':{'userName':this.$store.state.userName}}).then(res=>{
      if(res.status === 200){
        this.tableData = res.body.result;
      }
    })
  },
  name: "blogList",
  data(){
    return {
      tableData: []
    }
  },
  components: {
    topBar,
    slideMenu
  }
};
</script>
<style scoped>
.blogList{
  height: 100%;
}
.container {
  background: #fff;
  margin: 20px 20px;
  float: left;
  width: 1100px;
}
</style>
