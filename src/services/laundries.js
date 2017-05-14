

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
  // const getResult = {
  //   total: 6,
  //   list: [
  //     {
  //       id: 1,
  //       name: '洗衣机 A',
  //       price: 5.00,
  //       timeNeeded: 30,
  //       isFree: true,
  //     },
  //     {
  //       id: 2,
  //       name: '洗衣机 B',
  //       price: 5.00,
  //       timeNeeded: 30,
  //       isFree: true,
  //     },
  //     {
  //       id: 3,
  //       name: '洗衣机 C',
  //       price: 5.00,
  //       timeNeeded: 30,
  //       isFree: true,
  //     },
  //     {
  //       id: 4,
  //       name: '洗衣机 D',
  //       price: 5.00,
  //       timeNeeded: 30,
  //       isFree: true,
  //     },
  //     {
  //       id: 5,
  //       name: '洗衣机 E',
  //       price: 5.00,
  //       timeNeeded: 30,
  //       isFree: true,
  //     },
  //     {
  //       id: 6,
  //       name: '洗衣机 F',
  //       price: 5.00,
  //       timeNeeded: 30,
  //       isFree: true,
  //     },
  //   ],
  // };
  const getResult = {
    id: 10,
    name: "北京航空航天大学海淀校区洗衣房",
    location: "北京",
    machines: [
      {
        id: 1,
        modelName: "SBK001",
        functions: [
          {
            id: 1,
            name: "标准洗",
            price: 5,
            time: 30,
            description: "洗衣前自动清洁内筒, 所需时间30分钟 5.0元"
          },
          {
            id: 7,
            name: "强力洗",
            price: 4,
            time: 20,
            description: "滚筒混合洗, 所需时间20分钟 4.0元"
          }
        ],
        status: "空闲",
        description: "速比坤洗衣机001",
        imageSrc: "/folder/washer.jpg"
      },
      {
        id: 2,
        modelName: "SBK001",
        functions: [
          {
            id: 2,
            name: "脱水洗",
            price: 6,
            time: 10,
            description: "洗衣后脱水处理, 所需时间10分钟 6.0元"
          },
          {
            id: 8,
            name: "瞎几把洗",
            price: 12,
            time: 40,
            description: "动力轻柔, 所需时间40分钟 12.0元"
          }
        ],
        status: "故障",
        description: "速比坤洗衣机002",
        imageSrc: "/folder/washer.jpg"
      },
      {
        id: 3,
        modelName: "SBK001",
        functions: [
          {
            id: 3,
            name: "标准洗",
            price: 5,
            time: 30,
            description: "洗衣前自动清洁内筒, 所需时间30分钟 5.0元"
          },
          {
            id: 9,
            name: "强力洗",
            price: 4,
            time: 20,
            description: "滚筒混合洗, 所需时间20分钟 4.0元"
          },
          {
            id: 10,
            name: "瞎几把洗",
            price: 12,
            time: 40,
            description: "动力轻柔, 所需时间40分钟 12.0元"
          }
        ],
        status: "空闲",
        description: "速比坤洗衣机003",
        imageSrc: "/folder/washer.jpg"
      },
      {
        id: 4,
        modelName: "HGJ001",
        functions: [
          {
            id: 4,
            name: "标准烘干",
            price: 4,
            time: 20,
            description: "适用于涤纶纯棉衣物烘干, 所需时间20分钟 4.0元"
          }
        ],
        status: "空闲",
        description: "速比坤烘干机001",
        imageSrc: "/folder/washer.jpg"
      },
      {
        id: 5,
        modelName: "HGJ001",
        functions: [
          {
            id: 5,
            name: "标准烘干",
            price: 4,
            time: 20,
            description: "适用于涤纶纯棉衣物烘干, 所需时间20分钟 4.0元"
          }
        ],
        status: "掉线",
        description: "速比坤烘干机002",
        imageSrc: "/folder/washer.jpg"
      },
      {
        id: 6,
        modelName: "HGJ001",
        functions: [
          {
            id: 6,
            name: "标准烘干",
            price: 4,
            time: 20,
            description: "适用于涤纶纯棉衣物烘干, 所需时间20分钟 4.0元"
          }
        ],
        status: "使用中",
        description: "速比坤烘干机003",
        imageSrc: "/folder/washer.jpg"
      }
    ]
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
        intro: '洗衣前自动清洁内桶，所需时间2分钟，0元',
        img: 'https://www.shareicon.net/data/2017/02/07/878493_front_512x512.png',
      },
      {
        id: 2,
        name: '标准洗',
        price: 2.00,
        intro: '标准洗，所需时间20分钟，5元',
        img: 'https://www.shareicon.net/data/2017/02/07/878493_front_512x512.png',
      },
      {
        id: 3,
        name: '单脱水',
        price: 3.00,
        intro: '单脱水，所需时间10分钟，5元',
        img: 'https://www.shareicon.net/data/2017/02/07/878493_front_512x512.png',
      },
      {
        id: 4,
        name: '加强洗',
        price: 4.00,
        intro: '加强洗，所需时间20分钟，10元',
        img: 'https://www.shareicon.net/data/2017/02/07/878493_front_512x512.png',
      },
    ],
  };
  return getResult;
}
