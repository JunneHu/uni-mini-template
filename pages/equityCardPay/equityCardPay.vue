<template>
	<view class="sure-pay">
		<view class="top">
			<view class="h1"><text class="small">¥</text>{{detail.salesPrice}}</view>
			<view class="name">{{detail.merEquityCardName}}</view>
		</view>
		<view class="center">
			<view class="item">
				用户ID <text>{{userInfo && userInfo.fuluId}}</text>
			</view>
			<view class="item">
				充值数量 <text>1</text>
			</view>
		</view>
		<!-- h5 头条  才会选择支付方式-->
		<!--  #ifdef H5 || MP-TOUTIAO || MP-360 -->
		<view class="payType">
			<view :class="payValue === '1' ? 'item active' : 'item'" @click="changeTab" data-tab="1">
				<text class="icon-img z-img"></text>支付宝支付
				<text class="am-radio"></text>
			</view>
			<view :class="payValue === '2' ? 'item active' : 'item'" @click="changeTab" data-tab="2">
				<text class="icon-img w-img"></text>微信支付
				<text class="am-radio"></text>
			</view>
		</view>
		<!--  #endif -->
		<!--  #ifdef MP-360 -->
		<!-- 360显示二维码 -->
		<view class="qrcode-bg">
			<image :src="img" class="code" />
			<div class='time'> {{countNum === 0 ? '二维码已失效' : `二维码将在${lastTime}后过期`}} </div>
		</view>
		<!--  #endif -->
		<!--  #ifndef MP-360 -->
		<button class="pay-btn" @click="surePay">立即支付</button>
		<!--  #endif -->
	</view>
</template>

<script>
	import config from '../../config/index.js'
	import {
		httpsRequest,
		toLoginFuLu,
		secondToDate
	} from '../../utils/index.js';
	import QR from "../../utils/wxqrcode.js" // 二维码生成器 
	let xInteval = null;
	let xIntevalRequest = null;
	export default {
		data() {
			let userInfo = uni.getStorageSync('userInfo');
			return {
				detail: {},
				userInfo,
				payValue: '2',
				countNum: 0,
				lastTime: '--:--',
				img: ''
			};
		},
		onLoad(option) {
			console.log(option.cid);
			this.cid = option.cid
		},
		onReady() {
			this.init()
		},
		onHide() {
			clearInterval()
			clearTimeout()
		},
		methods: {
			init() {
				httpsRequest(config.api.getPayEquityCard, 'GET', {
					userEquityCardNo: this.cid
				}, (data) => {
					if (data.code === '1000') {
						this.detail = data.data
						// #ifdef MP-360
						this.surePay()
						// #endif
					}
				}, true);
			},
			changeTab(e) {
				this.clearTimeInterval()
				this.clearRequestInterval();
				const val = e.currentTarget.dataset.tab;
				this.payValue = val;
				this.surePay()
			},
			surePay() {
				const {
					cid,
					payValue
				} = this;
				let payment = 3,
					platform = 2;
				// #ifdef  MP-TOUTIAO || MP-360 || H5
				// 头条小程序直接接微信或者支付宝 jsapi支付
				payment = Number(payValue)
				// #endif
				// #ifdef MP-360
				payment = Number(payValue)
				platform = 1
				// #endif
				// #ifdef MP-ALIPAY
				payment = 1
				platform = 6
				// #endif
				httpsRequest(config.api.equityCardPay, 'POST', {
					userEquityCardNo: cid,
					payment, // 1支付宝 2微信 3自有支付
					platform // 1pc 2mobile 3公众号 4自有平台 5app  6 小程序
				}, (data) => {
					if (data.code === '1000') {
						if (data.data == 'PureIntegral') {
							uni.navigateTo({
								url: `/pages/equityCardStatus/equityCardStatus?oid=${oid}`,
							});
							return;
						}
						// #ifdef  MP-TOUTIAO
						// 头条小程序直接接微信或者支付宝 jsapi支付

						// #endif
						// #ifdef H5
						// h5
						location.href = data.data
						// #endif
						// #ifdef MP-360
						// 360
						this.img = QR.createQrCodeImg(data.data, {
							size: parseInt(200) //二维码大小  
						})
						// this.payStatus(); // 获取支付状态
						let that = this;
						that.settime()
						let xIntevalRequest = setInterval(() => {
							const {
								countNum
							} = that;
							if (countNum === 0) {
								that.clearRequestInterval();
							}
							// this.payStatus();
						}, 3000);
						// #endif
						// #ifdef  MP-QQ
						// 接qq支付
						qq.requestPayment({
							package: "prepay_id=" + data.data,
							bargainor_id: "1598143101", //商户号
							success(res) {
								uni.navigateTo({
									url: `/pages/equityCardStatus/equityCardStatus?oid=${oid}`,
								});
							},
							fail(res) {
								uni.showToast({
									title: JSON.stringify(res),
								});
							}
						})
						// #endif
						// #ifdef  MP-ALIPAY
						my.tradePay({
							tradeNO: data.data, //完整的支付参数拼接成的字符串，从服务端获取
							success: (res) => {
								this.isLoading = false
								if (res.resultCode === '9000') { // 支付成功 .alipay_trade_app_pay_response.out_trade_no
									setTimeout(() => {
										uni.navigateTo({
											url: `/pages/equityCardStatus/equityCardStatus?cid=${cid}`,
										});
									}, 1000);
								}
							},
							fail: (res) => {
								my.showToast({
									content: JSON.stringify(res),
								});
							},
						})
						// #endif
					} else if (data.code == '1013' || data.code == '1014' || data.code == '1015') {
						toLoginFuLu().then(res => {
							if (type !== 'once') {
								this.surePay('once')
							}
						})
					}
				}, true);
			},
			settime() {
				this.countNum = 1200;
				this.clearTimeInterval();
				const that = this;
				xInteval = setInterval(function() {
					that.countNum -= 1;
					if (that.countNum === 0) {
						that.clearTimeInterval();
						that.init();
					}
					if (that.countNum > 0) {
						that.lastTime = secondToDate(that.countNum, 'min')
					}
				}, 1000);
			},
			payStatus() {
				// 单独写 获取权益包的支付状态
				const {
					cid,
					payValue
				} = this;
				httpsRequest(config.api.payStatus, 'GET', {
					orderNo: cid,
					payType: payValue // 支付类型 1支付宝 2微信 3自有支付
				}, (data) => {
					if (data.code === '1000') {
						if (data.data) {
							this.clearTimeInterval()
							this.clearRequestInterval();
							uni.navigateTo({
								url: `/pages/equityCardStatus/equityCardStatus?oid=${oid}`,
							});
						}
					} else if (data.code == '1013' || data.code == '1014' || data.code == '1015') {
						toLoginFuLu().then(res => {
							return this.payStatus()
						})
					}
				}, true);
			},
			clearTimeInterval() {
				if (xInteval) {
					clearInterval(xInteval)
					xInteval = null;
				}
			},
			clearRequestInterval() {
				if (xIntevalRequest) {
					clearInterval(xIntevalRequest)
					xIntevalRequest = null;
				}
			},
		}
	}
