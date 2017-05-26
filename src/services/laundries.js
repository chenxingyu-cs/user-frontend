import request from '../utils/request';

export function fetch() {
  const getResult = {
    total: 6,
    list: [
      {
        id: 1,
        name: '洗衣点 A',
        distance: '0.8km',
        total: 5,
        washerNum: 3,
        dryerNum: 2,
        free: 5,
      },
      {
        id: 2,
        name: '洗衣点 B',
        distance: '1.8km',
        total: 5,
        washerNum: 3,
        dryerNum: 2,
        free: 5,
      },
      {
        id: 3,
        name: '洗衣点 C',
        distance: '2.0km',
        total: 5,
        washerNum: 3,
        dryerNum: 2,
        free: 5,
      },
      {
        id: 4,
        name: '洗衣点 D',
        distance: '2.1km',
        total: 5,
        washerNum: 3,
        dryerNum: 2,
        free: 5,
      },
      {
        id: 5,
        name: '洗衣点 E',
        distance: '2.3km',
        total: 5,
        washerNum: 3,
        dryerNum: 2,
        free: 5,
      },
      {
        id: 6,
        name: '洗衣点 F',
        distance: '3.3km',
        total: 5,
        washerNum: 3,
        dryerNum: 2,
        free: 5,
      },
    ],
  };
  return getResult;
}

export function fetchMachinesByLaundryId(id) {
  const getResult = {
    total: 6,
    list: [
      {
        id: 1,
        name: '洗衣机 A',
        price: 5.00,
        timeNeeded: 30,
        isFree: true,
      },
      {
        id: 2,
        name: '洗衣机 B',
        price: 5.00,
        timeNeeded: 30,
        isFree: true,
      },
      {
        id: 3,
        name: '洗衣机 C',
        price: 5.00,
        timeNeeded: 30,
        isFree: true,
      },
      {
        id: 4,
        name: '洗衣机 D',
        price: 5.00,
        timeNeeded: 30,
        isFree: true,
      },
      {
        id: 5,
        name: '洗衣机 E',
        price: 5.00,
        timeNeeded: 30,
        isFree: true,
      },
      {
        id: 6,
        name: '洗衣机 F',
        price: 5.00,
        timeNeeded: 30,
        isFree: true,
      },
    ],
  };
  return getResult;
}

export function getMachineDetail(id) {
  const getResult = {
    machineIntro: {
      text: '速比坤10.5公斤搅拌式洗衣机',
      img: 'http://gfs3.gomein.net.cn/T1WkdTBmCv1RCvBVdK',
    },
    machineFunctions: [
      {
        id: 1,
        name: '桶自洁',
        price: 1.00,
        intro: '洗衣前自动清洁内桶，所需时间2分钟，1元',
        img: 'https://www.shareicon.net/data/2017/02/07/878493_front_512x512.png',
      },
      {
        id: 2,
        name: '标准洗',
        price: 2.00,
        intro: '标准洗，所需时间20分钟，6元',
        img: 'https://www.shareicon.net/data/2017/02/07/878493_front_512x512.png',
      },
      // {
      //   id: 3,
      //   name: '单脱水',
      //   price: 3.00,
      //   intro: '单脱水，所需时间10分钟，5元',
      //   img: 'https://www.shareicon.net/data/2017/02/07/878493_front_512x512.png',
      // },
      // {
      //   id: 4,
      //   name: '加强洗',
      //   price: 4.00,
      //   intro: '加强洗，所需时间20分钟，10元',
      //   img: 'https://www.shareicon.net/data/2017/02/07/878493_front_512x512.png',
      // },
    ],
  };
  return getResult;
}

export function fetchLaundriesNearby({ id = 1 }) {
  // return request(`/api/station?id=${id}`);
  return request(`http://115.159.49.23/station/all?city=%E5%8C%97%E4%BA%AC&lati=37&longi=122`);

}
