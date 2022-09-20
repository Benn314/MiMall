<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import axios from 'axios'
import jsonp from 'jsonp'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      age:30
    }
  },
  mounted(){
    let url = '/api/activity/servicetime'
    // axios本身是一个promise的结构 所以我们可以通过.then的方式去做链式调用
    // axios.get(url).then(()=>{
      
    // })
    jsonp(url,(err, res)=>{
      let result = res;
      this.data = result;
    })

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
