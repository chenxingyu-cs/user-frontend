import { NavBar, Icon } from 'antd-mobile';
import React from 'react';

function Header() {
  return (
    <NavBar
      leftContent="后退" mode="light" onLeftClick={() => { console.log('onLeftClick'); this.context.router.goBack(); }}
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
    >NavBar</NavBar>
  );
}

export default Header;
