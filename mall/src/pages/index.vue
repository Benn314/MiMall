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
                <div class="ads-box"></div>
                <div class="banner"></div>
                <div class="product-box"></div>
            </div>
        </div>
        <service-bar></service-bar>
    </div>
</template>

<script>
import ServiceBar from './../components/ServiceBar'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
    name:'index',
    components:{
        swiper,
        swiperSlide,
        ServiceBar
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
                    shadowOffset: 100, // 默认值：20px
                    shadowScale: 0.6 // 默认值：0.94
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
            ]
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
                            transition:width 2s, height 2s, background-color 2s, transform 2s;
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
                                    width: 241px; // 或者flex:1 这样也是取每个都是平均值
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
    }
</style>
