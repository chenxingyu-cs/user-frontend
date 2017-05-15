import request from '../utils/request';

export function fetchStationByStationId({ id = 1 }) {
  return request(`http://wxgzhpaytest.maxtropy.com:8001/station?id=${id}`);
}
