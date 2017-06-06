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

function OrderList({ ongoing, finished, openid, headimgurl, nickname }) {

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

  function getDateString(timestamp) {
    const date = new Date(timestamp);
    return date.toString();
  }

  return (
    <div className={styles.normal}>
      <div className={styles.topBar}>
        <div className={styles.avatarDiv}>
          <img src={headimgurl} className={styles.avatarImg}/>
        </div>
        <div className={styles.nameDiv}>
          <p> Hi, {nickname} </p>
        </div>
        <img src="http://www.freeiconspng.com/uploads/laundry-basket-icon-png-2.png" className={styles.backgroundImg}/>
      </div>
      <Tabs defaultActiveKey="1" onChange={callback} onTabClick={handleTabClick}>
        <TabPane tab="进行中" key="1">
        {ongoing.map(order =>
          <div>
            <div className={styles.orderDetail}>
              订单号: <p style={{fontWeight: 'bold', display: 'inline'}}>{order.orderId}</p>
            </div>
            <div className={styles.orderDetail}>
              <p style={{fontWeight: 'bold'}}>
                {order.address}
                {order.machineName}
                {order.functionName}
              </p>
              金额: {order.price}元
              <Flex>
                <Flex.Item>
                  <Button className="btn" type="primary" size="small">支付</Button>
                </Flex.Item>
                <Flex.Item>
                  <Button className="btn" type="ghost" size="small">取消</Button>
                </Flex.Item>
              </Flex>
            </div>
            <WhiteSpace />
            <WhiteSpace />
          </div>
        )}
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
  const { openid, headimgurl, nickname } = state.wechatInfo;
  return { ongoing, finished, openid, headimgurl, nickname };
}

export default connect(mapStateToProps)(OrderList);
