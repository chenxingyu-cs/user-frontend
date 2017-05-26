import React from 'react';
import { connect } from 'dva';
import { Grid, Flex, WhiteSpace, Button } from 'antd-mobile';
import styles from './MachineDetail.css';
import MachineIntroductionCard from './MachineIntroductionCard';
// import MachineFunctionCard from './MachineFunctionCard';


function MachineDetail({ dispatch, id, description, imageSrc, modelName, status, functions, currentFunctionIndex }) {
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

  console.log(functions[0]);

  return (

    <div className={styles.normal}>

      <MachineIntroductionCard imageSrc={imageSrc} description={description} />
      <div className={styles.currentFunctionIndex}>
        {functions[currentFunctionIndex].description}
      </div>
      <Grid
        data={functions}
        className={styles.machineFunctionDiv}
        columnNum={functions.length}
        hasLine={true}
        onClick={(_el, index) => changeFunctionIntroAccordingToIndex(index)}
        renderItem={(dataItem) => (
          <div className={styles.singleFunction}>
            <img src="https://www.shareicon.net/data/2017/02/07/878493_front_512x512.png" role="presentation" style={{ width: '40%' }} />
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
      </Flex>
    </div>
  );
}

function mapStateToProps(state) {
  console.log('fdsfsdfsd', state.machineDetail)
  const { id, description, imageSrc, modelName, status, functions, currentFunctionIndex } = state.machineDetail;
  return { id, description, imageSrc, modelName, status, functions, currentFunctionIndex };
}

export default connect(mapStateToProps)(MachineDetail);
