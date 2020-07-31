<template>
	<view class="status-bg">
		<view class="status-top">
			<view v-if="orderDetail.orderStatus === 11">
				<view class="icon-center orangeBg">
					<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/4b9788796d5b46ee9ffcef892f0f7be7.png" class="img-center" />
					<text class="txt-only">待付款 </text>
				</view>
			</view>
			<view v-if="orderDetail.orderStatus === 15">
				<view class="icon-center orangeBg">
					<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/4b9788796d5b46ee9ffcef892f0f7be7.png" class="img-center" />
					<text class="txt-only">交易关闭 </text>
				</view>
			</view>
			<view v-if="orderDetail.orderStatus === 21 || orderDetail.orderStatus === 31 || orderDetail.orderStatus === 41">
				<view class="icon-left orangeBg">
					<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/2c5cb1038d2349d28878731517ff270f.png" class="img-center" />
					<text class="txt-more">
						<text class="txt-top">充值中 </text>
						<text class="small">月末月初充值高峰，可能会出现充值到账延迟的情况，请您耐心等待。 </text>
					</text>
				</view>
			</view>
			<view v-if="orderDetail.orderStatus === 51">
				<view class="icon-center blueBg">
					<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/e95add4f07584c5da2579ffb748ea92d.png" class="img-center" />
					<text class="txt-only">充值成功 </text>
				</view>
			</view>
			<view v-if="orderDetail.orderStatus === 61">
				<view class="icon-center orangeBg">
					<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/4b9788796d5b46ee9ffcef892f0f7be7.png" class="img-center" />
					<text class="txt-only">充值失败 </text>
				</view>
			</view>
			<view v-if="orderDetail.orderStatus === 71">
				<view class="icon-center orangeBg">
					<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/1dbe1cc2e3d941b3a2539f7fe10850de.png" class="img-center" />
					<text class="txt-only">退款已到账 </text>
				</view>
			</view>
			<view class="pro-info">
				<view class="list-item">
					<view class="left-img">
						<image :src="orderDetail.productImg" class="img" />
					</view>
					<view class="right-page">
						<view class="title">
							{{orderDetail.productName}}
						</view>
						<view class="num">x{{orderDetail.buyNum || 1}} </view>
					</view>
				</view>
				<view class="goods-info">
					<view class="info-list">
						<text class="label">订单总价 </text>
						<text class="p-info">{{orderDetail.totalPrice}}元 </text>
					</view>
					<view class="info-list" v-if="orderDetail.integral">
						<text class="label">扣除积分 </text>
						<text class="p-info">
							{{orderDetail.integral}}
						</text>
					</view>
					<view class="info-list">
						<text class="label">兑换时间 </text>
						<text class="p-info">{{orderDetail.orderTime}} </text>
					</view>
					<view class="info-list">
						<text class="label">订单号 </text>
						<text class="p-info">{{orderDetail.orderNo}}</text>
					</view>
					<view class="info-list" v-if="orderDetail.chargeAccount">
						<text class="label">充值账号 </text>
						<text class="p-info">{{orderDetail.chargeAccount}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="more-txt">为你精选更多权益</view>
		<view class="more-pro">
			<view class="item" v-for="item in hotPro" :key="item.childCategoryId" @click="toDetail(item)">
				<image :src="item.iconPath" />
				<view class="name">{{item.childCategoryName}}</view>
				<view class="price">
					<text v-if="item.integral">{{item.integral}}积分+</text>{{item.price}}元
				</view>
				<view class="del-price">{{item.faceValue}}元</view>
			</view>
		</view>
		<view class="last-gray">本服务由武汉福禄网络提供技术支持</view>
		<view class="btn-bg">
			<button type="primary" class="toOrder" @click="toOrderList">全部订单</button>
			<button type="primary" class="toIndex" @click="toIndex">再逛逛</button>
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
				orderDetail: {},
				hotPro: [],
				isLoading: false
			};
		},
		onLoad(option) {
			this.oid = option.oid
			this.init()
			this.getHot()
		},
		onHide() {
			clearTimeout()
		},
		methods: {
			init() {
				const {
					oid
				} = this;
				httpsRequest(config.api.getOrderDetail, 'GET', {
					orderNo: oid
				}, (data) => {
					if (data.code === '1000') {
						this.orderDetail = data.data;
						if (data.data.orderStatus === 11 || data.data.orderStatus === 15 || data.data.orderStatus === 51 || data.data.orderStatus ===
							71) {} else {
							//  当订单状态不是成功或者失败的时候继续调用接口
							setTimeout(() => {
								this.init();
							}, 10000)
						}
					}
				}, true);
			},
			getHot() {
				httpsRequest(config.api.getHotCategory, 'GET', {
					count: 6
				}, (data) => {
					if (data.code === '1000') {
						this.hotPro = data.data.list
					}
				}, false);
			},
			toOrderList(val) {
				uni.navigateTo({
					url: '/pages/orderList/orderList',
				})
			},
			toIndex() {
				uni.reLaunch({
					url: '/pages/index/index'
				})
			},
			toDetail(val) {
				uni.navigateTo({
					url: `/pages/detail/detail?id=${val.childCategoryId}`,
				})
			},
			onPullDownRefresh() {
				this.init()
			},
		}
	}
