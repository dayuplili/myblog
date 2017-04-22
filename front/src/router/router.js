import Login from '../components/Login'
import List from '../components/List'
import Detail from '../components/Detail'
import userinfo from '../page/userInfo/userinfo'
import addblog from '../page/addblog/addBlog'

const routers = [
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/userinfo',
        name:'userinfo',
        component: userinfo
    },
    {
        path: '/List',
        name: 'List',
        component: List
    },
    {
        path:'/Detail',
        name:'Detail',
        component:Detail
    },
    {
      path:'/addblog',
      name:'addblog',
      component:addblog
    }
]

export default routers;