</script>

<style lang="less">
	.sure-pay {
		background: #F6F7F7;
		min-height: 100vh;
		padding: 0 20rpx 0 28rpx;

		.top {
			padding-top: 30rpx;
			text-align: center;
			margin-bottom: 30rpx;

			.h1 {
				height: 90rpx;
				font-size: 72rpx;
				font-weight: 700;
				color: #060606;
				line-height: 90rpx;
				margin-bottom: 16rpx;

				.small {
					font-size: 40rpx;
				}
			}

			.name {
				font-size: 28rpx;
				color: #060606;
			}
		}

		.center {
			margin-bottom: 20rpx;
			padding-left: 28rpx;
			background: #fff;
			border-radius: 8rpx;

			.item {
				height: 128rpx;
				line-height: 128rpx;
				color: #333;
				font-size: 32rpx;
				padding-right: 28rpx;

				&:first-child {
					border-bottom: 2rpx solid #F3F3F3;
				}

				text {
					color: #333;
					font-size: 28rpx;
					float: right;
				}
			}
		}

		.payType {
			padding-left: 24rpx;
			background: #fff;

			.item {
				padding: 0 24rpx 0 0;
				height: 128rpx;
				line-height: 128rpx;
				color: #333;
				font-size: 32rpx;
				border-bottom: 2rpx solid #F3F3F3;

				&:last-child {
					border-bottom: none;
				}

				.am-radio {
					width: 48rpx;
					height: 48rpx;
					background: url('https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/c56652acc7854af390e6e74710ba5f8d.png') no-repeat;
					background-size: contain;
					float: right;
					margin-top: 40rpx;
				}

				&.active {
					.am-radio {
						background: url('https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/fab40e81280b4965a1338d948d266003.png') no-repeat;
						background-size: contain;
					}
				}

				.icon-img {
					display: inline-block;
					width: 36rpx;
					height: 36rpx;
					vertical-align: middle;
					margin-right: 20rpx;

					&.w-img {
						background: url('https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/0d6b7d5beaff4babac0d44ab35a5e2ff.png') no-repeat;
						background-size: contain;
					}

					&.z-img {
						background: url('https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/27c739053f224c2c9639142d8f5a96eb.png') no-repeat;
						background-size: contain;
					}
				}
			}
		}

		.pay-btn {
			width: 702rpx;
			height: 96rpx;
			background: linear-gradient(180deg, rgba(253, 226, 164, 1) 0%, rgba(178, 138, 75, 1) 100%);
			border-radius: 48rpx;
			font-size: 36rpx;
			color: #331308;
			margin-top: 200rpx;
		}

		.qrcode-bg {
			text-align: center;
			padding: 30rpx 0;

			.code {
				width: 200rpx;
				height: 200rpx;
				margin-bottom: 20rpx;
			}
		}
	}
</style>
