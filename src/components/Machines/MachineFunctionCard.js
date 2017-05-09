import React from 'react';
import styles from './MachineFunctionCard.css';

function MachineFunctionCard({machineFunction}) {
  console.log(machineFunction);
  return (
    <div className={styles.normal}>
      <img src={machineFunction.img} className={styles.functionImg}/>
      <div>
        <span>{machineFunction.name}</span>
      </div>
    </div>
  );
}

export default MachineFunctionCard;
