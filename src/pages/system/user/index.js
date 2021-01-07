import React, { PureComponent } from 'react'
import { Card, Table, Divider, Popconfirm } from 'antd'
import moment from 'moment'
import MyIcon from '../../../components/MyIcon'
import Detail from '../../../components/Detail'
import Add from '../../../components/Add'
import Search from '../../../components/Search'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { UserBtnList, UserSearch } from '../../../components/Common/searchList'
import { addUserDetail } from '../../../components/Common/addList'
import { detailUser } from '../../../components/Common/detailList'

class User extends PureComponent {
  singleDelete(item) {
    console.log(item)
  }
  handleClick(type, searchParams) {
    if (searchParams) {
      console.log(type)
      console.log(searchParams)
    } else {
      this.props.setAddUserStatus(true)
    }
  }
  render() {
    const {
      detailVisibleStatus,
      changeDetailStatus,
      onCancle,
      userInfo,
      handlePagination,
      query,
      userAddVisibleStatus,
      setAddUserStatus,
      addUserData
    } = this.props
    const users = []
    for (let i = 1; i <= 50; i++) {
      users.push(
        {
          "id": i,
          "username": `wangwei-${i}`,
          "registrationAddress": "{\"ip\":\"47.99.130.140\",\"location\":{\"lat\":30.27415,\"lng\":120.15515},\"ad_info\":{\"nation\":\"中国\",\"province\":\"浙江省\",\"city\":\"杭州市\",\"district\":\"\",\"adcode\":330100}}",
          "registrationTime": 1604910213454,
          "lastLoginAddress": "{\"ip\":\"47.99.130.140\",\"location\":{\"lat\":30.27415,\"lng\":120.15515},\"ad_info\":{\"nation\":\"中国\",\"province\":\"浙江省\",\"city\":\"杭州市\",\"district\":\"\",\"adcode\":330100}}",
          "lastLoginTime": 1604910222192,
          "isAdmin": 0,
          "avatar": "http://47.99.130.140:8888/public/images/default.png",
          "birth": null,
          "phone": null,
          "location": null,
          "gender": null
        },
      )
    }
    const colums = [
      {
        title: '序号',
        key: 'num',
        align: 'center',
        width: 80,
        render: (text, record, index) => {
          let num = ''
          if (!query.pageNumber) {
            num = index < 9 ? `0${index + 1}` : `${index + 1}`
          } else {
            if (query.pageNumber === 1) {
              num = index < 9 ? `0${index + 1}` : `${index + 1}`
            } else {
              num = `${(query.pageNumber - 1) * 10 + index + 1}`
            }
          }
          return num
        }
      }, {
        title: '用户名',
        dataIndex: 'username',
        align: 'center',
        ellipsis: true
      }, {
        title: '注册地址',
        dataIndex: 'registrationAddress',
        align: 'center',
        render: (data) => {
          const item = data && JSON.parse(data)
          if (item) {
            return `${item.ip}(${item.ad_info.city})`
          }
        },
        ellipsis: true
      }, {
        title: '注册时间',
        dataIndex: 'registrationTime',
        align: 'center',
        render: (item) => item && moment(item).format('YYYY-MM-DD HH:mm:ss'),
        ellipsis: true
      }, {
        title: '操作',
        key: 'active',
        align: 'center',
        width: 150,
        fixed: 'right',
        render: (item) => (
          <div style={{ textAlign: "center" }}>
            <span className='my-a' onClick={() => changeDetailStatus(item)}> <MyIcon type="icon-nav-list"></MyIcon>查看</span>
            <Popconfirm title='您确定删除当前用户吗？' onConfirm={() => this.singleDelete(item)}>
              <span className='my-a'><Divider type='vertical' /> 删除</span>
            </Popconfirm>
          </div>
        ),
        ellipsis: true
      }
    ]
    return (
      <Card>
        <Search

          searchData={UserSearch}
          butList={UserBtnList}
          handleClick={(type, params) => this.handleClick(type, params)}
        />
        <Card>
          <Table
            bordered
            rowKey='id'
            columns={colums}
            dataSource={users}
            size="small"
            pagination={{
              // pageSizeOptions: ["10", "20", "50"],
              // showSizeChanger: true,
              showTotal: total => `共 ${total} 条`,
              // 改变页码时
              onChange: ((page, pageSize) => {
                handlePagination(page, pageSize)
              }),
            }}
          />
        </Card>
        <Detail
          visiable={detailVisibleStatus}
          detailList={detailUser}
          detailData={userInfo}
          handleCancle={onCancle}
          handleClose={() => this.handleClose()}
        />
        <Add
          visiable={userAddVisibleStatus}
          setAddUserStatus={setAddUserStatus}
          addUserDetail={addUserDetail}
          handleAddUser={addUserData}
        />
      </Card>
    )
  }
}

const MapState = (state) => {
  return {
    detailVisibleStatus: state.getIn(['system', 'detailVisibleStatus']),
    userAddVisibleStatus: state.getIn(['system', 'userAddVisibleStatus']),
    userInfo: state.getIn(['system', 'userInfo']),
    pagination: state.getIn(['system', 'pagination']),
    query: state.getIn(['system', 'query'])
  }
}

const MapDispatch = (dispatch) => {
  return {
    onCancle() {
      dispatch(actionCreators.setSystemDetailStatus(false))
    },
    changeDetailStatus(item) {
      dispatch(actionCreators.setHandleDetail(item))
    },
    setAddUserStatus(status) {
      dispatch(actionCreators.setSystemUserAdd(status))
    },
    addUserData(data) {
      console.log(data)
    },
    handlePagination(page, pageSize) {
      const query = {
        pageNumber: page,
        pageSize: pageSize
      }
      dispatch(actionCreators.setChangePagination(query))
    }
  }
}


export default connect(MapState, MapDispatch)(User)