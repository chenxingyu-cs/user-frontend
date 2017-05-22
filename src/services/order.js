import request from '../utils/request';

export function fetchOrders({ id = 1 }) {
  return request('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxf53ebc8656c7b6c2&redirect_uri=http%3a%2f%2fwxgzhpaytest.maxtropy.com%2forder%2fall&response_type=code&scope=snsapi_base&state=AUTH#wechat_redirect');
}


export function fetch() {
  const mockDate = {
    "ongoing": [
      {
        "orderId": "14951819833507549",
        "address": "北京",
        "machineName": "速比坤洗衣机001",
        "functionName": "标准洗",
        "price": "0",
        "createdTimestamp": "1495181983350",
        "finishTimestamp": null,
        "paid": false,
        "finished": false
      }
    ],
    "finished": [
      {
        "orderId": "14951819833507549",
        "address": "北京",
        "machineName": "速比坤洗衣机001",
        "functionName": "标准洗",
        "price": "0",
        "createdTimestamp": "1495181983350",
        "finishTimestamp": null,
        "paid": false,
        "finished": false
      },
      {
        "orderId": "14951819833507541",
        "address": "北京",
        "machineName": "速比坤洗衣机001",
        "functionName": "标准洗",
        "price": "0",
        "createdTimestamp": "1495181983350",
        "finishTimestamp": null,
        "paid": false,
        "finished": false
      },
      {
        "orderId": "14951819833507529",
        "address": "北京",
        "machineName": "速比坤洗衣机001",
        "functionName": "标准洗",
        "price": "0",
        "createdTimestamp": "1495181983350",
        "finishTimestamp": null,
        "paid": false,
        "finished": false
      },
      {
        "orderId": "14951819833557549",
        "address": "北京",
        "machineName": "速比坤洗衣机001",
        "functionName": "标准洗",
        "price": "0",
        "createdTimestamp": "1495181983350",
        "finishTimestamp": null,
        "paid": false,
        "finished": false
      },
    ],
  };
  return mockDate;
}
