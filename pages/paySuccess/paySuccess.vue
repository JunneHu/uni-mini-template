<template>
	<view class="pay-success">
		<view class="top">
			<view class="succ-icon">
				<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/46fdce08f0af432c8aecbbcc92e5b2e3.png" />
			</view>
			<view class="txt">支付成功</view>
			<view class="btn-bg">
				<button type="primary" class="toOrder" @click="toOrderStatus">查看订单</button>
				<button type="primary" class="toIndex" @click="toIndex">逛逛其他
				</button>
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
				detailInfo: {},
				hotPro:[]
			};
		},
		onLoad(option) {
			this.oid =  option.oid
			this.init()
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
					}
				}, true);
				httpsRequest(config.api.getHotCategory, 'GET', {
					count: 6
				}, (data) => {
					if (data.code === '1000') {
						this.hotPro = data.data.list
					}
				}, false);
			},

			toDetail(val) {
				uni.navigateTo({
					url: `/pages/detail/detail?id=${val.childCategoryId}`,
				})
			},
			toOrderStatus() {
				const {
					oid
				} = this
				uni.navigateTo({
					url: `/pages/orderStatus/orderStatus?oid=${oid}`,
				});

			},
			toIndex() {
				uni.reLaunch({
					url: '/pages/index/index'
				})
			},
		}
	}
</script>

<style lang="less">
	.pay-success {
		width: 750rpx;
		padding-bottom: 180rpx;
		min-height: 100vh;
		background: #f6f6f6;

		.top {
			background: #fff;
			padding: 27rpx 32rpx 29rpx;
			margin-bottom: 30rpx;

			.succ-icon {
				width: 130rpx;
				height: 130rpx;
				background: rgba(40, 106, 255, 1);
				border-radius: 50%;
				margin: 0 auto 40rpx;

				image {
					width: 68rpx;
					height: 52rpx;
					background-size: contain;
					margin: 42rpx 0 0 31rpx;
				}
			}

			.txt {
				height: 38rpx;
				font-size: 40rpx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(51, 51, 51, 1);
				text-align: center;
				margin-bottom: 74rpx;
			}

			.btn-bg {
				display: flex;
				width: 686rpx;
				margin: 0 auto 37rpx;

				button {
					width: 335rpx;
					height: 88rpx;
					line-height: 88rpx;
					padding: 0;
					font-size: 36rpx;

					&.toOrder {
						margin-right: 16rpx;
						background: #D2DaF1;
						color: #286Aff;
						border: none;
					}

					&.toIndex {
						background: #286AFF;
					}
				}
			}
		}

		.more-txt {
			margin-bottom: 33rpx;
			height: 25rpx;
			font-size: 26rpx;
			font-weight: 400;
			color: rgba(153, 153, 153, 1);
			text-align: center;
		}

		.more-pro {
			width: 686rpx;
			height: 580rpx;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 2px 10px 0px rgba(136, 136, 136, 0.15);
			border-radius: 4rpx;
			margin: 0 auto;
			padding: 42rpx 32rpx 0;
			display: flex;
			flex-wrap: wrap;

			.item {
				width: 33%;
				margin-bottom: 30rpx;

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
					color: #B3B3B3;
				}
			}
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
			position: fixed;
			bottom: 36rpx;
		}
	}
</style>
