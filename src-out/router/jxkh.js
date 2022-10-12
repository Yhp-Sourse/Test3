import * as Vue from 'vue'
let jxkh = [
  {
    path: '/TwoRate',
    name: '两率统计',
    redirect: '/index/TwoRate',
    component: Vue.defineAsyncComponent(
      () => import('@/components/pages/jxKH/twoRate')
    ),
  },
  {
    path: '/YwTotal',
    name: '运维统计',
    redirect: '/index/YwTotal',
    component: Vue.defineAsyncComponent(
      () => import('@/components/pages/jxKH/ywTotal')
    ),
  },
  {
    path: '/JcTotal',
    name: '检查统计',
    redirect: '/index/JcTotal',
    component: Vue.defineAsyncComponent(
      () => import('@/components/pages/jxKH/jcTotal')
    ),
  },
  {
    path: '/JcScore',
    name: '考核评分',
    redirect: '/index/JcScore',
    component: Vue.defineAsyncComponent(
      () => import('@/components/pages/jxKH/jcScore')
    ),
  },
  {
    path: '/KHTotal',
    name: '考核统计',
    redirect: '/index/KHTotal',
    component: Vue.defineAsyncComponent(
      () => import('@/components/pages/jxKH/kHTotal')
    ),
  },
  {
    path: '/index',
    name: '首页',
    component: Vue.defineAsyncComponent(() => import('@/components/index')),
    children: [
      {
        path: '/index/TwoRate',
        name: '两率统计',
        component: Vue.defineAsyncComponent(
          () => import('@/components/pages/jxKH/twoRate')
        ),
      },
      {
        path: '/index/YwTotal',
        name: '运维统计',
        component: Vue.defineAsyncComponent(
          () => import('@/components/pages/jxKH/ywTotal')
        ),
      },
      {
        path: '/index/JcTotal',
        name: '检查统计',
        component: Vue.defineAsyncComponent(
          () => import('@/components/pages/jxKH/jcTotal')
        ),
      },
      {
        path: '/index/JcScore',
        name: '考核评分',
        component: Vue.defineAsyncComponent(
          () => import('@/components/pages/jxKH/jcScore')
        ),
      },
      {
        path: '/index/KHTotal',
        name: '考核统计',
        component: Vue.defineAsyncComponent(
          () => import('@/components/pages/jxKH/kHTotal')
        ),
      },
    ],
  },
]
export default jxkh
