import axios from 'axios'
const baseURL='http://59.172.208.254:93'   //后台接口的域名或者服务器地址


//请求拦截，会自动在axios请求后端的时候添加请求头，并将token添加到请求里面
const service =axios.interceptors.request.use(config => {
    if (sessionStorage.getItem('Authorization')) {
        config.headers.token = sessionStorage.getItem('Authorization');
    }
    return config;
}, error => { return Promise.reject(error) })
 
//响应拦截，将后端传回来的token放在localStorage缓存里
service.interceptors.response.use(response => {
    
    return response;
})
 
export default service