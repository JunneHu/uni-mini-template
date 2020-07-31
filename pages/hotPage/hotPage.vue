<template>
	<view class="hot-bg">
		<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/cca4d47f1d14452cab56041b9f89a46b.png" class="hot-img" />
		<view class="h2">活动火爆</view>
		<view class="h5">请您稍后尝试</view>
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
	.hot-bg {
		height: 100vh;
		width: 750rpx;
		background: #fff;
		text-align: center;

		.hot-img {
			width: 235rpx;
			height: 214rpx;
			background-size: 100%;
			margin: 269rpx auto 52rpx;
		}

		.h2 {
			height: 37rpx;
			font-size: 40rpx;
			line-height: 40rpx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
			margin-bottom: 39rpx;
		}

		.h5 {
			height: 27rpx;
			font-size: 28rpx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(153, 153, 153, 1);
			line-height: 38rpx;
		}
	}
</style>
