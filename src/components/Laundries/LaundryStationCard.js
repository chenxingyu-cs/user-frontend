import React from 'react';
import { List } from 'antd-mobile';
import styles from './LaundryStationCard.css';


const Item = List.Item;
const Brief = Item.Brief;

function LaundryStationCard(machine) {

  function handleClick(id) {
    window.location = '/#/laundryMachine/' + id;
  }

  const { id, description, status, functions } = machine.machine;
  const firstFunction = functions.length == 0 ? '' : `${functions[0].time}分钟  ${functions[0].price}元`;
  return (
    <div className={styles.normal}>
      <Item
        key={id}
        wrap="true"
        extra={status}
        align="top"
        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
        multipleLine
        onClick={() => { handleClick(id); }}>
        {description}
        <Brief wrap="true">标准洗 {firstFunction}</Brief>
      </Item>
    </div>
  );
}

export default LaundryStationCard;
