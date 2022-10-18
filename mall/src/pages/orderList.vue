<template>
  <div class="order-list">
    <order-header title="订单列表">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多></span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
          <loading v-if="loading"></loading>
          <div class="order" v-for="(order,index) in list" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                <!-- 订单创建时间要知道是以什么为单位的（查看接口文档） 是毫秒还是时间戳 可以手写一个转换函数转换成我们想要的日期格式 单纯一个函数的话不建议引入插件 -->
                <!-- 通过接口文档我们知道 后端同学已经帮我们把createTime时间格式转换好了 直接用就行 -->
                {{order.createTime}}
                <span>|</span>
                {{order.receiverName}}
                <span>|</span>
                订单号：{{order.orderNo}}
                <span>|</span>
                {{order.paymentTypeDesc}}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <!-- 如果是前端同学来做payment的话 要考虑精度丢失的问题 例如0.1+0.2不一定等于0.3（可以设置精确到小数点后2位） 无法把握可以让后端同学帮我们做-->
                <span class="money">{{order.payment}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list" v-for="(item,i) in order.orderItemVoList" :key="i">
                  <div class="good-img">
                    <!-- CDN是一个加速服务器 属于前端性能优化的范畴 v-lazy也是提高我们前端性能的知识点 -->
                    <img v-lazy="item.productImage" alt="">
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{item.productName}}</div>
                    <div class="p-money">{{item.totalPrice + 'X' + item.quantity}}元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="order.status == 20">
                <a href="javascript:;">{{order.statusDesc}}</a>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:;" @click="goPay(order.orderNo)">{{order.statusDesc}}</a>
              </div>
            </div>
          </div>
          <el-pagination
            v-if="false"
            class="pagination"
            background
            layout="prev, pager, next"
            :pageSize="pageSize"
            :total="total"
            @current-change="handleChange"
            >
          </el-pagination>
          <div class="load-more" v-if="showNextPage">
              <el-button type="primary" :loading="loading" @click="loadMore">加载更多</el-button>
          </div>
          <div class="scroll-more"
            v-infinite-scroll="scrollMore"
            infinite-scroll-disabled="busy"
            infinite-scroll-distance="410"
            v-if="true"
          >
            <img src="/imgs/loading-svg/loading-spinning-bubbles.svg" alt="" v-show="loading">
          </div>
          <no-data v-if="!loading && list.length==0"></no-data>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// 导入
  import OrderHeader from './../components/OrderHeader'
  import Loading from './../components/Loading'
  import NoData from './../components/NoData'
  import { Pagination,Button } from 'element-ui'
  import infiniteScroll from 'vue-infinite-scroll'
  export default{
    name:'order-list',
    // 注册组件
    components:{
      OrderHeader,
      Loading,
      NoData,
      [Pagination.name]:Pagination, // 左边语句相当于 el-pagination 因为组件标签用的是el-pagination
      [Button.name]:Button // 左边语句相当于 el-button el是饿了么的tag 因为组件标签用的是el-button 用name的方式来定义这个变量才可以
    },
    // vue-infinite-scroll插件 infiniteScroll是指令的而不是组件 需要用directives来配置它而不能用components来注册 这样的话我们可以把它放到div里去当指令
    directives: {
      infiniteScroll
    },
    data(){
      return {
        loading:false,
        list:[], //承载订单列表
        pageSize:10,
        pageNum:1,
        total:0,
        showNextPage:true,//加载更多：是否显示按钮
        busy:false,//滚动加载，是否触发
      }
    },
    mounted(){
      this.getOrderList();
    },
    methods:{
      getOrderList(){
        this.loading = true;
        this.busy = true;
        this.axios.get('/orders',{ //get请求需要加params post请求则不用
          params:{
            pageSize:10,
            pageNum:this.pageNum
          }
        }).then((res)=>{
          this.loading = false;
          // this.list = res.list; //会覆盖
          this.list = this.list.concat(res.list); //数组拼接方法concat （this.list = res.list ）点击后loadMore使原先的pageNum+1 但原先的pageNum的页面数据会被覆盖掉 我们用拼接的方式便可以全部展示
          this.showNextPage = res.hasNextPage;
          this.busy = false;
        }).catch(()=>{
          this.loading = false;
        })
      },
      goPay(orderNo){
        // 三种路由跳转方式：
        // 第一种
        // this.$router.push('/order/pay')
        // 第二种
        /*this.$router.push({
          name:'order-pay', // 这个name就不是路径了 而是我们路由名称 在router.js里面直接复制对应的name就行
          query:{
            orderNo
          }
        })*/
        // 第三种
        this.$router.push({
          path:'/order/pay',
          query:{
            orderNo
          }
        })
      },
      // 第一种方法：分页器
      // handleChange用来获取当前是第几页 然后重新调用我们这个获取订单列表的接口 重新查询下一页的数据
      handleChange(pageNum){
        this.pageNum = pageNum;
        this.getOrderList();
      },
      // 第二种方法：加载更多按钮
      loadMore(){
        this.pageNum++;
        this.getOrderList();
      },
      // 第三种方法：滚动加载，通过npm插件实现
      scrollMore(){
        this.busy = true;
        setTimeout(()=>{
          this.pageNum++;
          this.getList();
        },500);
      },
      // 专门给scrollMore使用
      getList(){
        this.loading = true;
        this.axios.get('/orders',{
          params:{
            pageSize:10,
            pageNum:this.pageNum
          }
        }).then((res)=>{
          this.list = this.list.concat(res.list);
          this.loading = false;
          if(res.hasNextPage){ //如果有下一页 继续滚动
            this.busy=false;
          }else{ //如果是最后一页 禁用滚动
            this.busy=true;
          }
        });
      },
    }
  }
</script>
<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .order-list{
    .wrapper{
      background-color:$colorJ;
      padding-top:33px;
      padding-bottom:110px;
      .order-box{
        .order{
          @include border();
          background-color:$colorG;
          margin-bottom:31px;
          &:last-child{
            margin-bottom:0;
          }
          .order-title{
            @include height(74px);
            background-color:$colorK;
            padding:0 43px;
            font-size:16px;
            color:$colorC;
            .item-info{
              span{
                margin:0 9px;
              }
            }
            .money{
              font-size:26px;
              color:$colorB;
            }
          }
          .order-content{
            padding:0 43px;
            .good-box{
              width:88%;
              .good-list{
                display: flex;
                align-items: center;
                height:145px;
                .good-img{
                  width:112px;
                  img{
                    width:100%;
                  }
                }
                .good-name{
                  font-size:20px;
                  color:$colorB;
                }
              }
            }
            .good-state{
              @include height(145px);
              font-size: 20px;
              color:$colorA;
              a{
                color:$colorA;
              }
            }
          }
        }
        .pagination{
          text-align:right;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active{
          background-color: #FF6600;
        }
        .el-button--primary{
          background-color: #FF6600;
          border-color: #FF6600;
        }
        .load-more,.scroll-more{
          text-align:center;
        }
      }
    }
  }
</style>