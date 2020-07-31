<script>
	export default {
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
			// ios不允许访问
			// uni.getSystemInfo({
			// 	success: function(res) {
			// 		if (res.platform == 'ios') {
			// 			uni.redirectTo({
			// 				url: '/pages/iosHide/iosHide',
			// 			});
			// 		}
			// 	}
			// });
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script>

<style lang="less">
	/* 解决头条小程序组件内引入字体不生效的问题 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		src: url('/static/uni.ttf');
	}

	/* #endif */

	button,
	view,
	text {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	button {
		border: none;
	}

	.font-clamp2 {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.font-clamp {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.right-tips {
		position: absolute;
		right: -10rpx;
		top: -10rpx;
		width: 70rpx;
		height: 54rpx;
		line-height: 38rpx;
		text-align: center;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 22rpx;
		color: #fff;

		.img {
			width: 70rpx;
			height: 54rpx;
			background-size: 100%;
			position: absolute;
			z-index: 1;
			left: 0;
			top: 0;
		}

		text {
			position: relative;
			z-index: 2;
		}
	}

	.logo-s {
		width: 22rpx;
		height: 22rpx;
		vertical-align: middle;
		margin-right: 10rpx;
		background-size: 100%;
	}

	.nothing-bg {
		width: 750rpx;
		min-height: calc(100vh - 107rpx);
		background: #fff;
		padding-top: 100rpx;

		.nothing-main {
			width: 302rpx;
			height: 200rpx;
			display: block;
			margin: 0 auto 45rpx;
		}

		.toIndex {
			width: 360rpx;
			height: 88rpx;
			line-height: 88rpx;
			background: rgba(40, 106, 255, 1);
			border-radius: 8rpx;
			font-size: 36rpx;
			text-align: center;
			color: #fff;
			margin: 95rpx auto 0;
			display: block;
		}

		.nothing-text {
			color: #cccccc;
			font-size: 28rpx;
			text-align: center;
		}
	}

	.noting {
		padding-top: 100rpx;
		text-align: center;
		font-size: 26rpx;
		min-height: 700rpx;
		color: rgba(245, 208, 144, .6);
		box-sizing: border-box;

		.btn-bg {
			display: block;
			border-radius: 40rpx;
			font-size: 28rpx;
			color: #331308;
			margin: 100rpx auto 0;
			width: 236rpx;
			height: 64rpx;
			line-height: 64rpx;
			background: linear-gradient(180deg, rgba(255, 227, 156, 1) 0%, rgba(184, 136, 55, 1) 100%);
			box-shadow: 0 4rpx 28rpx 0 rgba(0, 0, 0, 0.5);
			font-weight: 700;
		}

		.img-bg {
			background: url('https://fulu-mall.oss-cn-hangzhou.aliyuncs.com/bcfed39190f04d2a8e31540bc42dafe8.png') center no-repeat;
			background-size: contain;
			width: 750rpx;
			height: 444rpx;
			display: block;
		}
	}
</style>
