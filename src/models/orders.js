import * as orderService from '../services/order';
import {Toast} from 'antd-mobile';

export default {
  namespace: 'orders',
  state: {
    "ongoing": [],
    "finished": [],
  },

  reducers: {
    querySuccess(state) {
      const result = orderService.fetch();
      console.log(result);
      return { ...state, ...result };
    },

    save(state, { payload: { data } }) {
      console.log(data);
      return { ...state, ...data };
    },
  },
  effects: {
    // *fetch({ call, put }) {
    //   const {data} = yield call(orderService.fetch);
    // }
    //
    *fetch({ payload: { id } }, { call, put }) {
      console.log('fdsfdsfsfdfsfsfs')
      const { data } = yield call(orderService.fetchOrders, { id });
      console.log(data);
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
      });
    },
  },
};
