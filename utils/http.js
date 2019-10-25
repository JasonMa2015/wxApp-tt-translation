import {
  config
} from '../config.js'

class HTTP {
  request({
    url = '',
    data = {},
    method = 'POST',
    header = {}
  }) {
    return new Promise((resolve, reject) => {
      this._request(url, resolve, reject, data, method, header)
    })
  }
  _request(url, resolve, reject, data, method, header) {
    wx.request({
      url: config.api_base_url + url,
      method: method,
      data: data,
      header: Object.assign(config.header, header),
      success: (res) => {
        const code = res.statusCode.toString()
        if (code.startsWith('200')) {
          resolve(res.data)
        } else {
          let error_code = res.data.code
          let error_msg = res.data.msg
          this._show_error(error_code, error_msg)
          reject({
            code: error_code,
            msg: error_msg
          })
        }
      },
      fail: (err) => {
        reject(err)
        this._show_error(1)
      }
    })
  }

  // 私有方法
  _show_error(error_code, error_msg) {
    const tip = error_msg
    wx.showToast({
      title: tip ? tip : config.tips['msg1'],
      icon: 'none',
      duration: 2000
    })
  }
}

export {
  HTTP
}