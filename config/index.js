export default {
	host: 'https://it-h5-open-api-admin.suuyuu.cn',
	// host: 'https://pre-h5-open-api-admin.suuyuu.cn',  // openAPI地址pre
	// host: 'https://alipay-user.mall.api-admin.fulu.com',
	// it
	// codeKey: 'WL8Yitso',
	// merInfoId: '379022a7-69e1-40e1-a631-f6a0ce44db58',
	// templateInfoId: '652ebea4-e973-449f-a953-86e8e421a758',
	// merTemplateId: '00f1745f-b325-41b0-a289-663f1084bd35',
	// codeKey: 'XjT4K70q',
	// merInfoId: 'bcc1adce-927a-4c0b-88c0-c446a0435b98',
	// templateInfoId: '29f08739-861a-416d-9e03-1552a8e42234',
	// merTemplateId: '5eefc360-4018-4377-a49d-10a3215329b7',
	codeKey: 'cscfQ8K7',
	merInfoId: 'ce25a726-0876-4318-9ebb-b46610e18e55',
	templateInfoId: '652ebea4-e973-449f-a953-86e8e421a758',
	merTemplateId: '3785bc96-3dd4-4ad4-a72b-302ec82e3e13',
	api: {
		// 授权
		getUserInfo: '/api/authorize/fuluusertoken', // 获取支付宝用户信息
		// 商品
		recommendProduct: '/api/Product/GetSmallRoutinePayComplete', // 获取推荐商品分类
		getBanner: '/api/Advertisement/GetBanner', // 获取banner
		getIndexMenu: '/api/Category/GetHomeCategory', // 获取首页推荐分类
		getOneMenu: '/api/Category/GetCategory', // 一级分类
		getsecondMenu: '/api/Category/GetChildCategory', // 商品二级分类列表 
		getGoodsList: '/api/Product/GetProductList', // 获取商品
		getGameProTemp: '/api/Product/GetProductTemp', // 获取游戏商品模板内容 区服务器等信息
		getProductActivity: '/api/Product/GetProductActivity', // 获取限时抢购列表GET

		// 订单
		sendOrder: '/api/Order/SendOrder', // 直充下单
		sendCardOrder: '/api/Order/SendCardOrder', // 卡密下单
		getOrderList: '/api/Order/GetOrderList', // 获取订单列表
		getOrderDetail: '/api/Order/GetOrderDetail', // 获取订单详情
		extractCard: '/api/Order/ExtractCard', // 提取卡密
		// 限时抢购商品
		getPassCode: '/api/Product/GetPassCode', // 获取抢购授权码
		getPassCodeStatus: '/api/Product/GetPassCodeStatus', // 获取用户资格状态

		// 支付
		unifiedorder: '/api/merchantpay/UnifiedOrder', //统一支付
		getHotCategory: '/api/Category/GetHotCategory', // 支付后推荐
		payStatus: '/api/merchantpay/checklist', // 支付状态 
		// 权益包
		getEquityCardInfo: '/api/EquityCard/GetEquityCardInfo', //获取权益包信息
		getUserInfo: '/api/authorize/fuluusertoken', // 获取支付宝用户信息
		purchaseEquityCard: '/api/EquityCard/PurchaseEquityCard', // 权益卡购买
		getPayEquityCard: '/api/EquityCard/GetPayEquityCard', // 获取待支付权益订单
		getUserEquityCard: '/api/EquityCard/GetUserEquityCard', // 用户权益卡
		getUserEquityCardDetail: '/api/EquityCard/GetUserEquityCardDetail', //获取用户权益包详情
		equityCardPay: '/api/merchantpay/EquityCardPay', // 获取权益卡订单支付信息
		getUserEquityCardProductDetail: '/api/EquityCard/GetUserEquityCardProductDetail', //  获取用户权益包商品详情
		equiCardSendOrder: '/api/EquityCard/equiCardSendOrder', // 权益卡直充/卡密下单

		verificationcode: '/api/Other/Verificationcode', // 发送验证码
		touristlogincode: '/api/Other/Touristlogincode', // 验证验证码
	}
}
