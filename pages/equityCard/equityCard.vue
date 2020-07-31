<template>
	<view class="home-bg">
		<image :src="equityCardInfo.kmPath" mode="widthFix" />
		<view class="advantage">
			<text>
				<image mode="scaleToFill" src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/95451495134c423fb99e2aec790d0026.png" />正品保证</text>
			<text>
				<image mode="scaleToFill" src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/f65cd855c49d44cdbade05287b640c53.png" />专享折扣</text>
			<text>
				<image mode="scaleToFill" src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/f6e335f4b9914f1595eaf7912f06b81b.png" />急速到账</text>
			<text>
				<image mode="scaleToFill" src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/fd8bf5372ae24a198d3c7a5926f158f4.png" />售后无忧</text>
		</view>
		<image v-if="equityCardInfo.categoryListCache && equityCardInfo.categoryListCache[0]" v-for="(item,index) in equityCardInfo.categoryListCache"
		 :key="item.id" mode="widthFix" :src="item.categoryImage" />
		<image :src="equityCardInfo.propagatePath" mode="widthFix" />
		<view class="buy-area">
			<view class="pro-btn-bg">
				<view class="price-bg">限时特惠<text class="price">¥{{equityCardInfo.salesPrice}}</text><text class="small">商品总价值 ¥{{equityCardInfo.sumFaceValue}}</text></view>
				<button @click="toBuy" class="buy-btn">立即抢购</button>
			</view>
		</view>
		<!-- 弹窗 -->
		<view class="cover-bg" v-if="showPro">
			<view v-if="showPro" class="pro-bg">
				<view class="close-icon" @click="closePro"></view>
				<view class="pro-con">
					<view v-if="equityCardInfo && equityCardInfo.categoryListCache && equityCardInfo.categoryListCache[0]" v-for="(item,index) in equityCardInfo.categoryListCache"
					 :key="item.id">
						<view class="title">{{item.cardCategoryName}}{{item.productListCache.length == 1 ? '' : `（${item.ruleDescribe}）`}}</view>
						<view class="con">
							<view v-for="(v,i) in item.productListCache" :key="v.id" @click="chosePro(index,i,v.noChange)" :class="v.active ? 'item active' : 'item'">{{v.proTitle}}</view>
						</view>
					</view>
				</view>
				<view class="p-foot">
					<view class="price-bg">限时特惠<text class="price">¥{{equityCardInfo.salesPrice}}</text><text class="small">商品总价值 ¥{{equityCardInfo.sumFaceValue}}</text></view>
					<button @click="toPay" class="buy-btn">立即付款</button>
				</view>
			</view>
		</view>
		<view class="my-btn" @click="toMyCard">我的卡包</view>
	</view>
</template>

