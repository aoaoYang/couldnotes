// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

var baidu=require("baidu-aip-sdk").speech
var App_ID="23807546"
var API_KEY="FlRCr7iysmWFcf7w4QwN7nVB"
var SECRET_KEY="y4HIKHjXjMBqVn7NNU3vyyk2vEvCsyju"

// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()
  // 实例化语音识别接口
  var baiduclient=new baidu(App_ID,API_KEY,SECRET_KEY)
  var buffer=new Buffer.from(event.data.data)
  var res=await baiduclient.recognize(buffer,"pcm",16000)
  return res
}