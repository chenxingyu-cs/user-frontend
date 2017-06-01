import * as laundriesService from '../services/laundries';
import OAuth from 'wechat-oauth';
const client = new OAuth('wxf53ebc8656c7b6c2', 'ef3649c7af8eb1edcd3c6a2f56fd52b6');
// export default {
//   namespace: 'laundries',
//   state: {},
//   reducers: {},
//   effects: {},
//   subscriptions: {},
// };

export default {
  namespace: 'laundries',
  state: {
    list: [],
  },
  reducers: {
    // save(state, { payload: { data: list, total } }) {
    //   console.log(list)
    //   console.log(state)
    //   return { ...state, list };
    // },

    querySuccess(state) {
      const result = laundriesService.fetch();
      return { ...state, ...result };
    },

    save(state, { payload: { data } }) {
      const list = {list: data};
      console.log(list);
      return { ...state, ...list };
    },
  },

  effects: {
    *fetch({ payload: { id } }, { call, put }) {
      console.log(id);
      const { data } = yield call(laundriesService.fetchLaundriesNearby, { id });
      yield put({ type: 'save', payload: { data } });
    },
  },
  // effects: {
  //   *fetch({ payload: { l1 = 1, l2 = 1 } }, { call, put }) {
  //     console.log('in effects!!');
  //     const { data } = yield call(laundriesService.fetch);
  //     yield put({ type: 'save', payload: { data } });
  //   },
  // },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/laundry/list') {
          // dispatch({ type: 'querySuccess', payload: query });
          const code = query.code;
          client.getAccessToken(code, function (err, result) {
            var accessToken = result.data.access_token;
            var openid = result.data.openid;
            client.getUser(openid, function (err, result) {
              console.log(result);
            });
          });
          dispatch({ type: 'fetch', payload: {id: 1} });
        }
      });
    },
  },
};