<script>
	import config from '../../config/index.js'
	import {
		httpsRequest,
		toLoginFuLu
	} from '../../utils/index.js';
	import moment from '../../common/js/moment.js'
	import _ from 'lodash';
	import cloneDeep from 'lodash/cloneDeep';
	export default {
		data() {
			return {
				equityCardInfo: {},
				showPro: false
			}
		},
		onLoad(option) {
			let id = option.equityCardId;
			if (!id) {
				id = uni.getStorageSync('equityCardId')
			}
			this.equityCardId = id
			uni.setStorageSync('equityCardId', id)
			this.getCardInfo()
		},
		methods: {
			getCardInfo() {
				httpsRequest(config.api.getEquityCardInfo, 'GET', {
					equityCardId: this.equityCardId
				}, (data) => {
					if (data.code === '1000') {
						this.equityCardInfo = data.data
						let info = this.equityCardInfo
						// 商品选中处理
						if (info.categoryListCache && info.categoryListCache[0]) {
							info.categoryListCache.map(v => {
								if (v.productListCache && v.productListCache[0]) {
									if (v.productListCache.length === v.ruleCount) {
										v.productListCache.map(item => {
											item.active = true;
											item.noChange = true;
										})
									}
								}
							})
						}
						// 时间处理 
						if (moment(info.endTime).format('X') < moment().format('X')) {
							this.noBuy = true
						}
						this.equityCardInfo = info
					}
				}, false);
			},
			toBuy() {
				this.showPro = true
			},
			closePro() {
				this.showPro = false
			},
			toMyCard() {
				try {
					let userInfo = uni.getStorageSync('userInfo');
					if (userInfo) {
						uni.navigateTo({
							url: '/pages/myEquityCard/myEquityCard'
						})
					} else {
						toLoginFuLu().then(res => {
							this.toMyCard()
						})
					}
				} catch (e) {
					console.log(e)
				}
			},
			toPay(post) {
				const {
					equityCardInfo
				} = this;
				console.log(equityCardInfo, 'equityCardInfo')
				let flag = false
				equityCardInfo.categoryListCache.map(v => {
					v.num = 0;
					v.productListCache.map(data => {
						if (data.active) {
							v.num += 1;
						}
					})
					if (v.num !== v.ruleCount) {
						flag = true;
					}
				})
				if (flag) {
					uni.showToast({
						title: '请按规则选择商品'
					});
					return;
				}
				try {
					let userInfo = uni.getStorageSync('userInfo');
					if (userInfo) {
						console.log('登录')
						// purchaseEquityCard
						let post = cloneDeep(equityCardInfo)
						post.categoryListCache.map((v, i) => {
							v.productListCache
							v.productListCache = _.filter(v.productListCache, function(item) {
								return item.active == true;
							});
						})
						httpsRequest(config.api.purchaseEquityCard, 'POST', post, (data) => {
							if (data.code == '1000') {
								uni.navigateTo({
									url: `/pages/equityCardPay/equityCardPay?cid=${data.data}`,
								});
							} else if (data.code == '1013' || data.code == '1014' || data.code == '1015') {
								if (post !== 'once') {
									return this.toPay('once');
								}
							}
						}, true);
					} else {
						toLoginFuLu().then(res => {
							this.toPay()
						})
					}
				} catch (e) {
					console.log(e)
				}
			},
			chosePro(index, i, change) {
				if (!!change) {
					return;
				}
				const info = {
					...this.equityCardInfo
				};
				let num = 0;
				info.categoryListCache[index].productListCache.map(v => {
					if (v.active) {
						num += 1
					}
				})
				if (num === info.categoryListCache[index].ruleCount && !info.categoryListCache[index].productListCache[i].active) {
					if (info.categoryListCache[index].ruleCount === 1) {
						info.categoryListCache[index].productListCache.map((v, m) => {
							v.active = false;
							if (m === i) {
								v.active = true;
							}
						})
					} else {
						uni.showToast({
							title: `${info.categoryListCache[index].cardCategoryName}是${info.categoryListCache[index].ruleDescribe}`
						});
					}
				} else {
					info.categoryListCache[index].productListCache[i].active = !info.categoryListCache[index].productListCache[i].active;
				}
				this.equityCardInfo = info
			}
		}
	}
</script>

