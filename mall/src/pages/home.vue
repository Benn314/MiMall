<template>
    <div>
        <!-- home Ben -->
        <!-- nav-header 和 nav-footer 是组件帮助渲染的 -->
        <nav-header></nav-header>   
        <!-- index是 router中redirect帮助重定向的 -->
        <!-- <router-view></router-view> -->
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