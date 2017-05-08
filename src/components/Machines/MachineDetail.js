import React from 'react';
import { connect } from 'dva';
import styles from './MachineDetail.css';
import { Grid } from 'antd-mobile';
import { routerRedux } from 'dva/router';
import MachineIntroductionCard from './MachineIntroductionCard';

const data = Array.from(new Array(4)).map((_val, i) => ({
  img: 'https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png',
  text: `功能${i}`,
}));

// const machineIntro = {
//   text: "速比坤10.5公斤搅拌式洗衣机",
//   img: 'http://gfs3.gomein.net.cn/T1WkdTBmCv1RCvBVdK',
// };

var initialFunctionIntro;



function MachineDetail({ dispatch, machineIntro, machineFunctions, currentFunctionIntro }) {


  function changeFunctionIntroAccordingToIndex(index) {
    // console.log(this.state);
    // const newIntro = machineFunctions[index].intro;
    // this.setState({
    //   currentFunctionIntro: newIntro,
    // });
    console.log('fdsfdsfdsfds');
    dispatch({
      type: 'machineDetail/setCurrentFunctionIntro',
      payload: index,
    });
  }

  return (

    <div className={styles.normal}>
      <MachineIntroductionCard machine={machineIntro} />
      <div className={styles.currentFunctionIntro}>
        <h3> {currentFunctionIntro} </h3>
      </div>
      <Grid data={data} columnNum={2} hasLine={true} onClick={(_el, index) => changeFunctionIntroAccordingToIndex(index)}
        renderItem={(dataItem, index) => (
          <div style={{ margin: '0.16rem' }}>
            <img src={dataItem.img} style={{ width: '50%', margin: '0.12rem' }} />
            <div style={{ padding: '0.08rem' }}>
              <span>{dataItem.text}</span>
            </div>
          </div>
        )}
      />
    </div>
  );
}

function mapStateToProps(state) {
  const { machineIntro, machineFunctions, currentFunctionIntro } = state.machineDetail;
  return { machineIntro, machineFunctions, currentFunctionIntro };
}

export default connect(mapStateToProps)(MachineDetail);
