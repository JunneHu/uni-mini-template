<template>
	<view class="lists-page">
		<view class="topTabSwiper">
			<view class="tab" @click="checkCurrent(0)">
				<text :class='postData.orderStatus == 0 ? "tabBorer" : ""'>全部</text>
			</view>
			<view class="tab" @click="checkCurrent(1)">
				<text :class='postData.orderStatus == 1 ? "tabBorer" : ""'>待付款</text>
			</view>
			<view class="tab" @click="checkCurrent(2)">
				<text :class='postData.orderStatus == 2 ? "tabBorer" : ""'>充值成功</text>
			</view>
			<view class="tab" @click="checkCurrent(3)">
				<text :class='postData.orderStatus == 3 ? "tabBorer" : ""'>充值失败</text>
			</view>
		</view>
		<scroll-view v-if="total>0" scroll-y="true" @scrolltolower="lower" class="list-scroll">
			<view class="order-list">
				<view class="order-detail-box" v-for="item in listData">
					<view @click="toOrderStatus(item)">
						<view class="box-top">
							<text class="card-time box-left">{{item.orderTime}} </text>
							<text class="card-status box-right green-font" v-if="item.orderStatus == 51 || item.orderStatus == 71">{{item.orderStatusText}}</text>
							<text class="card-status box-right red-font" v-else-if="item.orderStatus == 61">{{item.orderStatusText}}</text>
							<text class="card-status box-right" v-else-if="item.orderStatus == 15">{{item.orderStatusText}} </text>
							<text class="card-status box-right orange-font" v-else>{{item.orderStatusText}} </text>
						</view>
						<view class="box-bottom">
							<image :src="item.productImg" class="logo" />
							<text class="order-info">
								<text class="name">{{item.productName}} </text>
								<text class="price">¥{{item.payPrice}} </text>
							</text>
							<text class="order-right">
								<text class="r-jifen" v-if="item.integral"> <text class="tuikuan" v-if="item.pointState == 1">退</text>{{item.integral}}积分</text>
							</text>
						</view>
					</view>
					<view class="btn-bg">
						<button class="r-btn" v-if="item.orderStatus == 11" @click="toPay(item)">去支付</button>
						<button class="r-btn" v-if="item.orderStatus == 15" @click="toDetail(item)">继续下单</button>
						<button class="r-btn" v-if="item.productType == 3 && item.orderStatus == 51" @click="toCard(item)">使用卡券</button>
						<button class="r-btn" v-if="item.orderStatus == 71" @click="toDetail(item)">重新下单</button>
						<button class="r-btn" v-if="item.orderStatus == 51" @click="toDetail(item)">再来一单</button>
					</view>
				</view>
				<view class="no-more" v-if="noMoreData">已经到底啦～</view>
			</view>
		</scroll-view>
		<view class="nothing-bg" v-if="total==0">
			<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/053d5e90a0d141c4a4bcd81c9cd43fd2.png" class="nothing-main" />
			<view class="nothing-text">暂无数据</view>
			<button size="default" type="primary" class="toIndex" @click="toIndex">去首页逛逛</button>
		</view>
	</view>
</template>

<script>
	import config from '../../config/index.js'
	import {
		httpsRequest, toLoginFuLu
	} from '../../utils/index.js';
	import moment from '../../common/js/moment.js'
	export default {
		data() {
			return {
				postData: {
					pageIndex: 1,
					pageSize: 10,
					orderStatus: 0
				},
				noMoreData: false,
				listData: [],
				total: -1,
			};
		},
		onLoad() {
			this.init();
		},
		methods: {
			init() {
				const {
					postData
				} = this;
				postData.pageIndex = 1;
				this.postData = postData
				this.getList()
			},
			getList() {
				this.noMoreData = false
				const {
					postData
				} = this;
				// 获取商品列表
				httpsRequest(config.api.getOrderList, 'GET', postData, (data) => {
					if (data.code === '1000') {
						if (data.data.current === data.data.pageTotal) {
							this.noMoreData = true
						} else {
							this.noMoreData = false
						}
						let list = [...this.listData, ...data.data.list]
						this.listData = list;
						this.total = data.data.total
						this.pageTotal = data.data.pageTotal
					} else if (data.code == '1013' || data.code == '1014' || data.code == '1015') {
						toLoginFuLu().then(res => {
							if (type !== 'once') {
								this.getList('once')
							}
						})
					}
				}, true, () => {
					this.isErrorRequest = true
				});
			},
			lower() {
				const {
					postData,
					pageTotal
				} = this;
				if (pageTotal > postData.pageIndex) {
					postData.pageIndex += 1;
					this.postData = postData;
					this.getList()
				}
			},
			checkCurrent(val) {
				let {
					postData
				} = this;
				let tab = postData.orderStatus
				if (val === tab) {
					return false
				}
				postData.pageIndex = 1;
				postData.orderStatus = val;
				this.postData = postData
				this.listData = []
				this.getList()
			},
			onPullDownRefresh() {
				const {
					postData
				} = this;
				postData.pageIndex = 1;
				this.postData = postData;
				this.listData = [];
				this.isErrorRequest = false;
				this.total = -1
				this.init()
			},
			toIndex() {
				uni.reLaunch({
					url: '/pages/index/index'
				})
			},
			toOrderStatus(item) {
				uni.navigateTo({
					url: `/pages/orderStatus/orderStatus?oid=${item.orderNo}`
				})
			},
			toCard(val) {
				uni.navigateTo({
					url: `/pages/getCard/getCard?oid=${val.orderNo}`,
				});
			},
			toPay(val) {
				const now = moment(moment().format()).valueOf(); // 当前时间
				const oTime = moment(val.orderTime).valueOf(); // 订单时间
				const time = ((now - oTime) / 1000).toFixed(0);
				if (time > 1200) {
					uni.showToast({
						icon: 'none',
						content: '订单已关闭！',
					});
					this.onPullDownRefresh();
					return;
				} else {
					uni.navigateTo({
						url: `/pages/sureOrder/sureOrder?oid=${val.orderNo}`,
					});
				}
			},
			toDetail(val) {
				uni.navigateTo({
					url: `/pages/detail/detail?id=${val.childCategoryId}&pid=${val.productId}`,
				});
			},
		}
	}
