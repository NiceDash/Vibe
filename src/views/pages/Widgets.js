import React from 'react';
import * as Feather from 'react-feather';
import { Row, Col, Card } from 'reactstrap';
import TabWidget from './widgets/TabWidget';
import ProfileWidget from './widgets/ProfileWidget';
import AnalyticsWidget from './widgets/AnalyticsWidget';
import StorageWidget from './widgets/StorageWiget';
import TrafficWidget from './widgets/TrafficWidget';
import RatingWidget from './widgets/RatingWidget';

export default function Widgets() {
  return (
    <Row>
      <Col md={4}>
        <TrafficWidget />
        <ProfileWidget />
      </Col>
      <Col md={4}>
        <AnalyticsWidget />
        <StorageWidget />
      </Col>
      <Col md={4}>
        <Card body>
          <div className="text-center">
            <h2 className="h5 text-muted text-uppercase">Bounce Rate</h2>
            <span className="h2">
              <Feather.BarChart2 /> 2.7%
            </span>
          </div>
        </Card>
        <TabWidget />
        <Card body>
          <div>
            <span className="h4">
              <Feather.Headphones /> 3 Missed Messages
            </span>
          </div>
        </Card>
        <RatingWidget />
      </Col>
    </Row>
  );
}
