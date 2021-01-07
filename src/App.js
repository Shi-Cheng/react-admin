import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import AuthRouter from './components/AuthRouter'
import './assets/iconfont/iconfont.css'
import './components/layout/style.less'
import Login from './pages/login'
import SystemLayout from './components/layout'
import '../src/utils/auth'

class App extends PureComponent {
  render() {
    return (
      <Switch>
        <Route path="/login" exact component={Login}></Route>
        <AuthRouter path="/" component={SystemLayout}></AuthRouter>
      </Switch>
    )
  }
}

export default withRouter(App);
