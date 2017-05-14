import { NavBar, Icon } from 'antd-mobile';
import React from 'react';
import styles from './Header.css';

function Header() {
  return (
    <div className={styles.normal}>
      <NavBar
        leftContent="后退" mode="light" onLeftClick={() => { console.log('onLeftClick'); this.context.router.goBack(); }}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >NavBar</NavBar>
    </div>
  );
}

export default Header;
