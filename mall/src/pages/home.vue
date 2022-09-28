<template>
    <div>
        <!-- home Ben -->
        <!-- nav-header 和 nav-footer 是组件帮助渲染的 -->
        <nav-header></nav-header>   
        <!-- index是 router中redirect帮助重定向的 -->
        <!-- 没有加router-view 所以挂载到index.vue的内容看不到 需要配置路由呀！ -->
        <!-- rounter.js中首页的路径重定向为index 所以记得加router-view来连接index.vue -->
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import NavHeader from './../components/NavHeader'
import NavFooter from './../components/NavFooter'
export default {
    name:'nav-home',
    components:{
        NavHeader,
        NavFooter
    }
}
</script>