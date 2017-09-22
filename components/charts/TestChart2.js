import React, { Component } from 'react'
import { VictoryChart, VictoryBar } from 'victory'
import { range, random } from 'lodash'

export default class TestChart2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.getData()
    };
  }

  componentDidMount() {
    this.setStateInterval = window.setInterval(() => {
      this.setState({
        data: this.getData()
      });
    }, 3000);
  }

  componentWillUnmount() {
    window.clearInterval(this.setStateInterval);
  }

  getData() {
    return range(random(2, 10)).map((bar) => {
      return { x: bar + 1, y: random(2, 10) };
    });
  }
  render() {
    return (
      <div>
        <VictoryChart
          domainPadding={{ x: 20 }}
          animate={{ duration: 1000 }}
        >
          <VictoryBar
            data={this.state.data}
            style={{
              data: { fill: "tomato", width: 12 }
            }}
            animate={{
              onExit: {
                duration: 1000,
                before: () => ({
                  _y: 0,
                  fill: "orange",
                  label: "BYE"
                })
              }
            }}
          />
        </VictoryChart>
      </div>
    )
  }
}
