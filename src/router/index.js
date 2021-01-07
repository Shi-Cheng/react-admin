import SystemHome from '../pages/home'
import SystemFunction from '../pages/security/function'
import SystemStrategy from '../pages/security/strategy'
import SystemLogs from '../pages/system/logs'
import SystemUser from '../pages/system/user'
import IconAntd from '../pages/antd/IconAntd'
import ButtonAntd from '../pages/antd/ButtonAntd'
import FormAntd from '../pages/antd/FormAntd'
import MarkdownAntd from '../pages/antd/MarkdownAntd'
import TextEditorAntd from '../pages/antd/TextEditorAntd'
import ColumnAntd from '../pages/table/column'
import LineAntd from '../pages/table/line'
import MixAntd from '../pages/table/mix'
import PieAntd from '../pages/table/pie'

import KeyComponent from '../pages/crypto/key'

const menu = [
  {
    name: 'home',
    path: '/home',
    icon: 'icon-home',
    key: 'home'
  },
  {
    name: 'key',
    path: '/key',
    icon: 'icon-home',
    key: 'key'
  }
]

const tabs = [
  { key: 'home', path: '/home', component: SystemHome },
  { key: 'key', path: '/antd/icon', component: IconAntd },
  { key: 'button', path: '/antd/button', component: ButtonAntd },
  { key: 'form', path: '/antd/form', component: FormAntd },
  { key: 'edit', path: '/antd/edit', component: MarkdownAntd },
  { key: 'text', path: '/antd/text', component: TextEditorAntd },
  { key: 'function', path: '/security/function', component: SystemFunction },
  { key: 'strategy', path: '/security/strategy', component: SystemStrategy },
  { key: 'logs', path: '/system/logs', component: SystemLogs },
  { key: 'user', path: '/system/user', component: SystemUser },
  { key: 'column', path: '/table/column', component: ColumnAntd },
  { key: 'line', path: '/table/line', component: LineAntd },
  { key: 'mix', path: '/table/mix', component: MixAntd },
  { key: 'pie', path: '/table/pie', component: PieAntd }
]

export {
  menu,
  tabs
}