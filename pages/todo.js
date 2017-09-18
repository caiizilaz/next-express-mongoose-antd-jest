import React, { Component } from 'react'
import Layout from '../components/layout'
import stylesheet from 'styles/todo.scss'

export default class Todo extends Component {
  render() {
    return (
      <div>
        <Layout>
        </Layout>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <h1>Todo's Page</h1>
      </div>
    )
  }
}
