import React from 'react';
import { connect } from 'dva';
import styles from './OrderHistory.css';

function OrderHistory() {
  return (
    <div className={styles.normal}>
      Route Component: OrderHistory
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(OrderHistory);
