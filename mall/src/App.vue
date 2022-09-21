<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage'
export default {
  name: 'app',
  data(){
    return {

    }
  },
  mounted(){
    // storage.setItem('a',1);
    // storage.setItem('user',{a:1}); // 这样是直接覆盖掉user了，不符合我们要追加数据的要求
    // storage.setItem("abc",{a:1},"user"); //用到第三个参数属性 这才是追加
    // storage.clear('a');
    storage.clear('a','user');
  }
}
</script>

<style scoped>

</style>
