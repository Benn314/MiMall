<template>
  <div class="order-pay">
    <order-header title="订单支付">
      <template v-slot:tip>
        <span>请谨防钓鱼链接或诈骗电话，了解更多</span>
      </template>
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-wrap">
          <div class="item-order">
            <div class="icon-succ"></div>
            <div class="order-info">
              <h2>订单提交成功！去付款咯～</h2>
              <p>请在<span>30分</span>内完成支付, 超时后将取消订单</p>
              <p>收货信息：{{addressInfo}}</p>
            </div>
            <div class="order-total">
              <p>应付总额：<span>{{payment}}</span>元</p>
              <!-- :class="{'up':showDetail}" 进行箭头方向的反转 同时做了个动画效果 -->
              <p>订单详情<em class="icon-down" :class="{'up':showDetail}" @click="showDetail=!showDetail"></em></p>
            </div>
          </div>
          <div class="item-detail" v-if="showDetail">
            <div class="item">
              <div class="detail-title">订单号：</div>
              <div class="detail-info theme-color">{{orderId}}</div>
            </div>
            <div class="item">
              <div class="detail-title">收货信息：</div>
              <div class="detail-info">{{addressInfo}}</div>
            </div>
            <div class="item good">
              <div class="detail-title">商品名称：</div>
              <div class="detail-info">
                <ul>
                  <li v-for="(item,index) in orderDetail" :key="index">
                    <img v-lazy="item.productImage"/>{{item.productName}}
                  </li>
                </ul>
              </div>
            </div>
            <div class="item">
              <div class="detail-title">发票信息：</div>
              <div class="detail-info">电子发票 个人</div>
            </div>
          </div>
        </div>
        <div class="item-pay">
          <h3>选择以下支付方式付款</h3>
          <div class="pay-way">
            <p>支付平台</p>
            <div class="pay pay-ali" :class="{'checked':payType==1}" @click="paySubmit(1)"></div>
            <div class="pay pay-wechat" :class="{'checked':payType==2}" @click="paySubmit(2)"></div>
          </div>
        </div>
      </div>
    </div>
    <scan-pay-code v-if="showPay" @close="closePayModal" :img="payImg"></scan-pay-code>
    <modal
      title="支付确认"
      btnType="3"
      :showModal="showPayModal"
      sureText="查看订单"
      cancelText="未支付"
      @cancel="showPayModal=false"
      @submit="goOrderList"
    >
      <template v-slot:body>
        <p>您确认是否完成支付？</p>
      </template>
    </modal>
  </div>
