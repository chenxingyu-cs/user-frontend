import React from 'react';
import { connect } from 'dva';
import styles from './UserLayout.css';
import MainLayout from '../../components/MainLayout/MainLayout';

function UserLayout({ children }) {
  return (
    <MainLayout tabBarIndex={3}>
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
