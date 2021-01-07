/**
 * 系统配置 user 搜索
 */
const UserSearch = [
  {
    cnLabel: '用户名',
    enLabel: 'username',
    type: 'input',
    width: 175
  },
  {
    cnLabel: '注册地址',
    enLabel: 'registrationAddress',
    type: 'input',
    width: 175
  },
  {
    cnLabel: '注册时间',
    enLabel: 'registrationTime',
    type: 'input',
    width: 175
  },
  {
    cnLabel: '退出时间',
    enLabel: 'lastLoginTime',
    type: 'input',
    width: 175
  }
]
/**
 * 系统配置 user 按钮
 */
const UserBtnList = [
  {
    type: 'primary',
    click: 'search',
    name: '查询',
    icon: 'search',
    htmlType: 'submit'
  },
  {
    type: 'primary',
    click: 'add',
    name: '新增',
    icon: 'add',
    htmlType: 'button'
  }
]

/**
 * 系统配置 log 搜索
 */
const LogsSearchData = [
  {
    cnLabel: '用户名',
    enLabel: 'username',
    type: 'input',
    width: 175
  },
  {
    cnLabel: '登录地点',
    enLabel: 'loginAddress',
    type: 'input',
    width: 175
  },
  {
    cnLabel: '操作模块',
    enLabel: 'operationModel',
    type: 'input',
    width: 175
  },
  {
    cnLabel: '操作时间',
    enLabel: 'operationTime',
    type: 'date',
    width: 175
  },
  {
    cnLabel: '性别',
    enLabel: 'gender',
    type: 'select',
    width: 175,
    options: [{
      label: '男',
      value: 1
    }, {
      label: '女',
      value: 0
    }]
  }
]
/**
 * 系统配置 log 按钮
 */
const LogsBtnList = [
  {
    type: 'primary',
    click: 'search',
    name: '查询',
    icon: 'search',
    htmlType: 'submit'
  }
]

export {
  UserSearch,
  UserBtnList,
  LogsSearchData,
  LogsBtnList
}