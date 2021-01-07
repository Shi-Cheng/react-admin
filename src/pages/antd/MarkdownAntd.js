import React, { Component } from 'react'
import { Card } from 'antd'
import { connect } from 'react-redux'
import Editor from 'for-editor'
import { actionCreators } from './store'

class MarkdownAntd extends Component {
  render() {
    const { markdownValue, markdownValueChange } = this.props
    return (
      <Card>
        <Editor
          value={markdownValue}
          style={{ height: '720px' }}
          onChange={markdownValueChange}
        >
        </Editor>
      </Card>
    )
  }
}

const mapState = (state) => {
  return {
    markdownValue: state.getIn(['antd', 'markdownValue'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    markdownValueChange(value) {
      dispatch(actionCreators.setMarkdownValue(value))
    }
  }
}


export default connect(mapState, mapDispatch)(MarkdownAntd)
