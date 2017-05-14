import React from 'react';
import { List } from 'antd-mobile';
import styles from './LaundryStationCard.css';


const Item = List.Item;
const Brief = Item.Brief;

function LaundryStationCard(machine) {
  const { id, name, price, timeNeeded, isFree } = machine.machine;
  const machineState = isFree ? '空闲' : '使用中';
  return (
    <div className={styles.normal}>
      <Item key={id} wrap="true" extra={machineState} align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
        {name}
        <Brief wrap="true">标准洗 {price}元 {timeNeeded}分钟</Brief>
      </Item>
    </div>
  );
}

export default LaundryStationCard;
