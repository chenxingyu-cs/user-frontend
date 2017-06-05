import request from '../utils/request';
import { HOST_URL } from '../utils/constants';

export function fetchMachineByMachineId({ id = 1 }) {
  return request(`${HOST_URL}/machine?id=${id}`);
}

export function sendFunctionControlRequest({ functionId, openid }) {
  console.log('send api', functionId, openid);
  return request(`${HOST_URL}/order/pay?funcId=${functionId}&openid=${openid}`);
}
