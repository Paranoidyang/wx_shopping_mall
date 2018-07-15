Page({
  data: {
    select: 1,//tab默认选中第一个
    slides: [
      "//img12.360buyimg.com/babel/s340x420_jfs/t20371/32/1913614468/53754/b55c71b2/5b3c4049N3ceedd04.jpg!q90!cc_340x420",
      "//img12.360buyimg.com/babel/s340x420_jfs/t21397/84/1924713889/108707/a87570bf/5b3ec5bbNcec385d6.jpg!q90!cc_340x420",
      "//img14.360buyimg.com/babel/s340x420_jfs/t21880/97/1771609351/101047/ebdd4882/5b336aa6Nf24d6674.jpg!q90!cc_340x420"
    ],
    tabs: [
      {
        id: 1,
        name: "评论"
      },
      {
        id: 2,
        name: "推荐"
      },
      {
        id: 3,
        name: "详情"
      }
   ],
    commentList: [
      {
        id: 1,
        avatar: "//img12.360buyimg.com/babel/s340x420_jfs/t20371/32/1913614468/53754/b55c71b2/5b3c4049N3ceedd04.jpg!q90!cc_340x420",
        nickname: "詹姆斯",
        comment: "刚送到就迫不及待地打开试了下，外观挺漂亮的，吹出的风比较温和，今天的室内温度有30度，加上水用着还行，不知再热点加冰效果如何。整体来说还行，用一段时间再点评。"
      },
      {
        id: 2,
        avatar: "//img12.360buyimg.com/babel/s340x420_jfs/t20371/32/1913614468/53754/b55c71b2/5b3c4049N3ceedd04.jpg!q90!cc_340x420",
        nickname: "詹姆斯",
        comment: "刚送到就迫不及待地打开试了下，外观挺漂亮的，吹出的风比较温和，今天的室内温度有30度，加上水用着还行，不知再热点加冰效果如何。整体来说还行，用一段时间再点评。"
      },
      {
        id: 2,
        avatar: "//img12.360buyimg.com/babel/s340x420_jfs/t20371/32/1913614468/53754/b55c71b2/5b3c4049N3ceedd04.jpg!q90!cc_340x420",
        nickname: "詹姆斯",
        comment: "刚送到就迫不及待地打开试了下，外观挺漂亮的，吹出的风比较温和，今天的室内温度有30度，加上水用着还行，不知再热点加冰效果如何。整体来说还行，用一段时间再点评。"
      },
      {
        id: 2,
        avatar: "//img12.360buyimg.com/babel/s340x420_jfs/t20371/32/1913614468/53754/b55c71b2/5b3c4049N3ceedd04.jpg!q90!cc_340x420",
        nickname: "詹姆斯",
        comment: "刚送到就迫不及待地打开试了下，外观挺漂亮的，吹出的风比较温和，今天的室内温度有30度，加上水用着还行，不知再热点加冰效果如何。整体来说还行，用一段时间再点评。"
      }
    ]
  },
  /*返回上一页*/
  goBack: function() {
    console.log('哈哈')
    wx.navigateBack()
  },
  /*点击tab切换*/
  selectTab: function (event) {
    this.setData({
      select: event.currentTarget.id
    })
  }
})