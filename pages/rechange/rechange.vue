<template>
	<view class="rechange-bg">
		<swiper class="swiper" v-if="banner && banner[0]" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
		 :duration="duration">
			<swiper-item v-for="(item, index) in banner">
				<view class="swiper-item" @click="toBanner(item)" :key="index">
					<image :src="item.bannerUrl" class="img" />
				</view>
			</swiper-item>
		</swiper>
		<image mode="scaleToFill" src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/ed8b5f9c0b8f4c0e9d9aeafe8c733ad5.png"
		 class="swiper" v-else />
		<view class="recharge-goods">
			<view class="vild-code" a:if="!isCheck">
				<view class="v-title">兑换码
					<image mode="scaleToFill" src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/0c6363fda23945fca4f7a16baed51e54.png"
					 @click="clearCode" class="clear-code" />
				</view>
				<view class="input-bg">
					<input class="code-input" :value="code1" @blur="changeCode" data-tab="1" />
					<input class="code-input" :value="code2" @blur="changeCode" data-tab="2" />
					<input class="code-input" :value="code3" @blur="changeCode" data-tab="3" />
					<input class="code-input" :value="code4" @blur="changeCode" data-tab="4" />
				</view>
				<button type="primary" :class="(!code1 || isLoading) ? 'sub-btn disabled-btn' : 'sub-btn'" @click="toChange"
				 :disabled="!code1 || isLoading">立即验证</button>
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
				indicatorDots: true,
				autoplay: false,
				interval: 3000,
				duration: 500,
				banner: [],
				isCheck: true,
				code1: '',
				code2: '',
				code3: '',
				code4: '',
				goodIndex: 0,
			};
		},
		onLoad() {
			this.init('changePageTop')
		},
		methods: {
			init(locationType) {
				// 获取banner
				httpsRequest(config.api.getBanner, 'GET', {
					SysTemplateId: config.templateInfoId,
					locationType,
					MerTemplateId: config.merTemplateId
				}, (data) => {
					if (data.code === '1000') {
						this.banner = data.data.list
					}
				}, false);
			},
			changeCode(e) {
				let val = e.detail.value.replace(/[^\w\.\/]/ig, '');
				const tab = e.target.dataset.tab;
				if (val.length === 16) {
					val = val.replace(/(.{4})/g, "$1-")
					val = val.split('-');
					this.code1 = val[0]
					this.code2 = val[1]
					this.code3 = val[2]
					this.code4 = val[3]
				} else {
					if (tab == '1') {
						this.code1 = val.substring(0, 4)
					}
					if (tab == '2') {
						this.code2 = val.substring(0, 4)
					}
					if (tab == '3') {
						this.code3 = val.substring(0, 4)
					}
					if (tab == '4') {
						this.code4 = val.substring(0, 4)
					}
				}
			},
			clearCode() {
				this.code1 = ''
				this.code2 = ''
				this.code3 = ''
				this.code4 = ''
			},
			toChange() {
				const {
					code1,
					code2,
					code3,
					code4
				} = this;
				this.EntityNo = code1 + code2 + code3 + code4;
				if (this.EntityNo.length < 16) {
					return my.showToast({
						content: '请输入16位兑换码！'
					})
				}
				const {
					goodIndex
				} = this;
				// 获取商品列表
				httpsRequest(config.api.couponcodeproducts, 'GET', {
					EntityNo,
					MerchantId: config.merInfoId,
				}, (data) => {
					if (data.code === '1000') {
						
					}
				}, false);
			},
		}
	}
</script>

<style lang="less">
	.rechange-bg {
		background: #f6f6f6;
		width: 750rpx;
		overflow: hidden;
		min-height: 100vh;

		.swiper,
		.swiper-item,
		.swiper-item .img {
			width: 750rpx;
			height: 380rpx;
			margin-bottom: 20rpx;
		}

		.recharge-goods {
			margin-bottom: 20rpx;
			padding: 32rpx 34rpx;
			background: #fff;

			.clear-code {
				width: 28rpx;
				height: 28rpx;
				background-size: 100%;
				float: right;
			}

			.v-title {
				color: #222;
				font-size: 32rpx;
				margin-bottom: 20rpx;
			}

			.sub-btn {
				background: #3162F4;
				font-size: 36rpx;
				border-radius: 8rpx;
				height: 80rpx;
				line-height: 80rpx;

				&.disabled-btn {
					background: rgba(49, 98, 244, .55);
					color: #fff;
				}
			}

			.input-bg {
				display: flex;
				justify-content: space-between;
				margin-bottom: 32rpx;

				.code-input {
					background: #F0F0F0;
					border-color: #F0F0F0;
					width: 156rpx;
					height: 80rpx;
					margin-right: 20rpx;
					box-sizing: border-box;
					padding: 0 10rpx;
					text-align: center;

					&:last-child {
						margin-right: 0;
					}
				}
			}
		}
	}
</style>
