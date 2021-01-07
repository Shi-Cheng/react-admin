import React, { Component } from 'react'
import MyIcon from '../../components/MyIcon'
import { Card, message } from 'antd'

let id = 0
let data = [
  'icon-tuichuquanping',
  'icon-quanping',
  'icon-taiyang',
  'icon-yueliang',
  'icon-menu-fold1',
  'icon-menu-unfold',
  'icon--menu-unfold',
  'icon-menu-fold',
  'icon-nav-list',
  'icon-similar-product',
  'icon-Similarproducts',
  'icon-viewlist',
  'icon-home',
  'icon-file-open',
  'icon-image-text',
  'icon-layers',
  'icon-modular',
  'icon-picture',
  'icon-save',
  'icon-setting',
  'icon-survey',
  'icon-unlock',
  'icon-user',
  'icon-home',
  'icon-file-open',
  'icon-image-text',
  'icon-layers',
  'icon-modular',
  'icon-picture',
  'icon-save',
  'icon-setting',
  'icon-survey',
  'icon-unlock',
  'icon-user',
  'icon-home',
  'icon-file-open',
  'icon-image-text',
  'icon-layers',
  'icon-modular',
  'icon-picture',
  'icon-save',
  'icon-setting',
  'icon-survey',
  'icon-unlock',
  'icon-user', 'icon-home',
  'icon-file-open',
  'icon-image-text',
  'icon-layers',
  'icon-modular',
  'icon-picture',
  'icon-save',
  'icon-setting',
  'icon-survey',
  'icon-unlock',
  'icon-user',
  'icon-home',
  'icon-file-open',
  'icon-image-text',
  'icon-layers',
  'icon-modular',
  'icon-picture',
  'icon-save',
  'icon-setting',
  'icon-survey',
  'icon-unlock',
  'icon-user'
]
class ButtonAntd extends Component {

  handleChoose = (item) => {
    message.success(`<MyIcon type=${item} /> "已复制到剪切板"`, 0.5)
  }
  render() {
    return (
      <Card type='inner' >
        <div className="public-title">
          <h1>常用图标</h1>
        </div>
        <ul className="list">
          {
            data.map(item => (
              <li key={id++}>
                <MyIcon type={item} style={{ fontSize: 30 }} onClick={() => this.handleChoose(item)} />
                <span>{item}</span>
              </li>
            ))}
        </ul>
      </Card>
    )
  }
}

export default ButtonAntd