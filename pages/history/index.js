//historys.js
const app = getApp();
Page({
  data: {
    historys: []
  },
  onLoad: function () {
    app.editTabBar(); //显示自定义的底部导航
    this.setData({
      historys: wx.getStorageSync('historys')
    })
  },
  delHis: function () {
    this.setData({
      historys: ''
    })
    wx.setStorageSync('historys', '');
  }
})
