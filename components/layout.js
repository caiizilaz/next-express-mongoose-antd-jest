import Header from './Header'
import stylesheet from 'styles/global.scss'

const Layout = (props) => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' />
    <Header />
    <div>
      {props.children}
    </div>
  </div>
)

export default Layout