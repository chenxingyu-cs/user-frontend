import React from 'react';
import { connect } from 'dva';
import styles from './LaundryMachine.css';
import MachineDetailComponent from '../components/Machines/MachineDetail';

function LaundryMachine() {
  return (
    <div className={styles.normal}>
      <MachineDetailComponent />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LaundryMachine);
