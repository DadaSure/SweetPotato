// pages/me/me.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    userInfo: null

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
    
    if (!(app.globalData.userInfo.nickName)){
      wx.navigateTo({
        url: '../welcome/welcome',
      })
    }
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
  navigateToCompletedTasks: function() {
    wx.navigateTo({
      url: '../completedTasks/completedTasks',
    })
  },

  navigateToConsumedItems: function() {
    wx.navigateTo({
      url: '../consumedItems/consumedItems',
    })

  },

  navigateToAbout: function() {
    wx.navigateTo({
      url: '../about/about',
    })
  },

  // clearStorage: function(){
  //   wx.showModal({
  //     title: '警告',
  //     content: '清除本地数据将会删除所有用户信息',
  //     success(res) {
  //       if (res.confirm) {
  //         console.log('用户点击确定')
  //         wx.clearStorageSync()
  //         app.globalData.userInfo = null
  //         wx.reLaunch({
  //           url: '../welcome/welcome',
  //         })

  //       } else if (res.cancel) {
  //         console.log('用户点击取消')
  //       }
  //     }
  //   })
  // }
  
})