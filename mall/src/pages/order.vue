<template>
    <div>
        <order-header></order-header>
           <!-- 订单列表、订单支付 都可以用到router-view -->
        <router-view></router-view>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
import NavFooter from './../components/NavFooter'
export default {
    name:'order',
    components:{
        OrderHeader,
        NavFooter
    }
}
</script>