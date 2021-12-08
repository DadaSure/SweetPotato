// pages/test/test.js
const app=getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    items:null
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

    this.setData(
      {
        items: app.globalData.card
      }
    )

    if(!(app.globalData.userInfo.nickName)){
      wx.reLaunch({
        url: '../welcome/welcome',
      })
    }//若未取得用户公开信息，重新定位到欢迎页面

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
    this.setData(
      {
        items: app.globalData.card
      }
    )


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

  click: function(e){
    console.log(e)
    console.log(e.currentTarget.dataset.item)
    let cardID = e.currentTarget.dataset.item
    let url = ''
    url = `/pages/detail/detail?cardID=${cardID}`
    wx.navigateTo({
      url,
    })
  },

  navigateToCreateTask:function(){
    wx.navigateTo({
      url: '../createTask/createTask',
    })
  }
})