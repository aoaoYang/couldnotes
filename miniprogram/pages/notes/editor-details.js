// pages/notes/editor-details.js
const apputil=require("../utils/utils.js")
const db=wx.cloud.database()
const app = getApp();
const _ = db.command;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noteid:'',
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
      noteid:app.globalData.noteid,
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
    let note_id=this.data.noteid;
    if (apputil.isNull(note_id)) {
      wx.showLoading({
        title: '数据添加中...',
        mask:true
      }),
      console.log(note_id)
      //添加新数据
      db.collection("couldlist").add({
        data:{
          title:this.data.title,
          content:this.data.content,
          details:this.data.html
        }
      }).then(res=>{
      console.log(res)
      wx.hideLoading(
        wx.showToast({
          title: "数据添加成功!",
          icon:'success',
          duration:3000}
        ))
      })
    } else {
      wx.showLoading({
        title: '数据更新中...',
        mask:true
      }),
      //云笔记列表，需要根据item_id进行update
      //新建云笔记直接进行添加即可
      console.log(note_id)
        db.collection("couldlist").doc(note_id).set({
          data:{
            title:this.data.title,
            content:this.data.content,
            details:this.data.html
          }
        }).then(res=>{
        console.log(res)
        wx.hideLoading(
          wx.showToast({
            title: "数据更新成功!",
            icon:'success',
            duration:3000}
          ))
        })
    }
      setTimeout(function() {
        console.log("发布成功，自动回退上个页面！");
        wx.navigateBack({
          delta: 1,
        })
      }, 4000)
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