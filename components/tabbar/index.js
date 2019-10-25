// components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabBar: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    openPage(e) {
      // console.log("tabbarq切换===",e.currentTarget.dataset)
      const { openType, openUrl, text } = e.currentTarget.dataset
      this.triggerEvent('myevent', { text: text }, {})
      //使用getCurrentPages可以获取当前加载中所有的页面对象的一个数组，数组最后一个就是当前页面。
      var curPageArr = getCurrentPages();  //获取加载的页面
      var curPage = curPageArr[curPageArr.length - 1];    //获取当前页面的对象
      var pagePath = curPage.route;    //当前页面url
      // console.log('editTabBar当前页面0===',pagePath)
      if (pagePath.indexOf('/') != 0) {
        pagePath = '/' + pagePath;
      }
      // console.log('editTabBar当前页面1===',pagePath)

      console.log(pagePath)
      console.log(openUrl)
      if (pagePath !== openUrl) {
        if (openType === "navigate") {
          wx.navigateTo({
            url: openUrl
          })
        } else if (openType === "redirect") {
          wx.redirectTo({
            url: openUrl
          })
        }
      }
    }
  }
})
