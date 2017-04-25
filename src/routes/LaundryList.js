import React from 'react';
import { connect } from 'dva';
import styles from './LaundryList.css';
import LaundryListComponent from '../components/Laundries/LaundryList';
import MainLayout from '../components/MainLayout/MainLayout';

function LaundryList() {
  return (
    <MainLayout>
      <div className={styles.normal}>
        <LaundryListComponent />
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LaundryList);
