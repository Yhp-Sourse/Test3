import Vue from 'vue'
import VueRouter from 'vue-router'

//全局注册VueRouter
Vue.prototype.$router = VueRouter

// 重写路由的push方法--解决跳转相同路由报错
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

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
    ...jxkh
]

var router =  new VueRouter({
    mode:'hash',//history 需要修改config/index.js下的assetsSubDirectory  history:'static'    hash为默认:'/'.
    routes})
// 导航守卫

//刷新页面后，会导致动态生成的路由失效，需要重新走下添加路由操作
let registerRouteRefresh = true;


// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    //鉴权
    debugger
    let menuRole =JSON.parse(sessionStorage.getItem('menuData'));
    let hasAuthorization=routes.some((item,index,arr)=>{
      return (item.redirect===to.path || item.path===to.path);
    })
    if(!hasAuthorization){
      alert('没有权限，请更换有权限的账号登录！');
      next('/login');
    }
    let token = sessionStorage.getItem('Authorization');
    if (token === 'null' || token === ''|| token === null) {
      //token到期或者不存在
      axios.defaults.withCredentials  =false; //  在跨域中允许携带凭证
    axios.post('http://59.172.208.250:8100/Home/DoPostYwSystem',Qs.stringify({'token':to.query.token}))
    .then((res) => {
        if(res.data.code==200){
         sessionStorage.setItem('Authorization',res.data.msg.token);
         sessionStorage.setItem("currentUserId",res.data.msg.UserId);
         sessionStorage.setItem('currentUserName',res.data.msg.LoginName);  
         if (res.data.msg.userType!=undefined)
         {
            sessionStorage.setItem('roleType', res.data.msg.userType);
         }               
         next();
        }
        else if(res.data.code=='401')
        {
            window.location.href=res.data.returnurl;
        }
        else
        {
          next('/login');
        }
  }).catch(error => {
    console.log(error);
    next('/login');
  });
    
    } else {
      next();
    }
  }
});
export default router;
