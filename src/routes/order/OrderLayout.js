import React from 'react';
import { connect } from 'dva';
import styles from './OrderLayout.css';
import MainLayout from '../../components/MainLayout/MainLayout';

function OrderLayout({ children }) {
  const orderTitle = "订单管理";
  return (
    <MainLayout tabBarIndex={2} title={orderTitle}>
      <div className={styles.normal}>
        {children}
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(OrderLayout);
