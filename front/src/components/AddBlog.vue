<template lang="html">
    <div class="addblog">
      <h1>编辑博客文章</h1>
      <el-row>
          <el-col :span="24">
              <el-form :label-position="labelPosition" label-width="80px">
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
</template>

<script>
export default {
  name:'addblog',
  data(){
      return{
          labelPosition:'top',
          formData:{
              title:'',
              content:'',
              type:''
          },
          types:null
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
    width: 800px;
    margin: 0 auto;
  }
  .addblog h1{
    text-align: center;
  }
</style>
