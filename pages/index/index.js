//index.js
//获取应用实例
const app = getApp()

Page({
  onShareAppMessage() {
    return {
      title: 'swiper',
      path: 'page/component/pages/swiper/swiper'
    }
  },
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    /*hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
    */
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  },
  getUserInfo: function(e) {
  }
})
