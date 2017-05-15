import request from '../utils/request';

export function sendPinRequest({ phone = 17317924728 }) {
  console.log(phone);
  return request(`/api/sms?phone=${phone}`);
}

export function signup({signData}) {
  console.log(signData.phone);
  let formData = new FormData();
  formData.append('phone', signData.phone);
  formData.append('pin', signData.pin);
  formData.append('password', signData.password);
  // const headers = {
  //   'Accept': 'application/json, */*',
  //   'Content-Type': 'multipart/form-data'
  // }
  return request(`/api/signup`, {
    // headers,
    method: "POST",
    body: formData,
  });
}
