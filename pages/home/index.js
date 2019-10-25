//index.js
import {
  config
} from '../../config.js'
import {
  HomeModel
} from '../../models/home.js'
import {
  ShowToast
} from '../../utils/showToast.js'
import {
  Language
} from '../../utils/language.js'
import {
  pinyin
} from '../../utils/pinyin.js'

//获取应用实例
const app = getApp();
const homeModel = new HomeModel();
const showToast = new ShowToast();

Page({
  data: {
    language: Language,
    translationVal: '',
    targetLan: '',
    sourceVal: ''
  },

  /**
   * 监听输入框内容
   */
  listenInput: function (e) {
    let val = e.detail.value;
    this.setData({
      sourceVal: val
    });

    if (val) {
      this.translate(val);
    }
  },

  /**
   * 清除输入框内容
   */
  clearSourceVal: function (e) {
    this.setData({
      sourceVal: ''
    });
    this.setData({
      translationVal: ''
    })
  },

  /**
   * 设置目标语言
   */
  onTapdetail: function (event) {
    if (!this.data.sourceVal) {
      showToast.error(config.tips['msg3']);
      return false;
    }
    let lantype = event.currentTarget.dataset.lantype;
    this.setData({
      targetLan: lantype
    });

    this.translate(this.data.sourceVal, lantype);
  },

  /**
   * 翻译
   */
  translate: function (val = '', targetLan = 'en', sourceLan = 'auto') {
    let param = {};
    param.q = val;
    param.from = sourceLan;
    param.to = targetLan;
    param.tts = 0;
    param.dict = 0;
    
    homeModel.translate(param)
      .then(res => {
        if (res.error_code) {
          showToast.error(`${config.sourceCode[res.error_code]}`);
          return false;
        }
        let dst = res.trans_result[0].dst;
        this.setData({
          translationVal: dst
        })

        // 添加翻译历史
        var historys = wx.getStorageSync('historys') || []
        historys.unshift({
          sourceVal: val,
          translationVal: dst
        })
        wx.setStorageSync('historys', historys);

      }).catch(err => {
        this.setData({
          translationVal: ''
        })
      })
  },

  onLoad: function () {
    app.editTabBar(); //显示自定义的底部导航
  },
})
