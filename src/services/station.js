import request from '../utils/request';

export function fetchStationByStationId({ id = 1 }) {
  return request(`/api/station?id=${id}`);
  // return request(`http://wxgzhpaytest.maxtropy.com/station?id=${id}`);

}
