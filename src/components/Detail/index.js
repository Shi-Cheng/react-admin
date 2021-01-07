import React, { Component, Fragment } from 'react'
import { Modal, Button, Form, Row, Col } from 'antd'

class Detail extends Component {
  onCancle() {
    this.props.handleCancle()
  }
  getDetailList(data, list) {
    let detailItem = []
    for (const key in data) {
      list.forEach((item) => {
        if (item.name === key) {
          detailItem.push(
            <Col span={12} key={key}>
              <Form.Item label={item.label} key={key}>
                <span>{data[key]} </span>
              </Form.Item>
            </Col>
          )
        }
      })
    }
    return detailItem
  }
  render() {
    const formLayout = {
      labelCol: {
        span: 10
      },
      wrapperCol: {
        span: 14
      }
    }
    const { visiable, detailData, detailList } = this.props
    return (
      <Fragment>
        <Modal
          visible={visiable}
          width={detailList.width}
          centered
          title={detailList.title}
          footer={<Button type='primary' onClick={() => this.onCancle()}>确定</Button>}
          onCancel={() => this.onCancle()}
        >
          <Form
            {...formLayout}
            style={{ marginLeft: -40 }}
          >
            <Row gutter={12}>
              {
                visiable ? this.getDetailList(detailData, detailList.list) : ''
              }
            </Row>
          </Form>
        </Modal>
      </Fragment >
    )
  }
}


export default Detail