import Login from './components/Login'
import List from './components/List'
import Detail from './components/Detail'
import addBlog from './components/AddBlog'

const routers = [
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        component: Login
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
      path:'/AddBlog',
      name:'addblog',
      component:addBlog
    }
]

export default routers;
