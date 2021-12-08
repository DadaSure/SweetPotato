// pages/welcome/welcome.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  // bindViewTap: function () {
  //   wx.navigateTo({
  //     url: '../test/test'
  //   })
  // },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    wx.setStorageSync('userInfo', app.globalData.userInfo)
    // this.setData({
    //   userInfo: e.detail.userInfo,
    //   hasUserInfo: true
    // })

    if(app.globalData.userInfo != null)
    {
      wx.showToast({
        title: '登陆成功',
        icon: 'success',
        duration: 2000
      })
      setTimeout(function () {
        wx.reLaunch({
          url: '../task/task',
        })
        // wx.redirectTo({
        //   url: '../test/test',
        // })
        // wx.navigateBack({
          
        // })
      }, 2000);
    }
    else
    {
      wx.showToast({
        title: '请授权登陆',
        icon: 'success',
        duration: 2000
      })
      setTimeout(function () {
        wx.reLaunch({
          url: '../welcome/welcome',
        })
        // wx.redirectTo({
        //   url: '../test/test',
        // })
        // wx.navigateBack({

        // })
      }, 2000);
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

  }
})