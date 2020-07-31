<template>
	<view class="index-bg">
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item, index) in banner">
				<view class="swiper-item" @click="toBanner(item)" :key="index">
					<image :src="item.bannerUrl" class="img" />
				</view>
			</swiper-item>
		</swiper>
		<view class="onemenu-list" v-if="kingKongArea[0]">
			<view class="item" v-for="(item,index) in kingKongArea" @click="toBanner(item)" :key="index">
				<image :src="item.bannerUrl" class="img" />
				<view class="name font-clamp">{{item.bannerName}}</view>
			</view>
		</view>
		<view class="goods-bg" v-if="flashSaleList[0]">
			<view class="pro-list">
				<view class="title">限时抢购</view>
				<view class="go-more" @click="toMore">发现更多优惠
					<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/908d5146b6704d69a1ce9b8c581aedbd.png" class="img" />
				</view>
			</view>
			<view class="list">
				<scroll-view class="scroll-view_H" scroll-x="true" :style="scrollWidth>0 ?'width: '+scrollWidth+'rpx' : '100%'">
					<view class="scroll-view-item" v-for="(item,index) in flashSaleList" :key="index" @click="toDetail(item.childCategoryId,item.productId)">
						<image class="pro-img" :src="item.iconPath" />
						<view class="info">
							<view class="name font-clamp">{{item.productName}}</view>
							<view class="price">
								<text v-if="item.integral">{{item.integral}}积分+</text>{{item.price}}元
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="tabs-bg" v-if="goodList[0]">
			<view class="tab-title">
				<scroll-view class="scroll-view_H" scroll-x="true" :style="'width: '+(goodList.length*180) +'rpx'">
					<view v-for="(item,index) in goodList" :key="index" :class="activeTab === index ? 'item font-clamp active':'item font-clamp'"
					 @click="handleTabChange(index)">{{item.categoryName}}</view>
				</scroll-view>
			</view>
			<view class="tuijian-list">
				<view class="item" v-for="(item,index) in secondList" :key="index" @click="toDetail(item.childCategoryId)">
					<view class="right-tips" v-if="item.cornerMark">
						<image class="img" src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/4788eb5759bc4a01bde94cb4e16c42c6.png" /><text>{{item.cornerMark}}</text></view>
					<view class="img-bg">
						<image :src="item.iconPath" class="img" />
					</view>
					<view class="name font-clamp2">{{item.childCategoryName}}</view>
					<view class="price">
						<text v-if="item.integral">{{item.integral}}积分+</text>{{item.price}}元
					</view>
					<view class="del-price">{{item.faceValue}}元</view>
				</view>
			</view>
		</view>
		<view class="index-bottom">
			<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/da19211995444dd3bf2eb81f38e2a58f.png" />正品保证
			<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/e23c8c52c69247d29ad95fca78e0c9f6.png" />专享折扣
			<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/5aceeb2809594bd4a08ba3f1c05dacc4.png" />急速到账
			<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/c8cd081c2f144679b90bcbc01233b390.png" />售后无忧
		</view>
		<view class="last-gray">
			<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/83bd45caf5a2426e8a1bfc476ebf84aa.png" class="logo-s" />福禄
			<view class="line">|</view>本服务由福禄开放平台提供技术支持 </view>
	</view>
</template>

