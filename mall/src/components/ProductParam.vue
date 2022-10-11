<template>
<!-- 动态绑定class is_fixed -->
  <div class="nav-bar" :class="{'is_fixed':isFixed}">
    <div class="container">
      <div class="pro-title">
        {{title}}
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
  name: "nav-bar",
  props:{
    title:String
  },
  data() {
    return {
        isFixed:false
    }
  },
  mounted() {
    window.addEventListener('scroll',this.initHeight) // 抽离函数名出来 绑定个滚动监听事件 浏览器滚动的时候能够捕获到行为
    // 如果initHeight没有定义在methods中 直接function定义在this.initHeight的位置没有抽离出来，那么无法直接被下面destoryed直接销毁函数
  },
  methods: {
    initHeight(){
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        this.isFixed = scrollTop > 152 ? true : false;
    }
  },
  // vue3.0中destroyed 生命周期选项被重命名为 unmounted
  // beforeDestroy 生命周期选项被重命名为 beforeUnmount
  unmounted() {
    window.removeEventListener('scroll',this.initHeight,false) // 第三个参数 true是捕获 false是冒泡
  },
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss"; // 有flex布局 两端对齐居中
.nav-bar {
  height: 70px;
  line-height: 70px;
  border-top: 1px solid $colorH;
  background-color: $colorG;
  &.is_fixed{
    position:fixed;
    top: 0;
    width: 100%;
    box-shadow: 0 5px 5px $colorE;
  }
  .container {
    @include flex();
    .pro-title {
      font-size: $fontH;
      color: $colorB;
      font-weight: bold;
    }
    .pro-param {
      font-size: $fontJ;
      span {
        margin: 0 10px;
      }
      a {
        display: inline-block;
        color: $colorC;
        // 因为我们a元素本身里面是控制子元素的 所以给last-child设置不生效
        &:last-child {
          margin-right:400px;
          //font-size: 100px !important;
        }
        // margin-right:40px; // 这个单独设置给a是生效的
      }
    }
  }
}
</style>
