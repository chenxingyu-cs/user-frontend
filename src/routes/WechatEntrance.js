import React from 'react';
import { connect } from 'dva';
import styles from './WechatEntrance.css';

function WechatEntrance() {
  return (
    <div className={styles.normal}>
      Route Component: WechatEntrance
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(WechatEntrance);
