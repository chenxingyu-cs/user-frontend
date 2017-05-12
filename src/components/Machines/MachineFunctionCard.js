import React from 'react';
import styles from './MachineFunctionCard.css';

function MachineFunctionCard({ machineFunction }) {
  return (
    <div className={styles.normal}>
      <img src={machineFunction.img} role="presentation" className={styles.functionImg} />
      <div>
        <span>{machineFunction.name}</span>
      </div>
    </div>
  );
}

export default MachineFunctionCard;
