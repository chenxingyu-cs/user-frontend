import * as orderService from '../services/order';
import {Toast} from 'antd-mobile';

export default {
  namespace: 'orders',
  state: {
    ongoing: [
      {
        openid: '',
        address: '',
        createdTimestamp: '',
        finishTimestamp: '',
        finished: false,
        functionName: '',
        machineName: '',
        orderId: '',
        paid: false,
        price: '',
      }
    ],
    finished: [
      {
        openid: '',
        address: '',
        createdTimestamp: '',
        finishTimestamp: '',
        finished: false,
        functionName: '',
        machineName: '',
        orderId: '',
        paid: false,
        price: '',
      }
    ],
  },

  reducers: {
    querySuccess(state) {
      const result = orderService.fetch();
      console.log(result);
      return { ...state, ...result };
    },

    save(state, { payload: { data } }) {
      return { ...state, ...data };
    },
  },
  effects: {
    *fetch({ payload: { id } }, { call, put, select }) {
      const openid = yield select(state => state.wechatInfo.openid);
      console.log('order openid', openid);
      const { data } = yield call(orderService.fetchOrders, { openid });
      console.log('order data', data);
      yield put({ type: 'save', payload: { data } });
    },
    *fetchAll({ payload: { code } }, { call, put }) {
      const { data } = yield call(orderService.fetchOrdersByCode, { code });
      yield put({ type: 'save', payload: { data } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/order/list') {
          dispatch({ type: 'fetch', payload: {id: 1} });
          // dispatch({ type: 'querySuccess', payload: query });
        }
        if (pathname === '/issueReport') {
          dispatch({ type: 'querySuccess', payload: query });
          // if (query.code) {
          //   dispatch({ type: 'fetchAll', payload: {code: query.code} });
          // }
        }
      });
    },
  },
};
