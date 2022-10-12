import * as Vue from 'vue'
let ywConsume = [
  {
    path: '/ywConsume',
    name: '运维耗材',
    redirect: '/index/ywConsume',
  },
  {
    path: '/index',
    name: '首页',
    component: Vue.defineAsyncComponent(() => import('@/components/index')),
    children: [
      {
        path: '/index/ywConsume',
        name: '运维耗材',
        component: Vue.defineAsyncComponent(
          () => import('@/components/pages/ywTask/ywConsume')
        ),
      },
    ],
  },
]
export default ywConsume
