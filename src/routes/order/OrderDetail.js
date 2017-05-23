import React from 'react';
import { connect } from 'dva';
import styles from './OrderDetail.css';

function OrderDetail() {
  return (
    <div className={styles.normal}>
      Route Component: OrderDetail
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(OrderDetail);
