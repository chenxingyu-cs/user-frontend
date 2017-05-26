import request from '../utils/request';

export function fetchMachineByMachineId({ id = 1 }) {
  return request(`http://115.159.49.23/machine?id=${id}`);
}
