// pages/consumeSweetpotato/consumeSweetpotato.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
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

  submit: function (e) {
    let sweetpotatovalue = this.data.sweetpotatoValue
    if (!(isNaN(e.detail.value.value))) {
      if (sweetpotatovalue - Number(e.detail.value.value) >= 0){
        console.log(e)
        // this.setData({
        //   title: e.detail.value.title,
        //   time: e.detail.value.time,      
        //   value: e.detail.value.value
        // })
        let idx = app.globalData.consumedItems.length
        let consumedItem = {
          index: idx,
          title: e.detail.value.title,
          description: e.detail.value.description,
          time: e.detail.value.time,
          value: e.detail.value.value
        }

        
        console.log(app.globalData.consumedItems)

        app.globalData.consumedItems.push(consumedItem)

        console.log(app.globalData.consumedItems)

        app.globalData.sweetpotatoValue -= Number(e.detail.value.value)

        // wx.setStorageSync('globalData', app.globalData)
        wx.setStorageSync('consumedItems', app.globalData.consumedItems)
        wx.setStorageSync('sweetpotatoValue', app.globalData.sweetpotatoValue)

        wx.showToast({
          title: '消耗成功',
          icon: 'success',
          duration: 2000
        })
        setTimeout(function () {
          wx.navigateBack({

          })
        }, 2000);
      }
      else{
        wx.showToast({
          title: '你的地瓜烧不够哦~',
          icon: 'none',
          duration: 2000
        })
        setTimeout(function () {
          wx.navigateBack({

          })
        }, 2000);
      }
    }
    else{
      wx.showToast({
        title: '地瓜烧数量要输入数字哦',
        icon: 'none',
        duration: 2000
      })
    }
  }

})