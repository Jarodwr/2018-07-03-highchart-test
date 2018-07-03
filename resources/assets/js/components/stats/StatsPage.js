import React from 'react';
import { Container, Row, Col, Alert } from 'reactstrap';
import ReactHighstock from 'react-highcharts/ReactHighstock';
import Loader from 'react-dots-loader';

class StatsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      config: {
        rangeSelector: {
          selected: 1
        },
        title: {
          text: 'Qualcomm Stock Price'
        },
        series: [{
          name: 'QCOM',
          data: [],
          tooltip: {
            valueDecimals: 2
          }
        }],
      }
    }
  }

  componentDidMount() {
    fetch('/api/price_data&start=2017-06-01&end=2018-06-01')
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(responseJson => {
        let priceData = responseJson.data.map(element => {
          return [Date.parse(element.DATE), Number(element.CLOSE)]
        })
        priceData.sort((a, b) => {
          return a[0] > b[0]
        })


        let current = { high: [0, 0], low: null, profit: 0 }
        let best = { high: null, low: null, profit: 0 }

        for (let i = priceData.length - 1; i > 0; i--) {
          let dateData = priceData[i];
          if (dateData[1] > current.high[1]) {
            current.high = [i, dateData[1]];
            current.low = [i, dateData[1]];
          }
          if (dateData[1] < current.low[1]) {
            current.low = [i, dateData[1]];
          }
          current.profit = current.high[1] - current.low[1];
          if (current.profit > best.profit) {
            best.high = current.high
            best.low = current.low
            best.profit = +current.profit.toPrecision(10)
          }
        }
        this.setState({
          best: best.profit,
          config: {
            rangeSelector: {
              selected: 1
            },
            title: {
              text: 'Qualcomm Stock Price'
            },
            series: [{
                name: 'QCOM',
                data: priceData,
                tooltip: {
                  valueDecimals: 2
                }
              },
              {
                name: 'Maximum Profit Period',
                data: priceData.slice(best.low[0], best.high[0]+1),
                enableMouseTracking: false,
                color: '#ff0000'
              }
            ]
          }
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    let AlertContents = this.state.best != null ? "Maximum profit from single buy/sell: " + this.state.best : <Loader/>
    return (
      <Container fluid>
      <Row>
        <Col sm={false} lg={3}/>
        <Col sm={12} lg={6}>
          <h1 className="mt-1">Stats</h1>
          <ReactHighstock config={this.state.config}> </ReactHighstock>
          <Alert color={'info'}>{AlertContents}</Alert>
        </Col>
      </Row>
      </Container>
    );
  }
}

export default StatsPage;
