<template>
    <div class="nav-bar">
        <div class="container">
            <div class="pro-title">
                小米8
            </div>
            <div class="pro-param">
                <a href="javascript:;">概述</a><span>|</span>
                <a href="javascript:;">参数</a><span>|</span>
                <a href="javascript:;">用户评价</a>
                <!-- 
                    按钮的话 这里用插槽slot 
                    因为组件这里有的是立即购买 有的是跳转到商品详情
                    那么你也可以在我们这个产品站里面取动态的实时更换
                    比如加购物车 把功能换成加购物车或者换成跳转到购物车页面 灵活控制
                    只要引入这个插槽组件就可以随意去定制这个功能
                -->
                <slot name="buy"></slot>
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
    @import './../assets/scss/config.scss';
    @import './../assets/scss/mixin.scss'; // 有flex布局 两端对齐居中
    .nav-bar{
        height: 70px;
        line-height: 70px;
        border: 1px solid $colorH;
        .container{
            @include flex();
            .pro-title{
                font-size: $fontH;
                color:$colorB;
                font-weight:bold;
            }
            .pro-param{
                font-size: $fontJ;
                span{
                    margin:0 10px;
                }
                a{
                    // display: inline-block;
                    color:$colorC;
                    // 因为我们a元素本身里面是控制子元素的 所以给last-child设置不生效
                    // &:last-child{
                    //     margin-right:400px;
                    // }
                    // margin-right:40px; // 这个单独设置给a是生效的
                }
            }
        }
    }
</style>

