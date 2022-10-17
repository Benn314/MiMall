<template>
    <div class="ali-pay">
        <loading v-if="loading"></loading>
        <div class="form" v-html="content"></div>
    </div>
</template>

<script>
import Loading from './../components/Loading';
export default {
    name:'alipay',
    components:{
        Loading
    },
    data() {
        return {
            orderId:this.$route.query.orderId,
            content:'',
            loading:true
        }
    },
    mounted() {
        this.paySubmit();
    },
    methods: {
        paySubmit(){
            this.axios.post('/pay',{
                orderId:this.orderId,
                orderName:'Vue高仿小米商城', //扫码支付时订单名称
                amount:0.01, //单位元
                payType:1 //1支付宝，2微信
            }).then((res)=>{ // 收到数据后需要从后台返回数据
                this.content = res.content;
                setTimeout(()=>{
                    document.forms[0].submit(); // 用submit来帮助进行触发
                },100)
            })
        }
    },
}
</script>