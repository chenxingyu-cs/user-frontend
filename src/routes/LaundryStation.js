import React from 'react';
import { connect } from 'dva';
import styles from './LaundryStation.css';
import LaundryDetailComponent from '../components/Laundries/LaundryStation';

function LaundryStation() {
  return (
    <div className={styles.normal}>
      <LaundryDetailComponent />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LaundryStation);
