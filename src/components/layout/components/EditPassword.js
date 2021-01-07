import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Modal, Form, Input, Button, message } from 'antd'
import { actionCreators } from '../store'

class EditPassword extends Component {
  passwordRef = React.createRef()

  handlePasswordVisiable(visible) {
    this.passwordRef.current.resetFields()
    this.props.handlePasswordVisiable(visible)
  }

  onFinish = values => {
    this.props.handlePasswordVisiable(false)
    setTimeout(() => {
      message.success({
        content: '提交成功',
        className: 'custom-class'
      });
    }, 500)
  };

  onFinishFailed = errorInfo => {
    message.error({
      content: '提交失败',
      className: 'custom-class'
    });
  };
  render() {
    const { passwordVisiable } = this.props

    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    const tailLayout = {
      wrapperCol: { offset: 18, span: 10 },
    };
    return (
      <Fragment>
        <Modal
          title="修改密码"
          visible={passwordVisiable}
          width={600}
          footer={false}
          onCancel={() => this.handlePasswordVisiable(false)}
        >
          <Form
            {...layout}
            ref={this.passwordRef}
            name="basic"
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="旧密码："
              name="oldPassword"
              rules={[
                {
                  required: true,
                  message: '最小不能低于6位'
                }
              ]}
            >
              <Input style={{ width: 200 }} placeholder="请输入旧密码" type={'password'} />
            </Form.Item>

            <Form.Item
              label="新密码："
              name="password"
              rules={[
                {
                  required: true,
                  message: '最小不能低于6位'
                }
              ]}
            >
              <Input style={{ width: 200 }} placeholder="请输入新密码" type={'password'} />
            </Form.Item>

            <Form.Item
              label="确认密码："
              name="passwordAgain"
              rules={[
                {
                  required: true,
                  message: '最小不能低于6位'
                }
              ]}
            >
              <Input style={{ width: 200 }} placeholder="请再次确认新密码" type={'password'} />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="default" style={{ marginRight: 5 }} onClick={() => this.handlePasswordVisiable(false)}>
                取消
              </Button>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </Fragment>
    )
  }
}

const mapState = (state) => {
  return {
    passwordVisiable: state.getIn(['layout', 'passwordVisiable'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    handlePasswordVisiable(visiable) {
      dispatch(actionCreators.setChangePasswordVisiable(visiable))
    }
  }
}

export default connect(mapState, mapDispatch)(EditPassword)