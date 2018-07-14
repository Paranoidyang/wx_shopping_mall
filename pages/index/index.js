//index.js

Page({
  data: {
    slides: [
      "https://img1.360buyimg.com/da/s750x366_jfs/t24163/29/833026140/92109/1a7ce0b9/5b444e17Na4a33488.jpg!cr_1125x549_0_72.dpg",
      "http://img.dmall.com/mIndex/201612/f8d1c169-1229-4121-8b39-b997d4cef239_750H",
      "http://img.dmall.com/mIndex/201611/8412c37b-754b-4e1e-8e2c-cb8653cd4d0b_750H"
    ],
    bargainList: [
      {
        title: "联想(Lenovo)小新潮7000 14英寸轻薄笔记本电脑(英特尔八代酷睿I5-8250U 8G 2T+128G R535 office2016)银",
        img: "//img13.360buyimg.com/n1/s450x450_jfs/t24586/261/677406755/248143/9643c7f3/5b3c3822Nea8f73e4.jpg",
        desc: "英特尔八代酷睿",
        basePrice: "3999",
        originalPrice: "48888",
        limit: "18"
      },
      {
        title: "印尼进口 Nabati 丽芝士（Richeese）休闲零食 奶酪味 威化饼干 460g/盒 早餐下午茶",
        img: "//img13.360buyimg.com/n1/jfs/t17941/226/2669737138/420972/35402273/5b062750N2e8adbff.jpg",
        desc: "好吃不贵，休闲零食 奶酪味",
        basePrice: "3999",
        originalPrice: "48888",
        limit: "18"
      },
      {
        title: "风靡ins的伦敦腕",
        img: "//img13.360buyimg.com/n1/jfs/t20062/238/2403877143/153179/a734465b/5b46bb72Nab9a6ea7.jpg",
        desc: "英特尔八代酷睿男士手表",
        basePrice: "3999",
        originalPrice: "48888",
        limit: "18"
      },
      {
        title: "京觅 新疆库尔勒香梨 一级中果 总重约2kg 新鲜水果",
        img: "//img12.360buyimg.com/mobilecms/s500x500_jfs/t17515/256/1947534381/244203/f54cd223/5adef415Nf7a0a895.jpg",
        desc: "来自新疆塔克拉玛干沙漠的原汁原味",
        basePrice: "3999",
        originalPrice: "48888",
        limit: "18"
      }
    ],
    topicList: [
      {
        img: "//img20.360buyimg.com/mobilecms/s700x256_jfs/t7393/171/765889073/61915/936cc270/5996e7eaNa22d72b4.jpg!q90!cc_350x128.webp",
        title: "智能家具",
        subTitle: "带给你不一样的体验",
        price: "6879"
      },
      {
        img: "//img11.360buyimg.com/mobilecms/s700x256_jfs/t20539/229/82605291/66559/df347eb5/5af96a18N9451b1a1.jpg!q90!cc_350x128.webp",
        title: "美食佳肴",
        subTitle: "舌尖上的非凡感觉",
        price: "388"
      },
      {
        img: "//img20.360buyimg.com/mobilecms/s700x256_jfs/t7393/171/765889073/61915/936cc270/5996e7eaNa22d72b4.jpg!q90!cc_350x128.webp",
        title: "智能家具",
        subTitle: "带给你不一样的体验",
        price: "6879"
      }
    ]

  },
  goDetail: function (event) {
    console.log(event)
    wx.navigateTo({
      url: './goodsDetail/goodsDetail'
    })
  }
})