import React from 'react';
import { List } from 'antd-mobile';
import styles from './LaundryListCard.css';


const Item = List.Item;
const Brief = Item.Brief;

function LaundryListCard(laundry) {
  function handleClick(id) {
    window.location = '/#/laundryPoint/' + id;
  }

  const { id, name, distance, washerNum, dryerNum } = laundry.laundry;

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
        <Brief wrap="true">洗衣{washerNum}台 烘干{dryerNum}台</Brief>
      </Item>
    </div>
  );
}

export default LaundryListCard;
