import request from '../utils/request';

export function sendFunctionControlRequest({ functionId = 1 }) {
  return request(`/api/order/pay?funcId=${functionId}`);
}
