<template>
    <div class='list'>
        <div class="ui-head">
            <h1>Leon Bolg</h1>
        </div>
        <div class="list-group">
            <div class="list-group-item" v-bind='{id:item._id}'  v-for='item in lists' @click='itemHref(item._id)'>
                <p class='list-item-title'>{{ item.title }} </p>
                <span>分类：{{ item.type }}</span>
                <p class='list-item-content'>{{ item.content.substring(0,100) }}...</p>
            </div>
        </div>
    </div>
</template>

<script>
export default ({
    name:'list',
    data(){
      return {
        url:'http://127.0.0.1:3000/blog/getLists',
        lists:null
      }
    },
    created(){
      this.$http.get(this.url).then(function(data){
            if(data.body.lists){
                this.lists = data.body.lists;
                console.log(this.lists);
            }
        },function(res){
            console.log(res);
        })
    },
    methods:{
      itemHref:function(e){
            var _id = e;
            this.$router.push({path:'/Detail',query:{'id':_id}});
        }
    }
})
</script>

<style>
  body{
    padding: 0;
    margin: 0;
    height: 100%;
  }
  .ui-head{
    width: 100%;
    height: 400px;
    /*background: url('../assets/2.jpg') no-repeat;*/
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
  .list-group{
    width: 1000px;
    margin: 20px auto;
  }
  .list-group-item{
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
    text-decoration: none;
    color: #000;
    line-height: 35px;
    padding-left: 15px;
    cursor: pointer;
  }
  p{
    padding: 0;
    margin: 0;
  }
  .list-group-item span{
    font-size:12px;
    color:#333;
    font-style:normal;
    padding-left:10px;
  }
  .list-item-content{
    padding-bottom:10px;
  }
  .list-item-title{
    display:inline-block;
    font-weight:bolder;
  }
</style>
