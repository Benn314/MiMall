// 改完任何config文件都需要重启生效
module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  },
  // publicPath:'/app', 配置了/app 项目路径都会多一个app
  // outputDir:'dist',
  // indexPath:'index2.html',
  // lintOnSave:false, //关闭eslint的校验 但建议开启 它确实能够帮我们做一些本地的代码的语法检查
  // productionSourceMap在本地的时候可以改成true 线上打包的时候再改成false 否则我们再本地看不到源码也不好
  productionSourceMap:false, //不生成map文件 别人就看不见我们的源码了 开发者工具里【Source】的js文件是被压缩的 别人看不懂
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch'); //通过这种方式把预加载全部干掉 0.js-10.js 真正做到按需加载 防止他重复加载
  }
}