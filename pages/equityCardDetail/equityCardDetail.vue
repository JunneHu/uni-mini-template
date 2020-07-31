<template>
	<view class="card-detail">
		<view class="top-bg">
			<view class="h1">{{detail.merEquityCardName}}</view>
			<view class="time">有效期至：{{detail.equityCardEndTime}}</view>
		</view>
		<view class="item" v-for="(v,i) in detail.productModelList">
			<view class="top">
				<view class="name font-clamp">{{v.productName}}
					<view class="orderno" v-if="v.useStatus == 2">订单编号：{{v.orderNo}}</view>
				</view>
				<block v-if="v.useStatus == 0">
					<button class="btn-bg" v-if="detail.isUse" @click="toUrl(v, 'rechange')">立即兑换</button>
					<button class="btn-bg disable" disabled v-else>已过期</button>
				</block>
				<block v-else>
					<button v-if="v.useStatus == 3" class="btn-bg userd" @click="toUrl(v, 'look')">查看卡密</button>
					<button v-if="v.useStatus == 2" class="btn-bg userd" @click="toUrl(v, 'look')">查看详情</button>
					<button v-if="v.useStatus == 1" class="btn-bg userd">兑换中</button>
				</block>
			</view>
			<view class="bottom">{{detail.equityCardEndTime}} 过期</view>
		</view>
	</view>
</template>

<script>
	import config from '../../config/index.js'
	import {
		httpsRequest
	} from '../../utils/index.js';
	export default {
		data() {
			return {
				detail: {}
			};
		},
		onLoad(option) {
			console.log(option.cid);
			this.cid = option.cid
			this.init()
		},
		methods: {
			init() {
				httpsRequest(config.api.getUserEquityCardDetail, 'GET', {
					userEquityCardNo: this.cid
				}, (data) => {
					if (data.code === '1000') {
						this.detail = data.data
					}
				}, true);
			},
			toUrl(val, type) {
				if (type === 'look') {
					if (val.productType === 3) { // 卡密下单
						uni.navigateTo({
							url: `/pages/rechargeKM/rechargeKM?userEquityCardProductId=${val.id}&userEquityCardNo=${val.userEquityCardNo}&orderNo=${val.orderNo}`
						})
					} else if (val.productType === 4) { // 直充下单
						uni.navigateTo({
							url: `/pages/rechargeZC/rechargeZC?userEquityCardProductId=${val.id}&userEquityCardNo=${val.userEquityCardNo}`
						})
					}
				} else if (type === 'rechange') {
					if (val.productType === 3) { // 卡密下单
						this.kmPost = val;
						this.equiCardSendOrder()
					} else if (val.productType === 4) { // 直充下单
						uni.navigateTo({
							url: `/pages/rechargeZC/rechargeZC?userEquityCardProductId=${val.id}&userEquityCardNo=${val.userEquityCardNo}`
						})
					}
				}
			},
			equiCardSendOrder() {
				const {
					kmPost
				} = this;
				try {
					let userInfo = uni.getStorageSync('userInfo');
					if (userInfo) {
						httpsRequest(config.api.equiCardSendOrder, 'POST', {
							equityCardProductId: kmPost.id,
							userEquityCardNo: kmPost.userEquityCardNo,
							extractCode: '123456'
						}, (data) => {
							if (data.code === '1000') {
								uni.navigateTo({
									url: `/pages/rechargeKM/rechargeKM?userEquityCardProductId=${kmPost.id}&userEquityCardNo=${kmPost.userEquityCardNo}&orderNo=${data.data}`
								})
							} else if (data.code === '1013' || data.code === '1014' || data.code === '1015') {
								if (post !== 'once') {
									return this.equiCardSendOrder('once');
								}
							}
						}, true);
					} else {
						toLoginFuLu().then(res => {
							this.equiCardSendOrder()
						})
					}
				} catch (e) {
					console.log(e)
				}
				
			}
		},

	}
</script>

<style lang="less">
	.card-detail {
		background: #171717;
		width: 750rpx;
		min-height: 100vh;
		padding: 40rpx 34rpx 40rpx 38rpx;
		box-sizing: border-box;

		.top-bg {
			width: 678rpx;
			height: 300rpx;
			background: url('https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/6205ea8efb064bd4a82e846cbcc708b1.png') no-repeat;
			background-size: 100%;
			box-shadow: 0 10rpx 20rpx 0 rgba(0, 0, 0, 0.5), 0 4rpx 28rpx 0 rgba(0, 0, 0, 0.5);
			border-radius: 20rpx;
			padding: 28rpx 40rpx;
			margin-bottom: 20rpx;
			position: relative;
			box-sizing: border-box;

			.h1 {
				margin: 0;
				font-size: 48rpx;
				font-weight: 500;
				color: #453215;
				line-height: 66rpx;
			}

			.time {
				color: #453215;
				line-height: 40rpx;
				position: absolute;
				bottom: 28rpx;
				left: 40rpx;
				font-size: 28rpx;
			}
		}

		.item {
			width: 680rpx;
			height: 236rpx;
			background: url('https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/46e186aef6a34f4da59c366ce52c841f.png') no-repeat;
			background-size: 100%;
			box-shadow: 0 4rpx 28rpx 0 rgba(0, 0, 0, 0.5);
			margin-bottom: 20rpx;
			width: 100%;
			padding: 0 18rpx 0 38rpx;
			color: #F5D090;
			box-sizing: border-box;

			.top {
				height: 184rpx;
				padding-top: 52rpx;
				line-height: 70rpx;
				display: flex;
				box-sizing: border-box;

				.name {
					width: 448rpx;
					font-size: 32rpx;
					padding-right: 20rpx;
					line-height: 48rpx;
					box-sizing: border-box;
				}

				.orderno {
					height: 40rpx;
					font-size: 24rpx;
					color: rgba(245, 208, 144, .6);
					line-height: 40rpx;
				}

				.btn-bg {
					width: 166rpx;
					height: 70rpx;
					line-height: 70rpx;
					background: linear-gradient(180deg, rgba(255, 184, 0, 1) 0%, rgba(255, 130, 0, 1) 100%);
					background-size: 100%;
					box-shadow: 0 4rpx 0 0 rgba(192, 115, 36, 1);
					border-radius: 35rpx;
					color: #2a2a2a;
					font-size: 28rpx;
					box-sizing: border-box;
					font-weight: 700;
					&.disable {
						background: #737373;
						box-shadow: none;
					}

					&.userd {
						background: #C8A465;
						box-shadow: none;
					}
				}
			}

			.bottom {
				height: 52rpx;
				line-height: 52rpx;
				text-align: right;
				color: rgba(245, 208, 144, .6);
				font-size: 28rpx;
			}
		}
	}
</style>
