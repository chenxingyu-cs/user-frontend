import React from 'react';
import { List } from 'antd-mobile';
import styles from './LaundryListCard.css';


const Item = List.Item;
const Brief = Item.Brief;

function LaundryListCard(laundry) {

  const { id, name, distance, washerNum, dryerNum, freeWasher, freeDryer } = laundry.laundry;
  function handleClick(id) {
    window.location = '/#/laundry/station/' + id;
  }

  // let washerBrief;
  // if (freeWasher == 0) {
  //   washerBrief = (
  //
  //   )
  // }

  return (
    <div className={styles.normal}>
      <Item
        key={id}
        wrap="true"
        extra={distance}
        align="top"
        onClick={() => { handleClick(id); }}
        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
        multipleLine
      >
        {name}
        <Brief wrap="true">
        <span>洗衣{washerNum}台</span> <span>空闲{freeWasher}台</span>
        </Brief>
        <Brief wrap="true">烘干{washerNum}台 空闲{freeDryer}台</Brief>
      </Item>
    </div>
  );
}

export default LaundryListCard;
