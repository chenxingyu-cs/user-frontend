import request from '../utils/request';
import { HOST_URL } from '../utils/constants';

export function fetchMachineByMachineId({ id = 1 }) {
  return request(`${HOST_URL}/machine?id=${id}`);
}
