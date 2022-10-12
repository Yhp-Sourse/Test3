/* eslint-disable no-unused-vars */
import axios from 'axios';

// process.env.NODE_ENV环境
let baseURL= 'http://59.172.208.254:93';
if(process.env.NODE_ENV=='development'){
    baseURL = 'http://59.172.208.254:93'
}else{
    baseURL = 'http://59.172.208.254:93'
}
// baseURL es6 方法
 
 
const $http = axios.create({
    baseURL,
})
// create 是axios自带的方法

 // 添加请求拦截器，在请求头中加token
$http.interceptors.request.use(

    config => {
    //   console.log(this.$store.state.user.Authorization);
      if (sessionStorage.getItem('Authorization')) {
        config.headers.token = sessionStorage.getItem('Authorization');
      }
      // if (this.$store.state.user.Authorization) {//去vuex全局作用域找
      //   config.headers.token = store.state.user.Authorization;
      // }
      return config;
    },
    error => {
      return Promise.reject(error);
});

//在 response 拦截器实现
$http.interceptors.response.use(
    res => {
      const status = res.data.code;
      //如果是未登录
      if(status==401 || status=="401"){
        app.$alert('登录已超时，请重新登录', '提示', {
          confirmButtonText: '确定',
          type:'warning',
          closeOnClickModal:false,
          callback: action => {
            app.$router.push('/login');
            return;
          }
        });
      }
      // if(status=='10010'){
      //   app.$router.push('/login');
  
      //   //window.location.href="http://localhost:8080";
      // }
      return res;
    }, error => {
      return Promise.reject(error);
  });


export const get = (url,params)=>{
    params = params || {};
    return new Promise((resolve,reject)=>{
        // axiso 自带 get 和 post 方法
        $http.get(url,{
            params,
        }).then(res=>{
            resolve(res.data);
            if(res.data.code==200){
                
            }else{
                // alert(res.data.msg)
            }
        }).catch(error=>{
            alert('网络异常!');
        })
    })
}
 
export const post = (url,params)=>{
    params = params || {};
    return new Promise((resolve,reject)=>{
        $http.post(url,params).then(res=>{
            if(res.data.status===0){
                resolve(res.data);
            }else{
                alert(res.data.msg);
            }
        }).catch(error=>{
            alert('网络异常');
        })
    })
}

