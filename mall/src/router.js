import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Login from './pages/login'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import AliPay from './pages/alipay'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path:'/',
            name:'home',    //home是我们的根路由 下面是我们的子路由
            component:Home,   // 这里component没有加s
            redirect:'/index',  //重定向
            children: [
                {
                    path:'/index',
                    name:'index',
                    component:Index
                }, {
                    path:'/product/:id', // 动态定义路由的方式
                    name:'product',
                    component:Product
                }, {
                    path:'/detail/:id', // 动态定义路由的方式
                    name:'detail',
                    component:Detail
                }
            ]
        }, {
            path:'/login',
            name:'login',
            component: Login
        },
        {
            path:'/cart',
            name:'cart',
            component: Cart
        }, {
            path:'/order',
            name:'order',
            component: Order,  
            children:[
                {
                    path:'list',    //不用加/ 也就是/list 不然显示不出来list子页 下面的children同理
                    name:'order-list',
                    component: OrderList
                }, {
                    path:'confirm',
                    name:'order-confirm',
                    component: OrderConfirm
                }, {
                    path:'pay',
                    name:'order-pay',
                    component: OrderPay
                }, {
                    path:'alipay',
                    name:'alipay',
                    component: AliPay
                }
            ]     
        }
    ]
})