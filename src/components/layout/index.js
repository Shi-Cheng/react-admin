import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import SystemSider from './components/Sider'
import SystemHeader from './components/Header'
import SystemContent from './components/Content'
import { actionCreators } from './store'
const { Header, Sider, Content, Footer } = Layout;

class SystemLayout extends PureComponent {

  render() {
    const { onChangeState, collapsed, activeMenu, theme, onChangeMenu } = this.props
    const choseTheme = localStorage.getItem('theme') || 'dark'
    return (
      <Layout>
        <Sider
          trigger={null} 
          collapsible 
          collapsed={collapsed} 
          theme={theme}>
          <SystemSider
            theme={choseTheme}
            activeMenu={activeMenu}
            onChangeState={onChangeState}
            onChangeMenu={onChangeMenu}
          ></SystemSider>
        </Sider>
        <Layout>
          <Header style={{ padding: 0 }}>
            <SystemHeader></SystemHeader>
          </Header>
          <Content style={{ marginTop: '2px', marginLeft: '2px' }}>
            <SystemContent className='tabpane-box'></SystemContent>
            <Footer style={{ textAlign: 'center', background: '#fff', bottom: 0 }}>
              React-Admin ©{new Date().getFullYear()} Created by ***@qq.com
            </Footer>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

const mapState = (state) => {
  return {
    collapsed: state.getIn(['layout', 'collapsed']),
    activeMenu: state.getIn(['layout', 'activeMenu']),
    theme: state.getIn(['layout', 'theme'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    onChangeState(panesItem) {
      dispatch(actionCreators.setRouterItem(panesItem))
    },
    onChangeMenu(menuItem) {
      dispatch(actionCreators.setMenu(menuItem))
    }
  }
}

export default connect(mapState, mapDispatch)(SystemLayout)