<template lang="html">
  <div class="">
    <tophead></tophead>
    <div class="addblog clearfix">
      <leftmenu :tab-status='activeIndex'></leftmenu>
      <div class="addblog-main">
        <el-row>
            <el-col :span="16">
                <el-form :label-position="labelPosition" label-width="80px" class="bloginfo-form">
                    <el-form-item label="文章名称">
                        <el-input v-model='formData.title'></el-input>
                    </el-form-item>
                    <el-form-item label="文章标签">
                        <el-select v-model='formData.type'
                                  filterable
                                  multiple
                                  :multiple-limit=1
                                  allow-create
                                  placeholder="请选择文章标签">
                          <el-option
                          v-for="item in types"
                          :label="item"
                          :value="item"
                          key='$index'></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="文章内容">
                        <el-input type='textarea' :autosize='{minRows: 10}' v-model='formData.content'></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click='submitForm'>保存</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import leftmenu from '../../components/leftMenu'
import tophead from '../../components/header'
export default {
  name:'addblog',
  components:{
    tophead,
    leftmenu
  },
  data(){
      return{
          labelPosition:'top',
          formData:{
              title:'',
              content:'',
              type:''
          },
          types:null,
          activeIndex:'addblog'
      }
  },
  created(){
      this.$http.get('http://127.0.0.1:3000/blog/getType').then(function(data){
            this.types = data.body;
      })
  },
  http: {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  },
  methods:{
    submitForm(){
      var url = 'http://127.0.1:3000/blog/addBlog';
      this.$http.post(url,this.formData,{emulateJSON:true}).then(function(data){
      var tag = data.body.result;
      if(tag){
          this.$message('保存成功');
        }
      },function(res){
          this.$message('保存失败');
      })
    }
  }
}
</script>

<style lang="css">
.addblog{
  width: 1000px;
  margin: 80px auto;
  background-color: #fff;
  z-index: 2;
}
.clearfix{
  clear: both;
  overflow: hidden;
}
.addblog-main{
  width: 800px;
  float: right;
  padding-top: 30px;
  padding-bottom: 20px;
}
.bloginfo-form{
  padding-left: 20px;
}
</style>
