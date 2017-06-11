import * as wechatService from '../services/wechat';

export default {
  namespace: 'wxconfig',
  state: {
    debug: false,
    appId: "",
    timestamp: "",
    nonceStr: "",
    signature: "",
    jsApiList: [
      'openLocation',
      'getLocation',
      'scanQRCode',
      'chooseWXPay'
    ],
  },
  reducers: {
    wxconfig(state, { payload: { data } }) {
      let wechatState = {
        debug: false,
        appId: data.appId,
        timestamp: data.timestamp,
        nonceStr: data.nonceStr,
        signature: data.signature,
        jsApiList: [
          'openLocation',
          'getLocation',
          'scanQRCode',
          'chooseWXPay'
        ]
      }
      console.log('wxconfig', wechatState);
      wx.config(wechatState);
      wx.ready(() => {
        console.log('ready');
      });
      wx.error((err) => {
        console.error(JSON.stringify(err))
      });
      return { ...state, ...data };
    }
  },
  effects: {
    *wxconfigFetcher({ payload: { url } }, { call, put }) {
      console.log('url: ', url);
      const { data } = yield call(wechatService.fetchConfig, { url });
      yield put({ type: 'wxconfig', payload: { data } });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/laundry/list') {
          dispatch({ type: 'wxconfigFetcher', payload: {url: location.href.split('#')[0]} });
        } else {
          wx.checkJsApi({
            jsApiList: [
              'openLocation',
              'getLocation',
              'scanQRCode',
              'chooseWXPay'
            ],
            success: function (res) {
              alert("without config: " + JSON.stringify(res));
            }
          });
        }
      });
    },
  },
};
