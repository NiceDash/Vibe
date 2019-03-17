import React, {Component} from 'react';
import {
  Row,
  Col,
  Card,
  CardBody
} from 'reactstrap';

class GridPage extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Row>
          <Col xs={12}>
            <Card>
              <CardBody>12 Columns</CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Card>
              <CardBody>6 Columns</CardBody>
            </Card>
          </Col>
          <Col xs={6}>
            <Card>
              <CardBody>6 Columns</CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Card>
              <CardBody>4 Columns</CardBody>
            </Card>
          </Col>
          <Col xs={4}>
            <Card>
              <CardBody>4 Columns</CardBody>
            </Card>
          </Col>
          <Col xs={4}>
            <Card>
              <CardBody>4 Columns</CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <Card>
              <CardBody>3 Columns</CardBody>
            </Card>
          </Col>
          <Col xs={3}>
            <Card>
              <CardBody>3 Columns</CardBody>
            </Card>
          </Col>
          <Col xs={3}>
            <Card>
              <CardBody>3 Columns</CardBody>
            </Card>
          </Col>
          <Col xs={3}>
            <Card>
              <CardBody>3 Columns</CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <Card>
              <CardBody>2 Columns</CardBody>
            </Card>
          </Col>
          <Col xs={2}>
            <Card>
              <CardBody>2 Columns</CardBody>
            </Card>
          </Col>
          <Col xs={2}>
            <Card>
              <CardBody>2 Columns</CardBody>
            </Card>
          </Col>
          <Col xs={2}>
            <Card>
              <CardBody>2 Columns</CardBody>
            </Card>
          </Col>
          <Col xs={2}>
            <Card>
              <CardBody>2 Columns</CardBody>
            </Card>
          </Col>
          <Col xs={2}>
            <Card>
              <CardBody>2 Columns</CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={1}>
            <Card>
              <CardBody>1 Col</CardBody>
            </Card>
          </Col>
          <Col xs={1}>
            <Card>
              <CardBody>1 Col</CardBody>
            </Card>
          </Col>
          <Col xs={1}>
            <Card>
              <CardBody>1 Col</CardBody>
            </Card>
          </Col>
          <Col xs={1}>
            <Card>
              <CardBody>1 Col</CardBody>
            </Card>
          </Col>
          <Col xs={1}>
            <Card>
              <CardBody>1 Col</CardBody>
            </Card>
          </Col>
          <Col xs={1}>
            <Card>
              <CardBody>1 Col</CardBody>
            </Card>
          </Col>
          <Col xs={1}>
            <Card>
              <CardBody>1 Col</CardBody>
            </Card>
          </Col>
          <Col xs={1}>
            <Card>
              <CardBody>1 Col</CardBody>
            </Card>
          </Col>
          <Col xs={1}>
            <Card>
              <CardBody>1 Col</CardBody>
            </Card>
          </Col>
          <Col xs={1}>
            <Card>
              <CardBody>1 Col</CardBody>
            </Card>
          </Col>
          <Col xs={1}>
            <Card>
              <CardBody>1 Col</CardBody>
            </Card>
          </Col>
          <Col xs={1}>
            <Card>
              <CardBody>1 Col</CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default GridPage;
