<view class="home-bg"><image src="{{equityCardInfo.kmPath}}" mode="widthFix"></image><view class="advantage"><text>正品保证</text><text>专享折扣</text><text>急速到账</text><text>售后无忧</text></view><block qq:for="{{equityCardInfo.categoryListCache}}" qq:for-item="item" qq:for-index="index" qq:key="id"><block qq:if="{{equityCardInfo.categoryListCache&&equityCardInfo.categoryListCache[0]}}"><image mode="widthFix" src="{{item.categoryImage}}"></image></block></block><image src="{{equityCardInfo.propagatePath}}" mode="widthFix"></image><view class="buy-area"><view class="pro-btn-bg"><view class="price-bg">限时特惠<text class="price">{{"¥"+equityCardInfo.salesPrice}}</text><text class="small">{{"商品总价值 ¥"+equityCardInfo.sumFaceValue}}</text></view><button data-event-opts="{{[['tap',[['toBuy',['$event']]]]]}}" class="buy-btn" bindtap="__e">立即抢购</button></view></view><block qq:if="{{showPro}}"><view class="pro-bg"><view data-event-opts="{{[['tap',[['closePro',['$event']]]]]}}" class="close-icon" bindtap="__e"></view><block qq:for="{{equityCardInfo.categoryListCache}}" qq:for-item="item" qq:for-index="index" qq:key="id"><block qq:if="{{equityCardInfo&&equityCardInfo.categoryListCache&&equityCardInfo.categoryListCache[0]}}"><view><view class="title">{{item.cardCategoryName+(item.productListCache.length==1?'':'（'+item.ruleDescribe+'）')}}</view><view class="con"><block qq:for="{{item.productListCache}}" qq:for-item="v" qq:for-index="i" qq:key="id"><view class="{{[v.active?'item active':'item']}}" data-tab1="{{index}}" data-tab2="{{i}}" data-event-opts="{{[['tap',[['chosePro',['$event']]]]]}}" bindtap="__e">{{v.proTitle}}</view></block></view></view></block></block><view class="p-foot"><view class="price-bg">限时特惠<text class="price">{{"¥"+equityCardInfo.salesPrice}}</text><text class="small">{{"商品总价值 ¥"+equityCardInfo.sumFaceValue}}</text></view><button data-event-opts="{{[['tap',[['toPay',['$event']]]]]}}" class="buy-btn" bindtap="__e">立即付款</button></view></view></block><view data-event-opts="{{[['tap',[['toMyCard',['$event']]]]]}}" class="my-btn" bindtap="__e">我的卡包</view></view>