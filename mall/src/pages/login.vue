<template>
  <div class="login">
    <div class="container">
      <a href="/#/index"><img src="/imgs/login-logo.png" alt=""></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">帐号登录</span><span class="sep-line">|</span><span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
            <div class="reg">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-link">
        <a href="https://www.imooc.com/u/1343480" target="_blank">河畔一角主页</a><span>|</span>
        <a href="https://coding.imooc.com/class/113.html" target="_blank">Vue全栈课程</a><span>|</span>
        <a href="https://coding.imooc.com/class/236.html" target="_blank">React全家桶课程</a><span>|</span>
        <a href="https://coding.imooc.com/class/343.html" target="_blank">微信支付专项课程（H5+小程序/云+Node+MongoDB）</a>
      </div>
      <p class="copyright">Copyright ©2019 mi.futurefe.com All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'; // 这里是解构
// import { Message } from 'element-ui'
export default {
  name: 'login',
  data(){ // data要切记不要使用data: 这样是全局声明 会有问题 造成页面和页面之间以及页面和组件之间的数据串用 要声明成局部的对象
    return {
      username:'',
      password:'',
      userId:'', // 这里设置uesId是因为前后端项目分离 谁也不认识谁 所以前后端通信的时候需要传一个凭证告诉它(一般是cookie)把优化剂当作cookie 每次发请求的时候把cookie的优化剂传给服务端
                // 服务端拿到以后才能知道我们的身份是谁
      // res:{}
    }
  },
  methods:{
    login(){
      let { username,password } = this; // 解构 这样连对象声明都不用了
      this.axios.post('/user/login',{
        username, // es6语法规范简写
        password
      }).then((res)=>{
        this.$cookie.set('userId',res.id,{expires:'Session'});
        // this.$cookie.set('userId',res.id,{expires:'1M'}); // 这里cookie设置一个月过期
        // to-do 保存用户名
        // this.$store.dispatch('saveUserName', res.username);
        this.saveUserName(res.username);
        this.$router.push({
          name:'index',
          params:{
            from:'login'
          }
        });
        // this.res = res;
        //  this.$router.push('/index');
      })
    },
    ...mapActions(['saveUserName']), // 解构成一个方法
    // 当你变量方法太多的时候 可以用mapActions来替代 它其实就是解构出来换成mapActions
    register(){
      this.axios.post('/user/register',{
        // username password随机写 便可以注册
        username:'Ben2',
        password:'Ben2',
        email:'Ben2@163.com'
      }).then(()=>{
        this.$message.success('注册成功'); // 添加到prototype原型中的了 1014
        // Message.success('注册成功'); // 需要在本组件打开import Message
      })
    }
  }
}
</script>

<style lang="scss">
.login{
  &>.container{
    height:113px;
    img{
      width:auto;
      height:100%;
    }
  }
  .wrapper{
    background:url('/imgs/login-bg.jpg') no-repeat center;
    .container{
      height:576px;
      .login-form{
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width:410px;
        height:510px;
        background-color:#ffffff;
        position:absolute;
        bottom:29px;
        right:0;
        h3{
          line-height:23px;
          font-size:24px;
          text-align:center;
          margin:40px auto 49px;
          .checked{
            color:#FF6600;
          }
          .sep-line{
            margin:0 32px;
          }
        }
        .input{
          display:inline-block;
          width:348px;
          height:50px;
          border:1px solid #E5E5E5;
          margin-bottom:20px;
          input{
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn{
          width:100%;
          line-height:50px;
          margin-top:10px;
          font-size:16px;
        }
        .tips{
          margin-top:14px;
          display:flex;
          justify-content:space-between;
          font-size:14px;
          cursor:pointer;
          .sms{
            color:#FF6600;
          }
          .reg{
            color:#999999;
            span{
              margin:0 7px;
            }
          }
        }
      }
    }
  }
  .footer{
    height:100px;
    padding-top:60px;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
    }
    .copyright{
      margin-top:13px;
    }
  }
}
</style>
