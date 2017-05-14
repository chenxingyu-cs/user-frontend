import React from 'react';
import { connect } from 'dva';
import styles from './LaundryLayout.css';
import MainLayout from '../components/MainLayout/MainLayout';

function LaundryLayout({ children }) {
  return (
    <MainLayout tabBarIndex={0}>
      <div className={styles.normal}>
        {children}
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LaundryLayout);
