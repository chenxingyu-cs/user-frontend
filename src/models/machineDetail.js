import pathToRegexp from 'path-to-regexp';
import * as laundriesService from '../services/laundries';
import * as laundryDetailService from '../services/laundryDetail';

export default {
  namespace: 'machineDetail',
  state: {
    machineIntro: {},
    machineFunctions: [],
    currentFunctionIndex: 0,
  },
  reducers: {
    // save(state, { payload: { data: list, total } }) {
    //   console.log(list)
    //   console.log(state)
    //   return { ...state, list };
    // },

    querySuccess(state) {
      const result = laundriesService.getMachineDetail(1);
      const currentFunctionIndex = 0;
      return { ...state, ...result, currentFunctionIndex };
    },

    setCurrentFunctionIntro(state, { payload: index }) {
      let { machineIntro, machineFunctions, currentFunctionIndex } = state;
      currentFunctionIndex = index;
      return { ...state, machineIntro, machineFunctions, currentFunctionIndex };
    },
  },
  effects: {
    *sendFunctionControlRequest({ payload: functionId }, { call, put }) {
        const {data, err} = yield call(laundryDetailService.sendFunctionControlRequest, functionId);

    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        const match = pathToRegexp('/laundry/machine/:machineId').exec(pathname);
        if (match) {
          const machineId = match[1];
          dispatch({ type: 'querySuccess', payload: query });
        }
        // if (pathname === '/laundryPoint') {
        //   dispatch({ type: 'querySuccess', payload: query });
        // }
      });
    },
  },
};
