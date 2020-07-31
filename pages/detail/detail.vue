<template>
	<view class="detail-bg">
		<form @submit="formSubmit">
			<view class="goods-img">
				<image :src="goodsDetail.productImage || secondClass.iconPath" class="img" />
			</view>
			<view class="goods-info">
				<view class="blue-bg" v-if="!goodsDetail.isActivity">
					<view class="g-bg">
						<view class="name">{{goodsDetail.productName}} </view>
						<view class="time">
							{{goodsDetail.productSellingPoint || ''}}
						</view>
						<view class="g-price">
							<view class="p-info">
								<view class="p-num">
									<view class="price-txt">{{goodsDetail.price}}<text class="small">元</text> </view>
									<text v-if="goodsDetail.integral">+</text>
									<view class="price-txt" v-if="goodsDetail.integral">{{goodsDetail.integral}}<text class="small">积分</text></view>
									<view class="gray-del">{{goodsDetail.faceValue || 0}}元 </view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="blue-bg" v-else>
					<view class="g-bg">
						<view class="d-info">
							<view class="left2">
								<view class="name">{{goodsDetail.productName}} </view>
							</view>
							<view class="right2">
								<view class="tips-bg" v-if="goodsDetail.activityLabel">{{goodsDetail.activityLabel}}</view>
							</view>
						</view>
						<view class="d-info">
							<view class="left">
								<view class="time">
									{{goodsDetail.productSellingPoint || ''}}
								</view>
							</view>
							<view class="right">
								<view class="last-time" v-if="goodsDetail.activityState == 0">{{goodsDetail.startTime}}开抢</view>
								<view class="last-time" v-else-if="goodsDetail.activityState == 1">距结束还剩 {{surplusTime ? surplusTime : '--:--'}}</view>
								<view class="last-time" v-else-if="goodsDetail.activityState == 2">{{goodsDetail.endTime}}结束</view>
							</view>
						</view>
						<view class="g-price">
							<view class="p-info">
								<view class="p-num">
									<view class="price-txt">{{goodsDetail.price}}<text class="small">元</text> </view>
									<text v-if="goodsDetail.integral">+</text>
									<view class="price-txt" v-if="goodsDetail.integral">{{goodsDetail.integral}}<text class="small">积分</text></view>
									<view class="gray-del">{{goodsDetail.faceValue || 0}}元 </view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="pro-list" v-if="secondClass.productList && secondClass.productList[0] && secondClass.productList.length>1">
				<view v-for="item in secondClass.productList" :key="item.id" :class="goodsDetail.productId === item.productId ? 'item active' : 'item'"
				 @click="choseProduct" :data-tab="item.productId">
					<view class="pro-name">{{item.productName}}</view>
					<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/15242516d3b14efd88052ebb6039821b.png" class="active-img" />
				</view>
			</view>
			<view class="product-modal" v-if="secondClass.productType == '卡密'">
				<view class="page-section">
					<picker @change="changeNum" :value="postIndex.numIndex" :range="chargeNumList" name="buyNum">
						<view class="picker">
							<view class="left">请选择充值数量</view>
							<view class="right">
								{{chargeNumList[postIndex.numIndex]}}
								<image class="row-arrow" src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/68a11785f12841229386c4cf5bb5c922.png" />
							</view>
						</view>
					</picker>
				</view>
			</view>
			<view class="product-modal" v-if="tempData && secondClass.productType == '直充'">
				<view v-if="inputs && inputs[0]">
					<view class="page-section" v-for="item in inputs" :key="item.id">
						<input :name="item.id" :placeholder="item.id === 'ChargeAccount' ? (goodsDetail.inputTips || '请输入充值账号') : item.name" />
					</view>
				</view>
				<view v-if="tempData.isServiceArea">
					<!-- 充值游戏 -->
					<view class="page-section" v-if="chargeGameList[0]">
						<picker @change="changeGame" :value="postIndex.gameIndex" :range="chargeGameList" name="ChargeGameName">
							<view class="picker">
								<view class="left">请选择充值游戏</view>
								<view class="right">
									{{chargeGameList[postIndex.gameIndex] || ''}}
									<image class="row-arrow" src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/68a11785f12841229386c4cf5bb5c922.png" />
								</view>
							</view>
						</picker>
					</view>
					<!-- 充值区 -->
					<view class="page-section" v-if="chargeRegionList[0]">
						<picker @change="changeRegion" :value="postIndex.regionIndex" :range="chargeRegionList" name="ChargeGameRegion">
							<view class="picker">
								<view class="left">请选择充值区</view>
								<view class="right">
									{{chargeRegionList[postIndex.regionIndex] || ''}}
									<image class="row-arrow" src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/68a11785f12841229386c4cf5bb5c922.png" />
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
									<image class="row-arrow" src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/68a11785f12841229386c4cf5bb5c922.png" />
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
									<image class="row-arrow" src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/68a11785f12841229386c4cf5bb5c922.png" />
								</view>
							</view>
						</picker>
					</view>
				</view>
				<!-- 数量选择存在时 数量限制为1也不显示数量-->
				<view class="page-section" v-if="chargeNumList.length>0 && goodsDetail.singlePurchaseLimit != 1">
					<picker @change="changeNum" :value="postIndex.numIndex" :range="chargeNumList" name="buyNum">
						<view class="picker">
							<view class="left">请选择充值数量</view>
							<view class="right">
								{{chargeNumList[postIndex.numIndex]}}
								<image class="row-arrow" src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/68a11785f12841229386c4cf5bb5c922.png" />
							</view>
						</view>
					</picker>
				</view>
			</view>
			<view class="goods-desc">
				<view class="h1">权益说明 </view>
				<view class="desc-main">
					<view class="desc-txt">
						<rich-text :nodes="goodsDetail.content"></rich-text>
					</view>
				</view>
				<view class="link-to">
					<view class="link" @click="toIndex">
						<image class="img-left" src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/c7627ab3ffa84762a82655808fe71ace.png" />
						<text>查看订单</text>
					</view>
					<view class="link" @click="toServe">
						<image class="img-left" src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/5b3ef53c83334a72888bfc15a3f5e840.png" />
						<text>售后服务</text>
					</view>
				</view>
			</view>
			<view class="btn-area">
				<view v-if="!goodsDetail.isActivity">
					<button type="primary" class="blue-btn" disabled :loading="isLoading" v-if="isLoading">立即兑换</button>
					<button formType="submit" class="blue-btn" type="primary" v-else data-tab="1">立即兑换</button>
				</view>
				<view v-else>
					<button type="primary" class="time-btn blue-btn" v-if="goodsDetail.activityState == 0">
						<text>距开抢还剩:</text>
						<text> {{startSecound ? startSecound : '--:--'}}</text>
					</button>
					<view v-else-if="goodsDetail.activityState == 1">
						<button type="primary" formType="submit" class="blue-btn" data-tab="3" v-if="passCodeStatus.userPassCodeStatus == 3">马上抢</button>
						<button type="primary" formType="submit" class="blue-btn" data-tab="4" v-else-if="passCodeStatus.userPassCodeStatus == 4 && !isLoading">立即兑换</button>
						<button type="primary" formType="submit" class="blue-btn" data-tab="2" :data-orderno="passCodeStatus.orderNo"
						 v-else-if="passCodeStatus.userPassCodeStatus == 1 && !isLoading">
							立即兑换
						</button>
						<button type="ghost" disabled class="disabled-btn" v-else-if="passCodeStatus.userPassCodeStatus == 4 && isLoading">正在抢购，请稍等...</button>
						<button type="ghost" disabled class="disabled-btn" v-else-if="passCodeStatus.userPassCodeStatus == 2">您已参加</button>
					</view>
					<button type="ghost" disabled class="disabled-btn" v-else-if="goodsDetail.activityState == 2">活动已结束</button>
				</view>
			</view>
		</form>
		<view class="login-modal" v-if="showModal">
			<form @submit="submitLogin" class="login-bg">
				<view class="page-section">
					<input name="mobile" @input="changeMobile" placeholder="输入11位手机号码" class="se-input" />
				</view>
				<view class="page-section">
					<input name="code" placeholder="输入验证码" class="se-input code-input" />
					<view class="code-btn" v-if="countNum2>1">重新获取({{countNum2}}s)</view>
					<view class="code-btn" @click="getCode" v-else>获取验证码</view>
				</view>
				<button form-type="submit" class="login-btn">登录</button>
			</form>
		</view>
	</view>
