import React from 'react';
import { List } from 'antd-mobile';
import { browserHistory } from 'dva/router'
import styles from './LaundryStationCard.css';


const Item = List.Item;
const Brief = Item.Brief;


function LaundryStationCard(machine) {

  const { id, description, status, functions } = machine.machine;

  let statusStyle = styles.normalStatus;

  if (status === '故障') {
    statusStyle = styles.brokenStatus;
  } else if (status === '掉线') {
    statusStyle = styles.offlineStatus;
  } else if (status === '预约') {
    statusStyle = styles.orderedStatus;
  }

  function handleClick(id) {
    browserHistory.push(`/laundry/machine/${id}`);
  }

  const firstFunction = functions.length == 0 ? '' : `${functions[0].name} ${functions[0].time}分钟  ${functions[0].price}元`;
  return (
    <div className={styles.normal}>
      <Item
        key={id}
        wrap="true"
        extra={
          <span className={statusStyle}>
            {status}
          </span>
        }
        align="top"
        multipleLine
        onClick={() => { handleClick(id); }}>
        {description}
        <Brief wrap="true">{firstFunction}</Brief>
      </Item>
    </div>
  );
}

export default LaundryStationCard;
