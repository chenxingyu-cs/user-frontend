import pathToRegexp from 'path-to-regexp';
import * as stationService from '../services/station';

export default {
  namespace: 'laundryStation',
  state: {
    id: 0,
    location: '',
    name: '',
    machines: [],
  },
  reducers: {
    // save(state, { payload: { data: list, total } }) {
    //   console.log(list)
    //   console.log(state)
    //   return { ...state, list };
    // },

    querySuccess(state) {
      const result = laundriesService.fetchMachinesByLaundryId(1);
      console.log(result)
      return { ...state, ...result };
    },

    save(state, { payload: { data } }) {
      console.log(data);
      return { ...state, ...data };
    }
  },
  effects: {
    *fetch({ payload: { id } }, { call, put }) {
      console.log(id);
      const { data } = yield call(stationService.fetchStationByStationId, { id });
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
        const match = pathToRegexp('/laundry/station/:laundryId').exec(pathname);
        if (match) {
          const laundryId = match[1];
          // dispatch({ type: 'querySuccess', payload: query });
          dispatch({ type: 'fetch', payload: {id: laundryId} });
        }
        // if (pathname === '/laundryPoint') {
        //   dispatch({ type: 'querySuccess', payload: query });
        // }
      });
    },
  },
};
