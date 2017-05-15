import React from 'react';
import { connect } from 'dva';
import styles from './UserLayout.css';
import MainLayout from '../../components/MainLayout/MainLayout';

function UserLayout({ children }) {
  const userTitle = "用户中心";
  return (
    <MainLayout tabBarIndex={3} title={userTitle}>
      <div className={styles.normal}>
        {children}
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(UserLayout);
