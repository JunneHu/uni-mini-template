<template>
	<view class="sure-pay">
		<view class="sure-con">
			<view class="list-item">
				<view class="left-img">
					<image :src="detailInfo.productImg" class="img" />
				</view>
				<view class="right-page">
					<view class="title">
						{{detailInfo.productName}}
					</view>
					<view class="num">x{{detailInfo.buyNum}}</view>
				</view>
			</view>
			<view class="goods-info">
				<view class="info-list">
					<text class="label">订单总价</text>
					<text>¥{{detailInfo.totalPrice}}</text>
				</view>
				<view class="info-list" v-if="detailInfo.integral">
					<text class="label">扣除积分</text>
					<text>{{detailInfo.integral}}</text></view>
				<view class="info-list">
					<text class="label">{{detailInfo.productType === 3 ? '充值类型':'充值账号'}}</text>
					<text>{{detailInfo.productType === 3 ? '卡密': detailInfo.chargeAccount}}</text>
				</view>
				<view class="info-list" style="margin-bottom:0">
					<text class="label">服务商家</text>
					<text>福禄网络科技有限公司</text>
				</view>
			</view>
		</view>
		<!-- #ifdef MP-360 || H5 -->
		<view class="payType">
			<view v-for="item in payList" :class="activeName === item.value ? 'item active' : 'item'" @click="changeTab(item.value)">
				<text :class="item.value == 1 ? 'icon-img z-img': 'icon-img w-img'"></text>{{item.name}}
				<text class="am-radio"></text>
			</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef MP-360 -->
		<view class="pay-main">

			<view class="qrcode-bg">
				<image :src="qrcode" class="code" />
			</view>
			<view class='time'> {{countNum === 0 ? '二维码已失效' : `二维码将在${lastTime ? lastTime : '--:--'}后过期`}} </view>
		</view>
		<!-- #endif -->
		<!-- #ifdef MP-QQ || MP-ALIPAY || MP-WEIXIN || H5 || MP-TOUTIAO -->
		<view class="btn-area">
			<view class="price">
				<view>合计</view>
				<view class="p-num">
					<view class="price-num">¥{{detailInfo.totalPrice}}
						<view v-if="detailInfo.integral">+{{detailInfo.integral}}积分</view>
					</view>
				</view>
			</view>
			<view v-if="isLoading">
				<button type="default" disabled :loading="isLoading">去支付</button>
			</view>
			<view v-else>
				<button type="primary" @click="toPay">去支付</button>
			</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import config from '../../config/index.js'
	import {
		httpsRequest,
		secondToDate
	} from '../../utils/index.js';
	import moment from '../../common/js/moment.js'
	let xInteval = null;
	let xIntevalRequest = null;
	import QR from "../../utils/wxqrcode.js" // 二维码生成器 
	export default {
		data() {
			return {
				detailInfo: {},
				// 1、支付宝   2、微信
				payList: [{
					value: '1',
					name: '支付宝'
				}, {
					value: '2',
					name: '微信'
				}],
				activeName: '2',
				lastTime: '',
				countNum: 0,
				qrcode: ''
			};
		},
		onLoad(option) {
			this.oid = option.oid
			this.init()
		},
		onUnload() {
			this.clearTimeInterval()
			this.clearRequestInterval();
		},
		onHide() {
			this.clearTimeInterval()
			this.clearRequestInterval();
		},
		methods: {
			init() {
				const {
					oid
				} = this;
				if (this.isLoading) return false;
				this.isLoading = true
				httpsRequest(config.api.getOrderDetail, 'GET', {
					orderNo: oid
				}, (data) => {
					this.isLoading = false
					if (data.code === '1000') {
						this.detailInfo = data.data
						// 计算订单时间  如果订单生成时间大于20分钟  就跳转订单列表页
						const now = moment(moment().format()).valueOf(); // 当前时间
						const oTime = moment(data.data.orderTime).valueOf(); // 订单时间
						const time = ((now - oTime) / 1000).toFixed(0);
						if (time > 1200) {
							uni.showToast({
								icon: 'none',
								title: '订单已关闭！',
							});
							uni.navigateTo({
								url: '/pages/orderList/orderList',
							});
						} else {
							// #ifdef MP-360
							this.toPay()
							// #endif
						}
					}
				}, true);
			},
			settime(time) {
				this.countNum = time
				this.clearTimeInterval();
				let that = this;
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
				const {
					oid,
					activeName
				} = this;
				httpsRequest(config.api.payStatus, 'GET', {
					orderNo: oid,
					payType: activeName // 支付类型 1支付宝 2微信 3自有支付
				}, (data) => {
					if (data.code === '1000') {
						if (data.data) {
							this.clearTimeInterval()
							this.clearRequestInterval();
							uni.navigateTo({
								url: `/pages/paySuccess/paySuccess?oid=${oid}`,
							});
						}
					} else if (data.code == '1013' || data.code == '1014' || data.code == '1015') {
						toLoginFuLu().then(res => {
							return this.payStatus()
						})
					}
				}, true);
			},
			toPay(type) {
				const {
					detailInfo,
					oid,
					activeName,
				} = this;
				try {
					let userInfo = uni.getStorageSync('userInfo');
					let payment = 1,
						platform = 1
					// #ifdef MP-360
					payment = activeName // 这里需要选择支付方式
					platform = 1
					// #endif
					// #ifdef MP-QQ
					payment = 3
					platform = 3
					// #endif
					// #ifdef MP-ALIPAY
					payment = 1
					platform = 6
					// #endif
					// #ifdef MP-WEIXIN
					payment = 2
					platform = 3
					// #endif
					// #ifdef MP-TOUTIAO || H5
					payment = activeName
					platform = 2
					// #endif
					if (userInfo) {
						httpsRequest(config.api.unifiedorder, 'POST', {
							orderNo: oid,
							productId: detailInfo.productId,
							payment, // 支付类型 1支付宝 2微信 3自有支付
							platform, // 平台 1pc 2mobile 3公众号 4自有平台 
						}, (data) => {
							if (data.code === '1000') {
								if (data.data == 'PureIntegral') {
									uni.navigateTo({
										url: `/pages/paySuccess/paySuccess?oid=${oid}`,
									});
									return;
								}
								// #ifdef MP-360
								// 360接扫码支付
								this.clearTimeInterval()
								// 做倒计时
								this.settime(1200)
								this.qrcode = QR.createQrCodeImg(data.data, {
									size: parseInt(300) //二维码大小  
								})
								this.payStatus(); // 获取支付状态
								let that = this;
								xIntevalRequest = setInterval(() => {
									const {
										countNum
									} = that;
									if (countNum === 0) {
										that.clearRequestInterval();
									}
									this.payStatus();
								}, 5000);
								// #endif
								// #ifdef MP-QQ
								// 接qq支付
								uni.requestPayment({
									package: "prepay_id=" + data.data,
									bargainor_id: "1598143101", //商户号
									success(res) {
										uni.navigateTo({
											url: `/pages/paySuccess/paySuccess?oid=${oid}`,
										});
									},
									fail(res) {
										console.log(res)
									}
								})
								// #endif
								// #ifdef MP-ALIPAY
								my.tradePay({
									tradeNO: data.data, //完整的支付参数拼接成的字符串，从服务端获取
									success: (res) => {
										if (res.resultCode === '9000') { // 支付成功
											setTimeout(() => {
												uni.navigateTo({
													url: `/pages/paySuccess/paySuccess?oid=${oid}`,
												});
											}, 1000);
										}
									},
									fail: (res) => {
										if (res.resultCode === '-11001') {
											console.log('用户取消支付')
										} else {
											console.log(res)
										}
									}
								});
								// #endif
								// #ifdef MP-WEIXIN
								// 接微信支付
								// #endif
								// #ifdef H5
								window.location.href = data.data;
								// #endif

							} else if (data.code == '1013' || data.code == '1014' || data.code == '1015') {
								toLoginFuLu().then(res => {
									if (type !== 'once') {
										this.toPay('once')
									}
								})
							}
						}, true);
					} else {
						toLoginFuLu().then(res => {
							this.toPay('user')
						})
					}
				} catch (e) {
					console.log(e)
				}
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
			changeTab(val) {
				this.clearTimeInterval()
				this.clearRequestInterval();
				this.activeName = val
				// #ifdef MP-360
				this.toPay()
				// #endif
			},
			onPullDownRefresh() {
				this.init()
			},
		}
	}
</script>

<style lang="less">
	.sure-pay {
		width: 750rpx;
		padding-bottom: 180rpx;
		min-height: 100vh;
		background: #f6f6f6;

		.sure-con {
			background: #fff;
			padding: 36rpx 32rpx;

			.list-item {
				margin-bottom: 35rpx;
				height: 104rpx;
				position: relative;

				.left-img {
					float: left;
					width: 104rpx;
					height: 104rpx;

					.img {
						width: 104rpx;
						height: 104rpx;
						border-radius: 8rpx;
					}
				}

				.right-page {
					margin-left: 134rpx;

					.title {
						font-size: 32rpx;
						color: #333;
						margin: 12rpx 0 16rpx;
						line-height: 32rpx;
						overflow: hidden;
						height: 32rpx;
						width: 552rpx;
						white-space: nowrap;
						text-overflow: ellipsis;
					}

					.num {
						font-size: 26rpx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(153, 153, 153, 1);
						line-height: 26rpx;
					}
				}
			}
		}

		.goods-info {
			background: #fff;

			.info-list {
				font-size: 28rpx;
				margin-bottom: 25rpx;
				text-align: right;
				font-size: 26rpx;
				color: #333;

				.label {
					color: #999;
					display: inline-block;
					font-size: 26rpx;
					font-weight: 400;
					line-height: 26rpx;
					float: left;
				}
			}
		}

		.btn-area {
			padding: 32rpx;
			position: fixed;
			width: 750rpx;
			z-index: 99;
			bottom: 0;
			left: 0;
			height: 152rpx;
			background: #fff;
			display: flex;
			text-align: right;

			button {
				width: 250rpx;
				padding: 0;
				font-size: 30rpx;
				height: 88rpx;
				background: #286AFF;
				margin-left: 21rpx;
				line-height: 88rpx;
			}

			.price {
				padding-top: 10rpx;
				font-size: 26rpx;
				color: #999;
				width: 500rpx;
			}

			.p-num {
				color: #286AFF;
				height: 30rpx;
				line-height: 32rpx;
				margin-top: 10rpx;
				font-size: 26rpx;

				.price-num {
					font-size: 32rpx;
				}
			}

		}

		.payType {
			padding-left: 36rpx;
			background: #fff;
			margin-top: 20rpx;

			.item {
				padding: 0 36rpx 0 0;
				height: 100rpx;
				line-height: 100rpx;
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
					margin-top: 25rpx;
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

		.pay-main {
			.qrcode-bg {
				width: 100%;
				overflow: hidden;
				width: 300rpx;
				height: 300rpx;
				margin: 50rpx auto 20rpx;

				.code {
					width: 300rpx;
					height: 300rpx;
				}
			}

			.time {
				text-align: center;
				color: #666;
			}
		}
	}
</style>
