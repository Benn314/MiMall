module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api': {   //当碰到有activity字段就会被拦截转到target
                target: 'https://www.imooc.com',
                changeOrigin: false, // 是否将主机口的原点更改为目标url地址
                // pathRewrite: {   //转发地址
                //     '/api':'/api'
                // }
            }
        },
    }
}