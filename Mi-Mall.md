# 第一章 课程简介

## 1-1_课程导学

![image-20220917113007921](Mi-Mall.assets/image-20220917113007921.png)

![image-20220917113042187](Mi-Mall.assets/image-20220917113042187.png)

![image-20220917113143959](Mi-Mall.assets/image-20220917113143959.png)

![image-20220917114759630](Mi-Mall.assets/image-20220917114759630.png)

![image-20220917115118666](Mi-Mall.assets/image-20220917115118666.png)

![image-20220917115154742](Mi-Mall.assets/image-20220917115154742.png)

![image-20220917115244296](Mi-Mall.assets/image-20220917115244296.png)

​	

## 1-2_Node环境的安装

Node是一套用前端语法开发的后端语言，可以把他看成java一样来看待

![image-20220917121330763](Mi-Mall.assets/image-20220917121330763.png)

![image-20220917122907485](Mi-Mall.assets/image-20220917122907485.png)

![image-20220917122911805](Mi-Mall.assets/image-20220917122911805.png)

​	

## 1-3_Node升降级

![image-20220917123421813](Mi-Mall.assets/image-20220917123421813.png)

Mac电脑上允许多个node版本存在，可以根据项目需要进行版本切换

​	

​	

# 第二章 Git安装和配置

## 2-1_Git的安装

![image-20220917151941736](Mi-Mall.assets/image-20220917151941736.png)

![image-20220917153500452](Mi-Mall.assets/image-20220917153500452.png)

![image-20220917154859935](Mi-Mall.assets/image-20220917154859935.png)

![image-20220917154904680](Mi-Mall.assets/image-20220917154904680.png)

![image-20220917160510351](Mi-Mall.assets/image-20220917160510351.png)

​	

## 2-2_Git配置

![image-20220917165449554](Mi-Mall.assets/image-20220917165449554.png)

![image-20220917170611030](Mi-Mall.assets/image-20220917170611030.png)

![image-20220917170629018](Mi-Mall.assets/image-20220917170629018.png)

​	

## 2-3 Git配置SSH公钥

![image-20220917171829922](Mi-Mall.assets/image-20220917171829922.png)

创建线上仓库

![image-20220917171852256](Mi-Mall.assets/image-20220917171852256.png)

​	

添加了公钥私钥，就把记住账号密码给删了，不然git不知道用谁的验证机制，到底谁生效了

![image-20220917185027822](Mi-Mall.assets/image-20220917185027822.png)

但我们会发现 在git push的时候，还是要输账号密码，这是为什么呢？

![image-20220917185105424](Mi-Mall.assets/image-20220917185105424.png)

因为我们用的是HTTPS的url，而不是SSH，所以用不了公钥私钥进行身份验证上传的方式，公钥本身就是用SSH去生成的

用SSH去克隆项目才能确保你的公钥是可用的

私钥是本地服务器 公钥在线上仓库

​	

## 2-4 VSCode操作Git

![image-20220917204401023](Mi-Mall.assets/image-20220917204401023.png)

![image-20220917204354572](Mi-Mall.assets/image-20220917204354572.png)

​	

**vscode里合并分支**

![image-20220917210127944](Mi-Mall.assets/image-20220917210127944.png)

切换到需要合并的分支，ctrl shift P唤出命令行窗口 输入git merge 点击想要进行合并的分支 进行合并 合并完将暂存区的文件提交到远程仓库就OK了

​	

合并冲突在vscode中很友好 已会就不做笔记了

只需选择做咋样的保留再push上去就OK了

![image-20220917210611537](Mi-Mall.assets/image-20220917210611537.png)

​	

## 2-5 Git常用命令

![image-20220917210804310](Mi-Mall.assets/image-20220917210804310.png)

![image-20220917212414436](Mi-Mall.assets/image-20220917212414436.png)

![image-20220917212754398](Mi-Mall.assets/image-20220917212754398.png)

![image-20220917213010471](Mi-Mall.assets/image-20220917213010471.png)

![image-20220917213226437](Mi-Mall.assets/image-20220917213226437.png)

通过git mv命令进行文件改名 是直接在该文件进行改名 而在vscode进行文件改名（例如将 c.js 改为 d.js ）则是删除c.js文件并新增一份d.js文件

​	

![image-20220917214023366](Mi-Mall.assets/image-20220917214023366.png)

![image-20220917214035948](Mi-Mall.assets/image-20220917214035948.png)

​	

git log 查看日志 里面记录着历史操作

​	

![image-20220917215732342](Mi-Mall.assets/image-20220917215732342.png)

![image-20220917220942890](Mi-Mall.assets/image-20220917220942890.png)

为什么是 : 实际上前面是空 是空就把tag给干掉

![image-20220917221915529](Mi-Mall.assets/image-20220917221915529.png)

删除的时候，git push 不写 : 会报错

