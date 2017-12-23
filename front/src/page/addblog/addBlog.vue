<template lang="html">
  <div class="addBlog">
    <topBar></topBar>
    <slideMenu></slideMenu>
    <div class="container">
      <el-form label-width="80px" class="blog-form" ref="numberValidateForm">
        <el-form-item label="文章标题">
          <el-input placeholder="请输入文章标题" v-model='blogForm.mainTitle'></el-input>
        </el-form-item>
        <el-form-item label="文章标签">
          <el-input placeholder="请输入文章标签" v-model='blogForm.tag'></el-input>
        </el-form-item>
        <el-form-item label="文章内容">
          <quill-editor   
          v-model="blogForm.editValue"
          :options="editorOption"></quill-editor>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" size="large" @click='formSubmit' :loading="isLoading">发布</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import topBar from '../../components/TopNav.vue'
import slideMenu from '../../components/slideMenu.vue'
import Quill from 'quill'
import { ImageImport } from '../../assets/modules/ImageImport.js'
import { ImageResize } from '../../assets/modules/ImageResize.js'
Quill.register('modules/imageImport', ImageImport)
Quill.register('modules/imageResize', ImageResize)
import urlList from '../../config/url.js'
export default {
  name: 'addBlog',
  components: {
    topBar,
    slideMenu
  },
  data() {
    return {
      editorOption: {
        modules: {
          toolbar: [
            ['bold', 'italic'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link', 'image']
          ],
          history: {
            delay: 1000,
            maxStack: 50,
            userOnly: false
          },
          imageImport: true,
          imageResize: {
            displaySize: true
          }
        }
      },
      blogForm: {
        editValue: '',
        mainTitle: '',
        tag: ''
      },
      isLoading: false
    }
  },
  methods: {
    formSubmit(name) {
      this.isLoading = true;
      this.blogForm['userName'] = this.$store.state.userName;
      this.$http.post(urlList.addPage, this.blogForm, { emulateJSON: true })
        .then((res) => {
          if (res.status === 200) {
            this.$message({
              message: '发布博客成功',
              type: 'success',
              onClose: () => {
                this.isLoading = false;
              }
            });
          }
        },
        (err) => {
          console.log(err);
        })
    }
  }
}
</script>

<style lang="css" scoped>
.addBlog {
  height: 100%;
}

.container {
  background: #fff;
  margin: 20px 20px;
  float: left;
  width: 1100px;
}

.ql-container.ql-snow {
  height: 250px;
}

.blog-form {
  padding: 30px 30px;
}
</style>
