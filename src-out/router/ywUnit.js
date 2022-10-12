import * as Vue from 'vue'
let ywUnit = [
  {
    path: '/ywUnit',
    name: '运维任务',
    redirect: '/index/ywUnit',
  },
  {
    path: '/index',
    name: '首页',
    component: Vue.defineAsyncComponent(() => import('@/components/index')),
    children: [
      {
        path: '/index/ywUnit',
        name: '运维任务',
        component: Vue.defineAsyncComponent(
          () => import('@/components/pages/ywTask/ywUnit')
        ),
      },
    ],
  },
]
export default ywUnit
