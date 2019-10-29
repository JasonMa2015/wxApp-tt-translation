## 百度翻译api介绍

百度翻译开放平台的翻译api。支持28种语言实时互译，覆盖中、英、日、韩、西、法、泰、阿、俄、葡、德、意、荷、芬、丹等；同时支持28种语言的语言检测。

## 准备工作
1. 前往微信公众平台注册小程序号 [微信小程序注册地址](https://mp.weixin.qq.com/cgi-bin/wx?token=&lang=zh_CN)
2. 注册好后去设置里面设置好小程序基本信息
3. 去百度翻译开放平台注册账号获得api权限 [百度翻译开放平台地址](http://api.fanyi.baidu.com/api/trans/product/index)
3. 去开发里面的开发设置添加服务器域名，request合法域名填写百度api地址，如下图：
![](https://user-gold-cdn.xitu.io/2019/10/28/16e1179832267ccd?w=1023&h=789&f=png&s=64313)
4. 下载微信开发者工具[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
5. 新建小程序，小程序ID（AppID）就是上图里面的小程序ID，复制粘贴过去就好了。这样一个小程序工程就建好了，可以进入开发了。

## 核心代码及目录结构
1. 首先看一下目录结构
![](https://user-gold-cdn.xitu.io/2019/10/28/16e118b30f27168f?w=242&h=576&f=png&s=21160)

下面说一下主要的文件夹及文件

```
components： 公共组件 比如tabbar就是小程序底部导航菜单
images：小程序所需图片
models: 定义小程序所有的api接口
pages：小程序页面
utils：工具函数
  http.js: 封装小程序http请求
  language.js: 定义百度翻译的所有语言
  md5.js: 百度翻译的MD5算法
config.js：配置基础域名、小程序ID、百度翻译key以及状态码定义
```

接口请求代码：
请求的公共参数配置在models里了，代码如下：
![](https://user-gold-cdn.xitu.io/2019/10/28/16e119e35b0c0f2d?w=927&h=526&f=png&s=64454)

页面请求参数：
```
let param = {};
param.q = val;
param.from = sourceLan;
param.to = targetLan;
```

## 廷廷翻译demo展示

直接在微信小程序搜索廷廷翻译就可查看demo

![](https://user-gold-cdn.xitu.io/2019/10/28/16e1188c23c1586a?w=1080&h=1920&f=png&s=402346)

![](https://user-gold-cdn.xitu.io/2019/10/28/16e118908c3b3da3?w=1080&h=1920&f=png&s=107958)