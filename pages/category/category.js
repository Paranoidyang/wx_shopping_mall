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
        name: '八度空间'
      },
      {
        id: 10,
        name: '开不了口'
      },
      {
        id: 11,
        name: '等你下课'
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
        name: '以父之名'
      },
      {
        id: 16,
        name: '名家名作'
      },
      {
        id: 17,
        name: '七里香'
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
      select: event.target.id - 1
    })
    // toast提示
    wx.showToast({
      title: event.target.id,
    })
    // 更新接口
  }
})