// import { TabBar, Icon } from 'antd-mobile';
// import React from 'react';
//
// function Footer() {
//
//   function renderContent(id) {
//     console.log(id);
//     if (id == 0) {
//       window.location = '/#/laundryStation/1';
//     } else {
//       window.location = '/#/laundryMachine/1';
//     }
//   }
//
//   return (
//     <TabBar
//         unselectedTintColor="#949494"
//         tintColor="#33A3F4"
//         barTintColor="white"
//         hidden={false}
//       >
//       <TabBar.Item
//           title="洗衣"
//           key="生活"
//           icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg' }}
//           selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg' }}
//           selected={true}
//           badge={1}
//           onPress={() => {renderContent(0);}}
//           data-seed="logId"
//         >
//         </TabBar.Item>
//         <TabBar.Item
//           icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
//           selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
//           title="我的"
//           key="我的"
//           selected={false}
//           onPress={() => {renderContent(1);}}
//         >
//         </TabBar.Item>
//     </TabBar>
//   );
//
// }
//
// export default Footer;
//
import { TabBar, Icon } from 'antd-mobile';

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
          title="生活"
          key="生活"
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg' }}
          selected={this.state.selectedTabIndex === 0}
          onPress={() => {
            // this.setState({
            //   selectedTab: 'blueTab',
            // });
            window.location = '/#/laundry/list';
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
            window.location = '/#/laundry/station/10';
          }}
          data-seed="logId1"
        >
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg' }}
          title="朋友"
          key="朋友"
          selected={this.state.selectedTabIndex === 2}
          onPress={() => {
            // this.setState({
            //   selectedTab: 'greenTab',
            // });
            window.location = '/#/order/menu';
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
            window.location = '/#/user/signin';
          }}
        >
        </TabBar.Item>
      </TabBar>
    );
  }
}

export default Footer;
