import { connect } from 'dva';
import { Button, Flex, List, InputItem, WhiteSpace } from 'antd-mobile';
import styles from './UserSignup.css';
import { createForm } from 'rc-form';

class SignupInputExample extends React.Component {
  // state = {
  //   phone: undefined,
  // };

  // const {dispatch} = this.props;

  redirectToSignin = () => {
    window.location = '/#/user/signin';
  }

  sendPinRequest = () => {
    this.props.dispatch({
      type: 'user/sendPinRequest',
      payload: { phone: 17317924728 },
    });
  }

  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(value);
      this.props.dispatch({
        type: 'user/signup',
        payload: { signData: value },
      });
    });
  }

  render() {
    const { getFieldProps } = this.props.form;
    const { dispatch } = this.props;
    return (
      <div className={styles.normal}>
        <List renderHeader={() => '注册'}>
          <InputItem
            {...getFieldProps('phone')}
            placeholder="123 4567 8910"
          >手机号码</InputItem>
          <Flex>
            <InputItem
              {...getFieldProps('pin')}
              type="number"
              placeholder="请输入验证码"
            >验证码</InputItem>
            <Button className="btn" type="ghost" onClick={this.sendPinRequest}>获取验证码</Button>
          </Flex>
          <InputItem
            {...getFieldProps('password')}
            type="password"
            placeholder="******"
          >密码</InputItem>
        </List>
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <Flex>
          <Flex.Item>
            <Button className="btn" type="ghost" onClick={this.redirectToSignin}>登录</Button>
          </Flex.Item>
          <Flex.Item>
            <Button className="btn" type="primary" onClick={this.submit}>注册</Button>
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.user;
}

const UserSignup = createForm()(SignupInputExample);

export default connect(mapStateToProps)(UserSignup);
