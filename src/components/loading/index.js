import React, { PureComponent } from 'react'

class Login extends PureComponent {
  render() {
    const { className = '', style = {} } = this.props
    return (
      <div id='my-loading' className={className} style={style}>
        <div className='loader'></div>
        <div className='shadow'></div>
      </div>
    )
  }
}

export default Login