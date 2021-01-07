import React, { Fragment } from 'react'
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Layout } from 'antd'
import { tabs } from '../../../router'
import { connect } from 'react-redux'
import '../style.less'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';

const Content = Layout.Content

// {location}
const SystemContent = () => {
  return (
    // <TransitionGroup >
    //   <CSSTransition classNames="fade" key={location.pathname} timeout={200}>
    //     <Fragment>
    //       <Content style={{ padding: '15px', minHeight: 'calc(100vh - 136px)' }}>
    //         <Switch>
    //           {
    //             tabs.map(tab => <Route render={() => <tab.component />} key={tab.path} path={tab.path}></Route>)
    //           }
    //           <Redirect from="/" exact to="/home" />
    //           <Redirect to="/error/404" />
    //         </Switch>
    //       </Content>
    //     </Fragment>
    //   </CSSTransition>
    // </TransitionGroup>
    <Fragment>
      <Content style={{ padding: '15px', minHeight: 'calc(100vh - 136px)' }}>
        <Switch>
          {
            tabs.map(tab => <Route render={() => <tab.component />} key={tab.path} path={tab.path}></Route>)
          }
          <Redirect from="/" exact to="/home" />
          <Redirect to="/error/404" />
        </Switch>
      </Content>
    </Fragment>
  )
}

const mapState = (state) => {
  return {
    panes: state.getIn(['layout', 'panes'])
  }
}

const mapDispatch = (dispatch) => {
  return {
  }
}

export default connect(mapState, mapDispatch)(withRouter(SystemContent))