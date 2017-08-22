//index.js
var util = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命    dddd周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      shopsList: util.shopsList
    })
    // console.log(this.data)
  },
  openShopDetail:function(ev){
    // console.log(ev)
    var index = ev.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../shopdetail/shopdetail?id=' + index
    })
  }

})