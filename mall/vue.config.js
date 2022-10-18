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
  productionSourceMap:false, //不生成map文件 别人就看不见我们的源码了 开发者工具里【Source】的js文件是被压缩的 别人看不懂
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');
  }
}