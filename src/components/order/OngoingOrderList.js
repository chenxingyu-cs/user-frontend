import React from 'react';
import styles from './OngoingOrderList.css';

function OngoingOrderList({ongoingOrder}) {
  const {orderId, address, machineName, functionName, createdTimestamp, price} = ongoingOrder[0]
  return (
    <div className={styles.normal}>
      <div>
        订单号: {orderId}
      </div>
      <div>
        <h4>{address} | {machineName} | {functionName} </h4>
        price: {price}
      </div>
    </div>
  );
}

export default OngoingOrderList;
