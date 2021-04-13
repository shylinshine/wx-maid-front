// pages/quho/quhuo.js
Page({

  /**
   * 页面的初始数据
   */
  // 
  
  // data: {
    // assetList: [
      // { id: 1, assetName: '图书', num: 16, unit: '本', worth: 1.00, sltNum:0 },
      // { id: 2, assetName: '电脑', num: 10, unit: '台', worth: 1.00, sltNum: 0 }
      // ],
  // },

  data: {
    show: false,
  },

  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },


  // dec(){
  //   let num=this.data.num
  //   console.log(num)
  //   this.setData({
  //     [num]:12
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})