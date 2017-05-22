import React from 'react';
import styles from './FinishedOrderList.css';
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

function FinishedOrderList({finishedOrderList}) {
  return (
    <div className={styles.normal}>
      <List>
        {finishedOrderList.map(order =>
          <Item arrow="horizontal" multipleLine>
            {order.address} | {order.machineName} | {order.functionName}
            <Brief>
              完成时间: {order.finishTimestamp}
            </Brief>
          </Item>
        )}

      </List>
    </div>
  );
}

export default FinishedOrderList;
