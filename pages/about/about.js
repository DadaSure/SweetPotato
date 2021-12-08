// pages/about/about.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  clearStorage: function () {
    wx.showModal({
      title: '警告',
      content: '清除本地数据将会删除所有用户信息',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.clearStorageSync()
          app.globalData.userInfo = null
          wx.showToast({
            title: '数据清除成功',
            icon: 'success',
            duration: 2000
          })
          setTimeout(function () {
            wx.reLaunch({
              url: '../cleared/cleared',
            })
          }, 2000);


        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }


})