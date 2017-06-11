import { connect } from 'dva';
import { Button, Flex, List, InputItem, WhiteSpace } from 'antd-mobile';
import { browserHistory } from 'dva/router'
import styles from './OrderQuery.css';
import { createForm } from 'rc-form';

class OrderQueryExample extends React.Component {

  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
      this.props.dispatch({
        type: 'order/query',
        payload: { queryData: value },
      });
    });
  }

  render() {
    const { getFieldProps } = this.props.form;

    return (
      <div className={styles.normal}>
        <List renderHeader={() => "交易查询"}>
          <InputItem extra={'请选择日期'}
            {...getFieldProps('date')}
            type="date"
          >日期选择</InputItem>
          <InputItem extra={'请输入编号'}
            {...getFieldProps('orderId')}
            type="orderId"
          >订单编号</InputItem>
        </List>
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <Flex>
          <Flex.Item>
            <Button className="btn" type="primary" onClick={this.submit}>查询</Button>
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

const OrderQuery = createForm()(OrderQueryExample);

export default connect(mapStateToProps)(OrderQuery);
