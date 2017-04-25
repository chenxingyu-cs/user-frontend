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
  },
  reducers: {
    save(state, { payload: { data: list } }) {
      return { ...state, list };
    },
  },
  effects: {
    *fetch({ payload: { page } }, { call, put }) {
      const { data } = yield call(laundriesService.fetch);
      yield put({ type: 'save', payload: { data } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/laundries') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
