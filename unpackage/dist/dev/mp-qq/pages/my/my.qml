<view class="my-bg"><view class="user-info"><block qq:if="{{!userInfo.fuluToken}}"><view><image class="img" src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/999eaed86d9d4c39a305db4ed4f80fed.png"></image><button class="login-btn" type="primary" data-event-opts="{{[['tap',[['getUserInfo',['$event']]]]]}}" bindtap="__e">点击登录</button></view></block><block qq:else><view><view class="head-img"><open-data type="userAvatarUrl"></open-data></view><view class="nickName"><open-data type="userNickName"></open-data></view></view></block></view><view class="list"><button data-event-opts="{{[['tap',[['toUrl',['orderList']]]]]}}" class="item" bindtap="__e"><image class="left-icon" src="http://fulu-ich-oa.oss-cn-hangzhou.aliyuncs.com/b60d8b8ae5b54967a33d29e5f8336a8e.png"></image>全部订单<image class="right-icon" src="http://fulu-ich-oa.oss-cn-hangzhou.aliyuncs.com/2e6afe6acdd7495fb2bce3e1b466c851.png"></image></button><view data-event-opts="{{[['tap',[['toUrl',['myEquityCard']]]]]}}" class="item" bindtap="__e"><image class="left-icon" src="http://fulu-ich-oa.oss-cn-hangzhou.aliyuncs.com/cfca0cb2bf1544f4a721b731b2945e7a.png"></image>权益卡包<image class="right-icon" src="http://fulu-ich-oa.oss-cn-hangzhou.aliyuncs.com/2e6afe6acdd7495fb2bce3e1b466c851.png"></image></view><view data-event-opts="{{[['tap',[['toUrl',['service']]]]]}}" class="item" bindtap="__e"><image class="left-icon" src="http://fulu-ich-oa.oss-cn-hangzhou.aliyuncs.com/486ff26ea7f34e249b5ab22b04f54f41.png"></image>售后服务<image class="right-icon" src="http://fulu-ich-oa.oss-cn-hangzhou.aliyuncs.com/2e6afe6acdd7495fb2bce3e1b466c851.png"></image></view><view data-event-opts="{{[['tap',[['toUrl',['about']]]]]}}" class="item" bindtap="__e"><image class="left-icon" src="http://fulu-ich-oa.oss-cn-hangzhou.aliyuncs.com/cfca0cb2bf1544f4a721b731b2945e7a.png"></image>关于我们<image class="right-icon" src="http://fulu-ich-oa.oss-cn-hangzhou.aliyuncs.com/2e6afe6acdd7495fb2bce3e1b466c851.png"></image></view></view><view class="last-gray"><image class="logo-s" src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/502bb36b807d4d3a847f38b3c2bc64e4.png"></image>福禄<view class="line">|</view>本服务由福禄开放平台提供技术支持</view></view>