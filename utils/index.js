import config from '../config/index';
// 封装请求
// api接口地址  方法  传参  成功回调 失败回调 是否需要登陆  
function httpsRequest(api, method, data, successCallBack, needLogin, failCallBack) {
	let header = {
		'content-type': 'application/json',
		codekey: config.codeKey,
		merchantId: config.merInfoId
	};
	if (needLogin) {
		try {
			let userInfo = uni.getStorageSync('userInfo');
			if (userInfo) {
				Object.assign(header, {
					fuluId: userInfo.fuluId,
					fuluToken: userInfo.fuluToken
				})
			} else {
				uni.reLaunch({
					url: "/pages/my/my"
				})
			}
		} catch (e) {
			console.log(e)
		}
	}
	if (api !== '/api/Product/GetTwoProClassList') {
		uni.showLoading();
	}
	uni.request({
		url: config.host + api,
		method,
		data,
		header,
		success: (res) => {
			uni.stopPullDownRefresh();
			const data = res.data;
			uni.stopPullDownRefresh();
			const that = this;
			uni.hideLoading({
				page: that,
			});
			if (data.code == '1000') {
				successCallBack(data)
			} else if (data.code == '1013' || data.code == '1014' || data.code == '1015') { // -3 用户授权失效
				uni.setStorageSync('userInfo', '')
				successCallBack(data)
			} else {
				uni.showToast({
					icon: 'none',
					title: data.message,
				});
				successCallBack(data)
			}
		},
		fail: (err) => {
			const that = this;
			uni.hideLoading({
				page: that,
			});
			uni.stopPullDownRefresh();
			uni.redirectTo({
				url: "/pages/hotPage/hotPage"
			})
			uni.showToast({
				content: err,
			});
			failCallBack && failCallBack(err)
		}
	});
}
// 新的授权
function toLoginFuLu() {
	let userInfo = uni.getStorageSync('userInfo');
	// 没有用户信息
	if (!userInfo) {
		return new Promise((resolve, reject) => {
			// #ifdef MP-360 || H5
			// h5和360用手机号登录
			httpsRequest(config.api.getUserInfo, 'POST', {
				code: '18186146970', // 默认手机号登录写死
				env: 3,
				type: true
			}, (data) => {
				if (data.code === '1000') {
					uni.setStorageSync('userInfo', data.data)
					resolve(data.data)
				} else {
					reject(data.message)
				}
			}, false);
			// #endif
			// #ifdef MP-QQ
			qq.login({
				success(res) {
					if (res.code) {
						resolve(getFuluUserInfo(res.code, 4, true))
					} else {
						console.log('登录失败！' + res.errMsg)
					}
				}
			})
			// #endif
			// #ifdef MP-ALIPAY
			my.getAuthCode({
				// scopes: ['auth_user', 'ant_member_info', 'auth_life_msg'],
				scopes: ['auth_user'],
				success: (res) => {
					my.getAuthUserInfo({
						success: (result) => {
							uni.setStorageSync('sysUserInfo', result)
							resolve(getFuluUserInfo(res.authCode, 1, false))
						},
						fail: (err) => {
							reject(err)
						}
					});
				},
				fail: (err) => {
					reject(err)
				}
			})
			// #endif
			// #ifdef MP-WEIXIN
			wx.login({
				success(res) {
					if (res.code) {
						resolve(getFuluUserInfo(res.code, 2, false))
					} else {
						console.log('登录失败！' + res.errMsg)
					}
				}
			})
			// #endif
			// #ifdef MP-TOUTIAO
			tt.login({
				success(res) {
					if (res.code) {
						tt.getUserInfo({
							success(res) {
								uni.setStorageSync('sysUserInfo', res.userInfo, false)
							},
							fail(res) {
								console.log(`getUserInfo 调用失败`);
							}
						});
						resolve(getFuluUserInfo(res.code, 3))
					} else {
						console.log('登录失败！' + res.errMsg)
					}
				},
				fail(res) {
					console.log(`login调用失败`);
				}
			})
			// #endif
		})
	}
}
// 获取token openId
function getFuluUserInfo(code, env, type) {
	return new Promise((resolve, reject) => {
		httpsRequest(config.api.getUserInfo, 'Post', {
			code,
			env: env ? env : 3,
			type
		}, (res) => {
			// 成功
			const data = res.data;
			uni.setStorageSync('userInfo', data)
			resolve(data);
		}, false)
	});
}

function secondToDate(second_time, type) {
	var time = parseInt(second_time) > 9 ? '00:00:' + parseInt(second_time) : '00:00:0' + parseInt(second_time);
	var timeM = parseInt(second_time) > 9 ? '00分' + parseInt(second_time) : '00:0' + parseInt(second_time) + "秒";
	if (parseInt(second_time) > 60) {
		var second = parseInt(second_time) % 60;
		var min = parseInt(second_time / 60);
		time = '00:' + (min > 9 ? min : '0' + min) + ":" + (second > 9 ? second : '0' + second) + "";
		timeM = (min > 9 ? min : '0' + min) + "分" + (second > 9 ? second : '0' + second) + "秒";

		if (min > 60) {
			min = parseInt(second_time / 60) % 60;
			var hour = parseInt(parseInt(second_time / 60) / 60);
			time = (hour > 9 ? hour : '0' + hour) + ":" + (min > 9 ? min : '0' + min) + ":" + (second > 9 ? second : '0' +
				second) + "";
			if (hour > 24) {
				hour = parseInt(parseInt(second_time / 60) / 60) % 24;
				var day = parseInt(parseInt(parseInt(second_time / 60) / 60) / 24);
				time = day + "天 " + (hour > 9 ? hour : '0' + hour) + ":" + (min > 9 ? min : '0' + min) + ":" + (second > 9 ? second :
					'0' + second) + "";
			}
		}
	}
	if (type === 'arr') {
		return [day, hour, min, second];
	} else if (type === 'min') {
		return timeM
	} else {
		return time;
	}
}
export {
	httpsRequest,
	toLoginFuLu,
	secondToDate
}
