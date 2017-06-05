import React from 'react';
import { connect } from 'dva';
import styles from './OrderList.css';
import { Tabs, WhiteSpace } from 'antd-mobile';
import OngoingOrderListComponent from '../../components/order/OngoingOrderList'
import FinishedOrderListComponent from '../../components/order/FinishedOrderList'
import { List, Flex } from 'antd-mobile';

import CountDownButton from '../../components/Common/CountDownButton'

const Item = List.Item;
const Brief = Item.Brief;

const TabPane = Tabs.TabPane;

function OrderList({ ongoing, finished, openid, headimgurl }) {

  function callback(key) {
    console.log('onChange', key);
    console.log(ongoing);
  }

  function handleTabClick(key) {
    console.log('onTabClick', key);
    console.log(finished);
  }

  function jumpToOrderDetail(orderId) {
    console.log(orderId);
  }

  return (
    <div className={styles.normal}>
      <div className={styles.topBar}>
        <img src={headimgurl} />
      </div>
      <Tabs defaultActiveKey="1" onChange={callback} onTabClick={handleTabClick}>
        <TabPane tab="进行中" key="1">
          <div style={{ backgroundColor: '#fff' }}>
          <div>
            订单号: {ongoing[0].orderId}
          </div>
          <div>
            <h4>{ongoing[0].address} | {ongoing[0].machineName} | {ongoing[0].functionName} </h4>
            price: {ongoing[0].price}
            openid: {openid}
          </div>
          </div>
        </TabPane>
        <TabPane tab="已结束" key="2">
          <div style={{ backgroundColor: '#fff'}}>
              {finished.map(order =>
                <Item arrow="horizontal" multipleLine onClick={e => jumpToOrderDetail(order.orderId)}>
                  {order.machineName}
                  <Brief>
                    完成时间: {order.finishTimestamp}
                  </Brief>
                </Item>
              )}
          </div>
        </TabPane>
      </Tabs>


    </div>
  );
}

function mapStateToProps(state) {
  const { ongoing, finished } = state.orders;
  const { openid, headimgurl } = state.wechatInfo;
  return { ongoing, finished, openid, headimgurl };
}

export default connect(mapStateToProps)(OrderList);
