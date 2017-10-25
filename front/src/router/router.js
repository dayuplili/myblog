
import addblog from '../page/addblog/addBlog'    //博客编辑
import login from '../page/login/login' //登陆页面
import bloglist from '../page/bloglist/blogList' //博文列表页

const routers = [
  {
    path:'/usercenter',
    component:addblog
  },
  {
    path:'/',
    component:login
  },
  {
    path:'/usercenter/blogList',
    component:bloglist
  }
]

export default routers;
