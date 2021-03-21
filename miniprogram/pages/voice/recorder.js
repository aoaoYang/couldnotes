// pages/notes/recorder.js
 // var util = require('../voice/utils/utils.js')
 // var voice =''
const db=wx.cloud.database()
const recorderManager = wx.getRecorderManager()
var myDate =new Date()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authed:false,
    soundUrl: '',
    isSpeaking: false,
    playurl: ''
  },
  // 录音计时器
  recordingTimer: function () {
  var that = this
  // 将计时器赋值给setInter
  that.data.setInter = setInterval(
    function () {
      var time = that.data.recordingTimeqwe + 1
      that.setData({
        recordingTimeqwe: time
      })
    }, 1000)
},


start: function () {
  // 开始录音
  wx.startRecord({
    success (res) {
      voice = res.tempFilePath
      console.log('startRecord', voice)
    }
  })
},
// 开始录音测试
  openRecording: function () {
    var that = this
    wx.getSystemInfo({
    success: function (res) {
      that.setData({
        shutRecordingdis: 'block',
        openRecordingdis: 'none',
        isSpeaking: true
      })
    }
  })
  const options = {
    sampleRate: 16000,
    numberOfChannels: 1,
    encodeBitRate: 48000,
    format: 'PCM',
    frameSize: 50
  }
  // 开始录音计时
  that.recordingTimer()
  // 开始录音
  recorderManager.start(options)
  // this.setData({
  //   isSpeaking: true
  // })
  recorderManager.onStart(() => {
    console.log('。。。开始录音。。。')
  })
  // 错误回调
  recorderManager.onError((res) => {
    console.log(res)
  })
},
start_record(){
  const options = {
    duration: 30000,
    sampleRate: 16000,
    numberOfChannels: 1,
    encodeBitRate: 48000,
    format: 'PCM',
    frameSize: 50
  }
  recorderManager.start(options)
  this.setData({isSpeaking:true})
},
stop_record(){
  recorderManager.stop()
  this.setData({isSpeaking:false})
  this.bind_stop()
},
bind_stop(){
  var that=this
  recorderManager.onStop(res=>{
    var tempfile=res.tempFilePath;
    const fs=wx.getFileSystemManager();
    fs.readFile({
      filePath:tempfile,
      success(res){ 
        const buffer=res.data
        that.audio_rec(buffer)
      }
    })
  })
},
audio_rec(data){
  var that=this;
  wx.showLoading({
    title: '语音识别中...',
  })
  wx.cloud.callFunction({
    name:'audio_rec',
    data:{data}
  }).then(res=>{
    if(res.errMsg=="cloud.callFunction:ok" && res.result.err_no==0){
      var result_list=res.result.result
      that.setData({
        result:(result_list.join('')).replace(/。/g,'')
      })
      db.collection("recordlist").add({
      data:{
        recordcontent:result_list.join('').replace(/。/g,''),
        recordtime:myDate.toLocaleString()
      }
    }).then(res=>{
          console.log(res)
    })
      wx.hideLoading()
    }
    else{
      wx.showToast({
        title: '识别失败',
        icon:'none'
      })
    }
  }).catch(err=>{
    wx.showToast({
      title: '识别超时',
      icon:'none'
    })
     console.log("err",err)
  })
},

// 结束录音测试
  shutRecording: function () {
    var that = this
    recorderManager.stop()
    that.setData({
    isSpeaking: false
  })
    recorderManager.onStop((res) => {
    console.log('recorder stop', res)
    const that = this
    let timestamp = util.formatTime(new Date())
    console.log('。。停止录音。。', res.tempFilePath)
    const {tempFilePath} = res
    // 结束录音计时
    clearInterval(that.data.setInter)
  })
},
  stop: function () {
    // 结束录音
    console.log('stopRecord')
    wx.stopRecord()
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.get_record_auth()
   
    
  },
  get_record_auth () {
    var that=this;
    wx.getSetting().then(res=>{
      if(res.authSetting['scope.record']){
        that.setData({authed:true})
      }else{
        wx.authorize({
          scope: 'scope.record',
      }).then(res=>{
        that.setData({authed:true})
      }).catch(err=>{
         that.cancel_auth();
      })
    }
  })
},
cancel_auth() {
    var that=this;
    wx.showModal({
      title:'提示',
      content:'未授权无法录音哦~',
      cancelText:'不授权',
      confirmText:'去授权',
      success:res=>{
        if(res.confirm){
          wx.openSetting({
            success(res){
              if(res.authSetting['scope.record']){
                that.setData({authed:true})
              }
            }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
    this.audioCtx = wx.createInnerAudioContext('wx675bd3a71ce599fa')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})