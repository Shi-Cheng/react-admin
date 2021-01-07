import React, { PureComponent } from 'react'
import { Menu } from 'antd'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import { menu, tabs } from '../../../router'
import MyIcon from '../../MyIcon'
import { setPath } from '../../../utils/auth';


class SystemSider extends PureComponent {
  renderMenu = (menu) => {
    if (Array.isArray(menu)) {
      return menu.map(item => {
        if (!item.children || !item.children.length) {
          return (
            <Menu.Item key={item.path}>
              {/* <div onClick={() => { this.addPane(item, panes, activeMenu) }}> <MyIcon type={item.icon} /><span>{item.name}</span></div> */}
              <Link to={item.path} onClick={() => this.addPane(item)}>
                {item.icon ? <MyIcon type={item.icon} /> : ''}
                <span>{item.name}</span>
              </Link>
            </Menu.Item>
          )
        } else {
          return (
            <Menu.SubMenu key={item.path} title={
              <span>
                {item.icon && <MyIcon type={item.icon} />}<span>{item.name}</span>
              </span>
            }>
              {this.renderMenu(item.children)}
            </Menu.SubMenu>
          )
        }
      })
    }
  }
  addPane(item) {
    const filterTab = tabs.filter(tab => tab.key === item.key)
    const activeMenuItem = item.path
    setPath(item.path)
    let panes = {
      path: item.path,
      name: item.name,
      key: item.key,
      component: filterTab[0].component
    }
    this.props.onChangeState(panes)
    this.props.onChangeMenu(activeMenuItem)

  }
  render() {
    const menuSelected = this.props.history.location.pathname;
    const menuOpened = `/${menuSelected.split('/')[1]}`;
    const { theme } = this.props
    return (
      <div className={`my-sider ${theme}`}>
        <Menu
          theme={theme}
          mode="inline"
          defaultOpenKeys={[menuOpened]}
          defaultSelectedKeys={[menuSelected]}
          selectedKeys={[menuSelected]}
          style={{ paddingTop: 16 }}>
          {this.renderMenu(menu)}
        </Menu>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    panes: state.getIn(['layout', 'panes']),
    collapsed: state.getIn(['layout', 'collapsed']),
    activeMenu: state.getIn(['layout', 'activeMenu']),
    theme: state.getIn(['layout', 'theme'])
  }
}

const mapDispatch = (dispatch) => {
  return {
  }
}

export default connect(mapState, mapDispatch)(withRouter(SystemSider))