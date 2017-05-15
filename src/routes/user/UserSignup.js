// import React from 'react';
// import { connect } from 'dva';
// import styles from './UserSignup.css';
//
// function UserSignup() {
//   return (
//     <div className={styles.normal}>
//       Route Component: UserSignup
//     </div>
//   );
// }
//
// function mapStateToProps() {
//   return {};
// }
//
// export default connect(mapStateToProps)(UserSignup);

import { connect } from 'dva';
import { Button, Flex, List, InputItem, WhiteSpace } from 'antd-mobile';
import styles from './UserSignup.css';
import { createForm } from 'rc-form';

class SignupInputExample extends React.Component {

  redirectToSignin = () => {
    window.location = '/#/user/signin';
  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div className={styles.normal}>
        <List renderHeader={() => '注册'}>
          <InputItem
            {...getFieldProps('phone')}
            type="phone"
            placeholder="123 4567 8910"
          >手机号码</InputItem>
          <InputItem
            {...getFieldProps('number')}
            type="number"
            placeholder="点击会弹出数字键盘"
          >验证码</InputItem>
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
            <Button className="btn" type="primary">注册</Button>
          </Flex.Item>
        </Flex>
      </div>
    );
  }
}

function mapStateToProps() {
  return {};
}

const UserSignup = createForm()(SignupInputExample);

export default connect(mapStateToProps)(UserSignup);
