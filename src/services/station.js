import request from '../utils/request';

export function fetchStationByStationId({ id = 1 }) {
  // return request(`/api/station?id=${id}`);
  return request(`http://115.159.49.23/station?id=${id}`);

}
