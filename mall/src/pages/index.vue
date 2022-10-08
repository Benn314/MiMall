<template>
<div>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-warp">
                        <li class="menu-item">
                            <!-- href="javascript:;" 禁止刷新 -->
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children">
                                <ul v-for="(item,index) in menuList" :key="index">
                                    <li v-for="(sub,sub_index) in item" :key="sub_index">
                                        <a :href="sub?'/#/product/'+sub.id:''">
                                            <img :src="sub?sub.img : '/imgs/item-box-1.png'" alt="">
                                            {{sub? sub.name : '小米9'}}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                            <!-- <div class="children"></div> -->
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 平板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                        </li>
                    </ul>
                </div>
                <swiper v-bind:options="swiperOption" >
                    <swiper-slide v-for="(item,index) in slideList" :key="index">
                        <a :href="'/#/product'+item.id">
                            <img :src="item.img" alt="">
                        </a>
                    </swiper-slide>
                    <!-- 因为slot在vue3.x中被弃用了，新增v-slot(可简写为#) v-slot插槽只能在template中使用且不能被div包裹-->
                    <template #pagination>
                        <div class="swiper-pagination"></div>
                    </template>
                    <template v-slot:button-prev>
                        <div class="swiper-button-prev"></div>
                    </template>
                    <template #button-next>
                        <div class="swiper-button-next"></div>
                    </template>
                </swiper>
            </div>
            <!-- 广告位的缩写 -->
            <div class="ads-box1">
                <a v-bind:href="'/#/product'+item.id" v-for="(item,index) in adsList" v-bind:key="index">
                    <!-- 用v-lazy后 它会自动给我们封装一个src 所以这里不用写 -->
                    <img v-lazy="item.img" alt="">
                    <!-- 如果我们没有v-lazy的话 用jquery怎么做呢？加data-img 将data-img值取出来赋值到src 
                        作用原理都差不多 一开始不要给src赋值 把这图片滚出来的时候 我们再把src赋值上去 这个时候图片才会加载
                        这个就是避免了同时并列加载n张图片到首屏 一旦你首屏加载了太多图片资源 就导致你的页面首页是空白的或者白屏
                    -->
                    <!-- <img v-lazy="item.img" data-img="" alt=""> -->
                </a>
            </div>
            <div class="banner">
                <a href="'/#/product'30">
                <!-- 注意 凡是指令里面肯定是变量 类型是字符串的话需要用单引号括起来字符串-->
                    <img v-lazy="'/imgs/banner-1.png'" alt="">
                </a>
            </div>
        </div>
        <div class="product-box">
            <div class="container">
                <h2>手机</h2>
                <div class="wrapper">
                    <div class="banner-left">
                        <a href="/#/product/35"><img v-lazy="'/imgs/mix-alpha.jpg'" alt=""></a>
                    </div>
                    <div class="list-box">
                        <div class="list" v-for="(arr,i) in phoneList" :key="i">
                            <div class="item" v-for="(item,j) in arr" :key="j">
                                <span :class="{'new-pro':j%2==0}">新品</span>
                                <div class="item-img">
                                    <img v-lazy="item.mainImage" alt="">
                                </div>
                                <div class="item-info">
                                    <h3>{{item.name}}</h3>
                                    <p>{{item.subtitle}}</p>
                                    <p class="price" @click="addCart(item.id)">{{item.price}}元</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    <service-bar></service-bar>
    <modal 
        title="提示" 
        sureText="查看购物车" 
        btnType="1" 
        modalType="middle" 
        :showModal="showModal"
        @submit="goToCart"
        @cancel="showModal=false"
    >
        <!-- 新版本用template嵌套v-slot -->
        <template v-slot:body>
            <p>商品添加成功！</p>
        </template>
    </modal>
</div>
</template>

<script>
import ServiceBar from './../components/ServiceBar'
import Modal from './../components/Modal'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
    name:'index',
    components:{
        swiper,
        swiperSlide,
        ServiceBar,
        Modal
    },
    data() {
        return {
            swiperOption:{
                autoplay:true, // 自动播放
                loop:true,   // 循环播放
                effect : 'cube',
                cubeEffect: {
                    slideShadows: true, // 默认值：true
                    shadow: true, // 默认值：true
                    // shadowOffset: 100, // 默认值：20px
                    // shadowScale: 0.6 // 默认值：0.94
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true, // 默认是false
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            slideList:[
                {
                    id:'42',
                    img:'/imgs/slider/slide-1.jpg'
                },
                {
                    id:'45',
                    img:'/imgs/slider/slide-2.jpg'
                },
                {
                    id:'46',
                    img:'/imgs/slider/slide-3.jpg'
                },
                {
                    id:'',
                    img:'/imgs/slider/slide-4.jpg'

                },
                {
                    id:'',
                    img:'/imgs/slider/slide-1.jpg'
                }
            ],
            menuList:[
                [
                    {
                        id:30,
                        img:'/imgs/item-box-1.png',
                        name:'小米CC9',
                    },{
                        id:31,
                        img:'/imgs/item-box-2.png',
                        name:'小米8青春版',
                    },{
                        id:31,
                        img:'/imgs/item-box-3.jpg',
                        name:'Redmi K20 Pro',
                    },{
                        id:31,
                        img:'/imgs/item-box-4.jpg',
                        name:'移动4G专区',
                    }
                ],
                [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
            ],
            adsList:[
                {
                    id:33,
                    img:'/imgs/ads/ads-1.png'
                },{
                    id:48,
                    img:'/imgs/ads/ads-2.jpg'
                },{
                    id:45,
                    img:'/imgs/ads/ads-3.png'
                },{
                    id:47,
                    img:'/imgs/ads/ads-4.jpg'
                }
            ],
            phoneList:[],
            showModal:false
        }
    },
    // 初始化产品
    mounted() {
        this.init();
    },
    methods: {
        init(){
            this.axios.get('/products',{
                params:{
                    categoryId:100012,
                    pageSize:14
                }
            }).then((res)=>{
                // this.phoneList = [res.list.slice(6,10),res.list.slice(10,14)];
                res.list = res.list.slice(6,14);
                this.phoneList = [res.list.slice(0,4),res.list.slice(4,8)];

            })
        },
        addCart(){
            // 等把登录模块做出来后 再搞添加购物车
            this.showModal=true;
            // this.axios.post('/carts',{
            //     productId:id,
            //     selected: true
            // }).then(()=>{

            // }).catch(()=>{ // 因为我们还未登录 所以可能出现提交不成功 先用catch捕获异常
            //     this.showModal = true;
            // })
        },
        goToCart(){
            this.$router.push('/cart')
        }
    },
}
</script>

<style lang="scss">
    @import './../assets/scss/config.scss';
    @import './../assets/scss/mixin.scss';
    .index{
        .swiper-box{
            .nav-menu{
                position: absolute;
                width: 264px;
                height: 451px;
                z-index:9;
                padding: 26px 0;
                background-color: #55585a7a;
                box-sizing: border-box;
                .menu-warp{
                    .menu-item{
                        height: 50px;
                        line-height: 50px;
                        // transition:width 2s, height 2s, background-color 2s, transform 2s;
                        // 先定义a的样式，因为a的内联样式优先级高
                        a{
                            position: relative;
                            display: block; // 使a变成块级元素 撑满a，就显示正常了
                            font-size: 16px;
                            color: #ffffff; 
                            padding-left: 30px;                            
                            &:after{
                                position: absolute;
                                right: 30px;
                                top: 17.5px;
                                content:' ';
                                @include bgImg(10px,15px,'/imgs/icon-arrow.png');
                            }
                        }
                        &:hover{
                            background-color:$colorA;
                            .children{
                                display: block;
                            }
                        }
                        .children{
                            display: none;
                            // transition:width 2s, height 2s, background-color 2s, transform 2s;
                            width:962px;
                            height: 451px;
                            background-color: $colorG;
                            position: absolute;
                            top: 0;
                            left: 264px;
                            border: 1px solid $colorH;
                            ul{
                                display:flex;
                                justify-content: space-between; // 两边对齐
                                height: 75px;
                                li{
                                    height: 75px;
                                    line-height: 75px;
                                    flex:1;
                                    // width: 241px; // 或者flex:1 这样也是取每个都是平均值
                                    padding-left: 23px;
                                }
                                a{
                                    color:$colorB;
                                    font-size:14px;
                                }
                                img{
                                    width: 42px;
                                    height: 35px;
                                    vertical-align: middle; // 居中显示
                                    margin-right:15px;
                                }
                            }
                        }
                    }
                }
            }
            .swiper-container{
                height: 451px;
                .swiper-button-prev{
                    left: 274px;
                }
                img{
                    width:100%;
                    height: 100%;
                }
            }
        }
        .ads-box1{
            @include flex();
            // margin-top: 14px;
            margin-top: 31px;
            margin-bottom: 31px;
            a{
                width:296px;
                height: 167px;
            }
        }
        .banner{
            margin-bottom: 50px;
        }
        .product-box{
            background-color: $colorJ;
            // background-color: #ffffff;
            padding: 30px 0 50px;
            h2{
                font-size: $fontF;
                height: 21px;
                line-height: 21px;
                color: $colorB;
                margin-bottom: 20px;
            }
            .wrapper{
                display: flex;
                .banner-left{
                    margin-right: 16px;
                }
                img{
                    width: 224px;
                    height: 619px;
                }
            }
            .list-box{
                .list{
                    @include flex();
                    width: 986px;
                    margin-bottom: 14px;
                    &:last-child{
                        margin-bottom:0px;
                    }
                    .item{
                        width:236px;
                        height: 302px;
                        background-color: $colorG;
                        text-align: center;
                        span{
                            display: inline-block;
                            width: 67px;
                            height: 24px;
                            font-size:14px;
                            line-height: 24px;
                            color:$colorG;
                            &.new-pro{
                                background-color: #7ECF68;
                            }
                            &.kill-pro{
                                background-color: #E82626;
                            }

                        }
                        .item-img{
                            img{
                                width:100%;
                                height: 195px;
                            }
                        }
                        .item-info{
                            h3{
                                font-size: $fontJ;
                                color:$colorB;
                                line-height: $fontJ;
                                font-weight: bold;
                            }
                            p{
                                color:$colorD;
                                line-height: 13px;
                                margin:6px auto 13px;
                            }
                            .price{
                                color: #F20A0A;
                                font-size:$fontJ;
                                font-weight:bold; // 加粗
                                cursor:pointer;
                                &:after{
                                    @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                                    content:' ';
                                    margin-left: 5px;
                                    vertical-align:middle;
                                }
                            }
                        }
                    }

                }
            }
        }
    }
</style>
