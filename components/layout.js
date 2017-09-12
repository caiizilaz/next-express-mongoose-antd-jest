import Head from 'next/head'
import { LocaleProvider } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US'

export default ({ children }) => (
  <div>
    <Head>
      <link rel='stylesheet' href='http://cdn.bootcss.com/antd/2.9.3/antd.css' />
    </Head>
    <LocaleProvider locale={enUS}>
      {children}
    </LocaleProvider>
  </div>
)