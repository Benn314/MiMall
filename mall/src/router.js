import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
// import Login from './pages/login'
import Index from './pages/index'
// import Product from './pages/product'
// import Detail from './pages/detail'
// import Cart from './pages/cart'
// import Order from './pages/order'
// import OrderConfirm from './pages/orderConfirm'
// import OrderList from './pages/orderList'
// import OrderPay from './pages/orderPay'
// import AliPay from './pages/alipay'

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
                    // component:Product
                    // component:resolve => require(['./pages/index.vue'],resolve), //把参数抛出去 这样是个间断函数 变相通过间断函数将这个组件给它加载进来
                    component: () => import('./pages/product.vue')
                }, {
                    path:'/detail/:id', // 动态定义路由的方式
                    name:'detail',
                    // component:Detail
                    // component:resolve => require(['./pages/detail.vue'],resolve),
                    component: () => import('./pages/detail.vue')
                }
            ]
        }, {
            path:'/login',
            name:'login',
            // component: Login
            // component:resolve => require(['./pages/login.vue'],resolve),
            component:() => import('./pages/login.vue'),
        },
        {
            path:'/cart',
            name:'cart',
            // component: Cart
            component: () => import('./pages/cart.vue')
        }, {
            path:'/order',
            name:'order',
            // component: Order,  
            component:() => import('./pages/order.vue'),
            children:[
                {
                    path:'list',    //不用加/ 也就是/list 不然显示不出来list子页 下面的children同理
                    name:'order-list',
                    // component: OrderList
                    component:() => import('./pages/orderList.vue'),
                }, {
                    path:'confirm',
                    name:'order-confirm',
                    // component: OrderConfirm
                    component:() => import('./pages/orderConfirm.vue'),
                }, {
                    path:'pay',
                    name:'order-pay',
                    // component: OrderPay
                    component: () => import('./pages/orderPay.vue')
                }, {
                    path:'alipay',
                    name:'alipay',
                    // component: AliPay
                    component: () => import('./pages/alipay.vue')
                }
            ]     
        }
    ]
})