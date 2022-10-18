<template>
    <div>
        <!-- <order-header :title="title">
            <template v-slot:tip>
                <span>{{tip}}</span>
            </template>
        </order-header> -->
           <!-- 订单列表、订单支付 都可以用到router-view -->
        <router-view></router-view>
        <service-bar></service-bar>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
// import OrderHeader from './../components/OrderHeader'
import ServiceBar from './../components/ServiceBar'
import NavFooter from './../components/NavFooter'
export default {
    name:'order',
    data(){
        return{
            title:'',
            tip:''
        }
    },
    components:{
        // OrderHeader,
        ServiceBar,
        NavFooter
    },
    mounted() {
        //直接在父组件定义通用order-header在后面是行不通的 无法跳转渲染 只能定义在子组件通过:title传递
        // let path = this.$route.path;
        // if(path == '/order/confirm'){
        //     this.title = '订单确认';
        //     this.tip = '请认真填写收获地址';
        // }else if(path == '/order/list'){
        //     this.title = '订单列表';
        //     this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>';
        // }else if(path == '/order/pay'){
        //     this.title = '订单支付';
        //     this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>';
        // }else{
        //     this.title = '订单支付';
        //     this.tip = '请谨防钓鱼链接或诈骗电话，了解更多>';
        // }
    },
}
</script>