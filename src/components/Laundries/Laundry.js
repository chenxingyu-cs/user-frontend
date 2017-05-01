import React from 'react';
import { connect } from 'dva';
import { List } from 'antd-mobile';
import styles from './Laundry.css';
import LaundryPointCard from './LaundryPointCard';

const Item = List.Item;
const Brief = Item.Brief;

function Laundry({ list: dataSource, total }) {
  console.log('in component...');
  console.log(dataSource);
  console.log(total);
  let itemList = []
  for (let i = 0; i < dataSource.length; i++) {
    const tmp = dataSource[i];
    itemList.push(<LaundryPointCard machine={tmp}/>);
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
  const { list, total } = state.machines;
  return { list, total };
}

export default connect(mapStateToProps)(Laundry);
