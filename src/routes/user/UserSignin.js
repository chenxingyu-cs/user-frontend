import { connect } from 'dva';
import { Button, Flex, List, InputItem, WhiteSpace } from 'antd-mobile';
import styles from './UserSignin.css';
import { createForm } from 'rc-form';

class SigninInputExample extends React.Component {

  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
    });
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
            <Button className="btn" type="ghost">注册</Button>
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
