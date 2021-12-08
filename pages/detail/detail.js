// pages/detail/detail.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    cardID:null,
    title:null,
    description:null,
    time:null,
    value:null
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData(
      {
        cardID: options.cardID
      }
    )

    let ID = this.data.cardID

    // for(var i =0;i<app.globalData.card.length;i++ ){
    //   if (app.globalData.card[i].index = ID)
    //     this.setData(
    //       {
    //         title: app.globalData.card[i].title,
    //         time: app.globalData.card[i].time,
    //         value: app.globalData.card[i].value        
    //       }
    //     )
    // }

    this.setData(
          {
            title: app.globalData.card[ID].title,
            description: app.globalData.card[ID].description,            
            time: app.globalData.card[ID].time,
            value: app.globalData.card[ID].value        
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

  completeTask: function () {
    let ID = this.data.cardID
    if (ID == (app.globalData.card.length - 1)) {
      let task = {
        title: this.data.title,
        time: this.data.time,
        value: this.data.value
      }
      let earnedValue = Number(this.data.value)

      app.globalData.sweetpotatoValue = app.globalData.sweetpotatoValue + earnedValue

      app.globalData.completedTasks.push(task)

      let ID = this.data.cardID

      app.globalData.card.pop()

      wx.setStorageSync('card', app.globalData.card)
      wx.setStorageSync('completedTasks', app.globalData.completedTasks)
      wx.setStorageSync('sweetpotatoValue', app.globalData.sweetpotatoValue)

      // wx.setStorageSync('globalData', app.globalData)

      

      wx.showToast({
        title: '任务已完成~',
        icon: 'success',
        duration: 2000
      })
      setTimeout(function () {
        wx.navigateBack({

        })
      }, 2000);


    }
    else {
      wx.showToast({
        title: '先去完成最近的任务吧~',
        icon: 'none',
        duration: 2000
      })
      setTimeout(function () {
        wx.navigateBack({

        })
      }, 2000);
    }
    

    // app.globalData.card.splice(ID, 1)

    // let length = app.globalData.card.length

    // console.log(app.globalData.card[2].index)

    // app.globalData.card[2].index = app.globalData.card[2].index -1

    // console.log(app.globalData.card[2].index)  

    // for (i = length;i > ID;i--){
    //   app.globalData.card[i].index -= 1
    // }

    // app.globalData.card[ID].index -= 1
    // app.globalData.card[ID + 1].index -= 1
    // app.globalData.card[ID + 2].index -= 1
    // app.globalData.card[ID + 3].index -= 1
    // app.globalData.card[ID + 4].index -= 1
    // app.globalData.card[ID + 5].index -= 1
    // app.globalData.card[ID + 6].index -= 1
    // app.globalData.card[ID + 7].index -= 1
    // app.globalData.card[ID + 8].index -= 1
    // app.globalData.card[ID + 9].index -= 1
    // app.globalData.card[ID + 10].index -= 1
    // app.globalData.card[ID + 11].index -= 1
    // app.globalData.card[ID + 12].index -= 1
    // app.globalData.card[ID + 13].index -= 1
    // app.globalData.card[ID + 14].index -= 1
    // app.globalData.card[ID + 15].index -= 1
    // app.globalData.card[ID + 16].index -= 1
    // app.globalData.card[ID + 17].index -= 1
    // app.globalData.card[ID + 18].index -= 1
    // app.globalData.card[ID + 19].index -= 1
    // app.globalData.card[ID + 20].index -= 1
    // app.globalData.card[ID + 21].index -= 1
    // app.globalData.card[ID + 22].index -= 1
    // app.globalData.card[ID + 23].index -= 1
    // app.globalData.card[ID + 24].index -= 1

  },

  deleteTask:function(){
    let ID = this.data.cardID
    if(ID == (app.globalData.card.length - 1)){
      // let length = app.globalData.card.length

      app.globalData.card.pop()

      wx.navigateBack({
        
      })
    }
    else{
      wx.showToast({
        title: '先去完成最近的任务吧~',
        icon: 'none',
        duration: 2000
      })
      setTimeout(function () {
        wx.navigateBack({
          
        })
      }, 2000);
    }



    // app.globalData.card.splice(ID,1)

    // var i = ID
    // while(i<=length){
    //   console.log(app.globalData.card[i].index)
    //   i += 1
    // }

    // for (var i = ID;i <= length; i++){
    //   console.log(app.globalData.card[i][0])
    // }

    // var toBeChanged = ''

    // for (i = length;i >= ID;i--){
    //   toBeChanged = 'app.globalData.card['+Number(i-1)+'].index'
    //   toBeChanged -= 1
    // }
    // let id0 = ID
    // let id1 = ID + 1

    // app.globalData.card[id0].index -= 1
    // app.globalData.card[id1].index -= 1
    // app.globalData.card[ID + 2].index -= 1
    // app.globalData.card[ID + 3].index -= 1
    // app.globalData.card[ID + 4].index -= 1
    // app.globalData.card[ID + 5].index -= 1
    // app.globalData.card[ID + 6].index -= 1
    // app.globalData.card[ID + 7].index -= 1
    // app.globalData.card[ID + 8].index -= 1
    // app.globalData.card[ID + 9].index -= 1
    // app.globalData.card[ID + 10].index -= 1
    // app.globalData.card[ID + 11].index -= 1
    // app.globalData.card[ID + 12].index -= 1
    // app.globalData.card[ID + 13].index -= 1
    // app.globalData.card[ID + 14].index -= 1
    // app.globalData.card[ID + 15].index -= 1
    // app.globalData.card[ID + 16].index -= 1
    // app.globalData.card[ID + 17].index -= 1
    // app.globalData.card[ID + 18].index -= 1
    // app.globalData.card[ID + 19].index -= 1
    // app.globalData.card[ID + 20].index -= 1
    // app.globalData.card[ID + 21].index -= 1
    // app.globalData.card[ID + 22].index -= 1
    // app.globalData.card[ID + 23].index -= 1
    // app.globalData.card[ID + 24].index -= 1

  }
})