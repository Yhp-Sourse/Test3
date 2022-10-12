import * as Vue from 'vue'
let usermgr = [
  {
    path: '/userMgr',
    name: '用户管理',
    redirect: '/index/userMgr',
  },
  {
    path: '/roleMgr',
    name: '角色管理',
    redirect: '/index/roleMgr',
  },
  {
    path: '/functionMgr',
    name: '按钮管理',
    redirect: '/index/functionMgr',
  },
  {
    path: '/menuMgr',
    name: '菜单管理',
    redirect: '/index/menuMgr',
  },
  {
    path: '/operationCost',
    name: '运维费用管理',
    redirect: '/index/operationCost',
  },
  {
    path: '/equStatusAccounting',
    name: '状态量统计',
    redirect: '/index/equStatusAccounting',
  },
  {
    path: '/noticeMgr',
    name: '通知管理',
    redirect: '/index/noticeMgr',
  },
  {
    path: '/equStatusChange',
    name: '状态量变更',
    redirect: '/index/equStatusChange',
  },
  {
    path: '/logManagement',
    name: '日志管理',
    redirect: '/index/logManagement',
  },
  {
    path: '/UsrChangeLog',
    name: '人员变更日志',
    redirect: '/index/UsrChangeLog',
  },
  {
    path: '/asyscToAirData',
    name: '运维表单留痕',
    redirect: '/index/asyscToAirData',
  },

  {
    path: '/index',
    name: '首页',
    component: Vue.defineAsyncComponent(() => import('@/components/index')),
    children: [
      {
        path: '/index/userMgr',
        name: '用户管理',
        component: Vue.defineAsyncComponent(
          () => import('@/components/pages/ywConfigManage/ywUserManage.vue')
        ),
      },
      {
        path: '/index/roleMgr',
        name: '角色管理',
        component: Vue.defineAsyncComponent(
          () => import('@/components/pages/ywConfigManage/ywRoleManage.vue')
        ),
      },
      {
        path: '/index/functionMgr',
        name: '按钮管理',
        component: Vue.defineAsyncComponent(
          () => import('@/components/pages/ywConfigManage/ywFunManage.vue')
        ),
      },
      {
        path: '/index/menuMgr',
        name: '菜单管理',
        component: Vue.defineAsyncComponent(
          () => import('@/components/pages/ywConfigManage/ywMenuManage.vue')
        ),
      },
      {
        path: '/index/operationCost',
        name: '运维费用管理',
        component: Vue.defineAsyncComponent(
          () =>
            import(
              '@/components/pages/ywConfigManage/ywOperationCostManage.vue'
            )
        ),
      },
      {
        path: '/index/equStatusAccounting',
        name: '状态量统计',
        component: Vue.defineAsyncComponent(
          () =>
            import(
              '@/components/pages/ywConfigManage/ywEquStatusAccounting.vue'
            )
        ),
      },
      {
        path: '/index/noticeMgr',
        name: '通知管理',
        component: Vue.defineAsyncComponent(
          () => import('@/components/pages/ywConfigManage/ywNoticeMgr.vue')
        ),
      },
      {
        path: '/index/equStatusChange',
        name: '状态量变更',
        component: Vue.defineAsyncComponent(
          () =>
            import('@/components/pages/ywConfigManage/ywEquStatusChange.vue')
        ),
      },
      {
        path: '/index/logManagement',
        name: '日志管理',
        component: Vue.defineAsyncComponent(
          () => import('@/components/pages/ywConfigManage/ywLogManagement.vue')
        ),
      },
      {
        path: '/index/UsrChangeLog',
        name: '人员变更日志',
        component: Vue.defineAsyncComponent(
          () => import('@/components/pages/ywConfigManage/UsrChangeLog.vue')
        ),
      },
      {
        path: '/index/asyscToAirData',
        name: '运维表单留痕',
        component: Vue.defineAsyncComponent(
          () => import('@/components/pages/ywConfigManage/ywAsyscToAirData')
        ),
      },
    ],
  },
]
export default usermgr
