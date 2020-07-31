<template>
	<view class="my-bg">
		<view class="user-info">
			<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/999eaed86d9d4c39a305db4ed4f80fed.png" class="img" />
			<view class="h1">用户登录</view>
		</view>
		<form @submit="submit" class="login-bg">
			<view class="page-section">
				<input name="mobile" placeholder="输入11位手机号码" class="se-input" @input="changeMobile" />
			</view>
			<view class="page-section">
				<input name="code" placeholder="输入验证码" class="se-input code-input" />
				<view class="code-btn" v-if="countNum>1">重新获取({{countNum}}s)</view>
				<view class="code-btn" @click="getCode" v-else>获取验证码</view>
			</view>
			<button form-type="submit" class="login-btn">登录</button>
		</form>
		<view class="last-gray">
			<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/502bb36b807d4d3a847f38b3c2bc64e4.png" class="logo-s" />福禄
			<view class="line">|</view>本服务由福禄开放平台提供技术支持</view>
	</view>
</template>

<script>
	import config from '../../config/index';
	import {
		httpsRequest
	} from '../../utils/index';
	const RegTel = /^1(3|4|5|6|7|8|9)\d{9}$/;
	let xInteval = null;
	export default {
		data() {
			return {
				countNum: 0,
			};
		},
		onLoad(option) {
			this.page = option.page
		},
		methods: {
			changeMobile(e) {
				this.mobile = e.detail.value
			},
			getCode() {
				const {
					mobile
				} = this
				if (!RegTel.test(mobile)) {
					return uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号码！',
					});
				}
				httpsRequest(config.api.verificationcode, 'POST', {
					mobile: mobile.replace(/\s/g, ''),
					loginKey: 'login'
				}, (data) => {
					if (data.code === '1000') {
						uni.showToast({
							icon: 'none',
							title: `验证码已发送至${mobile}`,
						});
						this.settime(60)
					}
				}, false);
			},
			settime(time) {
				this.countNum = time
				this.clearDetailTimeInterval();
				let that = this;
				xInteval = setInterval(function() {
					let {
						countNum
					} = that;
					countNum -= 1;
					if (countNum === 0) {
						that.clearDetailTimeInterval();
					}
					if (countNum > 0) {
						that.countNum = countNum
					}
				}, 1000);
			},
			clearDetailTimeInterval() {
				if (xInteval) {
					clearInterval(xInteval)
					xInteval = null;
				}
			},
			submit(e) {
				const val = e.detail.value;
				if (!RegTel.test(val.mobile)) {
					return uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号码！',
					});
				}
				if (val.code.length !== 4) {
					return uni.showToast({
						icon: 'none',
						title: '请输入正确的验证码！',
					});
				}
				httpsRequest(config.api.touristlogincode, 'POST', {
					mobile: val.mobile.replace(/\s/g, ''),
					verCode: val.code.replace(/\s/g, ''),
				}, (data) => {
					if (data.code === '1000') {
						uni.showToast({
							title: '登录成功！',
						})
						try {
							uni.setStorageSync('userInfo', data.data)
							const {page} = this
							if(page === 'my'){
								uni.reLaunch({
									url:`/pages/${page}/${page}`
								})
							}else {
								uni.navigateTo({
									url:`/pages/${page}/${page}`
								})
							} 
						} catch (e) {
							console.log(e)
						}
					}
				}, false);
			}
		}
	}
</script>

<style lang="less">
	input {
		text-align: left !important;
	}

	.my-bg {
		min-height: 100vh;
		background: #F6F6F6;
		width: 100%;
		text-align: center;

		.user-info {
			box-sizing: border-box;
			width: 100%;
			background: #3162F5;
			position: relative;
			z-index: 2;
			color: #fff;
			text-align: center;
			padding: 0 35rpx 0;
			height: 300rpx;

			.img {
				width: 135rpx;
				height: 135rpx;
				border: 2rpx solid #fff;
				border-radius: 50%;
				background-size: 100%;
				margin: 0 auto 30rpx;
				display: block;
			}

			.h1 {
				font-size: 30rpx;
				line-height: 50rpx;
				margin-bottom: 30rpx;
			}
		}

		.login-bg {
			display: block;
			width: 686rpx;
			margin: 0 auto;
			background: #fff;
			border-radius: 5rpx;
			padding: 100rpx 32rpx;
			box-sizing: border-box;
			z-index: 9;
			position: relative;
			top: -40rpx;

			.page-section {
				margin-bottom: 28rpx;
				height: 80rpx;
				line-height: 80rpx;
				width: 100%;
				border-radius: 5rpx;
				box-sizing: border-box;
				background: #fff;
				position: relative;

				.se-input {
					height: 80rpx;
					line-height: 80rpx;
					box-sizing: border-box;
					border: 2rpx solid rgba(224, 224, 224, 1);
					background: #fff;
					width: 100%;
					color: #333;
					font-size: 32rpx;

					.uni-input-placeholder {
						text-align: left !important;
						padding-left: 20rpx;
					}
				}

				.code-btn {
					position: absolute;
					right: 2rpx;
					top: 2rpx;
					z-index: 3;
					color: #3162F5;
					cursor: pointer;
					padding: 0 40rpx;
					font-size: 28rpx;
				}
			}

			.login-btn {
				width: 100%;
				height: 88rpx;
				background: #3162F5;
				color: #fff;
				border: none;
				font-size: 32rpx;
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

			.line {
				display: inline;
				padding: 0 18rpx;
			}
		}
	}
</style>
