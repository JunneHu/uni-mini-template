<template>
	<view class="lists-page">
		<view v-if="total>0">
			<view class="order-detail-box" v-for="item in listData" @click="toDetail(item)">
				<view class="left">
					<image :src="item.iconPath" />
				</view>
				<view class="center">
					<view class="name">{{item.productName}}</view>
					<view class="price">
						<text v-if="item.integral">{{item.integral}}积分+</text>{{item.price}}元
						<text class="del-price">{{item.faceValue}}元</text>
					</view>
				</view>
				<button class="right">立即购买</button>
			</view>
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
				total: -1,
				listData: []
			};
		},
		onLoad() {
			this.init()
		},
		methods: {
			init() {
				httpsRequest(config.api.getProductActivity, 'GET', {}, (data) => {
					if (data.code === '1000') {
						this.listData = data.data.list
						this.total = data.data.list.length
					}
				}, false);
			},
			onPullDownRefresh() {
				this.init()
			},
			toDetail(item){
				console.log(item)
				uni.navigateTo({
					url:`/pages/detail/detail?id=${item.childCategoryId}&pid=${item.productId}`
				})
			}
		}
	}
</script>

<style lang="less">
	.lists-page {
		width: 750rpx;
		min-height: 100vh;
		padding: 20rpx 35rpx 120rpx;
		background: #f6f6f6;

		.order-detail-box {
			width: 680rpx;
			height: 186rpx;
			background: #fff;
			margin-bottom: 20rpx;
			padding: 32rpx 20rpx;
			border-radius: 8rpx;
			display: flex;

			.left {
				width: 140rpx;
				height: 116rpx;
				margin-right: 25rpx;
				background: #F9F9F9;
				border-radius: 12rpx;
				text-align: center;
				padding-top: 14rpx;

				image {
					width: 88rpx;
					height: 88rpx;
					background-size: 100%;
					border-radius: 8rpx;
				}
			}

			.right {
				width: 144rpx;
				height: 50rpx;
				background: #2C60FF;
				color: #fff;
				text-align: center;
				border-radius: 30rpx;
				line-height: 50rpx;
				font-size: 26rpx;
				margin-top: 60rpx;
				padding: 0;
			}

			.center {
				width: 330rpx;
				height: 100rpx;

				.name {
					font-size: 32rpx;
					margin-bottom: 34rpx;
					width: 380rpx;
					line-height: 34rpx;
					overflow: hidden;
					height: 34rpx;
					white-space: nowrap;
					text-overflow: ellipsis;
					color: #333;
				}

				.price {
					font-size: 32rpx;
					color: #FE9A5B;
					padding-left: 5rpx;
					font-weight: 700;

					.del-price {
						text-decoration: line-through;
						text-align: center;
						height: 18rpx;
						font-size: 22rpx;
						color: #B7B7B7;
						padding-left: 20rpx;
					}

					.small {
						font-size: 20rpx;
					}
				}
			}


		}
	}
</style>
