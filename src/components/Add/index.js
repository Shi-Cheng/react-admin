import React, { Component } from 'react'
import { Modal, Form, Input, Select, DatePicker, Button, message } from 'antd'
import locale from 'antd/es/date-picker/locale/zh_CN';
import moment from 'moment';

const typeList = ['input', 'password', 'textarea', 'select', 'datepicker']
class Add extends Component {
  addRef = React.createRef()
  handleClose(e, status) {
    this.addRef.current.resetFields()
    this.props.setAddUserStatus(status)
  }
  onFinish = values => {
    setTimeout(() => {
      this.props.setAddUserStatus(false)
      this.props.handleAddUser(values)
      message.success({
        content: '提交成功',
        className: 'custom-class'
      });
    }, 500)
  };
  onReset(e) {
    e.resetFields();
  }
  getAddList(data) {
    if (data && data.length > 0) {
      let addItem = []
      for (let i = 0; i < data.length; i++) {
        this.showAddListItem(data[i], addItem)
      }
      return addItem
    }
  }

  selectValue(e, value) {
    console.log(value)
  }
  selectDate(value) {
    console.log(moment(value).format('YYYY-MM-DD'))
  }
  showAddListItem(item, addItem) {
    if (item.type === typeList[0]) {
      addItem.push(
        <Form.Item
          key={item.name}
          name={item.name}
          label={item.label}
          rules={item.rules}
        >
          <Input
            placeholder={item.placeholder}
            style={{ width: item.width }}
            maxLength={item.maxLength}
            allowClear
          />
        </Form.Item>
      )
    }
    if (item.type === typeList[1]) {
      addItem.push(
        <Form.Item
          key={item.name}
          name={item.name}
          label={item.label}
          rules={item.rules}
        >
          <Input.Password
            placeholder={item.placeholder}
            style={{ width: item.width }}
          />
        </Form.Item>
      )
    }
    if (item.type === typeList[2]) {
      addItem.push(
        <Form.Item
          key={item.name}
          name={item.name}
          label={item.label}
        >
          <Input.TextArea
            placeholder={item.placeholder}
            style={{ width: item.width }}
          />
        </Form.Item>
      )
    }
    if (item.type === typeList[3]) {
      addItem.push(
        <Form.Item
          key={item.name}
          name={item.name}
          label={item.label}
          rules={item.rules}
        >
          <Select
            onChange={(value) => this.selectValue(this, value)}
            placeholder={item.placeholder}
            style={{ width: item.width }}
          >
            {
              item.options.map(option => {
                return <Select.Option index={option.value} key={option.value}>{option.label}</Select.Option>
              })
            }
          </Select>
        </Form.Item>
      )
    }
    if (item.type === typeList[4]) {
      addItem.push(
        <Form.Item
          key={item.name}
          name={item.name}
          label={item.label}
          rules={item.rules}
        >
          <DatePicker
            onChange={(value) => this.selectDate(value)}
            placeholder={item.placeholder}
            style={{ width: item.width }}
            locale={locale}
          />
        </Form.Item>
      )
    }
    return addItem
  }
  showBtnList() {
    return (
      <div className='add_button_form'>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button htmlType="button" onClick={() => this.onReset(this.addRef.current)}>
            重置
          </Button>
        </Form.Item>
      </div>
    )
  }
  render() {
    const layout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
    };
    const { visiable, addUserDetail } = this.props
    return (
      <Modal
        title={addUserDetail.addUserTitle}
        visible={visiable}
        width={addUserDetail.width}
        footer={addUserDetail.footer}
        onCancel={() => this.handleClose(this, false)}
      >
        <Form
          {...layout}
          ref={this.addRef}
          onFinish={this.onFinish}
        >
          {
            this.getAddList(addUserDetail.addUserList)
          }
          {
            this.showBtnList()
          }
        </Form>
      </Modal>
    )
  }
}

export default Add