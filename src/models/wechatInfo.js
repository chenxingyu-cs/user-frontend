import * as wechatService from '../services/wechat';

export default {
  namespace: 'wechatInfo',
  state: {
    city: "",
    country: "",
    headimgurl: "",
    language: "",
    nickname: "",
    openid: "",
    province: "",
    sex: 1,
  },
  reducers: {
    save(state, { payload: { data } }) {
      console.log(data);
      return { ...state, ...data };
    },
  },
  effects: {
    *fetch({ payload: { code } }, { call, put }) {
      console.log('code', code);
      const { data } = yield call(wechatService.fetchOpenId, { code });
      yield put({ type: 'save', payload: { data } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        console.log('query', query);
        console.log('pathname', pathname);

        if (pathname === '/laundry/list') {
          if (query.code) {
            dispatch({ type: 'fetch', payload: {code: query.code} });
          }
        }
      });
    },
  },
};
