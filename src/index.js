import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.less'
import App from './App';
import { Router } from 'react-router-dom';
import moment from 'moment'
import 'antd/dist/antd.css'
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { Provider } from 'react-redux'
import history from './utils/history'
import store from './store'

moment.locale('zh-cn')

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ConfigProvider locale={zh_CN}>
        <App />
      </ConfigProvider>
    </Router>
  </Provider >,
  document.getElementById('root')
);

