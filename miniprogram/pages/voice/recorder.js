// pages/notes/recorder.js
var voice = ''
var util = require('../notes/utils.js')
const recorderManager = wx.getRecorderManager()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    poster: '../static/images/poster.jpg',
    name: '有何不可',
    author: '许嵩',
    src: 'https://music.taihe.com/song/T10038826794',
    openRecordingdis: 'block', // 显示录机图标
    shutRecordingdis: 'none', // 隐藏停止图标
    recordingTimeqwe: 0, // 录音计时
    setInter: '', // 录音名称
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
  audioPlay: function () {
    this.audioCtx.src = this.data.playurl
    this.audioCtx.play()
    this.audioCtx.onEnded(() => {
    this.audioCtx.stop()
  })
},
// this.audioCtx.play()},
audioPause: function () {
   console.log('audio pause')
   this.audioCtx.pause()
},
audioRestart: function () {
   console.log('audio restart')
   this.audioCtx.seek(0)
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
    duration: 60000,
    sampleRate: 16000,
    numberOfChannels: 1,
    encodeBitRate: 96000,
    format: 'mp3',
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