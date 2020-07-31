<template>
	<view class="pro-bg">
		<view class="zc-con">
			<view class="info">
				<view class="name font-clamp">{{detail.productName}}</view>
				<view class="price"><text>价值</text>¥ {{detail.faceValue}}</view>
			</view>
			<view v-if="detail.isUse" class="product-modal">
				<form @submit="formSubmit">
					<view v-if="inputs && inputs[0]" v-for="item in inputs">
						<view class="page-section">
							<input :name="item.id" :placeholder="`请输入${item.name}`" class="input-bg" placeholder-class="placeholderClass" />
						</view>
						<view class="tips-txt" v-if="item.id === 'ChargeAccount'">温馨提示：虚拟商品为特殊商品，充值成功，概不退换</view>
					</view>
					<view v-if="tempData.isServiceArea">
						<!-- 充值区 -->
						<view class="page-section" v-if="chargeRegionList[0]">
							<picker @change="changeRegion" :value="postIndex.regionIndex" :range="chargeRegionList" name="ChargeGameRegion">
								<view class="picker">
									<view class="left">请选择充值区</view>
									<view class="right">
										{{chargeRegionList[postIndex.regionIndex] || ''}}
										<image class="row-arrow" src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/ef0dcaef2d804946afb3bc3e85d09d0a.png" />
									</view>
								</view>
							</picker>
						</view>
						<!-- 充值服 -->
						<view class="page-section" v-if="chargeServerList[0]">
							<picker @change="changeServer" :value="postIndex.serverIndex" :range="chargeServerList" name="ChargeGameSrv">
								<view class="picker">
									<view class="left">请选择充值服</view>
									<view class="right">
										{{chargeServerList[postIndex.serverIndex] || ''}}
										<image class="row-arrow" src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/ef0dcaef2d804946afb3bc3e85d09d0a.png" />
									</view>
								</view>
							</picker>
						</view>
						<!-- 充值类型 -->
						<view class="page-section" v-if="chargeTypeList[0]">
							<picker @change="changeType" :value="postIndex.typeIndex" :range="chargeTypeList" name="ChargeType">
								<view class="picker">
									<view class="left">请选择游戏类型</view>
									<view class="right">
										{{chargeTypeList[postIndex.typeIndex] || ''}}
										<image class="row-arrow" src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/ef0dcaef2d804946afb3bc3e85d09d0a.png" />
									</view>
								</view>
							</picker>
						</view>
					</view>
					<view class="txt-orange" v-if="!(!orderDetail.orderStatus || orderDetail.orderStatus === 51 || orderDetail.orderStatus === 61)">请稍后刷新，若15分钟后还未兑换成功，请联系客服处理</view>
					<view v-if="isLoading || !(!orderDetail.orderStatus || orderDetail.orderStatus === 51 || orderDetail.orderStatus === 61)">
						<button class="pay-btn" :loading="true" :disabled="true">兑换中...</button>
					</view>
					<button class="pay-btn" formType="submit" v-else>立即兑换</button>
				</form>
			</view>
			<view v-if="!detail.isUse && detail.chargeAccount" class="product-modal">
				<view class="charge-account">充值账号：{{detail.chargeAccount}}</view>
				<view class="tips-txt">温馨提示：虚拟商品为特殊商品，充值成功，概不退换</view>
			</view>
		</view>
		<view class="pro-txt" v-if="detail.proDetail">
			<rich-text :nodes="detail.proDetail"></rich-text>
		</view>
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
				detail: {},
				inputs: [],
				chargeGameList: [],
				chargeRegionList: [],
				chargeServerList: [],
				chargeTypeList: [],
				tempData: {},
				postIndex: {
					regionIndex: null,
					serverIndex: null,
					typeIndex: null,
				},
				orderDetail: {}
			}
		},
		onLoad(option) {
			this.userEquityCardProductId = option.userEquityCardProductId
			this.userEquityCardNo = option.userEquityCardNo
		},
		onShow() {
			this.init()
		},
		methods: {
			init() {
				const {
					userEquityCardProductId,
					userEquityCardNo
				} = this;
				httpsRequest(config.api.getUserEquityCardProductDetail, 'GET', {
					userEquityCardProductId,
					userEquityCardNo
				}, (data) => {
					if (data.code === '1000') {
						this.detail = data.data
						this.getGameProTemp()
					}
				}, true);
			},
			getGameProTemp() {
				const {
					detail
				} = this
				// 获取商品模板
				httpsRequest(config.api.getGameProTemp, 'GET', {
					productTemplateId: detail.templateId
				}, (data) => {
					if (data.code == '1000') {
						this.tempData = data.data
						this.inputs = data.data.elementInfo.inputs
						const {
							isServiceArea
						} = data.data;
						const game = data.data.gameTempaltePreviewList;
						if (isServiceArea && game) {
							this.gameList = game;
							const gList = game[0].gameList
							let region = [],
								server = [],
								type = [];
							if (gList.ChargeRegion && gList.ChargeRegion[0]) {
								gList.ChargeRegion.map(v => {
									region.push(v.name)
								})
							}
							if (gList.ChargeServer && gList.ChargeServer[0]) {
								gList.ChargeServer.map(v => {
									server.push(v.name)
								})
							}
							if (gList.ChargeType && gList.ChargeType[0]) {
								gList.ChargeType.map(v => {
									type.push(v.name)
								})
							}
							this.chargeRegionList = region
							this.chargeServerList = server
							this.chargeTypeList = type
							this.ChargeRegion = gList.ChargeRegion || []
							this.ChargeServer = gList.ChargeServer || []
							this.ChargeType = gList.ChargeType || []
						} else {
							this.tempData = {}
						}
					}
				}, false);
			},
			getOrderDetail(oid) {
				this.loading = true
				httpsRequest(config.api.getOrderDetail, 'GET', {
					orderNo: oid
				}, (data) => {
					this.loading = false
					if (data.code === '1000') {
						this.orderDetail = data.data
						if (data.data.orderStatus === 61) {
							uni.showToast({
								content: '充值失败，请重新充值'
							})
						} else if (data.data.orderStatus === 51) {
							this.init()
						} else {
							//  当订单状态不是成功或者失败的时候继续调用接口
							const _this = this
							setTimeout(() => {
								_this.getOrderDetail(oid);
							}, 3000)
						}
					}
				}, true);
			},
			// 区
			changeRegion(e) {
				const val = e.detail.value;
				const {
					ChargeRegion,
					postIndex
				} = this;
				postIndex.regionIndex = val;
				const region = ChargeRegion[val];
				this.postIndex = postIndex
				if (region.ChargeServer && region.ChargeServer[0]) {
					let server = [];
					region.ChargeServer.map(v => {
						server.push(v.name)
					})
					this.chargeServerList = server
					this.ChargeServer = region.ChargeServer
				}
				if (region.ChargeType && region.ChargeType[0]) {
					let type = [];
					region.ChargeType.map(v => {
						type.push(v.name)
					})
					this.chargeTypeList = type
					this.ChargeType = region.ChargeType
				}
			},
			// 服
			changeServer(e) {
				const val = e.detail.value;
				const {
					ChargeServer,
					postIndex
				} = this;
				postIndex.serverIndex = val;
				this.postIndex = postIndex
				const server = ChargeServer[val];
				if (server.ChargeType && server.ChargeType[0]) {
					let type = [];
					server.ChargeType.map(v => {
						type.push(v.name)
					})
					this.chargeTypeList = type
					this.ChargeType = server.ChargeType
				}
			},
			// 类型
			changeType(e) {
				const val = e.detail.value;
				const {
					postIndex
				} = this;
				postIndex.typeIndex = val;
				this.postIndex = postIndex
			},
			formSubmit(e) {
				const val = e.detail.value;
				if (!val.ChargeAccount) {
					return uni.showToast({
						content: '请输入充值账号',
					});
				}
				if ('ContactType' in val) {
					// 手机
					if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(val.ContactType)) {
						return uni.showToast({
							content: '手机号格式错误',
						});
					}
				}
				if ('ContactQQ' in val) {
					// qq
					if (!/^[1-9][0-9]{4,11}$/.test(val.ContactQQ)) {
						return uni.showToast({
							content: 'qq格式错误',
						});
					}
				}
				if ('ChargePWD' in val) {
					// 密码
					if (!/^[a-zA-Z0-9_-]{4,16}$/.test(val.ChargePWD)) {
						return uni.showToast({
							content: '密码由4到16位（字母，数字，下划线，减号）组成',
						});
					}
				}
				if ('ChargeWeiXin' in val) {
					// 微信
					if (!/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(val.ChargeWeiXin)) {
						return uni.showToast({
							content: '微信格式错误',
						});
					}
				}
				if ('ChargeContacts' in val) {
					// 联系人
					if (!val.ChargeContacts) {
						return uni.showToast({
							content: '联系人不能为空',
						});
					}
				}
				if ('ChargeAddress' in val) {
					// 联系地址
					if (!val.ChargeAddress) {
						return uni.showToast({
							content: '联系地址不能为空',
						});
					}
				}
				if ('ChargeGame' in val) {
					// 充值游戏
					if (!val.ChargeGame && val.ChargeGame != 0) {
						return uni.showToast({
							content: '充值游戏不能为空',
						});
					}
				}
				if ('ChargeRegion' in val) {
					// 区
					if (!val.ChargeRegion && val.ChargeRegion != 0) {
						return uni.showToast({
							content: '充值区不能为空',
						});
					}
				}
				if ('ChargeServer' in val) {
					// 服
					if (!val.ChargeServer && val.ChargeServer != 0) {
						return uni.showToast({
							content: '充值服不能为空',
						});
					}
				}
				if ('ChargeType' in val) {
					// 充值类型
					if (!val.ChargeType && val.ChargeType != 0) {
						return uni.showToast({
							content: '充值类型不能为空',
						});
					}
				}
				console.log(val, '==')
				this.zcPost = val
				const _this = this;
				uni.confirm({
					title: '充值确认',
					content: `请确认您的充值账号为${val.ChargeAccount}`,
					confirmButtonText: '确认充值',
					cancelButtonText: '关闭',
					success: (result) => {
						_this.recharge(val)
					},
				});
			},
			recharge(type) {
				this.isLoading = true
				const {
					zcPost,
					userEquityCardProductId,
					userEquityCardNo,
					tempData,
					postIndex,
					gameList,
					ChargeRegionList,
					ChargeServerList,
					ChargeTypeList,
				} = this;
				let post = zcPost
				if (tempData.isServiceArea) {
					post = {
						...post,
						contactTel: zcPost.ContactType,
						contactQq: zcPost.ContactQQ,
						gameList: gameList[0].ChargeGame,
						ChargeGameRegion: ChargeRegionList && ChargeRegionList[0] ? ChargeRegionList[postIndex.regionIndex] &&
							ChargeRegionList[postIndex.regionIndex].name : null,
						ChargeGameSrv: ChargeServerList && ChargeServerList[0] ? ChargeServerList[postIndex.serverIndex] &&
							ChargeServerList[postIndex.serverIndex].name : null,
						ChargeType: ChargeTypeList && ChargeTypeList[0] ? ChargeTypeList[postIndex.typeIndex] && ChargeTypeList[
							postIndex.typeIndex].name : null,

					}
				}
				httpsRequest(config.api.equiCardSendOrder, 'POST', {
					equityCardProductId: userEquityCardProductId,
					userEquityCardNo,
					...post
				}, (data) => {
					this.isLoading = false
					if (data.code === '1000') {
						this.getOrderDetail(data.data)
					} else if (data.code === '1013' || data.code === '1014' || data.code === '1015') {
						toLoginFuLu().then(res => {
							if (type !== 'once') {
								return this.recharge('once');
							}
						})
					}
				}, true);
			}
		}
	}