<style lang="less">
	.home-bg {
		width: 750rpx;
		min-height: 100vh;
		box-sizing: border-box;
		background: #262525;
		padding: 24rpx 0 100rpx;

		&>image {
			width: 750rpx;
			background-size: 100%;
			margin-bottom: 34rpx;
		}

		.advantage {
			padding: 0 80rpx;
			display: flex;
			justify-content: space-between;
			font-size: 20rpx;
			color: rgba(226, 193, 134, .8);
			vertical-align: middle;
			line-height: 26rpx;
			margin-bottom: 34rpx;
			
			image {
				width: 22rpx;
				height: 22rpx;
				background-size: 100%;
				vertical-align: middle;
				margin-right: 5rpx;
				position: relative;
				top:-4rpx;
			}
		}

		.buy-area {
			background: transparent;
			position: fixed;
			z-index: 2;
			left: 0;
			bottom: 0;
			right: 0;
		}

		.p-foot,
		.pro-btn-bg {
			width: 678rpx;
			margin: 16rpx auto;
			height: 100rpx;
			background: url('https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/f0841a1a86fb4713ac1ae9381cccf423.png') no-repeat;
			background-size: 100%;
			border-radius: 61rpx;
			overflow: hidden;
			box-shadow: 0 04rpx 12rpx 0 rgba(0, 0, 0, 0.5), 0 .04rpx .28rpx 0 rgba(0, 0, 0, 0.5);

			&.pro-btn-bg {}

			.price-bg {
				float: left;
				display: inline-block;
				padding-left: 90rpx;
				padding-top: 10rpx;
				color: #331308;
				font-size: 28rpx;
				font-weight: 700;

				.price {
					font-size: 36rpx;
					color: #CE1C33;
					padding-left: 5rpx;
				}

				.small {
					color: rgba(38, 37, 37, .4);
					font-size: 24rpx;
					text-decoration: line-through;
					display: block;
					margin-top: 5rpx;
					font-weight: 700;
				}

				&.no-buy {
					background: #DBC59F;
					color: #331308;
					text-align: center;
					display: block;
					height: 100rpx;
					line-height: 100rpx;
					width: 100%;
					padding: 0;
					font-weight: 700;
				}
			}

			.buy-btn {
				background: transparent;
				border: none;
				float: right;
				width: 254rpx;
				height: 100rpx;
				line-height: 100rpx;
				border-radius: 53rpx;
				font-size: 36rpx;
				color: #fff;
				font-weight: 700;

				&:disabled {
					background: rgba(228, 38, 63, .5);
				}
			}
		}

		.cover-bg {
			position: fixed;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			z-index: 5;
			background: rgba(0, 0, 0, .6);
		}

		.pro-bg {
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;
			min-height: 500rpx;
			z-index: 5;
			border-radius: 40rpx 40rpx 0 0;
			background: #FFF;
			padding: 60rpx 0 140rpx 0;

			.pro-con {
				overflow-y: auto;
				max-height: 800rpx;
				padding: 0 36rpx;
			}

			.close-icon {
				width: 50rpx;
				height: 50rpx;
				position: absolute;
				right: 20rpx;
				top: 20rpx;
				background: url('https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/1878a13574b5413bb57117aca5d0d6c4.png') no-repeat;
				background-size: contain;
			}

			.title {
				line-height: 48rpx;
				margin-bottom: 16rpx;
				color: #222;
				font-size: 28rpx;
			}

			.con {
				display: flex;
				flex-wrap: wrap;
				margin-bottom: 16rpx;

				.item {
					min-width: 100rpx;
					margin: 0 24rpx 24rpx 0;
					border: 2rpx solid #F4F4F4;
					background: #F4F4F4;
					padding: 0 12rpx;
					line-height: 30rpx;
					height: 80rpx;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					font-weight: 700;
					border-radius: 16rpx;
					font-size: 26rpx;
					color: #666;

					&.active {
						background: #FFFAF7;
						color: #471D00;
						border-color: #471D00;
					}
				}
			}

			.p-foot {
				position: absolute;
				bottom: 0;
				left: 36rpx;
			}
		}

		.my-btn {
			width: 52rpx;
			height: 136rpx;
			line-height: 26rpx;
			background: linear-gradient(180deg, rgba(253, 208, 128, 1) 0%, rgba(200, 151, 66, 1) 100%);
			box-shadow: 0 8rpx 16rpx 0 rgba(0, 0, 0, 0.5), 0 4rpx 28rpx 0 rgba(0, 0, 0, 0.5);
			border-radius: 6rpx 0 0 6rpx;
			position: fixed;
			bottom: 142rpx;
			right: 0;
			padding-left: 14rpx;
			padding-top: 18rpx;
			font-size: 24rpx;
			color: #5B3F0C;
			font-weight: 700;
		}
	}
</style>
