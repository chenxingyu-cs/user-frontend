import { TabBar, Icon } from 'antd-mobile';
import { browserHistory } from 'dva/router'

/* eslint global-require: 0 */

class Footer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTabIndex: props.tabBarIndex? props.tabBarIndex : 0,
      hidden: false,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 600, color: '#108ee9' }} onClick={(e) => {
          e.preventDefault();
          this.setState({
            hidden: !this.state.hidden,
          });
        }}
        >
          点击切换 tab-bar 显示/隐藏
        </a>
      </div>
    );
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="洗衣"
          key="洗衣"
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg' }}
          selected={this.state.selectedTabIndex === 0}
          onPress={() => {
            // this.setState({
            //   selectedTab: 'blueTab',
            // });
            // window.location = '/laundry/list';
            browserHistory.push('/laundry/list');
          }}
          data-seed="logId"
        >
        </TabBar.Item>
        <TabBar.Item
          icon={<Icon type="koubei-o" size="md" />}
          selectedIcon={<Icon type="koubei" size="md" />}
          title="口碑"
          key="口碑"
          selected={this.state.selectedTabIndex === 1}
          onPress={() => {
            // this.setState({
            //   selectedTab: 'redTab',
            // });
            // window.location = '/laundry/station/10';
            browserHistory.push('/laundry/station/10');
          }}
          data-seed="logId1"
        >
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg' }}
          title="订单"
          key="订单"
          selected={this.state.selectedTabIndex === 2}
          onPress={() => {
            // this.setState({
            //   selectedTab: 'greenTab',
            // });
            // window.location = '/order/list';
            browserHistory.push('/order/list');
          }}
        >
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
          title="我的"
          key="我的"
          selected={this.state.selectedTabIndex === 3}
          onPress={() => {
            // this.setState({
            //   selectedTab: 'yellowTab',
            // });
            // window.location = '/user/signin';
            browserHistory.push('/user/signin');
          }}
        >
        </TabBar.Item>
      </TabBar>
    );
  }
}

export default Footer;
