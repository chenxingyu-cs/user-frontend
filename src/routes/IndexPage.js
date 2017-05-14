import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './IndexPage.css';
import { Icon } from 'antd-mobile';
import MainLayout from '../components/MainLayout/MainLayout';

function IndexPage() {
  return (
    <MainLayout>
      <div className={styles.normal}>
        <h1 className={styles.title}>Yay! Welcome to dva!</h1>

        <Link to="/laundryList"><Icon type="bars" />List</Link>
        <Link to="/laundryStation/10"><Icon type="bars" />Station</Link>
        <Link to="/laundryMachine/1"><Icon type="bars" />Machine</Link>
      </div>
    </MainLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
