// pages/createTask/createTask.js
const app=getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    // card:null,
    // index:null,
    // title:null,
    // time:null,
    // value:null
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    // this.setData(
    //   {
    //     card: app.globalData.card,
    //     index: app.globalData.index
    //   }
    // )

    // console.log(this.data.index)

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

  submit: function(e){
    console.log(e)
    // this.setData({
    //   title: e.detail.value.title,
    //   time: e.detail.value.time,      
    //   value: e.detail.value.value
    // })
    let idx = app.globalData.card.length
    let task = {
      index: idx,
      title: e.detail.value.title,
      description: e.detail.value.description,
      time: e.detail.value.time,      
      value: e.detail.value.value
    }
    if (!(isNaN(e.detail.value.value))){
      console.log(app.globalData.card)  

      app.globalData.card.push(task)

      console.log(app.globalData.card)

      // wx.setStorageSync('globalData', app.globalData)
      wx.setStorageSync('card', app.globalData.card)    

      wx.showToast({
        title: '创建成功',
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
        title: '地瓜烧数量要输入数字哦',
        icon: 'none',
        duration: 2000
      })
    }
    // var toBeChanged = 'card['+index+']'
    // this.setData(
    //   {
    //     toBeChanged: task,
    //     index: index+1
    //   }
    // )
    // console.log(this.data.index)


    // var globalCard = 'app.globalData.card'
    // var globalIndex = 'app.globalData.index'
    // this.setData(
    //   {
    //     globalCard: card,
    //     globalIndex: index
    //   }
    // )

    // let index = this.data.index
    // let card = this.data.card    
    // this.setData(
    //   {
    //     card[index]
    //   }
    // )


  }

})