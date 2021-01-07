import React, { Fragment, PureComponent } from 'react'
import { connect } from 'react-redux'
import EchartsAntd from '../../../components/Echarts'
import { Card, Col, Row } from 'antd';

const chartData = {
  backgroundColor: '#fff',
  title: {
    top: 30,
    text: '饼图',
    textStyle: {
      fontWeight: 'normal',
      fontSize: 16,
      color: '#57617B'
    },
    left: 'center'
  },
  color: ['#69B319', '#1890FF', '#BF9F40', '#BF7F40', '#51A59A'],
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    x: 20,
    data: ['电费', '水费', '物业费', '管理费', '停车费'],
    top: 20
  },
  series: [
    {
      name: '费用支出',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        { value: 100, name: '电费' },
        { value: 50, name: '水费' },
        { value: 224, name: '物业费' },
        { value: 60, name: '管理费' },
        { value: 800, name: '停车费' }
      ]
    }
  ]
};


class Pie extends PureComponent {
  render() {
    return (
      <Fragment>
        <EchartsAntd
          elName='chartColumnEl-top'
          chartData={chartData}
          className='shadow-radius'
          height={400}
          width={'100%'}
          style={{ padding: 0 }} {...this.props}
        />
        <Card>
          <Row gutter={24}>
            <Col span={12}>
              <EchartsAntd
                elName='chartColumnEl-left'
                chartData={chartData}
                className='shadow-radius'
                height={300}
                width={'100%'}
                style={{ padding: 0 }} {...this.props}
              />

            </Col>
            <Col span={12}>
              <EchartsAntd
                elName='chartColumnEl-right'
                chartData={chartData}
                className='shadow-radius'
                height={300}
                width={'100%'}
                style={{ padding: 0 }} {...this.props}
              />
            </Col>
          </Row>
        </Card>

      </Fragment>
    )
  }
}

const mapState = (state) => {
  return {
    collapsed: state.getIn(['layout', 'collapsed'])
  }
}
export default connect(mapState)(Pie) 