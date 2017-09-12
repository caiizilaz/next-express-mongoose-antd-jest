import React from 'react'
import Layout from '../components/layout'
import { DatePicker, Button, Input } from 'antd'

export default () => (
  <Layout>
    <div>
      <DatePicker type="primary">Primary</DatePicker>
      <Button>ZZZ</Button>
      <Input></Input>
    </div>
  </Layout>
)