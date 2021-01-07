import React, { Component, Fragment } from 'react'
import { Card, Row, Col } from 'antd'
import { EditorState } from 'draft-js'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs'
// import draftToMarkdown from 'draftjs-to-markdown';
import '../../styles/editor.less'

const rawContentState = {
  entityMap: { '0': { type: 'IMAGE', mutability: 'MUTABLE', data: { src: 'http://i.imgur.com/aMtBIep.png', height: 'auto', width: '100%' } } },
  blocks: [{ key: '9unl6', text: '', type: 'unstyled', depth: 0, inlineStyleRanges: [], entityRanges: [], data: {} }, { key: '95kn', text: ' ', type: 'atomic', depth: 0, inlineStyleRanges: [], entityRanges: [{ offset: 0, length: 1, key: 0 }], data: {} }, { key: '7rjes', text: '', type: 'unstyled', depth: 0, inlineStyleRanges: [], entityRanges: [], data: {} }]
};

class TextEditAntd extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editorState: EditorState.createEmpty(),
      editorContent: undefined,
      contentState: rawContentState,
    }
  }
  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    })
  }
  onEditorChange = (editorContent) => {
    this.setState({
      editorContent
    })
  }
  editorChange() {

  }
  imageUploadCallBack = file =>
    new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest(); // eslint-disable-line no-undef
      xhr.open('POST', 'https://api.imgur.com/3/image');
      xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca');
      const data = new FormData(); // eslint-disable-line no-undef
      data.append('image', file);
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });

  render() {
    return (
      <Fragment>
        <div className="shadow-radius">
          <div className="gutter-example button-demo editor-demo">
            <Row gutter={16} style={{ padding: '0 5px' }}>
              <Col className="gutter-row" md={24} >
                <div className="gutter-box">
                  <Card title="富文本编辑器" bordered={false}>
                    <Editor
                      editorState={this.state.editorState}
                      toolbarClassName="home-toolbar"
                      wrapperClassName="home-wrapper"
                      editorClassName="home-editor"
                      toolbar={{
                        history: { inDropdown: true },
                        inline: { inDropdown: false },
                        list: { inDropdown: true },
                        textAlign: { inDropdown: true },
                        image: { uploadCallback: this.imageUploadCallBack }
                      }}
                      onEditorStateChange={this.onEditorStateChange}
                      onContentStateChange={this.onEditorChange}
                      onChange={this.editorChange.bind(this)}
                      placeholder="请输入正文~~尝试@哦，有惊喜"
                      spellCheck
                      onFocus={() => {
                        console.log('focus');
                      }}
                      onBlur={() => {
                        console.log('blur');
                      }}
                      onTab={() => {
                        console.log('tab');
                        return true;
                      }}
                      localization={{ locale: 'zh', translations: { 'generic.add': 'Test-Add' } }}
                      mention={{
                        separator: ' ',
                        trigger: '@',
                        caseSensitive: true,
                        suggestions: [{ text: 'A', value: 'AB', url: 'href-a' }, { text: 'AB', value: 'ABC', url: 'href-ab' }, { text: 'ABC', value: 'ABCD', url: 'href-abc' }, { text: 'ABCD', value: 'ABCDDDD', url: 'href-abcd' }, { text: 'ABCDE', value: 'ABCDE', url: 'href-abcde' }, { text: 'ABCDEF', value: 'ABCDEF', url: 'href-abcdef' }, { text: 'ABCDEFG', value: 'ABCDEFG', url: 'href-abcdefg' }]
                      }}
                    />
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" md={12}>
                <Card title="同步转换HTML" bordered={false}>
                  <pre>{draftToHtml(this.state.editorContent)}</pre>
                </Card>
              </Col>
              <Col className="gutter-row" md={12}>
                <Card title="同步转换JSON" bordered={false}>
                  <pre style={{ whiteSpace: 'normal' }}>{JSON.stringify(this.state.editorContent)}</pre>
                </Card>
              </Col>
              {/* <Col className="gutter-row" md={8}>
                <Card title="同步转换Draft" bordered={false}>
                  <pre style={{ whiteSpace: 'normal' }}>{htmlToDraft(this.state.editorContent)}</pre>
                </Card>
              </Col> */}
            </Row>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default TextEditAntd