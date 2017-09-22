import Layout from '~/components/Layout'
import stylesheet from 'styles/statistic.scss'
import TestChart from '~/components/charts/TestChart'
import TestChart2 from '~/components/charts/TestChart2'

export default () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <Layout>
    </Layout>
    <h1>statistic</h1>
    <TestChart></TestChart>
    <TestChart2></TestChart2>
  </div>
)

