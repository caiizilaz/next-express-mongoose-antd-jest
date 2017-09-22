import stylesheet from '~/styles/components/test-chart.scss'
import { VictoryPie } from 'victory'


export default (params) => (
  <div className={'test-chart-container'}>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <VictoryPie />
  </div>
)