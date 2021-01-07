import React, { PureComponent } from 'react'
import { Menu } from 'antd'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { actionCreators } from '../store'
import MyIcon from '../../MyIcon'
import FullScreen from '../../../utils/fullScreen'
import EditPassword from './EditPassword'
import '../style.less'

const SubMenu = Menu.SubMenu;

class SystemHeader extends PureComponent {
  handleOut = () => {
    console.log('logout')
    this.props.history.push('/login')
  }

  handleChangePassword = (visiable) => {
    this.props.changePasswordVisiable(visiable)
  }
  render() {
    const { theme, collapsed, changeTheme, handleCollepsed } = this.props
    return (
      <div className='my-header'>
        <MyIcon
          type={collapsed ? 'icon-menu-fold1' : 'icon-menu-unfold'}
          onClick={() => handleCollepsed(collapsed)}
        ></MyIcon>
        <div style={styles.headerRight}>
          <div style={styles.headerItem}>
            <MyIcon type={theme === 'dark' ? 'icon-yueliang' : 'icon-taiyang'} style={{ fontSize: 24 }} onClick={() => changeTheme(theme)}></MyIcon>
          </div>
          <div style={styles.headerItem}>
            <FullScreen></FullScreen>
          </div>
          <div style={styles.headerItem}>
            消息
          </div>
          <div style={styles.headerItem}>
            <Menu mode="horizontal" selectable={false}>
              <SubMenu key="SubMenu" title={<div style={styles.avatarBox}><span>超级管理员</span></div>}>
                <Menu.Item key="setting:1" onClick={() => this.handleChangePassword(true)}>
                  <MyIcon type={'icon-user'} style={{ fontSize: 16 }}></MyIcon>修改密码
                </Menu.Item>
                <Menu.Item key="setting:2" onClick={this.handleOut}>
                  <MyIcon type={'icon-user'} style={{ fontSize: 16 }}></MyIcon>退出登录
                </Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </div>
        <EditPassword></EditPassword>
      </div>
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
    changeTheme(value) {
      const choseTheme = value === 'dark' ? 'light' : 'dark'
      dispatch(actionCreators.setTheme(choseTheme))
    },
    handleCollepsed(status) {
      dispatch(actionCreators.setCollapsed(!status))
    },
    changePasswordVisiable(status) {
      dispatch(actionCreators.setChangePasswordVisiable(status))
    }
  }
}

const styles = {
  headerRight: {
    float: 'right',
    display: 'flex',
    height: 64,
    marginRight: 50
  },
  headerItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 20px'
  },
  avatarBox: {
    display: 'flex',
    alignItems: 'center'
  }
}

export default connect(mapState, mapDispatch)(withRouter(SystemHeader))