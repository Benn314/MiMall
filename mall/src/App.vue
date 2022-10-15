<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage'
export default {
  name: 'app',
  data(){
    return {
      // res:{}
    }
  },
  mounted(){
    // storage.setItem('a',1);
    // storage.setItem('user',{a:1}); // 这样是直接覆盖掉user了，不符合我们要追加数据的要求
    // storage.setItem("abc",{a:1},"user"); //用到第三个参数属性 这才是追加
    // storage.clear('a');
    // storage.clear('a','user');

    // mock的三种设置
    // 1.本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then((res)=>{
    //   this.res = res;
    // });
    // 2.通过easy-mock平台实现数据mock
    // this.axios.get('/user/login').then((res)=>{
    //   this.res = res;
    // });
    // 3.本地集成mockjs（npm插件来着）实现数据mock
      // this.axios.get('/user/login').then((res)=>{
      //   this.res = res;
      // });
      if(this.$cookie.get('userId')){
        this.getUser();
        this.getCartCount();
      }
    },
    methods: {
      getUser(){
        this.axios.get('/user').then((res={})=>{ // 获取user信息小bug 这里我们需要给res加个默认值 不然如果网页是未登录的状态的话 代码可能会报错
          // to-do 保存到vuex里面
          this.$store.dispatch('saveUserName', res.username);
        })
      },
      getCartCount(){
        this.axios.get('/carts/products/sum').then((res=0)=>{ // 等同41行代码注释
          // to-do 保存到vuex里面
          this.$store.dispatch('saveCartCount', res); //为什么这里只丢res？因为通过标头预览cartCount的sum只有因为data变量 
        })
      }
    },
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss'; // 也可以放在modal.vue里面 但我们在modal之外可能还会用到此组件 故放在App.vue全局里

</style>
