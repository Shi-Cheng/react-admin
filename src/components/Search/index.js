import React, { Fragment, Component } from 'react'
import { Form, Input, Col, Button, DatePicker, Select } from 'antd'
import '../../styles/main.less'
import 'antd/dist/antd.css'
import { getSearchParams } from '../../utils/search'

const BUTTON_TYPE = ['submit', 'button']
const SEARCH_TYPE = ['input', 'select', 'date']

class Search extends Component {

  searchRef = React.createRef()
  getSearchList(searchList) {
    if (searchList && searchList.length) {
      let searchItem = []
      for (let i = 0; i < searchList.length; i++) {
        if (searchList[i].type === SEARCH_TYPE[0]) {
          searchItem.push(
            <Form.Item
              className='search-left-item'
              key={searchList[i].enLabel}
              name={searchList[i].enLabel}
              label={searchList[i].cnLabel}
              colon={false}
            >
              <Input placeholder={searchList[i].cnLabel} style={{ width: searchList[i].width }} />
            </Form.Item>
          )
        }
        if (searchList[i].type === SEARCH_TYPE[1]) {
          searchItem.push(
            <Form.Item
              className='search-left-item'
              key={searchList[i].enLabel}
              name={searchList[i].enLabel}
              label={searchList[i].cnLabel}
              colon={false}
            >
              <Select
                placeholder={searchList[i].cnLabel}
                style={{ width: searchList[i].width, textAlign: 'left' }}
                allowClear={true}
              >
                {
                  searchList[i].options.map(option => {
                    return <Select.Option value={option.value} key={option.value}>{option.label}</Select.Option>
                  })
                }
              </Select>
            </Form.Item>
          )
        }
        if (searchList[i].type === SEARCH_TYPE[2]) {
          searchItem.push(
            <Form.Item
              className='search-left-item'
              key={searchList[i].enLabel}
              name={searchList[i].enLabel}
              label={searchList[i].cnLabel}
              colon={false}
            >
              <DatePicker placeholder={searchList[i].cnLabel} style={{ width: searchList[i].width }} />
            </Form.Item>
          )
        }
      }
      return searchItem
    }
  }

  getBtnList(butList, searchData) {
    if (butList && butList.length > 0) {
      let butItem = []
      for (let i = 0; i < butList.length; i++) {
        butItem.push(
          <Button
            className='search-right-item'
            key={`${butList[i].name}`}
            type={`${butList[i].type}`}
            htmlType={`${butList[i].htmlType}`}
            onClick={() => {
              switch (butList[i].htmlType) {
                case BUTTON_TYPE[0]:
                  let searchItemEnLabel = []
                  searchData.forEach(item => {
                    searchItemEnLabel.push(item.enLabel)
                  });
                  return this.handleBth(butList[i].click, searchItemEnLabel)
                case BUTTON_TYPE[1]:
                  return this.handleBth(butList[i].click)
                default:
                  return false
              }
            }}
          >
            {butList[i].name}
          </Button>
        )
      }
      return butItem
    }
  }

  handleBth(type, searchItemEnLabel) {
    if (searchItemEnLabel) {
      let searchParams = getSearchParams(this.searchRef.current, searchItemEnLabel)
      this.props.handleClick(type, searchParams)
    } else {
      this.props.handleClick(type)
    }
  }
  render() {
    const { searchData, butList } = this.props
    return (
      <Fragment>
        <Form
          layout='inline'
          className="ant-advanced-search-form"
          ref={this.searchRef}
        >
          <Col span={14} className='search-left' >
            {
              this.getSearchList(searchData)
            }
          </Col>
          <Col span={10} className='search-right'>
            {
              this.getBtnList(butList, searchData)
            }
          </Col>
        </Form>
      </Fragment >
    )
  }
}

export default Search
