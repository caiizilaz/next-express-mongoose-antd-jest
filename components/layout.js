import Header from './Header'
import Footer from './Footer'
import stylesheet from 'styles/global.scss'
import Head from 'next/head'

const Layout = (props) => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <Head>
      <link rel='stylesheet' href='../static/lib/font-awesome/css/font-awesome.min.css' />
      <link href='../static/lib/mapbox-gl.css' rel='stylesheet' />
    </Head>
    <Header />
    <div>
      {props.children}
    </div>
    <Footer />
  </div>
)

export default Layout