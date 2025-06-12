import Home from '../components/Home';
import Login from '../components/Login'

export default [
  {
    path: "/",
    element: Home,
    loadData: Home.loadData,//服务端获取异步数据的函数
    key: 'home'
  },
  {
    path: '/login',
    element: Login,
    key: 'login'
  }
]