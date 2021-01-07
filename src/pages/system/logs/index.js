import React, { Fragment, Component } from 'react'
import { Card, Table } from 'antd'
import { connect } from 'react-redux'
import Search from '../../../components/Search'
import moment from 'moment'
import { LogsSearchData, LogsBtnList } from '../../../components/Common/searchList'
import { actionCreators } from '../store'

class Logs extends Component {
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
      query,
      handlePagination,
      changeDetailStatus
    } = this.props
    let logs = []
    for (let i = 1; i <= 50; i++) {
      logs.push(
        {
          "id": i,
          "username": "wanbin--" + i,
          "operationModel": "登录",
          "loginAddress": "{\"ip\":\"47.99.130.140\",\"location\":{\"lat\":30.27415,\"lng\":120.15515},\"ad_info\":{\"nation\":\"中国\",\"province\":\"浙江省\",\"city\":\"杭州市\",\"district\":\"\",\"adcode\":330100}}",
          "operationTime": 1605514220426,
          "avatar": "http://47.99.130.140:8888/public/images/default.png",
          "gender": i % 2
        }
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
        title: '登录地点',
        dataIndex: 'loginAddress',
        align: 'center',
        render: (data) => {
          const item = data && JSON.parse(data)
          if (item) {
            return `${item.ip}(${item.ad_info.city})`
          }
        },
        ellipsis: true
      },
      {
        title: '操作模块',
        dataIndex: 'operationModel',
        align: 'center',
        ellipsis: true
      },
      {
        title: '操作时间',
        dataIndex: 'operationTime',
        align: 'center',
        render: (item) => item && moment(item).format('YYYY-MM-DD HH:mm:ss'),
        ellipsis: true
      },
      {
        title: '性别',
        dataIndex: 'gender',
        align: 'center',
        render: (item) => item && item ? '男' : '女',
        ellipsis: true
      },
      {
        title: '操作',
        key: 'active',
        align: 'center',
        width: 150,
        fixed: 'right',
        render: (item) => (
          <div style={{ textAlign: "center" }}>
            <span className='my-a' onClick={() => changeDetailStatus(item)}>查看</span>
          </div>
        ),
        ellipsis: true
      }
    ]
    return (
      <Fragment>
        <Card>
          <Search
            searchData={LogsSearchData}
            butList={LogsBtnList}
            handleClick={(type, params) => this.handleClick(type, params)}
          />
          <Card>
            <Table
              bordered
              size="small"
              rowKey='id'
              columns={colums}
              dataSource={logs}
              pagination={{
                // showSizeChanger: true,
                showTotal: total => `共 ${total} 条`,
                onChange: ((page, pageSize) => {
                  handlePagination(page, pageSize)
                })
              }}
            />
          </Card>
        </Card>
      </Fragment>
    )
  }
}

const MapState = (state) => {
  return {
    pagination: state.getIn(['system', 'pagination']),
    query: state.getIn(['system', 'query'])
  }
}

const MapDispatch = (dispatch) => {
  return {
    handlePagination(page, pageSize) {
      const query = {
        pageNumber: page,
        pageSize: pageSize
      }
      dispatch(actionCreators.setChangePagination(query))
    }
  }
}

export default connect(MapState, MapDispatch)(Logs)