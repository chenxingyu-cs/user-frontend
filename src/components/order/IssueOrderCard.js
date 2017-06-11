import { connect } from 'dva';
import { Accordion, TextareaItem, Flex, Checkbox, InputItem, List, ImagePicker, Button } from 'antd-mobile';
import styles from './IssueOrderList.css';
import { createForm } from 'rc-form';

const AgreeItem = Checkbox.AgreeItem;
const data = [];

class IssueOrderCardExample extends React.Component {
  state = {
    files: data,
  }
  onChange = (files, type, index) => {
    this.setState({
      files,
    });
    console.log(files, type, index);
  }
  submit = () => {
    this.props.form.validateFields((error, value) => {
      this.props.dispatch({
        type: 'user/report',
        payload: { issueData: value, pics: this.state.files, openId: this.props.orderId },
      });
    });
  }

  render() {
    const { files } = this.state;
    const { getFieldProps } = this.props.form;
    const address = this.props.address;
    const machine = this.props.machine;

    return (
      <Accordion className="my-accordion">
        <Accordion.Panel header={address + ", " + machine} className="pad">
          <List>
            <TextareaItem
              {...getFieldProps('description', {
                initialValue: '问题描述: ',
              })}
              rows={5}
              count={100}
            />
            <ImagePicker
              files={files}
              onChange={this.onChange}
              onImageClick={(index, fs) => console.log(index, fs)}
              selectable={files.length < 5}
            />
            <Flex style={{ padding: '0.3rem' }}>
              <Flex.Item style={{ padding: '0.3rem 0', flex: 'none' }}>申请退款</Flex.Item>
              <Flex.Item>
                <AgreeItem data-seed="logId" {...getFieldProps('refund', {initialValue: false,})}>
                  <a onClick={(e) => { e.preventDefault(); alert('agree it'); }}>同意</a>
                </AgreeItem>
              </Flex.Item>
            </Flex>
            <Button className="btn" type="primary" onClick={this.submit}>提交</Button>
          </List>
        </Accordion.Panel>
      </Accordion>
    );
  }
}

function mapStateToProps() {
  return {};
}

const IssueOrderCard = createForm()(IssueOrderCardExample);

export default connect(mapStateToProps)(IssueOrderCard);
