import React from 'react';
import { connect } from 'dva';
import styles from './OrderList.css';
import { Button, Flex, List, Tabs, WhiteSpace } from 'antd-mobile';
import OngoingOrderListComponent from '../../components/order/OngoingOrderList'
import FinishedOrderListComponent from '../../components/order/FinishedOrderList'

import CountDownButton from '../../components/Common/CountDownButton'

const Item = List.Item;
const Brief = Item.Brief;

const TabPane = Tabs.TabPane;

function OrderList({ ongoing, finished }) {

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
        <div className={styles.avatarDiv}>
          <img src="https://www.themarysue.com/wp-content/uploads/2015/12/avatar.jpeg" className={styles.avatarImg}/>
        </div>
        <div className={styles.nameDiv}>
          <p> Hi, Wenhao.Yun </p>
        </div>
        <img src="http://www.freeiconspng.com/uploads/laundry-basket-icon-png-2.png" className={styles.backgroundImg}/>
      </div>
      <Tabs defaultActiveKey="1" onChange={callback} onTabClick={handleTabClick}>
        <TabPane tab="进行中" key="1">
          <div>
            <div className={styles.orderDetail}>
              订单号: <p style={{fontWeight: 'bold', display: 'inline'}}>{ongoing[0].orderId}</p>
            </div>
            <div className={styles.orderDetail}>
              <p style={{fontWeight: 'bold'}}>{ongoing[0].address} | {ongoing[0].machineName} | {ongoing[0].functionName} </p>
              金额: {ongoing[0].price}
              <Flex>
                <Flex.Item>
                  <Button className="btn" type="primary" size="small">支付</Button>
                </Flex.Item>
                <Flex.Item>
                  <Button className="btn" type="ghost" size="small">取消</Button>
                </Flex.Item>
              </Flex>
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
  return { ongoing, finished };
}

export default connect(mapStateToProps)(OrderList);
