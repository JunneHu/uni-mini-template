<template>
	<view class="list-bg">
		<view class="left-bg">
			<view :class="item.active ? 'item active font-clamp':'item font-clamp'" v-for="item in oneMenu" :key="item.id"
			 @click="toSecoudList(item.id)">
				<text>{{item.className}}</text>
			</view>
		</view>
		<view class="right-bg" v-if="secondMenu[0]">
			<view class="item" v-for="item in secondMenu" :key="item.childCategoryId" @click="toDetail(item.childCategoryId)">
				<view class="right-tips" v-if="item.cornerMark">
					<image src="https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/8fee7d6f31eb44b19c6bd8917f32661b.png" class="img" /><text>{{item.cornerMark}}</text></view>
				<view class="img-bg">
					<image :src="item.iconPath" />
				</view>
				<view class="name">{{item.childCategoryName}}</view>
				<view class="price">
					<text v-if="item.integral">{{item.integral}}积分+</text>{{item.price}}元
				</view>
				<view class="del-price">{{item.faceValue}}元</view>
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
				secondMenu: [],
				oneMenu: []
			};
		},
		onLoad(option) {
			this.fid = option.fid
			// 一级分类
			this.init()
		},
		methods: {
			init() {
				httpsRequest(config.api.getOneMenu, 'get', {}, (data) => {
					if (data.code == '1000') {
						const list = data.data.list;
						let {
							fid
						} = this;
						if (fid) {
							const a = list.find(v => v.id === fid)
							if (a) {
								a.active = true;
							}
						} else {
							list[0].active = true;
							fid = list[0].id;
						}
						this.oneMenu = list
						this.fid = fid
						this.getsecondMenu()
					}
				}, false);
			},
			getsecondMenu() {
				const {
					fid
				} = this
				httpsRequest(config.api.getsecondMenu, 'get', {
					categoryId: fid
				}, (data) => {
					if (data.code == '1000') {
						this.secondMenu = data.data.list
					}
				}, false);
			},
			toSecoudList(val) {
				let {
					oneMenu
				} = this;
				oneMenu.map((v, i) => {
					v.active = false;
					if (v.id === val) {
						v.active = true;
					}
				})
				this.oneMenu = oneMenu
				this.fid = val
				this.getsecondMenu()
			},
			toDetail(id){
				uni.navigateTo({
					url:`/pages/detail/detail?id=${id}`
				})
			},
			onPullDownRefresh() {
				this.init()
			}
		}
	}
</script>

<style lang="less">
	.list-bg {
		width: 750rpx;
		background: #fff;
		min-height: 100vh;
		display: flex;

		.left-bg {
			width: 180rpx;
			background: #F7F7F7;
			border-radius: 0 8rpx 8rpx 0;
			min-height: 1000rpx;
			height: 100vh;
			overflow-y: auto;

			.item {
				height: 96rpx;
				line-height: 96rpx;
				text-align: center;
				position: relative;
				font-size: 28rpx;
				color: #666;

				&.active {
					background: #fff;

					&:before {
						position: absolute;
						content: '';
						width: 6rpx;
						height: 24rpx;
						background: #3162F4;
						top: 36rpx;
						left: 0;
					}
				}
			}
		}

		.right-bg {
			width: 570rpx;
			padding: 0 20rpx 80rpx;
			overflow: hidden;
			overflow-y: auto;
			min-height: 1000rpx;
			height: 100vh;
			padding-top: 20rpx;

			.item {
				width: 253rpx;
				margin-right: 20rpx;
				margin-bottom: 32rpx;
				position: relative;
				float: left;

				&:nth-child(2n) {
					margin-right: 0;
				}

				.img-bg {
					width: 254rpx;
					height: 172rpx;
					background: #FAF9F9;
					margin-bottom: 20rpx;
					text-align: center;
					padding-top: 26rpx;
					border-radius: 16rpx;

					image {
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
					height: 32rpx;
					line-height: 32rpx;
					width: 250rpx;
					margin-top: 14rpx;
					margin-bottom: 12rpx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}

				.price {
					font-size: 28rpx;
					height: 30rpx;
					text-align: left;
					color: #FE9A5B;
					overflow: hidden;
					font-weight: 700;
					line-height: 30rpx;
					margin-bottom: 10rpx;

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
					color: #B3B3B3;
				}


			}
		}
	}
</style>
