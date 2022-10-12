import * as Vue from 'vue'
import * as VueRouter from 'vue-router'

//全局注册VueRouter
window.$vueApp.config.globalProperties.$router = VueRouter

// 重写路由的push方法--解决跳转相同路由报错
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error)
}

import sso from './sso'
import login from './login'
import ywTask from './ywTask'
import ywCar from './ywCar'
import ywConsume from './ywConsume'
import userMgr from './userMgr'
import siteEquipment from './siteEquipment'
import alarmMgr from './alarmMgr'
import ywStatisticalAnaly from './ywStatisticalAnaly'
import ywRpt from './ywRpt'
import jxkh from './jxkh'
import axios from 'axios'
import Qs from 'qs'
const routes = [
  ...sso,
  ...login,
  ...ywTask,
  ...ywCar,
  ...ywConsume,
  ...siteEquipment,
  ...userMgr,
  ...alarmMgr,
  ...ywRpt,
  ...ywStatisticalAnaly,
  ...jxkh,
]

var router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    let token = sessionStorage.getItem('Authorization')
    if (token === 'null' || token === '' || token === null) {
      //token到期或者不存在
      axios.defaults.withCredentials = false //  在跨域中允许携带凭证
      axios
        .post(
          'http://59.172.208.250:8100/Home/DoPostYwSystem',
          Qs.stringify({ token: to.query.token })
        )
        .then((res) => {
          if (res.data.code == 200) {
            sessionStorage.setItem('Authorization', res.data.msg.token)
            sessionStorage.setItem('currentUserId', res.data.msg.UserId)
            sessionStorage.setItem('currentUserName', res.data.msg.LoginName)
            if (res.data.msg.userType != undefined) {
              sessionStorage.setItem('roleType', res.data.msg.userType)
            }
            next()
          } else if (res.data.code == '401') {
            window.location.href = res.data.returnurl
          } else {
            next('/login')
          }
        })
        .catch((error) => {
          console.log(error)
          next('/login')
        })
    } else {
      next()
    }
  }
})
export default router
