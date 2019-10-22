//index.js
import {
  HomeModel
} from '../../models/home.js'
import {
  ShowToast
} from '../../utils/showToast.js'

//获取应用实例
const app = getApp();
const homeModel = new HomeModel();

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 翻译
   */
  translate: function () {
    let param = {};
    param.q = 'apple'
    param.from = 'en'
    param.to = 'zh'

    homeModel.translate(param)
      .then(res => {
        console.log('ddddddddddddddddddd')
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.translate();
    app.editTabBar(); //显示自定义的底部导航
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
