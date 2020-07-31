<template>
	<view class="my-bg">
		<view class="user-info">
			<view v-if="!userInfo.fuluToken">
				<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/999eaed86d9d4c39a305db4ed4f80fed.png" class="img" />
				<button type="primary" class="login-btn" @click="getUserInfo">点击登录</button>
			</view>
			<!--  #ifdef MP-WEIXIN || MP-QQ -->
			<view v-else>
				<view class="head-img">
					<open-data type="userAvatarUrl"></open-data>
				</view>
				<view class="nickName">
					<open-data type="userNickName"></open-data>
				</view>
			</view>
			<!--  #endif -->
			<!--  #ifdef MP-ALIPAY || MP-TOUTIAO -->
			<view v-else>
				<view class="head-img">
					<image :src="sysUserInfo.avatar" class="img" />
				</view>
				<view class="nickName">
					{{sysUserInfo.nickName}}
				</view>
			</view>
			<!--  #endif -->
			<!--  #ifdef MP-360 || H5  -->
			<view v-else>
				<view class="head-img">
					<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/999eaed86d9d4c39a305db4ed4f80fed.png" class="img" />
				</view>
				<view class="nickName">
					{{userInfo.fuluId}}
				</view>
			</view>
			<!--  #endif -->
		</view>
		<view class="list">
			<button class="item" @click="toUrl('orderList')">
				<image src="http://fulu-ich-oa.oss-cn-hangzhou.aliyuncs.com/b60d8b8ae5b54967a33d29e5f8336a8e.png" class="left-icon" />
				全部订单
				<image src="http://fulu-ich-oa.oss-cn-hangzhou.aliyuncs.com/2e6afe6acdd7495fb2bce3e1b466c851.png" class="right-icon" />
			</button>
			<view class="item" @click="toUrl('rechange')">
				<image src="http://fulu-ich-oa.oss-cn-hangzhou.aliyuncs.com/cfca0cb2bf1544f4a721b731b2945e7a.png" class="left-icon" />
				会员兑换
				<image src="http://fulu-ich-oa.oss-cn-hangzhou.aliyuncs.com/2e6afe6acdd7495fb2bce3e1b466c851.png" class="right-icon" />
			</view>
			<!-- <view class="item" @click="toUrl('myServer')">
				<image src="http://fulu-ich-oa.oss-cn-hangzhou.aliyuncs.com/cfca0cb2bf1544f4a721b731b2945e7a.png" class="left-icon" />
				续费服务
				<image src="http://fulu-ich-oa.oss-cn-hangzhou.aliyuncs.com/2e6afe6acdd7495fb2bce3e1b466c851.png" class="right-icon" />
			</view> -->
			<view class="item" @click="toUrl('myEquityCard')">
				<image src="http://fulu-ich-oa.oss-cn-hangzhou.aliyuncs.com/cfca0cb2bf1544f4a721b731b2945e7a.png" class="left-icon" />
				权益卡包
				<image src="http://fulu-ich-oa.oss-cn-hangzhou.aliyuncs.com/2e6afe6acdd7495fb2bce3e1b466c851.png" class="right-icon" />
			</view>
			<view class="item" @click="toUrl('service')">
				<image src="http://fulu-ich-oa.oss-cn-hangzhou.aliyuncs.com/486ff26ea7f34e249b5ab22b04f54f41.png" class="left-icon" />
				售后服务
				<image src="http://fulu-ich-oa.oss-cn-hangzhou.aliyuncs.com/2e6afe6acdd7495fb2bce3e1b466c851.png" class="right-icon" />
			</view>
			<view class="item" @click="toUrl('about')">
				<image src="http://fulu-ich-oa.oss-cn-hangzhou.aliyuncs.com/cfca0cb2bf1544f4a721b731b2945e7a.png" class="left-icon" />
				关于我们
				<image src="http://fulu-ich-oa.oss-cn-hangzhou.aliyuncs.com/2e6afe6acdd7495fb2bce3e1b466c851.png" class="right-icon" />
			</view>
		</view>
		<view class="last-gray">
			<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/502bb36b807d4d3a847f38b3c2bc64e4.png" class="logo-s" />福禄
			<view class="line">|</view>本服务由福禄开放平台提供技术支持</view>
	</view>
