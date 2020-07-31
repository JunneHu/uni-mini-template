<template>
	<view class="ios-hide">
		<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/5ae16e1870af4ed0b118aa421fef3e45.png" />
		<view class="txt">由于相关规范，苹果手机用户不支持购买</view>
		<view class="h4">
			<icon type="warn" color="#828282" size="10" />安卓手机可正常购买</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">
	.ios-hide {
		width: 750rpx;
		height: 100vh;

		image {
			width: 340rpx;
			height: 184rpx;
			display: block;
			background-size: 100%;
			margin: 102rpx auto 32rpx;
		}

		.txt {
			width: 750rpx;
			text-align: center;
			color: #828282;
			line-height: 34rpx;
			font-size: 24rpx;
		}

		.h4 {
			width: 750rpx;
			text-align: center;
			color: #828282;
			line-height: 40rpx;
			font-size: 22rpx;
			margin-top: 20rpx;

			icon {
				margin-right: 8rpx;
				position: relative;
				top: 2rpx;
			}
		}
	}
</style>
