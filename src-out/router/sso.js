import * as Vue from 'vue'
let sso = [
  {
    path: '/',
    name: 'HelloWorld',
    component: Vue.defineAsyncComponent(
      () => import('@/components/HelloWorld')
    ),
  },
  {
    path: '/CallBack',
    name: 'CallBack',
    component: Vue.defineAsyncComponent(() => import('@/components/CallBack')),
  },
  {
    path: '/Home',
    name: 'Home',
    component: Vue.defineAsyncComponent(() => import('@/components/index')),
  },
]
export default sso
