import request from '../utils/request';

export function sendPinRequest({ phone = 17317924728 }) {
  console.log(phone);
  return request(`/api/sms?phone=${phone.replace(/ /g,'')}`);
}

export function signup({signData}) {
  let formData = new FormData();
  formData.append('phone', signData.phone.replace(/ /g,''));
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

export function signin({signinData}) {
  let formData = new FormData();
  formData.append('phone', signinData.phone.replace(/ /g,''));
  formData.append('password', signinData.password);
  // const headers = {
  //   'Accept': 'application/json, */*',
  //   'Content-Type': 'multipart/form-data'
  // }
  return request(`/api/signin`, {
    // headers,
    method: "POST",
    body: formData,
  });
}
