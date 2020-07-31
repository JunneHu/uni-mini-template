<template>
	<view class="card-status">
		<view class="info">
			<view class="name" v-if="detail.payStatus == 3"><i class="icon fail"></i>交易失败</view>
			<view class="name" v-if="detail.payStatus == 2"><i class="icon"></i>支付成功</view>
			<view class="name" v-if="detail.payStatus == 1"><i class="icon fail"></i>未支付</view>
			<view class="tips" v-if="detail.payStatus == 2">即将跳转兑换页面 {{sendCodeTime}}s</view>
			<view class="item">{{detail.merEquityCardName}}<text>¥{{detail.salesPrice}}</text></view>
			<view class="item">用户ID<text>{{userInfo && userInfo.fuluId}}</text></view>
			<view class="item">下单时间<text>{{detail.orderTime}}</text></view>
			<view class="item">购买数量<text>1</text></view>
			<view class="item">服务商家<text>福禄网络科技有限公司</text></view>
		</view>
		<button class="pay-btn" v-if="detail.payStatus == 1" @click="toBuy">再次购买</button>
	</view>
</template>

<script>
	import config from '../../config/index.js'
	import {
		httpsRequest
	} from '../../utils/index.js';
	let timer = null;
	export default {
		data() {
			let userInfo = uni.getStorageSync('userInfo');
			return {
				detail: {},
				userInfo,
				sendCodeTime: 3
			};
		},
		onLoad(option) {
			console.log(option.cid);
			this.cid = option.cid
			this.init()
		},
		onUnload() {
			clearInterval(timer);
			clearTimeout();
		},
		methods: {
			init() {
				httpsRequest(config.api.getPayEquityCard, 'GET', {
					userEquityCardNo: this.cid
				}, (data) => {
					if (data.code === '1000') {
						this.detail = data.data;
						if (data.data.payStatus == 1) {
							setTimeout(() => {
								that.init();
							}, 3000)
						} else if (data.data.payStatus == 2) {
							this.sendCodeTime = 3;
							const self = this
							timer = setInterval(() => {
									console.log(self.sendCodeTime)
								if (self.sendCodeTime === 1) {
									clearInterval(timer)
									uni.navigateTo({
										url: `/pages/equityCardDetail/equityCardDetail?cid=${this.cid}`,
									});
								}
								self.sendCodeTime -= 1
							}, 1000);
						} else if (data.data.payStatus == 2) {
							setInterval(() => {
								if (this.sendCodeTime == 1) {
									uni.navigateTo({
										url: `/pages/equityCardDetail/equityCardDetail?cid=${this.cid}`
									})
									clearInterval()
								} else {
									this.sendCodeTime -= 1
								}
							}, 1000)
						}
					}
				}, true);
			},
			toBuy() {
				uni.reLaunch({
					url: '/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="less">
	.card-status {
		background: #F6F7F7;
		width: 750rpx;
		min-height: 100vh;
		padding: 32rpx 24rpx;
		box-sizing: border-box;

		.info {
			background: #fff;
			border-radius: 12rpx;
			padding: 58rpx 36rpx 36rpx;

			.name {
				font-size: 40rpx;
				color: #333333;
				line-height: 56rpx;
				margin-bottom: 16rpx;

				.icon {
					display: inline-block;
					width: 44rpx;
					height: 44rpx;
					background: url('https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/e0ab1720e43a4210809b0e329a607d86.png') no-repeat;
					background-size: 100%;
					margin-right: 16rpx;
					vertical-align: middle;

					&.fail {
						background: url('https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/09f6ec38e2434c0aa33b5d89351f0126.png') no-repeat;
						background-size: 100%;
					}
				}
			}

			.tips {
				font-size: 24rpx;
				color: #666;
				line-height: 34rpx;
			}

			.item {
				height: 104rpx;
				line-height: 104rpx;
				border-bottom: 2rpx solid #F3F3F3;
				color: #666;
				font-size: 28rpx;

				&:last-child {
					border-bottom: none;
				}

				text {
					color: #333;
					float: right;
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
	}
</style>
