// pages/notes/editor.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  title:'', //文章标题
  content: '124', //文章摘要
  formats: {},
  bottom: 0,
  readOnly: false,
  placeholder: '开始输入内容...',
  _focus: false,
  editorHeight: 300,
  keyboardHeight: 0,
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
  readOnlyChange(){
    this.setData({
      readOnly: !this.data.readOnly
    })
  },
  onEditorReady(){
    const that=this
    wx.createSelectorQuery().select('#editor').context(function(res) {
      that.editorCtx=res.context;
      that.editorCtx.setContents({
        html: that.data.content  //将数据写入编辑器内作为默认值
       })
      //在这里用event.on注册onEditorReady方法
      //当event.emit执行时，就会调用onEditorReady方法，重新渲染富文本编辑器
      //此时就能获取到数据，写入编辑器中（即给that.data.articleContent赋值后，他不再为空）
    }).exec();
  },undo() {
    this.editorCtx.undo()
  },redo(){
    this.editorCtx.redo()
  },
  format(e){
    let {name,value}=e.target.dataset
    if(!name) return
    console.log('format', name, value)
    this.editorCtx.format(name,value)
  },
  // 通过 Context 方法改变编辑器内样式时触发，返回选区已设置的样式
  onStatusChange(e) {
    const formats = e.detail
    this.setData({ formats })
  },
  // 插入分割线
  insertDivider() {
    this.editorCtx.insertDivider({
      success: function () {
        console.log('insert divider success')
      }
    })
  },
  //清除
  clear() {
    this.editorCtx.clear({
      success: function (res) {
        console.log("clear success")
      }
    })
  },
  // 移除样式
  removeFormat() {
    this.editorCtx.removeFormat()
  },
  // 插入当前日期
  insertDate() {
    const date = new Date()
    const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    this.editorCtx.insertText({
      text: formatDate
    })
  },
  //插入图片
  insertImage() {
    const that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        that.editorCtx.insertImage({
          src: res.tempFilePaths[0],
          data: {
            id: 'abcd',
            role: 'god'
          },
          width: '80%',
          success: function () {
            console.log('insert image success')
          }
        })
      }
    })
  },
  //选择图片
  chooseImage(e) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'], //可选择原图或压缩后的图片
      sourceType: ['album', 'camera'], //可选择性开放访问相册、相机
      success: res => {
        const images = this.data.images.concat(res.tempFilePaths);
        this.data.images = images.length <= 3 ? images : images.slice(0, 3);
      }
    })
  },
  getTitle(res){
    const title=res.detail.value;
    this.setData({
      title:title
    })
  },
  getContent(res){
    const content=res.detail.value;
    this.setData({
      content:content
    })
  },
   //查看详细页面
   toDeatil() {
    this.editorCtx.getContents({
      success: (res) => {
        console.log(this.data.title)
        console.log(this.data.content)
        let title=this.data.title
        let content=this.data.content
        app.globalData.title=title
        app.globalData.content=content
        app.globalData.html = res.html
        console.log(res.html)
        wx.navigateTo({
          url: '../notes/editor-details'
        })
      },
      fail: (res) => {
        console.log("fail：" , res);
      }
    });
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