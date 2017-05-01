

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
