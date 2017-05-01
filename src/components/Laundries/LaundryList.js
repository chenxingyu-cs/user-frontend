import React from 'react';
import { connect } from 'dva';
import { List } from 'antd-mobile';
import styles from './LaundryList.css';
import LaundryListCard from './LaundryListCard';

const Item = List.Item;

function LaundryList({ list: dataSource, total }) {
  console.log('in component...');
  console.log(dataSource);
  console.log(total);
  const itemList = [];
  for (let i = 0; i < dataSource.length; i+=1) {
    const tmp = dataSource[i];
    itemList.push(<LaundryListCard laundry={tmp}/>);
  }
  return (
    <div className={styles.normal}>
      <List renderHeader={() => '你附近的洗衣店有：'} className="my-list">
        {itemList}
      </List>
    </div>
  );
}

function mapStateToProps(state) {
  const { list, total } = state.laundries;
  console.log('fefefe  fdsfdsfsfds');
  return { list, total };
}

export default connect(mapStateToProps)(LaundryList);
