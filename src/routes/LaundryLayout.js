import React from 'react';
import { connect } from 'dva';
import styles from './LaundryLayout.css';
import MainLayout from '../components/MainLayout/MainLayout';

function LaundryLayout({ children, title }) {
  const laundryTitle = "洗衣";
  return (
    <MainLayout tabBarIndex={0} title={laundryTitle}>
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
