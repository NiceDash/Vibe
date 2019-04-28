import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Progress,
  Button
} from 'reactstrap';
import { Switch } from '../../vibe';
import { Doughnut, Line } from 'react-chartjs-2';

export default class AnalyticsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      facebook: true,
      twitter: false
    };
  }

  render() {
    const chartColors = {
      red: 'rgb(233, 30, 99)',
      danger: 'rgb(233, 30, 99)',
      dangerTransparent: 'rgba(233, 30, 99, .8)',
      orange: 'rgb(255, 159, 64)',
      yellow: 'rgb(255, 180, 0)',
      green: 'rgb(34, 182, 110)',
      blue: 'rgb(68, 159, 238)',
      primary: 'rgb(68, 159, 238)',
      primaryTransparent: 'rgba(68, 159, 238, .8)',
      purple: 'rgb(153, 102, 255)',
      grey: 'rgb(201, 203, 207)',

      primaryShade1: 'rgb(68, 159, 238)',
      primaryShade2: 'rgb(23, 139, 234)',
      primaryShade3: 'rgb(14, 117, 202)',
      primaryShade4: 'rgb(9, 85, 148)',
      primaryShade5: 'rgb(12, 70, 117)'
    };
    const donutData = {
      labels: ['Q1', 'Q2', 'Q3'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            chartColors.primaryShade1,
            chartColors.primaryShade2,
            chartColors.primaryShade3
          ],
          hoverBackgroundColor: [
            chartColors.primaryShade4,
            chartColors.primaryShade4,
            chartColors.primaryShade4
          ]
        }
      ]
    };
    const line = {
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: '# of Votes',
            data: [3, 6, 4, 10, 8, 12],
            borderColor: 'transparent',
            backgroundColor: chartColors.primary,
            pointBackgroundColor: 'rgba(0,0,0,0)',
            pointBorderColor: 'rgba(0,0,0,0)',
            borderWidth: 4
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              display: false
            }
          ],
          yAxes: [
            {
              display: false
            }
          ]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false
        }
      }
    };
    return (
      <div>
        <div className="m-b">
          <h2>Good morning!</h2>
          <p className="text-muted">
            Here's what's going on with your business today.
          </p>
        </div>
        <Row>
          <Col md={4} xs={12}>
            <Card>
              <CardHeader>
                Page Views{' '}
                <Button size="sm" className="pull-right">
                  View
                </Button>
              </CardHeader>
              <CardBody>
                <h2 className="m-b-20 inline-block">
                  <span>13K</span>
                </h2>{' '}
                <i
                  className="fa fa-caret-down text-danger"
                  aria-hidden="true"
                />
                <Progress value={77} color="warning" />
              </CardBody>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card>
              <CardHeader>
                Product Sold{' '}
                <Button size="sm" className="pull-right">
                  View
                </Button>
              </CardHeader>
              <CardBody>
                <h2 className="m-b-20 inline-block">
                  <span>1,890</span>
                </h2>{' '}
                <i className="fa fa-caret-up text-danger" aria-hidden="true" />
                <Progress value={77} color="success" />
              </CardBody>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card>
              <CardHeader>
                Server Capacity{' '}
                <Button size="sm" className="pull-right">
                  View
                </Button>
              </CardHeader>
              <CardBody>
                <h2 className="inline-block">
                  <span>14%</span>
                </h2>
                <Progress value={14} color="primary" />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={8} sm={12}>
            <Card>
              <CardHeader>Traffic</CardHeader>
              <CardBody>
                <div className="full-bleed">
                  <Line
                    data={line.data}
                    width={2068}
                    height={846}
                    legend={{ display: false }}
                    options={line.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card>
              <CardHeader>Product Views</CardHeader>
              <CardBody>
                <Doughnut
                  data={donutData}
                  width={908}
                  height={768}
                  legend={{ display: false }}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md={8} sm={12}>
            <Card>
              <CardHeader>Conversions</CardHeader>
              <CardBody>
                <Row className="m-b-md">
                  <Col xs={4}>
                    <h5>Added to Cart</h5>
                    <div className="h2">4.30%</div>
                    <small className="text-muted">23 Visitors</small>
                  </Col>
                  <Col xs={4}>
                    <h5>Reached Checkout</h5>
                    <div className="h2">2.93</div>
                    <small className="text-muted">12 Visitors</small>
                  </Col>
                  <Col xs={4}>
                    <h5>Pruchased</h5>
                    <div className="h2">10</div>
                    <small className="text-muted">10 Customers</small>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md={4} xs={12}>
            <Card>
              <CardHeader>Integrations</CardHeader>
              <CardBody>
                <Switch
                  enabled={this.state.facebook}
                  toggle={() => {
                    this.setState(prevState => ({ facebook: !prevState.facebook }));
                  }}
                />
                <span className="text-facebook pull-right">
                  <i className="fa fa-facebook" /> Facebook
                </span>
                <hr />
                <Switch
                  enabled={this.state.twitter}
                  toggle={() => {
                    this.setState(prevState => ({ twitter: !prevState.twitter }));
                  }}
                />
                <span className="text-twitter pull-right">
                  <i className="fa fa-twitter" /> Twitter
                </span>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
