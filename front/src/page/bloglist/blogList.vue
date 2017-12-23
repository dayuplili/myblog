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
            <template scope="scope">
               <el-button size="small" @click="handleDelete(scope)">删除</el-button>
            </template>  
          </el-table-column>    
        </el-table>
      </div> 
    </div>
</template>
<script>
import topBar from "../../components/TopNav.vue";
import slideMenu from "../../components/slideMenu.vue";
import urlList from "../../config/url.js";
import { mapState } from 'vuex'

export default {
  created() {
    this.$http
      .get(urlList.getBlogs, {
        params: { userName: this.userName }
      })
      .then(res => {
        if (res.status === 200) {
          this.tableData = res.body.result;
        }
      });
  },
  name: "blogList",
  data() {
    return {
      tableData: []
    };
  },
  computed:{
    ...mapState([
      'userName'
    ])
  },
  components: {
    topBar,
    slideMenu
  },
  methods: {
    handleDelete(item) {
      var id = item.row._id;
      this.$http
        .get(urlList.deletePage, {
          params: { pageId: id,userName: this.$store.state.userName }
        })
        .then(res => {
          if (res.status === 200) {
           this.tableData = res.body.result;
          }
        });
    }
  }
};
</script>
<style scoped>
.blogList {
  height: 100%;
}
.container {
  background: #fff;
  margin: 20px 20px;
  float: left;
  width: 1100px;
}
</style>
