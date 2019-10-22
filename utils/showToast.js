import {
  config
} from '../config.js'
class ShowToast {
  errorCode(code, msg) {
    return new Promise((resolve, reject) => {
      if (code !== 0) {
        const tip = msg;
        wx.showToast({
          title: tip ? tip : config.tips['front_2'],
          icon: 'none',
          duration: 2000
        })
      } else {
        resolve();
      }
    })
  }

  success(msg = config.tips['front_3']) {
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