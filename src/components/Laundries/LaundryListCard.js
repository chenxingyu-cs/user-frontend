import React from 'react';
import { List } from 'antd-mobile';
import styles from './LaundryListCard.css';


const Item = List.Item;
const Brief = Item.Brief;

function LaundryListCard(laundry) {

  const { id, name, distance, washerNum, dryerNum, freeWasher, freeDryer } = laundry.laundry;
  function handleClick(id) {
    window.location = '/#/laundry/station/' + id;
  }

  let washerStyle = styles.couldAccessMachine;
  let dryerStyle = styles.couldAccessMachine;
  if (freeWasher === 0) {
    washerStyle = styles.noFreeMachine;
    console.log(name)
  }
  if (freeDryer === 0) {
    dryerStyle = styles.noFreeMachine;
    console.log(name)
  }

  return (
    <div className={styles.normal}>
      <Item
        key={id}
        wrap="true"
        extra={distance}
        align="top"
        onClick={() => { handleClick(id); }}
        multipleLine
      >
        {name}
        <Brief wrap="true">
        <img src="http://res.cloudinary.com/dehc3tigv/image/upload/v1496212733/washer_zqpsbs.jpg" />
        <span> 洗衣{washerNum}台 </span>
        <span className={washerStyle}>空闲{freeWasher}台</span>

        </Brief>

        <Brief wrap="true">
        <img src="http://res.cloudinary.com/dehc3tigv/image/upload/v1496212730/dryer_pvf9q2.jpg" />
        <span> 烘干{washerNum}台 </span>
        <span className={dryerStyle}>空闲{freeDryer}台</span>
        </Brief>

      </Item>
    </div>
  );
}

export default LaundryListCard;