</template>
<script>
import QRCode from 'qrcode'
import OrderHeader from './../components/OrderHeader'
import ScanPayCode from './../components/ScanPayCode'
// 场景：用户支付了订单但由于网络状态显示未支付
// 解决：加一个弹框 让用户自己手动选择支付状态
// 点击同意会跳转到订单列表 点击没有支付则关闭弹框回到当前页面就可以了
import Modal from './../components/Modal'
export default{
  name:'order-pay',
  data(){
    return {
      orderId:this.$route.query.orderNo,
      addressInfo:'',//收货人地址
      orderDetail:[],//订单详情，包含商品列表
      showDetail:false,//是否显示订单详情
      payType:'',//支付类型
      showPay:false,//是否显示微信支付弹框
      payImg:'',//微信支付的二维码地址
      showPayModal:false,//是否显示二次支付确认弹框
      payment:0,//订单总金额
      T:''//定时器ID
    }
  },
  components:{
    OrderHeader,
    ScanPayCode,
    Modal
  },
  mounted(){
    this.getOrderDetail();
  },
  methods:{
    //我们需要根据我们订单号来获取我们的商品数据 起个getOrderDetail获取我们的订单详情 毫无疑问 需要我们的订单号
    getOrderDetail(){
      this.axios.get(`/orders/${this.orderId}`).then((res)=>{
        let item = res.shippingVo;
        this.addressInfo = `${item.receiverName} ${item.receiverMobile} ${item.receiverProvince} ${item.receiverCity} ${item.receiverDistrict} ${item.receiverAddress}`;
        this.orderDetail = res.orderItemVoList; //orderItemVoList我们订单的实体列表
        this.payment = res.payment;
      })
    },
    paySubmit(payType){
      if(payType == 1){ //支付宝支付
        window.open('/#/order/alipay?orderId='+this.orderId,'_blank'); // open第一个参数是url地址 _blank是打开新窗口
      }else{
        this.axios.post('/pay',{
          orderId:this.orderId,
          orderName:'Vue高仿小米商城',
          amount:0.01,//单位元
          payType:2 //1支付宝，2微信
        }).then((res)=>{
          QRCode.toDataURL(res.content) // 需要转换为一个base64位的图片二维码
          .then(url => {
            this.showPay = true;
            this.payImg = url;
            // 付款二维码出来后就开始进行轮询 判断支付是否成功
            this.loopOrderState();
          })
          .catch(() => {
            this.$message.error('微信二维码生成失败，请稍后重试');
          })
        })
      }
    },
    // 关闭微信弹框
    closePayModal(){
      this.showPay = false;
      this.showPayModal = true;
      clearInterval(this.T);
    },
    // 轮询当前订单支付状态
    loopOrderState(){ 
      this.T = setInterval(()=>{
        this.axios.get(`/orders/${this.orderId}`).then((res)=>{
          if(res.status == 20){ //已付款
            clearInterval(this.T); //停止轮询 无限刷下去没有意义
            this.goOrderList(); //回到我们订单列表里面去 帮助用户自动跳转
          }
        })
      },1000); // 时间间隔根据公司业务要求和带宽进行设置 通常设置500/1000ms比较合理
    },
    goOrderList(){
      this.$router.push('/order/list');
    }
  }
}
</script>
<style lang="scss">
  .order-pay{
    .wrapper{
      background-color:#F5F5F5;
      padding-top:30px;
      padding-bottom:61px;
      .order-wrap{
        padding: 62px 50px;
        background-color: #fff;
        font-size:14px;
        margin-bottom:30px;
        .item-order{
          display: flex;
          align-items: center;
          .icon-succ{
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background:url('/imgs/icon-gou.png') #80c58a no-repeat center;
            background-size:60px;
            margin-right:40px;
          }
          .order-info{
            margin-right: 248px;
            h2{
              font-size:24px;
              color:#333333;
              margin-bottom:20px;
            }
            p{
              color:#666666;
              span{
                color:#FF6700;
              }
            }
          }
          .order-total{
            &>p:first-child{
              margin-bottom:30px;
            }
            span{
              font-size:28px;
              color:#FF6700;
            }
            .icon-down{
              display:inline-block;
              width:14px;
              height:10px;
              background:url('/imgs/icon-down.png') no-repeat center;
              background-size:contain;
              margin-left:9px;
              transition:all .5s;
              cursor:pointer;
              &.up{
                transform: rotate(180deg); //旋转180°
              }
            }
            .icon-up{
              transform: rotate(180deg);
            }
          }
        }
        .item-detail{
          border-top: 1px solid #D7D7D7;
          padding-top: 47px;
          padding-left: 130px;
          font-size: 14px;
          margin-top: 45px;
          .item{
            margin-bottom:19px;
            .detail-title{
              float:left;
              width:100px;
            }
            .detail-info{
              display:inline-block;
              img{
                width: 30px;
                vertical-align: middle;
              }
            }
          }
        }
      }
      .item-pay{
        padding:26px 50px 72px;
        background-color:#ffffff;
        color: #333333;
        h3{
          font-size: 20px;
          font-weight: 200;
          color: #333333;
          padding-bottom: 24px;
          border-bottom: 1px solid #D7D7D7;
          margin-bottom: 26px;
        }
        .pay-way{
          font-size:18px;
          .pay{
            display:inline-block;
            width:188px;
            height:64px;
            border:1px solid #D7D7D7;
            cursor:pointer;
            &:last-child{
              margin-left:20px;
            }
            &.checked{
              border:1px solid #FF6700;
            }
          }
          .pay-ali{
            background:url('/imgs/pay/icon-ali.png') no-repeat center;
            background-size:103px 38px;
            margin-top:19px;
          }
          .pay-wechat{
            background:url('/imgs/pay/icon-wechat.png') no-repeat center;
            background-size:103px 38px;
          }
        }
      }
    }
  }
</style>