<script>
	import config from '../../config/index.js'
	import {
		httpsRequest,
		toLoginFuLu
	} from '../../utils/index.js';
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: false,
				interval: 3000,
				duration: 500,
				banner: [],
				kingKongArea: [],
				flashSaleList: [],
				goodList: [],
				secondList: [],
				scrollWidth: 0,
				activeTab: 0
			}
		},
		onLoad(option) {
			uni.startPullDownRefresh();
			this.init()
		},
		methods: {
			init() {
				// 获取banner
				this.getBanner('home')
				// 金刚区
				this.getBanner('kingKongArea')
				// 限时抢购
				this.getFlashSaleList()
				// 推荐到首页商品列表
				this.getIndexMenu()
			},
			getBanner(locationType) {
				httpsRequest(config.api.getBanner, 'GET', {
					sysTemplateId: config.templateInfoId,
					locationType,
					merTemplateId: config.merTemplateId
				}, (data) => {
					if (data.code === '1000') {
						if (locationType === 'home') {
							this.banner = data.data.list
						} else if (locationType === 'kingKongArea') {
							this.kingKongArea = data.data.list
						}
					}
				}, false);
			},
			getFlashSaleList() {
				httpsRequest(config.api.getProductActivity, 'GET', {
					count: 10
				}, (data) => {
					if (data.code === '1000') {
						this.flashSaleList = data.data.list
						this.scrollWidth = data.data.list.length * 336
					}
				}, false);
			},
			getIndexMenu() {
				httpsRequest(config.api.getIndexMenu, 'GET', {}, (data) => {
					if (data.code === '1000') {
						const list = data.data.list;
						if (list && list[0]) {
							this.goodList = list
							this.secondList = list[0].list
						}
					}
				}, false);
			},
			handleTabChange(tab) {
				this.activeTab = tab;
				this.secondList = this.goodList[`${tab}`].list
			},
			toBanner(val) {
				console.log(val, '==')
				if (val.ifSkip == 1) {
					if (val.bannerType == 2) {
						uni.navigateTo({
							url: '/pages/detail/detail?id=' + val.childCategoryId + '&pid=' + val.productId,
						});
					} else if (val.bannerType == 1) {
						uni.navigateTo({
							url: val.linkurl
						});
						// if (val.linkUrlType == 1) {
						// 	// 优惠券
						// 	// #ifdef  MP-ALIPAY
						// 	// 支付宝小程序支持优惠券跳转
						// 	my.ap.navigateToAlipayPage({
						// 		path: val.linkurl
						// 	})
						// 	// #endif
						// 	// #ifndef MP-ALIPAY
						// 	// 除支付宝小程序其他的平台暂时都不支持优惠券
						// 	uni.showToast({
						// 		title: '暂不支持优惠券',
						// 	});
						// 	// #endif
						// } else if (val.linkUrlType == 2) {
						// 	// 小程序内部链接
						// 	uni.navigateTo({
						// 		url: val.linkurl
						// 	});
						// } else if (val.linkUrlType == 3) {
						// 	// 跳转活动
						// 	uni.navigateTo({
						// 		url: val.linkurl
						// 	});
						// } else if (val.linkUrlType == 4 || val.linkUrlType == 5) {
						// 	uni.navigateToMiniProgram({
						// 		appId: val.appId,
						// 		path: val.linkurl
						// 	})
						// }
					}
				}
			},
			toMore() {
				uni.navigateTo({
					url: '/pages/list/list'
				})
			},
			toDetail(id, pid) {
				let uri = ''
				if (pid) {
					uri = `/pages/detail/detail?id=${id}&pid=${pid}`
				} else {
					uri = `/pages/detail/detail?id=${id}`
				}
				uni.navigateTo({
					url: uri
				})
			},
			onPullDownRefresh(){
				this.init()
			}
		}
	}
</script>

