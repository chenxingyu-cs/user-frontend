import React from 'react';
import { connect } from 'dva';
import styles from './LaundryPoint.css';
import LaundryDetailComponent from '../components/Laundries/Laundry';
import MainLayout from '../components/MainLayout/MainLayout';

function LaundryPoint() {
  return (
    <MainLayout>
      <div className={styles.normal}>
        <LaundryDetailComponent />
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LaundryPoint);
