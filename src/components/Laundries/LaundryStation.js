import React from 'react';
import { connect } from 'dva';
import { List } from 'antd-mobile';
import styles from './LaundryStation.css';
import LaundryStationCard from './LaundryStationCard';

function LaundryStation({ list: dataSource }) {
  const itemList = [];
  for (let i = 0; i < dataSource.length; i += 1) {
    const tmp = dataSource[i];
    itemList.push(<LaundryStationCard machine={tmp} />);
  }
  return (
    <div className={styles.normal}>
      <List renderHeader={() => '洗衣店'} className="my-list">
        {itemList}
      </List>
    </div>
  );
}

function mapStateToProps(state) {
  const { list, total } = state.machines;
  return { list, total };
}

export default connect(mapStateToProps)(LaundryStation);
