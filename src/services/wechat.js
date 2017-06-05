import request from '../utils/request';
import { HOST_URL } from '../utils/constants';

export function fetchOpenId({ code = "" }) {
  return request(`${HOST_URL}/wechat/userinfo?code=${code}`);

}
