// pages/notes/editor-resolver.js
var wxParse=require('../wxParse/wxParse.js') 
Page({ 
 
  /** 
   * 页面的初始数据 
   */ 
  data: { 
  richcontent: 
 '<div style="text-align:center;">《静夜思》· 李白<br />床前明月光，<br />疑是地上霜。 <br />举头望明月， <br />低头思故乡。<br /><img src="http://www.xiexingcun.com/Poetry/6/images/53e.jpg" alt="" /><br /><img src="http://www.xiexingcun.com/Poetry/6/images/53.jpg" alt="" /><br /><br /><img src="http://www.xiexingcun.com/Poetry/6/images/53b.jpg" alt="" /><br /></div>' 
  }, 
 
  /** 
   * 生命周期函数--监听页面加载 
   */ 
  onLoad: function (options) { 
    var that=this 
    wxParse.wxParse('richcontent','html',that.data.richcontent,that,5); 
  }, 
  get_content(e){ 
    getApp().globalData.html=e.detial.html 
    wx.navigateTo({ 
      url: '../editor/preview', 
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