</script>

<style lang="less">
	.lists-page {
		width: 750rpx;
		min-height: 100vh;
		background: #f6f6f6;

		.topTabSwiper {
			zoom: 1;
			height: 110rpx;

			&:after {
				content: "";
				clear: both;
				display: block;
			}

			.tab {
				float: left;
				text-align: center;
				padding: 30rpx;
				color: #666;

				.tabBorer {
					border-bottom: 4rpx solid #133523;
					color: #133523;
					padding-bottom: 20rpx;
				}
			}
		}

		.list-scroll {
			width: 750rpx;
			height: calc(100vh - 110rpx);

			.order-list {
				width: 750rpx;
				padding: 0 24rpx 32rpx;
				box-sizing: border-box;
				background: #F5F5F5;
				min-height: calc(100vh - 110rpx);

				.order-detail-box {
					width: 702rpx;
					margin-bottom: 20rpx;
					background: #fff;
					padding: 33rpx 25rpx;
					overflow: hidden;
					box-sizing: border-box;
					position: relative;
					border-radius: 8rpx;

					.box-top {
						overflow: hidden;
						margin-bottom: 28rpx;

						.box-left {
							float: left;
						}

						.box-right {
							float: right;
						}

						.card-time {
							font-size: 24rpx;
							font-weight: 400;
							color: rgba(204, 204, 204, 1);
						}

						.card-status {
							font-size: 24rpx;
						}

						.green-font {
							color: #72C472;
						}

						.orange-font {
							color: #FF801A;
						}

						.red-font {
							color: #FE0101;
						}
					}

					.box-bottom {
						display: flex;

						.logo {
							margin-right: 26rpx;
							width: 80rpx;
							height: 80rpx;
							border-radius: 8rpx;
						}

						.order-info {
							width: 330rpx;
							font-size: 26rpx;
							font-weight: 400;
							color: rgba(51, 51, 51, 1);
							line-height: 26rpx;

							.name {
								display: block;
								margin-bottom: 25rpx;
								font-size: 26rpx;
								height: 56rpx;
								line-height: 28rpx;
								overflow: hidden;
								height: 28rpx;
								white-space: nowrap;
								text-overflow: ellipsis;
							}

							.price {
								font-size: 26rpx;
							}
						}

						.order-right {
							width: 200rpx;
							// background: url(/images/right.png) top right no-repeat;
							background-size: 12%;
							text-align: right;
							padding-right: 30rpx;
							font-size: 26rpx;
						}

					}

					.btn-bg {
						text-align: right;
						position: absolute;
						bottom: 30rpx;
						right: 25rpx;

						.r-btn {
							display: inline-block;
							padding: 0 10rpx;
							height: 36rpx;
							border-radius: 17rpx;
							font-size: 20rpx;
							color: #286AFF;
							line-height: 32rpx;
							border: 2rpx solid #286AFF;
							margin-left: 16rpx;

							&.btn-gray {
								color: #666;
								border-color: #EDEDED;
							}
						}

						.r-jifen {
							position: relative;
							top: -3rpx;

							.tuikuan {
								display: inline-block;
								width: 26rpx;
								height: 26rpx;
								text-align: center;
								line-height: 26rpx;
								font-size: 18rpx;
								color: #fff;
								background: #4F4F4F;
								border-radius: 8rpx;
								margin-right: 13rpx;
								vertical-align: middle;
								position: relative;
								top: -2rpx;
							}
						}

					}
				}
			}

			.no-more {
				width: 750rpx;
				height: 80rpx;
				line-height: 80rpx;
				font-size: 24rpx;
				color: #666;
				text-align: center;
			}
		}
	}
</style>