</template>

<script>
	import config from '../../config/index.js'
	import {
		httpsRequest,
		toLoginFuLu,
		secondToDate
	} from '../../utils/index.js';
	let xInteval = null;
	const RegTel = /^1(3|4|5|6|7|8|9)\d{9}$/;
	export default {
		data() {
			return {
				surplusTime: '',
				startSecound: '',
				goodsDetail: {},
				secondClass: {},
				passCodeStatus: {},
				inputs: [],
				chargeNumList: [],
				chargeGameList: [],
				chargeRegionList: [],
				chargeServerList: [],
				chargeTypeList: [],
				chargeNumList: [],
				tempData: {},
				postIndex: {
					numIndex: 0,
					gameIndex: null,
					regionIndex: null,
					serverIndex: null,
					typeIndex: null,
				},
				orderPost: {},
				isLoading: false,
				showModal: false,
				countNum2: 0
			};
		},
		onLoad(option) {
			this.gid = option.id
			this.pid = option.pid
		},
		onShow() {
			this.initGame()
			this.getGoodsList()
		},
		onUnload() {
			this.clearDetailTimeInterval();
		},
		methods: {
			getGoodsList() {
				httpsRequest(config.api.getGoodsList, 'GET', {
					childCategoryId: this.gid
				}, (data) => {
					if (data.code === '1000') {
						const {
							productList
						} = data.data
						let obj = {}
						let a = productList.find(v => v.productId === this.pid);
						if (a) {
							obj = a;
						} else {
							obj = productList[0];
						}
						this.secondClass = data.data
						this.goodsDetail = obj
						this.setGoods()
					}
				})
			},
			setGoods() {
				const {
					goodsDetail,
					secondClass
				} = this;
				// 获取模板
				if (secondClass.productType == '直充') {
					if (goodsDetail.templateId) {
						this.initGame()
						this.getTemplate()
					} else {
						uni.showToast({
							title: '该商品未配置模板'
						});
					}
				} else {
					for (var i = 0; i < 100; i++) {
						this.chargeNumList.push(Number(i + 1))
					}
				}
				if (goodsDetail && goodsDetail.isActivity) {
					// 活动商品倒计时
					if (goodsDetail.startSecound) {
						this.settime(goodsDetail.startSecound, 'startSecound')
					}
					if (goodsDetail.surplusTime) {
						this.settime(goodsDetail.surplusTime, 'surplusTime')
					}
					// 抢资格
					try {
						this.userInfo = uni.getStorageSync('userInfo');
						if (this.userInfo) {
							this.getPassCodeStatus()
						} else {
							this.passCodeStatus = {
								orderNo: '',
								userPassCodeStatus: 3
							}
						}
					} catch (e) {
						console.log(e)
					}
				} else {
					this.passCodeStatus = {
						orderNo: '',
						userPassCodeStatus: 3
					}
				}
			},
			initGame() {
				this.chargeGameList = []
				this.chargeRegionList = []
				this.chargeServerList = []
				this.chargeTypeList = []
				this.chargeNumList = []
				this.ChargeGame = []
				this.ChargeRegion = []
				this.ChargeServer = []
				this.ChargeType = []
				this.inputs = []
				this.tempData = {}
				this.postIndex = {
					numIndex: 0,
					gameIndex: null,
					regionIndex: null,
					serverIndex: null,
					typeIndex: null,
				}
			},
			getTemplate() {
				const {
					goodsDetail
				} = this;
				httpsRequest(config.api.getGameProTemp, 'GET', {
					productTemplateId: goodsDetail.templateId
				}, (data) => {
					if (data.code == '1000') {
						this.tempData = data.data
						// 区服解析
						const {
							postIndex
						} = this;
						const {
							isServiceArea,
							gameTempaltePreviewList,
							elementInfo
						} = data.data;
						if (isServiceArea) {
							let arr = [];
							gameTempaltePreviewList.map(v => {
								arr.push(v.ChargeGame)
							})
							// 有区服
							this.chargeGameList = arr
							this.ChargeGame = gameTempaltePreviewList
						} else {
							// 没有区服
							this.tempData = {}
						}
						// 数量解析
						this.inputs = elementInfo.inputs
						if (elementInfo && elementInfo.chargeNum) {
							this.mangeNum(elementInfo.chargeNum)
						} else {
							this.chargeNumList = []
						}
					}
				}, false);
			},
			getPassCodeStatus(type) {
				const {
					goodsDetail
				} = this;
				httpsRequest(config.api.getPassCodeStatus, 'get', {
					productId: goodsDetail.productId
				}, (data) => {
					if (data.code == '1000') {
						this.passCodeStatus = data.data
					} else if (data.code == '1013' || data.code == '1014' || data.code == '1015') {
						toLoginFuLu().then(res => {
							if (type !== 'once') {
								this.getPassCodeStatus('once')
							}
						})
					}
				}, true);
			},
			settime(time, type) {
				this.countNum = time
				this.clearDetailTimeInterval();
				let that = this;
				xInteval = setInterval(function() {
					let {
						countNum
					} = that;
					countNum -= 1;
					if (countNum === 0) {
						that.clearDetailTimeInterval();
						that.getGoodsList();
					}
					if (countNum > 0) {
						that.countNum = countNum
						if (type == 'startSecound') {
							that.startSecound = secondToDate(countNum)
						} else if (type == 'surplusTime') {
							that.surplusTime = secondToDate(countNum)
						}
					}
				}, 1000);
			},
			clearDetailTimeInterval() {
				if (xInteval) {
					clearInterval(xInteval)
					xInteval = null;
				}
			},
			choseProduct(e) {
				const val = e.currentTarget.dataset.tab;
				let obj = {},
					pid = ''
				let {
					secondClass
				} = this;
				secondClass.productList.map(v => {
					if (v.productId === val) {
						obj = v;
						pid = val;
					}
				})
				this.goodsDetail = obj
				this.pid = pid
				this.setGoods()
			},
			mangeNum(num) {
				const {
					goodsDetail
				} = this; // 选中的商品
				let chargeNumList = [],
					centerArr = [];
				if (num) {
					// 判断是否包含 | 
					if (num.value.indexOf("|") != -1) {
						centerArr = num.value && num.value.split('|');
					} else {
						centerArr.push(num.value);
					}
					// 判断是否包含 -
					centerArr.length && centerArr.map(v => {
						if (v.indexOf("-") != -1) {
							let a = v.split('-');
							for (let i = a[0]; i <= a[1]; i++) {
								if (i <= goodsDetail.singlePurchaseLimit) { // 商品数量限制
									chargeNumList.push(Number(i));
								}
							}
						} else {
							if (v <= goodsDetail.singlePurchaseLimit) { // 商品数量限制
								chargeNumList.push(Number(v));
							}

						}
					})
				}
				this.chargeNumList = chargeNumList
			},
			// 游戏
			changeGame(e) {
				const val = e.detail.value;
				const {
					postIndex,
					ChargeGame
				} = this;
				postIndex.gameIndex = val;
				const game = ChargeGame[val].gameList;
				if (game) {
					let region = [],
						server = [],
						type = [];
					if (game.ChargeRegion && game.ChargeRegion[0]) {
						game.ChargeRegion.map(v => {
							region.push(v.name)
						})

					}
					if (game.ChargeServer && game.ChargeServer[0]) {
						game.ChargeServer.map(v => {
							server.push(v.name)
						})
					}
					if (game.ChargeType && game.ChargeType[0]) {
						game.ChargeType.map(v => {
							type.push(v.name)
						})
					}
					this.postIndex = postIndex
					this.chargeRegionList = region
					this.chargeServerList = server
					this.chargeTypeList = type
					this.ChargeRegion = game.ChargeRegion || []
					this.ChargeServer = game.ChargeServer || []
					this.ChargeType = game.ChargeType || []
				}
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
			// 数量
			changeNum(e) {
				const val = e.detail.value;
				const {
					postIndex
				} = this;
				postIndex.numIndex = val;
				this.postIndex = postIndex
			},
			formSubmit(e) {
				const {
					secondClass,
					goodsDetail,
					postIndex,
					passCodeStatus
				} = this;
				const val = e.detail.value;
				if (!goodsDetail.isActivity) {
					// 不是活动
					if (secondClass.productType == '直充') {
						//直充下单
						this.sendOrder(val)
					} else if (secondClass.productType == '卡密') {
						// 卡密下单
						this.sendKMOrder(val)
					}
				} else {
					// 活动商品
					// userPassCodeStatus   1：卡密直冲下单 3：马上抢资格 4:抢完资格后下单  2:抢资格后下单，但是没有支付，直接带过去订单号
					if (goodsDetail.activityState == 1) { // 进行中的活动
						if (passCodeStatus.userPassCodeStatus == 3) { // 抢资格
							this.getPassCode();
						} else if (passCodeStatus.userPassCodeStatus == 4) {
							if (secondClass.productType == '直充') {
								//直充下单
								this.sendOrder(val)
							} else if (secondClass.productType == '卡密') {
								// 卡密下单
								this.sendKMOrder(val)
							}
						} else if (passCodeStatus.userPassCodeStatus == 1) {
							uni.navigateTo({
								url: `/pages/sureOrder/sureOrder?oid=${orderNo}`,
							});
						}
					}
				}
			},
			getPassCode(type) {
				try {
					let userInfo = uni.getStorageSync('userInfo');
					if (!userInfo) {
						// #ifdef MP-360 || H5
						this.showModal = true
						this.modelType = 3
						// #endif 
						// #ifdef MP-WEIXIN || MP-QQ || MP-ALIPAY || MP-TOUTIAO
						toLoginFuLu().then(res => {
							this.getPassCode()
						})
						// #endif 
					} else {
						const {
							goodsDetail
						} = this;
						httpsRequest(config.api.getPassCode, 'get', {
							productId: goodsDetail.productId
						}, (data) => {
							if (data.code == '1000') {
								if (data.data) {
									uni.showModal({
										title: '活动提示',
										content: '恭喜您，已获得活动名额'
									});
									this.getPassCodeStatus()
								}
							} else if (data.code == '1013' || data.code == '1014' || data.code == '1015') {
								toLoginFuLu().then(res => {
									if (type !== 'once') {
										this.getPassCode('once')
									}
								})
							}
						}, true);
					}
				} catch (e) {
					console.log(e)
				}
			},
			sendOrder(val) {
				const {
					chargeGameList,
					chargeRegionList,
					chargeServerList,
					chargeTypeList,
					chargeNumList,
					goodsDetail,
					secondClass
				} = this;
				console.log('game', val)
				if (!val.ChargeAccount) {
					return uni.showToast({
						icon: 'none',
						title: '请输入充值账号',
					});
				}
				// 校验账号规则
				let validTxt = '',
					validText = "";
				if (goodsDetail.validType == 1) { //手机
					validTxt = /^1(3|4|5|6|7|8|9)\d{9}$/;
					validText = '手机号';
				} else if (goodsDetail.validType == 2) { // qq
					validTxt = /^[1-9][0-9]{4,9}$/;
					validText = 'QQ号';
				} else if (goodsDetail.validType == 3) { // 邮箱
					validTxt = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
					validText = '邮箱';
				}
				if (validTxt && !validTxt.test(val.ChargeAccount)) {
					return uni.showToast({
						icon: 'none',
						title: `请输入正确格式的${validText}`,
					});
				}
				if ('ContactType' in val) {
					// 手机
					if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(val.ContactType)) {
						return uni.showToast({
							icon: 'none',
							title: '手机号格式错误',
						});
					}
				}
				if ('ContactQQ' in val) {
					// qq
					if (!/^[1-9][0-9]{4,11}$/.test(val.ContactQQ)) {
						return uni.showToast({
							icon: 'none',
							title: 'qq格式错误',
						});
					}
				}
				if ('ChargePWD' in val) {
					// 密码
					if (!/^[a-zA-Z0-9_-]{4,16}$/.test(val.ChargePWD)) {
						return uni.showToast({
							icon: 'none',
							title: '密码由4到16位（字母，数字，下划线，减号）组成',
						});
					}
				}
				if ('ChargeWeiXin' in val) {
					// 微信
					if (!/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/.test(val.ChargeWeiXin)) {
						return uni.showToast({
							icon: 'none',
							title: '微信格式错误',
						});
					}
				}
				if ('ChargeContacts' in val) {
					// 联系人
					if (!val.ChargeContacts) {
						return uni.showToast({
							icon: 'none',
							title: '联系人不能为空',
						});
					}
				}
				if ('ChargeAddress' in val) {
					// 联系地址
					if (!val.ChargeAddress) {
						return uni.showToast({
							icon: 'none',
							title: '联系地址不能为空',
						});
					}
				}
				if ('ChargeGameName' in val) {
					// 充值游戏
					if (!val.ChargeGameName && val.ChargeGameName != 0) {
						return uni.showToast({
							icon: 'none',
							title: '充值游戏不能为空',
						});
					}
				}
				if ('ChargeGameRegion' in val) {
					// 区
					if (!val.ChargeGameRegion && val.ChargeGameRegion != 0) {
						return uni.showToast({
							icon: 'none',
							title: '充值区不能为空',
						});
					}
				}
				if ('ChargeServer' in val) {
					// 服
					if (!val.ChargeGameSrv && val.ChargeGameSrv != 0) {
						return uni.showToast({
							icon: 'none',
							title: '充值服不能为空',
						});
					}
				}
				if ('ChargeType' in val) {
					// 充值类型
					if (!val.ChargeType && val.ChargeType != 0) {
						return uni.showToast({
							icon: 'none',
							title: '充值类型不能为空',
						});
					}
				}
				const orderPost = {
					...val,
					contactTel: val.ContactType,
					contactQq: val.ContactQQ,
					chargeType: val.ChargeType,
					ChargeGameName: chargeGameList[val.ChargeGameName],
					ChargeGameRegion: chargeRegionList[val.ChargeGameRegion],
					ChargeGameSrv: chargeServerList[val.ChargeGameSrv],
					ChargeType: chargeTypeList[val.ChargeType],
					buyNum: chargeNumList[val.buyNum] || '1',
				}
				console.log('orderPost', orderPost)
				this.sendOrderFn(orderPost)
			},
			sendOrderFn(post) {
				console.log('---', post)
				// 保存参数
				let {
					orderPost,
					goodsDetail,
					secondClass
				} = this;
				if (post !== 'once' && post !== 'user') {
					orderPost = post
					this.orderPost = post
				}
				// 登录判断
				try {
					let userInfo = uni.getStorageSync('userInfo');
					if (!userInfo) {
						// #ifdef MP-360 || H5
						this.showModal = true
						this.modelType = 1
						// #endif 
						// #ifdef MP-WEIXIN || MP-QQ || MP-ALIPAY || MP-TOUTIAO
						toLoginFuLu().then(res => {
							this.sendOrderFn('user')
						})
						// #endif 
					} else {
						this.isLoading = true
						httpsRequest(config.api.sendOrder, 'post', {
							...orderPost,
							productId: goodsDetail.productId,
							salePrice: goodsDetail.price,
							childCategoryId: secondClass.childCategoryId,
						}, (data) => {
							this.isLoading = false
							if (data.code == '1000') {
								uni.navigateTo({
									url: `/pages/sureOrder/sureOrder?oid=${data.data}`,
								});
							} else if (data.code == '1013' || data.code == '1014' || data.code == '1015') {
								if (post !== 'once') {
									return this.sendOrderFn('once');
								}
							}
						}, true);
					}
				} catch (e) {
					console.log(e)
				}
			},
			sendKMOrder(post) {
				const {
					goodsDetail,
					secondClass,
					chargeNumList
				} = this;
				// 保存参数
				let orderPost = {}
				console.log('ppp', post)
				if (post !== 'once' && post !== 'user') {
					orderPost = post
				} else {
					orderPost = this.orderPost
				}
				this.orderPost = orderPost
				// 登录判断
				try {
					let userInfo = uni.getStorageSync('userInfo');
					if (!userInfo) {
						// #ifdef MP-360 || H5
						this.showModal = true
						this.modelType = 2
						// #endif 
						// #ifdef MP-WEIXIN || MP-QQ || MP-ALIPAY || MP-TOUTIAO
						toLoginFuLu().then(res => {
							this.sendKMOrder('user')
						})
						// #endif 
					} else {
						this.isLoading = true
						console.log(orderPost, '==')
						httpsRequest(config.api.sendCardOrder, 'post', {
							buyNum: chargeNumList[orderPost.buyNum] || '1',
							extractCode: '123456',
							productId: goodsDetail.productId,
							salePrice: goodsDetail.price,
							childCategoryId: secondClass.childCategoryId
						}, (data) => {
							this.isLoading = false
							if (data.code == '1000') {
								uni.navigateTo({
									url: `/pages/sureOrder/sureOrder?oid=${data.data}`,
								});
							} else if (data.code == '1013' || data.code == '1014' || data.code == '1015') {
								if (post !== 'once') {
									return this.sendKMOrder('once');
								}
							}
						}, true);
					}
				} catch (e) {
					console.log(e)
				}
			},
			toIndex() {
				uni.reLaunch({
					url: '/pages/index/index'
				})
			},
			toServe() {
				uni.navigateTo({
					url: '/pages/service/service'
				})
			},
			onPullDownRefresh() {
				this.getGoodsList()
			},
			changeMobile(e) {
				const val = e.detail.value
				this.mobile = val
			},
			getCode() {
				const {
					mobile
				} = this
				if (!RegTel.test(mobile)) {
					return uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号码！',
					});
				}
				httpsRequest(config.api.verificationcode, 'POST', {
					mobile: mobile.replace(/\s/g, ''),
					loginKey: 'login'
				}, (data) => {
					if (data.code === '1000') {
						uni.showToast({
							icon: 'none',
							title: `验证码已发送至${mobile}`,
						});
						this.settime2(60)
					}
				}, false);
			},
			settime2(time) {
				this.countNum2 = time
				this.clearDetailTimeInterval();
				let that = this;
				xInteval = setInterval(function() {
					let {
						countNum2
					} = that;
					countNum2 -= 1;
					if (countNum2 === 0) {
						that.clearDetailTimeInterval();
					}
					if (countNum2 > 0) {
						that.countNum2 = countNum2
					}
				}, 1000);
			},
			clearDetailTimeInterval() {
				if (xInteval) {
					clearInterval(xInteval)
					xInteval = null;
				}
			},
			submitLogin(e) {
				const val = e.detail.value;
				if (!RegTel.test(val.mobile)) {
					return uni.showToast({
						icon: 'none',
						title: '请输入正确的手机号码！',
					});
				}
				if (val.code.length !== 4) {
					return uni.showToast({
						icon: 'none',
						title: '请输入正确的验证码！',
					});
				}
				httpsRequest(config.api.touristlogincode, 'POST', {
					mobile: val.mobile.replace(/\s/g, ''),
					verCode: val.code.replace(/\s/g, ''),
				}, (data) => {
					if (data.code === '1000') {
						uni.showToast({
							title: '登录成功！',
						})
						try {
							uni.setStorageSync('userInfo', data.data)
							// 记录上一步操作
							const {
								modelType
							} = this;
							if (modelType === 1) {
								// 直充下单
								this.sendOrderFn('user')
							} else if (modelType === 2) {
								// 卡密下单
								this.sendKMOrder('user')
							} else if (modelType === 3) {
								// 获取资格
								this.getPassCode('user')
							}
							this.showModal = false
						} catch (e) {
							console.log(e)
						}
					}
				}, false);
			}
		}
	}
