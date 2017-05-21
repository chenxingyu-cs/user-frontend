import * as userService from '../services/user';
import {Toast} from 'antd-mobile';

export default {
  namespace: 'user',
  state: {
    id: 0,
    phone: 0,
    password: '',
    pin: '',

  },
  reducers: {},
  effects: {
    *sendPinRequest({ payload: phone }, { call, put }) {
      console.log('here in model!!')
      console.log(phone);
      yield call(userService.sendPinRequest, phone);
      // yield put({ type: 'reload' });
    },

    *signup({ payload: signData}, {call, put}) {
      const {data, err} = yield call(userService.signup, signData);
      const successSignup = !(err.toString() === 'Error: Unauthorized');
      const toastMessage = successSignup ? '注册成功！' : '注册失败';
      if (successSignup) {
        Toast.success('注册成功!!!');
        window.location = '/#/user/signin';
      } else {
        Toast.fail('注册失败...');
      }
    },

    *signin({ payload: signinData}, {call, put}) {
      const {data, err} = yield call(userService.signin, signinData);
      const successSignup = !(err.toString() === 'Error: Unauthorized');
      if (successSignup) {
        Toast.success('登录成功!!!');
        window.location = '/#/user/signin';
      } else {
        Toast.fail('登录失败...');
      }
    },


  },
  subscriptions: {},
};
