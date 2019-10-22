//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    tabBar: {
      color: "#FFFFFF",
      fontSize: '26rpx',
      selectedColor: "#F56D23",
      selectedBgColor: "#030303",
      backgroundColor: "#FFFFFF",
      borderStyle: "#ccc",
      list: [
        {
          pagePath: "/pages/home/index",
          text: "翻译"
        },
        {
          pagePath: "/pages/logs/index",
          text: "日志"
        },
        {
          pagePath: "/pages/about-us/index",
          text: "关于我们"
        }
      ],
      position: "bottom"
    }
  },
  //底部tabbar
  editTabBar() {
    //使用getCurrentPages可以获取当前加载中所有的页面对象的一个数组，数组最后一个就是当前页面。
    var curPageArr = getCurrentPages(); //获取加载的页面
    var curPage = curPageArr[curPageArr.length - 1]; //获取当前页面的对象
    var pagePath = curPage.route; //当前页面url
    if (pagePath.indexOf("/") != 0) {
      pagePath = "/" + pagePath;
    }
    var tabBar = this.globalData.tabBar;
    for (var i = 0; i < tabBar.list.length; i++) {
      tabBar.list[i].active = false;
      if (tabBar.list[i].pagePath == pagePath) {
        tabBar.list[i].active = true; //根据页面地址设置当前页面状态
      }
    }
    curPage.setData({
      tabBar: tabBar
    });
  }
})