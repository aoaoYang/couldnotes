// pages/notes/editor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  //表单提交
  btnSub(res){
    // var title=res.detail.value.title;
    // var author=res.detail.value.author;
    // var content=res.detail.value.content;
    //ES6 解构方法
    // var {title,author,content}=res.detail.value;
    // console.log(title,author,content)
    var resval=res.detail.value;
    db.collection("couldlist").add({
    // data:{
    //   title:title,
    //   author:author,
    //   content:content
    // }
    data:resval
    }).then(res=>{
      console.log(res)
    })
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