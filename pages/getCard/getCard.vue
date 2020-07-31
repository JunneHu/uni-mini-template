<template>
	<view class="get-card">
		<view class="panel">
			<image mode="scaleToFill" :src="detail.productImg" />
			<view class="title font-clamp2">{{detail.productName}}</view>
		</view>
		<view v-if="cardList[0]" v-for="item in cardList">
			<view class="codeshow">
				<view class="code font-clamp">卡号：{{item.cardNumber}}</view>
				<view class="copycode" @click="copycode(item.cardNumber)">复制</view>
			</view>
			<view class="codeshow">
				<view class="code font-clamp">券码：{{item.cardPwd}}</view>
				<view class="copycode" @click="copycode(item.cardPwd)">复制</view>
			</view>
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
				cardList: []
			};
		},
		onLoad(option) {
			this.oid = '205200630183768482872' //option.oid
			this.init()
		},
		methods: {
			init() {
				const {
					oid
				} = this
				httpsRequest(config.api.getOrderDetail, 'GET', {
					orderNo: oid
				}, (data) => {
					if (data.code === '1000') {
						this.detail = data.data;
						this.getcard()
					} else if (data.code == '1013' || data.code == '1014' || data.code == '1015') {
						toLoginFuLu().then(res => {
							if (type !== 'once') {
								this.init('once')
							}
						})
					}
				}, true);
			},
			getcard() {
				const {
					oid
				} = this;
				httpsRequest(config.api.extractCard, 'POST', {
					orderNo: oid,
					extractCode: '123456'
				}, (data) => {
					if (data.code === '1000') {
						this.cardList = data.data.list
					} else {
						this.cardList = []
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
			}
		}
	}
</script>

<style lang="less">
	.get-card {
		width: 100%;
		min-height: 100%;
		position: absolute;
		padding: 32rpx;
		background: #f6f6f6;

		.panel {
			margin-bottom: 40rpx;
			overflow: hidden;

			image {
				width: 100rpx;
				height: 100rpx;
				margin-right: 20rpx;
				float: left;
			}

			.title {
				margin-left: 120rpx;
				color: #333;
			}
		}

		.codeshow {
			width: 702rpx;
			height: 112rpx;
			background: #fff;
			margin: 0 auto 20rpx;
			padding: 32rpx;
			box-sizing: border-box;
			border-radius: 12rpx;

			.code {
				font-size: 32rpx;
				color: #333;
				float: left;
				line-height: 48rpx;
				width: 500rpx;
			}

			.copycode {
				float: right;
				width: 120rpx;
				height: 52rpx;
				border-radius: 72rpx;
				background: #3162F5;
				color: #fff;
				font-size: 28rpx;
				text-align: center;
				line-height: 52rpx;
			}
		}
	}
</style>
