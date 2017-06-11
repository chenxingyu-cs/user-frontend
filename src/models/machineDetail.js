import pathToRegexp from 'path-to-regexp';
import * as laundriesService from '../services/laundries';
import * as laundryDetailService from '../services/laundryDetail';
import * as machineService from '../services/machine';

export default {
  namespace: 'machineDetail',
  state: {
    id: 0,
    description: "",
    imageSrc: "",
    modelName: "",
    status: "",
    functions: [
      {
        id: 0,
        name: "",
        price: 0,
        time: 0,
        description: "",
      }
    ],
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
      console.log('reduce change')
      let { machineIntro, machineFunctions, currentFunctionIndex } = state;
      currentFunctionIndex = index;
      return { ...state, machineIntro, machineFunctions, currentFunctionIndex };
    },

    save(state, { payload: { data } }) {
      console.log('machine save', data)

      return { ...state, ...data };
    },
  },
  effects: {
    *sendFunctionControlRequest({ payload }, { call, put }) {
      const { functionId, openid } = payload;
      console.log(functionId, openid);
      const {data} = yield call(machineService.sendFunctionControlRequest, payload);
      console.log('pay info data', data);
      wx.chooseWXPay({
        timestamp: data.timeStamp,
        nonceStr: data.nonceStr,
        package: data.prepayId,
        signType: data.signType,
        paySign: data.paySign,
        success: function(res) {
          alert(JSON.stringify(res));
        }
      });
    },

    *fetch({ payload: { id } }, { call, put }) {
      const { data } = yield call(machineService.fetchMachineByMachineId, { id });
      console.log("data1111", data)
      yield put({ type: 'save', payload: { data } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        const match = pathToRegexp('/laundry/machine/:machineId').exec(pathname);
        if (match) {
          const machineId = match[1];
          // dispatch({ type: 'querySuccess', payload: query });
          dispatch({ type: 'fetch', payload: {id: machineId} });
        }
        // if (pathname === '/laundryPoint') {
        //   dispatch({ type: 'querySuccess', payload: query });
        // }
      });
    },
  },
};
