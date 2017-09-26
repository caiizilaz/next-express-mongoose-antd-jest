import { Footer as Foot, Container, Content } from 're-bulma'

const Footer = () => (
  <Foot>
    <Container>
      <Content>
        <p style={{ textAlign: 'center' }}>
          <strong>reBulma</strong> by <a href="https://github.com/bokuweb">bokuweb</a>. The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
      </p>
        <p style={{ textAlign: 'center' }}>
          <a className="icon" href="https://github.com/bokuweb/re-bulma">
            <i className="fa fa-github"></i>
          </a>
        </p>
      </Content>
    </Container>
  </Foot>
)

export default Footer
