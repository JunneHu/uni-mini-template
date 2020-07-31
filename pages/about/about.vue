<template>
	<view class="my-bg">
		<view class="user-info">
			<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/1aa43a6c898148c2950b954d11f29d96.png" class="img" />
			<view class="nickName">武汉福禄网络科技有限公司</view>
		</view>
		<view class="list">
			<view class="item">
				<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/941052db005b4d6b95b4b249d09e1430.png" class="left-icon" />福禄官网：http://open.fulu.com
			</view>
			<view class="item">
				<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/eea7a348bfd9450ab5fdac6ee03128bc.png" class="left-icon" />联系电话：400-001-2806
			</view>
			<view class="item">
				<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/9d9e93877580426287e6fa05cfd014be.png" class="left-icon" />合作邮箱：marketing@fulu.com
			</view>
			<view class="item">
				<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/25386a3b9e7d4b16abf672f7a5664cc8.png" class="left-icon" />公司地址：武汉市光谷金融港B2栋2层
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
	.my-bg {
		min-height: 100vh;
		background: #f6f6f6;

		.user-info {
			box-sizing: border-box;
			width: 750rpx;
			background: #3162F5;
			color: #fff;
			text-align: center;
			padding: 0rpx 35rpx 0;
			height: 300rpx;

			.img {
				width: 135rpx;
				height: 135rpx;
				border-radius: 50%;
				border: 2rpx solid #fff;
				margin-bottom: 30rpx;
			}

			.nickName {
				height: 33rpx;
				font-size: 30rpx;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
			}
		}

		.list {
			position: relative;
			top:-40rpx;
			z-index: 9;
			width: 690rpx;
			padding: 0 35rpx;
			border-radius: 20rpx;
			height: 500rpx;
			background: rgba(255, 255, 255, 1);
			margin: 0  auto;
			.item {
				text-align: left;
				height: 117rpx;
				padding: 40rpx 8rpx;
				box-sizing: border-box;
				font-size: 26rpx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				line-height: 40rpx;
				vertical-align: middle;
				border-bottom: 2rpx solid #f0f0f0;

				&:last-child {
					border-bottom: none;
				}

				.left-icon {
					width: 40rpx;
					height: 40rpx;
					display: inline-block;
					margin-right: 20rpx;
					vertical-align: middle;
					position: relative;
					top: -3rpx;
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
			margin: 20rpx auto;
			text-align: center;
			.line {
				display: inline;
				padding: 0 18rpx;
			}
		}
	}
</style>