​	

![image-20220917222641507](Mi-Mall.assets/image-20220917222641507.png)

vi 进入后 wq 是退出

​	

![image-20220917222745107](Mi-Mall.assets/image-20220917222745107.png)

checkout不止是切换分支 同时可以撤销文件操作

git checkout . 撤销所有

​	

![image-20220917223518838](Mi-Mall.assets/image-20220917223518838.png)

![image-20220917223822055](Mi-Mall.assets/image-20220917223822055.png)

![image-20220917223830300](Mi-Mall.assets/image-20220917223830300.png)

所以到这我们知道 git revert 版本号 就是回退到该版本号的上一个版本数据，意思是把这个版本号给回退了 所以就显示该版本号的上一个版本号的数据了

​	

![image-20220917225210180](Mi-Mall.assets/image-20220917225210180.png)

还有git reset命令 除了撤销回退的同时 还能抹去提交的历史记录 别人便无法追踪我们的历史提交记录了

![image-20220917225248355](Mi-Mall.assets/image-20220917225248355.png)

但如果撤销的跨度太大的话 会报error冲突 这时我们可以用 git push origin demo-2 --force 来强制撤销

分支与标签在项目发布的时候用得多

​	

# 第三章 Vue Cli4.0安装和使用

## 3-1 VueCli4.0安装

VueCli 我们可以把他当成是一个插件来看待 但凡是插件 安装方式都简单 可以通过npm/yarn下载安装，但安装软件不一样例如node 而cli是插件包 但凡插件一般都会上传npm去 只要是在npm发布的 我们都可以通过npm下载安装

![image-20220917230327419](Mi-Mall.assets/image-20220917230327419.png)

npm如果太慢的话 可以用cnpm，就可以不用翻墙 用的是国内的源镜像

![image-20220917230751570](Mi-Mall.assets/image-20220917230751570.png)

![image-20220917231041516](Mi-Mall.assets/image-20220917231041516.png)

项目用到的vuecli版本

脚手架能做什么呢？他能做很多东西，他会自动帮我们集成一些webpack的东西，帮我们构建打包编译，包括一些基本的架子包括我们入口的js，帮我们把vue的一些基本的单页面程序给它搭出来，那我们只需要填一些页面，填一些路由只需要一些插件就可以把项目跑起来。那么脚手架就等于是帮我们搭了一个基础的架构，实际上就是项目的非右架构，我们后面会讲解项目的右架构，脚手架就是我们项目的一个最基础的架构

![image-20220917231918741](Mi-Mall.assets/image-20220917231918741.png)

![image-20220918004740043](Mi-Mall.assets/image-20220918004740043.png)

视频中的4.0.8的vuecli版本被弃用了，安装了稍微高点的版本4.5.7

当无法覆盖安装的时候 再去卸载重新安装

​	

## 3-2 VueCli4.0使用

![image-20220918101257959](Mi-Mall.assets/image-20220918101257959.png)

![image-20220918101455786](Mi-Mall.assets/image-20220918101455786.png)

![image-20220918101516842](Mi-Mall.assets/image-20220918101516842.png)

![image-20220918101525792](Mi-Mall.assets/image-20220918101525792.png)

​	

创建项目有两种方式

1. 通过VueCli脚手架工具 使用 `vue create 项目名称(小写)` 命令来进行创建
2. 先不创建项目 而是使用 `vue ui` 命令 启动项目管理器 之后在项目管理器中创建项目 如果我们已创建了项目 就不用创建了 直接导入就行

​	

导入mall文件夹

![image-20220918102803419](Mi-Mall.assets/image-20220918102803419.png)

![image-20220918102718048](Mi-Mall.assets/image-20220918102718048.png)

​	

这些插件是辅助我们项目开发的 最终不会被编译到我们项目中去

![image-20220918102943034](Mi-Mall.assets/image-20220918102943034.png)

​	

[老师请教一下，我这边在VueCli UI系统中输入端口号，无法终止项目-慕课网 (imooc.com)](https://coding.imooc.com/learn/questiondetail/184854.html)

![image-20220918104022961](Mi-Mall.assets/image-20220918104022961.png)

​	

项目要跑起来还需要router、vuex等

一般node_moudules太大 我们都没有给它git push上去 太麻烦 不过要也可以

![image-20220918105931623](Mi-Mall.assets/image-20220918105931623.png)

​	

![image-20220918114113765](Mi-Mall.assets/image-20220918114113765.png)

![image-20220918114124507](Mi-Mall.assets/image-20220918114124507.png)

![image-20220918114339156](Mi-Mall.assets/image-20220918114339156.png)

![image-20220918135951629](Mi-Mall.assets/image-20220918135951629.png)

将node_moudules和dist添加到.gitignore文件中 太大没上传 麻烦且怕远程仓库受不了

​	

## 3-3 Vue-DevTools安装使用

