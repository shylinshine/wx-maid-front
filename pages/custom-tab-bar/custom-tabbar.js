// custom-tab-bar/index.js
Component({
  data: {
    active:0,
    list:[{
      text:"首页",
      icon:"home-o",
      url:"/pages/index/index"
    },
    {
      text:"日志",
      icon:"search",
      url:"/pages/logs/logs"
    },
  ]
  },
  methods: {
    onChange:function(e){
      var i = e.detail;
      wx.switchTab({
        url: this.data.list[i].url,
      })
      this.setData({
        active : i
      })
    }
  }
})
