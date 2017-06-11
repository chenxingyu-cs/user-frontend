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
        wx.scanQRCode();
      });
      wx.error((err) => {
        console.error(JSON.stringify(err))
      });
      return { ...state, ...data };
    }
  },
  effects: {
    *wxconfigFetcher({ payload: { url } }, { call, put }) {
      const { data } = yield call(wechatService.fetchConfig, { url });
      yield put({ type: 'wxconfig', payload: { data } });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        dispatch({ type: 'wxconfigFetcher', payload: {url: location.href.split('#')[0]} });
      });
    },
  },
};
