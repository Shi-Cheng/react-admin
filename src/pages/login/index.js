import React, { PureComponent } from 'react'
import Particles from 'react-particles-js'
import { withRouter } from 'react-router-dom'
import { actionCreators } from './store'
import { connect } from 'react-redux'
import { Form, Input, Button, message } from 'antd'
import MyIcon from '../../components/MyIcon'
import '../../styles/login.less'

class Login extends PureComponent {
  constructor(props) {
    super(props)
    this.onResize = this.onResize.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize)
  }

  onResize() {
    const clientHeight = document.documentElement.clientHeight || document.body.clientHeight
    this.props.changeClientHeight(clientHeight)
  }

  onFinishFailed() {
    message.error('登录失败')
  }
  handleLogin = loginValue => {
    message.success('登录成功')
    setTimeout(() => {
      this.props.history.push('/home')
    }, 500)

  }
  render() {
    const { clientHeight } = this.props
    return (
      <div className="container">
        <Particles
          height={clientHeight - 6 + 'px'}
          params={{
            number: { value: 50 },
            ize: { value: 3 },
            interactivity: {
              events: {
                onhover: { enable: true, mode: 'repulse' }
              }
            }
          }}
        />
        <div className="content">
          <div className="title">后台管理系统</div>
          <Form
            name="basic"
            className="login-form"
            onFinish={this.handleLogin}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              name='username'
              rules={[{ required: true, message: '请填写用户名！' }]}
            >
              <Input prefix={<MyIcon type="icon-user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
              name='password'
              rules={[{ required: true, message: '请填写密码！' }]}
            >
              <Input.Password prefix={<MyIcon type="icon-unlock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="密码" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                登 录
              </Button>
              <div style={{ color: '#999', paddingTop: '10px', textAlign: 'center' }}>Tips : 输入任意用户名密码即可</div>
            </Form.Item>
          </Form>
        </div>
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    userInfo: state.getIn(['login', 'userInfo']),
    clientHeight: state.getIn(['login', 'clientHeight'])
  }
};
const mapDispatch = dispatch => ({
  handleLogin: data => {
    console.log(data)
    this.onFinishFailed()
  },
  setUserInfo: data => {
    dispatch(actionCreators.setUserInfo(data));
  },
  changeClientHeight: height => {
    dispatch(actionCreators.setClientHeight(height))
  }
});

export default connect(mapState, mapDispatch)(withRouter(Login))