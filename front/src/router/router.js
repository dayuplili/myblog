import userinfo from '../page/userInfo/userinfo' //个人信息
import addblog from '../page/addblog/addBlog'    //博客编辑

const routers = [
  {
    path:'/backstage/userinfo',
    component:userinfo
  },
  {
    path:'/backstage/addblog',
    component:addblog
  }
]

export default routers;
