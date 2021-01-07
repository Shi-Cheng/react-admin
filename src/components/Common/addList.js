/**
 * system user 新增
 */
const addUserDetail = {
  footer: false,
  width: 800,
  addUserTitle: '新增用户',
  addUserList: [
    {
      name: 'email',
      label: '邮箱',
      placeholder: '请输入邮箱',
      type: 'input',
      width: 200,
      maxLength: 20,
      size: 'middle',
      allowClear: true,
      rules: [{
        required: true,
        message: '邮箱不能为空'
      }]
    },
    {
      name: 'username',
      label: '用户名',
      placeholder: '请输入用户名',
      type: 'input',
      width: 200,
      maxLength: 20,
      size: 'middle',
      allowClear: true,
      rules: [{
        required: true,
        message: '用户名不能为空'
      }]
    },
    {
      name: 'sex',
      label: '性别',
      placeholder: '请选择性别',
      type: 'select',
      width: 200,
      size: 'middle',
      allowClear: true,
      options: [{
        value: 1,
        label: '男'
      }, {
        value: 0,
        label: '女'
      }],
      onChange: 'selectSex',
      rules: [{
        required: true,
        message: '用户姓名不能为空'
      }]
    },
    {
      name: 'age',
      label: '年龄',
      placeholder: '请输入用户年龄',
      type: 'input',
      width: 200,
      maxLength: 20,
      size: 'middle',
      allowClear: true,
      rules: [{
        required: true,
        message: '用户年龄不能为空'
      }]
    },
    {
      name: 'date',
      label: '出生年月日',
      placeholder: '请选择用户出生年月',
      type: 'datepicker',
      width: 200,
      maxLength: 20,
      size: 'middle',
      allowClear: true,
      rules: [{
        required: true,
        message: '请选择用户出生年月'
      }]
    },
    {
      name: 'password',
      label: '密码',
      placeholder: '请输入密码',
      type: 'password',
      width: 200,
      maxLength: 20,
      size: 'middle',
      allowClear: true,
      rules: [{
        required: true,
        message: '密码不能为空'
      }]
    }, {
      name: 'passwordAgain',
      label: '确认密码',
      placeholder: '请再次输入密码',
      type: 'password',
      width: 200,
      maxLength: 20,
      size: 'middle',
      allowClear: true,
      rules: [{
        required: true,
        message: '密码不能为空'
      }]
    }, {
      name: 'info',
      label: '备注',
      placeholder: '请输入备注信息',
      type: 'textarea',
      width: 300,
      rules: []
    }
  ]
}

export {
  addUserDetail
}