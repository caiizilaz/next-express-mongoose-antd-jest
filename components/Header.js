import Link from 'next/link'
import insertCss from 'insert-css';
import css from 're-bulma/build/css';
import { Nav, NavGroup, NavItem, NavToggle, Button, Icon } from 're-bulma'

const layoutStyle = {
  padding: 10,
  borderBottom: '1px solid #ddd'
}

try {
  if (typeof document !== 'undefined' || document !== null) insertCss(css, { prepend: true });
} catch (e) { }

const Header = () => (
  <Nav style={layoutStyle}>
    <NavGroup align="left">
      <NavItem>
        Nav Item
    </NavItem>
    </NavGroup>
    <NavGroup align="center">
      <NavItem>
        <Icon icon="fa fa-github" />
      </NavItem>
      <NavItem>
        <Icon icon="fa fa-twitter" />
      </NavItem>
    </NavGroup>
    <NavToggle />
    <NavGroup align="right" isMenu>
      <NavItem>
        <Link href="/">
          <a>Home</a>
        </Link>
      </NavItem>
      <NavItem>
        <Link href="/statistic">
          <a>Statistic</a>
        </Link>
      </NavItem>
      <NavItem>
        Blog
      </NavItem>
      <NavItem>
        <Button icon="fa fa-twitter">Tweet</Button>
        <Button icon="fa fa-download">Download</Button>
      </NavItem>
    </NavGroup>
  </Nav>


)

export default Header