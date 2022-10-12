<template>
    <div class="header">
        <div class="nav-topbar">
            <!-- 定义一个容器 -->
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="!username" @click="login">登录</a>
                    <a href="javascript:;" v-if="username">我的订单</a>
                    <!-- goToCart() 没有参数的话括号都可以不用写 写成goToCart -->
                    <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车({{cartCount}})</a>                
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item,index) in phoneList" :key="index">
                                    <a v-bind:href="'/#/product/'+item.id" target="_blank">
                                        <div class="pro-img">
                                            <!-- <img src="imgs\nav-img\nav-1.png" alt="">                                        </div> -->
                                            <img v-lazy="item.mainImage" :alt="item.subtitle">                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <!-- 过滤器的语法是 | currency -->
                                        <!-- error  Filters are deprecated -->
                                        <!-- <div class="pro-price">{{item.price | currency}} </div> -->
                                        <div class="pro-price">{{currency(item.price)}} </div>
                                    </a>
                                </li>
                                <!-- <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="imgs\nav-img\nav-1.png" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">1799</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="imgs\nav-img\nav-1.png" alt="">                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">1799</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="imgs\nav-img\nav-1.png" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">1799</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="imgs\nav-img\nav-1.png" alt="">                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">1799</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="imgs\nav-img\nav-1.png" alt="">
                                        </div>
                                        <div class="pro-name">小米CC9</div>
                                        <div class="pro-price">1799</div>
                                    </a>
                                </li> -->
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi红米</span>
                        <!-- <div class="children"></div> -->
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-1.jpg'" alt=""> 
                                        </div>
                                        <div class="pro-name">小米壁画电视 65英寸</div>
                                        <div class="pro-price">6999</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/imgs/nav-img/nav-3-2.jpg'" alt="">
                                        </div>
                                        <div class="pro-name">小米全面屏电视E55A</div>
                                        <div class="pro-price">1999</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'imgs\\nav-img\\nav-3-3.png'" alt="">
                                            <!-- <img v-lazy="'/imgs/nav-img/nav-3-3.png'" alt="">                                         -->
                                        </div>
                                        <div class="pro-name">小米电视4A 32英寸</div>
                                        <div class="pro-price">699</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'imgs\\nav-img\\nav-3-4.jpg'" alt="">
                                        </div>
                                        <div class="pro-name">小米电视4A 55英寸</div>
                                        <div class="pro-price">1799</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'imgs\\nav-img\\nav-3-5.jpg'" alt="">                                        
                                        </div>
                                        <div class="pro-name">小米电视4A 65英寸</div>
                                        <div class="pro-price">2699</div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'imgs\\nav-img\\nav-3-6.png'" alt="">
                                        </div>
                                        <div class="pro-name">查看全部</div>
                                        <div class="pro-price">查看全部</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'nav-header',
    data(){
        return{   
            // username:this.$store.state.username,         
            phoneList:[]
        }
    },
    // Vue3不支持Filters过滤器
    // filters:{
    //     currency(val){
    //         if(!val) return '0.00';
    //         return '￥' + val.toFixed(2) + '元';
    //     }
    // },
    computed:{
        // username(){
        //     return this.$store.state.username;
        // },
        // cartCount(){
        //     return this.$store.state.cartCount;
        // }
        // 上面5行代码可以简写为下面一行代码 maoState辅助函数开发替代简写
        ...mapState(['username','cartCount'])
    },
    mounted() {
        this.getProductList();
    },
    methods: {
        login(){
            this.$router.push('/login');
        },
        getProductList(){
            this.axios.get('/products',{
                params:{
                    categoryId:'100012',
                    pageSize:6
                }
            }).then((res)=>{
                // if(res.list.length>=6){
                    // this.phoneList = res.list.slice(0,6);
                // }
                this.phoneList = res.list;
            })
        },
        currency(val) {
            if(!val) return '0.00';
            return '￥' + val.toFixed(2) + '元';
        },
        goToCart(){
            this.$router.push('/cart');
        }
    },
}
</script>

