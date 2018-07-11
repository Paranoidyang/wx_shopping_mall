// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    select: 0,
    categories: [
      {
        id: 1,
        name: '推荐商品'
      },
      {
        id: 2,
        name: '生鲜食品'
      },
      {
        id: 3,
        name: '粮油/速食'
      },
      {
        id: 4,
        name: '零食酒水'
      },
      {
        id: 5,
        name: '母婴天地'
      },
      {
        id: 6,
        name: '家庭清洁'
      },
      {
        id: 7,
        name: '床上用品'
      },
      {
        id: 8,
        name: '健身器材'
      },
      {
        id: 9,
        name: '性生活'
      },
      {
        id: 10,
        name: '日本黄片'
      },
      {
        id: 11,
        name: '香港三级'
      },
      {
        id: 12,
        name: '三鲜薯条'
      },
      {
        id: 13,
        name: '家用电器'
      },
      {
        id: 14,
        name: '手机数码'
      },
      {
        id: 15,
        name: '吃喝拉撒'
      },
      {
        id: 16,
        name: '名家名作'
      },
      {
        id: 17,
        name: '枪支弹药'
      }
    ],
    goodsList: [
      {
        id: 1,
        title: "富丽加钙牛奶薏米饼干富丽加钙牛奶薏米饼干富丽加钙牛奶薏米饼干 300g",
        image: "http://img.dmall.com/20160930/3f47a2eb-efc2-474f-be7d-af7d4d5955f6_360x360H",
        price: 8.80
      },
      {
        id: 2,
        title: "卡夫乐之薄片饼干 原味 400g",
        image: "http://img.dmall.com/20161213/53aaae54-51de-49c0-8212-e1b4268f112d_360x360H",
        price: 18.80
      },
      {
        id: 2,
        title: "[次日达] 特鲜炼奶饼干 芝士味 600g",
        image: "http://img.dmall.com/20160930/13dd6624-9dd8-4b98-bfaf-cbde21e8e9ae_360x360H",
        price: 6.80
      },
      {
        id: 2,
        title: "卡夫乐之薄片饼干 原味 400g",
        image: "http://img.dmall.com/20161213/53aaae54-51de-49c0-8212-e1b4268f112d_360x360H",
        price: 8.80
      },
      {
        id: 2,
        title: "卡夫乐之薄片饼干 原味 400g",
        image: "http://img.dmall.com/20161213/53aaae54-51de-49c0-8212-e1b4268f112d_360x360H",
        price: 8.80
      },
      {
        id: 2,
        title: "[次日达] 特鲜炼奶饼干 芝士味 600g",
        image: "http://img.dmall.com/20160930/13dd6624-9dd8-4b98-bfaf-cbde21e8e9ae_360x360H",
        price: 8.80
      },
      {
        id: 2,
        title: "卡夫乐之薄片饼干 原味 400g",
        image: "http://img.dmall.com/20161213/53aaae54-51de-49c0-8212-e1b4268f112d_360x360H",
        price: 8.80
      },
      {
        id: 2,
        title: "[次日达] 特鲜炼奶饼干 芝士味 600g",
        image: "http://img.dmall.com/20160930/13dd6624-9dd8-4b98-bfaf-cbde21e8e9ae_360x360H",
        price: 8.80
      },
      {
        id: 2,
        title: "卡夫乐之薄片饼干 原味 400g",
        image: "http://img.dmall.com/20161213/53aaae54-51de-49c0-8212-e1b4268f112d_360x360H",
        price: 8.80
      },
      {
        id: 2,
        title: "[次日达] 特鲜炼奶饼干 芝士味 600g",
        image: "http://img.dmall.com/20160930/13dd6624-9dd8-4b98-bfaf-cbde21e8e9ae_360x360H",
        price: 8.80
      }
    ]
  },
  /**
   * 选择商品类型
   */ 
  categoryClick: function(event) {
    this.setData({
      select: event.target.id -1
    })
    // 更新接口
  },

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