import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
// import env from './env'

// mockjs使代码污染性变小
const mock = true; // 在这里设置mock开关 当我们联调、测试时就不需要mock了
if(mock){
    require('./mock/api')   // 这里用require，不用import
}

// 根据前端的跨域方式做调整 /a/b :  /api/a/b => /a/b
// 非接口代理 后端域名和前端域名不完整 url要写完整
// CORS、JSONP 和 接口代理 的两种baseURL写法是不同的
// axios.defaults.baseURL = 'http://test-www.imooc.com/api'; // CORS、JSONP跨域   模拟数据接口地址
axios.defaults.baseURL = '/api'; // 接口代理 转发的时候会把/api切掉  真实地址
axios.defaults.timeout = 8000;
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function(response){
    let res = response.data;
    if(res.status == 0){
        return res.data;
    }else if(res.status == 10){
        window.location.href = '/#/login';
    }else{
        alert(res.msg);
    }
})

Vue.use(VueAxios,axios);    //挂载上去后我们待会发请求就可以通过js发请求了
Vue.config.productionTip = false    //生产方式的提示

new Vue({
    router,
    render: h=> h(App),
}).$mount('#app')


