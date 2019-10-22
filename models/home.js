import {
  config
} from '../config.js'

import {
  HTTP
} from '../utils/http.js'
import { MD5 } from '../utils/md5.js'

class HomeModel extends HTTP {
  // 翻译模块
  translate(data) {
    let salt = Date.now();
    let sign = MD5(`${config.appid}${data.q}${salt}${config.key}`)
    data.appid = config.appid
    data.salt = salt
    data.sign = sign
    return this.request({
      data
    })
  }

}

export {
  HomeModel
}