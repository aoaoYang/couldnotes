// pages/index/details.js
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObj:"",
    recordObj:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let note_id = options.id   //从列表页传过来的id值
    console.log(note_id);
    //查询操作
    db.collection("couldlist").doc(note_id).get().then(res=>{
      this.setData({
        dataObj: res.data
      })
      console.log(res.data)
    }).catch(err=>{
      console.log(err)
    })
  },
  editnotes(){
    console.log('btn-edit')
  },
  savenotes(){
    console.log('btn-saved')
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