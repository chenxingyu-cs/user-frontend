import React from 'react';
import { connect } from 'dva';
import { List } from 'antd-mobile';
import styles from './LaundryList.css';

const Item = List.Item;
const Brief = Item.Brief;

function LaundryList() {
  return (
    <div className={styles.normal}>
      <List renderHeader={() => '你附近的洗衣店有：'} className="my-list">
        <Item wrap="true" extra="0.8km" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
          洗衣点A
          <Brief wrap="true">洗衣5台 烘干5台</Brief>
        </Item>
        <Item wrap="true" extra="1.0km" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
          洗衣点B
          <Brief wrap="true">洗衣3台 烘干0台</Brief>
        </Item>
        <Item wrap="true" extra="1.2km" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
          洗衣点C
          <Brief wrap="true">洗衣0台 烘干5台</Brief>
        </Item>
        <Item wrap="true" extra="2.4km" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
          洗衣点D
          <Brief wrap="true">洗衣10台 烘干10台</Brief>
        </Item>
        <Item wrap="true" extra="2.5km" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
          洗衣点E
          <Brief wrap="true">洗衣6台 烘干0台</Brief>
        </Item>
        <Item wrap="true" extra="3.0km" align="top" thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png" multipleLine>
          洗衣点F
          <Brief wrap="true">洗衣5台 烘干5台</Brief>
        </Item>
      </List>
    </div>
  );
}

function mapStateToProps(state) {
  const { list } = state.laundries;
  return {
    list,
  };
}

export default connect(mapStateToProps)(LaundryList);
