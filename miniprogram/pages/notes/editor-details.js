// pages/notes/editor-details.js
const db=wx.cloud.database()
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    content:'',
    html: '',
    details: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      title:app.globalData.title,
      content:app.globalData.content,
      html: app.globalData.html
    })
  },
 // 返回0
back(){
  wx.navigateBack({
    delta: 1,
  })
},
submit(){
    wx.showLoading({
      title: '数据添加中...',
      mask:true
    }),
    //重复数据需要判断
      db.collection("couldlist").add({
        data:{
          title:app.globalData.title,
          content:app.globalData.content,
          details:app.globalData.html
        }
      }).then(res=>{
      console.log(res)
      wx.hideLoading(
        wx.showToast({
          title: "数据添加成功",
          icon:'success',
          duration:2000}
        ))
      })
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