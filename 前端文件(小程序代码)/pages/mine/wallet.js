// pages/mine/wallet.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    money:0.00
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var nickName = that.data.nickName;
    var avatarUrl = that.data.avatarUrl;
    var db = "no";
    wx.getUserInfo({
      success: function (res) {
        that.data.nickName = res.userInfo.nickName,
          that.data.avatarUrl = res.userInfo.avatarUrl,
          that.setData({
            nickName: that.data.nickName,
            avatarUrl: that.data.avatarUrl,
          }),
          that.setData({
            db: "ok"// 设置变量db，只有成功获取用户信息后才写入数据库
          })
        if (db = "ok") {
          var name, url;
          wx.request({
            url: app.data.url + '/money',//写自己的服务器
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "GET",
            data: {
              name: res.userInfo.nickName,
            },
            success: function (res) {
              that.setData({
                money:res.data
              })
            },
            fail: function (res) {
              console.log(res.data)
            }
          })
        }}})
      
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

  },
  withdraw:function(){
   wx.navigateTo({
     url: 'alipay',
     success: function(res) {},
     fail: function(res) {},
     complete: function(res) {},
   })
    }
})