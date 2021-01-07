import { Card, Col, Row, Button } from 'antd'
import React from 'react'
// import Typing from '../../components/Typing'
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';

// const gridInfoStyle = {
//   width: '100%'
// }

const size = 'large'

const ButtonAntd = () => {
  return (
    <Card>
      <Card type="inner" style={{ marginBottom: 5 }}>
        <span>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑.</span>
      </Card>
      <Row gutter={16}>
        <Col span={12}>
          <Card hoverable bordered={false}>
            <div className="btnMargin">
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="danger">Danger</Button>
              <br /><br />
              <Button type="primary" ghost>Primary</Button>
              <Button ghost>Default</Button>
              <Button type="dashed" ghost>Dashed</Button>
              <Button type="danger" ghost>danger</Button>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card hoverable bordered={false} style={{ marginBottom: 5 }}>
            <div className="btnMargin">
              <Button type="primary" shape="circle" icon={<SearchOutlined />} />
              <Button type="primary" icon={<SearchOutlined />}>Search</Button>
              <Button shape="circle" icon={<SearchOutlined />} />
              <Button icon={<SearchOutlined />}>Search</Button>
              <br /><br />
              <Button shape="circle" icon={<SearchOutlined />} />
              <Button icon={<SearchOutlined />}>Search</Button>
              <Button type="dashed" icon={<SearchOutlined />} />
              <Button type="dashed" icon={<SearchOutlined />}>Search</Button>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card hoverable bordered={false}>
            <div style={{ width: '50%' }}>
              <Button type="primary" block loading style={{ marginBottom: 8 }}>Primary</Button>
              <Button block style={{ marginBottom: 8 }}>Default</Button>
              <Button type="dashed" block style={{ marginBottom: 8 }}>Dashed</Button>
              <Button type="danger" block style={{ marginBottom: 8 }}>Danger</Button>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card hoverable bordered={false}>
            <div className="btnMargin">
              <Button type="primary" loading>primary</Button>
              <Button type="primary" icon={<DownloadOutlined />} size={size} />
              <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
              <br /><br />
              <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
              <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
                Download
              </Button>
              <Button type="primary" icon={<DownloadOutlined />} size={size}>
                Download
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Card>
  )
}

export default ButtonAntd