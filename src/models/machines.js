import pathToRegexp from 'path-to-regexp';
import * as laundriesService from '../services/laundries';

export default {
  namespace: 'machines',
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
      const result = laundriesService.fetchMachinesByLaundryId(1);
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
        const match = pathToRegexp('/laundryPoint/:laundryId').exec(pathname);
        if (match) {
          const laundryId = match[1];
          dispatch({ type: 'querySuccess', payload: query });
        }
        // if (pathname === '/laundryPoint') {
        //   dispatch({ type: 'querySuccess', payload: query });
        // }
      });
    },
  },
};