</template>

<script>
	import {
		toLoginFuLu
	} from '../../utils/index.js';
	export default {
		data() {
			return {
				sysUserInfo: {},
				userInfo: {}
			};
		},
		onLoad() {
			
		},
		onShow() {
			this.getInfo()
		},
		methods: {
			getInfo() {
				// 调用应用实例的方法获取全局数据
				try {
					let userInfo = uni.getStorageSync('userInfo');
					let sysUserInfo = uni.getStorageSync('sysUserInfo');
					this.userInfo = userInfo
					this.sysUserInfo = sysUserInfo
				} catch (e) {
					console.log(e)
				}
			},
			toUrl(uri) {
				if (uri === 'orderList' || uri === 'myEquityCard') {
					try {
						let userInfo = uni.getStorageSync('userInfo');
						if (userInfo) {
							this.userInfo = userInfo
							uni.navigateTo({
								url: `/pages/${uri}/${uri}`,
							});
						} else {
							// #ifdef MP-360 || H5
							uni.navigateTo({ url: `/pages/login/login?page=${uri}` });
							// #endif 
							// #ifdef MP-WEIXIN || MP-QQ || MP-ALIPAY || MP-TOUTIAO
							toLoginFuLu().then(res => {
								this.getInfo()
								uni.navigateTo({
									url: `/pages/${uri}/${uri}`,
								});
							})
							// #endif 
						}
					} catch (e) {
						console.log(e)
					}
				} else {
					uni.navigateTo({
						url: `/pages/${uri}/${uri}`
					})
				}
			},
			getUserInfo() {
				// #ifdef MP-360 || H5  
				uni.navigateTo({ url: `/pages/login/login?page=my` });
				// #endif 
				// #ifdef MP-WEIXIN || MP-QQ || MP-ALIPAY || MP-TOUTIAO
				toLoginFuLu().then(res => {
					this.getInfo()
				})
				// #endif 
			}
		}
	}
</script>

<style lang="less">
	.my-bg {
		min-height: 100vh;
		background: #f6f6f6;

		.user-info {
			width: 750rpx;
			background: #3162F5;
			position: relative;
			z-index: 2;
			color: #fff;
			text-align: center;
			padding: 0rpx 35rpx 0;
			height: 300rpx;

			.head-img,
			.img {
				width: 135rpx;
				height: 135rpx;
				background-size: 100%;
				margin: 0 auto 30rpx;
				border-radius: 50%;
			}

			.nickName {
				height: 33rpx;
				font-size: 44rpx;
				font-family: PingFangSC-Medium;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
			}

			.login-btn {
				width: 200rpx;
				height: 56rpx;
				line-height: 54rpx;
				border: 2rpx solid rgba(255, 255, 255, .6);
				font-size: 26rpx;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
				text-align: center;
				margin: 0 auto;
				background: transparent;
				border-radius: 28rpx;
			}
		}

		.list {
			width: 690rpx;
			margin: 0 auto;
			position: relative;
			top: -40rpx;
			z-index: 9;
			padding-bottom: 40rpx;

			.item {
				text-align: left;
				background: rgba(255, 255, 255, 1);
				border-radius: 4px;
				margin-bottom: 20rpx;
				padding: 35rpx 50rpx;
				box-sizing: border-box;
				font-size: 33rpx;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				line-height: 40rpx;
				height: 110rpx;
				vertical-align: middle;

				.left-icon {
					width: 40rpx;
					height: 40rpx;
					display: inline-block;
					margin-right: 20rpx;
					vertical-align: middle;
					position: relative;
					top: -3rpx;
				}

				.right-icon {
					width: 24rpx;
					height: 24rpx;
					vertical-align: middle;
					float: right;
					line-height: 40rpx;
					margin-top: 8rpx;
				}
			}
		}

		.last-gray {
			text-align: center;
			position: fixed;
			left: 0;
			width: 100%;
			bottom: 50rpx;
			height: 20rpx;
			font-size: 20rpx;
			font-weight: 400;
			color: rgba(194, 194, 194, 1);

			.line {
				display: inline;
				padding: 0 18rpx;
			}
		}
	}
</style>
