if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../pages/index/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/detail/detail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/orderList/orderList?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/orderStatus/orderStatus?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/discount/discount?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/sureOrder/sureOrder?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/getCard/getCard?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/my/my?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/iosHide/iosHide?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/hotPage/hotPage?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/about/about?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/list/list?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/paySuccess/paySuccess?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/service/service?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/equityCard/equityCard?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/myEquityCard/myEquityCard?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/rechargeZC/rechargeZC?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/rechargeKM/rechargeKM?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/equityCardStatus/equityCardStatus?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/equityCardPay/equityCardPay?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/equityCardDetail/equityCardDetail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/rechange/rechange?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/login/login?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}