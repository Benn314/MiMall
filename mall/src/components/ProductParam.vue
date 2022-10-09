<template>
    <div class="nav-bar">
        <div class="container">
            <div class="pro-title">
                小米8
            </div>
            <div class="pro-param">
                <a href="">概述</a><span>|</span>
                <a href="">参数</a><span>|</span>
                <a href="">用户评价</a><span>|</span>
                <!-- 
                    按钮的话 这里用插槽slot 
                    因为组件这里有的是立即购买 有的是跳转到商品详情
                    那么你也可以在我们这个产品站里面取动态的实时更换
                    比如加购物车 把功能换成加购物车或者换成跳转到购物车页面 灵活控制
                    只要引入这个插槽组件就可以随意去定制这个功能
                -->
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'nav-bar'
}
</script>

<style lang="scss">
    
</style>

