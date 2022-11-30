import React, {Component} from 'react'
import {Button, DatePicker, Space} from 'antd'
import {WechatOutlined, SearchOutlined} from '@ant-design/icons'

export default class App extends Component {


  render() {
    return (
      <div>
        <Space direction="vertical">
          <button>btn</button>
          <Button type="primary">Primary Button</Button>
          <Button>Primary Button</Button>
          <WechatOutlined/>
          <Button type="primary" icon={<SearchOutlined/>}>
            Search
          </Button>
          <DatePicker/>
        </Space>
      </div>
    )
  }
}

