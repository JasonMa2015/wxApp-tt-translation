import {
  config
} from '../config.js'
class ShowToast {
  error(msg = config.tips['msg1']) {
    wx.showToast({
      title: msg,
      icon: 'none',
      duration: 2000
    })
  }

  errorCode(code, msg) {
    return new Promise((resolve, reject) => {
      if (code !== 0) {
        const tip = msg;
        wx.showToast({
          title: tip ? tip : config.tips['msg3'],
          icon: 'none',
          duration: 2000
        })
      } else {
        resolve();
      }
    })
  }

  success(msg = config.tips['msg2']) {
    wx.showToast({
      title: msg,
      icon: 'none',
      duration: 2000
    })
  }
}

export {
  ShowToast
}