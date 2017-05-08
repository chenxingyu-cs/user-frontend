import React from 'react';
import { connect } from 'dva';
import styles from './LaundryMachine.css';
import MachineDetailComponent from '../components/Machines/MachineDetail';
import MainLayout from '../components/MainLayout/MainLayout';

function LaundryMachine() {
  return (
    <MainLayout>
      <div className={styles.normal}>
        <MachineDetailComponent />
      </div>
    </MainLayout>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(LaundryMachine);
