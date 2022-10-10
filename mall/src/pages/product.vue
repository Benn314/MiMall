<template>
    <div class="product">
        <product-param>
            <!-- vue3.0后 slot写法改变 需在外边包裹一个template slot写成v-slot并指明定义你要加载那个插槽哪个模板 -->
            <template v-slot:buy>
                <button class="btn">立即购买</button>
            </template>
        </product-param>
        <div class="h">123</div>
        <div class="h">123</div>
        <div class="h">123</div>
        <div class="h">123</div>
        <div class="h">123</div>
        <div class="h">123</div>
        <div class="h">123</div>
        <div class="h">123</div>
        <div class="h">123</div>
        <div class="h">123</div>
    </div>
</template>

<script>
import ProductParam from './../components/ProductParam'
export default {
    name:'product',
    components:{
        ProductParam
    }
}
</script>

<style lang="scss">
    .product{
        .h{
            height: 150px;
            background-color: green;
        }
        button{
            margin-left: 10px;
        }
    }
</style>
