import { connect } from 'dva';
import { Button, Flex, List, InputItem, WhiteSpace } from 'antd-mobile';
import { browserHistory } from 'dva/router'
import styles from './UserSignin.css';
import { createForm } from 'rc-form';

class SigninInputExample extends React.Component {

  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
      this.props.dispatch({
        type: 'user/signin',
        payload: { signinData: value },
      });
    });
  }

  redirectToSignup = () => {
    // window.location = '/user/signup';
    browserHistory.push('/user/signup');
  }

  render() {
    const { getFieldProps } = this.props.form;

    return (
      <div className={styles.normal}>
        <List renderHeader={() => '登录'}>
          <InputItem
            {...getFieldProps('phone')}
            type="phone"
            placeholder="123 4567 8910"
          >手机号码</InputItem>
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
            <Button className="btn" type="ghost" onClick={this.redirectToSignup}>注册</Button>
          </Flex.Item>
          <Flex.Item>
            <Button className="btn" type="primary" onClick={this.submit}>登录</Button>
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

const UserSignin = createForm()(SigninInputExample);

export default connect(mapStateToProps)(UserSignin);
