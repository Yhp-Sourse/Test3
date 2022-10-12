import * as Vue from 'vue'
let home = [
  {
    path: '/',
    name: '首页',
    component: Vue.defineAsyncComponent(() => import('@/components/index')),
  },
]
export default home
