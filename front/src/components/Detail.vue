<template lang="html">
    <div class="detail">
      <div class="ui-head">
          <h1>Leon Bolg</h1>
      </div>
      <div class="detail-content">
          <p class="title">{{list.title}}</p>
          <p class="content">{{list.content}}</p>
      </div>
    </div>
</template>

<script>
export default {
  name:'detail',
  data(){
    return {
      url:'http://127.0.0.1:3000/blog/getDetail?id=',
      list:'',
      id:''
    }
  },
  created(){
    this.id = this.fetchData();
    this.$http.get(this.url+this.id).then((data) =>{
        this.list = data.body;
    })
  },
  methods:{
    fetchData(){
      return this.$route.query.id;
    }
  }
}
</script>

<style lang="css">
  body{
    padding: 0;
    margin: 0;
    height: 100%;
  }
  .ui-head{
    width: 100%;
    height: 400px;
    background: url('../assets/2.jpg') no-repeat;
    background-size: 100% 100%;
  }
  .ui-head h1{
    font-family: -apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,"PingFang SC","Hiragino Sans GB",STHeiti,"Microsoft YaHei","Microsoft JhengHei","Source Han Sans SC","Noto Sans CJK SC","Source Han Sans CN","Noto Sans SC","Source Han Sans TC","Noto Sans CJK TC","WenQuanYi Micro Hei",SimSun,sans-serif;
    font-size: 80px;
    font-weight: bolder;
    color: #fff;
    padding: 0;
    margin: 0;
    text-align: center;
    padding-top: 140px;
  }
  .detail-content{
    width: 800px;
    height: 1000px;
    margin: 20px auto;
  }
  .title{
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }
  .content{
    font-size: 16px;
    color: #333;
    line-height: 20px;
  }
</style>
