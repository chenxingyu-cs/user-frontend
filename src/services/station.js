import request from '../utils/request';
import { HOST_URL } from '../utils/constants';

export function fetchStationByStationId({ id = 1 }) {
  // return request(`/api/station?id=${id}`);
  return request(`${HOST_URL}/station?id=${id}`);

}
