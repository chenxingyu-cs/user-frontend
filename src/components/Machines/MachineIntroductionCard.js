import React from 'react';
import styles from './MachineIntroductionCard.css';

function MachineIntroductionCard({ id, description, imageSrc, modelName, status }) {

  console.log("imageSrc", imageSrc)

  return (
    <div className={styles.normal}>
      <img src={imageSrc} role="presentation" style={{ width: '300px' }} />
      <div style={{ padding: '0.08rem' }}>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default MachineIntroductionCard;
