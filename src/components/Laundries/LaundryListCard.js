import React from 'react';
import { List } from 'antd-mobile';
import styles from './LaundryListCard.css';


const Item = List.Item;
const Brief = Item.Brief;


function LaundryListCard(laundry) {
  console.log(laundry.laundry);
  const { id, name, distance, total, washerNum, dryerNum, free } = laundry.laundry;
  console.log(name);
  return (
    <Item key={id} wrap="true" extra={distance} align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
      {name}
      <Brief wrap="true">洗衣{washerNum}台 烘干{dryerNum}台</Brief>
    </Item>
  );
}

export default LaundryListCard;
