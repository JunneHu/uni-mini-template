<view class="card-status"><view class="info"><block qq:if="{{detail.payStatus==3}}"><view class="name"><view class="icon fail _i"></view>交易失败</view></block><block qq:if="{{detail.payStatus==2}}"><view class="name"><view class="icon _i"></view>支付成功</view></block><block qq:if="{{detail.payStatus==1}}"><view class="name"><view class="icon fail _i"></view>未支付</view></block><block qq:if="{{detail.payStatus==1}}"><view class="tips">{{"即将跳转兑换页面 "+sendCodeTime+"s"}}</view></block><view class="item">{{detail.merEquityCardName}}<text>{{"¥"+detail.salesPrice}}</text></view><view class="item">用户ID<text>{{userInfo&&userInfo.fuluId}}</text></view><view class="item">下单时间<text>{{detail.orderTime}}</text></view><view class="item">购买数量<text>1</text></view><view class="item">服务商家<text>福禄网络科技有限公司</text></view></view><block qq:if="{{detail.payStatus==1}}"><button data-event-opts="{{[['tap',[['toBuy',['$event']]]]]}}" class="pay-btn" bindtap="__e">再次购买</button></block></view>