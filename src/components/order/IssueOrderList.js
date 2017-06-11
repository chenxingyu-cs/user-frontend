import React from 'react';
import { connect } from 'dva';
import styles from './IssueOrderList.css';
import { Accordion } from 'antd-mobile';
import IssueOrderCard from './IssueOrderCard';

function IssueOrderList({ongoing, finished}) {
  function onChange(files, type, index) {
    console.log(files, type, index);
    setState({
      files,
    });
  }

  return (
    <div className={styles.normal}>
      {ongoing.map(order =>
        <IssueOrderCard orderId={order.orderId} address={order.address} machine={order.machineName} />
      )}
      {finished.map(order =>
        <IssueOrderCard orderId={order.orderId} address={order.address} machine={order.machineName} />
      )}
    </div>
  );
}

function mapStateToProps(state) {
  const { ongoing, finished } = state.orders;
  return { ongoing, finished };
}

export default connect(mapStateToProps)(IssueOrderList);
