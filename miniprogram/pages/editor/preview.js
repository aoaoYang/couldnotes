// pages/editor/preview.js
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObj:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //查询数据
      // console.log(123)
      // db.collection("couldlist").get({
      //   success:res=>{
      //     console.log(res.data)
      //     this.setData({
      //       dataObj: res.data
      //     })
      //   }
      //   })
      /** then链式调用，避免回调地狱*/
      db.collection("couldlist").get().then(res=>{
        this.setData({
          dataObj: res.data
        })
      }).catch(err=>{
        console.log(err)
    })
  },
  toDetail:function(event){
    console.log('detail')
    var id=parseInt(event.currentTarget.dataset.index);
    var note_id=this.data.dataObj[id]._id;
    console.log(id)
    console.log(note_id)
    wx.navigateTo({
      url: '../index/details?id=' + note_id,
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