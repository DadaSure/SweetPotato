// pages/sweetpotato/sweetpotato.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    // items: null,
    sweetpotatoValue: null
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData(
      {
        // items: app.globalData.consumeItems,
        sweetpotatoValue: app.globalData.sweetpotatoValue
      }
    )

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
        // items: app.globalData.consumeItems,
        sweetpotatoValue: app.globalData.sweetpotatoValue
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

  // toConsumeItemDetail: function (e) {
  //   console.log(e)
  //   console.log(e.currentTarget.dataset.item)
  //   let cardID = e.currentTarget.dataset.item
  //   let url = ''
  //   url = `/pages/consumeItemDetail/consumeItemDetail?cardID=${cardID}`
  //   wx.navigateTo({
  //     url,
  //   })
  // },

  // navigateToCreateConsumeItem: function () {
  //   wx.navigateTo({
  //     url: '../createConsumeItem/createConsumeItem',
  //   })
  // },

  navigateToConsumeSweetpotato: function() {
    wx.navigateTo({
      url: '../consumeSweetpotato/consumeSweetpotato',
    })
  }
})