</script>

<style lang="less">
	.pro-bg {
		width: 750rpx;
		background: #171717;
		min-height: 100vh;
		padding: 24rpx;

		.zc-con {
			background: linear-gradient(180deg, rgba(52, 51, 51, 1) 0%, rgba(36, 36, 36, 1) 100%);
			box-shadow: 0 40rpx 28rpx 0 rgba(0, 0, 0, 0.5);
			border-radius: 8rpx;
			padding: 32rpx 20rpx 48rpx;
			margin-bottom: 20rpx;

			.info {
				display: flex;
				margin-bottom: 36rpx;

				.name {
					width: 500rpx;
					color: #F5D090;
					font-size: 32rpx;
					line-height: 48rpx;
					font-weight: 700;
				}

				.price {
					width: 162rpx;
					color: #F5D090;
					font-size: 32rpx;
					line-height: 48rpx;
					text-align: right;
					font-weight: 700;

					text {
						font-size: 24rpx;
						padding-right: 12rpx;
						color: rgba(245, 208, 144, .6);
					}
				}
			}

			.product-modal {
				padding-top: 24rpx;
				font-size: 32rpx;
				color: #F5D090;
				line-height: 48rpx;

				.tips-txt {
					color: rgba(245, 208, 144, .6);
					font-size: 24rpx;
					line-height: 40rpx;
					margin-bottom: 20rpx;
				}

				.charge-account {
					margin-bottom: 24rpx;
				}

				.txt-orange {
					color: #FF8C00;
					font-size: 24rpx;
				}

				.page-section {
					margin-bottom: 20rpx;
					height: 96rpx;
					background: transparent;
					border: 3rpx solid #7E6234;
					width: 662rpx;
					border-radius: 8rpx;
					box-sizing: border-box;

					input {
						height: 88rpx;
						background: transparent;
						line-height: 88rpx;
						width: 658rpx;
						text-align: left;
						padding: 0 25rpx;
						box-sizing: border-box;
						border-radius: 5rpx;
						color: #F5D090;
					}

					.placeholderClass {
						font-size: 32rpx;
						color: rgba(245, 208, 144, .6);
					}

					.picker {
						height: 88rpx;
						line-height: 84rpx;
						padding: 0 25rpx;
						width: 686rpx;
						box-sizing: border-box;
						display: flex;
						font-size: 34rpx;
						position: relative;

						.left {
							flex: 1;
							font-size: 32rpx;
							color: rgba(245, 208, 144, .6);
						}

						.right {
							flex: 1;
							font-size: 32rpx;
							color: rgba(245, 208, 144, .6);
							padding-right: 70rpx;
							text-align: right;

							.row-arrow {
								width: 40rpx;
								height: 40rpx;
								position: absolute;
								top: 25rpx;
								right: 50rpx;
							}
						}
					}
				}

				.pay-btn {
					width: 100%;
					height: 96rpx;
					line-height: 96rpx;
					background: linear-gradient(180deg, rgba(253, 226, 164, 1) 0%, rgba(178, 138, 75, 1) 100%);
					border-radius: 48rpx;
					font-size: 36rpx;
					color: #331308;
					font-weight: 700;
					border: none;
					margin-top: 32rpx;
				}
			}
		}

		.pro-txt {
			min-height: 200rpx;
			padding: 32rpx 20rpx;
			color: #8E7C5C;
			font-size: 24rpx;
			line-height: 40rpx;
			background: linear-gradient(180deg, rgba(52, 51, 51, 1) 0%, rgba(36, 36, 36, 1) 100%);
			box-shadow: 0 4rpx 28rpx 0 rgba(0, 0, 0, 0.5);
			border-radius: 8rpx;
		}
	}
</style>