</script>

<style lang="less">
	.status-bg {
		width: 750rpx;
		padding-bottom: 180rpx;
		min-height: 100vh;
		background: #f6f6f6;

		.status-top {
			width: 750rpx;
			overflow: hidden;

			.icon-center {
				padding: 70rpx 0 36rpx;
				text-align: center;
				color: #fff;
				font-size: 30rpx;
				font-weight: 400;
				line-height: 30rpx;

				.img-center {
					width: 136rpx;
					height: 136rpx;
					vertical-align: middle;

					.icon-no {
						height: 346rpx;
					}
				}
			}

			.icon-left {
				padding: 170rpx 70rpx 36rpx;
				text-align: left;
				color: #fff;
				font-size: 30rpx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				line-height: 30rpx;
				display: flex;

				.img-center {
					width: 136rpx;
					height: 136rpx;
					vertical-align: top;
					margin-right: 20rpx;
				}

				.txt-more {
					width: 450rpx;

					.txt-top {
						display: block;
						padding: 20rpx 0;
						font-size: 30rpx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(255, 255, 255, 1);
						line-height: 30rpx;
					}

					.small {
						display: block;
						height: 57rpx;
						font-size: 26rpx;
						font-family: PingFangSC-Regular;
						font-weight: 400;
						color: rgba(255, 255, 255, 1);
						line-height: 30rpx;
					}
				}
			}

			.blueBg {
				background: linear-gradient(to right, rgba(37, 193, 246, 1), rgba(16, 142, 233, 1)) !important;
			}

			.orangeBg {
				background: linear-gradient(to right, rgba(245, 141, 64, 1), rgba(232, 84, 30, 1)) !important;
			}
		}

		.pro-info {
			background: #fff;
			padding: 36rpx 32rpx;
			margin: 20rpx 32rpx 0;
			margin-bottom: 32rpx;

			.list-item {
				margin-bottom: 35rpx;
				min-height: 104rpx;
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
						white-space: nowrap;
						text-overflow: ellipsis;
						width: 500rpx;
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

			.goods-info {
				background: #fff;
				padding-bottom: 10rpx;

				.info-list {
					width: 688rpx;
					font-size: 28rpx;
					text-align: right;
					font-size: 26rpx;
					color: #333;
					height: 40rpx;
					overflow: hidden;
					display: flex;
					margin-bottom: 10rpx;

					.label {
						color: #999;
						display: inline-block;
						font-size: 26rpx;
						font-weight: 400;
						height: 40rpx;
						line-height: 40rpx;
						width: 200rpx;
						text-align: left;
					}

					.p-info {
						text-align: right;
						width: 424rpx;
						height: 40rpx;
						line-height: 40rpx;
					}
				}
			}
		}

		.more-pro {
			width: 686rpx;
			height: 580rpx;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 2px 10px 0px rgba(136, 136, 136, 0.15);
			border-radius: 4rpx;
			margin: 0 auto;
			padding: 42rpx 32rpx 0;

			.item {
				width: 33%;
				margin-bottom: 30rpx;
				float: left;
				image {
					width: 100rpx;
					height: 100rpx;
					border-radius: 8rpx;
					display: block;
					margin: 0 auto 27rpx;
				}

				.name {
					text-align: center;
					display: block;
					height: 30rpx;
					font-size: 26rpx;
					font-weight: 500;
					color: rgba(0, 0, 0, 1);
					margin-bottom: 17rpx;
					overflow: hidden;
					line-height: 30rpx;
				}

				.price {
					text-align: center;
					display: block;
					height: 24rpx;
					font-size: 26rpx;
					font-weight: 400;
					color: rgba(255, 139, 64, 1);
					line-height: 26rpx;
					margin-bottom: 8rpx;
				}

				.del-price {
					text-decoration: line-through;
					text-align: center;
					height: 20rpx;
					line-height: 20rpx;
					font-size: 20rpx;
					color: #b3b3b3;
				}
			}
		}

		.btn-bg {
			display: flex;
			overflow: hidden;
			width: 750rpx;
			position: fixed;
			bottom: 0;
			left: 0;
			background: #fff;
			padding: 32rpx;

			button {
				width: 335rpx;
				height: 88rpx;
				line-height: 88rpx;
				padding: 0;
				font-size: 36rpx;
				border-radius: 5rpx;

				&.toOrder {
					margin-right: 16rpx;
					background: #f6f6f6;
					color: #333333;
					border: none;
				}

				&.toIndex {
					background: #286aff;
				}
			}
		}

		.more-txt {
			margin-bottom: 20rpx;
			height: 25rpx;
			font-size: 26rpx;
			font-weight: 400;
			color: rgba(153, 153, 153, 1);
			text-align: center;


		}

		.last-gray {
			width: 690rpx;
			height: 22rpx;
			font-size: 22rpx;
			font-family: PingFangSC-Regular;
			font-weight: 400;
			color: rgba(204, 204, 204, 1);
			line-height: 26rpx;
			text-align: center;
			margin: 33rpx 0;

			.line {
				display: inline;
				padding: 0 18rpx;
			}
		}
	}
</style>
