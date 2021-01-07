import React from 'react'
import { message } from 'antd'
import { SketchPicker } from 'react-color'
import { connect } from 'react-redux'
import { actionCreators } from '../../components/layout/store'


class ColorPicker extends React.Component {
  // static propTypes = {
  //   color: PropTypes.string,
  //   onChange: PropTypes.func,
  //   presetColors: PropTypes.array,
  //   disableAlpha: PropTypes.bool,
  // }

  // static defaultProps = {
  //   color: '',
  //   onChange: () => { },
  //   presetColors: [
  //     '#F5222D',
  //     '#FA541C',
  //     '#FA8C16',
  //     '#FAAD14',
  //     '#FADB14',
  //     '#A0D911',
  //     '#52C41A',
  //     '#13C2C2',
  //     '#1890FF',
  //     '#2F54EB',
  //     '#722ED1',
  //     '#EB2F96',
  //   ],
  //   disableAlpha: true   //禁用rgba
  // }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (nextProps.color && nextProps.color !== prevState.color) {
  //     return {
  //       color: nextProps.color
  //     }
  //   }
  //   return null
  // }
  // state = {
  //   displayColorPicker: false,
  //   color: ''
  // };
  handleChange(color) {
    this.props.onColorChange(color)
  }

  render() {
    const { displayColorPicker, color, handleClick, handleClose, handleChange } = this.props
    const styles = {
      color: {
        width: '36px',
        height: '14px',
        borderRadius: '2px',
        background: color,
      },
      swatch: {
        padding: '5px',
        background: '#fff',
        borderRadius: '1px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
      },
      popover: {
        position: 'absolute',
        zIndex: '2',
      },
      cover: {
        position: 'fixed',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
      },
    };

    return (
      <div style={{ lineHeight: '15px' }}>
        <div style={styles.swatch} onClick={() => handleClick(displayColorPicker)}>
          <div style={styles.color} />
        </div>
        {displayColorPicker ? <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker color={color} onChange={handleChange} />
        </div> : null}
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    displayColorPicker: state.getIn(['layout', 'displayColorPicker']),
    color: state.getIn(['layout', 'color'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick(status) {
      dispatch(actionCreators.setChooseColorDisplay(status))
    },
    handleClose() {
      dispatch(actionCreators.setChooseColorDisplay(true))
    },
    handleChange(theme) {
      window.less.modifyVars({
        '@primary-color': theme.hex,
      }).then(() => {
        localStorage.setItem('user-theme', JSON.stringify({ '@primary-color': theme.hex }))
        dispatch(actionCreators.setTheme(theme.hex))
        message.success('更换主题颜色成功')
      })
    }
  }
}

export default connect(mapState, mapDispatch)(ColorPicker)