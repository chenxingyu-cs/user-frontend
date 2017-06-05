import React from 'react';
import { connect } from 'dva';
import styles from './OrderMenu.css';
import { List } from 'antd-mobile';

const Item = List.Item;
const Brief = Item.Brief;

function OrderMenu() {
  return (
    <List renderHeader={() => '订单管理'}>
      <Item
        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
        arrow="horizontal"
        onClick={() => {window.location = '/order/list';}}
      >订单管理</Item>
      <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
        arrow="horizontal"
        onClick={() => {window.location = '/order/search';}}
      >订单查询</Item>
    </List>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(OrderMenu);
