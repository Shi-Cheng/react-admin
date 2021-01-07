import React, { Component } from 'react'
import echarts from 'echarts'
import { debounce } from '../../utils/util'


class EchartsAntd extends Component {
  state = {
    chart: null
  }

  componentDidMount() {
    debounce(this.initEchart.bind(this), 500)()
    window.addEventListener('resize', () => this.resize())
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.collapsed !== prevState.collapsed) {
      return {
        collapsed: nextProps.collapsed,
      };
    }
    return null
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.collapsed !== this.props.collapsed) {
      this.resize();
    }
  }

  componentWillUnmount() { }

  resize() {
    const chart = this.state.chart
    if (chart) {
      debounce(chart.resize.bind(this), 300)()
    }
  }

  dispose() {
    if (!this.state.chart) return
    window.removeEventListener('resize', () => this.resize())
    this.setState({
      chart: null
    })
  }

  initEchart() {
    if (!this.el) return;
    this.setState({
      chart: echarts.init(this.el, this.props.elName)
    }, () => {
      this.state.chart.setOption(this.props.chartData, true)
    })
  }

  render() {
    const { className, height, width, style } = this.props;
    return (
      <div className={className} ref={el => (this.el = el)} style={{ ...style, width, height }}></div>
    )
  }
}

export default EchartsAntd