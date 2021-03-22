const db=wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObj:"",
    recordObj:"",
  },
  getNoteData(){
    wx.navigateTo({
      url: '../editor/preview',
    }).then(res=>{
    })
  },
  getRecordData(){
    console.log(123)
    wx.navigateTo({
      url: "../voice/recorder-preview"
    }).then(res=>{})
  },
  goEditor(){
    wx.navigateTo({
      url: "../notes/editor"
    }).then(res=>{})
  },
  goRichEditor(){
    wx.navigateTo({
      url: "../notes/editor-resolver"
    }).then(res=>{})
  },
  goRecorder(){
    wx.navigateTo({
      url: "../voice/recorder"
    }).then(res=>{})
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