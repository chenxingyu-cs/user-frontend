import React from 'react';
import { connect } from 'dva';
import styles from './IssueReport.css';
import IssueOrderListComponent from '../components/order/IssueOrderList';

function IssueReport() {
  return (
    <div className={styles.normal}>
      <h2>故障申报</h2>
      <IssueOrderListComponent />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(IssueReport);
