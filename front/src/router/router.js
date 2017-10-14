
import addblog from '../page/addblog/addBlog'    //博客编辑
import login from '../page/login/login' //登陆页面

const routers = [
  {
    path:'/usercenter',
    component:addblog
  },
  {
    path:'/',
    component:login
  }
]

export default routers;
