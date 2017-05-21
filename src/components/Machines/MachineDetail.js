import React from 'react';
import { connect } from 'dva';
import { Grid, Flex, WhiteSpace, Button } from 'antd-mobile';
import styles from './MachineDetail.css';
import MachineIntroductionCard from './MachineIntroductionCard';
// import MachineFunctionCard from './MachineFunctionCard';


function MachineDetail({ dispatch, machineIntro, machineFunctions, currentFunctionIndex }) {
  function changeFunctionIntroAccordingToIndex(index) {
    dispatch({
      type: 'machineDetail/setCurrentFunctionIntro',
      payload: index,
    });
  }

  function submitRequest() {
    const functionId = machineFunctions[currentFunctionIndex].id;
    // dispatch({
    //   type: 'machineDetail/sendFunctionControlRequest',
    //   payload: functionId,
    // });
    window.location = 'http://wxgzhpaytest.maxtropy.com/order/pay?funcId=' + functionId;
  }

  return (

    <div className={styles.normal}>

      <MachineIntroductionCard machine={machineIntro} />
      <div className={styles.currentFunctionIndex}>
        {machineFunctions[currentFunctionIndex].intro}
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
        <Button type="primary" inline style={{ marginRight: '0.1rem' }} onClick={e => submitRequest()}>确认</Button>
        <Button type="primary" inline style={{ marginRight: '0.1rem' }}>取消</Button>
      </Flex>  
    </div>
  );
}

function mapStateToProps(state) {
  const { machineIntro, machineFunctions, currentFunctionIndex } = state.machineDetail;
  return { machineIntro, machineFunctions, currentFunctionIndex };
}

export default connect(mapStateToProps)(MachineDetail);
