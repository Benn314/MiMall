<template>
  <div class="order-header">
    <!-- 我们都用了float浮动 但没有去消除浮动导致塌陷 这里用clearfix来消除浮动解决塌陷 -->
    <div class="container clearfix">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="title">
        <h2>{{title}}<slot name="tip"></slot></h2>
      </div>
      <!-- 这里用弹性布局也能做 但我们用flash布局 浮动的功能 希望大家掌握更多的知识点 -->
      <div class="username">
        <a href="javascript:;">{{username}}</a>
      </div>
    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
  export default{
    name:'order-header',
    props:{
      title:String
    },
    computed:{ //使用计算属性是因为我们这个名称一开始的时候是从App.vue里去拉取的 可能拉取的时候这个值还没有回来 所以用这个computed属性 当这个值回来的以后重新再渲染一次
        // username(){
        //     return this.$store.state.username;
        // },
        // cartCount(){
        //     return this.$store.state.cartCount;
        // }
        // 上面5行代码可以简写为下面一行代码 maoState辅助函数开发替代简写
        ...mapState(['username','cartCount'])
    },
  }
</script>
<style lang="scss">
  .order-header{
    padding:30px 0;
    border-bottom:2px solid #FF6600;
    .header-logo{
      float:left;
    }
    .title,.username{
      display:inline-block;
      height:55px;
      line-height:55px;
    }
    .title{
      float:left;
      margin-left:54px;
      h2{
        font-size:28px;
        color:#333333;
      }
      span{
        font-size:14px;
        margin-left:17px;
        color:#999999;
        font-weight:200;
      }
    }
    .username{
      float:right;
      a{
        color:#666666;
        font-size:16px;
      }
    }
  }
</style>
