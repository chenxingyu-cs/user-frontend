import React from 'react';
import { connect } from 'dva';
import styles from './LaundryList.css';
import LaundryListComponent from '../components/Laundries/LaundryList';

function LaundryList() {
  return (
    <div className={styles.normal}>
      <LaundryListComponent />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LaundryList);
