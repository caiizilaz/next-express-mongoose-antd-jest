import { Menu, Icon } from 'antd'
import React, { Component } from 'react'
import Link from 'next/link'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup

export default class Nav extends Component {
  handleClick = (e) => {
    console.log('click ', e)
    this.setState({
      current: e.key,
    })
  }
  state = {
    current: 'home',
  }
  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          theme="dark"
          mode="horizontal"
        >
          <Menu.Item key="home">
            <Icon type="home" />Home
          </Menu.Item>
          <Menu.Item key="app">
            <Icon type="appstore" />Todo App
          </Menu.Item>
          <SubMenu title={<span><Icon type="setting" />Under Construct</span>} disabled>
            <MenuItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </MenuItemGroup>
          </SubMenu>
          <Menu.Item key="flukky">
            <a href="https://github.com/caiizilaz/next-express-mongoose-antd-jest" target="_blank" rel="noopener noreferrer">Github Repo</a>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}