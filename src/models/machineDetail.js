import pathToRegexp from 'path-to-regexp';
import * as laundriesService from '../services/laundries';

export default {
  namespace: 'machineDetail',
  state: {
    machineIntro: {},
    machineFunctions: [],
    currentFunctionIntro: '',
  },
  reducers: {
    // save(state, { payload: { data: list, total } }) {
    //   console.log(list)
    //   console.log(state)
    //   return { ...state, list };
    // },

    querySuccess(state) {
      const result = laundriesService.getMachineDetail(1);
      const currentFunctionIntro = result.machineFunctions[0].intro;
      return { ...state, ...result, currentFunctionIntro };
    },

    setCurrentFunctionIntro(state, { payload: index }) {
      let { machineIntro, machineFunctions, currentFunctionIntro } = state;
      currentFunctionIntro = state.machineFunctions[index].intro;
      return { ...state, machineIntro, machineFunctions, currentFunctionIntro };
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
        const match = pathToRegexp('/laundryMachine/:machineId').exec(pathname);
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
