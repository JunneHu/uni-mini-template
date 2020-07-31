<template>
	<view class="my-card">
		<view v-for="(v,i) in list" :class="(!v.isUse || v.useStatus==2) ? 'item unActive' : 'item'" v-if="total > 0" @click="toDetail(v)">
			<view class="h1">{{v.merEquityCardName}}</view>
			<view class="time">有效期至：{{v.equityCardEndTime}}</view>
		</view>
		<view class="noting" v-if="total == 0">
			<view class="img-bg"></view>空空如也，快去首页看看<button class="btn-bg" @click="toIndex">VIP套餐介绍</button>
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
				list: [],
				total: -1
			};
		},
		onLoad() {
			this.init()
		},
		methods: {
			init(type) {
				httpsRequest(config.api.getUserEquityCard, 'GET', {}, (data) => {
					if (data.code === '1000') {
						this.list = data.data.list;
						this.total = this.list.length;
					} else if (data.code == '1013' || data.code == '1014' || data.code == '1015') {
						toLoginFuLu().then(res => {
							if (type !== 'once') {
								this.init('once')
							}
						})
					}
				}, true);
			},
			toDetail(val) {
				uni.navigateTo({
					url: `/pages/equityCardDetail/equityCardDetail?cid=${val.userEquityCardNo}`
				})
			},
			toIndex() {
				uni.navigateTo({
					url: '/pages/equityCard/equityCard'
				})
			}
		}
	}
</script>

<style lang="less">
	view,
	text {
		box-sizing: border-box;
		font-size: 28rpx;
	}

	.my-card {
		background: #171717;
		width: 750rpx;
		min-height: 100vh;
		padding: 40rpx 34rpx 40rpx 38rpx;

		.item {
			width: 678rpx;
			height: 240rpx;
			margin-bottom: 32rpx;
			background: url('https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/f4fb1438e37a4172a0e9249190865df5.png');
			background-size: 100%;
			box-shadow: 0 10rpx 20rpx 0 rgba(0, 0, 0, 0.5), 0 4rpx 28rpx 0 rgba(0, 0, 0, 0.5);
			border-radius: 20rpx;
			padding: 28rpx 40rpx;
			position: relative;

			&.unActive {
				background: url('https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/dc57034b5a7041c5a46d194c54317382.png');
				background-size: 100%;
			}

			.h1 {
				margin: 0;
				font-size: 48rpx;
				font-weight: 500;
				color: #453215;
				line-height: 66rpx;
			}

			.time {
				color: #453215;
				line-height: 40rpx;
				position: absolute;
				bottom: 28rpx;
				left: 40rpx;
			}
		}
	}
</style>
