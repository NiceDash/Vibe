import React from 'react';
import { Card, CardBody, Col, Row, Button } from 'reactstrap';
import { Loader } from '../../vibe/';
import PageLoaderContext from '../../vibe/components/PageLoader/PageLoaderContext';

export default function Loaders() {
  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <h4>Spinners</h4>
          <Row>
            <Col md={3}>
              <Loader type="spin" />
            </Col>
            <Col md={3}>
              <Loader type="bars" />
            </Col>
            <Col md={3}>
              <Loader type="puff" />
            </Col>
            <Col md={3}>
              <Loader type="dots" />
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <h4>Spinners - small</h4>
          <Row>
            <Col md={3}>
              <Loader type="spin" small />
            </Col>
            <Col md={3}>
              <Loader type="bars" small />
            </Col>
            <Col md={3}>
              <Loader type="puff" small />
            </Col>
            <Col md={3}>
              <Loader type="dots" small />
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <h4>Page Loader</h4>
          <PageLoaderContext.Consumer>
            {context => (
              <Button onClick={context.loadPage}>Set Page Loader</Button>
            )}
          </PageLoaderContext.Consumer>
        </CardBody>
      </Card>
    </React.Fragment>
  );
}