<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
    .header{
        .nav-topbar{
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #B0B0B0;
            .container{
                // 不用写 默认加载了base.scss 已有其样式（引用即可生效）
                // width: 1226px;
                // margin-right: auto;
                // margin-left: auto;
                // display: flex;
                // justify-content: space-between; //两端对齐
                // align-items: center;
                @include flex(); // 调用mixin里的flex方法
                a{
                    display: inline-block;
                    color: #B0B0B0;
                    margin-right: 17px;
                }
                .my-cart{
                    width: 110px;
                    background-color: #FF6600;
                    text-align: center;
                    color:#ffffff;
                    margin-right: 0;
                    .icon-cart{ // span可以用background来放置我们的图标
                        // display: inline-block;
                        // width:16px;
                        // height:12px;
                        // background: url('/imgs/icon-cart-checked.png') no-repeat center;
                        // background-size: contain;
                        @include bgImg(16px,12px,'/imgs/icon-cart-checked.png'); // 默认的值 函数参数可以不用写
                        margin-right: 4px; // 这个不通用 还是要自己写 本身跟复用没什么关系
                    }
                }
            }
        }
        .nav-header{
            .container{
                position:relative;
                height:112px; 
                // display: flex;
                // justify-content: space-between;
                // align-items: center; // 垂直方向居中
                @include flex(); // 调用mixin里的flex方法
                // .header-logo{
                //     display: inline-block;
                //     width:55px;
                //     height: 55px;
                //     // 看不见的原因是 白色和白色重叠了 所以看不见
                //     background-color: #FF6600;
                //     a{
                //         display: inline-block;
                //         width:110px;
                //         height:55px;
                //         &:before{ //伪类 这里是两张图片 既然是图片 我们没有内容那一定要占位 用content
                //             content: ' '; // 这很重要
                //             // display: inline-block;
                //             // width:55px;
                //             // height: 55px;
                //             // background: url('/imgs/mi-logo.png') no-repeat center;
                //             // background-size: 55px;
                //             @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
                //             transition: margin .2s;
                //         }
                //         &:after{ //伪类 这里是两张图片 既然是图片 我们没有内容那一定要占位 用content
                //             content: ' '; // 这很重要 要去占位 不然伪类不生效
                //             // display: inline-block;
                //             // width:55px;
                //             // height: 55px;
                //             // background: url('/imgs/mi-home.png') no-repeat center;
                //             // background-size: 55px;
                //             @include bgImg(55px,55px,'/imgs/mi-home.png',55px);
                //         }
                //         &:hover:before{
                //             margin-left: -55px; // 为什么这里是-55px 因为header-logo的显示位置是固定的 我们需要使mi-home.logo向左移动-55px 才能完美到达显示位置
                //             transition: margin .2s; // 也可以把margin改为all 指定所有元素过渡
                //         }
                //     }
                // }
                .header-menu{
                    display: inline-block;
                    width: 643px;
                    padding-left:209px;
                    .item-menu{
                        display: inline-block;
                        color:#333333;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 112px;
                        margin-right: 20px;
                        span{
                            cursor: pointer; // 鼠标移上去 带个小手
                        }
                        &:hover{
                            color:$colorA;
                            .children{
                                height:220px;
                                opacity: 1;
                            }
                        }
                        .children{
                            position: absolute;
                            top:112px;
                            left:0;
                            width:1226px;
                            height: 0;
                            opacity: 0;
                            overflow: hidden; //overflow可以把它隐藏掉
                            border-top: 1px solid #E5E5E5;
                            box-shadow: 0px 7px 6px 0px rgba(0,0,0,0.11);
                            z-index: 10;
                            transition: all .5s;
                            background-color: #ffffff;
                            .product{
                                position:relative;
                                float: left;
                                width: 16.6%; //如果UI设计稿没给自己参数的话 我们可以用比例的方式来填写 比较精准
                                height: 220px;
                                font-size: 12px;
                                line-height: 12px;
                                text-align: center;
                                a{
                                    display: inline-block;
                                }
                                img{
                                    width:auto;
                                    height: 111px;
                                    margin-top: 26px;
                                }
                                .pro-img{
                                    height:137px;
                                }
                                .pro-name{
                                    font-weight: bold;
                                    margin-top: 19px;
                                    margin-bottom: 8px;
                                    color:$colorB;
                                }
                                .pro-price{
                                    color:$colorA;
                                }
                                &:before{
                                    content:' ';
                                    position: absolute;
                                    top: 28px;
                                    right:0;
                                    border-left: 1px solid $colorF;
                                    height: 100px;
                                    width: 1px;
                                }
                                &:last-child:before{ // 最后一根竖线不要
                                    display: none;
                                }
                            }
                        }  
                    }
                }
                .header-search{
                    width: 319px;
                    .wrapper{
                        height: 50px;
                        border:1px solid #E0E0E0;
                        display: flex;
                        align-items: center;
                        input{
                            border:none;
                            box-sizing: border-box; //  盒模型
                            border-right: 1px solid #E0E0E0;
                            width: 264px;
                            height: 50px;
                            padding-left: 14px;
                        }
                        a{
                            // display: inline-block;
                            // width: 18px;
                            // height: 18px;
                            // background: url('/imgs/icon-search.png') no-repeat center;
                            // background-size: contain;
                            @include bgImg(18px,18px,'/imgs/icon-search.png');
                            margin-left: 17px;
                        }
                    }
                }
            }
        }
    }
</style>