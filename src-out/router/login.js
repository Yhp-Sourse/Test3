import * as Vue from 'vue'
let login = [
  {
    path: '/login',
    name: '登录',
    component: Vue.defineAsyncComponent(() => import('@/components/Login')),
  },
  {
    path: '/login2',
    name: '登录',
    component: Vue.defineAsyncComponent(() => import('@/components/Login2')),
  },
]
export default login
