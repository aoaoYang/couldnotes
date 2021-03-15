// pages/update/demo1.js
const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getData(){
    //获取多条数据列表
    db.collection("couldlist")
    .get().then(res=>{
    console.log(res)
    this.setData({
      dataList:res.data
    })
  })
 },
  updateData(){
    //doc或者where
    db.collection("couldlist").where({
      author:"刘德华"
    }).update ({
      data:{
        author:"张学友",
        time:"2021-10-11"
      }
    }).then(res=>{
    console.log(res)
    })
  },
  deleteData(){
    //删除记录
    db.collection("couldlist")
    .doc("28ee4e3e604b22c50a42a4a54b2c1d6b")
    .remove().then(res=>{
    console.log(res)
    })
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