<style lang="less">
	.index-bg {
		width: 750rpx;
		min-height: 100vh;
		background: #f6f6f6 url('https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/9fcbea12815649da864d0f7e29e2d887.png') no-repeat;
		background-size: 100%;

		.swiper,
		.swiper-item,
		.swiper-item .img {
			width: 680rpx;
			height: 295rpx;
			border-radius: 10rpx;
			margin: 0 auto 20rpx;
		}

		.onemenu-list {
			display: flex;
			flex-wrap: wrap;
			width: 750rpx;
			min-height: 180rpx;
			background: #ffffff;
			padding: 30rpx 35rpx 0;
			margin-bottom: 20rpx;

			.item {
				width: 146rpx;
				overflow: hidden;
				text-align: left;
				margin-bottom: 34rpx;

				&:nth-child(5n) {
					width: 96rpx;
				}

				.img {
					width: 88rpx;
					height: 88rpx;
					overflow: hidden;
					background-size: 100%;
					margin-bottom: 0.1rem;
				}

				.name {
					font-size: 24rpx;
					color: #666;
				}
			}
		}

		.goods-bg {
			width: 750rpx;
			background: #fff;
			border-radius: 32rpx;
			padding: 32rpx 0 0 36rpx;
			margin-bottom: 20rpx;

			.pro-list {
				width: 705rpx;
				margin-bottom: 24rpx;
				overflow: hidden;
				display: flex;

				.title {
					height: 42rpx;
					line-height: 42rpx;
					font-size: 40rpx;
					font-weight: 500;
					color: #333;
					flex: 3;
				}

				.go-more {
					font-size: 24rpx;
					color: #999;
					padding-right: 32rpx;
					flex: 2;
					height: 42rpx;
					line-height: 42rpx;
					text-align: right;

					.img {
						width: 22rpx;
						height: 22rpx;
						background-size: 100%;
						margin-left: 7rpx;
						position: relative;
						top: -2rpx;
						opacity: 0.6;
						vertical-align: middle;
						display: inline-block;
					}
				}
			}

			.list {
				width: 705rpx;
				overflow-x: auto;
				overflow-y: hidden;
				height: 340rpx;

				.scroll-view_H {
					height: 340rpx;
				}

				.scroll-view-item {
					margin-right: 20rpx;
					width: 316rpx;
					height: 290rpx;
					float: left;
					border-radius: 16rpx;
					border: 2rpx solid #f8f8f8;
					box-sizing: border-box;

					&:last-child {
						margin-right: 0;
					}

					.pro-img {
						display: block;
						width: 312rpx;
						height: 188rpx;
						border-radius: 16rpx 16rpx 0 0;
					}
					.info{
						padding-left: 10rpx;
					}
					.name {
						white-space: pre-wrap;
						font-size: 24rpx;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
						text-align: left;
						height: 26rpx;
						line-height: 26rpx;
						width: 210rpx;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						margin-top: 8rpx;
						margin-bottom: 6rpx;
					}

					.price {
						font-size: 24rpx;
						font-weight: 500;
						height: 28rpx;
						text-align: left;
						color: #fe9a5b;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						margin-bottom: 10rpx;
						font-weight: 700;
					}
				}
			}

		}

		.tabs-bg {
			width: 750rpx;
			background: #ffffff;
			padding: 0 32rpx;

			.tab-title {
				width: 686rpx;
				overflow-x: auto;
				overflow-y: hidden;
				height: 100rpx;

				.scroll-view_H {
					height: 100rpx;
				}

				.item {
					display: inline-block;
					width: 150rpx;
					margin-right: 30rpx;
					font-size: 30rpx;
					box-sizing: border-box;
					line-height: 90rpx;
					position: relative;

					&:last-child {
						margin-right: 0;
					}

					&.active {
						color: #3162F4;
						font-size: 40rpx;
						width: 180rpx;

						&:before {
							content: '';
							position: absolute;
							width: 100%;
							height: 6rpx;
							background: #3162F4;
							top: 80rpx;
							left: 0;
						}
					}
				}
			}

			.tuijian-list {
				display: flex;
				width: 686rpx;
				flex-wrap: wrap;
				padding: 14rpx 0 24rpx;

				.item {
					width: 214rpx;
					margin-right: 20rpx;
					margin-bottom: 32rpx;
					position: relative;

					&:nth-child(3n) {
						margin-right: 0;
					}

					.img-bg {
						width: 214rpx;
						height: 172rpx;
						background: #faf9f9;
						margin-bottom: 20rpx;
						text-align: center;
						padding-top: 26rpx;
						border-radius: 16rpx;

						.img {
							width: 120rpx;
							height: 120rpx;
						}
					}

					.name {
						white-space: pre-wrap;
						font-size: 24rpx;
						font-weight: 500;
						color: #000;
						text-align: left;
						width: 210rpx;
						height: 64rpx;
						line-height: 32rpx;
						margin-top: 14rpx;
						margin-bottom: 8rpx;
						overflow: hidden;
					}

					.price {
						font-size: 26rpx;
						font-weight: 500;
						height: 30rpx;
						line-height: 30rpx;
						text-align: left;
						color: #fe9a5b;
						overflow: hidden;
						margin-bottom: 8rpx;
						font-weight: 700;

						.small {
							font-size: 20rpx;
						}
					}

					.del-price {
						text-decoration: line-through;
						text-align: left;
						height: 20rpx;
						line-height: 20rpx;
						font-size: 20rpx;
						color: #b3b3b3;
					}
				}
			}
		}

		.index-bottom {
			text-align: center;
			height: 20rpx;
			font-size: 22rpx;
			color: #666;
			margin: 40rpx 0 60rpx;

			image {
				width: 28rpx;
				height: 28rpx;
				background-size: contain;
				margin: 0 5rpx 0 30rpx;
				vertical-align: middle;
			}

			.grayfont {
				padding: 0 24rpx;
				display: inline-block;
			}
		}

		.last-gray {
			width: 750rpx;
			height: 20rpx;
			font-size: 20rpx;
			font-weight: 400;
			text-align: center;
			color: rgba(194, 194, 194, 1);
			padding-bottom: 48rpx;

			.line {
				display: inline;
				padding: 0 18rpx;
			}
		}
	}
</style>