</script>

<style lang="less">
	.detail-bg {
		width: 750rpx;
		padding-bottom: 160rpx;
		min-height: 100vh;

		.goods-img {
			width: 750rpx;
			height: 450rpx;
			position: relative;
			background: #ededed;

			.img {
				width: 750rpx;
				height: 450rpx;
				background-size: 100%;
			}
		}

		.goods-info {
			width: 750rpx;

			.blue-bg {
				background: linear-gradient(218deg, rgba(0, 142, 255, 1) 0%, rgba(0, 94, 255, 1) 100%);
			}

			.g-bg {
				padding: 25rpx 10rpx 10rpx;
				min-height: 246rpx;
			}

			.name {
				font-size: 30rpx;
				font-weight: 600;
				color: rgba(255, 255, 255, 1);
				padding-left: 21rpx;
				margin-bottom: 10rpx;
				line-height: 32rpx;
				height: 64rpx;
				min-height: 29rpx;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
				word-break: break-all;
			}

			.name-line {
				background: #f5f5f5;
				width: 100rpx;
				height: 29rpx;
				display: inline-block;
			}

			.time {
				font-size: 26rpx;
				font-family: PingFangSC-Regular;
				font-weight: 400;
				color: rgba(255, 255, 255, 0.5);
				padding-left: 25rpx;
				margin-bottom: 25rpx;
				height: 30rpx;
				line-height: 30rpx;
			}

			.g-price {
				background: #fff;

				.p-info {
					width: 100%;
					padding-left: 25rpx;
					display: flex;
				}

				.p-num {
					width: 495rpx;
					height: 120rpx;
					color: #ff6242;
					font-size: 26rpx;
					padding-top: 10rpx;

					.price-txt {
						height: 60rpx;
						font-size: 44rpx;
						line-height: 60rpx;
						display: inline-block;
					}

					.small {
						font-size: 26rpx;
					}

					.gray-del {
						height: 28rpx;
						line-height: 28rpx;
						font-size: 26rpx;
						font-family: PingFangSC-Medium;
						font-weight: 500;
						text-decoration: line-through;
						color: rgba(153, 153, 153, 1);
						padding-left: 5rpx;
					}
				}
			}

			.d-info {
				display: flex;

				.left2 {
					width: 493rpx;

					.name {
						width: 100%;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						padding-top: 5rpx;
					}

				}

				.right2 {
					width: 240rpx;
					text-align: right;
					color: #fff;
					padding-right: 24rpx;

					.tips-bg {
						height: 37rpx;
						line-height: 35rpx;
						text-align: center;
						border: 2rpx solid #fff;
						border-radius: 4rpx;
						display: inline-block;
						margin-bottom: 13rpx;
						color: #fff;
						font-size: 24rpx;
						padding: 0 10rpx;
					}
				}

				.left {
					width: 367rpx;

					.time {
						width: 367rpx;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}

				.right {
					width: 366rpx;
					color: #fff;
					font-size: 26rpx;
					text-align: right;
					padding-right: 24rpx;
				}

			}

		}

		.pro-list {
			background: #fff;
			display: flex;
			flex-wrap: wrap;
			padding: 30rpx 31rpx 0;

			.item {
				width: 216rpx;
				height: 120rpx;
				border-radius: 8rpx;
				padding: 0 5rpx;
				background: rgba(235, 235, 242, 1);
				color: #333333;
				font-size: 28rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				border: 2rpx solid #ebebf0;
				text-align: center;
				line-height: 30rpx;
				margin: 0 19rpx 19rpx 0;
				overflow: hidden;
				position: relative;

				&:nth-child(3n) {
					margin-right: 0;
				}

				&.active {
					border-color: #3270ff;
					color: #3270ff;

					.active-img {
						display: block;
					}
				}

				.pro-name {
					width: 200rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}

				.active-img {
					width: 20rpx;
					height: 20rpx;
					position: absolute;
					bottom: 5rpx;
					right: 5rpx;
					display: none;
				}
			}
		}

		.goods-desc {
			width: 750rpx;
			padding: 30rpx 32rpx 50rpx;
			background: #fff;

			.h1 {
				height: 34rpx;
				font-size: 36rpx;
				font-weight: 600;
				color: rgba(45, 45, 45, 1);
				margin-bottom: 30rpx;
				padding-left: 5rpx;
			}

			.desc-main {
				background: rgba(255, 255, 255, 1);
				box-shadow: 0px 2px 10px 0px rgba(153, 153, 153, 0.2);
				width: 686rpx;
				padding: 40rpx 35rpx;
				margin-bottom: 41rpx;

				.h6 {
					height: 25rpx;
					font-size: 26rpx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(153, 153, 153, 1);
					margin-bottom: 18rpx;
				}

				.desc-txt {
					font-size: 26rpx;
					font-family: PingFangSC-Regular;
					font-weight: 400;
					color: rgba(51, 51, 51, 1);
					line-height: 36rpx;
					margin-bottom: 75rpx;
					min-height: 200rpx;

					rich-text {
						overflow: hidden;
						word-break: break-all;
					}
				}

				.rule-pic {
					width: 638rpx;
					margin-top: 41rpx;

					.img {
						width: 618rpx;
						height: 368rpx;
						background-size: contain;
					}

					.img-km {
						width: 401rpx;
						height: 357rpx;
						background-size: contain;
						display: block;
						margin: 0 auto;
					}
				}
			}

			.link-to {
				width: 686rpx;
				height: 100rpx;
				background: rgba(255, 255, 255, 1);
				box-shadow: 0px 2px 10px 0px rgba(153, 153, 153, 0.2);
				display: flex;

				.link {
					flex: 1;
					display: flex;
					padding: 32rpx 32rpx 32rpx 79rpx;
					font-size: 30rpx;
					font-family: PingFangSC-Medium;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);

					&:last-child {
						border-left: 1rpx solid rgba(239, 239, 239, 0.6);
					}
				}

				image {
					width: 40rpx;
					height: 40rpx;
					vertical-align: middle;
				}

				.img-right {
					width: 30rpx;
					height: 30rpx;
				}

				.img-left {
					margin-right: 18rpx;
				}

				text {
					display: inline-block;
					position: relative;
					top: 3rpx;
				}
			}
		}

		.btn-area {
			position: fixed;
			width: 750rpx;
			height: 158rpx;
			z-index: 99;
			bottom: 0;
			left: 0;
			height: 158rpx;
			padding: 35rpx 32rpx;
			background: #fff;
			box-shadow: 0 -10rpx 40rpx rgba(0, 0, 0, 0.11);

			button {
				height: 88rpx;
				line-height: 84rpx;
				padding: 0;
				border-radius: 8rpx;
				padding: 0 40rpx;
				text-align: center;

				&.time-btn {
					display: flex;
				}

				&.blue-btn {
					background: #286aff;
					color: #fff;
				}

				&.disabled-btn {
					background: #ebeef5;
					color: #3d424d;
				}

				text {
					flex: 1;

					&:first-child {
						text-align: left;
					}

					&:last-child {
						text-align: right;
					}
				}
			}
		}

		.product-modal {
			width: 750rpx;
			background: #fff;
			padding: 35rpx 32rpx;

			.page-section {
				margin-bottom: 28rpx;
				height: 88rpx;
				line-height: 84rpx;
				background: rgba(235, 235, 242, 1);
				border: 2rpx solid rgba(224, 224, 224, 1);
				width: 686rpx;
				border-radius: 5rpx;
				box-sizing: border-box;

				input {
					height: 84rpx;
					line-height: 84rpx;
					padding: 0 25rpx;
					box-sizing: border-box;
					width: 682rpx;
					color: #333;
					font-size: 34rpx;
				}

				.picker {
					height: 88rpx;
					line-height: 84rpx;
					padding: 0 25rpx;
					width: 686rpx;
					box-sizing: border-box;
					color: #333;
					display: flex;
					font-size: 34rpx;

					.left {
						color: #333;
						font-size: 34rpx;
						flex: 1;
					}

					.right {
						color: #333;
						font-size: 34rpx;
						flex: 1;
						text-align: right;

						.row-arrow {
							width: 32rpx;
							height: 32rpx;
							margin-left: 16rpx;
							opacity: 0.3;
						}

					}
				}
			}
		}
	}

	.login-modal {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, .5);
		z-index: 100;

		.login-bg {
			display: block;
			width: 686rpx;
			margin: 200rpx auto;
			background: #fff;
			border-radius: 5rpx;
			padding: 100rpx 32rpx;
			box-sizing: border-box;

			.page-section {
				margin-bottom: 28rpx;
				height: 80rpx;
				line-height: 80rpx;
				width: 100%;
				border-radius: 5rpx;
				box-sizing: border-box;
				background: #fff;
				position: relative;

				.se-input {
					height: 80rpx;
					line-height: 80rpx;
					box-sizing: border-box;
					border: 2rpx solid rgba(224, 224, 224, 1);
					background: #fff;
					width: 100%;
					color: #333;
					font-size: 32rpx;

					.uni-input-placeholder {
						padding-left: 30rpx;
					}
				}

				.code-btn {
					position: absolute;
					right: 2rpx;
					top: 2rpx;
					z-index: 3;
					color: #3162F5;
					cursor: pointer;
					padding: 0 40rpx;
					font-size: 28rpx;
				}
			}
		}

		.login-btn {
			width: 100%;
			height: 88rpx;
			background: #3162F5;
			color: #fff;
			border: none;
			font-size: 32rpx;
		}
	}
</style>
