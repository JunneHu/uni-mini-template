<template>
	<view class="pro-bg">
		<view class="km-con">
			<view class="info">
				<view class="name font-clamp">{{detail.productName}}</view>
				<view class="price">
					<text>价值</text>¥{{detail.faceValue}}</view>
			</view>
			<view class="card-info" v-if="cardList && cardList[0]">
				<view class="h2">卡密信息</view>
				<view class="item">卡号：{{cardList[0].cardNumber}}
					<view @click="copycode(cardList[0].cardNumber)" class="btn">复制</view>
				</view>
				<view class="item">密码：{{cardList[0].cardPwd}}
					<view @click="copycode(cardList[0].cardPwd)" class="btn">复制</view>
				</view>
				<view class="tips">请在官方指定充值渠道处充值，切勿通过他人提供的网站或充值渠道进行充值操作</view>
			</view>
			<view class="txt-orange" v-if="orderDetail.orderStatus === 61">充值失败，请返回列表重新提取卡密</view>
			<view class="txt-orange" v-if="orderDetail.orderStatus === 21 || orderDetail.orderStatus === 31 || orderDetail.orderStatus === 41 || loading">请稍后刷新，若15分钟后还未兑换成功，请联系客服处理</view>
		</view>
		<view class="pro-txt" v-if="detail.proDetail">
			<rich-text :nodes="detail.proDetail"></rich-text>
		</view>
		<!-- #ifdef MP-ALIPAY  -->
		<view class="toServer-btn">
			<contact-button tnt-inst-id="KPHBAOCN" scene="SCE00109345" size="60" :ext-info="extInfo" icon="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/f9db67487f7b4bc2ad8ff97841c57b02.png" />
		</view>
		<!-- #endif -->
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
				detail: {},
				orderDetail:{},
				cardList: [],
				loading: false,
				extInfo: ''
			};
		},
		onLoad(option) {
			this.userEquityCardProductId = option.userEquityCardProductId
			this.userEquityCardNo = option.userEquityCardNo
			this.orderNo = option.orderNo
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
						this.getOrderDetail()
					}
				}, true);
			},
			getOrderDetail() {
				this.loading = true
				const {
					orderNo
				} = this
				httpsRequest(config.api.getOrderDetail, 'GET', {
					orderNo
				}, (data) => {
					this.loading = false
					if (data.code === '1000') {
						this.orderDetail = data.data
						if (data.data.orderStatus === 61) {
							uni.showToast({
								content: '充值失败，请重新充值'
							})
						} else if (data.data.orderStatus === 51) {
							this.extractCard()
						} else {
							//  当订单状态不是成功或者失败的时候继续调用接口
							const _this = this
							setTimeout(() => {
								_this.getOrderDetail();
							}, 3000)
						}
					}
				}, true);
			},
			extractCard() {
				const {
					orderNo
				} = this
				httpsRequest(config.api.extractCard, 'post', {
					orderNo,
					extractCode: '123456'
				}, (data) => {
					if (data.code === '1000') {
						this.cardList = data.data.list
					}
				}, true);
			},
			copycode(val) {
				uni.setClipboardData({
					data: val,
					success: function() {
						uni.showToast({
							title: '复制成功'
						})
					}
				});
			},
			onPullDownRefresh() {
				this.init();
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

		.km-con {
			margin-bottom: .2rem;
			width: 7.02rem;
			height: 4.58rem;
			border-radius: .08rem;
			padding: .32rem .2rem .28rem;
			background: url('http://fulu-ich-oa.oss-cn-hangzhou.aliyuncs.com/1c93cae6ada145908fe98bc8447e1756.png') no-repeat;
			background-size: 100%;
		}
		.info {
		    display: flex;
		    margin-bottom: .74rem;
			.name {
			    width: 5rem;
			    color: #F5D090;
			    font-size: .32rem;
			    line-height: .48rem;
			}
			.price {
			    width: 1.62rem;
			    color: #F5D090;
			    font-size: .32rem;
			    line-height: .48rem;
			    text-align: right;
				text {
				    font-size: .24rem;
				    padding-right: .12rem;
				}
			}
		}
		.txt-orange {
		    color: #FF8C00;
		    font-size: .24rem;
		    line-height: .40rem;
		    margin-bottom: .32rem;
		}
		.card-info{
			.h2 {
			    font-size: .28rem;
			    font-weight: 500;
			    color: #DCBB7D;
			    line-height: .40rem;
			    margin-bottom: .32rem;
			}
			.item {
			    font-size: .28rem;
			    line-height: .3rem;
			    margin-bottom: .32rem;
			    color: #DCBB7D;
				.btn {
				    float: right;
				    font-size: .24rem;
				    color: #CAA668;
				}
			}
			.tips {
			    color: rgba(245, 208, 144, .6);
			    font-size: .24rem;
			    line-height: .34rem;
			}
		}
		.pro-txt {
		    min-height: 2rem;
		    padding: .32rem .2rem;
		    color: #8E7C5C;
		    font-size: .24rem;
		    line-height: .40rem;
		    background: linear-gradient(180deg, rgba(52, 51, 51, 1) 0%, rgba(36, 36, 36, 1) 100%);
		    box-shadow: 0 .04rem .28rem 0 rgba(0, 0, 0, 0.5);
		    border-radius: .08rem;
		}
		.toServer-btn {
		  width: 120rpx;
		  height: 120rpx;
		  position: fixed;
		  right: 0;
		  bottom: 280rpx;
		}
	}
</style>
