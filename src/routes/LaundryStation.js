import React from 'react';
import { connect } from 'dva';
import styles from './LaundryStation.css';
import LaundryDetailComponent from '../components/Laundries/LaundryStation';
import MainLayout from '../components/MainLayout/MainLayout';

function LaundryStation() {
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

export default connect(mapStateToProps)(LaundryStation);
