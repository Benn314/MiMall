import Mock from 'mockjs'
// 导入插件库后去使用 第一个参数是请求地址，第二个参数是返回值
Mock.mock('/api/user/login',{ //这里为什么多了个api呢？ 我们返回main.js看一下
    "status": 0,
    "data": {
      "id|10001-11000": 0,
      "username": "@cname",
      "email": "admin@51purse.com",
      "phone": null,
      "role": 0,
      "createTime": 1479048325000,
      "updateTime": 1479048325000
    }
});