

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
      text: "速比坤10.5公斤搅拌式洗衣机",
      img: 'http://gfs3.gomein.net.cn/T1WkdTBmCv1RCvBVdK',
    },
    machineFunctions: [
      {
        id: 1,
        name: "Function 1",
        price: 1.00,
        intro: "This is the intro of function 1",
        img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
      },
      {
        id: 2,
        name: "Function 2",
        price: 2.00,
        intro: "This is the intro of function 2",
        img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
      },
      {
        id: 3,
        name: "Function 3",
        price: 3.00,
        intro: "This is the intro of function 3",
        img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
      },
      {
        id: 4,
        name: "Function 4",
        price: 4.00,
        intro: "This is the intro of function 4",
        img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
      },
    ],
  };
  return getResult;
}
