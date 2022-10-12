import * as Vue from 'vue'
import App from './App.vue'
import store from './store'

// 引入路由
import router from './router/index'
import axios from 'axios'

/*引入资源请求插件*/
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引用elementui
window.$vueApp.use(ElementUI)

import Qs from 'qs'
window.$vueApp.config.globalProperties.Qs = Qs

//ip地址加端口号
//const baseURL = 'http://localhost:8086'   //本地iis方式
//const baseURL = 'http://localhost:8089'  //Dock方式-测试环境
//const baseURL = 'http://15.15.0.10:8017'  //window发布方式
const baseURL = 'http://59.172.208.254:93' //Dock外网方

window.$vueApp.config.globalProperties.api = baseURL

//全局引入echarts
import echarts from 'echarts'
window.$vueApp.config.globalProperties.$echarts = echarts

//全局注册axios
window.$vueApp.config.globalProperties.$http = axios

//添加权限指令
const has = window.$vueApp.directive('has', {
  mounted: function (el, binding) {
    if (!window.$vueApp.config.globalProperties.$_has(binding.value)) {
      el.parentNode.removeChild(el)
    }
  },
})

window.$vueApp.config.globalProperties.$_has = function (value) {
  let isExit = false
  let buttonpermsStr = sessionStorage.getItem('functionData')
  if (buttonpermsStr === undefined || buttonpermsStr === null) {
    return false
  } else {
    let arrayIds = []
    JSON.parse(buttonpermsStr).forEach((element) => {
      arrayIds.push(element.menu_url)
    })
    if (arrayIds.indexOf(value) > -1) {
      isExit = true
    }
  }
  return isExit
}
export { has }

// 添加请求拦截器，在请求头中加token
axios.interceptors.request.use(
  (config) => {
    var aa = Request['loginName']
    if (sessionStorage.getItem('Authorization')) {
      config.headers.token = sessionStorage.getItem('Authorization')
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

//在 response 拦截器实现
axios.interceptors.response.use(
  (res) => {
    const status = res.data.code
    //如果是未登录
    if (status == 401 || status == '401') {
      app.$alert('登录已超时，请重新登录', '提示', {
        confirmButtonText: '确定',
        type: 'warning',
        closeOnClickModal: false,
        callback: (action) => {
          app.$router.push('/login')
          return
        },
      })
    }
    // if(status=='10010'){
    //   app.$router.push('/login');

    //   //window.location.href="http://localhost:8080";
    // }
    return res
  },
  (error) => {
    return Promise.reject(error)
  }
)

/* eslint-disable no-new */
var app = (window.$vueApp = Vue.createApp(App))

window.$vueApp.config.globalProperties.routerAppend = (path, pathToAppend) => {
  return path + (path.endsWith('/') ? '' : '/') + pathToAppend
}
window.$vueApp.use(router)
window.$vueApp.use(store)
window.$vueApp.mount('#app')
