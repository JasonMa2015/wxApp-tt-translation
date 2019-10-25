const config = {
  appid: '20191022000343348',
  key: 'HY8RmCbaV6iwNkgo0mGp',
  api_base_url: 'https://fanyi-api.baidu.com/api/trans/vip/translate', 
  header: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  tips: {
    msg1: '请求出错',
    msg2: '操作成功',
    msg3: '翻译内容不能为空'
  },
  sourceCode: {
    "52000": '成功',
    "52001": '请求超时',
    "52002": '系统错误',
    "52003": '未授权用户',
    "54000": '必填参数为空',
    "54001": '签名错误',
    "54003": '请降低您的调用频率',
    "54004": '账户余额不足',
    "54005": '请降低长query的发送频率，3s后再试',
    "58000": '客户端IP非法',
    "58001": '译文语言方向不支持，检查译文语言是否在语言列表里',
    "58002": '服务当前已关闭',
    "90107": '认证未通过或未生效'
  }

}

export { config }