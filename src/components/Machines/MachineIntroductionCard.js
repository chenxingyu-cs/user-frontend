import React from 'react';
import styles from './MachineIntroductionCard.css';

function MachineIntroductionCard({ machine }) {
  return (
    <div className={styles.normal}>
      <img src={machine.img} role="presentation" style={{ width: '300px' }} />
      <div style={{ padding: '0.08rem' }}>
        <span>{machine.text}</span>
      </div>
    </div>
  );
}

export default MachineIntroductionCard;