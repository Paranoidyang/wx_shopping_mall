# wx_shopping_mall
### 前言
之前公司一直都用vue做项目，最近换了一家做小程序的，便利用这几天好好恶补了一下，发现小程序与vue真是极其相似，都是数据驱动、组件化开发，也定义了一下类似v-if、v-for之类的指令，感觉做过vue的简直可以无缝切换到小程序开发。
### 界面
这几天就捣鼓了一个商城小程序（copy了好几个商城的UI），利用原生组件写了几个页面，也碰到了一些痛点，算是为新工作热热身吧。几个简单的界面如下：


<img src="https://github.com/Paranoidyang/wx_shopping_mall/blob/master/screenshots/home.jpg" width="40%" height="40%">

商品详情页：

<img src="https://github.com/Paranoidyang/wx_shopping_mall/blob/master/screenshots/goods_detail.jpg" width="40%" height="40%">

分类：

<img src="https://github.com/Paranoidyang/wx_shopping_mall/blob/master/screenshots/category.jpg" width="40%" height="40%">

购物车：

<img src="https://github.com/Paranoidyang/wx_shopping_mall/blob/master/screenshots/cart.jpg" width="40%" height="40%">

个人中心：

<img src="https://github.com/Paranoidyang/wx_shopping_mall/blob/master/screenshots/member.png" width="40%" height="40%">
### 痛点
原生的方式不能用sass。因为用vue习惯了用sass写样式，但小程序不能直接使用sass等预处理器，不过好像用了mpvue、wepy等框架可以实现用css预处理器（还未尝试过，试过了再更新）。
去掉标题栏必须全局统一去掉。本来以为在页面的json文件里可以覆盖，结果发现并不起作用，所以统一去掉之后，如果你在某些页面又需要标题栏只能自己用view模拟一个（如我这里的商品详情页），希望以后官方可以人性化一点。
"navigationStyle": "custom" //只在app.json中生效
3. movable-view貌似有bug。在商城首页的精选专题中我尝试了用 movable-view实现横向滚动效果，后来发现，整个页面也会随之滚动，在微信小程序社区里也有人遇到这个问题，不过没人回答，不知道是自己的问题还是官方的bug，后来就改用scroll-view实现了。
<img src="https://github.com/Paranoidyang/wx_shopping_mall/blob/master/screenshots/scroll_topic.png" width="40%" height="40%">

4. 无tab切换组件（如下所示）。虽说tarbar把position设置为top是一个tab，但这种必须在最顶部，如果要在中间某个内容区使用就只能自己实现了。
tab示例1：
<img src="https://github.com/Paranoidyang/wx_shopping_mall/blob/master/screenshots/tab1.png" width="40%" height="40%">
tab示例2：
<img src="https://github.com/Paranoidyang/wx_shopping_mall/blob/master/screenshots/tab2.png" width="40%" height="40%">

5. 无法动态增加、删除节点。本来想实现一个加入购物车的动画，比如点击了加入按钮，商品图片会掉下来，慢慢变成一个圆形，落在tarbar的购物车上。结果发现不能直接删减节点，并且tabBar的位置好像也无法获取到，在开发者工具中发现其并没有渲染出来（希望知道的小伙伴告知一下，先谢谢了）。
### 后言
这个小项目会持续更新，我会让它更加完善，一些样式和组件的抽离、请求的封装等在后续会加上去。暂时就先这样吧，以后有遇到问题再补充，希望明天入职愉快。
刚接触小程序还没几天，有点瑟瑟发抖，有不对的地方还望小伙伴指正，共同成长。






