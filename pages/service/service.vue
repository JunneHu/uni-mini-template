<template>
	<view class="server-bg">
		<view class="user-info">
			<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/999eaed86d9d4c39a305db4ed4f80fed.png" />
			<view class="nickName">售后服务</view>
			<view class="small">7*24小时为您服务</view>
		</view>
		<view class="server-list">
			<view class="item">
				<view class="h2">售后电话</view>
				<view class="h4">400-001-2806</view>
			</view>
		</view>
		<view class="last-gray">
			<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/502bb36b807d4d3a847f38b3c2bc64e4.png" class="logo-s" />福禄
			<view class="line">|</view>本服务由福禄开放平台提供技术支持</view>
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
	.server-bg {
		min-height: 100vh;
		background: #f6f6f6;
		
		.user-info {
			box-sizing: border-box;
			width: 750rpx;
			background: #3162f5;
			color: #fff;
			text-align: center;
			padding: 0rpx 35rpx 0;
			height: 300rpx;
			margin-bottom: 30rpx;

			image {
				width: 135rpx;
				height: 135rpx;
				border: 3rpx solid #fff;
				background-size: 100%;
				margin: 0 auto 20rpx;
				border-radius: 50%;
			}

			.nickName {
				height: 33rpx;
				font-size: 44rpx;
				color: rgba(255, 255, 255, 1);
				margin-bottom: 50rpx;
			}

			.small {
				font-size: 24rpx;
			}
		}

		.server-list {
			.item {
				width: 690rpx;
				background: #fff;
				border-radius: 10rpx;
				margin: 0 auto;
				padding: 30rpx 40rpx;

				.h2 {
					font-size: 36rpx;
					color: #333;
					margin-bottom: 20rpx;
				}

				.h4 {
					font-size: 24rpx;
					color: #666;
				}
			}
		}

		.last-gray {
			position: fixed;
			left: 0;
			width: 100%;
			bottom: 50rpx;
			height: 20rpx;
			font-size: 20rpx;
			font-weight: 400;
			color: rgba(194, 194, 194, 1);
			text-align: center;

			.line {
				display: inline;
				padding: 0 18rpx;
			}
		}
	}
</style>
