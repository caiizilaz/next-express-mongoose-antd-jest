import React, { Component } from 'react'
import Layout from '~/components/Layout'
import stylesheet from 'styles/index.scss'

export default class Index extends Component {
  render() {
    return (
      <div>
        <Layout>
          <h1>index</h1>
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Layout>
      </div>
    )
  }
}
