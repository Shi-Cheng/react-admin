import React, { PureComponent } from 'react'
import { ReactComponent as Logo } from '../../../assets/images/light.svg'
import { ReactComponent as Dark } from '../../../assets/images/dark.svg'

class Function extends PureComponent {
  render() {
    return (
      <div>
        <Logo width={10} height={20} />
        <Dark />
      </div>
    )
  }
}

export default Function