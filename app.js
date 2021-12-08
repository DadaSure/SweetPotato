//app.js

App({
  onLaunch: function () {
    // 展示本地存储能力
    // var logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // var localData = this.globalData
    // wx.setStorageSync('localData', localData)

    // var getLocalData = wx.getStorageSync(localData)
    // this.setData({
    //   globalData: getLocalData
    // })

    // var dataCard = wx.getStorageSync('card')
    // var dataCompletedTasks = wx.getStorageSync('completedTasks')
    // var dataConsumedItems = wx.getStorageSync('consumedItems')
    // var dataSweetpotatoValue = wx.getStorageSync('sweetpotatoValue')

    // var dataGlobalData = wx.getStorageSync('globalData')
    // this.globalData = dataGlobalData //从本地存储中获取全局数据

    this.globalData.card = wx.getStorageSync('card') || [
      {
        index: 0,
        title: "点击右上方加号新建任务",
        desription: "在我的页面右上角进入关于页面",
        time: "不要想放弃哦",
        value: "0"
      },
      {
        index: 1,
        title: "点击任务卡片以进入详情页面",
        desription: "点击下方的完成任务来确认完成",
        time: "这里是时间🌞",
        value: "0"
      },
      {
        index: 2,
        title: "在地瓜烧页面可以使用地瓜烧",
        description: "在我的页面可以观看记录",
        time: "奖励的地瓜烧👉",
        value: "0"
      },
      {
        index: 3,
        title: "从最早创建的任务开始做哦",
        descriprion: "克服拖延症",
        time: "最下面的👇",
        value: "0"
      },
      {
        index: 4,
        title: "完成每一个提示卡片吧",
        description: "健康生活从每一步做起",
        time: "送你十个👉",
        value: "10"
      },

    ]
    this.globalData.completedTasks = wx.getStorageSync('completedTasks') || []
    this.globalData.consumedItems = wx.getStorageSync('consumedItems') || []
    this.globalData.sweetpotatoValue = wx.getStorageSync('sweetpotatoValue') || 0
    this.globalData.userInfo = wx.getStorageSync('userInfo')
    //从本地存储读取数据，存入全局数据

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   }
    // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
    userInfo: null,
    // index:4,
    // card:{
    //   1:{
    //     title:"看完AdobeXD入门课程前三节",
    //     time:"14:00-16:00",
    //     value:"30"
    //   },
    //   2:{
    //     title: "画好小程序设计图",
    //     time: "19:00-22:00",
    //     value: "50"
    //   },
    //   3:{
    //     title: "写完今天的代码",
    //     time: "22:00-23:00",
    //     value: "10"
    //   }
    // }
    sweetpotatoValue:100,

    card: [
      {
        index: 0,
        title: "看完AdobeXD入门课程前三节",
        time: "14:00-16:00",
        value: "30"
      },
      { 
        index: 1,
        title: "画好小程序设计图",
        time: "19:00-22:00",
        value: "50"
      },
      {
        index: 2,
        title: "写完今天的代码",
        time: "22:00-23:00",
        value: "10"
      },
      {
        index: 3,
        title: "研究小程序的卡片展示逻辑",
        time: "10:00-12:00",
        value: "30"
      }
    ],

    // consumeItems: [
    //   {
    //     index: 0,
    //     title: "去吃一碗泡面吧",
    //     description: "红烧牛肉面",
    //     value: "30"        
    //   }


    // ],

    completedTasks:[
      {
        index: 0,
        title: "test",
        time: "14:00-16:00",
        value: "30"
      }

    ],

    consumedItems:[

    ]
  }
})