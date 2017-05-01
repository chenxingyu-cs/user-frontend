import React from 'react';
import { List } from 'antd-mobile';
import styles from './LaundryPointCard.css';


const Item = List.Item;
const Brief = Item.Brief;

function LaundryPointCard(machine) {
  console.log(machine.machine);
  const { id, name, price, timeNeeded, isFree } = machine.machine;
  let machineState = isFree ? "空闲" : "使用中";
  console.log(name);
  return (
    <Item key={id} wrap="true" extra={machineState} align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
      {name}
      <Brief wrap="true">标准洗  {price}元    {timeNeeded}分钟</Brief>
    </Item>
  );
}

export default LaundryPointCard;
