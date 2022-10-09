import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex);

const state = {
    username:'', // 登录用户名
    cartCount:0 // 购物车商品数量 调用接口值没有回来之前 显示的就是这个cartCount值
}

export default new Vuex.Store({
    state, // es6简写
    mutations, // import导入变量名相同即可简写
    actions
});
