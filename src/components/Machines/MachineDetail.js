import React from 'react';
import { connect } from 'dva';
import { Grid, Flex, WhiteSpace, Button } from 'antd-mobile';
import styles from './MachineDetail.css';
import MachineIntroductionCard from './MachineIntroductionCard';
// import MachineFunctionCard from './MachineFunctionCard';


function MachineDetail({ dispatch, machineIntro, machineFunctions, currentFunctionIntro }) {
  function changeFunctionIntroAccordingToIndex(index) {
    dispatch({
      type: 'machineDetail/setCurrentFunctionIntro',
      payload: index,
    });
  }

  return (

    <div className={styles.normal}>

      <MachineIntroductionCard machine={machineIntro} />
      <div className={styles.currentFunctionIntro}>
        {currentFunctionIntro}
      </div>
      <Grid
        data={machineFunctions}
        className={styles.machineFunctionDiv}
        columnNum={2}
        hasLine={true}
        onClick={(_el, index) => changeFunctionIntroAccordingToIndex(index)}
        renderItem={(dataItem) => (
          <div className={styles.singleFunction}>
            <img src={dataItem.img} role="presentation" style={{ width: '40%' }} />
            <div>
              <span>{dataItem.name}</span>
            </div>
          </div>
        )}
      />

      <WhiteSpace />
      <WhiteSpace />
      <WhiteSpace />
      <Flex justify="center">
        <Button type="primary" inline style={{ marginRight: '0.1rem' }}>确认</Button>
        <Button type="primary" inline style={{ marginRight: '0.1rem' }}>取消</Button>
      </Flex>
    </div>
  );
}

function mapStateToProps(state) {
  const { machineIntro, machineFunctions, currentFunctionIntro } = state.machineDetail;
  return { machineIntro, machineFunctions, currentFunctionIntro };
}

export default connect(mapStateToProps)(MachineDetail);
