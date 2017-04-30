import * as laundriesService from '../services/laundries';

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
    total: 0,
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
        if (pathname === '/laundryList') {
          dispatch({ type: 'querySuccess', payload: query });
        }
      });
    },
  },
};
