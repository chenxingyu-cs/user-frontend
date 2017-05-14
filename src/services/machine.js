import request from '../utils/request';

export function fetchStationByStationId({ id = 1 }) {
  return request(`/api/station?id=${id}`);
}
