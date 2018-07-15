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
        id: 3,
        title: "[次日达] 特鲜炼奶饼干 芝士味 600g",
        image: "http://img.dmall.com/20160930/13dd6624-9dd8-4b98-bfaf-cbde21e8e9ae_360x360H",
        price: 6.80
      },
      {
        id: 4,
        title: "卡夫乐之薄片饼干 原味 400g",
        image: "http://img.dmall.com/20161213/53aaae54-51de-49c0-8212-e1b4268f112d_360x360H",
        price: 8.80
      },
      {
        id: 5,
        title: "卡夫乐之薄片饼干 原味 400g",
        image: "http://img.dmall.com/20161213/53aaae54-51de-49c0-8212-e1b4268f112d_360x360H",
        price: 8.80
      },
      {
        id: 6,
        title: "[次日达] 特鲜炼奶饼干 芝士味 600g",
        image: "http://img.dmall.com/20160930/13dd6624-9dd8-4b98-bfaf-cbde21e8e9ae_360x360H",
        price: 8.80
      },
      {
        id: 7,
        title: "卡夫乐之薄片饼干 原味 400g",
        image: "http://img.dmall.com/20161213/53aaae54-51de-49c0-8212-e1b4268f112d_360x360H",
        price: 8.80
      },
      {
        id: 8,
        title: "[次日达] 特鲜炼奶饼干 芝士味 600g",
        image: "http://img.dmall.com/20160930/13dd6624-9dd8-4b98-bfaf-cbde21e8e9ae_360x360H",
        price: 8.80
      },
      {
        id: 9,
        title: "卡夫乐之薄片饼干 原味 400g",
        image: "http://img.dmall.com/20161213/53aaae54-51de-49c0-8212-e1b4268f112d_360x360H",
        price: 8.80
      },
      {
        id: 10,
        title: "[次日达] 特鲜炼奶饼干 芝士味 600g",
        image: "http://img.dmall.com/20160930/13dd6624-9dd8-4b98-bfaf-cbde21e8e9ae_360x360H",
        price: 8.80
      }
    ],
    imageWidth: "",
    imageHeight: "",
    imageX: "",
    imageY: "",
    wxAppendData: [],
    imageUrl: '',
    btnId: '',
    showImage: false,
    imageStyle: ''

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
  },
  /**
   * 加入购物车
   */
  addToCart: function (event) {
    // toast提示
    wx.showToast({
      title: '加入成功！',
    })
    // console.log(event.target.id)
    // console.log(event.target.id.split(','))
    // this.setData({
    //   showImage: true,
    //   imageUrl: event.target.id.split(',')[0],
    //   btnId: event.target.id.split(',')[1]
    // })
    // console.log('imageUrl', this.data.imageUrl)
    // var _this=this;
    // /*创建节点选择器*/
    // var query = wx.createSelectorQuery();
    // /*选择id*/
    // query.select('#goods-image-' + this.data.btnId).boundingClientRect()
    // query.exec(function (res) {
    //   /*res就是该元素的信息数组*/
    //   console.log(res);
    //   /*获取节点信息*/
    //   _this.setData({
    //     imageWidth: res[0].width,
    //     imageHeight: res[0].height,
    //     imageX: res[0].left,
    //     imageY: res[0].top,
    //     imageStyle: 'width:'+res[0].width + "px;" +
    //                 'height:' + res[0].height + 'px;' +
    //                 'position: fixed;' +
    //                 'z-index: 100;' +
    //                 'left: ' + res[0].left + 'px;' +
    //                 'top: ' + res[0].top + 'px;' +
    //                 'animation: drop 5s ease .5s;' +
    //       '@-webkit-keyframes drop {\n' +
    //     '  0% {\n' +
    //     '    width: 60px;\n' +
    //     '    height: 60px;\n' +
    //     '  }\n' +
    //     '  100% {\n' +
    //     '    width: 1.15rem;\n' +
    //     '    height: 1.15rem;\n' +
    //     '    left: 200px;\n' +
    //     '    top: 700px;\n' +
    //     '    border-radius: 50%;\n' +
    //     '    -webkit-transform: rotate(180deg);\n' +
    //     '    -moz-transform: rotate(180deg);\n' +
    //     '    -o-transform: rotate(180deg);\n' +
    //     '    -ms-transform: rotate(180deg);\n' +
    //     '  }\n' +
    //     '}'
    //
    //   })
    //   console.log('取坐标X', _this.data.imageX);
    //   console.log('取坐标Y', _this.data.imageY);
    //   /*动态渲染商品图片，用以动画效果*/
    //   setTimeout(function () {
    //     _this.setData({
    //       showImage: false
    //     })
    //   }, 3000)
    // })
  }
})